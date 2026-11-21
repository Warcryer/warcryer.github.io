<!-- Copied from https://github.com/Warcryer/client/blob/v0.36.0/PRIVACY.md by tools/sync-docs.mjs. Edit it there, not here. -->

# Privacy policy

This covers Warcryer, the Windows app built from this repository, and the service the released installer connects to (the server at `app.warcryer.org`, earlier `ignite.v1rtopia.com`), which is run by Warcryer. The only contact is the [Warcryer Discord](https://discord.gg/qf4meEMfhp). The service's rules are in the [terms of use](/terms/). If you build the app yourself and point it at another server (`VITE_SERVER`), that server's operator decides what is kept there.

## Before you sign in

The app sends one thing before you click **Sign in with Discord**: an update check. When it starts, and every few hours while it runs, it asks the server whether a newer version exists, sending only its own version number and "Windows, 64-bit". You can switch this off in **Settings → Window and updates**.

Apart from that it sends nothing until you sign in. It has no telemetry, analytics, crash reporting or advertising.

## What the app sends once you are signed in

| What | When | Why |
| --- | --- | --- |
| Your Discord account ID and Discord name | At sign-in, from Discord to the server | To know who you are. When you ask to join a clan, its leader and officers see your Discord name beside the request, so they can tell it is you; nobody else is shown it. Only Discord's `identify` permission is requested: no email address, no server list, no messages. The app never sees your Discord password. |
| In-game name, class and level | When you set them | Shown to other members beside your voice and on rosters. |
| Your other characters: each one's name, class and level, and whether you play it beside your main | When you list them in Settings | Shown to your clan on its roster and to the members on an event's roster, so organisers know what you can bring. |
| Your answer to an event: coming or not, and another character's name, class and level or a note if you give them | When you sign up | Shown to the members on that event's roster, so the organiser can build parties. |
| Clan membership, join requests, constant party and roster places, clan crest images | When you or your leaders change them | To decide which voice rooms you belong in. |
| The group you sit in between events, and its name if its starter gave one | When you start, join or leave a group | Shown to your alliance's members on the Voice tab, so they can join you. Not kept: it goes when you leave or the group ends. Time in a group is not written down anywhere. If a leader takes you out of a group, the alliance's log says so. |
| Which leader or officer let you in | When you are approved, or use an invite link that lets you straight in | So a clan knows who vouched for each member. |
| What you write in a lounge's or a group's chat between operations, and the quick calls you send there | When you send a line or press a call's key | Shown to the players in that room, and to nobody else in your alliance. A lounge's lines are kept so that those players can read them back; a group's go when the group ends. |
| Whether you are away | When you switch it on, or your computer has had no key or mouse input for 15 minutes | Shown to your alliance's members in the list of who is online. The app reads from Windows only how long the computer has been idle, never which keys; it sends only "away" or "back". Not stored: it is gone when you come back or close the app. |
| What you write in an operation's chat, and the quick calls you send | When you send a line or press a call's key | Shown to the players on that net of that operation, and to nobody else in your alliance. Kept after the operation so that those players can read it back. |
| Your voice | While you hold a push-to-talk key, or while voice activation is open | Relayed live to the members of that room. It is not recorded or stored. |
| Whether your headset is off | When you turn it off or on in the app | Shown live beside your name to the players in the voice rooms you are in, so they know you cannot hear them. Not stored: it is gone when you turn it on again or leave. Whether your mic is off is not shown. |
| Times you joined and left voice rooms | Automatically while connected | So organisers can see who is present. For each operation, its organisers, and your clan's leader and officers, can see how long you were in voice while it ran and when you joined. When an operation ends this is written down as one line for you (time in voice, what you had answered, your party and the character you came as). Your alliance's admins, and your clan's leader and officers for the time you were in their clan, can read those lines across operations as a history; you can read your own. |
| Points, if your alliance or clan keeps them (DKP, EP and GP, and the like), or your place in a loot list (Suicide Kings) | When an operation's points are posted, a leader gives or takes points by hand, decay or a new season changes them, loot is given out, or the list is put in order | Each line: how many, for which operation, item or reason (the rules' parts, such as "there 10, on time 2"; a share of another player's item), and who wrote it. A list keeps only the order. You always see your own lines. Who else sees your total is your alliance's (or clan's) choice: everyone in it, or only those who run the points and, for the alliance's points, your clan's leader and officers. |
| Loot: what dropped at an operation, who received it and as which character, what it cost in points, and a leader's note | When a leader records or gives out a drop | Shown to your alliance's members; the cost only to those who see that set of points' standings in full, and to you. |
| Screenshots of loot a leader asks the app to read | When a leader uses **Read a screenshot** | The picture is sent from our server to Anthropic (the maker of Claude), which reads the items in it and returns them; it may show names and chat on screen at the time. We do not keep the picture. Anthropic processes it for us under its commercial terms: by its published policy it deletes what is sent through its API within 30 days (longer only if its safety systems flag it, or the law requires), and does not use it to train its models (privacy.claude.com). We keep who asked, when, the size of the request and the list that came back. |
| Changes made by leaders and admins (moves, approvals, bans) | When made | An audit log of who did what. |
| Why a connection to the server dropped: which of the server's two addresses it had used, the connection's close code, how long it had been open and silent, whether Windows had just reported a change of network, whether the window was hidden, and the voice library's own line about it | When the app has reconnected | To find faults in the service. It is written to the server's log beside your account's number and says nothing about what you were doing or saying. |
| Operation announcements on Discord | When an operation is created, changed, started or cancelled, if a clan's leader or an alliance admin has connected a Discord channel | So players without the app open hear about events. A message carries the operation's name and start time, the names of the clans and the event leader's in-game name. It goes to Discord, to the channel that leader chose, and is then subject to Discord's own terms. Nothing else about you is sent. |

Like any internet service, the server sees your IP address while you are connected, and it may appear in its access logs. The site and the app's requests to it pass through Cloudflare, which sees your address too; voice, its signalling and the app's live connection to the server go straight to the server.

## What stays on your computer

Key bindings, audio device choices, volume settings and per-player volumes. They are never sent.

## Keyboard and mouse

To notice push-to-talk keys while a game has focus, the app reads keyboard and mouse button state system-wide. Only the keys you have bound are acted on, plus the single key you press while binding one. Key presses are not logged, stored or sent anywhere, and they are never blocked: other programs still receive them. The code is in [`src-tauri/src/input`](https://github.com/Warcryer/client/tree/v0.36.0/src-tauri/src/input).

## Who can see what

The members of your alliance see your in-game name, class, level, clan and which voice room you are in. Players of other alliances see nothing of you, and you nothing of them: each alliance's clans, players, operations, voice and log are its own. Clan leaders, event leaders and alliance admins also see join requests and rosters. Alliance admins can read the log of changes (who moved, approved, removed or banned whom, and when); a clan's leader can read the part of it that concerns their own clan. Your Discord account ID is visible only to the server's administrators. Clan crest images can be loaded by anyone who knows their address.

## How long it is kept

The server clears old records by itself every night:

| What | Kept for |
| --- | --- |
| Times you sat in a lounge | 30 days |
| An operation that has ended, with its roster and its attendance record (for each member of its clans: how long they were in voice, what they had answered, their party and the character they came as) | Until an alliance admin deletes the operation or the alliance is deleted. Your own lines in it go at once when you delete your account |
| The exact times you joined and left each voice room during an operation | 12 months after it ended |
| Your points and each line behind them | As long as the alliance (or the clan) whose points they are exists. If you leave, they are kept and still there if you come back. They go at once when you delete your account |
| Loot: what dropped, who received it and what it cost | As long as the alliance exists. When you delete your account, the drops you received stay as drops with no one named |
| The record of each screenshot read (who asked, when, and the list read; never the picture) | 12 months |
| The log of changes made by leaders and admins | 12 months |
| Invite links | 30 days after they expire |
| What was written in an operation's chat | As your alliance's admins have chosen: until the operation ends, or 7 days, 30 days (unless they change it) or 12 months after it. Never longer than that, and never longer than the operation itself |
| What was written in a lounge's chat | As long as an operation's (above), and at least a day. A group's lines go when the group ends |
| Sign-in sessions and sign-in codes | Until they expire |

Your account, your in-game name, class and level, your other characters, and your clan membership are kept for as long as you have the account. Nothing is sold or shared with anyone else.

## Removing your data

Signing out ends your session. To delete your account, open **Settings → Account → Delete my account** in the app. That removes, at once and for good: your account and Discord account ID, your in-game name, class and level, your list of other characters, your clan membership, your places in constant parties and on rosters, your answers to events, your join requests, everything you wrote in operations' chats and the record of when you were in voice.

What stays, without you:

- A clan you led stays, without a leader, until an alliance admin appoints one.
- An operation you led that has ended stays in the list, shown as led by "Deleted player". You cannot delete your account while you lead an operation that has not ended; end it first.
- Entries in the audit log about changes you made or that were made to you stay, but they hold only your account's number, which no longer leads to a name or a Discord account.
- If an alliance banned you, or the service did, your Discord account ID and the ban are kept, and nothing else, so that the ban still holds. An alliance's ban is removed when it is lifted or when that alliance is deleted.
- An alliance you own must be handed to another player or deleted before you can delete your account.
- Backups of the database are kept on the server for 14 days, so a deleted account can remain in a backup for that long. A copy of each backup may also be kept with a storage provider (Backblaze), encrypted before it leaves the server so that the provider cannot read it, and removed there after a set number of days.

If you cannot sign in, ask an alliance admin to pass your request to whoever runs the service, who can delete an account from the admin page.

## What the service's operator can see

Whoever runs the service has a page listing every alliance: its name, its owner's in-game name, how many players, clans and operations it has, when something last changed in it, its plan, and which beta code it was started with. That page shows nothing of what is inside an alliance. As with any hosted service, the operator has access to the server and its database, where everything described on this page is stored; it is looked at only to keep the service running or to deal with a breach of the terms.

## Other services involved

- Discord, for sign-in: <https://discord.com/privacy>
- Cloudflare, in front of the site (not of voice): <https://www.cloudflare.com/privacypolicy/>
- The app displays its interface with Microsoft Edge WebView2, part of Windows: <https://privacy.microsoft.com/privacystatement>
