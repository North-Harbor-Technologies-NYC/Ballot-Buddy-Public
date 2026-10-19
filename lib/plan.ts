import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "pdf-lib";
import { RACES, PROPOSALS, PARTY_BY_COL, ELECTION, PUBLISHER, type Race } from "@/data/ballot";
import { LOGISTICS } from "@/content/logistics";
import { isWriteInId, type Picks } from "./picks";

/**
 * A plain-English voting plan: when and where to vote, then every contest in
 * ballot order with the voter's choice (or "not marked"), then the rules that
 * protect a ballot. Letter size, generated from scratch.
 */

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN = 54;
const BODY = 10.5;

class Writer {
  doc: PDFDocument;
  page!: PDFPage;
  y = 0;
  font: PDFFont;
  bold: PDFFont;
  pageNo = 0;

  constructor(doc: PDFDocument, font: PDFFont, bold: PDFFont) {
    this.doc = doc;
    this.font = font;
    this.bold = bold;
    this.newPage();
  }

  newPage() {
    this.page = this.doc.addPage([PAGE_W, PAGE_H]);
    this.pageNo += 1;
    this.y = PAGE_H - MARGIN;
    this.page.drawText(`Ballot Buddy voting plan  ·  page ${this.pageNo}`, {
      x: MARGIN,
      y: MARGIN / 2,
      size: 8,
      font: this.font,
      color: rgb(0.45, 0.45, 0.45),
    });
  }

  ensure(h: number) {
    if (this.y - h < MARGIN) this.newPage();
  }

  wrap(text: string, font: PDFFont, size: number, width: number): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let line = "";
    for (const w of words) {
      const probe = line ? `${line} ${w}` : w;
      if (font.widthOfTextAtSize(probe, size) <= width) line = probe;
      else {
        if (line) lines.push(line);
        line = w;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  text(t: string, opts: { bold?: boolean; size?: number; indent?: number; gap?: number; color?: [number, number, number]; maxWidth?: number } = {}) {
    const font = opts.bold ? this.bold : this.font;
    const size = opts.size ?? BODY;
    const indent = opts.indent ?? 0;
    const lead = size * 1.35;
    const lines = this.wrap(t, font, size, (opts.maxWidth ?? PAGE_W - 2 * MARGIN) - indent);
    this.ensure(lines.length * lead);
    for (const l of lines) {
      this.page.drawText(l, {
        x: MARGIN + indent,
        y: this.y - size,
        size,
        font,
        color: opts.color ? rgb(...opts.color) : rgb(0.08, 0.08, 0.08),
      });
      this.y -= lead;
    }
    this.y -= opts.gap ?? 0;
  }

  heading(t: string) {
    this.ensure(30);
    this.y -= 8;
    this.text(t, { bold: true, size: 13, gap: 2 });
    this.page.drawLine({
      start: { x: MARGIN, y: this.y },
      end: { x: PAGE_W - MARGIN, y: this.y },
      thickness: 0.8,
      color: rgb(0.08, 0.08, 0.08),
    });
    this.y -= 8;
  }

  pair(label: string, value: string) {
    // label in bold on its own line if long, else inline
    const size = BODY;
    const lead = size * 1.35;
    const labelW = this.bold.widthOfTextAtSize(label + "  ", size);
    const lines = this.wrap(value, this.font, size, PAGE_W - 2 * MARGIN - labelW);
    this.ensure(lines.length * lead + 4);
    this.page.drawText(label, { x: MARGIN, y: this.y - size, size, font: this.bold });
    lines.forEach((l, i) => {
      this.page.drawText(l, { x: MARGIN + labelW, y: this.y - size - i * lead, size, font: this.font });
    });
    this.y -= lines.length * lead + 4;
  }
}

function raceChoice(race: Race, picks: Picks): string[] {
  const selected = picks.races[race.id] ?? [];
  if (selected.length === 0) return [];
  const out: string[] = [];
  for (const id of selected) {
    if (isWriteInId(id)) {
      const slot = Number(id.split(":")[2]);
      const name = (picks.writeIns[race.id] ?? [])[slot]?.trim();
      out.push(name ? `Write-in: ${name}` : "Write-in (no name entered yet)");
    } else {
      const o = race.ovals.find((x) => x.id === id);
      if (o) out.push(`${o.name}${o.mate ? ` / ${o.mate}` : ""}  (column ${o.col}, ${PARTY_BY_COL[o.col]})`);
    }
  }
  return out;
}

export async function buildVotingPlan(picks: Picks): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const w = new Writer(doc, font, bold);

  try {
    const png = await fetch("/buddy-sticker.png").then((r) => (r.ok ? r.arrayBuffer() : Promise.reject()));
    const img = await doc.embedPng(png);
    w.page.drawImage(img, { x: PAGE_W - MARGIN - 86, y: PAGE_H - MARGIN - 86, width: 86, height: 86 });
  } catch {
    /* sticker is decorative; the plan is complete without it */
  }

  const headW = PAGE_W - 2 * MARGIN - 100;
  w.text("My voting plan", { bold: true, size: 22, gap: 2, maxWidth: headW });
  w.text(`${ELECTION.name} · ${ELECTION.date}`, { size: 11, gap: 2, maxWidth: headW });
  w.text(`Ballot for ${ELECTION.areaName} (${ELECTION.areaLabel}). Prepared with Ballot Buddy. Not an official ballot.`, {
    size: 9,
    color: [0.4, 0.4, 0.4],
    gap: 6,
    maxWidth: headW,
  });
  if (w.y > PAGE_H - MARGIN - 96) w.y = PAGE_H - MARGIN - 96;

  w.heading("When and where");
  w.pair("Election Day:", `${LOGISTICS.electionDay.date}, polls open ${LOGISTICS.electionDay.hours}. Find your Election Day site at ${LOGISTICS.links.pollSite}`);
  w.pair("Early voting:", `${LOGISTICS.earlyVoting.dates}. ${LOGISTICS.earlyVoting.note}`);
  w.text(
    "Early voting hours: " +
      LOGISTICS.earlyVoting.hours.map(([d, h]) => `${d} ${h}`).join("; ") +
      ".",
    { indent: 0, gap: 2 },
  );
  w.pair("Mail ballot:", `${LOGISTICS.mail.apply} ${LOGISTICS.mail.return}`);
  w.pair("Bring this:", "You may bring notes, a sample ballot or this plan into the booth. Do not photograph your marked ballot; that is a misdemeanor in New York.");

  const sheet = (label: string, races: Race[]) => {
    w.heading(label);
    for (const race of races) {
      const choice = raceChoice(race, picks);
      const title = `${race.title} (${race.jurisdiction})${race.voteFor > 1 ? `, vote for up to ${race.voteFor}` : ""}${race.unopposed ? ", uncontested" : ""}`;
      w.ensure(48 + choice.length * 14);
      w.text(title, { bold: true, gap: 1 });
      if (choice.length === 0) {
        w.text("Not marked. Leaving it blank does not affect the rest of your ballot.", { indent: 14, color: [0.4, 0.4, 0.4], gap: 5 });
      } else {
        for (const c of choice) w.text(`•  ${c}`, { indent: 14 });
        if (race.voteFor > 1) {
          w.text(`Fill ${choice.length} oval${choice.length === 1 ? "" : "s"} and stop. More than ${race.voteFor} voids this race.`, { indent: 14, size: 9, color: [0.4, 0.4, 0.4] });
        }
        w.y -= 5;
      }
    }
  };

  sheet("Sheet 1, front: statewide and legislative offices", RACES.filter((r) => r.sheet === 1));

  w.heading("Sheet 1, back: ballot proposals (flip the sheet over)");
  for (const p of PROPOSALS) {
    const v = picks.props[p.id];
    w.ensure(52);
    w.text(`Proposal ${p.number}: ${p.title}`, { bold: true, gap: 1 });
    w.text(v ? `•  ${v.toUpperCase()}` : "Not marked. A blank is neither a yes nor a no.", { indent: 14, color: v ? undefined : [0.4, 0.4, 0.4], gap: 5 });
  }

  sheet("Sheet 2, front: judicial offices (the back of sheet 2 is blank)", RACES.filter((r) => r.sheet === 2));

  w.heading("Protect your ballot");
  const rules = [
    "Fill the oval completely with the pen provided. Do not cross anything out; ask a poll worker for a new ballot if you make a mistake.",
    "Same name on two lines: pick one. A vote on any line is one vote for that candidate. Marking the same candidate twice still counts once.",
    "Never mark more ovals than the “Vote for” number in a race. That voids the race (only that race). Fewer is always fine.",
    "Write-ins: fill the Write-in oval and print the name. If a candidate is already printed on the ballot, fill their oval instead of writing them in.",
    "Scan both sheets. The proposals are on the back of sheet 1.",
  ];
  for (const r of rules) w.text(`•  ${r}`, { indent: 6, gap: 2 });

  w.y -= 6;
  w.text(
    `Your picks were stored only on your own device. This plan was generated by Ballot Buddy, published by ${PUBLISHER.name}, from the Board of Elections sample ballot; it is not an official document and is not affiliated with the Board of Elections or any campaign.`,
    { size: 8.5, color: [0.4, 0.4, 0.4] },
  );

  doc.setTitle("Ballot Buddy: my voting plan, Nov 3, 2026");
  doc.setProducer("Ballot Buddy");
  return doc.save();
}

export const PLAN_FILENAME = "ballot-buddy-my-voting-plan-nov-3-2026.pdf";
export const COMBINED_FILENAME = "ballot-buddy-plan-and-sample-ballot-nov-3-2026.pdf";

/** One file: the voting plan first, then the marked sample ballot pages. */
export async function combinePlanAndBallot(planBytes: Uint8Array, ballotBytes: Uint8Array): Promise<Uint8Array> {
  const plan = await PDFDocument.load(planBytes);
  const ballot = await PDFDocument.load(ballotBytes);
  const pages = await plan.copyPages(ballot, ballot.getPageIndices());
  for (const p of pages) plan.addPage(p);
  plan.setTitle("Ballot Buddy: my voting plan and SAMPLE ballot, Nov 3, 2026");
  return plan.save();
}
