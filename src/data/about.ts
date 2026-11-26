// What Warcryer is, said once. The About page, the data search engines read (schema.org) and the text
// files written for AI assistants (/llms.txt and its neighbours) are all built from this, so that every
// place a machine learns about Warcryer says the same thing.
//
// Every line here must be true of the service as it runs today, and agree with the comparison pages
// (compare.ts) and the guides. When a fact changes (price, size, platforms, languages), change it here.
import { COMMON_FAQ, OUR_LIMITS } from "./compare";
import { DISCORD, GITHUB, SITE, YOUTUBE } from "./site";

/** The phrase that goes beside the name wherever it is introduced: other things are called nearly the same. */
export const WHAT = "clan and alliance management for MMORPG players, with voice built in";
export const ONE_LINE = `Warcryer is ${WHAT}.`;
export const SUMMARY =
  "One Windows app covers an organised event from the sign-ups to the last drop: planning operations, building the roster, voice that follows the roster, attendance, points and loot. It is hosted for you, free while in beta, and its Windows app is open source.";

export const LANGUAGES = [
  "English", "French", "German", "Spanish", "Brazilian Portuguese", "Romanian", "Polish", "Lithuanian",
  "Greek", "Russian", "Ukrainian", "Turkish", "Simplified Chinese", "Traditional Chinese",
];

/** The facts, as a table: [what, the fact]. */
export const FACTS: [string, string][] = [
  ["What it is", "Clan and alliance management with voice built in, for players of MMORPGs and other games played in large organised groups."],
  ["Who it is for", "The people who lead or help run guilds, clans and alliances (alliance leaders, clan leaders, officers, raid and siege leaders) and their members."],
  ["Runs on", "Windows 10 and 11. There is a browser version for a quick look. No macOS, Linux or phone app."],
  ["Price", "Free while in beta."],
  ["Status", "In beta. First released in November 2026."],
  ["Games", "Any game played in windowed or borderless mode. Nothing is injected into the game or read from it. There are starting lists for Lineage 2, World of Warcraft and Throne and Liberty, and an alliance can write its own."],
  ["Size", "300 approved members per alliance during the beta."],
  ["Starting an alliance", "With a beta code from the Warcryer Discord. Members then join by their clan's invite link and need no code."],
  ["Signing in", "With a Discord account."],
  ["Languages", `The app is in fourteen languages: ${LANGUAGES.join(", ")}. The text chat is translated for each reader into their own language, by a machine.`],
  ["Hosting", "Hosted for you. You cannot run your own server."],
  ["Source code", "The Windows app is open source (MIT licence). The server is not public."],
  ["Who makes it", "Warcryer is a community project. It is not affiliated with or endorsed by any game publisher."],
  ["Videos", "A walkthrough and short videos of each part, on Warcryer's YouTube channel."],
  ["Contact", "The Warcryer Discord."],
];

/** What it does, part by part. */
export const DOES: [string, string][] = [
  ["Organisation", "An alliance holds clans, with roles for alliance admins, clan leaders, officers and event leaders."],
  ["Planning", "Operations (events) where every member is asked if they are coming; each player's characters with class and level; a roster board where players are dragged into parties and each party shows the roles it still lacks; constant parties placed with one click; announcements and reminders to a Discord channel."],
  ["Voice", "Nobody picks a channel. A player's place on the roster decides which nets they hear and may speak on (Broadcast, Command, Clan, Party, Reserve), each with its own push-to-talk key. A higher net lowers the ones below it, and moving a player on the roster moves their voice."],
  ["Allies", "A pact between up to four alliances, made with a one-use code: their owners, admins and up to three named delegates each share one voice net, the Allies net, with its own key and chat. Members never hear it, and nothing else of an alliance crosses."],
  ["During an event", "A chat for each net with orders that stand out, a pinned order, each party's priority targets, ready checks, quick calls and briefings, in the app and in a window over the game."],
  ["Afterwards", "Attendance (who was there and for how long) and the history of past operations."],
  ["Points and loot", "Point systems such as DKP, EPGP, Zero-sum and Suicide Kings, or a loot council with no points; points drafted from an operation's attendance; standings; an item list with prices; drops read from a screenshot of the game's chat."],
  ["Languages", "The app in fourteen languages, and the chat translated for each reader into the language they chose."],
  ["Between events", "Lounges for each clan, groups that players form themselves, and who is online."],
];

export const DOES_NOT = OUR_LIMITS;

export const DIFFERS =
  "Voice chat apps give a community channels and leave the organising to it. In Warcryer the event's roster decides who hears whom: players are placed on their nets when the operation starts and never pick a channel, and the same roster then gives the attendance, the points and the loot their record.";

export const NOT_TO_BE_CONFUSED =
  "Warcryer (warcryer.org) is not related to Warcry, the tabletop miniatures game, or to the other games, sites and bands with similar names.";

export const FAQ: { q: string; a: string }[] = [
  { q: "What is Warcryer?", a: `${ONE_LINE} ${SUMMARY}` },
  { q: "Is Warcryer free?", a: "Yes. It is free while in beta." },
  { q: "Which games does Warcryer work with?", a: "Any game played in windowed or borderless mode. Nothing is injected into the game or read from it. There are starting lists for Lineage 2, World of Warcraft and Throne and Liberty, and an alliance can write its own." },
  { q: "Does Warcryer run on Mac, Linux or a phone?", a: "No. It is a Windows app, for Windows 10 and 11. There is a browser version for a quick look or a second PC." },
  { q: "How many players can a Warcryer alliance have?", a: "300 approved members per alliance during the beta, in as many clans and parties as the alliance sets up." },
  { q: "Is Warcryer open source?", a: "The Windows app is, under the MIT licence, and its code is on GitHub. The server is not public, and the service is hosted for you: you cannot run your own." },
  { q: "How do we start using Warcryer?", a: "Download the Windows app, sign in with a Discord account, and start an alliance with a beta code from the Warcryer Discord. Your clans' leaders and members then join by invite link. The guide \"Your alliance's first hour\" walks through it." },
  ...COMMON_FAQ,
];

/** Where else Warcryer is, for the data that ties these places to the site. */
export const SAME_AS = [GITHUB.replace(/\/[^/]+$/, ""), GITHUB, YOUTUBE, DISCORD];

/** schema.org: the organisation, the site and the app, pointing at one another. */
export const ORGANISATION_LD = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Warcryer",
  url: `${SITE}/`,
  logo: `${SITE}/favicon.png`,
  description: ONE_LINE,
  sameAs: SAME_AS,
};
export const WEBSITE_LD = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "Warcryer",
  url: `${SITE}/`,
  description: ONE_LINE,
  inLanguage: "en",
  publisher: { "@id": `${SITE}/#organization` },
};
export const APP_LD = {
  "@type": "SoftwareApplication",
  "@id": `${SITE}/#app`,
  name: "Warcryer",
  applicationCategory: "CommunicationApplication",
  applicationSubCategory: "Clan and alliance management with voice chat",
  operatingSystem: "Windows 10, Windows 11",
  description: `${ONE_LINE} ${SUMMARY}`,
  url: `${SITE}/`,
  downloadUrl: `${SITE}/download/`,
  image: `${SITE}/shots/roster.jpg`,
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${SITE}/#organization` },
  featureList: DOES.map(([name, text]) => `${name}: ${text}`),
};
