import type { RaceInsight } from "./types";

const UPDATED = "October 19, 2026";

const BLANK_NOTE =
  "This race is uncontested: the candidate wins with any number of votes. Leaving it blank does not spoil the rest of your ballot. Blanks are public: the Board of Elections reports an “Unrecorded” count for every contest, including unopposed ones, though that line combines blanks with overvotes. A blank changes nothing about who takes office.";

export const SURROGATE: RaceInsight = {
  raceId: "surrogate",
  overview:
    "Surrogate's Court handles wills, estates (probate), adoptions, and guardianships of minors and of adults with intellectual or developmental disabilities. Manhattan has two Surrogates; this is one seat. The term is 14 years in New York City, and judges must retire at the end of the year they turn 70. Surrogates are nominated by party primary and elected countywide.",
  unopposedNote: BLANK_NOTE,
  candidates: [
    {
      candidateId: "mella",
      name: "Rita Mella",
      lines: ["Democratic"],
      role: "Surrogate since January 2013 (incumbent, unopposed)",
      brief:
        "Incumbent Surrogate since 2013, unopposed; built the state's first help center for unrepresented estate litigants; no reporting criticizing her appointments was found.",
      bio: "Born and raised in Santo Domingo; came to the U.S. at 22; CUNY School of Law J.D. (1991). More than 13 years as a court attorney, first in Brooklyn's Family, Civil and Supreme Courts, then to Judge Margarita López Torres, whose lawsuit over the judicial-convention system went to the U.S. Supreme Court. Elected to Civil Court in 2006 and assigned to Manhattan Criminal Court, where she ran the Misdemeanor Treatment Court and chaired the Gender Fairness Committee. Won the 2012 Surrogate primary over Judge Barbara Jaffe with 52.9% and was unopposed that November. The first Latina elected Surrogate in Manhattan. Longtime board member of the Dominican Women's Development Center.",
      nomination:
        "Reported out as the incumbent by the Manhattan Democratic Party's 2026 independent screening panel (Feb. 12, 2026); no primary opponent; no Republican or other candidate filed. Endorsed by Downtown Independent Democrats, Lexington Democratic Club, Four Freedoms and Broadway Democrats.",
      record: [
        "Says she has presided over more than 40,000 matters since 2013 (campaign statement; not independently audited).",
        "Helped create the state's first Surrogate's Court Help Center for unrepresented litigants, serving more than 4,000 people a year and since replicated in other counties.",
        "Cites her decision in “Matter of G” as expanding eligibility for prospective adoptive parents. Handled the widely reported Gigi Carrier $25 million estate case (2015) involving an adult adoption between same-sex partners before marriage was legal.",
        "Oversees guardianships of adults with developmental disabilities and court-supervised management of assets inherited by children; serves on the court system's LGBTQ commission and its statewide ADR committee.",
        "In her 2012 Citizens Union questionnaire she wrote that the Surrogate's relationship with the Public Administrator's counsel “creates an appearance of impropriety,” said she would appoint guardians ad litem from the Part 36 list in alphabetical order, and supported public financing of judicial campaigns. Whether she followed those practices in office was not independently verified.",
        "Scrutinize.org lists 228 decisions on record and no public discipline by the Commission on Judicial Conduct.",
      ],
      controversies: [
        "No published investigation or reporting criticizing her fiduciary or guardian appointments was found. The broader critiques of Surrogate's Court patronage (New York Focus, 2025) focused on Queens, the Bronx and Brooklyn and do not mention Manhattan.",
      ],
      flags: [
        "NYC Bar Association ratings for the November 2026 general election had not been published as of Oct. 19; she was rated Approved in 2012. In recent cycles the ratings arrived in the last week of October.",
        "Her birth year could not be verified, so whether she could complete a second full 14-year term before mandatory retirement at 70 is unknown.",
      ],
    },
  ],
  sources: [
    { title: "NYC BOE General Election Contest List (tentative)", url: "https://www.vote.nyc/sites/default/files/pdf/candidates/2026/9_11_2026%2010_26_11%20AM_General%20Contest%20List%20Web%20Version.pdf", date: "Sept 11, 2026" },
    { title: "Re-elect Surrogate Mella campaign statement", url: "https://assets.nationbuilder.com/didnyc/pages/1790/attachments/original/1771180623/Reelect_Judge-Rita-Mella.pdf?1771180623=", date: "2026" },
    { title: "Results of the 2026 Civil Independent Judicial Screening Panel", url: "https://manhattandemocrats.org/2026/02/announcing-the-results-of-the-2026-civil-independent-judicial-screening-panel/", date: "Manhattan Democrats, Feb 12, 2026" },
    { title: "Citizens Union questionnaire, Rita Mella", url: "https://www.citizensunion.org/wp-content/uploads/2018/10/Mella-Surrogate3.pdf", date: "July 2012" },
    { title: "Scrutinize.org profile, Rita M. Mella", url: "https://www.scrutinize.org/ny/trial-courts/judge/rita-m-mella", date: "data snapshot Feb 19, 2026" },
    { title: "4 Takeaways From Our Investigation Into NY's Judicial Patronage", url: "https://nysfocus.com/2025/03/07/nyc-courts-political-officials-elections-patronage", date: "New York Focus, Mar 7, 2025" },
    { title: "NY Constitution Art. VI § 12 (Surrogate term)", url: "https://www.nysenate.gov/legislation/laws/CNS/A6S12" },
    { title: "Rita Mella", url: "https://ballotpedia.org/Rita_Mella", date: "Ballotpedia, accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};

export const SUPREME_COURT: RaceInsight = {
  raceId: "supreme-court",
  overview:
    "Despite the name, the Supreme Court is New York's main trial court. In Manhattan it hears major civil cases (commercial, personal injury, medical malpractice, challenges to government action, divorce) and felony criminal cases. Six 14-year seats are up in the 1st Judicial District (Manhattan): three incumbents whose terms expire (Hagler, Mendez, Scarpulla, all elected 2012), one seat vacated by mandatory retirement (Justice Margaret Chan) and two by retirements (Justices William Perry and Cynthia Kern). You may vote for up to six.",
  howItWorks: [
    "No primary: Supreme Court nominees are chosen at party judicial conventions in August by delegates elected in the June primary. The Manhattan Democratic convention (Aug. 10, 2026) nominated the six names in column A from a list screened as “most highly qualified” by an independent panel. In practice the Democratic nominee wins in Manhattan; the Republican Party fielded no candidates. The U.S. Supreme Court upheld this convention system in 2008; critics say it gives county party leaders outsized control.",
    "The five Working Families names in column D appear to be placeholder candidates, not a competing slate. WFP routinely nominates stand-ins at judicial conventions to clear or hold ballot lines. The New York Law Journal reported (Oct. 8, 2026) that the five “do not seem to be running active campaigns” and did not return calls. Amy Taylor was WFP's placeholder for Governor until the party swapped Hochul onto that line in August. Bob Cohen and Joshua Goldfein played the same role in Queens in 2020, each drawing about 1.3% of the vote. None of the five has a campaign site or any found public statement seeking the office.",
    "Voting for fewer than six does not weaken your votes; each candidate's total is counted separately and the six highest win. Voting for more than six voids this race only.",
    "NYC Bar Association ratings (Approved / Not Approved) for the general election had not been published as of Oct. 19. All six Democratic nominees were rated Approved at their last election. Placeholder candidates typically do not participate and are listed Not Approved (Cohen was, in 2018 and 2021).",
  ],
  candidates: [
    {
      candidateId: "hagler",
      name: "Shlomo S. Hagler",
      lines: ["Democratic"],
      role: "Supreme Court Justice since 2012 (incumbent); Presiding Justice, Appellate Term; designated to the Appellate Division, First Department (2025)",
      brief:
        "Incumbent since 2012, now Presiding Justice of the Appellate Term and designated to the Appellate Division; created a guardianship part protecting tenants with disabilities.",
      bio: "Yeshiva University B.A. (1988), CUNY Law J.D. (1991). Housing Court judge from 1999, elected to Civil Court 2003, Acting Supreme Court Justice from 2008, elected to Supreme Court 2012. Says he has held “probably every position in the court system.”",
      record: [
        "Created an “Innovative Guardianship Part” combining guardianship authority with Housing Court authority to protect tenants with disabilities.",
        "Coordinating judge for statewide Dilantin product-liability litigation; presided over a settled class action on accessible transportation.",
        "NYCLA award for 25 years on the bench; Jewish Lawyers Guild Cardozo award (2025). NYC Bar: Approved (2012). 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
    },
    {
      candidateId: "mendez",
      name: "Manuel J. Mendez",
      lines: ["Democratic"],
      role: "Supreme Court Justice since 2012 (incumbent); Associate Justice, Appellate Division, First Department since 2020",
      brief:
        "Incumbent since 2012, Appellate Division justice since 2020, runs the city's asbestos litigation; presided over the 91st Street crane-collapse trial.",
      bio: "Born in the Dominican Republic. Fordham B.S. (accounting), law degree from Universidad Central del Este, Fordham foreign-graduate program. Legal Aid criminal defense in the Bronx (1990-93), private practice, elected to Civil Court 2003, Acting Supreme Court from 2010, elected 2012.",
      record: [
        "Coordinating judge of New York City Asbestos Litigation from 2018.",
        "Presided over the 91st Street crane collapse trial, one of the longest in state history, and the FanDuel/DraftKings daily-fantasy-sports litigation.",
        "NYC Trial Lawyers Alliance Harlan Fiske Stone award (2019). NYC Bar: Approved (2012). 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
    },
    {
      candidateId: "scarpulla",
      name: "Saliann Scarpulla",
      lines: ["Democratic"],
      role: "Supreme Court Justice since 2012 (incumbent); Associate Justice, Appellate Division, First Department since 2020",
      brief:
        "Incumbent since 2012, Appellate Division justice since 2020; ordered Trump to pay $2 million in the Trump Foundation case; former Commercial Division judge.",
      bio: "Boston University; Brooklyn Law (cum laude). Proskauer litigation associate, FDIC senior counsel, bank counsel at Hudson United Bank, principal court attorney to Justice Eileen Bransten. Elected to Civil Court 2001, appointed to Supreme Court 2009, elected 2012. Sat in the Commercial Division 2014-20.",
      record: [
        "Presided over the Attorney General's suit against the Donald J. Trump Foundation; in November 2019 ordered Trump to pay $2 million for breaching his fiduciary duty by letting the foundation's funds be used for his 2016 campaign, declining punitive damages.",
        "Serves on the Commercial Division Advisory Council and the Chief Judge's ADR committee. NYCLA Capozzoli Gavel and Thurgood Marshall awards. NYC Bar: Approved (2012). 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
    },
    {
      candidateId: "kingo",
      name: "Hasa A. Kingo",
      lines: ["Democratic"],
      role: "Civil Court judge (elected 2021), sitting as Acting Supreme Court Justice",
      brief:
        "Civil Court judge since 2021 sitting as Acting Supreme; denied the Archdiocese a stay in a Child Victims Act case; Zimbabwe-born former prosecutor.",
      bio: "Born in Harare, Zimbabwe. Northwestern B.A.; Georgetown Law J.D. (Ballotpedia's bio field says Northwestern; his own statements point to Georgetown). Manhattan Assistant DA, Assistant Attorney General, principal court attorney to Supreme Court justices. Won the 2021 Civil Court primary 62% to 38%.",
      record: [
        "In September 2025 denied the Archdiocese of New York's request to stay a Child Victims Act trial pending appeal, writing that a stay “would delay trial of claims already decades old, frustrating the statute's remedial purpose.”",
        "Accepted the convention nomination unopposed (and handed delegates cookies with his face on the wrapper). NYC Bar: Approved (2021); LGBT Bar: Highly Approved (2021). 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
    },
    {
      candidateId: "waterman-marshall",
      name: "Kathleen Waterman-Marshall",
      lines: ["Democratic"],
      role: "Civil Court judge (elected 2018 as Kathleen C. Waterman), Acting Supreme Court Justice since 2021",
      brief:
        "Civil Court judge since 2018, Acting Supreme since 2021, the sole justice handling parentage cases; Brehon Law Society's 2026 Judge of the Year.",
      bio: "Grew up in Manhattan in a working-class family; about 20 years in private and public practice; court attorney to Justice Arthur Engoron. About three years in Brooklyn Family Court after election; now in her fifth year in a general civil part and the sole justice handling parentage matters. Adjunct legal-writing professor at Cardozo since 2016; founded a free summer law program for NYC high schoolers. Brehon Law Society's 2026 Judge of the Year.",
      record: [
        "Accepted the convention nomination unopposed. NYC Bar: Approved (2018). 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
      flags: ["Education not listed on her campaign site."],
    },
    {
      candidateId: "chin",
      name: "Christopher Chin",
      lines: ["Democratic"],
      role: "Civil Court judge (elected 2021, 2nd Municipal District), Acting Supreme Court Justice",
      brief:
        "Civil Court judge since 2021 sitting as Acting Supreme; won the convention's only contested floor vote 90-65; Burmese-Chinese immigrant and former negligence trial lawyer.",
      bio: "Ethnic Chinese immigrant from Burma, where he has said his family was treated as second-class citizens. Trial attorney handling negligence cases from 2006; earlier assigned to Bronx Criminal Court. In 2021 told a Democratic club he supported New York's bail reform laws.",
      record: [
        "Won the only contested nomination at the convention, a floor vote over Civil Court Judge Ilana Marcus, 90 to 65; 17 judges had sought the three open seats.",
        "NYC Bar: Approved (2021); NYCLA 2025 judiciary honoree. 2026 panel: most highly qualified.",
      ],
      controversies: ["None found."],
      flags: ["Education not found."],
    },
    {
      candidateId: "taylor",
      name: "Amy S. Taylor",
      lines: ["Working Families"],
      role: "Attorney and nonprofit consultant; apparent placeholder candidate",
      brief:
        "Apparent placeholder: nonprofit immigrant-rights attorney who was WFP's stand-in for Governor until Hochul took the line in August; no campaign found.",
      bio: "Oberlin B.A., CUNY Law J.D. Former deputy executive director of the International Refugee Assistance Project and policy director at the Mayor's Office of Immigrant Affairs; 25 years in immigrant- and civil-rights nonprofit work. She was WFP's unopposed placeholder for Governor on the June primary ballot until the party substituted Hochul in August; her appearance here is consistent with being nominated to a judgeship to vacate that line.",
      record: ["No campaign, platform or public statement seeking this office was found. Courtroom litigation experience not documented."],
    },
    {
      candidateId: "goldfein",
      name: "Joshua E. Goldfein",
      lines: ["Working Families"],
      role: "Legal Aid Society staff attorney (30 years); apparent placeholder candidate",
      brief:
        "Apparent placeholder: 30-year Legal Aid attorney who played the same role in Queens in 2020; no campaign found.",
      bio: "Long associated with Legal Aid's Homeless Rights Project. In 2020 he was WFP's congressional placeholder in NY-1, then moved to the Queens Supreme Court ballot, where he drew 1.3% of the vote.",
      record: ["No campaign or public statement seeking this office was found."],
    },
    {
      candidateId: "fontaine",
      name: "Sienna M. Fontaine",
      lines: ["Working Families"],
      role: "Legal Director, Make the Road New York; apparent placeholder candidate",
      brief:
        "Apparent placeholder: legal director of Make the Road New York, a core WFP ally; no campaign found.",
      bio: "NYU Law J.D. (2007). Oversees more than 45 attorneys and advocates on housing, benefits, workplace and immigration matters at Make the Road, a core WFP ally.",
      record: ["No campaign or public statement seeking this office was found."],
    },
    {
      candidateId: "cohen",
      name: "Bob Cohen",
      lines: ["Working Families"],
      role: "Policy and Research Director, Citizen Action of New York; apparent placeholder candidate",
      brief:
        "Apparent placeholder: Citizen Action policy director who has held WFP judicial lines in 2018, 2020 and 2021 and was rated Not Approved by the City Bar for not participating; no campaign found.",
      bio: "Attorney and policy researcher who has testified on the state climate law and health exchange. Has appeared on the WFP line for Supreme Court in the Bronx (2018) and Queens (2020, 2021) as a placeholder; NYC Bar rated him Not Approved in 2018 and 2021 (he did not participate in its process).",
      record: ["No campaign or public statement seeking this office was found."],
    },
    {
      candidateId: "rizzo",
      name: "Jeffrey W. Rizzo",
      lines: ["Working Families"],
      role: "Trial lawyer, Levy & Rizzo; apparent placeholder candidate",
      brief:
        "Apparent placeholder: Bronx trial lawyer and former Legal Aid public defender; no campaign found.",
      bio: "University of Delaware B.A., Pace Law J.D., admitted 2004. Former Legal Aid public defender in the Bronx; about 15 years as a trial lawyer; current practice includes sealing old convictions.",
      record: ["No campaign or public statement seeking this office was found."],
    },
  ],
  sources: [
    { title: "‘Your Reputation Is Everything’: 3 Manhattan Appellate Justices Discuss the Bench and the Ballot", url: "https://assets.alm.com/9f/d2/77314d3441b3892ffec839761534/nylj100826a.pdf", date: "New York Law Journal, Oct 8, 2026" },
    { title: "Judge Christopher Chin Wins Contested Manhattan Supreme Court Nomination", url: "https://www.law.com/newyorklawjournal/2026/08/11/judge-christopher-chin-wins-contested-manhattan-supreme-court-nomination-in-convention-floor-vote/", date: "New York Law Journal, Aug 11, 2026" },
    { title: "Manhattan Dems Nominate Six for Supreme at 2026 Judicial Convention", url: "https://manhattandemocrats.org/2026/08/manhattan-dems-nominate-six-for-supreme-at-2026-judicial-convention/", date: "Aug 10, 2026" },
    { title: "Results of the 2026 Supreme Court Independent Screening Panel", url: "https://manhattandemocrats.org/2026/07/manhattan-dems-announce-the-results-of-the-2026-supreme-court-independent-screening-panel/", date: "July 28, 2026" },
    { title: "Who not to vote for when choosing judges (WFP placeholders)", url: "https://www.cityandstateny.com/politics/2020/10/who-not-to-vote-for-when-choosing-judges/175507/", date: "City & State, Oct 30, 2020" },
    { title: "NYS BOE Amended Certification of Offices", url: "https://elections.ny.gov/system/files/documents/2026/07/2026-amended-certification-of-offices-to-counties-7.31.26.pdf", date: "July 31, 2026" },
    { title: "Governor Hochul Announces Designations to Appellate Division Courts", url: "https://www.governor.ny.gov/news/governor-hochul-announces-designations-appellate-division-courts", date: "July 24, 2025" },
    { title: "Trump ordered to pay $2 million to settle Trump Foundation suit", url: "https://www.cnbc.com/2019/11/07/trump-ordered-to-pay-2-million-to-settle-trump-foundation-suit.html", date: "CNBC, Nov 7, 2019" },
    { title: "Judge Denies Motion for Stay of Child Victims Act Lawsuit", url: "https://assets.alm.com/6f/4e/1230729845a5ade1d25509f5c92f/nylj092925a.pdf", date: "New York Law Journal, Sept 29, 2025" },
    { title: "NYC Bar general-election ratings, 2021", url: "https://www.nycbar.org/press-releases/new-york-city-bar-association-rates-candidates-for-civil-court-and-supreme-court-in-the-five-boroughs/", date: "Oct 22, 2021" },
    { title: "NYC Bar press releases (check for 2026 ratings)", url: "https://www.nycbar.org/press-releases/" },
    { title: "Judge Kate Waterman-Marshall campaign site", url: "https://sites.google.com/view/judgekatewatermanmarshall/home" },
    { title: "Amy S. Taylor (branch.vote)", url: "https://www.branch.vote/races/2026-new-york-general-election-ny-state-supreme-court-judge-ny-supreme-court-1/candidates/amy-taylor-1", date: "Sept 9, 2026" },
    { title: "Election Law § 6-106 (Supreme Court nominations by convention)", url: "https://www.nysenate.gov/legislation/laws/ELN/6-106" },
  ],
  updated: UPDATED,
};

export const CIVIL_COURT_COUNTY: RaceInsight = {
  raceId: "civil-court-county",
  overview:
    "Civil Court hears cases up to $50,000, small claims up to $10,000, and, through its Housing Part, landlord-tenant cases. Once elected, Civil Court judges are routinely reassigned to Criminal Court, Family Court or as Acting Supreme Court justices. Ten-year term. Three countywide seats are up: two incumbents whose terms expire and the seat of Judge Louis Nock, who retired in September 2025. Three names for three seats, so this race is effectively uncontested.",
  howItWorks: [
    "All three were reported “most highly qualified” by the Manhattan Democratic Party's February 2026 screening panel, faced no primary, and are endorsed by the major Manhattan Democratic clubs. No Republican or other candidate filed.",
    "You may vote for up to three, fewer, or none. NYC Bar ratings for 2026 had not been published as of Oct. 19.",
  ],
  unopposedNote: BLANK_NOTE,
  candidates: [
    {
      candidateId: "hanshaft",
      name: "Josh E. Hanshaft",
      lines: ["Democratic"],
      role: "Civil Court judge since 2017 (incumbent), sitting in Manhattan Criminal Court / Supreme Court Criminal Term",
      brief:
        "Incumbent since 2017 sitting in criminal court, 18 years as a Brooklyn prosecutor; an advocacy group's data analysis flags him as the county's most bail-heavy judge.",
      bio: "Born in NYC, longtime East Side resident. Kings County Assistant District Attorney for 18 years (1996-2013), then an OATH hearing officer and City Council legislative attorney before his unopposed 2016 election. Admitted in New York and Connecticut.",
      record: [
        "Published criminal decisions include People v. Palacios (2023) and People v. Jalloh (2019).",
        "Scrutinize.org, an advocacy nonprofit analyzing court data, reports he set commercial bail bonds in 93.8% of 273 bail cases and labels his “disproportionate carcerality” figure the highest among New York County judges. Scrutinize says its analyses are not official records. No Commission on Judicial Conduct discipline on record.",
        "NYC Bar: Approved (2016). 2026 panel: most highly qualified.",
      ],
      flags: ["Law school not found."],
    },
    {
      candidateId: "morales-minerva",
      name: "Emily Morales-Minerva",
      lines: ["Democratic"],
      role: "Civil Court judge since 2017 (incumbent), sitting as Acting Supreme Court Justice, Civil Term",
      brief:
        "Incumbent since 2017 now sitting as Acting Supreme Court Justice; former Court of Appeals clerk and deputy chief court attorney of Civil Court; no controversies found.",
      bio: "Fifth daughter of Dominican immigrants; worked in her parents' Brooklyn bodega as a child. Manhattanville B.A. (summa cum laude), Cornell Law J.D. Court of Appeals central staff attorney, principal law clerk to Judge Carmen Ciparick, special counsel for access-to-justice initiatives in Housing Court, deputy chief court attorney of Civil Court. Assigned to Bronx Family Court after her unopposed 2016 election.",
      record: [
        "Published decisions include Matter of Abrams Fensterman LLP v. People (2025) and Deleon v. 560-568 Audubon Realty (2024, rent-overcharge discovery).",
        "NYCLA 2025 judiciary honoree. NYC Bar: Approved (2016). 2026 panel: most highly qualified. No Commission on Judicial Conduct discipline on record.",
      ],
      controversies: ["None found."],
    },
    {
      candidateId: "frants",
      name: "Vlad Frants",
      lines: ["Democratic"],
      role: "City adjudicator (conducts evidentiary hearings); not currently a judge",
      brief:
        "City adjudicator and former IRS litigator, not yet a judge; screened most highly qualified and endorsed by the Manhattan Democratic Party and 27 clubs.",
      bio: "Born in Ukraine, immigrated as a child, raised in Brooklyn by a single mother. Stony Brook B.A., Brooklyn Law J.D., Fordham M.S. (taxation), Georgetown LL.M. Nearly two decades as a litigator including the IRS Office of Chief Counsel (cites a 2024 Litigation Team of the Year award and a U.S. Treasury Outstanding Litigator Award), law firms and the federal court system; adjunct professor for more than a decade. Officer of the Jewish Lawyers Guild; co-chair of the Ukrainian American Bar Association's NYC chapter.",
      record: [
        "Says he was found most highly qualified by three consecutive independent screening panels; endorsed by the Manhattan Democratic Party and, per his site, 27 Democratic clubs.",
        "No prior NYC Bar rating (first general election).",
      ],
      controversies: ["None found."],
    },
  ],
  sources: [
    { title: "Results of the 2026 Civil Independent Judicial Screening Panel", url: "https://manhattandemocrats.org/2026/02/announcing-the-results-of-the-2026-civil-independent-judicial-screening-panel/", date: "Feb 12, 2026" },
    { title: "NYC BOE Civil Court Vacancy Numbers, 2026", url: "https://www.vote.nyc/sites/default/files/news/2026-02/Civil_Court_Vacancy_Numbers_2026_Primary_Election.pdf", date: "Feb 2026" },
    { title: "Scrutinize.org profile, Josh E. Hanshaft", url: "https://www.scrutinize.org/ny/trial-courts/judge/josh-e-hanshaft", date: "data snapshot Feb 19, 2026" },
    { title: "Scrutinize.org profile, Emily Morales-Minerva", url: "https://www.scrutinize.org/ny/trial-courts/judge/emily-moralesminerva", date: "data snapshot Feb 19, 2026" },
    { title: "Vlad Frants for Civil Court", url: "https://www.vladfrantsforcivilcourt.com/", date: "campaign site, accessed Oct 19, 2026" },
    { title: "Dominican Bar Association judiciary journal (Morales-Minerva bio)", url: "https://www.dominicanbarassociation.org/resources/Documents/Dominican%20Judiciary%20Journal%20Gala%20Update.pdf", date: "Sept 2017" },
    { title: "NYC Bar general-election ratings, 2016", url: "https://www.nycbar.org/?p=5327", date: "Nov 1, 2016" },
    { title: "NY Constitution Art. VI § 15 (Civil Court term)", url: "https://www.nysenate.gov/legislation/laws/CNS/A6S15" },
  ],
  updated: UPDATED,
};

export const CIVIL_COURT_MUNICIPAL: RaceInsight = {
  raceId: "civil-court-municipal",
  overview:
    "One Civil Court seat elected from the 1st Municipal Court District (Lower Manhattan: roughly the Financial District, Tribeca, SoHo, Greenwich Village and Chelsea), rather than countywide. Ten-year term. One candidate, so the race is uncontested. This seat was not on the February 2026 vacancy list; it appears to have opened after the primary filing period, in which case the county party's district committee, not a primary, filled the nomination.",
  unopposedNote: BLANK_NOTE,
  candidates: [
    {
      candidateId: "flores",
      name: "Eric Flores",
      lines: ["Democratic"],
      role: "Attorney (probable match: insurance-defense litigator); unopposed",
      brief:
        "Unopposed with almost no public record: no campaign site, no coverage; probably an insurance-defense litigator at Scahill Law Group, matched on name only.",
      bio: "The candidate has no campaign website and almost no public profile. The state attorney registry lists an Eric Charles Flores admitted in 2011 (Thomas M. Cooley Law School) registered with Scahill Law Group, an insurance-defense firm, where he is described as the New York County team leader focused on defending automobile cases, previously at a plaintiff's medical-malpractice firm (Michigan State B.A. 2004). The Downtown Independent Democrats list the candidate as “Eric C. Flores.” The match is based on name and middle initial only.",
      nomination: "Reported “most highly qualified” by the Manhattan Democratic Party's Feb. 12, 2026 screening panel. Endorsed by Downtown Independent Democrats.",
      record: ["No ratings published yet; the 2026 NYC Bar general-election ratings should cover him when released."],
      flags: [
        "Identity and background are a probable but unconfirmed match.",
        "Which judge vacated the seat, and why, could not be determined.",
      ],
    },
  ],
  sources: [
    { title: "Results of the 2026 Civil Independent Judicial Screening Panel", url: "https://manhattandemocrats.org/2026/02/announcing-the-results-of-the-2026-civil-independent-judicial-screening-panel/", date: "Feb 12, 2026" },
    { title: "NYS attorney registration, Eric Charles Flores", url: "https://opengovny.com/attorney/4898474", date: "accessed Oct 19, 2026" },
    { title: "Scahill Law Group, Eric Flores", url: "https://scahillpc.com/eric-flores/", date: "accessed Oct 19, 2026" },
    { title: "Downtown Independent Democrats 2026 endorsements", url: "https://www.didnyc.org/june_2026_primary_1" },
    { title: "Meeting of the 1st Municipal Court District Committee", url: "https://manhattandemocrats.org/mcd1-2026/", date: "July 17, 2026" },
  ],
  updated: UPDATED,
};
