"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { RACES, PROPOSALS, COLUMNS, PARTY_BY_COL, ELECTION, PUBLISHER, TEMPLATE_CREDIT, type Race, type Column, type Oval as OvalT, type Proposal } from "@/data/ballot";
import { RACE_INSIGHTS, PROPOSAL_INSIGHT_MAP, PROPOSALS_CONTEXT, LOGISTICS } from "@/content";
import { STANDARDS } from "@/content/standards";
import { Oval } from "./Oval";
import { Drawer } from "./Drawer";
import { ShareMenu } from "./ShareMenu";
import { RaceInsights, CandidateInsights, ProposalInsights } from "./InsightsPanel";
import {
  EMPTY_PICKS,
  subscribePicks,
  getPicksSnapshot,
  getPicksServerSnapshot,
  parsePicks,
  writePicks,
  toggleOval,
  toggleWriteIn,
  setWriteInName,
  setProposal,
  countMarked,
  writeInId,
  type Picks,
} from "@/lib/picks";
import { buildMarkedBallot, toFile, downloadBlob, PDF_FILENAME } from "@/lib/pdf";
import { buildVotingPlan, combinePlanAndBallot, PLAN_FILENAME, COMBINED_FILENAME } from "@/lib/plan";
import { buildPlannedSticker, STICKER_FILENAME } from "@/lib/sticker";

type Panel =
  | { kind: "race"; id: string }
  | { kind: "candidate"; raceId: string; candidateId: string }
  | { kind: "prop"; id: string }
  | { kind: "info" }
  | { kind: "about" }
  | { kind: "propctx" }
  | null;

/* first-visit intro flag, read through an external store so hydration stays clean */
const INTRO_KEY = "ballot-buddy:intro-dismissed";
let introMemo = false;
const introListeners = new Set<() => void>();
function subscribeIntro(cb: () => void) {
  introListeners.add(cb);
  return () => introListeners.delete(cb);
}
function getIntroDismissed(): boolean {
  try {
    return introMemo || localStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return introMemo;
  }
}

const SHEET1_COLS: Column[] = ["A", "B", "C", "D", "K"];
const SHEET2_COLS: Column[] = ["A", "B", "C", "D"];

interface Row {
  race: Race;
  cells: Partial<Record<Column, OvalT>>;
  writeInSlot: number | null;
  first: boolean;
  span: number;
}

/** Turn a race into the ballot rows it occupies (multi-seat races stack vertically). */
function rowsFor(race: Race): Row[] {
  const byRow = new Map<number, Partial<Record<Column, OvalT>>>();
  for (const o of race.ovals) {
    const row = byRow.get(o.y) ?? {};
    row[o.col] = o;
    byRow.set(o.y, row);
  }
  const ys = [...byRow.keys()].sort((a, b) => a - b);
  const n = Math.max(ys.length, race.writeIns.length);
  const rows: Row[] = [];
  for (let i = 0; i < n; i++) {
    rows.push({
      race,
      cells: byRow.get(ys[i]) ?? {},
      writeInSlot: i < race.writeIns.length ? i : null,
      first: i === 0,
      span: n,
    });
  }
  return rows;
}

function voteForLabel(n: number) {
  return n === 1 ? "Vote for One" : `Vote for any ${["", "One", "Two", "Three", "Four", "Five", "Six"][n] ?? n}`;
}

export function Ballot() {
  const rawPicks = useSyncExternalStore(subscribePicks, getPicksSnapshot, getPicksServerSnapshot);
  const picks = useMemo(() => parsePicks(rawPicks), [rawPicks]);
  const setPicks = useCallback((p: Picks) => writePicks(p), []);
  const [panel, setPanel] = useState<Panel>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const closePanel = useCallback(() => setPanel(null), []);

  const onOval = (race: Race, ovalId: string) => {
    const r = toggleOval(picks, race, ovalId);
    if (r.blocked) setToast(r.blocked);
    else setPicks(r.picks);
  };
  const onWriteInOval = (race: Race, slot: number) => {
    const r = toggleWriteIn(picks, race, slot);
    if (r.blocked) setToast(r.blocked);
    else setPicks(r.picks);
  };
  const onWriteInName = (race: Race, slot: number, name: string) => {
    setPicks(setWriteInName(picks, race, slot, name));
  };
  const onProp = (p: Proposal, v: "yes" | "no") => setPicks(setProposal(picks, p.id, v));

  const progress = useMemo(() => countMarked(picks), [picks]);

  /**
   * One download: the plain-English voting plan first, then the marked sample
   * ballot (the BOE's own file with the voter's ovals filled). Single file
   * because phones refuse a second download started right after the first.
   * "ballot" / "plan" give either piece on its own.
   */
  const makePdf = async (which: "both" | "ballot" | "plan" = "both") => {
    setBusy(true);
    try {
      if (which === "ballot") {
        downloadBlob(toFile(await buildMarkedBallot(picks), PDF_FILENAME).blob, PDF_FILENAME);
      } else if (which === "plan") {
        downloadBlob(toFile(await buildVotingPlan(picks), PLAN_FILENAME).blob, PLAN_FILENAME);
      } else {
        const [ballotBytes, planBytes] = await Promise.all([buildMarkedBallot(picks), buildVotingPlan(picks)]);
        const combined = await combinePlanAndBallot(planBytes, ballotBytes);
        downloadBlob(toFile(combined, COMBINED_FILENAME).blob, COMBINED_FILENAME);
        setToast("One PDF: your voting plan, then your sample ballot.");
      }
    } catch (e) {
      if ((e as Error)?.name !== "AbortError") setToast("Could not build the PDF. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const introDismissed = useSyncExternalStore(subscribeIntro, getIntroDismissed, () => true);
  const dismissIntro = () => {
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
    introMemo = true;
    introListeners.forEach((l) => l());
  };

  const shareSticker = async () => {
    setBusy(true);
    try {
      const url = window.location.host + window.location.pathname.replace(/\/$/, "");
      const blob = await buildPlannedSticker({ url, dateLine: ELECTION.stickerDateLine, publisher: PUBLISHER.name });
      const file = new File([blob], STICKER_FILENAME, { type: "image/png" });
      if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "I planned to vote", text: `I planned to vote. Plan yours at ${url}` });
      } else {
        downloadBlob(blob, STICKER_FILENAME);
        setToast("Sticker saved. Post it anywhere; it has no ballot on it.");
      }
    } catch (e) {
      if ((e as Error)?.name !== "AbortError") setToast("Could not make the sticker. Try again.");
    } finally {
      setBusy(false);
    }
  };

  const clearAll = () => {
    if (progress.marked === 0) return;
    if (window.confirm("Clear every pick on this device?")) setPicks(EMPTY_PICKS);
  };

  const isSelected = (race: Race, id: string) => (picks.races[race.id] ?? []).includes(id);

  const sheet1 = RACES.filter((r) => r.sheet === 1);
  const sheet2 = RACES.filter((r) => r.sheet === 2);

  return (
    <div className="flex min-h-full flex-col pb-28">
      <TopBar onAbout={() => setPanel({ kind: "about" })} onInfo={() => setPanel({ kind: "info" })} />

      <main className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <Intro onAbout={() => setPanel({ kind: "about" })} />

        {progress.marked === 0 && !introDismissed && (
          <div className="mt-8 flex items-center gap-3 rounded-lg border border-ink/15 bg-white/70 px-4 py-3 text-[14px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/buddy-sticker.png" alt="" width={44} height={44} className="h-11 w-11 shrink-0" />
            <p className="min-w-0 flex-1">
              <span className="font-semibold">Hi, I&apos;m your Ballot Buddy.</span> Tap an oval to mark it. I&apos;ll explain the rest.
            </p>
            <button onClick={dismissIntro} aria-label="Dismiss" className="shrink-0 rounded-full border border-ink/20 px-2.5 py-1 text-[12px] text-muted hover:bg-faint">
              Got it
            </button>
          </div>
        )}

        <SheetHeading n="Sheet 1" side="Front" title="Statewide and legislative offices" note="Remember to vote both sides" />
        <Sheet
          columns={SHEET1_COLS}
          blocks={[
            { header: SHEET1_COLS, races: sheet1.slice(0, 1) },
            { header: SHEET2_COLS, races: sheet1.slice(1) },
          ]}
          picks={picks}
          isSelected={isSelected}
          onOval={onOval}
          onWriteInOval={onWriteInOval}
          onWriteInName={onWriteInName}
          openInsights={(id) => setPanel({ kind: "race", id })}
          openCandidate={(raceId, candidateId) => setPanel({ kind: "candidate", raceId, candidateId })}
        />

        <SheetHeading n="Sheet 1" side="Back" title="Ballot proposals" note="Five proposed City Charter amendments" />
        <ProposalSheet picks={picks} onProp={onProp} openInsights={(id) => setPanel(id === "context" ? { kind: "propctx" } : { kind: "prop", id })} />

        <SheetHeading n="Sheet 2" side="Front" title="Judicial offices" note="Sheet 2 is blank on the back" />
        <Sheet
          columns={SHEET2_COLS}
          blocks={[
            { header: SHEET2_COLS, races: sheet2.slice(0, 1) },
            { header: SHEET2_COLS, races: sheet2.slice(1) },
          ]}
          picks={picks}
          isSelected={isSelected}
          onOval={onOval}
          onWriteInOval={onWriteInOval}
          onWriteInName={onWriteInName}
          openInsights={(id) => setPanel({ kind: "race", id })}
          openCandidate={(raceId, candidateId) => setPanel({ kind: "candidate", raceId, candidateId })}
        />

        <footer className="mt-10 mb-6 text-[12px] leading-relaxed text-muted">
          <p>
            Ballot Buddy is a personal reference built from the Board of Elections sample ballot for {ELECTION.areaName} ({ELECTION.areaLabel}). It is not an official ballot and is not affiliated with the Board of Elections or any campaign. Research compiled October 19, 2026; verify anything time-sensitive before you vote. Your picks are stored only in this browser.
          </p>
          <p className="mt-2">
            Published by <a className="underline underline-offset-2" href={PUBLISHER.url} target="_blank" rel="noopener noreferrer">{PUBLISHER.name}</a>. {PUBLISHER.tagline}{" "}
            {PUBLISHER.name === TEMPLATE_CREDIT.by ? (
              <>The <a className="underline underline-offset-2" href={TEMPLATE_CREDIT.url} target="_blank" rel="noopener noreferrer">Ballot Buddy template</a> is open source so anyone can build one for their own district.</>
            ) : (
              <>{TEMPLATE_CREDIT.text} by <a className="underline underline-offset-2" href={TEMPLATE_CREDIT.url} target="_blank" rel="noopener noreferrer">{TEMPLATE_CREDIT.by}</a>, open source so anyone can build one for their own district.</>
            )}
          </p>
        </footer>
      </main>

      <Toolbar
        progress={progress}
        busy={busy}
        onDownload={(which) => makePdf(which)}
        onClear={clearAll}
        onInfo={() => setPanel({ kind: "info" })}
        onToast={setToast}
        onSticker={shareSticker}
      />

      {toast && (
        <div role="status" className="fixed bottom-24 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}

      <Drawer
        open={panel?.kind === "race"}
        onClose={closePanel}
        eyebrow={panel?.kind === "race" ? RACES.find((r) => r.id === panel.id)?.jurisdiction : undefined}
        title={panel?.kind === "race" ? RACES.find((r) => r.id === panel.id)?.title ?? "" : ""}
      >
        {panel?.kind === "race" && RACE_INSIGHTS[panel.id] && (
          <RaceInsights
            insight={RACE_INSIGHTS[panel.id]}
            voteFor={RACES.find((r) => r.id === panel.id)!.voteFor}
            onOpenCandidate={(candidateId) => setPanel({ kind: "candidate", raceId: panel.id, candidateId })}
          />
        )}
      </Drawer>

      <Drawer
        open={panel?.kind === "candidate"}
        onClose={closePanel}
        eyebrow={panel?.kind === "candidate" ? RACES.find((r) => r.id === panel.raceId)?.title : undefined}
        title={
          panel?.kind === "candidate"
            ? RACE_INSIGHTS[panel.raceId]?.candidates.find((c) => c.candidateId === panel.candidateId)?.name ?? ""
            : ""
        }
      >
        {panel?.kind === "candidate" && RACE_INSIGHTS[panel.raceId] && (() => {
          const race = RACE_INSIGHTS[panel.raceId];
          const c = race.candidates.find((x) => x.candidateId === panel.candidateId);
          return c ? <CandidateInsights c={c} race={race} onOpenRace={() => setPanel({ kind: "race", id: panel.raceId })} /> : null;
        })()}
      </Drawer>

      <Drawer
        open={panel?.kind === "prop"}
        onClose={closePanel}
        eyebrow={panel?.kind === "prop" ? `Proposal ${PROPOSALS.find((p) => p.id === panel.id)?.number}` : undefined}
        title={panel?.kind === "prop" ? PROPOSALS.find((p) => p.id === panel.id)?.title ?? "" : ""}
      >
        {panel?.kind === "prop" && PROPOSAL_INSIGHT_MAP[panel.id] && (
          <ProposalInsights insight={PROPOSAL_INSIGHT_MAP[panel.id]} proposal={PROPOSALS.find((p) => p.id === panel.id)!} />
        )}
      </Drawer>

      <Drawer open={panel?.kind === "info"} onClose={closePanel} eyebrow="November 3, 2026" title="Voting information">
        <VotingInfo />
      </Drawer>

      <Drawer open={panel?.kind === "about"} onClose={closePanel} eyebrow="Ballot Buddy" title="About this ballot">
        <About />
      </Drawer>

      <Drawer open={panel?.kind === "propctx"} onClose={closePanel} eyebrow="Ballot proposals" title={PROPOSALS_CONTEXT.heading}>
        <div className="space-y-3 text-[14px]">
          {PROPOSALS_CONTEXT.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <h3 className="pt-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Sources</h3>
          <ul className="space-y-1.5 text-[13px]">
            {PROPOSALS_CONTEXT.sources.map((s) => (
              <li key={s.url}>
                <a className="text-accent underline underline-offset-2" href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                {s.date && <span className="text-muted"> ({s.date})</span>}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}

function TopBar({ onAbout, onInfo }: { onAbout: () => void; onInfo: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-desk/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/buddy-sticker.png" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-[17px] font-semibold tracking-tight">Ballot Buddy</span>
            <a href={PUBLISHER.url} target="_blank" rel="noopener noreferrer" className="mt-0.5 text-[11px] text-muted hover:text-ink">by {PUBLISHER.name}</a>
          </span>
          <span className="hidden text-[13px] text-muted sm:inline">NYC General Election &middot; Nov 3, 2026 &middot; {ELECTION.areaShort}</span>
        </div>
        <nav className="flex gap-2 text-[13px]">
          <button onClick={onInfo} className="rounded-full border border-ink/20 px-3 py-1 hover:bg-white">Voting info</button>
          <button onClick={onAbout} className="rounded-full border border-ink/20 px-3 py-1 hover:bg-white">About</button>
        </nav>
      </div>
    </header>
  );
}

function Intro({ onAbout }: { onAbout: () => void }) {
  return (
    <section className="my-6 grid gap-4 md:grid-cols-[1.4fr_1fr]">
      <div className="flex items-start gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/buddy-sticker.png" alt="Ballot Buddy sticker: a cartoon ballot box with glasses, waving, holding a checked ballot" width={120} height={120} className="hidden h-[120px] w-[120px] shrink-0 sm:block" />
        <div>
        <h1 className="text-[28px] font-semibold leading-tight tracking-tight sm:text-[34px]">
          The ballot you&apos;ll see in the booth, explained.
        </h1>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed">
          This is a sample, for planning. It matches the real layout of the November 3 ballot for {ELECTION.areaName}: two sheets, both sides, same rows and columns as the paper, so nothing surprises you in the booth. Nothing you mark here is a vote. Tap an oval to mark it, tap <span className="whitespace-nowrap font-semibold">Insights</span> on any race or proposal for a sourced, nonpartisan rundown, then download one PDF to bring with you: a plain-English voting plan with your choices, the dates and the rules, followed by your marked sample ballot.
        </p>
        </div>
      </div>
      <div className="rounded-md border border-ink/15 bg-white/70 p-4 text-[13px] leading-relaxed">
        <div className="mb-1 font-semibold">Is this your ballot?</div>
        <p>{ELECTION.coverage}</p>
        <p className="mt-2">{ELECTION.sharedRaces}</p>
        <p className="mt-2">
          <a className="text-accent underline underline-offset-2" href={ELECTION.sourceUrl} target="_blank" rel="noopener noreferrer">Look up your own sample ballot</a> by address to be sure.
        </p>
        <p className="mt-2">Your picks stay in this browser only; nothing is sent anywhere. <button onClick={onAbout} className="text-accent underline underline-offset-2">More about this project</button></p>
      </div>
    </section>
  );
}

function SheetHeading({ n, side, title, note }: { n: string; side: string; title: string; note: string }) {
  return (
    <div className="mt-10 mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em]">
        {n} <span className="text-muted">&middot; {side}</span>
        <span className="ml-3 normal-case tracking-normal text-muted font-normal">{title}</span>
      </h2>
      <span className="ballot flex items-center gap-2 text-[12px] font-semibold">
        <span aria-hidden>&#8592;</span> {note} <span aria-hidden>&#8594;</span>
      </span>
    </div>
  );
}

/* ----------------------------- Race sheets ----------------------------- */

interface SheetProps {
  columns: Column[];
  blocks: { header: Column[]; races: Race[] }[];
  picks: Picks;
  isSelected: (race: Race, id: string) => boolean;
  onOval: (race: Race, id: string) => void;
  onWriteInOval: (race: Race, slot: number) => void;
  onWriteInName: (race: Race, slot: number, name: string) => void;
  openInsights: (raceId: string) => void;
  openCandidate: (raceId: string, candidateId: string) => void;
}

function Sheet(props: SheetProps) {
  const { columns, blocks, ...rest } = props;
  const gridCols = `150px repeat(${columns.length}, minmax(0, 1fr)) 180px`;
  return (
    <div className="ballot relative overflow-hidden rounded-sm border border-ink bg-paper shadow-[0_1px_0_rgba(0,0,0,0.2),0_12px_30px_-18px_rgba(0,0,0,0.5)]">
      <SampleNotice />
      <BallotTopStrip />
      <SampleWatermark />
      {/* Desktop: faithful grid */}
      <div className="hidden md:block">
        {blocks.map((b, bi) => (
          <div key={bi} className="grid border-t border-ink" style={{ gridTemplateColumns: gridCols }}>
            <div className="border-r border-ink bg-faint" />
            {columns.map((c) => (
              <div key={c} className="flex items-baseline gap-1.5 border-r border-ink px-2 py-1.5">
                {b.header.includes(c) ? (
                  <>
                    <span className="text-[20px] font-light leading-none">{c}</span>
                    <span className="text-[11px]">{PARTY_BY_COL[c]}</span>
                  </>
                ) : null}
              </div>
            ))}
            <div className="px-2 py-1.5 text-[11px] leading-tight">
              Write-in
              <br />
              <span className="text-muted">candidato por escrito</span>
            </div>
            {b.races.flatMap((race) =>
              rowsFor(race).map((row, ri) => (
                <RowCells key={`${race.id}-${ri}`} row={row} columns={columns} {...rest} />
              )),
            )}
          </div>
        ))}
      </div>
      {/* Mobile: one card per race, cells wrap, column letters preserved */}
      <div className="md:hidden">
        {blocks.flatMap((b) => b.races).map((race) => (
          <MobileRace key={race.id} race={race} {...rest} />
        ))}
      </div>
    </div>
  );
}

function SampleNotice() {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#c23b3b]/40 bg-[#fff1f1] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9b1c1c]">
      <span>Sample ballot for planning only</span>
      <span className="hidden font-normal normal-case tracking-normal sm:inline">Nothing marked here is a vote. Your real ballot is handed to you at the poll site.</span>
    </div>
  );
}

/** Mirrors the pink diagonal "Sample Ballot" the Board of Elections prints on its own sample. */
function SampleWatermark() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden">
      <div className="-rotate-[22deg] whitespace-nowrap text-[clamp(56px,11vw,150px)] font-bold leading-none text-[#ff4d4d]/[0.16] select-none">
        SAMPLE
      </div>
    </div>
  );
}

function BallotTopStrip() {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-2 text-[11px] leading-tight">
      <div>
        <div className="font-semibold">Official Ballot for the General Election</div>
        <div>City of New York &middot; {ELECTION.county} &middot; November 3, 2026</div>
      </div>
      <div className="text-right text-muted">
        <div>{ELECTION.district}</div>
        <div>{ELECTION.ballotStyles}</div>
      </div>
    </div>
  );
}

function RaceLabel({ race, span, openInsights, compact }: { race: Race; span?: number; openInsights: (id: string) => void; compact?: boolean }) {
  return (
    <div
      className={["border-r border-t border-ink bg-faint px-2 py-2", compact ? "border-r-0" : ""].join(" ")}
      style={span ? { gridRow: `span ${span}` } : undefined}
    >
      <div className="text-[12px] font-semibold leading-tight">{race.title}</div>
      <div className="text-[11px] leading-tight text-muted">{race.jurisdiction}</div>
      <div className="mt-1 text-[11px] font-semibold">{voteForLabel(race.voteFor)}</div>
      {race.unopposed && <div className="mt-0.5 text-[10px] uppercase tracking-wide text-muted">Uncontested</div>}
      <button
        onClick={() => openInsights(race.id)}
        className="mt-2 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent hover:border-accent"
      >
        <span aria-hidden className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] text-white">i</span>
        Insights
      </button>
    </div>
  );
}

function CandidateCell({ oval, selected, onClick, onInfo, badge }: { oval: OvalT; selected: boolean; onClick: () => void; onInfo: () => void; badge?: boolean }) {
  return (
    <div className={["relative flex min-h-[64px] w-full transition-colors", selected ? "bg-accent-soft" : "hover:bg-faint"].join(" ")}>
      <button
        type="button"
        aria-pressed={selected}
        aria-label={`Mark ${oval.name}${oval.mate ? ` and ${oval.mate}` : ""}, column ${oval.col}, ${PARTY_BY_COL[oval.col]}`}
        onClick={onClick}
        className="flex w-full flex-col items-start gap-1 px-2 py-1.5 text-left"
      >
        <div className="flex w-full items-center justify-between gap-2 pr-6">
          <Oval filled={selected} />
          <span className="text-right text-[9px] uppercase leading-tight tracking-wide text-muted">
            {badge ? `${oval.col} · ` : ""}
            {PARTY_BY_COL[oval.col]}
          </span>
        </div>
        <div className="text-[13px] font-medium leading-tight">
          {oval.name}
          {oval.mate && (
            <>
              <span className="block text-[10px] font-normal text-muted">and</span>
              <span>{oval.mate}</span>
            </>
          )}
        </div>
      </button>
      <button
        type="button"
        aria-label={`Candidate insights: ${oval.name}`}
        title={`About ${oval.name}`}
        onClick={(e) => {
          e.stopPropagation();
          onInfo();
        }}
        className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-accent/40 bg-white text-[10px] font-semibold text-accent hover:border-accent hover:bg-accent-soft"
      >
        i
      </button>
    </div>
  );
}

function WriteInCell({
  race,
  slot,
  selected,
  name,
  onToggle,
  onName,
}: {
  race: Race;
  slot: number;
  selected: boolean;
  name: string;
  onToggle: () => void;
  onName: (v: string) => void;
}) {
  return (
    <div className={["flex min-h-[64px] flex-col gap-1 px-2 py-1.5", selected ? "bg-accent-soft" : ""].join(" ")}>
      <button type="button" aria-pressed={selected} onClick={onToggle} className="flex items-center gap-2 text-left">
        <Oval filled={selected} />
        <span className="text-[10px] text-muted">Write-in{race.voteFor > 1 ? ` ${slot + 1}` : ""}</span>
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => onName(e.target.value)}
        placeholder="Print a name"
        aria-label={`Write-in for ${race.title}${race.voteFor > 1 ? ` slot ${slot + 1}` : ""}`}
        className="w-full border-b border-ink/40 bg-transparent px-0 py-0.5 text-[12px] outline-none placeholder:text-muted/60 focus:border-accent"
      />
    </div>
  );
}

function RowCells({ row, columns, picks, isSelected, onOval, onWriteInOval, onWriteInName, openInsights, openCandidate }: { row: Row; columns: Column[] } & Omit<SheetProps, "columns" | "blocks">) {
  const { race } = row;
  return (
    <>
      {row.first && <RaceLabel race={race} span={row.span} openInsights={openInsights} />}
      {columns.map((c) => {
        const o = row.cells[c];
        return (
          <div key={c} className={["border-r border-t border-ink", o ? "" : "bg-[repeating-linear-gradient(45deg,transparent_0_6px,rgba(0,0,0,0.03)_6px_7px)]"].join(" ")}>
            {o && <CandidateCell oval={o} selected={isSelected(race, o.id)} onClick={() => onOval(race, o.id)} onInfo={() => openCandidate(race.id, o.candidateId)} />}
          </div>
        );
      })}
      <div className="border-t border-ink">
        {row.writeInSlot !== null && (
          <WriteInCell
            race={race}
            slot={row.writeInSlot}
            selected={isSelected(race, writeInId(race.id, row.writeInSlot))}
            name={(picks.writeIns[race.id] ?? [])[row.writeInSlot] ?? ""}
            onToggle={() => onWriteInOval(race, row.writeInSlot!)}
            onName={(v) => onWriteInName(race, row.writeInSlot!, v)}
          />
        )}
      </div>
    </>
  );
}

function MobileRace({ race, picks, isSelected, onOval, onWriteInOval, onWriteInName, openInsights, openCandidate }: { race: Race } & Omit<SheetProps, "columns" | "blocks">) {
  return (
    <div className="border-t border-ink">
      <RaceLabel race={race} openInsights={openInsights} compact />
      <div className="grid grid-cols-2 border-t border-ink/30">
        {race.ovals.map((o, i) => (
          <div key={o.id} className={["border-ink/30", i % 2 === 0 ? "border-r" : "", i >= 2 ? "border-t" : ""].join(" ")}>
            <CandidateCell oval={o} selected={isSelected(race, o.id)} onClick={() => onOval(race, o.id)} onInfo={() => openCandidate(race.id, o.candidateId)} badge />
          </div>
        ))}
        {race.writeIns.map((_, slot) => {
          const idx = race.ovals.length + slot;
          return (
            <div key={slot} className={["border-ink/30", idx % 2 === 0 ? "border-r" : "", idx >= 2 ? "border-t" : ""].join(" ")}>
              <WriteInCell
                race={race}
                slot={slot}
                selected={isSelected(race, writeInId(race.id, slot))}
                name={(picks.writeIns[race.id] ?? [])[slot] ?? ""}
                onToggle={() => onWriteInOval(race, slot)}
                onName={(v) => onWriteInName(race, slot, v)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------- Proposals ----------------------------- */

const WORDS = ["", "One", "Two", "Three", "Four", "Five"];

function ProposalSheet({ picks, onProp, openInsights }: { picks: Picks; onProp: (p: Proposal, v: "yes" | "no") => void; openInsights: (id: string) => void }) {
  const cols: Proposal[][] = [[PROPOSALS[0], PROPOSALS[1]], [PROPOSALS[2], PROPOSALS[3]], [PROPOSALS[4]]];
  return (
    <div className="ballot relative overflow-hidden rounded-sm border border-ink bg-paper shadow-[0_1px_0_rgba(0,0,0,0.2),0_12px_30px_-18px_rgba(0,0,0,0.5)]">
      <SampleNotice />
      <SampleWatermark />
      <div className="flex flex-wrap items-start justify-between gap-3 px-3 py-2 text-[11px] leading-tight">
        <div>
          <div className="font-semibold">Proposal Instructions</div>
          <div className="max-w-[48ch]">To vote on a question or proposal, mark the oval below your choice. If you make a mistake, or want to change your vote, ask a poll worker for a new ballot.</div>
        </div>
        <button onClick={() => openInsights("context")} className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent hover:border-accent">
          Where these questions came from
        </button>
      </div>
      <div className="grid border-t border-ink md:grid-cols-3">
        {cols.map((col, ci) => (
          <div key={ci} className={["flex flex-col", ci < 2 ? "md:border-r md:border-ink" : ""].join(" ")}>
            {col.map((p, pi) => {
              const v = picks.props[p.id];
              return (
                <div key={p.id} className={["flex flex-col px-3 py-3", pi > 0 || ci > 0 ? "border-t border-ink md:border-t-0" : "", pi > 0 ? "md:border-t md:border-ink" : ""].join(" ")}>
                  <div className="text-center text-[12px] font-semibold leading-snug">
                    Proposal Number {WORDS[p.number]}, a Question: {p.title}
                  </div>
                  <p className="mt-2 text-[12px] leading-snug">{p.summary}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <span className="text-[34px] font-light leading-none">{p.number}</span>
                    <div className="flex gap-2">
                      {(["yes", "no"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          aria-pressed={v === opt}
                          onClick={() => onProp(p, opt)}
                          className={["flex min-w-[64px] flex-col items-center gap-1 rounded px-3 py-1.5 transition-colors", v === opt ? "bg-accent-soft" : "hover:bg-faint"].join(" ")}
                        >
                          <span className="text-[13px] font-semibold uppercase">{opt}</span>
                          <span className="text-[10px] text-muted">{opt === "yes" ? "Sí" : "No"}</span>
                          <Oval filled={v === opt} />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => openInsights(p.id)}
                      className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent hover:border-accent"
                    >
                      <span aria-hidden className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] text-white">i</span>
                      Insights
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Toolbar ----------------------------- */

function Toolbar({ progress, busy, onDownload, onClear, onInfo, onToast, onSticker }: { progress: { marked: number; total: number }; busy: boolean; onDownload: (which: "both" | "ballot" | "plan") => void; onClear: () => void; onInfo: () => void; onToast: (s: string) => void; onSticker: () => void }) {
  const done = progress.marked === progress.total;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/15 bg-paper/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          {done && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/buddy-sticker.png" alt="" width={40} height={40} className="bb-wave h-10 w-10 shrink-0" />
          )}
          <div className="min-w-0">
            <div className="text-[13px] font-semibold">
              {done ? "You\u2019re ready. Download your plan." : `${progress.marked} of ${progress.total} marked`}
            </div>
            <div className="flex flex-wrap gap-x-3 text-[12px] text-muted">
              <button onClick={onClear} className="underline underline-offset-2 hover:text-ink">Clear my picks</button>
              <button onClick={() => onDownload("ballot")} disabled={busy} className="hidden underline underline-offset-2 hover:text-ink sm:inline">Ballot only</button>
              <button onClick={() => onDownload("plan")} disabled={busy} className="hidden underline underline-offset-2 hover:text-ink sm:inline">Plan only</button>
              <button onClick={onSticker} disabled={busy} className="underline underline-offset-2 hover:text-ink">&ldquo;I planned to vote&rdquo; sticker</button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onInfo} className="hidden rounded-full border border-ink/20 px-3 py-2 text-[13px] hover:bg-faint sm:inline">Dates and rules</button>
          <ShareMenu onToast={onToast} />
          <button
            onClick={() => onDownload("both")}
            disabled={busy}
            className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white hover:bg-black disabled:opacity-60"
            title="One PDF: your plain-English voting plan, then your marked sample ballot"
          >
            {busy ? (
              <span className="inline-flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/buddy-sticker.png" alt="" width={18} height={18} className="bb-bob h-[18px] w-[18px]" />
                Filling in your ovals…
              </span>
            ) : (
              "Download my plan (PDF)"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Info panels ----------------------------- */

function VotingInfo() {
  return (
    <div className="space-y-6 text-[14px]">
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Find your poll site</h3>
        <div className="space-y-2">
          {LOGISTICS.lookup.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="block rounded-md border border-accent/30 bg-accent-soft p-3 hover:border-accent">
              <div className="font-semibold text-accent">{l.label} &rarr;</div>
              <div className="mt-0.5 text-[13px] text-ink/80">{l.note}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoTile label="Election Day" value={LOGISTICS.electionDay.date} sub={`Polls open ${LOGISTICS.electionDay.hours}`} />
        <InfoTile label="Early voting" value={LOGISTICS.earlyVoting.dates} sub="Use your assigned early voting site" />
        <InfoTile label="Register by" value={LOGISTICS.registrationDeadline} />
        <InfoTile label="Mail ballot" value={LOGISTICS.mail.apply} sub={LOGISTICS.mail.return} />
      </div>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Early voting hours (NYC)</h3>
        <table className="w-full text-[13px]">
          <tbody>
            {LOGISTICS.earlyVoting.hours.map(([d, h]) => (
              <tr key={d} className="border-t border-ink/10">
                <td className="py-1 pr-3 font-medium">{d}</td>
                <td className="py-1">{h}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[13px] text-muted">{LOGISTICS.earlyVoting.note}</p>
      </div>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Rules worth knowing</h3>
        <dl className="space-y-3">
          {LOGISTICS.rules.map((r) => (
            <div key={r.q}>
              <dt className="font-semibold">{r.q}</dt>
              <dd className="text-[14px]">{r.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Official links</h3>
        <ul className="space-y-1 text-[13px]">
          <li><a className="text-accent underline underline-offset-2" href={LOGISTICS.links.pollSite} target="_blank" rel="noopener noreferrer">Find your poll site and sample ballot</a></li>
          <li><a className="text-accent underline underline-offset-2" href={LOGISTICS.links.voterGuide} target="_blank" rel="noopener noreferrer">NYC Votes official voter guide</a></li>
          <li><a className="text-accent underline underline-offset-2" href={LOGISTICS.links.proposals} target="_blank" rel="noopener noreferrer">Full text of the ballot proposals</a></li>
          <li><a className="text-accent underline underline-offset-2" href={LOGISTICS.links.mailBallot} target="_blank" rel="noopener noreferrer">Request or track a mail ballot</a></li>
          <li>Board of Elections: {LOGISTICS.links.phone}</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Sources</h3>
        <ul className="space-y-1 text-[13px]">
          {LOGISTICS.sources.map((s) => (
            <li key={s.url}><a className="text-accent underline underline-offset-2" href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InfoTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-md border border-ink/15 bg-faint p-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{label}</div>
      <div className="mt-0.5 font-semibold leading-snug">{value}</div>
      {sub && <div className="mt-0.5 text-[13px] text-muted">{sub}</div>}
    </div>
  );
}

function About() {
  return (
    <div className="space-y-4 text-[14px]">
      <p>
        Ballot Buddy shows the November 3, 2026 general election ballot exactly as it is laid out for {ELECTION.areaName} ({ELECTION.areaLabel}; ballot styles 0017 and 0581), using the Board of Elections&apos; own sample ballot as the source. {ELECTION.coverage} The download is one PDF: a short voting plan in plain English (where and when to vote, your choice in every contest, and the rules that keep a ballot from being voided), followed by that ballot with your ovals filled in.
      </p>
      <p>
        Every race and proposal has an Insights panel: what the office does, who is running, their record and positions with specifics, endorsements, money, controversies, and the things we could not verify. Facts are attributed to dated sources; characterizations are labeled as such. The guide contains no endorsements and no opinion; the standards it is written to are listed below.
      </p>
      <p>
        Nothing you mark is sent anywhere. Picks are stored in this browser only, so two people sharing a device will see each other&apos;s marks; use &ldquo;Clear my picks&rdquo; between voters.
      </p>
      <p>
        This is a personal reference, not an official ballot, and it is not affiliated with the Board of Elections, any party or any campaign. Research was compiled on October 19, 2026 and some items (bar association ratings, late polls, court rulings) may change before Election Day. Check the official voter guide for anything time-sensitive.
      </p>
      <p>
        Published by {PUBLISHER.name}. {PUBLISHER.name === TEMPLATE_CREDIT.by ? "North Harbor built and maintains the open-source Ballot Buddy template" : `${TEMPLATE_CREDIT.text} by ${TEMPLATE_CREDIT.by}`}, so anyone can make the same thing for their own district.
      </p>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Editorial standards</h3>
        <dl className="space-y-3">
          {STANDARDS.map((st) => (
            <div key={st.title}>
              <dt className="font-semibold">{st.title}</dt>
              <dd>{st.body}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Where the proposals came from</h3>
        <div className="space-y-3">
          {PROPOSALS_CONTEXT.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export { COLUMNS };
