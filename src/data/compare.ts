// The facts behind the comparison pages (src/pages/compare/).
//
// Every statement about another product must come from that product's own
// pages and be re-checked when CHECKED is changed. Say where the other product
// is the better choice: these pages are read by people who know it well.

export const CHECKED = "18 November 2026";
/** The rows on translation and languages were read later than the rest. */
export const CHECKED_LANGUAGES = "22 November 2026";
export const CHECKED_ISO = "2026-11-18";

/** What Warcryer does not do, said the same way on every page. */
export const OUR_LIMITS: string[] = [
  "It is a Windows app. There is a browser version for a quick look, but no macOS, Linux or phone app.",
  "It is a hosted service. The Windows app is open source; the server is not public and you cannot run your own.",
  "It is in beta: an alliance is started with a code from the Warcryer Discord and has room for 300 approved members.",
  "You sign in with a Discord account.",
  "The app and the chat are translated by a machine, and nobody who speaks each language has read every line. The guides, and what the app posts to Discord, are in English.",
  "It is built for organised play: events, rosters, points and loot. There is no video, screen sharing, file sharing or positional audio, and the text chat is a chat for each room, not a place for threads, pictures or files."
];

/**
 * How a cell reads at a glance: built in, partly or with setup, not offered.
 * Rows that are plain facts (price, hosting, source, size) carry no mark.
 */
export type Mark = "yes" | "part" | "no";
export const MARK_TEXT: Record<Mark, string> = { yes: "Built in", part: "Partly", no: "Not offered" };

/** The rows of every table, in order. Warcryer's side is the same on each page. */
export const ROWS: { id: string; label: string; ours: string; mark?: Mark }[] = [
  {
    "id": "hears",
    "label": "Who decides who hears whom",
    "ours": "The event's roster. Players are placed on their nets when the operation starts and never pick a channel."
  },
  {
    "id": "several",
    "mark": "yes",
    "label": "Hearing several groups at once",
    "ours": "Every player is on up to five nets at once (Broadcast, Command, Clan, Party, Reserve), each with its own key."
  },
  {
    "id": "over",
    "mark": "yes",
    "label": "A leader's voice over the rest",
    "ours": "While someone speaks on a higher net, the nets below it are lowered for everyone who hears both."
  },
  {
    "id": "moves",
    "mark": "yes",
    "label": "Moving a player mid-fight",
    "ours": "Drag them to another party on the roster board. Their voice follows in a second or two, with a sound to tell them."
  },
  {
    "id": "planning",
    "mark": "yes",
    "label": "Sign-ups, parties and what each party lacks",
    "ours": "Who is coming, constant parties, a drag-and-drop board that shows which roles a party still needs."
  },
  {
    "id": "attendance",
    "mark": "yes",
    "label": "Attendance",
    "ours": "Recorded and kept with each operation: who was in voice, and for how long."
  },
  {
    "id": "points",
    "mark": "yes",
    "label": "Points and loot",
    "ours": "DKP, EPGP, Zero-sum, Suicide Kings or a loot council. Points drafted from attendance, drops read from a screenshot of the game's chat."
  },
  {
    "id": "history",
    "mark": "yes",
    "label": "History across events",
    "ours": "Every operation is kept: turnout over time, each player's record, and a log of who did what."
  },
  {
    "id": "chat",
    "mark": "yes",
    "label": "Text chat",
    "ours": "A chat for every room. An operation has a channel per net, a pinned order, a ready check and quick calls on a key; each lounge and group has its own. It can sit on the game as a small window."
  },
  {
    "id": "translate",
    "mark": "yes",
    "label": "Chat translated for each reader",
    "ours": "Each player chooses the language they read. A line appears as written and, about a second later, in that language, with the original one click away. Fourteen languages; a machine translates."
  },
  {
    "id": "languages",
    "mark": "yes",
    "label": "The app in your language",
    "ours": "Fourteen languages, chosen by each player: English, French, German, Spanish, Brazilian Portuguese, Romanian, Polish, Lithuanian, Greek, Russian, Ukrainian, Turkish, and Chinese, Simplified and Traditional. The guides are in English."
  },
  {
    "id": "between",
    "mark": "yes",
    "label": "Between events",
    "ours": "A lounge for each clan, groups any member can start, who is online across the alliance, and a Call to arms that makes it a live operation at once."
  },
  {
    "id": "hosting",
    "label": "Hosting",
    "ours": "Hosted for you. You cannot run your own server."
  },
  {
    "id": "price",
    "label": "Price",
    "ours": "Free while in beta."
  },
  {
    "id": "source",
    "label": "Source code",
    "ours": "The Windows app is open source (MIT). The server is not public."
  },
  {
    "id": "platforms",
    "mark": "part",
    "label": "Runs on",
    "ours": "Windows 10 and 11. A browser version for a quick look."
  },
  {
    "id": "size",
    "label": "Size",
    "ours": "300 approved members per alliance during the beta."
  },
  {
    "id": "also",
    "mark": "no",
    "label": "Beyond organised play",
    "ours": "Nothing: no video, screen sharing or file sharing."
  }
];

/** Questions every comparison page answers the same way, after its own. */
export const COMMON_FAQ: { q: string; a: string }[] = [
  {
    "q": "Our clans speak different languages. Can they share one chat?",
    "a": "Yes. Each player chooses the language they read, and the chat is translated into it for them: a line appears as it was written and, about a second later, in their language, with the original one click away. The app itself is in fourteen languages, Chinese in both written forms among them. A machine does the translating and is sometimes wrong, so an order that matters is worth a second look at the original."
  },
  {
    "q": "Can Warcryer keep our DKP and loot?",
    "a": "Yes. An alliance sets up points from a preset (attendance only, DKP, DKP by the hour, EPGP, Zero-sum, Suicide Kings) or its own rules, or runs a loot council with no points. After each operation the app drafts everyone's points from their time in voice, and drops can be read from a screenshot of the game's chat."
  }
];

export type Product = {
  name: string;
  title: string;
  description: string;
  lede: string;
  /** The one difference that matters most, for the card on the comparison hub. */
  headline: string;
  cells: Record<string, string>;
  marks: Record<string, Mark>;
  them_if: string[];
  us_if: string[];
  differences: { title: string; body: string }[];
  shot: { file: string; width: number; height: number; alt: string; caption: string };
  moving: string[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  note: string;
};

export const ORDER = ["teamspeak", "discord", "mumble", "ventrilo"] as const;
export type ProductKey = (typeof ORDER)[number];

export const PRODUCTS: Record<ProductKey, Product> = {
  "teamspeak": {
    "name": "TeamSpeak",
    "title": "Warcryer vs TeamSpeak: an alternative for large alliances and clans",
    "description": "How Warcryer compares with TeamSpeak for sieges and raids: the roster places every player on their nets, so nobody sets up whisper lists or drags channels. Where TeamSpeak is still the better choice.",
    "lede": "TeamSpeak has carried large alliances for twenty years, with channels, whisper lists and a deep permission system that each community wires up for itself. Warcryer starts from the other end: the event's roster decides who hears whom, and the wiring is done for you.",
    "headline": "No whisper lists to set up: the roster puts each leader on Command and moves them when it changes.",
    "cells": {
      "hears": "Each player joins a channel. Admins build the channel tree and its permissions.",
      "several": "Whisper lists in TeamSpeak 3, set up by each player on their own client.",
      "over": "Priority speaker and Channel Commander in TeamSpeak 3, granted through permissions.",
      "moves": "An admin drags the player to another channel.",
      "planning": "Not part of TeamSpeak. Alliances use a spreadsheet, a website or a Discord bot.",
      "attendance": "Not part of TeamSpeak. Usually a screenshot of the channel tree.",
      "points": "Not part of TeamSpeak. Alliances use a DKP site, a spreadsheet or a bot.",
      "history": "Not part of TeamSpeak.",
      "chat": "Global and direct text chat. No order line, ready check or calls tied to an event.",
      "translate": "Not offered.",
      "languages": "The new client comes in eight languages, Simplified Chinese, Russian and Polish among them, translated by its community.",
      "between": "Channels anyone can sit in, all week.",
      "hosting": "Run your own server, rent one, or use TeamSpeak's own hosted Communities.",
      "price": "The client is free. Servers are licensed or rented by the slot.",
      "source": "Proprietary.",
      "platforms": "Windows, macOS, Linux, Android and iOS.",
      "size": "As many slots as your licence or plan has.",
      "also": "Screen sharing, file sharing, and a server that is there all week, not only for events."
    },
    "marks": {
      "several": "part",
      "over": "part",
      "moves": "yes",
      "planning": "no",
      "attendance": "no",
      "points": "no",
      "history": "no",
      "chat": "part",
      "translate": "no",
      "languages": "yes",
      "between": "yes",
      "platforms": "yes",
      "also": "yes"
    },
    "them_if": [
      "You want your own server, on your own hardware, under your own rules.",
      "Your players are on macOS, Linux or phones.",
      "You need one place for the whole week: open channels to sit in, screen sharing, files.",
      "You already have a channel tree and whisper setup that your players know, and it works."
    ],
    "us_if": [
      "Your events have a chain of command: an event leader, clan leaders, party leaders, parties.",
      "You are tired of telling new players how to set up whisper keys before every siege.",
      "You move players between parties during a fight and need their voice to follow.",
      "You keep sign-ups, party lists, attendance and DKP in spreadsheets and sites beside the voice app."
    ],
    "differences": [
      {
        "title": "Nobody sets up whispers",
        "body": "In TeamSpeak a party leader who must reach Command, their clan and their party sets up a whisper list and a key for each, on their own client, and has to change it when the roster changes. In Warcryer the leader is on Command because the roster says they lead a party. Hand the party to someone else and the new leader is on Command at once, with nothing to configure."
      },
      {
        "title": "One roster instead of a channel tree",
        "body": "A TeamSpeak siege usually means a channel per party and admins dragging names between them. Warcryer's board is the party list itself: drag a player from one party to another and their audio moves with them, they hear a sound, and their screen says where they went."
      },
      {
        "title": "The call is heard",
        "body": "TeamSpeak can give a leader priority, but someone has to grant it and players can still be talking in a channel the leader is not in. In Warcryer a Broadcast order lowers every party's chatter for as long as the leader speaks, for everyone, without anyone setting it up."
      },
      {
        "title": "The event around the voice",
        "body": "Who is coming, which party lacks a healer, who actually turned up, what they earned and who got the drop: TeamSpeak leaves all of that to other tools. In Warcryer it is the same window. Attendance is counted from who was really in voice, the DKP is drafted from it, and the loot is paid from it."
      }
    ],
    "shot": {
      "file": "lowered.jpg",
      "width": 1600,
      "height": 775,
      "alt": "Left, the event leader holds the Broadcast key. Right, a member's party net is marked as lowered while the order is given.",
      "caption": "While a leader speaks on Broadcast, the nets below it are lowered for everyone."
    },
    "moving": [
      "Keep your TeamSpeak server for the rest of the week if you like it. Warcryer is for the events.",
      "Start your alliance in the app and choose the starting lists for your game: classes, party size, roles.",
      "Create your clans and send each clan leader an invite link. Their members come in through it.",
      "Plan the first operation, build its parties on the board, and go live. Players bind one key per net they may speak on."
    ],
    "faq": [
      {
        "q": "Is Warcryer a free alternative to TeamSpeak?",
        "a": "It is free while it is in beta. An alliance is started with a code from the Warcryer Discord, and the players who join it need none."
      },
      {
        "q": "Can I host Warcryer on my own server, as I can with TeamSpeak?",
        "a": "No. Warcryer is a hosted service. The Windows app is open source, but the server is not public. If running your own server matters to you, TeamSpeak or Mumble is the better choice."
      },
      {
        "q": "Does Warcryer have whisper lists or Channel Commander?",
        "a": "It does not need them. Every player is on several nets at once, each with its own push-to-talk key, and which nets those are comes from their place on the roster. A higher net lowers the ones below it by itself."
      },
      {
        "q": "Which games does it work with?",
        "a": "Any game played in windowed or borderless mode. Nothing is injected into the game or read from it. There are starting lists for Lineage 2, World of Warcraft and Throne and Liberty, and an alliance can write its own."
      }
    ],
    "sources": [
      {
        "label": "TeamSpeak: downloads (the client's language files)",
        "url": "https://www.teamspeak.com/en/downloads/"
      },
      {
        "label": "TeamSpeak community: translation",
        "url": "https://community.teamspeak.com/t/teamspeak-community-translation/43571"
      },
      {
        "label": "TeamSpeak: features overview",
        "url": "https://teamspeak.com/en/features/overview/"
      },
      {
        "label": "TeamSpeak: licensing",
        "url": "https://teamspeak.com/en/features/licensing/"
      },
      {
        "label": "TeamSpeak: downloads",
        "url": "https://teamspeak.com/en/downloads/"
      },
      {
        "label": "TeamSpeak: Communities",
        "url": "https://teamspeak.com/en/solutions/communities/"
      },
      {
        "label": "TeamSpeak forum: whisper lists and Channel Commander for a chain of command",
        "url": "https://forum.teamspeak.com/threads/75933-Chain-of-Command"
      }
    ],
    "note": "TeamSpeak 6 is in beta at the time of writing, beside TeamSpeak 3. Whisper lists, priority speaker and Channel Commander are described here as they work in TeamSpeak 3. TeamSpeak's site does not list prices for server licences at the moment; see its licensing page."
  },
  "discord": {
    "name": "Discord",
    "title": "Warcryer vs Discord voice for large raids, sieges and alliance events",
    "description": "How Warcryer compares with Discord voice channels for events with hundreds of players: every player on several nets at once, placed by the roster, with attendance recorded. Where Discord is the better choice, and how the two work together.",
    "lede": "Discord is where most alliances already live, and nothing here asks you to leave it. Its voice channels are made for a room of people talking. A siege with a chain of command is a different shape: hundreds of players, several layers of leaders, and orders that must be heard over party chatter.",
    "headline": "Five nets at once instead of one voice channel, and one Broadcast that reaches past 99 players.",
    "cells": {
      "hears": "Each player joins a voice channel. Moderators arrange channels and roles.",
      "several": "No. A player is in one voice channel at a time.",
      "over": "The Priority Speaker permission lowers others in the same channel while its holder talks with push-to-talk.",
      "moves": "A moderator with Move Members drags the player to another channel.",
      "planning": "Scheduled Events show who is interested. Party lists and roles need a bot or a spreadsheet.",
      "attendance": "Not recorded. Usually a bot, or a screenshot of the channel.",
      "points": "Not part of Discord. Alliances use a DKP bot, a website or a spreadsheet.",
      "history": "Not part of Discord.",
      "chat": "Full text channels, all week. No order line, ready check or calls tied to the event's voice.",
      "translate": "Not part of Discord itself, going by its own pages. A server can add a translation app or bot.",
      "languages": "About thirty languages, with Chinese in both written forms, Russian, Polish, Greek and Turkish.",
      "between": "Voice channels anyone can join, all week.",
      "hosting": "Hosted by Discord.",
      "price": "Free. Paid extras are optional.",
      "source": "Proprietary.",
      "platforms": "Windows, macOS, Linux, Android, iOS and the browser.",
      "size": "Up to 99 people in a voice channel. Stage channels hold more, as speakers and an audience.",
      "also": "Everything else a community needs: text channels, video, screen sharing, roles, bots."
    },
    "marks": {
      "several": "no",
      "over": "part",
      "moves": "yes",
      "planning": "part",
      "attendance": "no",
      "points": "no",
      "history": "no",
      "chat": "part",
      "translate": "part",
      "languages": "yes",
      "between": "yes",
      "platforms": "yes",
      "also": "yes"
    },
    "them_if": [
      "Your events fit in one voice channel, or a few that do not need to hear each other.",
      "Your players are on phones, macOS or Linux.",
      "You want one tool for everything, and the event is a small part of what your community does there.",
      "You already run sign-up bots that your players know."
    ],
    "us_if": [
      "You field more people than one voice channel holds, in parties that each need their own talk.",
      "Leaders need a channel of their own while still hearing their party.",
      "An order from the event leader has to reach everyone, in every party, at once.",
      "You want attendance from who was actually in voice, not from who clicked a reaction.",
      "Your DKP or loot lives in a bot or on a site that nobody keeps in step with who came."
    ],
    "differences": [
      {
        "title": "Several nets at once, not one channel",
        "body": "In Discord you are in one voice channel. A party leader who must hear the alliance's command channel has to leave their party's channel to do it, or run a second account. In Warcryer every player is on their party, their clan and Broadcast at the same moment, leaders on Command as well, each with its own key."
      },
      {
        "title": "Past 99 without turning the alliance into an audience",
        "body": "A Discord voice channel holds up to 99 people. Beyond that the answer is many channels, which then cannot hear one call, or a Stage channel, where most people are listeners. Warcryer's Broadcast reaches everyone in the operation while each party keeps talking among itself."
      },
      {
        "title": "The roster places people",
        "body": "On Discord someone has to get three hundred players into the right thirty channels and keep them there. In Warcryer the parties are built on a board beforehand, from who signed up, and starting the operation puts every player on their nets."
      },
      {
        "title": "Points and loot without a bot",
        "body": "DKP bots on Discord count what someone types in. Warcryer drafts each player's points from their time in the operation's voice, keeps the standings where everyone can read them, and reads the drops from a screenshot of the game's chat."
      },
      {
        "title": "Works with your Discord, not against it",
        "body": "Players sign in to Warcryer with their Discord account. Connect a channel and every new, changed or started operation is announced there, with a reminder before the start and a role to ping if you choose. Keep Discord for the community, and use Warcryer when the event starts."
      }
    ],
    "shot": {
      "file": "members.jpg",
      "width": 1600,
      "height": 775,
      "alt": "Two players side by side: the leader's roster board with three parties counting who is coming, and a member's screen at the same moment.",
      "caption": "Left, the leader's roster board counting who is coming. Right, a member's screen at the same moment."
    },
    "moving": [
      "Stay on Discord. Warcryer signs in with it and posts your events to a channel you choose.",
      "Start your alliance in the app, create your clans, and send each clan leader an invite link.",
      "Connect a Discord channel on the Alliance tab so operations are announced where your players already read.",
      "Plan the next event as an operation, let players answer Coming or Can't come, build the parties, and go live."
    ],
    "faq": [
      {
        "q": "How many people can be in a Discord voice channel?",
        "a": "Up to 99, according to Discord's developer documentation. Stage channels hold far more, but as an audience with a few speakers. A Warcryer alliance has room for 300 approved members during the beta, in parties that each keep their own talk while all of them hear Broadcast."
      },
      {
        "q": "Does Warcryer replace Discord?",
        "a": "No. It replaces Discord's voice channels for organised events. Your server, its text channels and its roles stay where they are, and Warcryer announces your events there."
      },
      {
        "q": "Is there a Warcryer bot for my Discord server?",
        "a": "No bot is needed. Announcements use a webhook that an alliance admin or clan leader pastes into the app; Warcryer never reads your server."
      },
      {
        "q": "Does it work on phones?",
        "a": "No. Warcryer is a Windows app, with a browser version for a quick look. If your players join events from phones, Discord is the better choice."
      }
    ],
    "sources": [
      {
        "label": "Discord developer reference: locales",
        "url": "https://docs.discord.com/developers/reference"
      },
      {
        "label": "Discord: patch notes, 9 November 2026",
        "url": "https://discord.com/blog/discord-patch-notes-november-9-2026"
      },
      {
        "label": "Discord developer documentation: channels (user_limit)",
        "url": "https://docs.discord.com/developers/resources/channel"
      },
      {
        "label": "Discord support: Setting up Priority Speaker",
        "url": "https://support.discord.com/hc/en-us/articles/360011876531-Setting-up-Priority-Speaker"
      },
      {
        "label": "Discord: permissions on Discord",
        "url": "https://discord.com/community/permissions-on-discord-discord"
      },
      {
        "label": "Discord support: Scheduled Events",
        "url": "https://support.discord.com/hc/en-us/articles/4409494125719-Scheduled-Events"
      }
    ],
    "note": "The limit of 99 people in a voice channel and of 10,000 in a Stage channel is from Discord's developer documentation."
  },
  "mumble": {
    "name": "Mumble",
    "title": "Warcryer vs Mumble: voice for large guilds, alliances and fleets",
    "description": "How Warcryer compares with Mumble for large organised events: Mumble is free, open and self-hosted with fine-grained ACLs; Warcryer builds the chain of command, the roster and attendance in. Where each is the better choice.",
    "lede": "Mumble is free, open source and very good at what it does: low-latency voice on a server you run yourself, with a permission system that can express almost anything. Warcryer gives up that freedom for one thing done for you: the event's roster decides who hears whom.",
    "headline": "A roster instead of ACLs to write and keep right, and no server to run.",
    "cells": {
      "hears": "Each player joins a channel. Admins write ACLs and groups for the channel tree.",
      "several": "Linked channels share their talk, and players can set up whisper and shout keys on their own client.",
      "over": "Priority speaker, set by an admin for a user in a channel.",
      "moves": "An admin drags the player to another channel.",
      "planning": "Not part of Mumble. Alliances use a spreadsheet, a website or a bot.",
      "attendance": "Not part of Mumble.",
      "points": "Not part of Mumble.",
      "history": "Not part of Mumble.",
      "chat": "Text messages to channels and users. No order line, ready check or calls tied to an event.",
      "translate": "Not offered.",
      "languages": "Translated by its community into more than forty languages; how complete each one is varies.",
      "between": "Channels anyone can sit in, all week.",
      "hosting": "Run your own server, or rent one from a third party.",
      "price": "Free.",
      "source": "Open source, client and server.",
      "platforms": "Windows, macOS and Linux. Phone apps are third-party.",
      "size": "Whatever your own server can carry.",
      "also": "Positional audio in games that support it, an in-game overlay, and a multi-channel recorder."
    },
    "marks": {
      "several": "part",
      "over": "part",
      "moves": "yes",
      "planning": "no",
      "attendance": "no",
      "points": "no",
      "history": "no",
      "chat": "part",
      "translate": "no",
      "languages": "yes",
      "between": "yes",
      "platforms": "yes",
      "also": "yes"
    },
    "them_if": [
      "You want to run the server yourself and keep every byte under your own control.",
      "Open source on both ends matters to you.",
      "Your players are on Linux or macOS.",
      "You want positional audio, or an overlay drawn in the game.",
      "You have someone who enjoys writing ACLs and will keep them right."
    ],
    "us_if": [
      "Nobody in your alliance wants to run a server or maintain a permission tree.",
      "Your events have a chain of command that changes every week with the roster.",
      "You want sign-ups, party building, attendance and DKP in the same place as the voice.",
      "New players should be talking in the right place within a minute of joining, without a setup guide."
    ],
    "differences": [
      {
        "title": "A roster instead of ACLs",
        "body": "Mumble's access control lists and groups can describe a fleet's command structure, and large communities have done it. Somebody has to write it and keep it matching the people. In Warcryer the structure is the roster: make someone a deputy or a party leader and their voice rights change with the role, in that moment."
      },
      {
        "title": "No shout keys to hand out",
        "body": "In Mumble a leader reaches other channels with whisper and shout shortcuts that each player sets up on their own client. In Warcryer everyone has one key per net they may speak on, and which nets those are is decided for them."
      },
      {
        "title": "Nothing to host",
        "body": "A Mumble server is yours: to install, secure, update and pay for. Warcryer is hosted, which is less freedom and less work. If self-hosting is the point for you, Mumble wins this one outright."
      },
      {
        "title": "The event around the voice",
        "body": "Mumble is a voice application and does not try to be anything else. Warcryer also asks who is coming, shows which party lacks a healer, moves players between parties with their audio, records who attended, and turns that into points and loot."
      }
    ],
    "shot": {
      "file": "roster.jpg",
      "width": 1600,
      "height": 775,
      "alt": "The roster board of a planned castle siege: three parties with their members, class and level, the support roles each still needs, and Reserve.",
      "caption": "A planned siege on the roster board. Each party lists the roles it still needs."
    },
    "moving": [
      "Keep your Mumble server for everyday talk if you like it. Warcryer is for the events.",
      "Start your alliance in the app and choose the starting lists for your game, or write your own.",
      "Create your clans and send each clan leader an invite link. No certificates or registrations to hand out.",
      "Plan the first operation, build its parties on the board, and go live."
    ],
    "faq": [
      {
        "q": "Is Warcryer open source like Mumble?",
        "a": "Partly. The Windows app is open source under the MIT licence and every release is built from the public repository. The server is not public. Mumble is open on both ends."
      },
      {
        "q": "Can I self-host Warcryer?",
        "a": "No. It is a hosted service. If you want your own server, Mumble is the better choice."
      },
      {
        "q": "Does Warcryer have positional audio?",
        "a": "No. Nothing is read from the game, so the app does not know where anyone stands. Voice is organised by the chain of command instead: party, clan, command, broadcast."
      },
      {
        "q": "Is the latency as low as Mumble's?",
        "a": "We have not measured the two side by side and will not claim it. Warcryer's voice runs over WebRTC with the Opus codec, as most current voice services do."
      }
    ],
    "sources": [
      {
        "label": "Mumble: translation status",
        "url": "https://hosted.weblate.org/projects/mumble/mumble-client/"
      },
      {
        "label": "Mumble: home page and feature list",
        "url": "https://www.mumble.info/"
      },
      {
        "label": "Mumble: downloads",
        "url": "https://www.mumble.info/downloads/"
      },
      {
        "label": "Mumble: access control lists",
        "url": "https://www.mumble.info/documentation/administration/acl/"
      },
      {
        "label": "Mumble: positional audio",
        "url": "https://www.mumble.info/documentation/user/positional-audio/"
      },
      {
        "label": "Mumble 1.4 release notes: whisper and shout shortcuts",
        "url": "https://www.mumble.info/blog/mumble-1.4.230/"
      }
    ],
    "note": "Mumble 1.5.939 was the latest stable version at the time of writing. Mumble's own iOS app is no longer maintained; its site lists third-party phone apps."
  },
  "ventrilo": {
    "name": "Ventrilo",
    "title": "Warcryer vs Ventrilo: an alternative for alliances that have outgrown channels",
    "description": "How Warcryer compares with Ventrilo for large organised events: Ventrilo is simple hosted voice with channels and phantoms; Warcryer places every player on their nets from the event's roster and records attendance.",
    "lede": "Ventrilo is the voice many guilds raided on, and it is still here: a current client for Windows, macOS and Linux, and servers hosted by its owner. It keeps to what it always was, a server with channels and a push-to-talk key. Warcryer is built around the event instead of the channel.",
    "headline": "Every player on party, clan and Broadcast at once, placed by the roster, instead of channels and phantoms.",
    "cells": {
      "hears": "Each player joins a channel on the server.",
      "several": "Phantoms let you listen in on other channels while you stay in yours.",
      "over": "Ranks, transmit limits and queued channels, set by the server's admin.",
      "moves": "The player changes channel, or an admin moves them.",
      "planning": "Not part of Ventrilo.",
      "attendance": "Not part of Ventrilo.",
      "points": "Not part of Ventrilo.",
      "history": "Not part of Ventrilo.",
      "chat": "Not tied to an event: no order line, ready check or calls.",
      "translate": "Not offered. It can read chat aloud.",
      "languages": "Its own pages name no language but English.",
      "between": "Channels anyone can sit in, all week.",
      "hosting": "Hosted by Ventrilo's owner.",
      "price": "A free server for 5 people online; $9.99 a month or $99.99 a year for 400.",
      "source": "Proprietary.",
      "platforms": "Windows, macOS and Linux.",
      "size": "400 online at once on the paid plan.",
      "also": "A server that is there all week, for any group and any use."
    },
    "marks": {
      "several": "part",
      "over": "part",
      "moves": "yes",
      "planning": "no",
      "attendance": "no",
      "points": "no",
      "history": "no",
      "chat": "part",
      "translate": "no",
      "between": "yes",
      "platforms": "yes",
      "also": "part"
    },
    "them_if": [
      "You want a plain voice server with channels, and nothing to learn.",
      "Your players are on macOS or Linux.",
      "You need more than 300 people, up to the 400 its paid plan holds.",
      "Your guild has used it for years and its channel layout is second nature."
    ],
    "us_if": [
      "Your events have layers: an event leader, clan leaders, party leaders, parties.",
      "Leaders need to hear command and their own party at once, and speak to each with a different key.",
      "You move players between parties during a fight.",
      "You want sign-ups, party building, attendance and loot where the voice is."
    ],
    "differences": [
      {
        "title": "Nets instead of channels",
        "body": "On a Ventrilo server a player is in one channel, and can listen in on others with phantoms. In Warcryer every player is on their party, their clan and Broadcast at once, leaders on Command as well, and speaks to each with its own key."
      },
      {
        "title": "The roster places people",
        "body": "Ventrilo leaves it to each player to find the right channel and to an admin to move them. In Warcryer the parties are built on a board from who signed up, and starting the operation puts everyone where they belong."
      },
      {
        "title": "Orders are heard",
        "body": "While the event leader speaks on Broadcast, party and clan talk is lowered for everyone and comes back when the order ends. Nobody has to be told to be quiet."
      },
      {
        "title": "The event around the voice",
        "body": "Ventrilo is voice. Warcryer also asks who is coming, shows what each party still needs, records who attended and for how long, and keeps the DKP and the loot that follow from it."
      }
    ],
    "shot": {
      "file": "ingame.jpg",
      "width": 1600,
      "height": 900,
      "alt": "A real game with the Warcryer chat window in the lower left corner, showing the operation's channels, a ready check button and quick calls.",
      "caption": "The operation's chat window over a real game. Names are blurred."
    },
    "moving": [
      "Keep your Ventrilo server for everyday talk if you like it. Warcryer is for the events.",
      "Start your alliance in the app and choose the starting lists for your game, or write your own.",
      "Create your clans and send each clan leader an invite link.",
      "Plan the first operation, build its parties on the board, and go live."
    ],
    "faq": [
      {
        "q": "Is Ventrilo still being developed?",
        "a": "Yes. At the time of writing its site offers a version 5 client for Windows, macOS and Linux, and hosted servers."
      },
      {
        "q": "Is Warcryer free?",
        "a": "It is free while it is in beta. An alliance is started with a code from the Warcryer Discord."
      },
      {
        "q": "How many players can a Warcryer alliance have?",
        "a": "300 approved members during the beta. Ventrilo's paid plan holds 400 online at once, so for a larger group Ventrilo has more room today."
      },
      {
        "q": "Does Warcryer run on macOS or Linux?",
        "a": "No. It is a Windows app, with a browser version for a quick look. Ventrilo has clients for all three."
      }
    ],
    "sources": [
      {
        "label": "Ventrilo: frequently asked questions",
        "url": "https://www.ventrilo.com/faq.php"
      },
      {
        "label": "Ventrilo: home page and hosting",
        "url": "https://www.ventrilo.com/"
      },
      {
        "label": "Ventrilo: frequently asked questions",
        "url": "https://www.ventrilo.com/faq.php"
      },
      {
        "label": "Ventrilo: downloads",
        "url": "https://www.ventrilo.com/download.php"
      }
    ],
    "note": "Prices and limits are from Ventrilo's own site at the time of writing."
  }
};

