"use client";

import type { RaceInsight, ProposalInsight, CandidateInsight, Source } from "@/content";
import type { Proposal } from "@/data/ballot";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{title}</h3>
      {children}
    </section>
  );
}

function Sources({ sources }: { sources: Source[] }) {
  return (
    <ul className="space-y-1.5 text-[13px] leading-snug">
      {sources.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent">
            {s.title}
          </a>
          {s.date && <span className="text-muted"> ({s.date})</span>}
        </li>
      ))}
    </ul>
  );
}

/** Race panel: overview, mechanics, one-line candidate briefs, sources. */
export function RaceInsights({
  insight,
  voteFor,
  onOpenCandidate,
}: {
  insight: RaceInsight;
  voteFor: number;
  onOpenCandidate: (candidateId: string) => void;
}) {
  return (
    <div>
      <p className="mb-5">{insight.overview}</p>
      {insight.unopposedNote && (
        <div className="mb-6 rounded-md border border-ink/20 bg-faint p-4 text-[14px]">
          <div className="mb-1 font-semibold">Uncontested. Leaving it blank is an option.</div>
          {insight.unopposedNote}
        </div>
      )}
      {insight.howItWorks && (
        <Section title="Worth knowing">
          <ul className="list-disc space-y-2 pl-5 text-[14px]">
            {insight.howItWorks.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </Section>
      )}
      <Section title={voteFor > 1 ? `Candidates (vote for up to ${voteFor})` : "Candidates"}>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {insight.candidates.map((c) => (
            <div key={c.candidateId} className="py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-semibold leading-tight">{c.name}</div>
                  <div className="text-[13px] text-muted">
                    {c.lines.join(" · ")} &middot; {c.role}
                  </div>
                </div>
                <button
                  onClick={() => onOpenCandidate(c.candidateId)}
                  className="shrink-0 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent hover:border-accent"
                >
                  Candidate insights
                </button>
              </div>
              <p className="mt-1.5 text-[14px]">{c.brief}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-muted">See candidate insights for record, endorsements, money and controversies. The same profile opens from the &#9432; next to each name on the ballot.</p>
      </Section>
      <Section title="Sources">
        <Sources sources={insight.sources} />
        <p className="mt-3 text-[12px] text-muted">Research compiled {insight.updated}. Facts are attributed to the sources above; characterizations are labeled as such.</p>
      </Section>
    </div>
  );
}

/** Candidate panel: the full profile, opened from the ballot or the race panel. */
export function CandidateInsights({
  c,
  race,
  onOpenRace,
}: {
  c: CandidateInsight;
  race: RaceInsight;
  onOpenRace: () => void;
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-[13px]">
        <span className="rounded-full bg-faint px-2.5 py-0.5">{c.lines.join(" · ")}</span>
        <span className="text-muted">{c.role}</span>
      </div>
      <p className="mb-5">{c.bio}</p>
      {c.nomination && (
        <Section title="How they got on the ballot">
          <p className="text-[14px]">{c.nomination}</p>
        </Section>
      )}
      <Section title="Record and positions">
        <ul className="list-disc space-y-2 pl-5 text-[14px]">
          {c.record.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Section>
      {c.endorsements && (
        <Section title="Endorsements">
          <p className="text-[14px]">{c.endorsements}</p>
        </Section>
      )}
      {c.money && (
        <Section title="Money">
          <p className="text-[14px]">{c.money}</p>
        </Section>
      )}
      {c.controversies && c.controversies.length > 0 && (
        <Section title="Controversies and criticism">
          <ul className="list-disc space-y-2 pl-5 text-[14px]">
            {c.controversies.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Section>
      )}
      {c.flags && c.flags.length > 0 && (
        <div className="mb-6 rounded border border-ink/15 bg-faint px-3 py-2 text-[13px]">
          <div className="font-semibold">Could not verify</div>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {c.flags.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={onOpenRace}
        className="mb-6 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-[12px] font-semibold text-accent hover:border-accent"
      >
        Race overview and all candidates
      </button>
      <Section title="Sources">
        <Sources sources={race.sources} />
        <p className="mt-3 text-[12px] text-muted">Research compiled {race.updated}. Facts are attributed to the sources above; characterizations are labeled as such.</p>
      </Section>
    </div>
  );
}

export function ProposalInsights({ insight, proposal }: { insight: ProposalInsight; proposal: Proposal }) {
  return (
    <div>
      <p className="mb-2 text-[13px] text-muted">Official ballot summary</p>
      <p className="mb-5 border-l-2 border-ink/30 pl-3 text-[14px] italic">{proposal.summary}</p>
      <Section title="In plain terms">
        <p>{insight.plain}</p>
      </Section>
      <Section title="What happens today">
        <p className="text-[14px]">{insight.statusQuo}</p>
      </Section>
      <Section title="What changes if it passes">
        <ul className="list-disc space-y-2 pl-5 text-[14px]">
          {insight.changes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </Section>
      <Section title="The case for Yes">
        <ul className="space-y-2 text-[14px]">
          {insight.caseFor.map((a, i) => (
            <li key={i}>
              <span className="font-semibold">{a.who}: </span>
              {a.what}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="The case for No, and caveats">
        <ul className="space-y-2 text-[14px]">
          {insight.caseAgainst.map((a, i) => (
            <li key={i}>
              <span className="font-semibold">{a.who}: </span>
              {a.what}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Who has taken a position">
        <div className="grid grid-cols-1 gap-3 text-[13px] sm:grid-cols-2">
          <div>
            <div className="font-semibold">Yes</div>
            <p>{insight.positions.yes.join(", ")}</p>
          </div>
          <div>
            <div className="font-semibold">No</div>
            <p>{insight.positions.no.length ? insight.positions.no.join(", ") : "None found"}</p>
            {insight.positions.other && <p className="mt-1 text-muted">{insight.positions.other.join("; ")}</p>}
          </div>
        </div>
      </Section>
      {insight.context && (
        <Section title="Context">
          <p className="text-[14px]">{insight.context}</p>
        </Section>
      )}
      <Section title="Sources">
        <Sources sources={insight.sources} />
        <p className="mt-3 text-[12px] text-muted">Research compiled {insight.updated}.</p>
      </Section>
    </div>
  );
}
