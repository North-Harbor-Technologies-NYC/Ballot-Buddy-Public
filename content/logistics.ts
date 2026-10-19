import type { Source } from "./types";

export const LOGISTICS = {
  electionDay: {
    date: "Tuesday, November 3, 2026",
    hours: "6:00 am to 9:00 pm",
  },
  registrationDeadline:
    "Saturday, October 24, 2026 (also “Golden Day”: you can register and vote the same day at an early voting site)",
  earlyVoting: {
    dates: "Saturday, October 24 through Sunday, November 1, 2026",
    note: "You must use your assigned early voting site, which may differ from your Election Day site. Look both up by address at findmypollsite.vote.nyc; for most of this district the early voting site is BMCC-Murray Street, 70 Murray Street, but check yours.",
    hours: [
      ["Sat Oct 24", "9 am to 5 pm"],
      ["Sun Oct 25", "9 am to 5 pm"],
      ["Mon Oct 26", "9 am to 5 pm"],
      ["Tue Oct 27", "10 am to 8 pm"],
      ["Wed Oct 28", "10 am to 8 pm"],
      ["Thu Oct 29", "8 am to 4 pm"],
      ["Fri Oct 30", "9 am to 5 pm"],
      ["Sat Oct 31", "9 am to 5 pm"],
      ["Sun Nov 1", "9 am to 5 pm"],
    ] as [string, string][],
  },
  mail: {
    apply: "Mail or online applications for an early mail or absentee ballot must be received by October 24; in person at the Board of Elections through November 2.",
    return: "Postmark by November 3 and it must arrive by November 10, or drop it at any early voting site (Oct 24 to Nov 1), any Election Day poll site, or a BOE office by 9 pm on November 3.",
  },
  rules: [
    {
      q: "Can I bring this into the booth?",
      a: "Yes. Nothing in New York law bars notes, a sample ballot or a voter guide in the privacy booth, and the city's voter rights list says you may bring any voting materials with you. Do not display campaign material inside the poll site or within 100 feet of it.",
    },
    {
      q: "Can I photograph my ballot?",
      a: "No. Showing your marked ballot to reveal its contents is a misdemeanor under Election Law § 17-130(10), upheld in federal court in 2017. A photo of yourself at the poll site that does not show your choices is not covered.",
    },
    {
      q: "The same name is on two lines. Which do I pick?",
      a: "Either one. A vote on any line is one vote for the candidate; if you mark the same candidate on two lines, only the first counts and the race is not spoiled. The line matters only to the party: a party keeps its automatic ballot access if its governor line draws at least 2% of the vote or 130,000 votes, whichever is greater.",
    },
    {
      q: "What if I skip a race or vote for fewer than the maximum?",
      a: "Nothing bad. Skipping a race, or choosing fewer than “Vote for N,” never spoils the ballot; every other race still counts. Voting for more than the maximum voids that race only, and the scanner will warn you so you can ask for a new ballot.",
    },
    {
      q: "Does a blank in an unopposed race register anywhere?",
      a: "Partly. The Board of Elections publishes an “Unrecorded” count for every contest, including single-candidate ones, so blanks are visible in the results. That line combines blanks with overvotes, and a blank does not change who takes office.",
    },
    {
      q: "Write-ins",
      a: "Fill in the oval next to Write-in and print the name. Any person may be written in for a general election; no pre-filing is required. Stickers and labels are prohibited. If a candidate is already printed on the ballot, fill in their oval rather than writing them in.",
    },
    {
      q: "Both sides",
      a: "The five proposals are on the back of sheet 1. Sheet 2 carries the judicial races. Scan both sheets.",
    },
  ],
  /** Where to look up your own poll sites. Verified Oct 19, 2026. */
  lookup: [
    {
      label: "NYC voters: find your Election Day site, early voting site and sample ballot",
      url: "https://findmypollsite.vote.nyc/",
      note: "Enter your house number, street and ZIP. Shows both sites with hours; your early voting site is often different from your Election Day site.",
    },
    {
      label: "Any New York voter: registration status, poll site and mail-ballot tracking",
      url: "https://voterlookup.elections.ny.gov/",
      note: "State Board of Elections lookup by name, date of birth, county and ZIP.",
    },
    {
      label: "Outside New York: your state's official polling place locator",
      url: "https://www.vote.org/polling-place-locator/",
      note: "Pick your state; it links to that state's official tool.",
    },
  ],
  links: {
    pollSite: "https://findmypollsite.vote.nyc/",
    voterGuide: "https://www.nycvotes.org/whats-on-the-ballot/2026-general-election-voter-guide/",
    proposals: "https://vote.nyc/page/ballot-proposals",
    mailBallot: "https://requestballot.vote.nyc/",
    phone: "1-866-VOTE-NYC (866-868-3692)",
  },
  sources: [
    { title: "NYC BOE: Early voting days and hours", url: "https://vote.nyc/election/general-election-early-voting-day-1" },
    { title: "NYC BOE: Registration deadlines", url: "https://vote.nyc/page/registration-deadlines" },
    { title: "NYC BOE: Absentee / early mail voting", url: "https://vote.nyc/page/absentee-voting-0" },
    { title: "NYC Votes: Voting rights (“bring any voting materials with you”)", url: "https://www.nycvotes.org/how-to-vote/voting-rights/" },
    { title: "Election Law § 17-130 (showing a marked ballot)", url: "https://www.nysenate.gov/legislation/laws/ELN/17-130" },
    { title: "Election Law § 9-112 (counting rules: fusion, overvotes)", url: "https://www.nysenate.gov/legislation/laws/ELN/9-112" },
    { title: "9 NYCRR § 6210.13 (valid-vote standards)", url: "https://regulations.justia.com/states/new-york/title-9/subtitle-v/part-6210/section-6210-13/" },
    { title: "Election Law § 1-104 (party ballot-access threshold)", url: "https://www.nysenate.gov/legislation/laws/ELN/1-104" },
    { title: "Election Law § 8-308 (write-ins)", url: "https://www.nysenate.gov/legislation/laws/ELN/8-308" },
    { title: "NYC BOE election results format (“Unrecorded” line)", url: "https://vote.nyc/page/election-results-summary" },
  ] as Source[],
};
