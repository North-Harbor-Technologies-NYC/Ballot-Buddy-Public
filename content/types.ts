/**
 * Content contract for Ballot Buddy.
 *
 * EDITORIAL RULES (enforced by scripts/check-content.ts at build time; do not weaken them):
 * - Every race, candidate and proposal is described neutrally. No endorsements, no recommendations,
 *   no "you should" language, no opinion of the author anywhere in these files.
 * - Every factual claim is attributable to a dated source listed in `sources`. Characterizations
 *   are labeled as such ("the campaign says", "critics call").
 * - Both sides of every proposal get their strongest case, attributed to who makes it.
 * - No polling and no predictions.
 * - What could not be verified is stated in `flags`, not omitted silently.
 */
export interface Source {
  title: string;
  url: string;
  date?: string;
}

export interface CandidateInsight {
  candidateId: string;
  name: string;
  /** ballot lines, e.g. ["Democratic", "Working Families"] */
  lines: string[];
  /** one line: current role / status */
  role: string;
  /** one sentence shown in the race panel; the full profile opens from the ballot */
  brief: string;
  bio: string;
  nomination?: string;
  /** specific, sourced record items and positions */
  record: string[];
  endorsements?: string;
  money?: string;
  controversies?: string[];
  /** things the research could not verify; shown as caveats */
  flags?: string[];
}

export interface RaceInsight {
  raceId: string;
  /** what the office does and what is at stake */
  overview: string;
  /** mechanics worth knowing (conventions, fusion lines, placeholders) */
  howItWorks?: string[];
  candidates: CandidateInsight[];
  /** shown when a race is uncontested */
  unopposedNote?: string;
  sources: Source[];
  updated: string;
}

export interface Attributed {
  who: string;
  what: string;
}

export interface ProposalInsight {
  proposalId: string;
  plain: string;
  statusQuo: string;
  changes: string[];
  caseFor: Attributed[];
  caseAgainst: Attributed[];
  positions: { yes: string[]; no: string[]; other?: string[] };
  context?: string;
  sources: Source[];
  updated: string;
}
