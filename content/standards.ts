/**
 * Editorial standards shown to readers in the About panel. These are promises to the
 * voter; the build-time check in scripts/check-content.ts enforces the testable ones.
 */
export const STANDARDS: { title: string; body: string }[] = [
  {
    title: "No endorsements",
    body: "The guide never tells you how to vote. It has no recommendations, no ratings of its own and no opinion of the author. If you see one, the guide has been altered.",
  },
  {
    title: "Every fact has a source",
    body: "Each race and proposal lists the sources used, with dates. Characterizations are labeled as what they are: what a campaign says, what critics call something.",
  },
  {
    title: "Both sides, strongest case",
    body: "Every proposal gets the best case for Yes and the best case for No, each attributed to the people and organizations who actually make it.",
  },
  {
    title: "No polling, no predictions",
    body: "Polls are stale by Election Day and push people for reasons that have nothing to do with the office. They are left out on purpose.",
  },
  {
    title: "The unglamorous parts are explained",
    body: "Fusion lines, placeholder candidates, uncontested races, vote-for-six judicial slates and proposals on the back of the ballot are called out, because that is where voters get tripped up.",
  },
  {
    title: "What we could not verify is said out loud",
    body: "Thin files are described as thin. Anything unconfirmed is marked, not omitted.",
  },
  {
    title: "Your picks are yours",
    body: "Nothing you mark leaves your device. There is no account, no server and no analytics.",
  },
];
