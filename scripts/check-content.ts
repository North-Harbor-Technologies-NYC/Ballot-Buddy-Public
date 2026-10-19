/**
 * Build-time content check. Runs before `next build` (see package.json "prebuild").
 *
 * It enforces the testable parts of the editorial standards in content/standards.ts:
 * completeness (every ballot race, candidate and proposal is covered), sourcing, no
 * opinion language, no polling, both sides of every proposal, district-based (not
 * address-based) coverage copy, and the presence of the sample-ballot notices.
 *
 * Removing or weakening this file is a visible act in any fork's history. That is the point.
 */
import { RACES, PROPOSALS, ELECTION } from "../data/ballot";
import { RACE_INSIGHTS, PROPOSAL_INSIGHT_MAP, PROPOSALS_CONTEXT, LOGISTICS } from "../content";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

/* ---------- helpers ---------- */
function strings(obj: unknown, path = ""): [string, string][] {
  if (typeof obj === "string") return [[path, obj]];
  if (Array.isArray(obj)) return obj.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (obj && typeof obj === "object") return Object.entries(obj).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k));
  return [];
}
const isUrl = (u: string) => /^https?:\/\/\S+$/.test(u);

/* ---------- 1. completeness against the ballot ---------- */
for (const race of RACES) {
  const ins = RACE_INSIGHTS[race.id];
  if (!ins) {
    err(`race "${race.id}" has no RaceInsight`);
    continue;
  }
  if (!ins.overview?.trim()) err(`race "${race.id}": overview missing`);
  if (!ins.updated?.trim()) err(`race "${race.id}": updated date missing`);
  if (race.unopposed && !ins.unopposedNote) err(`race "${race.id}" is uncontested but has no unopposedNote`);
  const ids = new Set(race.ovals.map((o) => o.candidateId));
  for (const id of ids) {
    const c = ins.candidates.find((x) => x.candidateId === id);
    if (!c) {
      err(`race "${race.id}": candidate "${id}" is on the ballot but has no CandidateInsight`);
      continue;
    }
    for (const f of ["role", "brief", "bio"] as const) if (!c[f]?.trim()) err(`candidate "${id}": ${f} missing`);
    if (!c.record?.length) err(`candidate "${id}": record is empty`);
    if (!c.lines?.length) err(`candidate "${id}": lines missing`);
  }
  for (const c of ins.candidates) if (!ids.has(c.candidateId)) err(`race "${race.id}": insight for "${c.candidateId}" who is not on the ballot`);
  if ((ins.sources?.length ?? 0) < 3) err(`race "${race.id}": fewer than 3 sources`);
  for (const s of ins.sources ?? []) if (!isUrl(s.url)) err(`race "${race.id}": bad source URL "${s.url}"`);
}
for (const p of PROPOSALS) {
  const ins = PROPOSAL_INSIGHT_MAP[p.id];
  if (!ins) {
    err(`proposal "${p.id}" has no ProposalInsight`);
    continue;
  }
  for (const f of ["plain", "statusQuo", "updated"] as const) if (!ins[f]?.trim()) err(`proposal "${p.id}": ${f} missing`);
  if (!ins.changes?.length) err(`proposal "${p.id}": changes empty`);
  if (!ins.caseFor?.length || !ins.caseAgainst?.length) err(`proposal "${p.id}": both caseFor and caseAgainst are required`);
  for (const a of [...(ins.caseFor ?? []), ...(ins.caseAgainst ?? [])]) if (!a.who?.trim()) err(`proposal "${p.id}": an argument has no attribution (who)`);
  if ((ins.sources?.length ?? 0) < 3) err(`proposal "${p.id}": fewer than 3 sources`);
  for (const s of ins.sources ?? []) if (!isUrl(s.url)) err(`proposal "${p.id}": bad source URL "${s.url}"`);
}
if (!p(PROPOSALS_CONTEXT?.body?.length)) err("PROPOSALS_CONTEXT.body is empty");
function p(x: unknown) {
  return !!x;
}

/* ---------- 2. language: no opinion, no polling ---------- */
const OPINION: RegExp[] = [
  /\bI(?:'|’)?m voting\b/i,
  /\bI (?:recommend|endorse|support|oppose|urge|think you should)\b/i,
  /\bwe (?:recommend|endorse|urge)\b/i,
  /\byou should vote\b/i,
  /\bvote (?:yes|no) on (?:this|proposal|question)\b/i,
  /\bdeserves? (?:your|our) vote\b/i,
  /\bbest (?:candidate|choice|pick)\b/i,
  /\bthe (?:right|wrong) choice\b/i,
  /\bmy take\b/i,
  /\bour pick\b/i,
];
const POLLING_HARD: RegExp[] = [
  /\b(?:leads?|leading|ahead|trails?|trailing|behind) (?:by|with) \d+/i,
  /\bpolls? (?:shows?|found|has|put|puts|give|gives)\b/i,
  /\bpoll\w*\b[^.]{0,80}?\b\d{1,2}\s?(?:-|to|\u2013)\s?\d{1,2}\b/i,
  /\b\d{1,2}\s?(?:-|to|\u2013)\s?\d{1,2}\b[^.]{0,80}?\bpoll\w*\b/i,
];
const CONTENT_OBJECTS: [string, unknown][] = [
  ["RACE_INSIGHTS", RACE_INSIGHTS],
  ["PROPOSAL_INSIGHT_MAP", PROPOSAL_INSIGHT_MAP],
  ["PROPOSALS_CONTEXT.body", PROPOSALS_CONTEXT.body],
  ["LOGISTICS", LOGISTICS],
];
for (const [name, obj] of CONTENT_OBJECTS) {
  for (const [path, text] of strings(obj)) {
    if (/\.sources\[\d+\]\.(title|url)$/.test(path) || /\.url$/.test(path)) continue; // source titles may quote headlines
    for (const re of OPINION) if (re.test(text)) err(`opinion language in ${name}.${path}: /${re.source}/`);
    for (const re of POLLING_HARD) if (re.test(text)) err(`polling in ${name}.${path}: /${re.source}/`);
    if (/\bpoll(?:s|ing|ster)?\b/i.test(text) && !/\bpoll(?:ing|s)? (?:site|place|worker|hours|close|closed|open|opened)/i.test(text)) warn(`mentions polls in ${name}.${path} (allowed only as context, never as a number)`);
  }
}

/* ---------- 3. district, not address ---------- */
for (const f of ["areaShort", "areaName", "areaLabel", "coverage", "sharedRaces", "districts"] as const) {
  const v = (ELECTION as Record<string, unknown>)[f];
  if (typeof v !== "string" || !v.trim()) err(`ELECTION.${f} missing`);
}
for (const [k, v] of Object.entries(ELECTION)) {
  if (typeof v === "string" && /\b\d{1,5}\s+[A-Z][A-Za-z]+\s+(?:Street|St\.|Avenue|Ave\.|Road|Rd\.|Place|Pl\.|Boulevard|Blvd\.)\b/.test(v) && !/east of|west of|north of|south of/i.test(v)) {
    err(`ELECTION.${k} looks like a street address; describe the district instead`);
  }
}
if (!LOGISTICS.lookup?.length) err("LOGISTICS.lookup must list at least one official poll-site lookup");

/* ---------- 4. notices present in the UI and PDF ---------- */
const root = process.cwd(); // npm runs scripts from the package root
const ballotTsx = readFileSync(join(root, "components/Ballot.tsx"), "utf8");
for (const needle of ["Sample ballot for planning only", "Nothing you mark here is a vote", "not an official ballot", "stored only in this browser"]) {
  if (!ballotTsx.toLowerCase().includes(needle.toLowerCase())) err(`components/Ballot.tsx no longer contains "${needle}"`);
}
// every sheet component (race sheets and the proposal sheet) must carry both notices
for (const needle of ["<SampleNotice />", "<SampleWatermark />"]) {
  const n = ballotTsx.split(needle).length - 1;
  if (n < 2) err(`components/Ballot.tsx uses ${needle} ${n} time(s); it must appear on every sheet (at least 2)`);
}
const pdfTs = readFileSync(join(root, "lib/pdf.ts"), "utf8");
if (!/SAMPLE/.test(pdfTs)) err("lib/pdf.ts no longer labels the download as a SAMPLE ballot");
const aboutHasStandards = ballotTsx.includes("STANDARDS.map(");
if (!aboutHasStandards) err("components/Ballot.tsx no longer shows the editorial standards");
for (const needle of ['fetch("', "XMLHttpRequest", "navigator.sendBeacon"]) {
  const hits = [ballotTsx, readFileSync(join(root, "lib/picks.ts"), "utf8")].filter((f) => f.includes(needle)).length;
  if (hits) err(`network call (${needle}) found in UI or picks storage; picks must never leave the device`);
}

/* ---------- report ---------- */
for (const w of warnings) console.warn("warning:", w);
if (errors.length) {
  console.error(`\ncontent check failed with ${errors.length} error(s):`);
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log(`content check passed: ${RACES.length} races, ${Object.values(RACE_INSIGHTS).reduce((n, r) => n + r.candidates.length, 0)} candidates, ${PROPOSALS.length} proposals, ${warnings.length} warning(s).`);
