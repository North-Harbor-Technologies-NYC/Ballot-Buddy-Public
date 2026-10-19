/**
 * Ballot data for NYC General Election, November 3, 2026
 * New York County, 65th Assembly District, ballot styles 0017 (sheet 1) and 0581 (sheet 2)
 * Source: NYC Board of Elections sample ballot, styles 0017 and 0581, which serve the part of
 * the 65th Assembly District that lies in the 1st Municipal Court District
 * (CD 10, SD 27, AD 65, 1st Judicial District). Obtained via https://findmypollsite.vote.nyc/
 *
 * Oval coordinates are in PDF points with a TOP-LEFT origin, measured from the
 * official sample ballot PDF (585 x 1368 pt pages). Oval size is 8.5 x 5.7 pt.
 * Page index: 0 = sheet 1 front (races), 1 = sheet 1 back (proposals),
 * 2 = sheet 2 front (judicial), 3 = sheet 2 back (blank).
 */

export type Column = "A" | "B" | "C" | "D" | "K";

export const COLUMNS: { col: Column; party: string }[] = [
  { col: "A", party: "Democratic" },
  { col: "B", party: "Republican" },
  { col: "C", party: "Conservative" },
  { col: "D", party: "Working Families" },
  { col: "K", party: "Vote Affordable" },
];

export const PARTY_BY_COL: Record<Column, string> = Object.fromEntries(
  COLUMNS.map((c) => [c.col, c.party]),
) as Record<Column, string>;

export interface Oval {
  /** unique within the ballot */
  id: string;
  /** groups ovals that belong to the same candidate on different lines (fusion) */
  candidateId: string;
  name: string;
  /** running mate, for Governor / Lt. Governor */
  mate?: string;
  col: Column;
  page: number;
  x: number;
  y: number;
}

export interface WriteIn {
  page: number;
  x: number;
  y: number;
}

export interface Race {
  id: string;
  title: string;
  /** shown under the title, as printed on the ballot */
  jurisdiction: string;
  voteFor: number;
  /** which physical sheet and side the race is printed on */
  sheet: 1 | 2;
  ovals: Oval[];
  writeIns: WriteIn[];
  /** true when the number of distinct candidates is <= voteFor */
  unopposed: boolean;
  /** which of the five columns are printed with a header for this race */
  columns: Column[];
}

export interface Proposal {
  id: string;
  number: number;
  title: string;
  /** official ballot summary text */
  summary: string;
  yes: { page: number; x: number; y: number };
  no: { page: number; x: number; y: number };
}

const COL_X: Record<Column, number> = {
  A: 59.3,
  B: 127.4,
  C: 195.4,
  D: 263.4,
  K: 331.4,
};
const WRITE_IN_X = 467.6;

function oval(
  id: string,
  candidateId: string,
  name: string,
  col: Column,
  page: number,
  y: number,
  mate?: string,
): Oval {
  return { id, candidateId, name, mate, col, page, x: COL_X[col], y };
}

export const RACES: Race[] = [
  {
    id: "governor",
    title: "Governor / Lieutenant Governor",
    jurisdiction: "Citywide",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B", "C", "D", "K"],
    unopposed: false,
    ovals: [
      oval("gov-A", "hochul", "Kathy C. Hochul", "A", 0, 312.7, "Adrienne E. Adams"),
      oval("gov-B", "blakeman", "Bruce A. Blakeman", "B", 0, 312.7, "Todd Hood"),
      oval("gov-C", "blakeman", "Bruce A. Blakeman", "C", 0, 312.7, "Todd Hood"),
      oval("gov-D", "hochul", "Kathy C. Hochul", "D", 0, 312.7, "Adrienne E. Adams"),
      oval("gov-K", "blakeman", "Bruce A. Blakeman", "K", 0, 312.7, "Todd Hood"),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 312.7 }],
  },
  {
    id: "comptroller",
    title: "State Comptroller",
    jurisdiction: "Citywide",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B", "C", "D"],
    unopposed: false,
    ovals: [
      oval("comp-A", "dinapoli", "Thomas P. DiNapoli", "A", 0, 440.2),
      oval("comp-B", "hernandez", "Joseph Hernandez", "B", 0, 440.2),
      oval("comp-C", "hernandez", "Joseph Hernandez", "C", 0, 440.2),
      oval("comp-D", "dinapoli", "Thomas P. DiNapoli", "D", 0, 440.2),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 411.8 }],
  },
  {
    id: "attorney-general",
    title: "Attorney General",
    jurisdiction: "Citywide",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B", "C", "D"],
    unopposed: false,
    ovals: [
      oval("ag-A", "james", "Letitia A. James", "A", 0, 511.1),
      oval("ag-B", "komatireddy", "Saritha Komatireddy", "B", 0, 511.1),
      oval("ag-C", "komatireddy", "Saritha Komatireddy", "C", 0, 511.1),
      oval("ag-D", "james", "Letitia A. James", "D", 0, 511.1),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 511.1 }],
  },
  {
    id: "congress",
    title: "Representative in Congress",
    jurisdiction: "10th Congressional District",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B", "C", "D"],
    unopposed: false,
    ovals: [
      oval("cd10-A", "lander", "Brad Lander", "A", 0, 581.9),
      oval("cd10-B", "moore", "Jennifer E. Moore", "B", 0, 581.9),
      oval("cd10-C", "moore", "Jennifer E. Moore", "C", 0, 581.9),
      oval("cd10-D", "lander", "Brad Lander", "D", 0, 581.9),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 581.9 }],
  },
  {
    id: "state-senate",
    title: "State Senator",
    jurisdiction: "27th Senatorial District",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B", "C", "D"],
    unopposed: false,
    ovals: [
      oval("sd27-A", "lee", "Grace Lee", "A", 0, 652.8),
      oval("sd27-B", "murillo", "Jason C. Murillo", "B", 0, 652.8),
      oval("sd27-C", "murillo", "Jason C. Murillo", "C", 0, 652.8),
      oval("sd27-D", "lee", "Grace Lee", "D", 0, 652.8),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 652.8 }],
  },
  {
    id: "assembly",
    title: "Member of the Assembly",
    jurisdiction: "65th Assembly District",
    voteFor: 1,
    sheet: 1,
    columns: ["A", "B"],
    unopposed: false,
    ovals: [
      oval("ad65-A", "sairitupac", "Illapa Sairitupac", "A", 0, 723.7),
      oval("ad65-B", "qiu", "Helen Qiu", "B", 0, 723.7),
    ],
    writeIns: [{ page: 0, x: WRITE_IN_X, y: 723.7 }],
  },
  {
    id: "surrogate",
    title: "Surrogate",
    jurisdiction: "New York County",
    voteFor: 1,
    sheet: 2,
    columns: ["A"],
    unopposed: true,
    ovals: [oval("surr-A", "mella", "Rita Mella", "A", 2, 142.6)],
    writeIns: [{ page: 2, x: WRITE_IN_X, y: 142.6 }],
  },
  {
    id: "supreme-court",
    title: "Justice of the Supreme Court",
    jurisdiction: "1st Judicial District",
    voteFor: 6,
    sheet: 2,
    columns: ["A", "D"],
    unopposed: false,
    ovals: [
      oval("sc-A1", "hagler", "Shlomo S. Hagler", "A", 2, 241.8),
      oval("sc-D1", "taylor", "Amy S. Taylor", "D", 2, 241.8),
      oval("sc-A2", "mendez", "Manuel J. Mendez", "A", 2, 312.7),
      oval("sc-D2", "goldfein", "Joshua E. Goldfein", "D", 2, 312.7),
      oval("sc-A3", "scarpulla", "Saliann Scarpulla", "A", 2, 383.6),
      oval("sc-D3", "fontaine", "Sienna M. Fontaine", "D", 2, 383.6),
      oval("sc-A4", "kingo", "Hasa A. Kingo", "A", 2, 454.4),
      oval("sc-D4", "cohen", "Bob Cohen", "D", 2, 454.4),
      oval("sc-A5", "waterman-marshall", "Kathleen Waterman-Marshall", "A", 2, 525.2),
      oval("sc-D5", "rizzo", "Jeffrey W. Rizzo", "D", 2, 525.2),
      oval("sc-A6", "chin", "Christopher Chin", "A", 2, 596.2),
    ],
    writeIns: [
      { page: 2, x: WRITE_IN_X, y: 213.5 },
      { page: 2, x: WRITE_IN_X, y: 312.7 },
      { page: 2, x: WRITE_IN_X, y: 383.6 },
      { page: 2, x: WRITE_IN_X, y: 454.4 },
      { page: 2, x: WRITE_IN_X, y: 525.2 },
      { page: 2, x: WRITE_IN_X, y: 596.2 },
    ],
  },
  {
    id: "civil-court-county",
    title: "Judge of the Civil Court",
    jurisdiction: "County of New York",
    voteFor: 3,
    sheet: 2,
    columns: ["A"],
    unopposed: true,
    ovals: [
      oval("cc-A1", "hanshaft", "Josh E. Hanshaft", "A", 2, 667.0),
      oval("cc-A2", "morales-minerva", "Emily Morales-Minerva", "A", 2, 737.9),
      oval("cc-A3", "frants", "Vlad Frants", "A", 2, 808.7),
    ],
    writeIns: [
      { page: 2, x: WRITE_IN_X, y: 667.0 },
      { page: 2, x: WRITE_IN_X, y: 737.9 },
      { page: 2, x: WRITE_IN_X, y: 808.7 },
    ],
  },
  {
    id: "civil-court-municipal",
    title: "Judge of the Civil Court",
    jurisdiction: "1st Municipal Court District",
    voteFor: 1,
    sheet: 2,
    columns: ["A"],
    unopposed: true,
    ovals: [oval("ccm-A", "flores", "Eric Flores", "A", 2, 879.6)],
    writeIns: [{ page: 2, x: WRITE_IN_X, y: 879.6 }],
  },
];

export const PROPOSALS: Proposal[] = [
  {
    id: "prop-1",
    number: 1,
    title: "Speed Up Process for Granting a Revocable Consent to Use Public Space",
    summary:
      "Simplify process to use public space for uses such as ramps, planters and cafes, by removing mandatory hearings and Council disapproval of sidewalk cafes, while maintaining community and Council input. “Yes” speeds up process to use public space while maintaining community input. “No” maintains longer process with mandatory public hearing to use public space and Council review of sidewalk cafes.",
    yes: { page: 1, x: 59.3, y: 638.6 },
    no: { page: 1, x: 104.6, y: 638.6 },
  },
  {
    id: "prop-2",
    number: 2,
    title: "Reduce City Contractor Paperwork; Require Regular Meetings of Procurement Policy Board",
    summary:
      "Reduce paperwork for City contractors by authorizing Procurement Policy Board to simplify contractor questionnaire. Require quarterly meetings of the Procurement Policy Board. Remove mandatory hearing for required client services report. “Yes” amends Procurement Policy Board authority, including to simplify contractor questionnaire; authorizes Mayor to delegate certain contract approvals. “No” leaves laws unchanged, with Mayor and Comptroller maintaining longer questionnaire.",
    yes: { page: 1, x: 59.3, y: 1035.5 },
    no: { page: 1, x: 104.6, y: 1035.5 },
  },
  {
    id: "prop-3",
    number: 3,
    title: "Speed Up Street Safety Projects, Disposition of Unused City Property, Office Leasing",
    summary:
      "Simplify review of street safety projects to reduce construction timelines. Fast track disposition of unused City property with approval from City Planning Commission. Expedite leasing offices used for City workforce. “Yes” simplifies street project approval, City property disposition and office leasing. “No” maintains intra-agency consultation for road projects, Council approval for City property dispositions and Council disapproval of office leases.",
    yes: { page: 1, x: 240.8, y: 695.3 },
    no: { page: 1, x: 286.1, y: 695.3 },
  },
  {
    id: "prop-4",
    number: 4,
    title: "Simplify Building Permitting and Move Waterfront Permitting to Department of Buildings",
    summary:
      "Create centralized construction permits hub to simplify permitting. Move waterfront permitting from Department of Small Business Services to Department of Buildings. Allow construction approval by additional Department of Buildings officials. “Yes” simplifies permitting by authorizing a centralized permitting hub, moving waterfront permitting to Department of Buildings, and allowing additional Department of Buildings officials to issue approvals. “No” leaves laws unchanged.",
    yes: { page: 1, x: 240.8, y: 1092.2 },
    no: { page: 1, x: 286.1, y: 1092.2 },
  },
  {
    id: "prop-5",
    number: 5,
    title: "Set Contribution Targets for Rainy Day Fund to Promote Sufficient Budgetary Reserves",
    summary:
      "Set target amount of money to hold in reserve funds, including rainy day fund, to address unexpected financial hardships in future years, and require development of methodology to calculate contributions. “Yes” requires Mayor to develop methodology for calculating deposits to rainy day fund, with deposits subject to approval in the City budget. “No” leaves laws unchanged, with no reserves target.",
    yes: { page: 1, x: 422.2, y: 652.8 },
    no: { page: 1, x: 467.6, y: 652.8 },
  },
];

/**
 * Who publishes this instance: the accountable party, shown in the header, footer, About panel,
 * link previews, the voting plan PDF and the sticker image. Forks must set their own.
 */
export const PUBLISHER = {
  name: "North Harbor Technologies",
  url: "https://northharbortech.com",
  tagline: "Made in New York for our neighbors.",
};

/**
 * Credit for the template itself. Keep this line; see the brand policy in README.md.
 * The Ballot Buddy name and mascot may be used only by instances that keep scripts/check-content.ts intact.
 */
export const TEMPLATE_CREDIT = {
  text: "Built from the Ballot Buddy template",
  by: "North Harbor Technologies",
  url: "https://github.com/North-Harbor-Technologies/Ballot-Buddy",
};

export const PDF_PAGE_HEIGHT = 1368;
/** The BOE file's CropBox starts at x=27 of a 612pt MediaBox; coordinates above are CropBox-relative. */
export const PDF_CROP_X = 27;
export const OVAL_W = 8.5;
export const OVAL_H = 5.7;

export const ELECTION = {
  name: "General Election",
  date: "Tuesday, November 3, 2026",
  county: "County of New York",
  district: "65th Assembly District",
  /* Who this exact ballot is for. Forks: describe your own area here; every screen and PDF reads these fields. */
  areaShort: "Lower Manhattan (AD 65)",
  areaName: "the Financial District east of Broadway, the Seaport, Civic Center, the southern blocks of Chinatown and Two Bridges west of Clinton Street",
  areaLabel: "65th Assembly District, 1st Municipal Court District",
  coverage:
    "This ballot style serves the part of the 65th Assembly District that lies in the 1st Municipal Court District. Everyone else in the 65th Assembly District (the rest of Chinatown and the Lower East Side) has the identical ballot except the last row, Judge of the Civil Court, which is drawn for the 2nd Municipal Court District there.",
  sharedRaces: "Governor, Comptroller, Attorney General and the five proposals are the same citywide. Supreme Court, Surrogate and the three countywide Civil Court seats are the same across Manhattan. Congress (NY-10), State Senate (SD-27) and Assembly (AD-65) are shared by everyone in the 65th Assembly District.",
  districts: "CD 10 · SD 27 · AD 65 · 1st Judicial District · 1st Municipal Court District",
  ballotStyles: "Styles 0017 and 0581",
  /* Copy used by the share menu and the "I planned to vote" sticker. */
  shareText: "Ballot Buddy: the NYC Nov 3 ballot as it looks in the booth, every race and proposal explained with sources, and a PDF of your plan. Nothing you mark leaves your device.",
  stickerDateLine: "November 3, 2026 \u00b7 New York City",
  officialPdf: "/official-sample-ballot.pdf",
  sourceUrl: "https://findmypollsite.vote.nyc/",
};
