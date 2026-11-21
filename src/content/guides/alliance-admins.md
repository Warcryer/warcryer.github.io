<!-- Copied from https://github.com/Warcryer/client/blob/v0.36.0/docs/alliance-admins.md by tools/sync-docs.mjs. Edit it there, not here. -->

# Guide for alliance admins and event leaders

Read the [members guide](/guides/members/) first, and the [clan leaders guide](/guides/clan-leaders/) for how clans work from the inside.

## The roles above clan leader

| Role | Scope | How you get it |
| --- | --- | --- |
| **Owner** | The alliance: everything an alliance admin can do, and the alliance itself | By starting the alliance, or by being handed it |
| **Alliance admin** | Clans, clan leaders, every operation, bans | Appointed by the owner |
| **Event leader** | One operation | Chosen when the operation is created |
| **Deputy** | One operation | Named by the event leader on the roster board |

| | Owner | Alliance admin | Event leader | Deputy |
| --- | --- | --- | --- | --- |
| Create clans, appoint clan leaders | Yes | Yes | | |
| Create operations | Yes | Yes | | |
| Ban players and lift bans | Yes | Yes, except admins | | |
| Start and end the operation, name deputies | Yes | Yes | Yes | |
| Rename it, move its start, delete it before it starts | Yes | Yes | Yes | |
| Change its event leader or its clans, delete it after it ended | Yes | Yes | | |
| Move anyone in the operation, edit parties | Yes | Yes | Yes | Yes |
| Add any clan's constant parties to the board | Yes | Yes | Yes | Yes |
| See who attended an operation | Yes | Yes | Yes | Yes |
| Speak on Broadcast and Command | If also leading it | If also leading it | Yes | Yes |
| Rename the alliance, shared lounge switch, game setup | Yes | Yes | | |
| Appoint alliance admins | Yes | | | |
| Hand the alliance to another player, delete it | Yes | | | |

Everything here is inside one alliance. Another alliance's owner, admins and players see none of yours: not its clans, players, operations or log, and they cannot reach its voice.

Being an admin does not by itself put you on any net. What you hear and where you speak comes from your clan and from your role in the operation.

## The Alliance tab

The owner and the alliance admins see an extra tab, **Alliance**.

### Your alliance

**Starting one.** A player who is in no alliance starts one on the **Clan** tab, under **Or start your own**: a name, and the game it plays. While Warcryer is in beta you also need a **beta code** from the service: ask for one on the [Warcryer Discord](https://discord.gg/qf4meEMfhp). One code starts one alliance; the players who join it need no code. The game only fills in a starting point (classes, party size, kinds of event) that you can change later under **Game setup**. Whoever starts it owns it. Then, in this order:

1. Create your clans (below).
2. Beside each clan, open **Invite links**, make a link and send it to that clan's leader. Tick **Let people who use it straight in** if you know them; one use is enough.
3. When they have come in, appoint them leader of their clan. From then on they make their own invite links for their members, on their **Clan** tab.

An invite link is the only way into an alliance. Nobody can find or ask to join it from outside.

The first section of the tab carries the alliance's name and its own switches:

- **Rename** changes the name players see in the app's header and on invite links.
- **Shared lounge:** one extra lounge shared by every clan of the alliance. It is off by default, because it lets every approved member of any clan hear whoever is talking there. Turn it on if the clans should mix between events.
- **Admins' broadcast between operations:** off by default. When it is on, the alliance's admins (and its owner) can speak to everyone in the alliance with their Broadcast key between operations, over the lounges and groups, as an event leader does on Broadcast in an operation. Clans' leaders and officers always have their own Clan net between operations; it needs no switch.
- **Groups** need no switch: between operations anyone in the alliance can start a small group, and anyone in the alliance can join it, whatever the shared lounge says (see the [members' guide](/guides/members/#groups)). As an admin you can take anyone out of a group with the **×** beside their name in the Groups panel; the log records it. An alliance can have 50 groups at once, of up to 50 players each.
- **Hand it to…** (owner only) makes another player of the alliance its owner, after you confirm. You stay as an alliance admin.
- **Delete alliance** (owner only) removes the alliance with its clans, operations, attendance, bans and log, for good. Its players keep their accounts and are left in no alliance. It cannot be deleted while one of its operations is running.

The owner cannot leave the alliance or delete their account while they own it: hand it on or delete it first.

**The plan.** Under the switches the section says which plan the alliance is on and how many approved members it has against the plan's limit. During the beta every alliance is on the Beta plan, with room for 300 approved members, and nothing is charged.

- A limit only stops growth. At the limit nobody new can be approved or moved into a clan, and an invite link that normally lets people straight in puts them on the waiting list instead. Nobody is removed and no voice is cut.
- If the alliance needs more room, ask on the [Warcryer Discord](https://discord.gg/qf4meEMfhp).
- An alliance that is over its limit, or whose operations the service has paused, keeps its members and lounges and cannot create or start an operation until that is put right. A running operation can always be ended.

### Call to arms

For something that will not wait: on the **Voice** tab, between operations, **Call to arms** (admins only) starts an operation at once.

1. Click **Start one**, give it a name if you like (it is called "Call to arms" otherwise), and untick any clan that should not be pulled in.
2. Leave **Make the groups its parties** ticked to turn each group into a party: its players who belong to the ticked clans, in the order they joined, the first of them leading. Everyone else of those clans waits in Reserve.
3. Click **Start it now**, then again to confirm. You lead it; every player of its clans with the app open is moved onto its nets within a second or two.

It is an ordinary operation: change it on its roster board, and end it there. Attendance, points and loot work as for one planned ahead, and Discord is told if you have set that up. When it ends, players go back to their groups.

## Clans

- **Create a clan:** enter a name and a tag, click **Create clan**. The tag is a short form of the name, 1 to 8 letters or digits (for example DRG). It is shown in brackets beside every member's name in voice and on roster boards until the clan's leader uploads a crest, which then takes its place; in an operation with several clans the tag also names each clan's own net ("Clan DRG").
- **Invite links:** opens the clan's invite links beside it, where you can make, copy and revoke them as its leader can. This is how a clan's first member, usually its leader, comes into the alliance.
- **Appoint its leader:** use the selector beside the clan. The player must be in the alliance. A player who belongs to another clan has to be moved out of it first (see Players). The previous leader becomes an ordinary member.
- **Rename a clan:** click **Rename** beside it and change the name, the tag or both. Its members, constant parties, crest and invite links stay with it.
- **Delete a clan:** **Delete** appears beside a clan once it is empty or has only its leader left; move or remove its other members first. A clan that is the only one in an operation still to come cannot be deleted until that operation is changed or deleted.

- **Remove a crest:** a clan's leader uploads its crest. If one is unsuitable, **Remove crest** beside the clan takes it down.

A clan with no leader cannot approve anyone, so appoint the leader straight away.

### Players

Every player who has signed in and confirmed a name. Use **Find a player** to filter.

- **Make admin / Remove admin** (owner only): an alliance admin can do everything on this tab except appoint admins, hand the alliance on and delete it.
- **Ban:** click **Ban** and confirm. The player is put out of the alliance at once: out of their clan, their parties and every voice room. The ban follows their Discord account, so an invite link does not bring them back, under this name or another. It is a ban from your alliance only; their account still works elsewhere.
- **Banned:** the players you have banned are listed under the others. **Lift ban** takes one off the list. It does not put them back: they come in again with an invite link, like anyone else.
- **Move to clan:** choose a clan beside the player and confirm. They become an approved member of it at once, with no request and no invite. This is how a transfer between clans is done, and how you put a player with no clan into one. In the clan they leave they lose their constant parties and their party places in operations still to come; place them again on the board. A clan's leader cannot be moved until you have appointed another leader there.

An alliance admin cannot ban the owner or another alliance admin; the owner can ban an admin.

## Operations

An operation is one event: a siege, an epic boss, a mass PvP. It has an event leader, deputies, parties and a Reserve.

The app covers the whole event: create it, see who is coming and as which class, build the parties and see what each still needs, run it, and afterwards see who attended.

### Creating one

1. Open **Operations** and click **New operation**.
2. Give it a name and, if you like, a start time in your own time zone. If your alliance has kinds of event (see Game setup), choose one.
3. To reuse an earlier roster, pick that operation under **Start from** (see below). Otherwise leave it on "An empty roster".
4. Choose the **event leader**. It defaults to you.
5. Tick the **clans taking part**.
6. Click **Create operation**. Its roster board opens.

The operation is **Planned**. Nobody is pulled into it yet: players stay in their lounge while you build the roster.

### Changing or deleting an operation

Plans change. On the operation's board, **Edit** opens a form:

- **Name** and **Starts**: the event leader or an alliance admin can change these at any time before the operation ends. Players with the app open see the new name and time at once.
- **Event leader**: an alliance admin can hand the operation to someone else, before or during it.
- **Clans taking part**: an alliance admin can add or take out a clan, but only before the operation starts. A clan you add is asked whether it is coming. A clan you take out leaves the operation: its members come out of the parties and their answers are dropped. Your deputies stay whatever their clan.
- **Delete operation**: for one created by mistake. It removes the operation with its parties and answers, and cannot be undone. The event leader or an alliance admin can delete an operation that has not started.

A running operation cannot be deleted: end it first. An operation that has ended can no longer be changed, and only an alliance admin can delete it, from its board; that also removes its attendance. The log keeps a line for every change and for a deletion.

### Game setup: making the app fit your game

Nothing about any one game is built into the app. On the **Alliance** tab, **Game setup** holds how your game works, and you change it to fit. Click **Change the setup**.

- **Start again from a preset** fills in the lists for a game we have a starting point for, or leaves them empty. Nothing changes for players until you save.
- **Roles and classes.** A role is what a class does in a party. Type one class to a line as name, tag, role, for example `Bishop, BP, Healer`. The tag is the short form shown beside a player's name. If your game has no classes, list whatever players are known by, such as their weapon.
- **Party size**, and **A party needs one of each:** tick the roles every party should have. The roster board then lists, for each party, the ones it has nobody for.
- **Kinds of event:** your own list, for example your sieges and bosses. An operation can then be marked as one of them, which shows beside its name and in Discord announcements.
- **Group types:** what a party can be marked as on the board. Leave empty to have none.
- **Bands:** level or gear-score ranges players choose from, and what to call them. Leave empty and players are not asked.
- **In-game names may have:** which characters a name can contain, to match your game.
- **Your words:** what your players call the five things the app is built around. In the app's own words those are `alliance`, `clan`, `party`, `constant party` and `operation`. Give each your word for one and for several, for example guild and guilds for a `clan`, raid and raids for an `operation`. The whole app, these guides, the invite page and the Discord announcements then say it your way, and names that you or your players typed are never changed. Leave a row as it is to keep the app's own word.

The server checks what you save and says in words what is wrong, for example a class with a role that is not on your list of roles. Every player's app has the new lists as soon as you save.

Changing a list does not change what players have already chosen. Someone with a class you remove keeps it until they choose again, and an operation keeps a kind of event you later take off the list.

### Telling players on Discord

The app asks everyone in the participating clans whether they are coming, but only those who open it see the question. On the **Alliance** tab, **Discord announcements** connects a Discord channel that is told about every operation: when one is created, changed, started, or cancelled before it starts.

1. In Discord, open the channel's settings (the cog beside its name), then **Integrations**, **Webhooks**, **New Webhook**, and **Copy Webhook URL**. You need the Manage Webhooks permission on that Discord server.
2. In the app, paste the address under **Discord announcements** and click **Connect**. A first message is posted at once, so you can see it arrive.

A message names the operation, its start (shown to each reader in their own time zone), the clans and the event leader. **Send a test message** checks the channel; **Disconnect** stops the messages. The address is a secret and is never shown again.

- **Reminder:** some time before an operation starts, every connected channel gets a reminder with how many have said they are coming. Choose how long before under **Reminder** (15 minutes to 2 hours; 30 minutes unless you change it), or **Off**. It is one setting for the whole alliance, clans' own channels included. An operation created or moved to start sooner than that is not reminded of again: the message just posted says it.
- **Ping:** nobody is pinged unless you choose a role under **Ping**: `@everyone`, `@here`, or a role's ID (in Discord: Settings → Advanced → Developer Mode, then right-click the role in the server's settings → Copy Role ID). The channel is told which role it is. That role is pinged when an operation is announced, by the reminder, when it starts and if it is cancelled, and not by a change of detail. Each clan's leader chooses the role for the clan's own channel.

Each clan's leader can connect a channel of their own on the Clan tab, for the operations that clan takes part in. If a clan uses the same channel as the alliance, it gets each message once.

### The chat, and who may write in it

Every operation has a text chat, with a channel for each net ([members' guide](/guides/members/#chat)). On the **Alliance** tab, **Chat** has its four settings:

- **Members may write in their clan's channel.** Off, only a clan's leader and officers write there, as only they speak on the Clan net.
- **Members may write to the whole operation.** Off, only the event leader and deputies write on Broadcast. With hundreds of players an operation-wide channel that everyone writes in moves fast: try it on a small event first.
- **Whoever runs an operation may ask for a ready check.** On unless you switch it off. Off, the event leader and deputies are not offered the button ([During the event](#during-the-event)).
- **Kept:** how long an operation's lines stay after it has ended: until it ends, 7 days, 30 days (unless you change it), or a year. Choosing a shorter time removes older lines at once.

Keeping order: the event leader, the deputies and you can remove any line you can read (point at it), and switch a player's writing off for that operation; they go on reading, and it ends with the operation. Both are written to the log, without what the line said. A party's channel is read only by that party, during and after: you do not see it unless you are in it.

### Quick calls: your alliance's own list

On the **Alliance** tab, **Quick calls** holds up to eight short lines (40 characters each) that your players can send into their party's chat with one key ([members' guide](/guides/members/#quick-calls)). A new alliance starts with six: Need res, Need heal, Out of mana, Under attack, On my way, Wait for me. Write the ones that fit your game and click **Save the calls**; every app has the new list at once.

- **A call keeps its line.** Players bind their keys to a line, not to a text: change the text in line 3 and the key a player bound to line 3 sends the new text. So improve a call in place, and put a new call in an empty line.
- **Empty a line** to take a call away. Keys bound to it then do nothing.
- Calls go to the caller's party, or to Reserve without one, and are kept with the chat. Changing the list is written to the log.

### Starting from an earlier operation

You do not have to rebuild the roster for every event. **Start from** lists your recent operations with their size. Pick one and the new operation begins with the same parties in the same order, with the same leaders, members and deputies. The clans and event leader are filled in to match; change them if you need to.

Only players who are still approved members of the clans you tick are carried over. Anyone banned, removed from their clan, or in a clan that is not taking part this time is left out, and everyone not in a party starts in Reserve as usual. The earlier operation is not changed.

### Building the roster

Every approved member of the participating clans appears in **Reserve**, with a green dot if they have the app open.

**Who is coming.** As soon as the operation exists, every member of its clans is asked in the app whether they are coming. The board's top line counts the answers (coming, can't, no answer), and Reserve is sorted by them: **Coming** first, then **No answer yet**, then **Can't come**, dimmed. A **✓** on a card means coming and **Out** means they cannot; these marks stay on the card after you place the player in a party, so you can see at a glance who in a party has confirmed.

**Class and level.** Each card shows the player's class as a short tag and their level band. When someone brings a different character to this event, the card shows that character's name with their usual name in brackets. Select a card to see the full class name and any note they left. **Show** at the top of Reserve narrows it to one role: choose Healer to find a healer for a party that lacks one.

**What a party needs.** Under each party's name:

- **Group type:** choose what the party is for (Archer, Mage, Melee, Stopper, Overlord, Mixed or Fill group). It is a label for you and the party; it changes nothing in voice.
- **Full** or **Not ready:** a party is full with 9 players. A member who has said they cannot come is not counted, so a party of nine with one **Out** goes back to Not ready.
- **Needs:** the support roles the party has nobody for yet, out of Buffer, Bard, Recharger and Healer. It is worked out from the members' classes, including the class of another character someone brings to this event. Click a role and Reserve lists the unplaced players of that role; click it again to see everyone. "2 with no class set" means two members have not chosen a class in their settings yet, so the app cannot tell what they cover.

The board's top line counts the parties and how many are full.

Signing up is information for you, not a gate. You can place a player who has not answered, and starting the operation pulls in everyone on the roster.

- **Constant parties** set up by the clans are offered on the board. Click one to add it as a ready party, or **Add all** to add every one: for most events this builds most of the roster in one click. Parties made this way are marked **Constant**. The clans keep their own constant parties up to date on their Clan tab; as an admin you can add them to a board, but you change them only in a clan you belong to and lead.
- **+ New party** adds a party. Click its name to rename it, and choose its group type under the name.
- **Drag** a card onto a party or back to Reserve. Or click a card and use **Move to…**, which does the same thing without dragging.
- The first player in a party leads it. To change that, click a member and choose **Make party leader**.
- **Make deputy** on a selected player gives them Broadcast, Command and the power to move anyone.
- The count on each party turns red past 9. That is a warning, not a limit.
- Members can click **Ask to join** on a party. You, or the party's leader, accept or decline.

Clan leaders and officers can do most of this for their own members and their own clan's parties, so you can leave each clan to fill its own. A party led by another clan they cannot change: mixed parties are yours and your deputies' to build, or a member asks to join one.

### Starting

Click **Start operation** and confirm. Every participant with the app open is moved from their lounge into their nets within a second or two, with no action on their side. Anyone who opens the app later joins straight in.

### During the event

- **Broadcast** is yours and your deputies'. Hold your Broadcast key for calls to everyone: push, fall back, target, regroup. While you speak, everyone's lower nets are made quieter for them.
- **Briefings: lock Broadcast open.** As the event leader you can hold Broadcast open without a key. Click **Lock open** on your Broadcast card and talk; everyone in the operation hears you, and a red bar across the app reminds you that they do. Click **Release** when you are done. Pressing your Broadcast key or your Mute all key releases it too, as does ending the operation, and it releases by itself after ten minutes in case you forget. To switch it without leaving the game, bind a **Broadcast lock** key in **Settings → Keys**. Deputies speak on Broadcast with their key but cannot lock it.
- **Pin the order.** In the chat's Broadcast channel, click **Pin as order**, type one line (up to 200 characters) and press Enter. It stays at the top of everyone's chat and on their strip until you pin another or click **clear**; a new one comes with a sound. Deputies can pin too. Each order is also kept as a line on Broadcast.
- **Ready check.** Click **Ready check** in the chat. Everyone else on the operation is asked and has half a minute. You and your deputies see the count as it comes in, with the names of those not ready and those who have not answered; **End now** closes it early. The result is written on Broadcast. Only players whose app is on the operation at that moment are asked. One check at a time. Your alliance's admins can switch this off on the Alliance tab.
- **Command** links you with the clan leaders and party leaders. You are a senior voice there, so party leaders are made quieter while you speak.
- **Moves take effect at once.** Drag a player to another party and they hear a cue, see where they went, and are talking to the new party within a second or two.
- **Late arrivals** sit in Reserve, where they can talk to each other and to you. They still hear Broadcast and their Clan net.
- **A party that loses its leader** is not cut off from Command for long. After about 30 seconds the party and the leader's clan officers are asked who leads now, and after 30 seconds more the next member in voice is promoted. You can also set a party's leader from the board at any time.
- **Click a net** on the Voice tab to see exactly who is connected to it.

### Ending

Click **End operation** and confirm. Everyone returns to their lounge, the operation's rooms close, and its roster can no longer be changed.

### Attendance

Once an operation has ended, its board shows **Attendance**: everyone on the roster, with how long each was in voice while it ran.

- **In voice** is the time the player was connected to the operation's nets between **Start operation** and **End operation**, and the share of the operation that is. Being connected before the start does not count.
- **No show** marks a player who said they were coming and was never in voice. **Not in voice** is anyone else who did not come.
- **Joined** is when they first came in, which shows who was late.
- Each line also has the class and level they came as, their clan, the party they ended in and what they answered.
- **Sort** by clan and name, by most time first, or by party.
- **Copy for a spreadsheet** puts the table on your clipboard. Paste it into a sheet and it lands in columns: name, usual name, class, level, clan, party, minutes in voice, percent of the operation, joined, left, signed up. Use it for points or DKP that depend on who attended.

While the operation is still running, **Attendance so far** on the board shows the same table up to now.

You and the other organisers see everyone. Clan leaders and officers see their own clan. Members do not see it.

### History: turnout over time

Each operation's attendance is written down as it ends, a row for every member of the clans that took part. The **History** tab reads those records across operations, for the whole alliance or one clan at a time:

- **Four figures** for the period you choose: operations, average turnout, how often someone said they were coming and did not show, and how many players are counted.
- **Turnout by operation**, as a chart and as a table, so you can see whether numbers are growing or sliding and which nights work.
- **Players**, with those who come least listed first, and each player's own record a click away.

Someone who was in voice without being in one of the operation's clans (you, looking in) is not counted as expected. A clan's leader and officers see the same screens for their own clan; members see their own record.

**How long it is kept.** An ended operation stays, with its roster and its attendance record, until you delete it (on its board) or the alliance itself is deleted. What goes after a year is only the raw detail behind the record: the exact times each player joined and left each net. A player who deletes their account is removed from the history at once.

### A checklist for event night

1. Create the operation ahead of time. Everyone in its clans is asked in the app whether they are coming, and the Discord channels you have connected are told.
2. Watch the answers come in on the board's top line. Ask clan leaders to chase the players under **No answer yet**, and members to set their class and level.
3. Add the constant parties, then place the rest, or let clan leaders fill their own parties. Give each party its group type.
4. Work through **Needs**: click a missing role on a party to list the unplaced players who can fill it. Aim for every party **Full**.
5. Name your deputies.
6. Ten minutes before: check the green dots. Chase anyone missing, and send clan leaders an invite link for anyone not in the app yet.
7. Check that every party has the right leader and that leaders have bound their Command key.
8. Start the operation. Attendance counts from this moment.
9. Brief everyone with Broadcast locked open, then release it before the fight.
10. Afterwards, end it. Its board then shows **Attendance** and, if you keep points, the draft to review and post.

## Points

Points (DKP, EP, PAP, or whatever your alliance calls them) are set up on the **Alliance** tab under **Points**. Every game and guild runs them differently, so they are built from parts you choose, and you can keep several sets side by side: say **Raid DKP** for raids and **PvP points** for sieges.

**Setting up a set.** Click **+ New set of points** and start from the preset closest to how you do it. Each fills in the rules below, and every part can be changed afterwards:

- **Attendance only:** one point per operation attended, as a plain record of who turns up.
- **Classic DKP:** a set amount per operation, extras for being on time, staying to the end and coming as said, a deduction for not showing, standby, and objectives such as boss kills.
- **DKP by the hour:** points for each hour in voice, so a long siege earns more than a short raid.
- **EPGP:** effort points (EP) for operations and standby; each item given out adds its price to the winner's gear points (GP), and priority is EP divided by GP. Both decay 10% a week, so recent effort and recent loot count most.
- **Zero-sum DKP:** nobody earns points for turning up. An item's price is taken from the winner and shared equally among everyone else in voice at the operation, so the total always stays at zero.
- **Suicide Kings:** no points, a list. Whoever takes an item goes to the bottom.
- **Fleet participation:** one point per fleet or operation a player was in at all, as space and sandbox games count participation.
- **Custom:** start empty.

A new set starts switched off, so you can look it over first. Then:

- **Called:** the name your players use.
- **Counts:** which of your kinds of event earn these points (Game setup on the same tab). Nothing picked: every kind.
- **How they are earned:** a list of rules, each an amount and the kinds of event it is for. **For being there** (in voice at least a share of the operation), **Per hour in voice**, **On time** (in voice within some minutes of the start), **To the end** (still in voice some minutes before the end), **Came as they said**, **Did not show** (a deduction), **Standby** (ticked in the draft for players kept on the bench), and **Objective** (a named event such as a boss kill or a won siege, ticked in the draft and given to everyone who earned for being there). A rule for one kind of event takes the place of the same rule for every kind, so a siege can be worth more than a raid.
- **Decay:** a share taken every week (Mondays) or month (the 1st), at midnight UTC, never below a floor you set. 0% for none.
- **Cap** and **May go below zero:** the most a player may have, and whether a deduction can take them below zero. When a limit trims a line, the line says so.
- **An operation's event leader may post its points:** on by default. Off: only the alliance's admins post.
- **Everyone sees the standings:** on by default. Off: admins see all, a clan's leader and officers their own clan, every player their own.
- **Start a new season:** brings everyone's points down to a share you choose (0% for a fresh start), with a line of its own for each player.
- **Remove these points:** only while they have no lines. Once anyone has points in them, switch them off instead: what everyone has is kept.

Your players can read every rule, decay and cap under the standings.

**After an operation.** Nothing is added by itself. When an operation ends, its board shows a draft for each set it counts for: everyone of its clans with their time in voice, what they had answered, and what the rules suggest, with why. Tick any objectives reached and anyone on standby, use **Add to everyone who earned for being there** for anything else, change any amount, then **Post**. It asks once, with the number of players and the total. Each operation is posted once to each set, and each player's line keeps why. The points tab on **History** lists the operations still waiting for their points, since the set was switched on, with **Review and post** beside each.

**Standings and lines.** **History → (your points)** shows the standings, most first, with what came from operations, what was given by hand, and what decay and seasons took. Click a player for every line behind their total. As an admin you can give or take points there by hand; a reason is required, and the player sees it. Nothing is ever changed or removed: a mistake is put right with another line. Posting, adjustments, decay, seasons and settings are all in the log.

**Clans' own points.** **Clans may keep points of their own** lets each clan's leader and officers run sets of points for the clan, on the Clan tab, beside the alliance's. Switching it off hides the clans' points without deleting them.

A player who leaves the alliance keeps their lines, out of sight; if they come back, they are still there. A deleted account takes its lines with it.

## Loot

What dropped, and who got it, is recorded on the operation's board under **Loot**, during the operation or after. Who may: the alliance's admins, the operation's event leader, and the leaders and officers of its clans.

**Items and prices.** On the **Alliance** tab, **Items and prices** is your own list of items worth recording, so names are spelled one way and screenshots are read right. Add other spellings players use, separated by commas. Nothing comes from the game itself. For each set of points that spends by price, by EPGP (the gear points an item adds) or Zero-sum there is a price column; leave a price empty to enter it, or the winning bid, each time. A hidden item stays on old drops but is no longer offered.

**How a set of points pays for loot** is chosen in its settings, under **Loot, decay and limits**:

- **Not spent on loot:** attendance, fleet participation.
- **Spent:** the item's price is taken from the winner. This also covers auctions held in game chat, where you enter the winning bid.
- **Loot council:** a record of who got what and why, at no cost.
- **EPGP:** the price is added to the winner's gear points (GP); their effort points (EP) stay as they are. Priority is EP divided by (base GP + GP): everyone starts from the base (100 unless you change it), so a new player is not first in line for everything. You can also set a minimum EP: players under it come after everyone else, whatever their priority. When giving an item, the players are offered first in line first, with their priority. Decay takes the same share off GP as off EP, and a new season carries both over alike. GP can be changed by hand on a player's lines, with a reason, never below 0.
- **Zero-sum:** the price is taken from the winner and shared equally among the set's other players who have been in voice at the operation (so far, if it is still going). Shares are whole points; when they do not divide evenly, a few players get one more, so the set always adds up to exactly zero. An item can only be given with a cost on an operation, with someone else there to share it. Leave **May go below zero** on: otherwise a player needs points before winning anything.
- **Suicide Kings:** no cost and no points; the set is a list. Whoever takes an item goes to the bottom, and the players below them who have been in voice at the operation move up one. Those who were not there keep their place, so missing a raid does not cost anyone their spot. The list starts in name order; on **History → (the list)** you can move players up and down or **Shuffle** it to start fairly. Newcomers join at the bottom.

**Recording drops.** On the board, **+ Add a drop by hand**, or **Read a screenshot**:

1. In the game, press Print Screen with the loot window, chat line or bag showing.
2. On the board's Loot panel, paste it with Ctrl+V, or click **Read a screenshot** and choose the picture.
3. The drops are read for you and shown as rows: names spelled as on your item list, the amount, and who got each item when a chat line names a character (matched to your members' characters). A row the reader is unsure of is marked **Not sure: check this one**.
4. Untick anything that is not a drop, fix names and amounts, choose who got an item if you know, and **Add**. Nothing is added until you do. Rows with a player chosen are given out at once, paid with the set you choose above the rows.

The picture is shrunk on your computer, sent to our server and on to Anthropic's Claude to be read, and not kept. Each alliance has a number of reads a month by plan (100 in the beta), shown beside the button; when they are used up, enter drops by hand until the 1st. Reading is a help, not a judge: always look the rows over.

**Giving out.** **Give…** on a drop: who got it (and as which character), which set pays, the cost (filled in from the price list, times the amount), and a note (a loot council's reason, say). For EPGP the players are listed first in line first, with their priority; for a Suicide Kings list, in list order with their places and who was not there; for Zero-sum the form says how many will share the price. If a set does not let points go below zero and the player cannot afford it, it is refused with the reason, never trimmed. **Keep** marks a drop kept for the guild, **Sold** as sold.

**Take back** undoes a mistake: every line the award wrote is undone by a line of its own (the cost refunded, the gear points taken off, the Zero-sum shares taken back), and the drop can be given again. A Suicide Kings list goes back to how it was, unless it has changed since (another item given, or someone moved): then it is left as it is, the board says so, and you can put it in order by hand. Nothing is erased; every drop, award, take-back and read is in the log.

**The loot history** is on **History → Loot**: every drop, newest first, with who got it; find an item, or only your own. Everyone in the alliance sees what dropped and who got it. The cost shows to those who see that set's standings in full, and to the winner.

## The log

At the bottom of the **Alliance** tab, **Log** is the record of who changed what, newest first: clans and their leaders, requests, approvals and removals, officers, invite links, constant parties, operations, every roster move, bans and deleted accounts. Click **Show the log**; it loads a hundred entries at a time, with **Older entries** for more and a **Filter** box for a name or a word.

- A line that starts with **The server** is something done automatically, such as promoting a party's next member when its leader dropped out.
- An account that has since been deleted is shown as "a deleted account": the log keeps only its number.
- A clan's leader can read the part that concerns their own clan, on their **Clan** tab. Officers and members cannot read the log.

## How access is enforced

This matters for trust, so it is worth knowing.

- The server decides who may join each net, from the roster as it is at that moment. The app only shows what the server allows.
- When someone is moved, removed or banned, the server takes them out of the rooms they should no longer be in. A modified app cannot stay behind or get back in.
- A plain member can only ever hear their party, their clan and Broadcast. Command is only given to current leaders.
- Every roster move and every role change is recorded with who did it. Read it on the **Alliance** tab under **Log** (see below). Every join and leave on every net is recorded too; an operation's **Attendance** is worked out from them.
- Voice is never recorded.

No voice tool can stop a trusted member from relaying what they hear. The design limits how much any one person hears and keeps a record of who was listening.

## The service's operator

Warcryer is run as one service for many alliances. Whoever runs it has a page on the website, `/admin`, and no way into an alliance they are not a member of. In the one alliance they are in, they have its owner's tools.

That page lists every alliance with its owner, its size and when something last changed in it, and nothing of what is inside. From there the operator can delete an alliance (for example an abandoned one, or at its owner's request), ban an account from the whole service, and delete a player's account for them.

### Deleting a player's account

Players can delete their own account in the app (**Settings → Account → Delete my account**). If someone asks you to do it for them, for example because they can no longer sign in, the service's operator deletes it on the website's admin page under **Players**. Deleting removes the account and everything that belongs to it; a banned player stays banned. What is kept and why is set out in the [privacy policy](/privacy/).
