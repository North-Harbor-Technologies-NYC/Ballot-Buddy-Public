import { RACES, PROPOSALS, type Race } from "@/data/ballot";

export type YesNo = "yes" | "no";

export interface Picks {
  /** raceId -> selected oval ids (printed candidates) and write-in slots ("w:<raceId>:<n>") */
  races: Record<string, string[]>;
  /** raceId -> write-in names by slot index */
  writeIns: Record<string, string[]>;
  props: Record<string, YesNo>;
}

export const EMPTY_PICKS: Picks = { races: {}, writeIns: {}, props: {} };

export const STORAGE_KEY = "ballot-buddy:2026-general:ad65:v1";

/*
 * A tiny external store over localStorage so React can hydrate safely:
 * the server snapshot is always empty, the client snapshot is the stored JSON.
 * If storage is unavailable (private mode, blocked), picks live in memory.
 */
let memoryRaw: string | null = null;
const listeners = new Set<() => void>();

export function subscribePicks(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function getPicksSnapshot(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? memoryRaw;
  } catch {
    return memoryRaw;
  }
}

export function getPicksServerSnapshot(): string | null {
  return null;
}

export function parsePicks(raw: string | null): Picks {
  if (!raw) return EMPTY_PICKS;
  try {
    const parsed = JSON.parse(raw) as Partial<Picks>;
    return {
      races: parsed.races ?? {},
      writeIns: parsed.writeIns ?? {},
      props: parsed.props ?? {},
    };
  } catch {
    return EMPTY_PICKS;
  }
}

export function writePicks(p: Picks) {
  const raw = JSON.stringify(p);
  memoryRaw = raw;
  try {
    localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    /* storage unavailable; memoryRaw carries the state */
  }
  listeners.forEach((l) => l());
}

export function writeInId(raceId: string, slot: number) {
  return `w:${raceId}:${slot}`;
}

export function isWriteInId(id: string) {
  return id.startsWith("w:");
}

/**
 * Toggle an oval for a printed candidate.
 * Rules: selecting a candidate on one line deselects the same candidate on any
 * other line (NY counts a fusion candidate once). In a vote-for-one race a new
 * pick replaces the old one. In a multi-seat race the maximum is enforced.
 */
export function toggleOval(picks: Picks, race: Race, ovalId: string): { picks: Picks; blocked?: string } {
  const current = picks.races[race.id] ?? [];
  if (current.includes(ovalId)) {
    return { picks: { ...picks, races: { ...picks.races, [race.id]: current.filter((x) => x !== ovalId) } } };
  }
  const oval = race.ovals.find((o) => o.id === ovalId);
  if (!oval) return { picks };
  // drop any other line for the same candidate
  const sameCandidate = race.ovals.filter((o) => o.candidateId === oval.candidateId).map((o) => o.id);
  let next = current.filter((x) => !sameCandidate.includes(x));
  if (next.length >= race.voteFor) {
    if (race.voteFor === 1) {
      next = [];
    } else {
      return { picks, blocked: `You can vote for up to ${race.voteFor} in this race. Unmark one first.` };
    }
  }
  next = [...next, ovalId];
  return { picks: { ...picks, races: { ...picks.races, [race.id]: next } } };
}

export function toggleWriteIn(picks: Picks, race: Race, slot: number): { picks: Picks; blocked?: string } {
  const id = writeInId(race.id, slot);
  const current = picks.races[race.id] ?? [];
  if (current.includes(id)) {
    return { picks: { ...picks, races: { ...picks.races, [race.id]: current.filter((x) => x !== id) } } };
  }
  let next = current;
  if (next.length >= race.voteFor) {
    if (race.voteFor === 1) next = [];
    else return { picks, blocked: `You can vote for up to ${race.voteFor} in this race. Unmark one first.` };
  }
  return { picks: { ...picks, races: { ...picks.races, [race.id]: [...next, id] } } };
}

export function setWriteInName(picks: Picks, race: Race, slot: number, name: string): Picks {
  const names = [...(picks.writeIns[race.id] ?? [])];
  names[slot] = name;
  let next: Picks = { ...picks, writeIns: { ...picks.writeIns, [race.id]: names } };
  const id = writeInId(race.id, slot);
  const selected = (next.races[race.id] ?? []).includes(id);
  if (name.trim() && !selected) {
    const r = toggleWriteIn(next, race, slot);
    if (!r.blocked) next = r.picks;
  }
  if (!name.trim() && selected) {
    next = toggleWriteIn(next, race, slot).picks;
  }
  return next;
}

export function setProposal(picks: Picks, propId: string, value: YesNo): Picks {
  const current = picks.props[propId];
  const props = { ...picks.props };
  if (current === value) delete props[propId];
  else props[propId] = value;
  return { ...picks, props };
}

export function countMarked(picks: Picks) {
  const racesMarked = RACES.filter((r) => (picks.races[r.id] ?? []).length > 0).length;
  const propsMarked = PROPOSALS.filter((p) => picks.props[p.id]).length;
  return { marked: racesMarked + propsMarked, total: RACES.length + PROPOSALS.length };
}
