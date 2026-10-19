import type { ProposalInsight } from "./types";

const UPDATED = "October 19, 2026";

export const PROPOSALS_CONTEXT = {
  heading: "Where these five questions came from",
  body: [
    "All five are City Charter amendments written by the Commission on Government Efficiency (COGE), a 15-member Charter Revision Commission that Mayor Zohran Mamdani appointed on May 28, 2026, chaired by former ambassador Patrick Gaspard. Its members include DC 37's Henry Garrido, former Deputy Mayor Emma Wolfe, former Council Member Carlina Rivera, former Partnership for NYC president Kathryn Wylde and former First Deputy Mayor Marc Shaw. It held 10 hearings in June and July and adopted the five questions 15-0 on July 23, 2026. Citizens Union calls it one of the shortest charter commissions in city history.",
    "It replaced a commission Eric Adams appointed on his last day in office. At Mamdani's request the state budget added a rule letting an incoming mayor decline to confirm a predecessor's late-appointed commission; Mamdani did so on May 27, which also killed that commission's open-primaries question. A lawsuit by the Adams commission was dismissed in July (reported in passing; the decision itself was not located). Open primaries are not on this ballot; Unite NY's petition drive is now aimed at 2027.",
    "Each question passes with a majority of those voting on it. Leaving a question blank is neither a yes nor a no and does not affect the rest of your ballot. The questions are on the back of sheet 1. In 2025, voters approved the Adams-era proposals that created a 90-day expedited land-use review (ELURP) and an appeals board that can override Council rejections of affordable housing; Proposal 3 this year builds on that ELURP mechanism.",
    "COGE is running a $1.6 million “Vote on Faster Government” education campaign (nyc.gov/fast) that it describes as neutral; the Mayor appears in its video. The City Council did not campaign against these questions as it did in 2025, but a Council spokesperson said the Council is “concerned by the speed and process.” No New York Times, Daily News or Post editorial-board position had been published as of Oct. 19; the Post and Daily News usually editorialize in the final week.",
    "Who is for all five: Citizens Union, Abundance New York (which contributed to the COGE process), JFREJ, NYC-DSA, DRUM Beats, Vital City (calling them incremental), the Building Congress and the building trades. Who is against some: Common Cause NY (No on 1), Municipal Art Society (No on 3), Reinvent Albany (No on 5, objects to the bundling in 3), Citizens Budget Commission president Andrew Rein (personally No on 5), Center for Independence of the Disabled NY (No on 1), Long Island City Partnership (No on 3), D9 Harlem Votes (No on 1 through 4).",
  ],
  sources: [
    { title: "COGE Adopted Final Report 2026", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
    { title: "COGE Appendix A: Ballot Questions", url: "https://www.nyc.gov/assets/charter/downloads/pdf/2026/appendix_a_poposed_ballot_questions_20260723.pdf", date: "July 23, 2026" },
    { title: "Mayor Mamdani Announces Commission on Government Efficiency", url: "https://www.nyc.gov/mayors-office/news/2026/05/mayor-mamdani-announces-commission-on-government-efficiency-to-m", date: "May 28, 2026" },
    { title: "NYC Votes 2026 Ballot Proposals (official voter guide, with organization statements)", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-ballot-proposals/" },
    { title: "Citizens Union Recommends a Yes Vote on All Five", url: "https://citizensunion.org/document/2026-10-01/citizens-union-recommends-a-yes-vote-on-all-five-2026-charter-proposals/", date: "Oct 1, 2026" },
    { title: "Common Cause NY: 2026 NYC Ballot Proposals", url: "https://www.commoncause.org/new-york/2026-nyc-ballot-proposals/" },
    { title: "League of Women Voters NYC: Proposals 2026 (pros and cons)", url: "https://lwvnyc.org/proposals-2026/" },
    { title: "Fast-tracked, but falling short? Mamdani's efficiency measures head to voters", url: "https://www.amny.com/politics/mamdanis-efficiency-measures-head-to-nyc-voters/", date: "amNY, July 24, 2026" },
    { title: "NYC launches $1.6M campaign to explain 5 'faster government' ballot questions", url: "https://www.amny.com/news/nyc-coge-ballot-questions-faster-government/", date: "amNY, Sept 15, 2026" },
    { title: "Government Efficiency Proposals Come to New York City Voters", url: "https://www.citylandnyc.org/government-efficiency-proposals-come-to-new-york-city-voters/", date: "CityLand, Oct 2, 2026" },
    { title: "What Mamdani's Efficiency Commission Got Right, and Where it Fell Short", url: "https://www.vitalcitynyc.org/nyc-mamdani-coge-government-efficiency-ballot-reform-recommendations/", date: "Vital City, July 23, 2026" },
    { title: "Five ballot proposals NYC voters will decide on", url: "https://amsterdamnews.com/news/2026/10/15/five-ballot-proposals-nyc-voters-will-decide-on-during-november-election/", date: "Amsterdam News, Oct 15, 2026" },
  ],
};

export const PROPOSAL_INSIGHTS: ProposalInsight[] = [
  {
    proposalId: "prop-1",
    plain:
      "Makes it faster and cheaper to get city permission (a “revocable consent”) to put something on a public sidewalk or street: sidewalk and roadway cafés, wheelchair ramps and lifts, planters, benches. The main change is that sidewalk cafés would no longer get Community Board review or a City Council veto.",
    statusQuo:
      "The Department of Transportation must hold a public hearing on every petition, and the applicant pays to publish notice twice in newspapers (up to about $1,500). Sidewalk cafés have an extra layer: Community Board review and a City Council “call-up” that can disapprove the application (used 10 to 15 times a year, but adding up to 30 days to every application whether or not it is called up). Sidewalk café approvals take about 6 to 8 months; roadway cafés 3 to 5 months, often on separate tracks. The outdoor dining program shrank from about 11,770 pandemic-era participants to 1,549 fully permitted operations after the Council's 2023 law added review layers.",
    changes: [
      "Public hearings become discretionary (DOT decides); newspaper ads are replaced by a 6-day notice in the City Record.",
      "Sidewalk and roadway café applications merge into one.",
      "Sidewalk cafés are treated like every other revocable consent: no Community Board review and no Council call-up or disapproval. DOT must still notify the Community Board, Council Member and Borough President and give them a 15-day comment window.",
      "The city keeps the power to revoke any consent at any time. COGE estimates the process drops from about 8 months to about 2, saving up to $1,800 per business in fees; DOT separately promised to cut its final processing phase from 60-90 days to about 14.",
    ],
    caseFor: [
      { who: "NYC Hospitality Alliance, Open Plans, Long Island City Partnership, RPA, Municipal Art Society, Abundance NY, DSA, Reinvent Albany", what: "The process is costly, slow and complicated, and hurts thin-margin small businesses; café numbers have collapsed." },
      { who: "New York Lawyers for the Public Interest", what: "There is a backlog of accessibility-ramp applications, including for apartment buildings, stuck in the same process." },
      { who: "Citizens Union", what: "“A simple, positive step” that could cut months off approvals." },
    ],
    caseAgainst: [
      { who: "Common Cause NY", what: "Efficiency “should not come at the expense of public participation and legislative oversight.”" },
      { who: "Center for Independence of the Disabled NY", what: "Relying on written comments or City Record notices “creates a barrier to participation, particularly for low-income residents and people with sensory or digital access limitations”; Council members and Community Boards “are closest to the daily street-level realities.”" },
      { who: "League of Women Voters (cons listed)", what: "Possible sidewalk obstructions or lost parking; the notification method is unspecified; reduces Council members' power." },
    ],
    positions: {
      yes: ["Citizens Union", "Reinvent Albany", "Municipal Art Society", "Abundance NY", "JFREJ", "NYC-DSA", "NYC Hospitality Alliance", "Open Plans", "NYLPI", "DRUM Beats"],
      no: ["Common Cause NY", "Center for Independence of the Disabled NY", "D9 Harlem Votes"],
    },
    context:
      "In 2026 the Mayor and Council Speaker Julie Menin publicly blamed each other for outdoor-dining delays. The Council then passed a bill making roadway dining year-round (signed Aug. 31, 2026); that law does not remove the Council's call-up, and its sponsor said the two efforts “aren't necessarily in conflict.” Yes reduces the Council's role over sidewalk cafés; the Council keeps notice and comment.",
    sources: [
      { title: "COGE Final Report, Question 1", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
      { title: "NYC Votes: Ballot Proposal 1 statements", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/ballot-proposals-2026/ballot-proposal-1/" },
      { title: "Mamdani's Charter Panel To Speed Up Outdoor Dining Process by 75%", url: "https://nyc.streetsblog.org/2026/07/23/mamdanis-charter-panel-to-speed-up-outdoor-dining-process-by-75-bus-and-bike-lanes-by-33", date: "Streetsblog, July 23, 2026" },
      { title: "Common Cause NY position", url: "https://www.commoncause.org/new-york/2026-nyc-ballot-proposals/" },
      { title: "Citizens Union recommendation", url: "https://citizensunion.org/document/2026-10-01/citizens-union-recommends-a-yes-vote-on-all-five-2026-charter-proposals/", date: "Oct 1, 2026" },
    ],
    updated: UPDATED,
  },
  {
    proposalId: "prop-2",
    plain:
      "Lets the Procurement Policy Board tailor the city's one-size-fits-all vendor questionnaire by vendor size and contract value, requires that board to meet at least quarterly, makes permanent a comment period in place of hearings for non-competitive contracts, and lets the Mayor delegate certain contract approvals down to agency contracting officers.",
    statusQuo:
      "The city bought $42.3 billion in outside goods and services in fiscal 2025, nearly 40% of the budget; median time from solicitation to award is 387 days. The vendor questionnaire is set by Charter and identical for a $50,000 nonprofit and a $500 million construction firm. The five-member Procurement Policy Board (three mayoral, two Comptroller appointees, created in 1989 to curb corruption) has no required meeting schedule and meets irregularly. The Mayor can delegate approvals to the City Chief Procurement Officer but not further.",
    changes: [
      "The PPB may simplify the questionnaire by vendor type and contract value, and must meet at least quarterly.",
      "The comment-period substitute for public hearings on non-competitive contracts (currently a temporary state law) becomes permanent, with the PPB setting the dollar threshold.",
      "The Mayor may delegate approvals to agency chief contracting officers (COGE: saves one to two weeks on more than 120 contracts a year; Citizens Union describes this as covering non-competitive contracts above $5 million).",
      "The client-services plan hearing is replaced by a single report. COGE estimates up to 30 days (about 12%) saved per procurement.",
    ],
    caseFor: [
      { who: "Commissioner Henry Garrido (DC 37), Ann Cheng (COGE executive director)", what: "Payment delays hurt the cash flow of small nonprofits and minority- and women-owned businesses; the goal is for more MWBEs to feel bidding on city work is within reach." },
      { who: "NYLPI, DRUM Beats, Abundance NY, Hotel Trades Council, DSA, Reinvent Albany", what: "Reduces barriers for small and grassroots nonprofits; a required meeting schedule strengthens accountability of a board that currently need not meet at all." },
    ],
    caseAgainst: [
      { who: "League of Women Voters (cons listed)", what: "Removing questionnaire criteria “could hide incompetence, corruption, or poor past performance”; could reduce public information about subcontractors; binds future administrations." },
      { who: "D9 Harlem Votes", what: "“Reducing contractor paperwork should not come with reduced public review or unclear changes in oversight responsibilities.”" },
      { who: "Citizens Union (Yes, with concern)", what: "The administration, through the PPB, would control a questionnaire that currently protects vendor integrity; wants the Department of Investigation involved." },
      { who: "Vital City (supports, but)", what: "Omits enforceable payment deadlines; a Manhattan CB3 member noted 30 days off 387 shows “a lot more work to be done.”" },
    ],
    positions: {
      yes: ["Citizens Union", "Common Cause NY", "Reinvent Albany", "Municipal Art Society", "Abundance NY", "JFREJ", "NYC-DSA", "Hotel and Gaming Trades Council", "NYLPI", "DRUM Beats", "Prospect Park Alliance", "DBIA"],
      no: ["D9 Harlem Votes"],
    },
    context: "The Council's role is not directly changed. Comptroller appointees continue to sit on the PPB.",
    sources: [
      { title: "COGE Final Report, Question 2", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
      { title: "NYC Votes: Ballot Proposal 2 statements", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/ballot-proposals-2026/ballot-proposal-2/" },
      { title: "What to Know About NYC's Ballot Proposals", url: "https://www.brownstoner.com/brooklyn-life/election-ballot-questions-proposals-voting-2026/", date: "The City Reporter via Brownstoner, Sept 2026" },
      { title: "CityLand: Government Efficiency Proposals Come to NYC Voters", url: "https://www.citylandnyc.org/government-efficiency-proposals-come-to-new-york-city-voters/", date: "Oct 2, 2026" },
      { title: "League of Women Voters NYC: Proposals 2026", url: "https://lwvnyc.org/proposals-2026/" },
    ],
    updated: UPDATED,
  },
  {
    proposalId: "prop-3",
    plain:
      "Three separate changes in one question: (a) streamlines agency sign-offs on bus lanes, bike lanes and other major street redesigns; (b) moves sales and leases of small unused city lots (under 10,000 sq ft) and air rights from city-owned landmarks out of the seven-month ULURP process with a Council vote into the 90-day ELURP process with City Planning Commission approval; (c) removes the Council's power to disapprove leases of office space for city workers.",
    statusQuo:
      "(a) A “major transportation project” requires DOT to consult four agencies, FDNY to confer with each affected firehouse, and a Community Board presentation; missing a step can be litigated. In 2025, 13 of 37 such projects were delayed, all but two of them bike lanes. (b) Selling or leasing city land requires ULURP with final Council approval, plus a second hearing if more than two years pass. (c) Office leases for city workers need a City Planning Commission hearing and vote and a 20-day window in which the Council can disapprove by two-thirds.",
    changes: [
      "Streets: consultation moves to the commissioner level (FDNY approval rather than every firehouse); DOT may start urgent safety projects before the Community Board presentation; an inadvertent failure to consult would not invalidate a project. COGE estimates at least 33% faster.",
      "Property: lots under 10,000 sq ft that are not landmarked, plus air rights from city-owned landmarks, go through the 90-day ELURP with the City Planning Commission making the final call and no Council vote; public auction still required; projects needing an environmental impact statement stay in ULURP. COGE estimates more than $200 million in revenue (derivation not shown). Open New York says such small lots are 78% of city-owned properties but 4% of their square footage.",
      "Office leases: the CPC hearing and Council disapproval are removed; the DCAS commissioner certifies the lease, notifies the local Council Member, Community Board and Borough President in advance and the Council and Comptroller after signing. COGE estimates up to 50 days saved.",
    ],
    caseFor: [
      { who: "Transportation Alternatives, Riders Alliance, Rise and Resist Elevator Action Group, CIDNY", what: "Faster street redesigns save pedestrian and cyclist lives and get bus lanes built; “we just need to get them done.”" },
      { who: "Open New York, NY Housing Conference, RPA", what: "Disused small lots “sit fallow for decades, blighting surrounding properties”; selling landmark air rights raises revenue and allows housing next door." },
      { who: "Citizens Union", what: "FDNY-commissioner approval instead of every firehouse is reasonable; office-lease decisions already sit with the administration in practice, and “recent office-lease corruption scandals were not uncovered through Council or City Planning Commission oversight.”" },
      { who: "Vital City", what: "The “strongest measure” of the five; could save lives." },
    ],
    caseAgainst: [
      { who: "Municipal Art Society (No)", what: "“Merging these three distinct issues into one measure does not give voters the chance to effectively voice their preferences”; supports the street piece but says the city should set standards for lasting public benefit before expediting sales of public land and air rights, which could serve affordable housing, parks and flood mitigation." },
      { who: "Long Island City Partnership (No)", what: "Existing consultation “has allowed designs to be adjusted to balance cyclist safety with the operational needs of industrial businesses.”" },
      { who: "Reinvent Albany (Yes, but)", what: "A ballot question should have “a single, coherent purpose,” not “an agglomeration of unrelated topics”; warned of a possible court challenge over bundling." },
      { who: "League of Women Voters (cons listed)", what: "Reduces community input and transparency; removes Council review of property deals “which can involve millions of dollars”; asks whether 90 days is too short." },
    ],
    positions: {
      yes: ["Citizens Union", "Reinvent Albany", "Abundance NY", "JFREJ", "NYC-DSA", "Transportation Alternatives", "Riders Alliance", "Open New York", "NY Housing Conference", "RPA", "Hotel and Gaming Trades Council", "CIDNY", "Prospect Park Alliance"],
      no: ["Municipal Art Society", "Long Island City Partnership", "D9 Harlem Votes"],
      other: ["Common Cause NY: no position"],
    },
    context:
      "This is the question that most directly continues the 2025 Council-versus-Mayor land-use fight, though CityLand calls the 2026 reach “somewhat more limited.” Yes reduces the Council's role in two places: no Council vote on ELURP-track dispositions, and no Council disapproval of office leases. City Hall said the three pieces were bundled because all change how “city land and space is utilized and approved.” Sources disagree on whether the street-project threshold is three or four blocks.",
    sources: [
      { title: "COGE Final Report, Question 3", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
      { title: "NYC Votes: Ballot Proposal 3 statements", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/ballot-proposals-2026/ballot-proposal-3/" },
      { title: "Municipal Art Society: Vote NO on Ballot Question #3", url: "https://www.mas.org/news/no-on-ballot-3/", date: "Oct 16, 2026" },
      { title: "Reinvent Albany: Don't Glom Streets and Office Space", url: "https://reinventalbany.org/2026/07/statement-on-coge-proposed-ballot-proposals-dont-glom-streets-and-office-space/", date: "July 2026" },
      { title: "Mamdani looks to ask voters if NYC should speed up construction of bus and bike lanes", url: "https://gothamist.com/news/mamdani-looks-to-ask-voters-if-nyc-should-speed-up-construction-of-bus-and-bike-lanes", date: "Gothamist, July 22, 2026" },
      { title: "CityLand analysis", url: "https://www.citylandnyc.org/government-efficiency-proposals-come-to-new-york-city-voters/", date: "Oct 2, 2026" },
    ],
    updated: UPDATED,
  },
  {
    proposalId: "prop-4",
    plain:
      "Requires the Department of Buildings and other permitting agencies to build one centralized construction-permit system; lets the DOB commissioner appoint additional officials who can sign off on construction documents and certificates of occupancy; moves permitting of piers, wharves and other waterfront structures from the Department of Small Business Services to DOB.",
    statusQuo:
      "Builders obtain roughly 40 approvals from 18 offices and agencies, each on its own system and schedule. Only five borough commissioners and one deputy commissioner can sign certificates of occupancy. Waterfront structures are permitted by SBS, separate from DOB's building-safety permitting.",
    changes: [
      "DOB, with environmental, fire and transportation agencies, must build a single permitting system all agencies use (by 2030 per NYC Votes; one outlet says December 2029). Each agency keeps its own review and enforcement authority.",
      "The DOB commissioner may appoint additional deputy or borough commissioners who can approve construction documents and certificates of occupancy.",
      "Waterfront permitting moves to DOB (effective Dec. 31, 2030 or when a new waterfront code takes effect; existing permits unchanged).",
      "COGE says this changes no building codes, safety standards, landmark rules or waterfront land-use decisions. CityLand and the League of Women Voters note parts of this could have been done by local law without a referendum.",
    ],
    caseFor: [
      { who: "Open New York, NY Housing Conference, RPA, Abundance NY", what: "“Decades of accrued red tape” slow housing production." },
      { who: "NY Building Congress (Carlo Scissura), Building and Construction Trades Council (Gary LaBarbera), Monadnock Development", what: "Builders would spend less time navigating bureaucracy; bureaucracy is “one of the greatest barriers to building affordable housing.”" },
      { who: "Citizens Union, Common Cause NY, League of Women Voters", what: "“Positive modernization”; Common Cause supports with safeguards; LWV “could not identify any cons.”" },
    ],
    caseAgainst: [
      { who: "D9 Harlem Votes (No)", what: "No clear parameters for public oversight; unclear when community input occurs and how waterfront decisions will be communicated." },
      { who: "Vital City (supports, but)", what: "“Helpful but not especially bold”; advocates wanted DOB as a true single permitting authority rather than a shared portal." },
    ],
    positions: {
      yes: ["Citizens Union", "Common Cause NY", "Reinvent Albany", "Municipal Art Society", "Abundance NY", "JFREJ", "NYC-DSA", "Open New York", "NY Housing Conference", "RPA", "DBIA", "Prospect Park Alliance", "NY Building Congress", "Building and Construction Trades Council"],
      no: ["D9 Harlem Votes"],
    },
    context: "The Council's role is not changed. This is the least contested of the five.",
    sources: [
      { title: "COGE Final Report, Question 4", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
      { title: "NYC Votes: Ballot Proposal 4 statements", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/ballot-proposals-2026/ballot-proposal-4/" },
      { title: "New York City Ballot Proposals Designed to Streamline Construction", url: "https://www.enr.com/articles/63743-new-york-city-ballot-proposals-designed-to-streamline-construction", date: "ENR, Oct 1, 2026" },
      { title: "League of Women Voters NYC: Proposals 2026", url: "https://lwvnyc.org/proposals-2026/" },
    ],
    updated: UPDATED,
  },
  {
    proposalId: "prop-5",
    plain:
      "Writes a target for the city's reserves into the Charter (12% of the prior year's city tax revenue), requires the Mayor's budget office to publish a methodology for deposits into the rainy day fund whenever reserves are below that target, and requires the Mayor to certify a “compelling fiscal need” before withdrawing more than half the fund in a year. Deposits still have to be approved in the annual budget.",
    statusQuo:
      "Voters authorized a rainy day fund in 2019; it was created by executive order in 2021 and holds about $1.97 billion. The Charter sets no target balance, no deposit formula and no withdrawal rules; deposits are negotiated each budget. The city has made only one voluntary deposit despite several strong-revenue years. State law already limits withdrawals above 50% absent a mayoral certification. Other reserves (General Reserve, Retiree Health Benefits Trust, Capital Stabilization Reserve) total several billion more.",
    changes: [
      "A Charter target for reserves equal to 12% of the prior fiscal year's city tax revenues.",
      "When below target, the Office of Management and Budget, “in consultation with the Comptroller,” must publish a deposit methodology (first one due by May 2027, updated at least every four years) with a 30-day comment period, a public hearing, and advance notice to the Council, Independent Budget Office, State Comptroller and Financial Control Board.",
      "Withdrawals above 50% of the fund in a year require the Mayor to certify a compelling fiscal need (recession, revenue decline, natural disaster or declared emergency).",
      "COGE deliberately rejected a rigid formula after testimony from the Council's central staff and academic economists that strict rules “risk preventing the City from accessing reserves when they are needed most.”",
    ],
    caseFor: [
      { who: "Comptroller Mark Levine", what: "“Meaningful progress”; “New York cannot afford to wait until the next downturn to prepare,” though “key elements remain unresolved” (he had proposed a 16% target and formula deposits)." },
      { who: "Citizens Union, Common Cause NY", what: "An incremental step that finally builds rules around the fund; more predictable and public fiscal decisions with a formal Comptroller role while preserving the Council's budget role." },
      { who: "Abundance NY, Hotel Trades Council, JFREJ, DSA, DRUM Beats, D9 Harlem Votes", what: "Better to have a target and a roadmap than the status quo; creates a level of fiscal accountability." },
    ],
    caseAgainst: [
      { who: "Reinvent Albany (No)", what: "“Sadly, this is not the rainy day fund New York City so badly needs”: the amendment only requires publishing a methodology; multiple accounts, including retiree accounts that cannot plug a budget hole, can count toward the 12%; a surplus-based formula can be gamed by prepayments; letting the Mayor define “compelling fiscal need” is “like allowing them to write their own permission slip to raid the piggy bank.”" },
      { who: "Citizens Budget Commission (Andrew Rein, personally No)", what: "12% is too low; wanted 16%, deposits tied to revenue strength, only the rainy day fund counted, and a public Comptroller opinion rather than consultation." },
      { who: "Vital City, League of Women Voters", what: "The methodology is written by OMB, “the entity it is meant to constrain”; shifts control to the executive and may be too weak for a major crisis." },
    ],
    positions: {
      yes: ["Citizens Union", "Common Cause NY", "Abundance NY", "JFREJ", "NYC-DSA", "Hotel and Gaming Trades Council", "DRUM Beats", "D9 Harlem Votes", "Comptroller Mark Levine (with reservations)"],
      no: ["Reinvent Albany", "Citizens Budget Commission president Andrew Rein (personal vote)"],
    },
    context: "Council budget adoption is unchanged; the Council gets advance notice of the methodology. The Comptroller is consulted but does not have to sign off.",
    sources: [
      { title: "COGE Final Report, Question 5", url: "https://www.nyc.gov/assets/charter/html/coge-adopted-final-report-2026.html", date: "July 23, 2026" },
      { title: "NYC Votes: Ballot Proposal 5 statements", url: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/ballot-proposals-2026/ballot-proposal-5/" },
      { title: "Comptroller Levine statement on COGE rainy day proposal", url: "https://comptroller.nyc.gov/newsroom/press-releases/statement-from-nyc-comptroller-mark-levine-on-charter-commission-proposal-to-strengthen-nycs-rainy-day-fund/", date: "July 21, 2026" },
      { title: "CBC testimony: Structuring a Rainy Day Fund to Protect New Yorkers", url: "https://cbcny.org/advocacy/testimony-structuring-rainy-day-fund-protect-new-yorkers", date: "July 8, 2026" },
      { title: "Comptroller report: Strengthening the City's Rainy Day Fund", url: "https://comptroller.nyc.gov/reports/strengthening-the-citys-rainy-day-fund/", date: "2026" },
    ],
    updated: UPDATED,
  },
];
