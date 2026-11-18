#!/usr/bin/env python3
"""Writes the comparison pages under compare/ and the sitemap.

The site is plain static files; this script only saves typing the same header,
footer and table five times. Change the facts below, run it from the
repository's root (python3 tools/build-compare.py), and commit what it wrote.

Every statement about another product must come from that product's own pages
and be re-checked when CHECKED is changed. Say where the other product is the
better choice: these pages are read by people who know it well.
"""

from html import escape
from pathlib import Path

SITE = "https://warcryer.github.io"
CHECKED = "18 November 2026"
CHECKED_ISO = "2026-11-18"
ROOT = Path(__file__).resolve().parent.parent

DOWNLOAD = "https://github.com/Warcryer/client/releases/latest"
DISCORD = "https://discord.gg/qf4meEMfhp"

# What Warcryer does not do, said the same way on every page.
OUR_LIMITS = [
    "It is a Windows app. There is a browser version for a quick look, but no macOS, Linux or phone app.",
    "It is a hosted service. The Windows app is open source; the server is not public and you cannot run your own.",
    "It is in beta: an alliance is started with a code from the Warcryer Discord and has room for 300 approved members.",
    "You sign in with a Discord account.",
    "It is built for organised events. There is no video, screen sharing, file sharing or positional audio, and the text chat exists inside operations only.",
]

# The rows of every table, in order. Warcryer's side is the same on each page.
ROWS = [
    ("hears", "Who decides who hears whom", "The event's roster. Players are placed on their nets when the operation starts and never pick a channel."),
    ("several", "Hearing several groups at once", "Built in: every player is on up to five nets at once (Broadcast, Command, Clan, Party, Reserve), each with its own key."),
    ("over", "A leader's voice over the rest", "Automatic: while someone speaks on a higher net, the nets below it are lowered for everyone who hears both."),
    ("moves", "Moving a player mid-fight", "Drag them to another party on the roster board. Their voice follows in a second or two, with a sound to tell them."),
    ("planning", "Sign-ups, parties and what each party lacks", "Built in: who is coming, constant parties, a drag-and-drop board that shows which roles a party still needs."),
    ("attendance", "Attendance", "Recorded: who was in voice and for how long, ready to paste into a spreadsheet."),
    ("chat", "Event text chat", "A channel per net, a pinned order, a ready check, and quick calls on a key, in a window that sits on the game."),
    ("hosting", "Hosting", "Hosted for you. You cannot run your own server."),
    ("price", "Price", "Free while in beta."),
    ("source", "Source code", "The Windows app is open source (MIT). The server is not public."),
    ("platforms", "Runs on", "Windows 10 and 11. A browser version for a quick look."),
    ("size", "Size", "300 approved members per alliance during the beta."),
    ("also", "Beyond voice", "Nothing beyond the event: no video, screen sharing or file sharing."),
]

PRODUCTS = {
    "teamspeak": {
        "name": "TeamSpeak",
        "title": "Warcryer vs TeamSpeak: an alternative for large alliances and clans",
        "description": "How Warcryer compares with TeamSpeak for sieges and raids: the roster places every player on their nets, so nobody sets up whisper lists or drags channels. Where TeamSpeak is still the better choice.",
        "lede": "TeamSpeak has carried large alliances for twenty years, with channels, whisper lists and a deep permission system that each community wires up for itself. Warcryer starts from the other end: the event's roster decides who hears whom, and the wiring is done for you.",
        "cells": {
            "hears": "Each player joins a channel. Admins build the channel tree and its permissions.",
            "several": "Whisper lists in TeamSpeak 3, set up by each player on their own client.",
            "over": "Priority speaker and Channel Commander in TeamSpeak 3, granted through permissions.",
            "moves": "An admin drags the player to another channel.",
            "planning": "Not part of TeamSpeak. Alliances use a spreadsheet, a website or a Discord bot.",
            "attendance": "Not part of TeamSpeak. Usually a screenshot of the channel tree.",
            "chat": "Global and direct text chat. No order line, ready check or calls tied to an event.",
            "hosting": "Run your own server, rent one, or use TeamSpeak's own hosted Communities.",
            "price": "The client is free. Servers are licensed or rented by the slot.",
            "source": "Proprietary.",
            "platforms": "Windows, macOS, Linux, Android and iOS.",
            "size": "As many slots as your licence or plan has.",
            "also": "Screen sharing, file sharing, and a server that is there all week, not only for events.",
        },
        "them_if": [
            "You want your own server, on your own hardware, under your own rules.",
            "Your players are on macOS, Linux or phones.",
            "You need one place for the whole week: open channels to sit in, screen sharing, files.",
            "You already have a channel tree and whisper setup that your players know, and it works.",
        ],
        "us_if": [
            "Your events have a chain of command: an event leader, clan leaders, party leaders, parties.",
            "You are tired of telling new players how to set up whisper keys before every siege.",
            "You move players between parties during a fight and need their voice to follow.",
            "You keep sign-ups, party lists and attendance in a spreadsheet beside the voice app.",
        ],
        "differences": [
            ("Nobody sets up whispers", "In TeamSpeak a party leader who must reach Command, their clan and their party sets up a whisper list and a key for each, on their own client, and has to change it when the roster changes. In Warcryer the leader is on Command because the roster says they lead a party. Hand the party to someone else and the new leader is on Command at once, with nothing to configure."),
            ("One roster instead of a channel tree", "A TeamSpeak siege usually means a channel per party and admins dragging names between them. Warcryer's board is the party list itself: drag a player from one party to another and their audio moves with them, they hear a sound, and their screen says where they went."),
            ("The call is heard", "TeamSpeak can give a leader priority, but someone has to grant it and players can still be talking in a channel the leader is not in. In Warcryer a Broadcast order lowers every party's chatter for as long as the leader speaks, for everyone, without anyone setting it up."),
            ("The event around the voice", "Who is coming, which party lacks a healer, who actually turned up and for how long: TeamSpeak leaves all of that to other tools. In Warcryer it is the same window, and attendance is counted from who was really in voice."),
        ],
        "shot": ("lowered.jpg", 1600, 775, "Left, the event leader holds the Broadcast key. Right, a member's Clan and Party nets are lowered while the order is given.", "While a leader speaks on Broadcast, the nets below it are lowered for everyone."),
        "moving": [
            "Keep your TeamSpeak server for the rest of the week if you like it. Warcryer is for the events.",
            "Start your alliance in the app and choose the starting lists for your game: classes, party size, roles.",
            "Create your clans and send each clan leader an invite link. Their members come in through it.",
            "Plan the first operation, build its parties on the board, and go live. Players bind one key per net they may speak on.",
        ],
        "faq": [
            ("Is Warcryer a free alternative to TeamSpeak?", "It is free while it is in beta. An alliance is started with a code from the Warcryer Discord, and the players who join it need none."),
            ("Can I host Warcryer on my own server, as I can with TeamSpeak?", "No. Warcryer is a hosted service. The Windows app is open source, but the server is not public. If running your own server matters to you, TeamSpeak or Mumble is the better choice."),
            ("Does Warcryer have whisper lists or Channel Commander?", "It does not need them. Every player is on several nets at once, each with its own push-to-talk key, and which nets those are comes from their place on the roster. A higher net lowers the ones below it by itself."),
            ("Which games does it work with?", "Any game played in windowed or borderless mode. Nothing is injected into the game or read from it. There are starting lists for Lineage 2, World of Warcraft and Throne and Liberty, and an alliance can write its own."),
        ],
        "sources": [
            ("TeamSpeak: features overview", "https://teamspeak.com/en/features/overview/"),
            ("TeamSpeak: licensing", "https://teamspeak.com/en/features/licensing/"),
            ("TeamSpeak: downloads", "https://teamspeak.com/en/downloads/"),
            ("TeamSpeak: Communities", "https://teamspeak.com/en/solutions/communities/"),
            ("TeamSpeak forum: whisper lists and Channel Commander for a chain of command", "https://forum.teamspeak.com/threads/75933-Chain-of-Command"),
        ],
        "note": "TeamSpeak 6 is in beta at the time of writing, beside TeamSpeak 3. Whisper lists, priority speaker and Channel Commander are described here as they work in TeamSpeak 3. TeamSpeak's site does not list prices for server licences at the moment; see its licensing page.",
    },
    "discord": {
        "name": "Discord",
        "title": "Warcryer vs Discord voice for large raids, sieges and alliance events",
        "description": "How Warcryer compares with Discord voice channels for events with hundreds of players: every player on several nets at once, placed by the roster, with attendance recorded. Where Discord is the better choice, and how the two work together.",
        "lede": "Discord is where most alliances already live, and nothing here asks you to leave it. Its voice channels are made for a room of people talking. A siege with a chain of command is a different shape: hundreds of players, several layers of leaders, and orders that must be heard over party chatter.",
        "cells": {
            "hears": "Each player joins a voice channel. Moderators arrange channels and roles.",
            "several": "No. A player is in one voice channel at a time.",
            "over": "The Priority Speaker permission lowers others in the same channel while its holder talks with push-to-talk.",
            "moves": "A moderator with Move Members drags the player to another channel.",
            "planning": "Scheduled Events show who is interested. Party lists and roles need a bot or a spreadsheet.",
            "attendance": "Not recorded. Usually a bot, or a screenshot of the channel.",
            "chat": "Full text channels, all week. No order line, ready check or calls tied to the event's voice.",
            "hosting": "Hosted by Discord.",
            "price": "Free. Paid extras are optional.",
            "source": "Proprietary.",
            "platforms": "Windows, macOS, Linux, Android, iOS and the browser.",
            "size": "Up to 99 people in a voice channel. Stage channels hold more, as speakers and an audience.",
            "also": "Everything else a community needs: text channels, video, screen sharing, roles, bots.",
        },
        "them_if": [
            "Your events fit in one voice channel, or a few that do not need to hear each other.",
            "Your players are on phones, macOS or Linux.",
            "You want one tool for everything, and the event is a small part of what your community does there.",
            "You already run sign-up bots that your players know.",
        ],
        "us_if": [
            "You field more people than one voice channel holds, in parties that each need their own talk.",
            "Leaders need a channel of their own while still hearing their party.",
            "An order from the event leader has to reach everyone, in every party, at once.",
            "You want attendance from who was actually in voice, not from who clicked a reaction.",
        ],
        "differences": [
            ("Several nets at once, not one channel", "In Discord you are in one voice channel. A party leader who must hear the alliance's command channel has to leave their party's channel to do it, or run a second account. In Warcryer every player is on their party, their clan and Broadcast at the same moment, leaders on Command as well, each with its own key."),
            ("Past 99 without turning the alliance into an audience", "A Discord voice channel holds up to 99 people. Beyond that the answer is many channels, which then cannot hear one call, or a Stage channel, where most people are listeners. Warcryer's Broadcast reaches everyone in the operation while each party keeps talking among itself."),
            ("The roster places people", "On Discord someone has to get three hundred players into the right thirty channels and keep them there. In Warcryer the parties are built on a board beforehand, from who signed up, and starting the operation puts every player on their nets."),
            ("Works with your Discord, not against it", "Players sign in to Warcryer with their Discord account. Connect a channel and every new, changed or started operation is announced there, with a reminder before the start and a role to ping if you choose. Keep Discord for the community, and use Warcryer when the event starts."),
        ],
        "shot": ("board.jpg", 1600, 775, "Two players side by side: the leader's roster board with three parties, and a member's voice screen with her nets.", "Left, the leader's roster board. Right, the nets a member was placed on when the operation started."),
        "moving": [
            "Stay on Discord. Warcryer signs in with it and posts your events to a channel you choose.",
            "Start your alliance in the app, create your clans, and send each clan leader an invite link.",
            "Connect a Discord channel on the Alliance tab so operations are announced where your players already read.",
            "Plan the next event as an operation, let players answer Coming or Can't come, build the parties, and go live.",
        ],
        "faq": [
            ("How many people can be in a Discord voice channel?", "Up to 99, according to Discord's developer documentation. Stage channels hold far more, but as an audience with a few speakers. A Warcryer alliance has room for 300 approved members during the beta, in parties that each keep their own talk while all of them hear Broadcast."),
            ("Does Warcryer replace Discord?", "No. It replaces Discord's voice channels for organised events. Your server, its text channels and its roles stay where they are, and Warcryer announces your events there."),
            ("Is there a Warcryer bot for my Discord server?", "No bot is needed. Announcements use a webhook that an alliance admin or clan leader pastes into the app; Warcryer never reads your server."),
            ("Does it work on phones?", "No. Warcryer is a Windows app, with a browser version for a quick look. If your players join events from phones, Discord is the better choice."),
        ],
        "sources": [
            ("Discord developer documentation: channels (user_limit)", "https://docs.discord.com/developers/resources/channel"),
            ("Discord support: Setting up Priority Speaker", "https://support.discord.com/hc/en-us/articles/360011876531-Setting-up-Priority-Speaker"),
            ("Discord: permissions on Discord", "https://discord.com/community/permissions-on-discord-discord"),
            ("Discord support: Scheduled Events", "https://support.discord.com/hc/en-us/articles/4409494125719-Scheduled-Events"),
        ],
        "note": "The limit of 99 people in a voice channel and of 10,000 in a Stage channel is from Discord's developer documentation.",
    },
    "mumble": {
        "name": "Mumble",
        "title": "Warcryer vs Mumble: voice for large guilds, alliances and fleets",
        "description": "How Warcryer compares with Mumble for large organised events: Mumble is free, open and self-hosted with fine-grained ACLs; Warcryer builds the chain of command, the roster and attendance in. Where each is the better choice.",
        "lede": "Mumble is free, open source and very good at what it does: low-latency voice on a server you run yourself, with a permission system that can express almost anything. Warcryer gives up that freedom for one thing done for you: the event's roster decides who hears whom.",
        "cells": {
            "hears": "Each player joins a channel. Admins write ACLs and groups for the channel tree.",
            "several": "Linked channels share their talk, and players can set up whisper and shout keys on their own client.",
            "over": "Priority speaker, set by an admin for a user in a channel.",
            "moves": "An admin drags the player to another channel.",
            "planning": "Not part of Mumble. Alliances use a spreadsheet, a website or a bot.",
            "attendance": "Not part of Mumble.",
            "chat": "Text messages to channels and users. No order line, ready check or calls tied to an event.",
            "hosting": "Run your own server, or rent one from a third party.",
            "price": "Free.",
            "source": "Open source, client and server.",
            "platforms": "Windows, macOS and Linux. Phone apps are third-party.",
            "size": "Whatever your own server can carry.",
            "also": "Positional audio in games that support it, an in-game overlay, and a multi-channel recorder.",
        },
        "them_if": [
            "You want to run the server yourself and keep every byte under your own control.",
            "Open source on both ends matters to you.",
            "Your players are on Linux or macOS.",
            "You want positional audio, or an overlay drawn in the game.",
            "You have someone who enjoys writing ACLs and will keep them right.",
        ],
        "us_if": [
            "Nobody in your alliance wants to run a server or maintain a permission tree.",
            "Your events have a chain of command that changes every week with the roster.",
            "You want sign-ups, party building and attendance in the same place as the voice.",
            "New players should be talking in the right place within a minute of joining, without a setup guide.",
        ],
        "differences": [
            ("A roster instead of ACLs", "Mumble's access control lists and groups can describe a fleet's command structure, and large communities have done it. Somebody has to write it and keep it matching the people. In Warcryer the structure is the roster: make someone a deputy or a party leader and their voice rights change with the role, in that moment."),
            ("No shout keys to hand out", "In Mumble a leader reaches other channels with whisper and shout shortcuts that each player sets up on their own client. In Warcryer everyone has one key per net they may speak on, and which nets those are is decided for them."),
            ("Nothing to host", "A Mumble server is yours: to install, secure, update and pay for. Warcryer is hosted, which is less freedom and less work. If self-hosting is the point for you, Mumble wins this one outright."),
            ("The event around the voice", "Mumble is a voice application and does not try to be anything else. Warcryer also asks who is coming, shows which party lacks a healer, moves players between parties with their audio, and records who attended."),
        ],
        "shot": ("planning.jpg", 1600, 944, "A planned operation on the roster board: one party is full, the other two list the roles they still need.", "A planned operation. One party is full; the other two list what they still need."),
        "moving": [
            "Keep your Mumble server for everyday talk if you like it. Warcryer is for the events.",
            "Start your alliance in the app and choose the starting lists for your game, or write your own.",
            "Create your clans and send each clan leader an invite link. No certificates or registrations to hand out.",
            "Plan the first operation, build its parties on the board, and go live.",
        ],
        "faq": [
            ("Is Warcryer open source like Mumble?", "Partly. The Windows app is open source under the MIT licence and every release is built from the public repository. The server is not public. Mumble is open on both ends."),
            ("Can I self-host Warcryer?", "No. It is a hosted service. If you want your own server, Mumble is the better choice."),
            ("Does Warcryer have positional audio?", "No. Nothing is read from the game, so the app does not know where anyone stands. Voice is organised by the chain of command instead: party, clan, command, broadcast."),
            ("Is the latency as low as Mumble's?", "We have not measured the two side by side and will not claim it. Warcryer's voice runs over WebRTC with the Opus codec, as most current voice services do."),
        ],
        "sources": [
            ("Mumble: home page and feature list", "https://www.mumble.info/"),
            ("Mumble: downloads", "https://www.mumble.info/downloads/"),
            ("Mumble: access control lists", "https://www.mumble.info/documentation/administration/acl/"),
            ("Mumble: positional audio", "https://www.mumble.info/documentation/user/positional-audio/"),
            ("Mumble 1.4 release notes: whisper and shout shortcuts", "https://www.mumble.info/blog/mumble-1.4.230/"),
        ],
        "note": "Mumble 1.5.939 was the latest stable version at the time of writing. Mumble's own iOS app is no longer maintained; its site lists third-party phone apps.",
    },
    "ventrilo": {
        "name": "Ventrilo",
        "title": "Warcryer vs Ventrilo: an alternative for alliances that have outgrown channels",
        "description": "How Warcryer compares with Ventrilo for large organised events: Ventrilo is simple hosted voice with channels and phantoms; Warcryer places every player on their nets from the event's roster and records attendance.",
        "lede": "Ventrilo is the voice many guilds raided on, and it is still here: a current client for Windows, macOS and Linux, and servers hosted by its owner. It keeps to what it always was, a server with channels and a push-to-talk key. Warcryer is built around the event instead of the channel.",
        "cells": {
            "hears": "Each player joins a channel on the server.",
            "several": "Phantoms let you listen in on other channels while you stay in yours.",
            "over": "Ranks, transmit limits and queued channels, set by the server's admin.",
            "moves": "The player changes channel, or an admin moves them.",
            "planning": "Not part of Ventrilo.",
            "attendance": "Not part of Ventrilo.",
            "chat": "Not tied to an event: no order line, ready check or calls.",
            "hosting": "Hosted by Ventrilo's owner.",
            "price": "A free server for 5 people online; $9.99 a month or $99.99 a year for 400.",
            "source": "Proprietary.",
            "platforms": "Windows, macOS and Linux.",
            "size": "400 online at once on the paid plan.",
            "also": "A server that is there all week, for any group and any use.",
        },
        "them_if": [
            "You want a plain voice server with channels, and nothing to learn.",
            "Your players are on macOS or Linux.",
            "You need more than 300 people, up to the 400 its paid plan holds.",
            "Your guild has used it for years and its channel layout is second nature.",
        ],
        "us_if": [
            "Your events have layers: an event leader, clan leaders, party leaders, parties.",
            "Leaders need to hear command and their own party at once, and speak to each with a different key.",
            "You move players between parties during a fight.",
            "You want sign-ups, party building and attendance where the voice is.",
        ],
        "differences": [
            ("Nets instead of channels", "On a Ventrilo server a player is in one channel, and can listen in on others with phantoms. In Warcryer every player is on their party, their clan and Broadcast at once, leaders on Command as well, and speaks to each with its own key."),
            ("The roster places people", "Ventrilo leaves it to each player to find the right channel and to an admin to move them. In Warcryer the parties are built on a board from who signed up, and starting the operation puts everyone where they belong."),
            ("Orders are heard", "While the event leader speaks on Broadcast, party and clan talk is lowered for everyone and comes back when the order ends. Nobody has to be told to be quiet."),
            ("The event around the voice", "Ventrilo is voice. Warcryer also asks who is coming, shows what each party still needs, and records who attended and for how long."),
        ],
        "shot": ("voice.jpg", 1600, 775, "The voice screen during an operation: one card for each net, who is speaking, and the key that talks there.", "The voice screen during an operation: one card per net, who is speaking, and the key that talks there."),
        "moving": [
            "Keep your Ventrilo server for everyday talk if you like it. Warcryer is for the events.",
            "Start your alliance in the app and choose the starting lists for your game, or write your own.",
            "Create your clans and send each clan leader an invite link.",
            "Plan the first operation, build its parties on the board, and go live.",
        ],
        "faq": [
            ("Is Ventrilo still being developed?", "Yes. At the time of writing its site offers a version 5 client for Windows, macOS and Linux, and hosted servers."),
            ("Is Warcryer free?", "It is free while it is in beta. An alliance is started with a code from the Warcryer Discord."),
            ("How many players can a Warcryer alliance have?", "300 approved members during the beta. Ventrilo's paid plan holds 400 online at once, so for a larger group Ventrilo has more room today."),
            ("Does Warcryer run on macOS or Linux?", "No. It is a Windows app, with a browser version for a quick look. Ventrilo has clients for all three."),
        ],
        "sources": [
            ("Ventrilo: home page and hosting", "https://www.ventrilo.com/"),
            ("Ventrilo: frequently asked questions", "https://www.ventrilo.com/faq.php"),
            ("Ventrilo: downloads", "https://www.ventrilo.com/download.php"),
        ],
        "note": "Prices and limits are from Ventrilo's own site at the time of writing.",
    },
}

ORDER = ["teamspeak", "discord", "mumble", "ventrilo"]
e = escape


def head(title, description, path, image="board.jpg"):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(description)}">
<link rel="canonical" href="{SITE}{path}">
<meta property="og:type" content="article">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(description)}">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:image" content="{SITE}/shots/{image}">
<meta name="theme-color" content="#0b0c0f">
<link rel="icon" href="/favicon.png">
<link rel="preload" href="/fonts/cinzel-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
</head>
<body class="page">

<header class="top">
  <a class="brand" href="/"><img src="/emblem.svg" alt="" width="34" height="34"><span>Warcryer</span></a>
  <nav>
    <a href="/compare/">Compare</a>
{nav_links(path)}
    <a class="btn small" href="{DOWNLOAD}">Download</a>
  </nav>
</header>

<main>
"""


def nav_links(path):
    out = []
    for key in ORDER:
        here = path == f"/compare/{key}/"
        current = ' aria-current="page"' if here else ""
        out.append(f'    <a href="/compare/{key}/"{current}>vs {e(PRODUCTS[key]["name"])}</a>')
    return "\n".join(out)


def crumbs(items):
    """items: [(name, path)], the last one is this page."""
    slash = ' <span aria-hidden="true">/</span> '
    links = slash.join(
        f'<a href="{path}">{e(name)}</a>' if i < len(items) - 1 else f'<span aria-current="page">{e(name)}</span>' for i, (name, path) in enumerate(items)
    )
    ld = ",".join(f'{{"@type":"ListItem","position":{i + 1},"name":"{e(name)}","item":"{SITE}{path}"}}' for i, (name, path) in enumerate(items))
    return f"""<nav class="crumbs" aria-label="You are here">{links}</nav>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{ld}]}}</script>
"""


def faq_ld(faq):
    items = ",".join('{"@type":"Question","name":"%s","acceptedAnswer":{"@type":"Answer","text":"%s"}}' % (e(q), e(a)) for q, a in faq)
    return f'<script type="application/ld+json">{{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{items}]}}</script>\n'


def foot(names):
    marks = ", ".join(names[:-1]) + (" and " if len(names) > 1 else "") + names[-1]
    verb = "are trademarks of their owners" if len(names) > 1 else "is a trademark of its owner"
    them = "them" if len(names) > 1 else "it"
    theirs = "their" if len(names) > 1 else "its"
    return f"""
<section class="status">
  <h2>Try it on your next event</h2>
  <p>Warcryer is in beta and nothing is charged for it. Download the Windows app, ask for a beta code on the Warcryer Discord, and start your alliance.</p>
  <div class="actions">
    <a class="btn" href="{DOWNLOAD}">Download for Windows</a>
    <a class="btn quiet" href="{DISCORD}">Join the Discord</a>
    <a class="btn quiet" href="/">See how it works</a>
  </div>
</section>

</main>

<footer>
  <p>{marks} {verb}, named here only for comparison. Warcryer is not affiliated with {them}. What is said about {them} on this page was checked against {theirs} own published pages on {CHECKED}; if something here is wrong or out of date, tell us on the <a href="{DISCORD}">Warcryer Discord</a> and it will be corrected.</p>
  <p><a href="/">Warcryer</a> · <a href="/compare/">Compare</a> · <a href="https://github.com/Warcryer/client">GitHub</a> · <a href="{DISCORD}">Discord</a> · <a href="https://github.com/Warcryer/client/blob/main/TERMS.md">Terms of use</a> · <a href="https://github.com/Warcryer/client/blob/main/PRIVACY.md">Privacy policy</a></p>
</footer>
</body>
</html>
"""


def ul(items, cls=""):
    attr = f' class="{cls}"' if cls else ""
    return f"<ul{attr}>\n" + "".join(f"      <li>{e(i)}</li>\n" for i in items) + "    </ul>"


def product_page(key):
    p = PRODUCTS[key]
    name = p["name"]
    path = f"/compare/{key}/"
    shot, w, h, alt, caption = p["shot"]
    rows = "".join(
        f'      <tr><th scope="row">{e(label)}</th><td data-who="Warcryer">{e(ours)}</td><td data-who="{e(name)}">{e(p["cells"][rid])}</td></tr>\n' for rid, label, ours in ROWS
    )
    diffs = "".join(f"    <article>\n      <h3>{e(t)}</h3>\n      <p>{e(body)}</p>\n    </article>\n" for t, body in p["differences"])
    steps = "".join(f"    <li>{e(s)}</li>\n" for s in p["moving"])
    faq = "".join(f"    <dt>{e(q)}</dt>\n    <dd>{e(a)}</dd>\n" for q, a in p["faq"])
    sources = "".join(f'    <li><a href="{url}" rel="nofollow noopener">{e(label)}</a></li>\n' for label, url in p["sources"])
    others = " · ".join(f'<a href="/compare/{k}/">Warcryer vs {e(PRODUCTS[k]["name"])}</a>' for k in ORDER if k != key)
    return (
        head(p["title"], p["description"], path, shot)
        + f"""
<section class="hero">
  {crumbs([("Warcryer", "/"), ("Compare", "/compare/"), (f"vs {name}", path)])}
  <h1>Warcryer vs {e(name)}</h1>
  <p class="lede">{e(p["lede"])}</p>
  <p class="fine">Checked against {e(name)}'s own pages on <time datetime="{CHECKED_ISO}">{CHECKED}</time>. Warcryer is in beta.</p>
</section>

<section>
  <h2>The short answer</h2>
  <div class="verdict">
    <article>
      <h3>Choose {e(name)} if</h3>
    {ul(p["them_if"])}
    </article>
    <article class="ours">
      <h3>Choose Warcryer if</h3>
    {ul(p["us_if"])}
    </article>
  </div>
</section>

<section>
  <h2>Side by side</h2>
  <div class="table-wrap">
  <table class="compare">
    <thead>
      <tr><th scope="col"><span class="sr">What</span></th><th scope="col">Warcryer</th><th scope="col">{e(name)}</th></tr>
    </thead>
    <tbody>
{rows}    </tbody>
  </table>
  </div>
  <p class="fine note">{e(p["note"])}</p>
</section>

<section>
  <h2>What is different in practice</h2>
  <div class="cards two">
{diffs}  </div>
  <figure class="wide">
    <img src="/shots/{shot}" alt="{e(alt)}" width="{w}" height="{h}" loading="lazy">
    <figcaption>{e(caption)}</figcaption>
  </figure>
</section>

<section>
  <h2>Where {e(name)} is the better choice</h2>
  <p class="intro">Warcryer does one thing, and it is young. These are its limits today.</p>
  {ul(OUR_LIMITS, "plain")}
</section>

<section>
  <h2>Coming over from {e(name)}</h2>
  <ol class="steps left">
{steps}  </ol>
</section>

<section>
  <h2>Questions</h2>
  <dl class="faq">
{faq}  </dl>
  {faq_ld(p["faq"])}
</section>

<section>
  <h2>Sources</h2>
  <p class="intro">Everything said about {e(name)} here comes from its own pages, read on {CHECKED}.</p>
  <ul class="plain">
{sources}  </ul>
  <p class="fine">Also compared: {others}</p>
</section>
"""
        + foot([name])
    )


def hub_page():
    path = "/compare/"
    title = "Warcryer compared with TeamSpeak, Discord, Mumble and Ventrilo"
    description = "Voice for large alliances, guilds and clans, side by side: what Warcryer does that TeamSpeak, Discord, Mumble and Ventrilo leave to you, and where each of them is the better choice."
    names = [PRODUCTS[k]["name"] for k in ORDER]
    header = "".join(f'<th scope="col"><a href="/compare/{k}/">{e(PRODUCTS[k]["name"])}</a></th>' for k in ORDER)
    rows = "".join(
        f'      <tr><th scope="row">{e(label)}</th><td>{e(ours)}</td>' + "".join("<td>" + e(PRODUCTS[k]["cells"][rid]) + "</td>" for k in ORDER) + "</tr>\n"
        for rid, label, ours in ROWS
    )
    cards = "".join(
        f"""    <article>
      <h3><a href="/compare/{k}/">Warcryer vs {e(PRODUCTS[k]["name"])}</a></h3>
      <p>{e(PRODUCTS[k]["lede"])}</p>
      <p><a href="/compare/{k}/">Read the comparison</a></p>
    </article>
"""
        for k in ORDER
    )
    return (
        head(title, description, path)
        + f"""
<section class="hero">
  {crumbs([("Warcryer", "/"), ("Compare", path)])}
  <h1>How Warcryer compares</h1>
  <p class="lede">TeamSpeak, Discord, Mumble and Ventrilo give you channels and leave the rest to you: who goes where, who may speak to whom, who signed up, who turned up. Warcryer starts from the event's roster and works those out for you. It also does far less than they do outside an event.</p>
  <p class="fine">Checked against each product's own pages on <time datetime="{CHECKED_ISO}">{CHECKED}</time>. Warcryer is in beta.</p>
</section>

<section>
  <h2>One at a time</h2>
  <div class="cards two">
{cards}  </div>
</section>

<section>
  <h2>All five, side by side</h2>
  <div class="table-wrap">
  <table class="compare many">
    <thead>
      <tr><th scope="col"><span class="sr">What</span></th><th scope="col">Warcryer</th>{header}</tr>
    </thead>
    <tbody>
{rows}    </tbody>
  </table>
  </div>
  <p class="fine note">TeamSpeak's whisper lists, priority speaker and Channel Commander are described as in TeamSpeak 3; TeamSpeak 6 is in beta. Sources are listed on each product's own comparison page.</p>
</section>

<section>
  <h2>What Warcryer does not do</h2>
  <p class="intro">If one of these matters to you, one of the others is the better choice, and the page for it says which.</p>
  {ul(OUR_LIMITS, "plain")}
</section>
"""
        + foot(names)
    )


def main():
    for key in ORDER:
        out = ROOT / "compare" / key / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(product_page(key), encoding="utf-8")
    (ROOT / "compare" / "index.html").write_text(hub_page(), encoding="utf-8")
    urls = ["/", "/compare/"] + [f"/compare/{k}/" for k in ORDER]
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{SITE}{u}</loc><lastmod>{CHECKED_ISO}</lastmod></url>\n" for u in urls)
        + "</urlset>\n",
        encoding="utf-8",
    )
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n", encoding="utf-8")
    print("wrote", len(ORDER) + 1, "pages, sitemap.xml and robots.txt")


if __name__ == "__main__":
    main()
