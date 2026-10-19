import type { RaceInsight, ProposalInsight } from "./types";
import { GOVERNOR, COMPTROLLER, ATTORNEY_GENERAL } from "./statewide";
import { CONGRESS, STATE_SENATE, ASSEMBLY } from "./legislative";
import { SURROGATE, SUPREME_COURT, CIVIL_COURT_COUNTY, CIVIL_COURT_MUNICIPAL } from "./judicial";
import { PROPOSAL_INSIGHTS, PROPOSALS_CONTEXT } from "./proposals";

export const RACE_INSIGHTS: Record<string, RaceInsight> = Object.fromEntries(
  [
    GOVERNOR,
    COMPTROLLER,
    ATTORNEY_GENERAL,
    CONGRESS,
    STATE_SENATE,
    ASSEMBLY,
    SURROGATE,
    SUPREME_COURT,
    CIVIL_COURT_COUNTY,
    CIVIL_COURT_MUNICIPAL,
  ].map((r) => [r.raceId, r]),
);

export const PROPOSAL_INSIGHT_MAP: Record<string, ProposalInsight> = Object.fromEntries(
  PROPOSAL_INSIGHTS.map((p) => [p.proposalId, p]),
);

export { PROPOSALS_CONTEXT };
export { LOGISTICS } from "./logistics";
export type { RaceInsight, ProposalInsight, CandidateInsight, Source } from "./types";
