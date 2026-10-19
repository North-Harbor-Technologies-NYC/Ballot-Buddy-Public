import type { RaceInsight } from "./types";

const UPDATED = "October 19, 2026";

export const GOVERNOR: RaceInsight = {
  raceId: "governor",
  overview:
    "The Governor runs the executive branch, proposes the roughly $268 billion state budget, signs or vetoes every state law, and appoints agency heads, the MTA leadership and judges to the Court of Appeals. Four-year term. The Lieutenant Governor runs on a joint ticket, presides over the State Senate and succeeds the Governor if the office becomes vacant, which is how Kathy Hochul became Governor in 2021.",
  howItWorks: [
    "Fusion voting: the same ticket appears on more than one line. Hochul/Adams is on the Democratic (A) and Working Families (D) lines. Blakeman/Hood is on the Republican (B), Conservative (C) and Vote Affordable (K) lines. A vote on any line is one vote for the ticket; marking the same ticket on two lines still counts once.",
    "Which line you pick matters to the parties, not the candidate. A party keeps automatic ballot access only if its gubernatorial line draws at least 2% of the vote or 130,000 votes, whichever is greater. That test is run this year.",
    "“Vote Affordable” (column K) is not an existing party. It is an independent-body line the Blakeman campaign created itself by petition (the campaign reported 66,345 signatures) to carry a cost-of-living message. If that line draws 2% of the vote, Vote Affordable would become a ballot-qualified party in New York. Several Republican legislative candidates filed under the same name for their own races.",
    "This is the first cycle in which Governor and Lieutenant Governor run as a joint ticket in both the primary and the general election.",
  ],
  candidates: [
    {
      candidateId: "hochul",
      name: "Kathy C. Hochul / Adrienne E. Adams",
      lines: ["Democratic", "Working Families"],
      role: "Governor since August 2021 (incumbent); running mate is the former NYC Council Speaker",
      brief:
        "Incumbent seeking a second full term on an affordability record (tax rebates, child care, no income tax hikes) and a hard line against federal immigration enforcement; approval sits just under 50%.",
      bio: "Hochul, 68, is from Buffalo (Syracuse B.A., Catholic University J.D.). Hamburg Town Board, Erie County Clerk, one term in Congress (NY-26), Lieutenant Governor from 2015, then Governor when Andrew Cuomo resigned in August 2021. She won a full term in 2022 over Lee Zeldin, 53.2% to 46.8%, the closest governor's race since 1994. Adrienne Adams, 65, from Hollis, Queens (Spelman B.A.), chaired Queens Community Board 12, was elected to the City Council in 2017 and served as the Council's first Black Speaker from 2022 through 2025. She ran for mayor in 2025 and finished fourth in the Democratic primary with about 4% of first-choice votes.",
      nomination:
        "Lieutenant Governor Antonio Delgado challenged Hochul from the left starting June 2025 and named Buffalo activist India Walton as his running mate. Hochul named Adams her running mate the same day (Feb. 4, 2026), won about 85% at the state convention two days later, and Delgado dropped out Feb. 10, saying there was no viable path forward. Hochul was uncontested in the June primary. The Working Families Party nominated a placeholder at its convention rather than endorse either Democrat, then put Hochul/Adams on its line on Aug. 21.",
      record: [
        "Taxes: the FY2026 budget sent inflation refund checks of up to $400 to 8.2 million households and cut middle-class income tax rates. The FY2027 budget (May 2026) raised no income or statewide business taxes, exempted up to $25,000 in tipped wages from state income tax, paid a one-time $1 billion energy rebate, and created a “pied-a-terre” tax on second homes and investor-owned NYC apartments valued at $5 million and up, projected at $500 million a year. She has resisted calls from the left to raise income taxes.",
        "Child care: FY2027 budget puts $4.5 billion into child care and pre-K (up $1.7 billion), caps Child Care Assistance co-pays at $15 a week for most families, funds universal free school breakfast and lunch ($395 million) and about $40 billion in school aid. In January 2026 she and Mayor Mamdani announced a $1.7 billion universal pre-K and child care plan.",
        "Immigration enforcement: signed a May 2026 law banning law enforcement, including ICE agents, from wearing masks in public (DHS said it would not comply). The FY2027 budget outlawed 287(g) agreements between local police and ICE, barred state and local police from civil immigration enforcement, and required judicial warrants for ICE entry to sensitive locations. Nassau County, under Blakeman, ended its ICE agreement in August 2026 to comply.",
        "Congestion pricing: paused the MTA toll in June 2024 three weeks before launch, then revived it at a $9 base charge; it took effect Jan. 5, 2025. The reversal drew criticism from lawmakers, business groups and climate advocates.",
        "Energy: imposed a one-year moratorium on permits for large data centers (2026) and proposed that data centers pay more of their energy costs; signed a nuclear-energy agreement with Ontario (Dec. 2025); the FY2027 budget tied utility executive pay to affordability and changed parts of the 2019 climate law. Emerson found 56% of voters support the data center moratorium.",
        "Public safety: FY2027 budget includes $352 million for gun violence prevention, $77 million for NYPD subway policing, expansion of MTA outreach teams and platform barriers at 85 more stations. Deployed 750 National Guard troops to the subway in March 2024; signed post-Bruen gun restrictions in 2022.",
        "Housing: FY2027 budget adds $250 million in capital for affordable homes and exempts qualifying projects (up to 500 units in dense NYC areas) from state environmental review.",
      ],
      endorsements:
        "Mayor Zohran Mamdani and Rep. Alexandria Ocasio-Cortez (Feb. 2026); House Democratic Leader Hakeem Jeffries and most of the state's Democratic House delegation; Attorney General James; legislative leaders Stewart-Cousins and Heastie; NYS AFL-CIO, 1199SEIU, 32BJ, DC 37, CSEA, NYSUT, PEF, building trades and firefighter unions; EMILY's List; Giffords.",
      money:
        "About $19 million on hand as of early October, versus about $178,000 for Blakeman. The state Democratic Party transferred $10 million to her campaign. She does not participate in the state's public matching program. Super PACs had spent about $13.2 million in the race through Oct. 9, most of it supporting Hochul (Uber $2.5 million, Greater New York Hospital Association, New York Apartment Association).",
      controversies: [
        "Her first appointed Lieutenant Governor, Brian Benjamin, resigned in April 2022 after a federal indictment (he pleaded not guilty). Her second, Antonio Delgado, broke with her publicly and ran against her.",
        "The 2024 congestion pricing pause and reversal; the $850 million state contribution to the Buffalo Bills stadium (2022), criticized as corporate welfare.",
        "Apologized for a February 2024 Gaza/Canada analogy and a May 2024 remark about Bronx children and computers.",
        "Job approval has sat just under 50% (Siena, Sept. 2026: 48 approve, 47 disapprove).",
        "On Adams's Council record: the Council's push to move city retirees to a Medicare Advantage plan (blocked in state court); about $2 million in city funds spent on mailers opposing the 2025 pro-housing ballot proposals.",
      ],
    },
    {
      candidateId: "blakeman",
      name: "Bruce A. Blakeman / Todd Hood",
      lines: ["Republican", "Conservative", "Vote Affordable"],
      role: "Nassau County Executive since 2022; running mate is the Madison County Sheriff",
      brief:
        "Trump-endorsed Nassau County Executive running on a $35 billion income tax cut with no stated offsets, energy deregulation, bail repeal and public safety; faces an unresolved complaint over public matching funds.",
      bio: "Blakeman, 71, from Valley Stream (Arizona State B.A., California Western J.D.), is an attorney and Nassau County's first Jewish county executive. Hempstead Town Council (1993-95, 2015-21), Nassau County Legislature's first presiding officer (1996-99), Port Authority commissioner under Pataki (2001-09). He lost statewide and federal races in 1998 (comptroller), 2010 (Senate primary) and 2014 (NY-4) before winning county executive in 2021 by about 2,000 votes and re-election in November 2025, 55.6% to 44.3%. Todd Hood has been Madison County Sheriff since 2018 after more than 30 years in law enforcement, including 22 years with the Syracuse Police Department; he is vice president of the state Sheriffs' Association.",
      nomination:
        "Entered Dec. 9, 2025 as a challenger to Rep. Elise Stefanik, who withdrew Dec. 19. Trump endorsed Blakeman the next day. The state GOP designated him unanimously Feb. 11, 2026. His first choice for running mate, Fulton County Sheriff Richard Giardino, publicly declined; Hood was announced the next day. The Conservative Party endorsed him in February. He was uncontested in the June primary.",
      record: [
        "Tax plan: pledges to eliminate state income tax for individuals earning under $50,000 and couples under $100,000, plus a 10% cut for incomes under $250,000. His campaign puts the cost at $35 billion; it has not detailed how it would be paid for, and the Manhattan Institute's Ken Girardin has said he has not presented a plan to restrain spending.",
        "Energy: opposes the 2019 state climate law (calls it a “green energy scam”), opposes offshore wind, supports fracking in the Southern Tier, and says he would declare an “energy emergency” to allow gas drilling and cut electric bills “in half” on day one. At the Oct. 13 debate he said the Public Service Commission approved 48 rate increases under Hochul (not independently checked).",
        "Immigration: Nassau entered a 287(g) agreement with ICE in early 2025 (10 detectives cross-designated, 50 jail beds reserved). The NYCLU sued; a state judge upheld the agreement in February 2026. After the state budget outlawed such agreements, Blakeman ended it Aug. 26, 2026, calling it “one of the saddest days” of his tenure. He also let county officers wear masks while assisting federal agents. At the debate he credited the agreement with removing more than 2,000 people with criminal records.",
        "Public safety: opposes the 2019 bail law and calls for repeal; created a rapid-response patrol unit (2023); recruited about 75 armed “special deputies” (Democratic legislators sued in 2025, calling it a private militia). His campaign calls Nassau the “#1 safest county in America.” State data: Nassau's violent index crimes in 2024 (2,294) were the highest annual total of 2015-24 but only about 1% above 2022; total index crime fell from 18,553 (2022) to 16,260 (2024).",
        "Mask Transparency Act (Aug. 2024): a misdemeanor to conceal one's identity with a mask in public, with health and religious exemptions; a federal challenge was dismissed.",
        "Transgender athletes: a February 2024 executive order barred transgender women and girls from women's teams at county facilities; a judge struck it down; the county legislature passed a similar law in June 2024, still in litigation. In 2026 he said he would bar transgender students from girls' bathrooms.",
        "County budgets: held county property tax rates flat in the 2023-25 budgets. Backed the Las Vegas Sands casino proposal at the Nassau Coliseum (a judge voided the lease transfer in 2023 over open-meetings violations; the county resubmitted).",
        "Describes himself as a pro-choice Republican; at the debate said he supports a guest-worker program for law-abiding undocumented residents. Asked whether Trump is the best president of his lifetime, he named Eisenhower.",
      ],
      endorsements:
        "President Trump (Dec. 2025); former Gov. George Pataki; Rep. Nick LaLota; Senate Minority Leader Rob Ortt and Assembly Minority Leader Will Barclay; state GOP chair Ed Cox; Conservative Party chair Jerry Kassar; Curtis Sliwa; TWU Locals 106 and 252; Miriam Adelson.",
      money:
        "Raised $13.45 million through July but reported about $178,000 on hand in early October after spending nearly everything. Participates in the state public matching program; New York Focus reported $2.4 million in matching funds on Oct. 14 and $3.5 million (the gubernatorial maximum) on Oct. 15. The Nassau County GOP gave $1.3 million. Pro-Blakeman super PAC donors include James Dolan and Stephen Wynn.",
      controversies: [
        "Matching-funds complaint: on Oct. 15, 2026 the state Democratic chair filed a complaint alleging the campaign sought public matches for more than 2,600 ineligible donations (out-of-state or over the limit), worth up to $860,000; Newsday reported some contributions were double- or triple-counted. The campaign called it a “desperate attempt” by Hochul. The Board of Elections audits all match requests; whether any ineligible donations were actually matched is unresolved.",
        "Police staffing: Nassau police department employment was 183 below its authorized level in September 2026 after 241 officers took an early-retirement buyout; his proposed 2027 budget raises police spending 3.4% while cutting the equipment line about 25%. Democrats call it “defunding”; the campaign did not respond.",
        "January 2022 executive orders against the state COVID mask mandate that Democrats said exceeded his authority; subpoenas to Hofstra's president over the casino dispute (Hofstra called them retaliatory); refused to lower county flags after Jimmy Carter's death despite a state directive.",
      ],
      flags: [
        "Hood's age and education were not found in the sources reviewed.",
      ],
    },
  ],
  sources: [
    { title: "2026 New York gubernatorial election (endorsement compilation)", url: "https://en.wikipedia.org/wiki/2026_New_York_gubernatorial_election", date: "accessed Oct 19, 2026" },
    { title: "What to Know About the New York Governor's Race", url: "https://nysfocus.com/2026/10/14/new-york-governors-race-hochul-blakeman", date: "New York Focus, Oct 14, 2026" },
    { title: "New York Dems Call for Investigation of Blakeman Campaign", url: "https://nysfocus.com/2026/10/15/new-york-blakeman-campaign-finance-matching-funds", date: "New York Focus, Oct 15, 2026" },
    { title: "Hochul, Blakeman clash on ICE and affordability in lone debate", url: "https://abc7ny.com/post/hochul-blakeman-set-lone-governor-debate/19934983/", date: "ABC7, Oct 14, 2026" },
    { title: "New York Might Get a New Ballot-Qualified Party, “Vote Affordable”", url: "https://ballot-access.org/2026/10/07/new-york-might-get-a-new-ballot-qualified-party-vote-affordable/", date: "Ballot Access News, Oct 7, 2026" },
    { title: "Blakeman Pushes Vote Affordable Party", url: "https://hoodline.com/2026/05/blakeman-rolls-out-vote-affordable-line-in-bid-to-oust-hochul/", date: "Hoodline, May 27, 2026" },
    { title: "Siena Poll: Hochul 50%, Blakeman 41%", url: "https://sri.siena.edu/2026/09/23/siena-poll-of-likely-new-york-state-voters-hochul-50-blakeman-41/", date: "Siena, Sept 23, 2026" },
    { title: "Governor Hochul Announces Agreement on FY 2027 State Budget", url: "https://www.governor.ny.gov/news/governor-hochul-announces-agreement-fy-2027-state-budget", date: "May 7, 2026" },
    { title: "Hochul taps Adrienne Adams as running mate", url: "https://www.cityandstateny.com/politics/2026/02/hochul-taps-former-nyc-council-speaker-adams-her-running-mate/411190/", date: "City & State, Feb 4, 2026" },
    { title: "Delgado ends primary challenge to Hochul", url: "https://ny1.com/nyc/all-boroughs/news/2026/02/10/antonio-delgado-india-walton-new-york-governor-campaign-suspended", date: "NY1, Feb 10, 2026" },
    { title: "Bruce Blakeman, once a rising star, has been reborn in the MAGA mold", url: "https://www.cityandstateny.com/personality/2025/07/bruce-blakeman-once-rising-star-has-been-reborn-maga-mold/407019/", date: "City & State, July 28, 2025" },
    { title: "Nassau ends ICE partnership", url: "https://politicsny.com/2026/08/27/nassau-ends-ice-partnership-blakeman-calls-it-saddest-day/", date: "PoliticsNY, Aug 27, 2026" },
    { title: "Hochul leads Blakeman by 11 in new poll as Dems take a bite out of his public safety claims", url: "https://www.amny.com/politics/hochul-leads-blakeman-new-poll-public-safety/", date: "amNY, Oct 7, 2026" },
    { title: "Blakeman taps Madison County sheriff as running mate", url: "https://www.wamc.org/news/2026-02-10/blakeman-taps-madison-county-sheriff-as-running-mate", date: "WAMC, Feb 10, 2026" },
    { title: "Bruce Blakeman", url: "https://en.wikipedia.org/wiki/Bruce_Blakeman", date: "accessed Oct 19, 2026" },
    { title: "Kathy Hochul", url: "https://en.wikipedia.org/wiki/Kathy_Hochul", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};

export const COMPTROLLER: RaceInsight = {
  raceId: "comptroller",
  overview:
    "The State Comptroller is the state's chief fiscal officer: sole trustee of the roughly $310 billion Common Retirement Fund that pays pensions to more than a million public workers and retirees, auditor of state agencies and local governments, reviewer of state contracts, and custodian of unclaimed funds. Four-year term. The job is less visible than Governor or Attorney General but controls one of the largest pools of public money in the country.",
  candidates: [
    {
      candidateId: "dinapoli",
      name: "Thomas P. DiNapoli",
      lines: ["Democratic", "Working Families"],
      role: "State Comptroller since 2007 (incumbent)",
      brief:
        "Twenty-year incumbent with a record-high pension fund and a clean post-Hevesi ethics record; won his first-ever primary 65-20 against divestment challengers.",
      bio: "DiNapoli, 72, grew up in Nassau County (Hofstra B.A., New School M.A.), was elected to the Mineola school board at 18, and served 20 years in the Assembly. The Legislature picked him for Comptroller in February 2007 after Alan Hevesi resigned in a fraud scandal. He has since won four elections (50.8% in 2010, 60.2% in 2014, 67.0% in 2018, 57.3% in 2022) and is the longest-serving current statewide officeholder.",
      nomination:
        "Faced his first primary ever on June 23, 2026, against two challengers running to his left, Drew Warshaw and Raj Goyle, who pushed divestment from Palantir and Israel Bonds. He won 65.3% to 20.3% and 14.0%. The Working Families Party did not endorse in the primary but he carries its line.",
      record: [
        "Pension fund: the Common Retirement Fund closed the fiscal year ending March 31, 2026 at a record $295.4 billion with an estimated 11.94% return, and reached $309.7 billion by June 30. Its assumed long-term return of 5.9% is among the lowest of major U.S. public funds, which the office frames as conservative. The fund has grown from roughly $140 billion when he took office.",
        "Ethics after Hevesi: says his proudest achievement is restoring the office's credibility after the pay-to-play scandal that preceded him. At the Oct. 1 debate he said the state should bar donations from vendors seeking contracts.",
        "Divestment debates: the fund holds hundreds of millions of dollars in Palantir and $332.5 million in Israel Bonds; he calls divestment “always a last resort.”",
        "Medicaid fraud: cites 55 arrests and $44 million recovered since 2023 through his office's audits and investigations; called the Legislature's award of a multibillion-dollar Medicaid contract without comptroller oversight “a mistake.”",
        "Supports Hochul's data center moratorium and says the fund should diversify away from a possible “AI bubble”; would not put pension money in cryptocurrency (neither would Hernandez).",
        "Says his priority is helping state and local governments absorb federal cuts to Medicaid, SNAP and education.",
      ],
      endorsements:
        "Gov. Hochul, AG James, Hillary Clinton; Reps. Nadler, Ryan and Meeks; NYS AFL-CIO, CSEA, DC 37, Hotel and Gaming Trades Council, RWDSU; Alliance for Retired Americans; Stonewall Democrats.",
      money:
        "Participates in the state public matching program (the Democratic primary alone drew about $4.6 million in matching funds). Had $1.4 million on hand before the primary; received $53,982 in the Oct. 5 disbursement.",
      controversies: [
        "Israel trip: the state ethics commission approved reimbursement for a February 2024 Israel trip paid for by the Jewish Community Relations Council, but commissioners warned in writing it “could give reasonable basis for the impression that a person could improperly influence you.” JCRC has a financial relationship with Israel Bonds; the fund bought an additional $120 million in Israel Bonds after the trip. Jewish Voice for Peace filed an ethics complaint in October 2025.",
        "Hernandez says DiNapoli accepted about $850,000 from law firms that work with the pension fund; DiNapoli denied any pay-to-play and demanded evidence. No investigation has been reported.",
      ],
    },
    {
      candidateId: "hernandez",
      name: "Joseph Hernandez",
      lines: ["Republican", "Conservative"],
      role: "Biotech and health care investor; first run for state office",
      brief:
        "Cuban-born biotech investor and first-time state candidate who would steer $10 billion a year of pension money into New York tech and casts the race as a check on Mamdani; a foreclosed golf club and filing errors are the flags.",
      bio: "Hernandez, 53, was born in Cuba and came to Florida at age seven in the 1980 Mariel boatlift. University of Florida alumnus; his campaign also describes him as a Yale and Oxford graduate (not independently confirmed). He is senior managing partner of Blue Water Venture Partners and CEO of a blank-check company that listed on the NYSE in March 2026, and says he has built or led more than a dozen companies. He ran for NYC mayor in 2025 on an independent line and received 1,379 votes.",
      nomination:
        "Announced Nov. 20, 2025; chosen by the state Republican committee at its February 2026 convention and nominated by the Conservative Party Feb. 14. No primary.",
      record: [
        "Would invest $10 billion a year from the pension fund to attract technology, AI and robotics companies to New York, especially upstate, and bring more investment management in-house; calls recent returns “mediocre” (his comparison to CalPERS predates the fund's 11.94% fiscal 2026 return).",
        "Would create a “fraud strike team” of forensic accountants; says Medicaid fraud is “out of control” and the comptroller's contract-review powers are underused.",
        "Says the state faces a looming fiscal crisis, wants lower spending, and calls outmigration the state's biggest threat.",
        "Opposes Hochul's one-year data center moratorium as too long; wants faster state investment in AI.",
        "Frames his candidacy as opposition to “socialism and communism” in New York politics and says the office could check Mayor Mamdani's agenda.",
      ],
      endorsements:
        "New York Republican State Committee; Conservative Party; Francisco Marte, former head of the New York Bodega Association. No labor or newspaper endorsements found.",
      money:
        "Participates in public matching; received $647,542 in the Oct. 5 disbursement, about 12 times DiNapoli's draw that round.",
      controversies: [
        "His company owned the Gainesville Golf and Country Club in Florida from 2018 to 2023, accumulated about $2 million in debt, and the property was foreclosed and ordered sold at auction in 2023; the campaign says the matter is resolved.",
        "A $10 million pledge to the University of Florida in 2016 put his name on a chemistry building; in 2020 the pledge was downsized and the name removed. The campaign says the gift was redirected to scholarships.",
        "The Times Union reported his campaign finance filings contained “hundreds of errors” (article paywalled; details not confirmed).",
      ],
      flags: ["Yale and Oxford credentials not independently confirmed."],
    },
  ],
  sources: [
    { title: "2026 New York State Comptroller election", url: "https://en.wikipedia.org/wiki/2026_New_York_State_Comptroller_election", date: "accessed Oct 19, 2026" },
    { title: "DiNapoli defends record on Medicaid fraud in comptroller debate", url: "https://www.cityandstateny.com/politics/2026/10/dinapoli-defends-record-medicaid-fraud-comptroller-debate/416380/", date: "City & State, Oct 1, 2026" },
    { title: "Comptroller DiNapoli fends off attacks from challenger Hernandez in NY1 debate", url: "https://ny1.com/nyc/all-boroughs/politics/2026/10/02/state-comptroller-dinapoli-fends-off-repeated-attacks-in-ny1-debate-joseph-hernandez", date: "NY1, Oct 1, 2026" },
    { title: "Joseph Hernandez seeks new era in comptroller's office", url: "https://www.dailygazette.com/cjfund/political/joseph-hernandez-thomas-dinapoli-comptroller-race/article_758a5c6e-c69a-450a-9d11-5355bbbe8672.html", date: "Daily Gazette, May 8, 2026" },
    { title: "DiNapoli easily wins his first primary challenge", url: "https://www.cityandstateny.com/politics/2026/06/dinapoli-easily-wins-his-first-primary-challenge-nearly-two-decades/414373/", date: "City & State, June 23, 2026" },
    { title: "Comptroller's Trip to Israel Raised Ethical Concerns", url: "https://theintercept.com/2026/06/01/dinapoli-new-york-comptroller-israel-trip-primary/", date: "The Intercept, June 1, 2026" },
    { title: "State Pension Fund Valued at $309.7 Billion at End of First Quarter", url: "https://www.osc.ny.gov/press/releases/2026/08/dinapoli-state-pension-fund-valued-3097-billion-end-first-quarter", date: "OSC, Aug 2026" },
    { title: "Public Campaign Finance Board disbursement report", url: "https://pcfb.ny.gov/system/files/documents/2026/10/commissioner-report-for-the-approval-to-disburse-public-matching-funds-10.05.2026.pdf", date: "Oct 5, 2026" },
    { title: "Tom DiNapoli", url: "https://en.wikipedia.org/wiki/Tom_DiNapoli", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};

export const ATTORNEY_GENERAL: RaceInsight = {
  raceId: "attorney-general",
  overview:
    "The Attorney General is the state's chief lawyer, with about 700 attorneys: defends the state in court, sues on behalf of New Yorkers (consumer fraud, charities, civil rights, antitrust, environmental cases), runs the Medicaid Fraud Control Unit, and in recent years has led much of the state's litigation against the federal government. The AG does not generally prosecute street crime; that belongs to the county district attorneys, though the AG can be named special prosecutor. Four-year term.",
  candidates: [
    {
      candidateId: "james",
      name: "Letitia A. James",
      lines: ["Democratic", "Working Families"],
      role: "Attorney General since 2019 (incumbent)",
      brief:
        "Two-term incumbent known for the Trump fraud judgment, the NRA case and the Cuomo reports; a federal indictment against her was dismissed in November 2025 and two grand juries declined to re-indict, with DOJ's appeal pending.",
      bio: "James, 68, is from Brooklyn (Lehman B.A., Howard J.D., Columbia M.P.A.). Legal Aid public defender, Assembly staffer, head of the AG's Brooklyn regional office, City Council member (2004-13, first elected on the Working Families line), Public Advocate (2014-18). Elected AG in 2018 with 62.4% and re-elected in 2022 with 54.3%; the first woman of color elected statewide in New York. She briefly ran for governor in late 2021.",
      nomination: "Designated at the February 2026 Democratic convention with no primary opponent; also carries the Working Families line.",
      record: [
        "Trump civil fraud case: her 2022 suit produced a February 2024 judgment of about $354 million plus interest and business restrictions. In August 2025 the Appellate Division upheld liability but threw out the monetary penalty as excessive; she appealed to the Court of Appeals, which had not ruled as of Oct. 19.",
        "Federal litigation: her office has filed or joined dozens of suits against the Trump administration, including over tariffs (April 2025), housing-counseling cuts (Sept. 30, 2026) and limits on Medicaid funding for adolescent gender-transition care (Sept. 2, 2026).",
        "NRA: sued in 2020; a 2024 jury found Wayne LaPierre liable for $4.3 million.",
        "Cuomo: her office's 2021 reports found nursing-home COVID deaths were undercounted by up to 50% and that Cuomo sexually harassed multiple women, leading to his resignation.",
        "Cornell special prosecutor: on Oct. 1, 2026 Gov. Hochul named her special prosecutor in the Cornell alleged gang-rape case after saying she lost faith in the Tompkins County DA. One defendant has challenged the appointment; Komatireddy says James prejudged the case through comments of solidarity with the accuser; James says the comments reflected empathy.",
        "Consumer and health enforcement: more than $20 million in settlements with health service companies since 2025 over wrongful charges; administers roughly $3 billion in opioid settlement funds; cites gun-trafficking prosecutions and a $31 million Queens pharmacy Medicaid fraud indictment.",
      ],
      endorsements:
        "Planned Parenthood Empire State Votes; EMILY's List; CSEA; DC 37; RWDSU; End Citizens United; Stonewall Democratic Club; Alliance for Retired Americans.",
      money:
        "The New York Law Journal reported a $6.2 million war chest as of early October (article paywalled). Large donors through 2025 included a personal-injury law firm ($25,000) and TWU Local 100's PAC.",
      controversies: [
        "Federal indictment, resolved for now: after a referral by the Federal Housing Finance Agency, a Norfolk grand jury indicted James on Oct. 9, 2025 on one count of bank fraud and one of false statements (alleged misrepresentations on mortgage documents). She pleaded not guilty. On Nov. 24, 2025 a federal judge dismissed the indictment, ruling the interim U.S. Attorney who brought it, Lindsey Halligan, was unlawfully appointed. Two separate grand juries then declined to re-indict her (Dec. 4 and 11, 2025). DOJ appealed; a Fourth Circuit panel heard argument Sept. 15, 2026 and was described by reporters as skeptical of the government. As of Oct. 19 no ruling has been issued, the dismissal stands and James faces no pending charges.",
        "Komatireddy released a 52-count mock “indictment” (a campaign document, not a legal filing) alleging dereliction on homelessness, repeat offenders, hate crimes, Medicaid fraud and opioid-settlement spending; James's campaign responded that she “files real lawsuits in real courts every day.” Komatireddy's ad claims crime rose 26% under James; the basis for that figure was not identified.",
        "The Times Union examined her campaign paying for expensive hotel stays (article paywalled; details not confirmed).",
      ],
    },
    {
      candidateId: "komatireddy",
      name: "Saritha Komatireddy",
      lines: ["Republican", "Conservative"],
      role: "Former federal prosecutor; first run for office",
      brief:
        "Former 12-year federal prosecutor and Kavanaugh clerk, Trump-endorsed, who would move half the office's lawyers to criminal work and create a civil commitment office; no controversies found.",
      bio: "Komatireddy, 41, was born in Brooklyn to Indian immigrant parents and raised by her mother (Harvard B.A. and J.D.). She clerked for then-Judge Brett Kavanaugh, served as counsel to the Deepwater Horizon commission, and spent about 12 years as an Assistant U.S. Attorney in the Eastern District of New York prosecuting terrorism, narcotics, cybercrime and money-laundering cases, rising to Deputy Chief of General Crimes. Chief of staff at the DEA (2023-24). Trump nominated her to the federal bench in 2020; the nomination lapsed without a vote. She joined the firm Holtzman Vogel in November 2025. She would be the first Republican AG since Dennis Vacco (1994).",
      nomination:
        "Trump endorsed her in August 2025. The 2022 nominee Michael Henry, backed by the five NYC county GOP chairs, withdrew; Rep. Mike Lawler switched to her in February 2026. She won the state GOP designation Feb. 10 with about 85% of the weighted vote over Khurram Dara, avoiding a primary. Conservative Party nomination Feb. 14.",
      record: [
        "Would reorient the office toward criminal work: assign at least half of its roughly 700 attorneys to criminal matters and support DAs, sheriffs and police.",
        "Bail: blames “broken bail laws” and proposes letting judges weigh dangerousness in pretrial release.",
        "Would create an Office of Civil Commitment within the AG's office for seriously mentally ill people who pose a danger (James calls it a return to institutionalization) and audit every homeless shelter through the Charities Bureau.",
        "Would direct the state's roughly $3 billion in opioid settlement money to treatment and residential centers rather than harm-reduction supplies.",
        "Says Medicaid fraud indictments fell sharply under James and promises aggressive prosecution; would adopt the IHRA definition of antisemitism.",
        "On Trump: says the AG should protect New Yorkers from “any president, any governor, any mayor” and would challenge federal actions that harm the state, but has declined to criticize Trump directly (“We're going to have a new president in two years”). Pledges to defend New York's abortion protections and state laws she disagrees with. At the debate: she would act against “President Trump or President AOC.”",
      ],
      endorsements:
        "President Trump (Aug. 2025); former Gov. Pataki; former AG Dennis Vacco; Reps. Mike Lawler and John Faso; Buffalo Police Benevolent Association; Rochester Police Locust Club; former Democratic officials Bob Holden and Marty Dolan. The Wall Street Journal editorial board praised her debate performance.",
      money:
        "Her largest donor through July was her mother, about $397,000, of which nearly $87,000 was refunded to comply with family-contribution limits; the state GOP gave $50,000. Received $342,801 in public matching funds in the Oct. 5 disbursement.",
      controversies: [
        "Asked in August 2026 about Blakeman's warnings of Democratic “election theft,” she initially declined to speculate, then said “Of course we will accept the results of the election.”",
        "James has raised her Kavanaugh clerkship and support for his Supreme Court confirmation in the context of abortion rights.",
        "No investigations or legal controversies involving her were found.",
      ],
      flags: ["A reported Columbia Law teaching role was not verified."],
    },
  ],
  sources: [
    { title: "2026 New York Attorney General election", url: "https://en.wikipedia.org/wiki/2026_New_York_Attorney_General_election", date: "accessed Oct 19, 2026" },
    { title: "Attorney general candidates trade blows in fiery NY1 debate", url: "https://ny1.com/nyc/all-boroughs/politics/2026/10/09/attorney-general-candidates-trade-blows-in-fiery-ny1-debate-letitia-james-saritha-komatireddy", date: "NY1, Oct 8, 2026" },
    { title: "Komatireddy's law-and-order AG campaign", url: "https://www.cityandstateny.com/personality/2026/08/komatireddys-law-and-order-ag-campaign/415186/", date: "City & State, Aug 4, 2026" },
    { title: "Prosecution of Letitia James", url: "https://en.wikipedia.org/wiki/Prosecution_of_Letitia_James", date: "accessed Oct 19, 2026" },
    { title: "United States v. James docket", url: "https://clearinghouse.net/case/47045/", date: "updated Mar 3, 2026" },
    { title: "Fourth Circuit weighs Trump's temporary US attorney appointments", url: "https://www.washingtonexaminer.com/news/justice/4727458/fourth-circuit-worried-trump-us-attorney-appointments-cut-out-senate/", date: "Sept 15, 2026" },
    { title: "James vs. Komatireddy: New York's Attorney General Race", url: "https://newyorkfamilies.org/2026/10/james-vs-komatireddy-new-yorks-attorney-general-race/", date: "Oct 10, 2026" },
    { title: "GOP AG candidate drops 52-count 'indictment' against Letitia James", url: "https://cnycentral.com/news/local/ny-republican-attorney-general-candidate-drops-52-count-indictment-against-letitia-james-saritha-komatireddy-president-trump-medicaid-fraud", date: "CNY Central, Oct 8, 2026" },
    { title: "Cornell defendant fights James as special prosecutor", url: "https://thehill.com/homenews/education/6136119-cornell-gang-rape-defendant-letitia-james-new-york/", date: "The Hill, Oct 2026" },
    { title: "Letitia James", url: "https://en.wikipedia.org/wiki/Letitia_James", date: "accessed Oct 19, 2026" },
    { title: "Saritha Komatireddy", url: "https://en.wikipedia.org/wiki/Saritha_Komatireddy", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};
