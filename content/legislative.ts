import type { RaceInsight } from "./types";

const UPDATED = "October 19, 2026";

export const CONGRESS: RaceInsight = {
  raceId: "congress",
  overview:
    "One of New York's 26 seats in the U.S. House, two-year term. NY-10 covers Lower Manhattan south of roughly 14th Street (Financial District, Tribeca, Chinatown, Lower East Side, East and West Village, SoHo) plus brownstone Brooklyn from Brooklyn Heights through Park Slope and Sunset Park to Borough Park and part of Bay Ridge. It is one of the most Democratic districts in the country (2024: Goldman 82%). The real contest was the June primary.",
  howItWorks: [
    "Fusion lines: Lander is on Democratic (A) and Working Families (D); Moore is on Republican (B) and Conservative (C). One vote per candidate counts regardless of line.",
    "This was not an open seat. Rep. Dan Goldman ran for a third term and lost the June 23 Democratic primary to Lander, roughly 66% to 34%. (Jerry Nadler's retirement was in the neighboring NY-12.)",
  ],
  candidates: [
    {
      candidateId: "lander",
      name: "Brad Lander",
      lines: ["Democratic", "Working Families"],
      role: "Former NYC Comptroller (2022-25); former Council member",
      brief:
        "Former NYC Comptroller who ousted Rep. Dan Goldman 66-34 in the June primary; progressive on housing and federal spending, a self-described liberal Zionist who opposes further military aid to Israel during the war; acquitted in June over a 26 Federal Plaza arrest.",
      bio: "Lander, 57, is from St. Louis (University of Chicago B.A., Marshall Scholar at UCL, Pratt M.S. in urban planning). Ran the Fifth Avenue Committee, a Park Slope affordable-housing nonprofit, and the Pratt Center for Community Development before 12 years on the City Council (District 39, Park Slope and Carroll Gardens) and one term as Comptroller. Finished third in the 2025 mayoral primary (11.3% first choice) after cross-endorsing Zohran Mamdani under ranked-choice voting. Lives in Brooklyn.",
      nomination:
        "Announced Dec. 10, 2025 that he would challenge Goldman from the left; other progressives, including Council Member Alexa Avilés, dropped out to consolidate behind him. Won the June 23 primary 55,060 to 28,445 (65.8% to 34.0%), called four minutes after polls closed. Goldman had Hochul, Jeffries, AIPAC and J Street and outspent him more than 7-to-1 on TV.",
      record: [
        "As Comptroller: called for ending the 421-a developer tax break (2022); fought the Adams administration's move of city retirees to Medicare Advantage (the Court of Appeals ruled against the administration in 2024); testified to the MTA board against Hochul's 2024 congestion pricing pause and later defended the program against the Trump administration; in February 2025 threatened to convene the mayoral Inability Committee over Eric Adams's federal case.",
        "ICE arrests: arrested by federal agents June 17, 2025 at 26 Federal Plaza immigration court while escorting a detainee, and again Sept. 18, 2025 with state lawmakers while protesting detention conditions there. A federal judge acquitted him after a one-day bench trial on June 11, 2026 on the charge from the September incident. Goldman called the trial a “publicity stunt.”",
        "Israel and Gaza: describes himself as a liberal Zionist who supports Israel as a Jewish and democratic state and does not identify with BDS, while calling Israel's conduct in Gaza a genocide; would oppose additional U.S. military aid while the conflict continues; supports the Block the Bombs Act; says he has never taken AIPAC money; stopped paying DSA dues after Oct. 7, 2023; skipped the 2026 Celebrate Israel Parade over right-wing Israeli participants.",
        "Housing: calls affordability the district's top issue; would condition federal housing and infrastructure money on localities ending exclusionary zoning; supports repealing the Faircloth Amendment and creating public developers; supports the Brooklyn Marine Terminal redevelopment with more time on transportation and port concerns.",
        "Federal agenda: says Democrats should vote only for budgets that restore ACA subsidies; backs Sen. Warren's wealth tax, Medicare for All, universal child care, taxing capital gains as ordinary income, stronger federal AI regulation, and congressional oversight hearings on federal agents' conduct. Would continue Goldman's immigrant legal-triage clinic.",
      ],
      endorsements:
        "Mayor Mamdani, Sens. Bernie Sanders and Elizabeth Warren, Public Advocate Jumaane Williams, Working Families Party, UAW, Sunrise Movement, Jews for Racial and Economic Justice, The Nation.",
      money:
        "Raised $2.70 million through Sept. 30, 2026, spent $2.60 million, $110,005 on hand (FEC). A super PAC pledged $2 million in June for a slate that included him.",
      controversies: [
        "Goldman accused him during the June debate of growing pension investments in Palantir as comptroller; Lander responded that the comptroller does not pick individual stocks.",
        "Admitted a 2019 ethics violation for soliciting donations for a nonprofit he chaired; a 2016 remark calling a rival's supporters “scumbags,” which he said referred to dark-money groups; civil-disobedience arrests in 2015, 2017 and 2018.",
      ],
    },
    {
      candidateId: "moore",
      name: "Jennifer E. Moore",
      lines: ["Republican", "Conservative"],
      role: "Brooklyn Republican political operative; first run for office",
      brief:
        "A Brooklyn GOP operative who filed four days after the primary, has raised about $2,700, and has published no positions on federal issues; a GOP source called it a put-a-name-on-the-ballot candidacy.",
      bio: "Moore describes herself as a lifelong Brooklynite and Republican operative. Her campaign site says she “stepped up” after Lander won the primary; the New York Post quoted an unnamed GOP source calling her candidacy “really a last-minute put-a-name-on-the-ballot situation.” Her FEC statement of candidacy was filed June 27, 2026, four days after the Democratic primary. No independent reporting on her age, employer or education was found.",
      nomination: "Republican and Conservative primaries were cancelled; she advanced uncontested.",
      record: [
        "Platform as stated by the campaign: “Support the NYPD and first responders”; “fight the cost-of-living crisis”; “reject radical agendas that divide our city”; a representative “who listens to all residents, not just the loudest activists.”",
        "Stated goal: “engage more support from voters registered to all parties who oppose Lander's radical ideology.”",
        "No published positions on health care, immigration, Israel, abortion, taxes or other federal issues were found.",
      ],
      endorsements: "None found.",
      money: "Raised $2,693 through Sept. 30, 2026; $1,526 on hand (FEC).",
      flags: ["Age, employer, education and prior political roles not found in any independent source."],
    },
  ],
  sources: [
    { title: "Brad Lander to win NY-10 Democratic primary, AP says", url: "https://ny1.com/nyc/all-boroughs/politics/2026/06/24/nyc-june-2026-primary-10th-congressional-district-democratic-winner", date: "NY1, June 24, 2026" },
    { title: "Lander trounces Goldman", url: "https://www.jta.org/2026/06/23/politics/lander-challenges-the-incumbent-goldman-in-nys-10th-district", date: "JTA, June 23, 2026" },
    { title: "NY-10 debate: Goldman, Lander trade attacks on Israel, ICE and Mamdani", url: "https://www.amny.com/news/ny-10-debate-goldman-lander-06162026/", date: "amNY, June 16, 2026" },
    { title: "Can a liberal Zionist win with the pro-Palestinian movement?", url: "https://forward.com/news/831689/brad-lander-israel-palestinians-congress/", date: "The Forward, June 15, 2026" },
    { title: "Lander acquitted over 26 Federal Plaza protest arrest", url: "https://politicsny.com/2026/06/11/brad-lander-says-manhattan-u-s-attorney-offices-seriousness-in-jeopardy-after-hes-acquitted-of-criminal-charges-over-26-federal-plaza-protest-arrest/", date: "PoliticsNY, June 11, 2026" },
    { title: "Brad Lander outlines priorities after NY-10 primary win", url: "https://ny1.com/nyc/all-boroughs/mornings-on-1/2026/06/25/brad-lander-outlines-priorities-after-ny-10-primary-win", date: "NY1, June 25, 2026" },
    { title: "NY-10 candidates and FEC totals", url: "https://civicstoop.org/ballot/congress-10", date: "Civic Stoop, FEC data through Sept 30, 2026" },
    { title: "Meet the GOP hopefuls taking on Mamdani-endorsed NY House Dems", url: "https://www.aol.com/articles/meet-gop-hopefuls-taking-mamdani-223254000.html", date: "NY Post via AOL, June 24, 2026" },
    { title: "Jennifer Moore for Congress", url: "http://mooreforny.com/", date: "campaign site, accessed Oct 19, 2026" },
    { title: "Brad Lander", url: "https://en.wikipedia.org/wiki/Brad_Lander", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};

export const STATE_SENATE: RaceInsight = {
  raceId: "state-senate",
  overview:
    "One of 63 seats in the State Senate, two-year term. The 27th District runs from the Battery to about 14th Street: Financial District, Battery Park City, Tribeca, Chinatown, Little Italy, SoHo, Lower East Side, East Village and part of Greenwich Village. It includes the site of Manhattan's borough-based jail at 125 White Street. The seat is open: Sen. Brian Kavanagh, chair of the Housing Committee, announced in February 2026 that he would not run after 20 years in the Legislature. No Republican has won a Manhattan legislative seat since 2000.",
  howItWorks: [
    "Fusion lines: Lee is on Democratic (A) and Working Families (D); Murillo on Republican (B) and Conservative (C).",
    "The Working Families Party backed Yuh-Line Niou in the primary; Lee nonetheless carries the WFP line in November (the mechanics of that substitution were not independently confirmed).",
  ],
  candidates: [
    {
      candidateId: "lee",
      name: "Grace Lee",
      lines: ["Democratic", "Working Families"],
      role: "Assembly Member for the 65th District since 2023",
      brief:
        "Sitting Assembly Member moving up to an open seat after beating Yuh-Line Niou 62-38; opposes the Chinatown jail, won the commuter-van congestion exemption, backed by Hochul, Kavanagh and the big unions.",
      bio: "Lee, 43, grew up in Ohio (Columbia B.A., Chicago Booth M.B.A.), worked in equity research at JPMorgan and UBS, founded a skincare company, and co-founded Children First, the parent coalition that pushed for cleanup of the mercury-contaminated 250 Water Street site. Lost the 2020 Assembly primary to Yuh-Line Niou, won the seat in 2022 (48.6% in a three-way primary; 76% over Helen Qiu in November) and was unopposed in 2024. The first Korean American woman in the Legislature. Lives in Nolita with her husband and three daughters.",
      nomination:
        "Announced in January 2026 for the open seat. Beat Niou 62.1% to 37.7% in the June 23 primary (18,832 to 11,429), reversing their 2020 result. An independent-expenditure committee, Downtown for Change, funded in part by NYSUT and developer Gary Barnett, supported her; NY Focus counted about $1.4 million spent to support “moderates” in races including hers. Kavanagh endorsed her.",
      record: [
        "Chinatown jail: opposes the borough-based jail at 125 White Street; says she was arrested in 2022 blocking construction fences; in June 2025 endorsed the community alternative to move the jail to the vacant federal Metropolitan Correctional Center and build about 1,040 affordable units on the site. Construction is under way.",
        "Congestion pricing: with Sen. John Liu, led the 2023 push to exempt licensed commuter vans serving immigrant communities, which the review board adopted. Her overall position on the toll itself was not verified.",
        "Housing and costs: sponsored a bill providing ground-rent rebates for Battery Park City homeowners and renters below 150% of area median income (passed both houses June 2026, awaiting signature); cites property tax cuts for Mitchell-Lama developments; co-sponsors the Small Business Rent Stabilization Act and supports a legacy-business rent voucher.",
        "Passed the Lower Manhattan Relocation and Employment Assistance Program renewal in the Assembly (June 2025) and the AANHPI Education Equity Act with Sen. Liu (both houses, June 2025; signing not confirmed).",
        "Quality of life: scaffolding and trash enforcement, Canal Street illegal-vending enforcement, camera enforcement for blocking the box near the Holland Tunnel; office reports 800+ constituent cases closed. Supports state limits on ICE and state abortion protections; part of the “Mom Squad” coalition that cites $2 billion for child care expansion and the school cellphone ban.",
        "Demands the city release what it knew about post-9/11 air quality.",
      ],
      endorsements:
        "Gov. Hochul, AG James, Sen. Kavanagh, Hotel and Gaming Trades Council, DC 37, NYSNA, Citizen Action, United Democratic Organization (Chinatown). Niou had Sanders, Lander, WFP and CWA. Mayor Mamdani did not endorse in this race.",
      money:
        "Raised about three times Niou's total, per The Indypendent; received state public matching funds ($14,550 in June, $70,793 in July for the general).",
      controversies: [
        "Characterized by The Indypendent as a “corporate Democrat with close ties to Wall Street” and by NY Focus as a “moderate”; criticized in 2022 for accepting donations from Republican donors. No ethics or legal controversies found.",
      ],
    },
    {
      candidateId: "murillo",
      name: "Jason C. Murillo",
      lines: ["Republican", "Conservative"],
      role: "Producer, small-business owner and community activist; lost a 2025 Council race",
      brief:
        "Lower East Side native and community-media producer (“DJ Loudmouth”) who lost a 2025 Council race 78-16; runs on police funding, ending bail reform and tax relief; no fundraising found.",
      bio: "Murillo is a Lower East Side native who grew up in NYCHA housing and graduated from Seward Park High School. He describes more than two decades in community media, housing and social-services advocacy and local cable and radio programming, and goes by the nickname “DJ Loudmouth.” Ballotpedia lists him as an attorney, but no evidence of a law license was found. He ran for City Council District 2 in November 2025 and lost to Harvey Epstein 78% to 16%.",
      nomination: "Selected by the Manhattan Republican Party in February 2026; cross-endorsed by the Conservative Party in March. Uncontested primary.",
      record: [
        "Public safety: “fully fund law enforcement,” “end bail reform,” restore accountability in the criminal-justice system.",
        "Economy: deregulation, tax relief for small businesses, cost-of-living relief.",
        "Governance: transparency in Albany, protecting community boards; protect NYCHA residents' rights; opposes higher taxes and large spending; calls himself a “constitutionalist.”",
        "Casts the mayor and Gov. Hochul as “radical left” and himself as an outsider.",
      ],
      endorsements: "State Sen. Steve Chan appears in a campaign video. No others found.",
      money: "Not found; does not appear in state public matching fund reports.",
      flags: [
        "Ballotpedia's “attorney” listing could not be confirmed.",
        "His campaign site shows a running mate on a “Community First” line that does not exist on the official ballot.",
      ],
    },
  ],
  sources: [
    { title: "Brian Kavanagh won't seek reelection", url: "https://www.cityandstateny.com/politics/2026/02/brian-kavanagh-wont-seek-reelection-state-senate/411176/", date: "City & State, Feb 3, 2026" },
    { title: "Lee, Niou face off ahead of SD-27 primary", url: "https://ny1.com/nyc/all-boroughs/politics/2026/06/15/lee--niou-face-off-ahead-of-state-senate-district-27-democratic-primary", date: "NY1, June 15, 2026" },
    { title: "The Candidates 2026: Grace Lee for Senate District 27", url: "https://tribecacitizen.com/2026/05/28/the-candidates-2026-grace-lee-for-senate-district-27/", date: "Tribeca Citizen, May 28, 2026" },
    { title: "Lander and Lee win their districts handily", url: "https://tribecacitizen.com/2026/06/24/lander-and-lee-win-their-districts-handily/", date: "Tribeca Citizen, June 24, 2026" },
    { title: "Q&A with SD-27 Candidate Grace Lee", url: "https://politicsny.com/2026/06/10/campaign-insiders-a-qa-with-sd-27-candidate-grace-lee/", date: "PoliticsNY, June 10, 2026" },
    { title: "Chinatown's proposal to create affordable housing, not jail, gains momentum", url: "https://documentedny.com/2025/06/03/chinatown-proposal-affordable-housing-nubc-jail/", date: "Documented, June 3, 2025" },
    { title: "DSA Dominates Albany Elections Despite Super PAC Deluge", url: "https://nysfocus.com/2026/06/24/ny-primary-election-results-dsa-state-legislature-2026", date: "NY Focus, June 24, 2026" },
    { title: "Can a Republican 'Loudmouth' Win a Downtown NYS Senate Seat?", url: "https://www.otdowntown.com/news/can-a-republican-loudmouth-win-a-downtown-nys-senate-seat-XG5668088", date: "Our Town Downtown, Mar 16, 2026" },
    { title: "Jason Murillo", url: "https://ballotpedia.org/Jason_Murillo", date: "Ballotpedia, accessed Oct 19, 2026" },
    { title: "Grace Lee (politician)", url: "https://en.wikipedia.org/wiki/Grace_Lee_(politician)", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};

export const ASSEMBLY: RaceInsight = {
  raceId: "assembly",
  overview:
    "One of 150 seats in the State Assembly, two-year term. The 65th District covers the Financial District east of Broadway, the Seaport, Civic Center, Chinatown, Two Bridges and the Lower East Side including the NYCHA developments along the East River (Battery Park City and Tribeca are in other districts). The seat is open because Grace Lee is running for State Senate. Mamdani won 65% of the final-round vote here in the 2025 mayoral primary, the most pro-Mamdani Assembly district in Manhattan south of 125th Street.",
  howItWorks: [
    "Only two columns are printed for this race: Sairitupac on Democratic (A) and Qiu on Republican (B). The Conservative line is blank.",
  ],
  candidates: [
    {
      candidateId: "sairitupac",
      name: "Illapa Sairitupac",
      lines: ["Democratic"],
      role: "Housing organizer and social worker; NYC-DSA member",
      brief:
        "DSA-backed housing organizer and social worker who won a six-way primary with 37%; would tax the rich for the Mamdani agenda and build social housing; no stated position found on the Chinatown jail.",
      bio: "Sairitupac, 39, was born in Mount Kisco to parents who immigrated from Peru (one outlet says Peruvian-born; unresolved), grew up in Westchester and Dutchess counties and has lived on the Lower East Side since about 2012. NYU M.S.W. Housing organizer at the Cooper Square Committee, mental-health social worker, former anti-ICE organizer, and field coordinator for Mamdani's 2025 campaign in Lower Manhattan. Until early 2026 he co-chaired NYC-DSA's electoral working group. Openly gay, identifies as non-binary. Ran for this seat in 2022 and finished second to Lee.",
      nomination:
        "Won the six-way June 23 primary with 36.9% (4,417 votes) over Jasmin Sanchez (17.5%), Wei-Li Tjong (15.2%), Jay Jacky Wong (15.2%), Mariama James (10.5%) and Lilah Mejia (4.4%). Before the primary he sued to remove Sanchez from the ballot on residency grounds; a judge let the case proceed but Sanchez stayed on the ballot.",
      record: [
        "Taxes: “tax the rich” to fund Mayor Mamdani's affordability agenda, including free universal child care; says he will carry that agenda in Albany.",
        "Housing: would sponsor a state Social Housing Development Authority to build union-built affordable housing directly; supports building on underused parking lots and atop the Canal Street post office; says he would not meet with REBNY. Led campaigns for the state bill ending “Frankensteining” of rent-regulated apartments and a city bill on tenant reporting of violations in vacant units.",
        "Immigration: pass “New York for All” to bar local law enforcement cooperation with ICE.",
        "Streets: wants to pedestrianize more streets, especially in FiDi (“There are some streets that just should not have cars at all”); endorsed by StreetsPAC.",
        "Climate: worked on the Build Public Renewables Act; pledges no fossil fuel, real estate or corporate money.",
        "Chinatown jail: no stated position found in the sources reviewed.",
      ],
      endorsements:
        "Mayor Mamdani, Sen. Bernie Sanders, NYC-DSA, Working Families Party, Hotel and Gaming Trades Council, 32BJ, NYSNA, Carpenters, UAW Region 9A, Tenants PAC, Planned Parenthood Empire State Votes, Sunrise NYC, StreetsPAC, Victory Fund, NYLCV, New York Communities for Change, CAAAV Voice.",
      money: "State public matching funds: $12,825 in June, then $15,903 (primary) and $24,830 (general) in July. Full totals not retrieved.",
      controversies: [
        "The Washington Examiner reported he “was previously arrested at least twice at protests,” without dates, charges or outcomes; not independently verified.",
        "The residency lawsuit against primary rival Jasmin Sanchez.",
      ],
      flags: ["Birthplace (Mount Kisco vs. Peru) is reported inconsistently."],
    },
    {
      candidateId: "qiu",
      name: "Helen Qiu",
      lines: ["Republican"],
      role: "Pastor and former engineer; fourth run against Lower Manhattan Democrats since 2022",
      brief:
        "Pastor and former engineer on her fourth run against Lower Manhattan Democrats since 2022; repeal cashless bail, keep Rikers open, defend the SHSAT, opposes congestion pricing; criticized in 2023 for a “radical Latino” flier.",
      bio: "Qiu, in her mid-50s, is a Chinese immigrant, single mother and Christian pastor with a prior career as a teacher, engineer and engineering manager (Sun Yat-sen University B.A.; graduate degrees from Reformed Seminary and Columbia). She lost this Assembly seat to Grace Lee in 2022 (76% to 24%), and lost City Council District 1 to Christopher Marte in 2023 (68% to 31%) and 2025 (72% to 28%). City & State has called her a “perennial candidate.” She publicly supports President Trump.",
      nomination: "Uncontested Republican primary. She is on the Republican line only; no Conservative line this year.",
      record: [
        "Public safety: repeal cashless bail, fund the NYPD, add MTA security, license e-bikes and e-scooters.",
        "Chinatown jail: says Rikers should stay open while being reformed.",
        "Education: merit-based admissions (defend the SHSAT and Gifted & Talented), armed guards in schools, opposes “gender theory” and critical race theory in schools, parental rights.",
        "Housing: keep NYCHA from being sold; prioritize affordable housing for seniors and single parents. Opposes congestion pricing; supports reopening Park Row.",
        "Fiscal: cut taxes and regulations, protect small landlords, reduce state debt.",
        "No 2026-specific platform document was located; positions are drawn from her 2022 and 2023 campaigns.",
      ],
      endorsements: "None found for 2026.",
      money: "Qualified for state public matching funds in 2026: $42,432 total ($22,102 primary, $20,330 general).",
      controversies: [
        "In the 2023 Council race, the Marte campaign said she distributed fliers urging Chinese voters to unite to remove Marte, whom she called a “radical Latino,” and accused her of linking Latinos with crime; the Marte campaign called the rhetoric racist.",
        "In 2022 she posted a video of an NYPD response to a homeless man at her office and wrote “We must reject firmly crime-softie Grace Lee.”",
      ],
    },
  ],
  sources: [
    { title: "Illapa Sairitupac preps second run for lower Manhattan Assembly seat", url: "https://www.cityandstateny.com/politics/2026/02/lllapa-sairitupac-preps-second-run-lower-manhattan-assembly-seat/411593/", date: "City & State, Feb 23, 2026" },
    { title: "Q&A with AD-65 Candidate Illapa Sairitupac", url: "https://politicsny.com/2026/05/20/campaign-insiders-a-qa-with-ad-65-candidate-illapa-sairitupac/", date: "PoliticsNY, May 20, 2026" },
    { title: "Illapa Sairitupac wants to make his Lower Manhattan more walkable", url: "https://softpowervote.substack.com/p/illapa-sairitupac-wants-to-make-his", date: "Soft Power Vote, June 20, 2026" },
    { title: "Lander, Sairitupac, Lee Victorious on Primary Night", url: "https://www.thelodownny.com/leslog/2026/06/lander-sairitupac-lee-victorious-on-primary-night.html", date: "The Lo-Down, June 24, 2026" },
    { title: "Sairitupac v Sanchez, 2026 NY Slip Op 50743(U)", url: "https://www.nycourts.gov/reporter/current/3dseries/2026/2026_50743.shtml", date: "May 1, 2026" },
    { title: "Mamdani-backed New York candidate was arrested multiple times", url: "https://www.washingtonexaminer.com/news/investigations/4630204/mamdani-backed-new-york-candidate-arrested-multiple-times-protests/", date: "Washington Examiner, June 30, 2026" },
    { title: "Helen Qiu", url: "https://ballotpedia.org/Helen_Qiu", date: "Ballotpedia, accessed Oct 19, 2026" },
    { title: "Marte fends off Qiu's negative campaign", url: "https://thevillagesun.com/bottcher-strings-together-another-win-marte-fends-off-qius-negative-campaign", date: "The Village Sun, Nov 18, 2023" },
    { title: "A Race To The Finish (AD-65, 2022)", url: "https://www.otdowntown.com/news/a-race-to-the-finish-GF2250686", date: "Our Town Downtown, Oct 21, 2022" },
    { title: "Illapa Sairitupac", url: "https://en.wikipedia.org/wiki/Illapa_Sairitupac", date: "accessed Oct 19, 2026" },
  ],
  updated: UPDATED,
};
