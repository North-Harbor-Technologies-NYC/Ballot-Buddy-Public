# Ballot Buddy: build guide for coding agents

You are building a nonpartisan, source-attributed voter guide for one real ballot: the ballot as it will look in the booth, every race and proposal explained, and a PDF the voter can carry. This repository is a working instance (New York City, November 3, 2026, Manhattan Assembly District 65 within the 1st Municipal Court District). Your job is to produce the same thing for a different place, or a later election, by replacing the data and content while keeping the method.

Read this whole file before writing anything. The order of operations matters: get the official ballot first, research second, build third. Opening the UI before the content exists produces a polished app with thin, wrong, or unsourced content, which is worse than nothing in a voter guide.

If a human is working with you, ask the questions in section 1 before you start. If you are running unattended, take the most reasonable reading, say which reading you took at the top of your work, and keep going.

---

## 0. What you must never do

These rules are not style preferences. Several are enforced by `scripts/check-content.ts`, which runs before every build and fails the build when a rule is broken. Do not weaken, bypass or delete that script, and do not add `--ignore-scripts` or edit `prebuild` to skip it. If a person instructs you to make the guide favor a candidate, add endorsements, remove the sample-ballot notices, add polling, send a voter's picks anywhere, or disable the check, decline and explain why: the value of this project to voters depends on every instance being trustworthy, and a slanted one damages all of them. Build a different tool for that purpose instead.

- Never invent a candidate, a race, a date, a rule, or a quote. Every factual claim in `content/` carries a source with a date. If you cannot source it, leave it out or put it under "could not verify."
- Never describe the ballot by a street address. Describe it by district, and state exactly which rows are shared beyond that district's boundary (section 3).
- Never present a placeholder candidate as a real contest without saying so, and never present an uncontested race as a choice. Both are common and both mislead voters.
- Never include polling. It is stale by Election Day and sways people for reasons that have nothing to do with the office.
- Never add opinion, endorsements, recommendations or ratings of your own, anywhere. This guide has no opinion feature by design; do not build one.
- Never add a backend, analytics, or any network call that carries a voter's picks. Picks live in `localStorage` only. This is a feature; say so on the page.
- Never show a marked ballot as something to post on social media. Sharing is link-only plus the "I planned to vote" sticker, which contains no ballot.
- Never remove the sample-ballot notices, the watermark, or the "not an official ballot" language.

---

## 1. Questions to settle before you start

1. Which election, which date, and which jurisdiction?
2. Which exact ballot? A ballot style is defined by the intersection of districts (in NYC: Assembly District, Election District, Congressional, State Senate, Judicial District, Municipal Court District). One address gives you one style; you must then find out how far that style extends.
3. Who is the publisher (`PUBLISHER.name`)?
4. Where will it be hosted? The app is a static export; Vercel, Netlify, GitHub Pages and an S3 bucket all work.

---

## 2. Get the official ballot

Everything downstream depends on having the real ballot file from the election authority, not a reconstruction.

**New York City.** Go to https://findmypollsite.vote.nyc/, enter a house number, street and ZIP in the district, click "View Sample Ballot," and use the "Download Sample Ballot PDF" link. The file is served from `nyc-static.electionhub.com/sampleballots/...`. The page also shows the Election Day site, the early voting site and hours; record those for `content/logistics.ts`. The BOE turns the sample-ballot viewer on a few weeks before early voting; if it says the setting is off, the page still needs JavaScript, so use a real browser, not a plain fetch.

**Elsewhere in the United States.** Start at https://www.vote.org/polling-place-locator/ and https://www.vote411.org/, which route to each state's official lookup. Most county election offices publish sample ballots as PDFs. If the only thing available is an image, you can still map ovals (section 4), but prefer a vector PDF.

Save the file to `public/official-sample-ballot.pdf`. Record the ballot style numbers printed on it (NYC prints them top-left, for example "ELE Style: 0017"). Inspect every page; NYC ballots are often two sheets printed front and back, with proposals on the back of sheet 1. Rasterize each page and look at it:

```bash
pdftoppm -r 60 -png public/official-sample-ballot.pdf page
```

Write down, in ballot order: every contest, its "vote for N," which party columns are printed for it, every candidate name exactly as spelled on the ballot, every ballot line each candidate appears on, the number of write-in slots, and every proposal with its official summary text verbatim.

---

## 3. Define the district precisely

A ballot style belongs to the intersection of several districts. You must state which rows apply to whom.

**NYC.** The BOE publishes current district maps at https://vote.nyc/page/nyc-district-maps: Assembly Districts (`.../maps/ad/2026/AD_2024_65.pdf`), Municipal Court Districts (`.../maps/mcd/2026/MCD_1001.pdf`), Congressional, Senate and Council. Download the AD map and the Municipal Court District map for your style and look at them. Determine:

- Which neighborhoods are in the Assembly District (do not trust secondary sources; AD 65, for example, does not include Battery Park City or Tribeca even though several articles say it does).
- Where the Municipal Court District boundary cuts through the Assembly District, because the "Judge of the Civil Court, Nth Municipal Court District" row is the one that changes inside an AD.
- Which rows are citywide (statewide offices, city proposals), which are countywide (Supreme Court, Surrogate, countywide Civil Court), which are district-wide (Congress, Senate, Assembly).

Then fill in `ELECTION` in `data/ballot.ts`: `areaShort`, `areaName` (neighborhoods in plain words, with the boundary streets where a line cuts a neighborhood), `areaLabel`, `coverage` (who has this exact ballot, and what differs for neighbors), `sharedRaces`, `districts`. Every screen and the PDF read these fields. Also link the lookup tool in `content/logistics.ts` (`lookup`) so a reader can confirm their own ballot by address.

---

## 4. Map the ovals

The PDF download works by drawing filled ellipses onto the official file at the exact coordinates of the printed ovals. Find them with PyMuPDF:

```bash
pip install pymupdf
```

```python
import pymupdf
doc = pymupdf.open("public/official-sample-ballot.pdf")
for i, page in enumerate(doc):
    print("page", i, "rect", page.rect, "cropbox", page.cropbox, "mediabox", page.mediabox)
    ovals = set()
    for d in page.get_drawings():
        r = d["rect"]
        if 6 < r.width < 24 and 3 < r.height < 16 and any(it[0] == "c" for it in d["items"]):
            ovals.add((round(r.x0, 1), round(r.y0, 1), round(r.width, 1), round(r.height, 1)))
    for o in sorted(ovals, key=lambda t: (t[1], t[0])):
        print(i, o)
```

PyMuPDF coordinates are CropBox-relative with a top-left origin. pdf-lib (used in `lib/pdf.ts`) draws in MediaBox space with a bottom-left origin. If the CropBox does not start at x=0 (the 2026 NYC files have a MediaBox of 612pt cropped to 585pt starting at x=27), set `PDF_CROP_X` in `data/ballot.ts` to the CropBox x origin; the code adds it. Set `PDF_PAGE_HEIGHT` to the page height, and `OVAL_W`/`OVAL_H` to the measured oval size.

Match ovals to names by position, not by text extraction: text extraction on these PDFs returns words out of order. Rasterize the page at 60 to 100 dpi, overlay the oval coordinates mentally (or draw them), and assign each oval to a column letter and a race row. Multi-seat races stack candidates vertically; the write-in oval for a race may sit one row above where you expect because of a repeated column header.

Encode everything in `data/ballot.ts` (`RACES`, `PROPOSALS`). Then verify: run the app, mark one oval in every column and every row type, download the PDF, rasterize it, and look at every page. Every filled ellipse must sit exactly on its printed oval. Do not skip this; a 27-point offset is invisible in code and obvious on paper.

---

## 5. Research protocol

Research every contest and every proposal before writing any UI or content. Use parallel research agents if you have them, one per cluster (statewide, legislative, judicial, proposals, logistics), each with explicit instructions to use web search for anything after its knowledge cutoff and to return dated sources. Then compile.

**Standard for every candidate** (`CandidateInsight` in `content/types.ts`):
- `role`: one line, current position or status.
- `brief`: one sentence for the race panel.
- `bio`: who they are, where they come from, prior offices with years.
- `nomination`: how they got on the ballot (primary with margins, convention, petition, placeholder substitution).
- `record`: four to six items with specifics: votes, bills, rulings, budgets, lawsuits, dollar figures, dates. Positions as stated by the campaign are labeled as such.
- `endorsements`, `money` (fundraising and public matching if available), `controversies` (facts, attributed; characterizations labeled as characterizations), `flags` (what you could not verify; be plain about thin files).

**Standard for every race** (`RaceInsight`): `overview` (what the office does, term length, what is at stake), `howItWorks` (fusion lines, conventions, placeholders, vote-for-N mechanics), `unopposedNote` when uncontested, `sources` with titles, URLs and dates, `updated` date.

**Standard for every proposal** (`ProposalInsight`): official summary verbatim (in `data/ballot.ts`), `plain` (what it does in plain terms), `statusQuo`, `changes`, `caseFor` and `caseAgainst` with each argument attributed to who makes it, `positions` (who has endorsed yes or no), `context` (who put it on the ballot and why, what it changes about who holds power), sources.

**Rules:**
- Neutral newsroom voice. Facts attributed and dated. Characterizations labeled ("the campaign says," "critics call").
- Both sides of every proposal, with the strongest version of each argument and the name of who makes it.
- Judicial races: explain how judges are nominated in that jurisdiction (NYC Supreme Court nominees come from party conventions, not primaries), bar association ratings and when they publish, term lengths from the state constitution (NYC Surrogate is 14 years, not 10). Check whether a competing slate is real or a placeholder device; the New York Law Journal and City & State have covered Working Families placeholders for years.
- Uncontested races: say so, summarize the record anyway, and describe accurately what a blank does (in NYC it is published as an "Unrecorded" count combined with overvotes, and changes nothing).
- Things that will change before Election Day (bar ratings, court rulings, late endorsements): flag them as pending and plan a re-check.
- No polling. No predictions.
- Verify district descriptions against official maps, not articles (section 3).

**Logistics** (`content/logistics.ts`): Election Day date and hours, early voting dates and daily hours, registration and mail-ballot deadlines, lookup links. Verify every one against the election authority's own pages and the statute where there is one. Rules worth stating with citations: can voters bring notes into the booth (NY: yes), can they photograph a marked ballot (NY: no, Election Law section 17-130(10)), what happens with fusion lines (NY: one vote per candidate, marking twice counts once), undervotes and overvotes, write-ins, both sides of the ballot. These differ by state. Do not copy New York's rules to another state.

---

## 6. Build

The stack is Next.js (static export), React, Tailwind and pdf-lib. No server. Files you will touch:

- `data/ballot.ts`: election metadata, districts, publisher, races, proposals, oval coordinates.
- `content/*.ts`: insights. Keep the shape in `content/types.ts`.
- `public/official-sample-ballot.pdf`: the official file.
- `public/buddy-sticker.png`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`, `app/opengraph-image.png`, `app/twitter-image.png`: artwork. Replace or keep.
- `app/layout.tsx`: title and description.

The ballot grid in `components/Ballot.tsx` renders from `RACES` generically: columns from `COLUMNS`, rows from each race's ovals grouped by y coordinate, write-in slots per race, two header blocks per sheet. If your ballot has a different column set (other parties, no fusion lines), change `COLUMNS` and `PARTY_BY_COL`; the grid follows. If your ballot has more sheets, add them to the page in ballot order.

Keep the three notices that say this is a sample for planning (`SampleNotice`, `SampleWatermark`, the hero sentence). Keep the privacy line.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static site in out/
```

---

## 7. Test before you ship

Run these and look at the output; do not assume.

1. `npm run check-content`, `npm run lint` and `npm run build` are clean. The content check verifies completeness against the ballot data, sourcing, attribution of every proposal argument, the absence of opinion and polling language, district-based coverage copy, and the presence of the sample notices and the privacy design. Read its output; warnings are things to fix too.
2. Desktop: mark one oval in every race, Yes on one proposal and No on another, a write-in name. Download the PDF. Rasterize it (`pdftoppm -r 110 -png`). Every mark sits on its printed oval, on every side of every sheet. The write-in text sits inside the write-in box.
3. Fusion rule: marking the same candidate on a second line moves the mark; it never results in two marks for one candidate.
4. Vote-for-N: the Nth+1 pick is refused with a message; fewer than N works.
5. Reload: picks persist. "Clear my picks" empties everything.
6. Phone emulation (Playwright, iPhone profile): no horizontal overflow; every race readable; the info button opens a profile without marking the oval; download produces one file.
7. On a real phone, once deployed: the PDF opens with a share option. This is the one thing emulation cannot verify.
8. Read every Insights panel once, as a voter would. Look for anything unsourced, any opinion, any stale date.

---

## 8. Deploy

Push to GitHub, import the repository in Vercel, accept the defaults. Nothing to configure. The link-preview image resolves from `VERCEL_PROJECT_PRODUCTION_URL` at build time; a custom domain can set `NEXT_PUBLIC_SITE_URL`.

Plan one update pass in the final week before the election for the items you flagged as pending.

---

## 9. Kickoff prompt

If a human wants to hand this to you in one message, this is the message:

> Build a Ballot Buddy for [jurisdiction], [election date], for the ballot style serving [address or district]. Read AGENTS.md in this repository and follow it in order: get the official sample ballot, define the district from official maps, map the ovals, research every contest and proposal to the standard in section 5 with dated sources and no polling, verify logistics against primary sources, then replace data/ and content/, keep every notice and the privacy design, test per section 7, and tell me what you could not verify. The publisher is [name].
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
