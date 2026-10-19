# Ballot Buddy

A voter guide that looks like the ballot.

Ballot Buddy shows one real ballot exactly as it will look in the booth (same sheets, rows, columns and party lines as the paper), explains every race and proposal with dated sources, and gives the voter one PDF to carry: a plain-English plan of their choices followed by the official sample ballot with their ovals filled in. Nothing a voter marks leaves their device.

This repository is a complete, working instance for New York City's November 3, 2026 general election, for the part of Manhattan's 65th Assembly District inside the 1st Municipal Court District. It is also a template: `AGENTS.md` is a step-by-step guide written for coding agents (Claude Code, Codex, Cursor and the like) to produce the same thing for any district in a day.

## What it does

- Faithful ballot layout from the Board of Elections' own sample ballot, on desktop and phones.
- An Insights panel on every race (what the office does, how nominations work, who is running) and a full profile on every candidate (record, endorsements, money, controversies, and what could not be verified), all attributed to dated sources.
- Plain-English explainers for every ballot proposal: what changes, the status quo, the case for and against with each argument attributed, who has taken a position.
- Honest handling of the parts of a ballot that confuse people: fusion lines, placeholder candidates, uncontested races, vote-for-six judicial slates, proposals on the back.
- Voting information with official lookup links, dates, hours and the rules that protect a ballot.
- One-click PDF: voting plan plus marked sample ballot, drawn onto the official file at the exact oval coordinates.
- An "I planned to vote" sticker image to share instead of a ballot.
- No backend, no accounts, no analytics. Picks are stored in the browser only.

## Build one for your district

Open this repository in a coding agent and paste the kickoff prompt at the end of `AGENTS.md`. The guide covers getting the official sample ballot, defining the district from official maps, mapping the ovals, the research standard (neutral, attributed, dated, no polling), logistics verification, testing and deployment.

If you prefer to do it by hand, the same guide works for people.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

Deploy by importing the repository into Vercel (or any static host). No configuration.

## Editorial standards, enforced

The guide is nonpartisan by construction: no endorsements or opinion anywhere, every factual claim sourced and dated, characterizations labeled, both sides of every proposal given their strongest attributed case, no polling. The standards are shown to readers in the app's About panel (`content/standards.ts`), and the testable ones are enforced by `scripts/check-content.ts`, which runs before every build and fails it on opinion language, polling, missing sources or attribution, incomplete coverage of the ballot, address-based coverage copy, a removed sample-ballot notice, or any network call from the picks storage. A fork that wants to slant the guide has to remove that check in the open.

## Credits

Built by North Harbor Technologies in New York and released for anyone to use for their own community. Research for the included instance was compiled on October 19, 2026 and is dated throughout. The mascot artwork may be replaced in a fork.

## Disclaimer

Not an official ballot. Not affiliated with any board of elections, party or campaign. Verify time-sensitive items against your election authority's official voter guide before you vote.

## License

MIT. See `LICENSE`.

## Brand policy

"Ballot Buddy," the mascot and the sticker artwork identify instances built to the standards above. You may use them for an instance that keeps `scripts/check-content.ts` and the editorial standards intact and that names its own publisher in `PUBLISHER`. If you remove or weaken the check, or add endorsements or opinion, rename the project and replace the artwork; do not present the result as Ballot Buddy or as connected to North Harbor Technologies. The code remains MIT either way.
