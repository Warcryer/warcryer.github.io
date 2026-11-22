<!-- Copied from https://github.com/Warcryer/client/blob/v0.40.0/docs/members.md by tools/sync-docs.mjs. Edit it there, not here. -->

# Guide for members

You never pick a voice channel in this app. Your place in the roster decides what you hear and where you can speak, and when an organiser moves you, your voice follows.

## Getting started

1. **Install.** Download the newest installer from the [Releases page](/download/). It is not code-signed yet, so Windows shows a blue SmartScreen warning: click **More info**, then **Run anyway**. You only do this once: after that the app [updates itself](#updates-and-the-tray-icon).
2. **Sign in.** Click **Sign in with Discord**. Your browser opens, you approve, and the app continues by itself. The app receives your Discord account ID and name only: no email, no server list, never your password.
   - If the app does not continue, the browser page has a section called **The app did not open** with a code. In the app, open **Enter code instead** and paste it.
3. **Your name.** Enter your in-game name exactly as it appears in game. Within an alliance a name belongs to one account, as it does in the game: if yours is already taken, tell your clan leader. Which characters a name may have depends on the game your alliance plays; if yours does not fit when you use an invite link, the app says so and you change it in **Settings**.
4. **Setup wizard.** Three short steps: choose your microphone and headset, record three seconds and hear them back, then choose how you talk (see [Talking](#talking)).
5. **Join your alliance and clan.** An alliance is the group of clans that plays together; everything in the app (clans, operations, voice) belongs to one alliance and is seen by nobody outside it. You come in with an **invite link** from your clan's leader or an officer. Open the link and click **Open in Warcryer**; the app names the clan and its alliance and asks before it joins you. Or paste the link on the **Clan** tab under **Have an invite link?**. Depending on how the link was made, you are let in at once or wait for a leader or officer to approve you. Until then you cannot hear anything.
   - **No link, and your alliance does not use the app yet?** Start it yourself: on the **Clan** tab, under **Or start your own**, give it a name and pick the game. During the beta you also type a beta code, which you get by asking on the [Warcryer Discord](https://discord.gg/qf4meEMfhp). You become its owner. The [alliance admins guide](/guides/alliance-admins/#your-alliance) takes it from there.
   - You are in one alliance at a time.
6. **Your class and level.** Once you are in an alliance, the line under the tabs asks **Which class do you play?** Click **Choose class** and pick your main character's class and level from the lists. They are your alliance's own lists, set up for the game you play; an alliance that does not use levels will not ask for one. Both are shown beside your name on rosters, so organisers can see which parties still need a buffer or a healer. Change them any time in **Settings**, at the bottom; move the level up when you reach the next band.

Once approved you land in your clan's lounge automatically.

## Help inside the app

- **Scroll icons.** Small scroll icons sit beside nets, headings, buttons and settings. Point at one, tab to it, or click it for a short explanation. Nothing pops up unless you ask for it.
- **Guides.** The **Guides** tab holds this guide and the ones for clan leaders and alliance admins, matching the version you have installed.

## Where you are

The **Voice** tab always shows where you are and who is there. It has three parts:

- **Left, your nets:** everything you hear, one line each for who is speaking and how you speak there. Click a net to see who is on it.
- **Middle, your room:** its name, everyone in it, and under it the room's chat.
- **Right, your alliance right now:** its groups and who else is online. During an operation this side shows the operation and its parties instead.

Anything that waits for your answer (an operation asking whether you are coming, a player asking to join your party, a new version, a key still to bind) is on **one line under the tabs**. When more than one thing waits, the line shows the most pressing and a count; click the count for the rest.

| Situation | Where you are |
| --- | --- |
| No operation is live | Your clan's **lounge**: everyone in the clan who has the app open |
| An operation you belong to goes live | Pulled into the operation automatically |
| The operation ends | Back in the lounge automatically |

If the alliance has switched on the **alliance lounge**, you hear two lounges between events: your clan's and one shared by every clan. Your key and voice go to one of them at a time; click **Talk here** on the other to switch.

### Groups

Between operations you can sit in a **group**: a small room for a few of you, for a dungeon, farming, crafting or just a chat. The panel on the right of the Voice tab lists them, your own first.

- **Start a group** with an optional name ("Catacombs"); without one it goes by your name. Anyone in the alliance can start one.
- **Join** any group of the alliance, whatever your clan. You are in one group at a time: joining another moves you.
- Each group shows its name, how many are in it, and their names as far as they fit. Click it to see its players one by one.
- In a group your Party key (or your voice, on voice activation) goes to the group, and you still hear your clan's lounge underneath, quieter. Click **Talk here** on the lounge to speak there instead, and on the group to go back. How loud the lounge stays is in **Settings**, under Priority; at 0 you do not hear it at all.
- **Leave** when you are done. A group ends when its last player leaves, or when none of its players has had the app open for ten minutes.
- A live operation still pulls you onto its nets. When it ends you are back in your group, if it is still there.
- A clan's leader and officers can take their own members out of a group, and the alliance's admins anyone.
- Nothing about a group is kept, and time in one counts for nothing: not attendance, not points.

### Your leaders between operations

Between operations you are also on your clan's **Clan** net, as you are during an operation: your clan's leader and officers speak there with their Clan key, and you listen. While they speak, your lounge and group are made quieter so the call is heard, and come back when it ends. If your alliance has switched it on, an **Alliance broadcast** net works the same way for the alliance's admins.

When something will not wait (a world boss, a castle under attack), an alliance admin can start a **Call to arms**: an operation that goes live at once and pulls you onto its nets. Your group becomes its party; if you are in none, you wait in Reserve. When it ends you are back where you were.

### Who is online, and away

Between operations, the panel on the right of the Voice tab shows your alliance as it is now, whatever the clan: the groups with the players in them, and under them everyone else who has the app open, in the lounge, in an operation, or away. Click a heading to fold its list away.

- **Set me away** shows you as away; **I'm back** clears it. On the desktop app you are also shown as away when your computer has had no key or mouse input for 15 minutes, and back as soon as you use it again. The app asks Windows only how long it has been idle, never which keys.
- Away changes nothing about voice: you still hear and can be heard.
- Players of other alliances never see you there.

### Chat between operations

The lounges and groups have a chat too, under your room: a tab for your group, your clan's lounge, and the alliance's lounge if it is on.

- Everyone in a room can write in it, and only those in it read it.
- Quick calls go to your group, or to your clan's lounge when you are in none. **Open as a window over the game** works here too.
- Drag the chat's top edge to make it taller or shorter (double-click the edge to put it back). **Fold** puts its lines away and keeps the line you write in; an order and a ready check still show.
- Point at your own line to remove it. Your clan's leader and officers can remove lines in its lounge, and the alliance's admins anywhere.
- A lounge's lines are kept as long as your alliance keeps an operation's, and at least a day. A group's go when the group ends.

When there are operations, a **You are in** picker appears at the top of the panel on the right. Use it to sit a live operation out in the lounge, or to join a planned operation early. If you choose the lounge during a live operation, you stay there for that operation; the next one that starts pulls you in again.

During an operation the panel on the right shows the operation itself: whether it is live, **Open the roster board**, the **You are in** picker, and its **parties** at a glance, with who leads each and how full it is; yours is marked. Click a party to see its players. Other players' moves show there within about twenty seconds, your own within a second or two.

## Nets

During an operation you listen to several nets at once. They are listed on the left of the Voice tab, highest priority first.

| Net | You hear | Who can speak |
| --- | --- | --- |
| **Broadcast** | The event leader's calls to everyone | Event leader and deputies |
| **Command** | Only if you are a leader | Event leader, deputies, clan leaders, party leaders |
| **Clan** | Your clan's orders | Clan leader and officers |
| **Party** | Your party | Everyone in the party |
| **Reserve** | Others waiting for a party | Everyone without a party, and the organisers |

A plain member hears Broadcast, Clan and their Party. Each card shows who is speaking and how you talk there ("Hold Mouse 4", "Voice activated", or "Listen only").

**Click a net** to see everyone connected to it. **Click a player** to set your own volume for them or mute them. That changes only what you hear, and is remembered on your computer.

## Talking

Party, Reserve and the lounge work the same way, and you choose one of two modes:

- **Push-to-talk.** Hold a key and speak. Mouse side buttons work. One key, the **Party** key, is used for your party and for the lounge.
- **Voice activation.** The mic opens when you speak. Set the marker on the level bar above your background noise and below your voice, or click **Auto** and stay quiet for five seconds. Short sounds such as a key click or a knock on the desk do not open it.

Broadcast, Command and Clan are always push-to-talk, each with its own key. If you are given a role that can speak on one of them, the app asks you to bind a key for it.

Good to know:

- Your keys are never taken from the game. The game still receives them.
- Speaking on one net never mutes what you hear on the others.
- While you hold a Broadcast, Command or Clan key, your voice goes only to that net; voice activation pauses.
- **Mic and headset buttons**, at the top right of the app: click the microphone to turn your mic off or on, and the headset to stop hearing anyone. Red and crossed out means off. The microphone turns green while your mic is open, and the foot of the Voice tab says on which net. With the headset off your mic is off too; turning the headset on again puts your mic back the way it was. While your headset is off, the others in your nets see a red, crossed-out headset beside your name, so they know you cannot hear them; whether your mic is off is not shown. The compact strip has the same two buttons.
- The **Mute all** key does what the mic button does, and the **Headset** key what the headset button does, without leaving the game. Both are set in Settings → **Keys**.

Change any of this in **Settings**.

## Chat

An operation has a text chat beside its voice: on the **Voice** tab, under the list of who is connected. It is for what voice is bad at: a name to assist, a time to regroup, a late arrival catching up, or when you cannot talk.

- **A tab for each of your nets.** What is written on a net is read by whoever is on it, the same people who hear it. Your party's lines are your party's.
- **Who may write follows who may speak.** Everyone writes in their own party and in Reserve. On Broadcast and in your clan's channel you read unless you are one of those who speak there, or your alliance's admins have opened it to everyone. The line you type in says which it is.
- **A dot on a tab** means lines you have not seen. When you join late, or come back after a dropped connection, you are given the last lines of each net.
- **Your own lines** can be removed: point at one and click **remove**. Those who run the operation can remove any line they can read, and switch a player's writing off for that operation.
- **It is kept** with the operation, for as long as your alliance's admins have chosen, and you can read it back on the operation's board afterwards (**Show the chat**). Voice is never recorded; what you type is.

### The order, and the ready check

- **The order** is one line that whoever runs the operation pins for everyone: what you are doing right now. It stays at the top of the chat, in red, until it is replaced or cleared, and it shows on the compact strip too, so you see it without the chat open. A new order comes with a short low sound and is lit for a few seconds. Each order is also a line on Broadcast, so you can read back what the orders were.
- **A ready check** is the organisers asking everyone at once: ready? You get a line with **Ready** and **Not ready**, a short rising sound, and half a minute. Click one, or bind a **Ready** key (Settings → Keys) and answer without leaving the game. The organisers see who is not ready and who has not answered; everyone sees the count, and the result is a line on Broadcast. Not answering counts as no answer, nothing more. Your alliance's admins can switch ready checks off.

### Quick calls

A quick call is a short line you send with one key, without typing: "Need res", "Out of mana". Your alliance's admins choose the list, to fit your game.

- **Bind keys** in **Settings → Keys**, under **Quick calls**: one key for each call you want. Calls you bind no key to stay unused. Pick keys the game does not use, because the game receives them too.
- **A call goes to your party's chat**, or to Reserve while you have no party. It is marked with **▸**, the others hear a short sound, and it shows on their strip for a few seconds, so nobody needs the chat open to see it.
- **One press, one call.** Holding the key or hammering it sends it once; calls are at least a second and a half apart.
- You can also click: in your party's tab of the chat, **Calls** lays the list out as buttons.
- Outside an operation the keys do nothing. If your writing has been switched off for the operation, so are your calls.

### The chat window over the game

On the Voice tab, **Open as a window over the game** turns the compact strip into a chat window: who is speaking on top, the chat underneath. It stays on top of the game, so put it where the game's own chat box is.

- Drag it by its top line; size it from its edges or the bottom right corner, and it keeps that size, whatever happens in the chat, and the next time it opens. The slider in its top line makes it more or less see-through. **▴** folds it back into the strip, **×** closes it.
- **The Chat key** (Settings → Keys) lets you type without leaving the game: press it, type, **Enter** sends and the game has the keyboard again. **Esc**, or the Chat key again, gives up. Pick a key the game does not use, because the game receives it too.
- While you type, your talk keys are just letters: they open no mic.
- You can also click in the line and type; Enter gives the keyboard back to the game the same way.
- Like the strip, it is a window and not an overlay: a game in exclusive full screen hides it, so run the game windowed or borderless.

### The app in your language

Open **Settings → Language** and choose **Your language**. The app changes to it at once: every tab, the chat, the notices, **Settings**, the compact strip, and what the server answers when it refuses something. The choice belongs to your account, so it follows you to another computer.

- Twelve languages: English, French, German, Spanish, Brazilian Portuguese, Romanian, Polish, Lithuanian, Greek, Russian, Ukrainian and Turkish.
- Still in English: these guides, the log that admins and clan leaders read, what the app posts to Discord, and the web pages you pass when signing in or using an invite link. They will follow.
- What your alliance set up for its game is shown as your admins wrote it: classes, roles, kinds of event, quick calls, the names of its points.
- Names people chose stay as they are: a clan's, a party's, a group's, an operation's. If your alliance has its own words for "clan" or "party", those are used in English; other languages use their usual game words.
- The translations were made by a machine and nobody has checked every line. If something reads wrong or odd in your language, use **Tell us on the Warcryer Discord** under the language choice in Settings: say the language, the screen and what it should say.

### Chat in your language

Players of different countries share one chat. You can have it translated into the language you read.

1. Open **Settings → Language** and choose **Your language**. (The same choice sets the language the app is shown in: see [The app in your language](#the-app-in-your-language).)
2. Tick **Translate the chat into my language**.

From then on, in the lounges, in groups and in operations:

- A line written in another language appears at once, as it was written. A second or so later it changes to your language and is marked **translated**.
- Click **translated** to see the line as it was written; click again for the translation.
- Lines in your own language, and lines with nothing to translate (names, numbers, "gg", a link), stay as they are. Quick calls and orders are translated like any line.
- What you write is never changed for you. Each reader's own switch decides what they see, so a clan mate with translation off reads your line exactly as you typed it.
- Lines written before you switched translation on, or while nobody who reads your language was on that net, stay as written.

A machine does the translating. It keeps game talk the way players write it ("buff", "res", class abbreviations, names), and it is sometimes wrong, more often with slang and in the smaller languages. When a line matters, look at the original.

To translate a line, it is sent from our server to Anthropic (the maker of Claude) when at least one reader on that net has translation on; no name or account goes with it. Your alliance's admins can switch translation off for the whole alliance, and then nothing is sent. The [privacy notice](/privacy/) has the details.

## When a higher net is live

While someone speaks on a higher net, the nets below it get quieter for you (30% by default) and return when the higher net goes quiet. So a Broadcast call cuts through party chatter without silencing it. Turn this off or change the level in **Settings → Priority**.

While a higher net is live, the nets below it show **Lowered** on the Voice tab, so you can see why they went quiet.

## Signing up for an event

When an event is planned for your clan, the app asks whether you are coming. The organiser builds the parties from the answers, so answer early.

- **Where:** a line at the top of the **Voice** tab names the event and its time, with two buttons. The same buttons are on the **Operations** tab beside each event, and a **?** on that tab means an event is still waiting for your answer.
- **Coming:** you go to the top of the organiser's list of players to place. **Can't come:** the organiser knows not to count on you. Change your answer whenever you like.
- **Another character:** open the event (click it on the Operations tab) and choose **Another character or a note**. Pick one from your list of other characters, or enter a name, class and level, for this event only; your profile stays as it is. The note is for the organiser, for example that you will be late.
- **Your other characters:** in **Settings**, under **Account**, **Other characters** keeps a standing list of the characters you play beside your main: name, class and level, and a tick for a **box** (one you play at the same time as your main, on a second game client). Your clan sees the list on its roster and organisers see it on an operation's board, so they know what you can bring without asking.
- **If you lead a constant party,** the event's board offers **Sign up the whole party**. It marks every member as coming in one go. Members who already answered keep their own answer.
- Your answer does not change your voice. When the event starts, everyone on its roster is pulled in as before, whatever they answered.

## Your record

The **History** tab shows what you came to: every operation your clan took part in while you were a member, newest first, with how long it ran, how long you were in voice, what you had answered, and the party and character you came as. Three figures sum it up: operations attended, times you said you were coming and did not show, and the share of the time you stayed.

Choose how far back to look at the top. The record is kept until the operation is deleted by an alliance admin or you delete your account, which removes you from every operation's record at once. Your clan's leader and officers see the same record for the time you were in their clan, and your alliance's admins see it all; other members do not.

## Your points

If your alliance keeps points (it may call them DKP, EP or something else), the **History** tab has a tab for them, and one more if your clan keeps its own. **My own lines** lists every change to yours, newest first: what each operation gave you, and anything given or taken by hand, always with the reason and who did it. You always see your own; whether you also see everyone's standings is your alliance's or clan's choice.

Points are earned at operations, from your time in voice: how much is up to your alliance, and **How (your points) are earned**, under the standings, lists every rule. Each line says why, for example "there 10, on time 2, Boss kill 5". After an operation, a leader looks over what everyone earned and posts it, so your points for an operation can take a little while to appear. If your alliance uses decay or seasons, those show as lines of their own too.

## Loot

**History → Loot** lists what dropped at your alliance's operations and who got it; tick **Only mine** for your own. When an item is paid for with points, the cost shows on your points' lines with the item's name, and as **On loot** in the standings. If a leader takes an item back, the cost comes back to you on a line of its own.

Depending on how your alliance hands out loot:

- **EPGP:** an item adds to your gear points (GP) instead of taking points. Your priority, effort points divided by gear points, decides who is first in line; it is in the standings.
- **Zero-sum:** when someone else wins an item at an operation you were in voice for, you get a share of what they paid, on a line naming whose item it was.
- **Suicide Kings:** the standings are a list. Taking an item sends you to the bottom; when someone above you takes one and you were there, you move up. Missing an operation does not cost you your place.

## Being moved, and asking to move

- When an organiser moves you to another party, you hear a short cue, a line tells you where you went, and your voice switches within a second or two. You do nothing.
- To ask to join a party yourself, open **Operations**, open the operation, and click **Ask to join** on the party. Its leader accepts or declines. You can cancel, and asking a different party replaces the first request.
- Each party on the board shows what kind of group it is (a mage group, a stopper group and so on), whether it is **Full**, and under **Needs** the support roles it has nobody for yet. That tells you where your class is wanted.

## If you lead a party

The first player placed in a party leads it. A party leader:

- Is on **Command** as well as their party, and should bind a Command key.
- Sees join requests on the Voice tab ("X asks to join Party 1") and answers with **Accept** or **Decline**.
- Is told so when it happens ("You now lead Vanguard"), for example after the previous leader dropped out.
- Can send one of their own members to Reserve from the roster board, rename the party, choose its group type, and hand leadership to another member.
- Sees on the board what the party still needs: **Needs** lists the support roles (Buffer, Bard, Recharger, Healer) that nobody in the party covers yet.

If you are moved out of your party, leadership passes to the next member automatically.

## Leaving or changing your clan

On the **Clan** tab, **Leave clan** takes you out of your clan: its lounge and Clan net, its constant parties, and your party places in operations still to come. You can then ask to join another clan, and wait to be approved there.

If you are moving to another clan of the same alliance, ask an alliance admin instead. They can move you across in one step, already approved, and your voice follows you to the new clan's lounge at once.

A clan's leader cannot leave until an alliance admin has appointed another leader.

### Leaving the alliance

Once you are in no clan, the **Clan** tab also offers **Leave this alliance**. It takes you out altogether; your account, name and settings stay. You can then join another alliance with an invite link from one of its clans, or start your own.

## Constant parties

If you always fight with the same group, your clan's leader or officers can save it as a **constant party**. You can see your clan's constant parties on the **Clan** tab, with yours marked. Organisers put a constant party on an operation's board with one click, so you are in the right party from the start. If you lead a constant party, you can rename it, change its members and hand leadership on from that same screen.

## If your party leader drops out

A party's leader is its only voice on Command. If the leader drops out of a live operation (the app closed or crashed, the connection died, or they are sitting the operation out), the party is not left waiting:

1. After about 30 seconds a bar appears for everyone in the party: "**Orin has dropped out.** Vanguard has no one on Command. Who leads it now?" Click **I will**, or the name of another member who is in voice. The leader's clan officers see the same bar and can choose too.
2. If nobody chooses within another 30 seconds, the next member in party order who is in voice becomes the leader automatically.

The new leader is told ("You now lead Vanguard") and is on Command at once, so bind a Command key if you have not. If the old leader comes back before anyone is chosen, the bar goes away and they still lead. If they come back afterwards, they are an ordinary member again; the new leader or an organiser can hand leadership back.

## Browser version

`https://app.warcryer.org/voice` is the same app in a browser, for a quick look or a second PC. Sign in on the site first. Its keys only work while the browser tab has focus, so use the Windows app for events.

## One connection per account

Your account can have one voice connection at a time. Opening the app somewhere else disconnects the first one, which shows **Reconnect here**.

## The compact strip

You do not have to switch to the app to see who is talking. Tick **Show the compact strip** in **Settings → Window and updates** and a small window appears that stays on top of other windows. It shows one line for each net with someone speaking: the net, the speakers with their clan's crest, and **You** while your own mic is open. When nobody is speaking it shrinks to one line saying where you are.

- **Drag** it wherever suits you; it remembers the place.
- **Make it narrower or wider** by dragging its left or right edge; it remembers the width. Its height follows what it shows.
- **Double-click** it to bring the app forward.
- **▾** opens it into the [chat window](#the-chat-window-over-the-game): the operation's chat under the line of who is speaking.
- **×** closes it; switch it on again in Settings, with the Chat key, or with **Open as a window over the game** on the Voice tab.

It sits over a game that runs in a window or in borderless mode. A game in exclusive full screen covers it, because the app never draws inside the game.

## Updates and the tray icon

When you open the app, a sword fills with red for about three seconds while it connects, then the app appears. The Windows app also keeps itself up to date: if a new version is waiting when you start it, the sword shows the download, the update installs (a few seconds) and the app opens by itself afterwards. If one arrives while the app is running, a bar offers **Restart to update**; nothing restarts until you click it, so it never interrupts an operation. The version you are running is shown at the top of **Settings**, beside the title.

While the app runs, its horn icon sits in the Windows tray beside the clock. Click it to bring the window to the front; right-click it for **Quit**.

Closing the window quits the app and takes you out of voice. If you would rather it kept running, tick **Keep running in the tray when I close the window** in **Settings → Window and updates**. Then closing only hides the window, you stay in voice, and you leave with the tray icon's **Quit**.

## Settings at a glance

**Settings** is the button at the top right. Each switch has a scroll icon that explains it; this is the map.

| Group | What is there |
| --- | --- |
| **Devices** | Your microphone and headset, the three-second test, and three clean-up switches: echo cancellation, noise suppression and auto gain. Leave them on unless something sounds wrong. |
| **Party, Reserve and lounge** | Push-to-talk or voice activation for the nets you chat on, with the sensitivity marker and how long the mic stays open after you stop. |
| **Language** | The language the app is shown in, and **Translate the chat into my language**. See [The app in your language](#the-app-in-your-language) and [Chat in your language](#chat-in-your-language). |
| **Keys** | One key per net you may speak on, plus **Mute all** and **Headset**. Mouse side buttons work. **Broadcast lock** is for event leaders only. **Ready** answers a ready check. **Quick calls** send one of your alliance's short lines to your party. **Chat** puts the keyboard in the chat window's line while the game is in front. |
| **Volume** | Your own level for each net. |
| **Priority** | Whether lower nets get quieter while a higher one is live, and how quiet. |
| **Sounds** | The cue you hear when you are moved, and its volume. |
| **Key capture** | How keys are read while the game is in front. Leave it on **Automatic**, which uses Polling and Raw Input together, unless told otherwise. |
| **Window and updates** | The compact strip, keeping the app running in the tray, automatic updates, and **Check for updates**. |
| **Help** | Opens these guides, and **Is the service working?** opens the status page, which says whether the service itself is up. |
| **Account** | Your in-game name, class and level, your other characters, **Sign out**, and **Delete my account**. |

Everything here is kept on your computer, except your name, class and level and your other characters.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| Keys do nothing while the game is in front | Settings → **Key capture**: make sure **Automatic** is selected. If it still fails, tick **Always start as administrator** and restart the app. |
| A banner says the sound is held back | Click **Enable audio**. |
| You hear no one | Check the headset button at the top right is not red and crossed out, and that the right speakers or headset is chosen in Settings → Devices. |
| Nobody hears you | Check the level bar moves in Settings → Devices, that the right microphone is chosen, and that the mic button at the top right is not red and crossed out. |
| A net says **Relinking…** | Your connection to the voice server hiccupped. You still hear the net, and anyone already talking is still heard; a key you press now is not heard until the word is gone, usually within a second or two. Nothing to do. If it happens often, see the next row. |
| **Relinking…**, **Reconnecting…** or "Server link lost" keep coming back | The app gets its connection back by itself each time, so you can carry on. First ask whether others in your clan see it at the same moments: if they do, the fault is on the service's side, so tell us on the Discord. If it is only you, it is the connection between your computer and the server: try a network cable or sitting closer to the router, and switch off a VPN to see whether it is that. |
| "Microphone problem" banner | Allow microphone access for the app in Windows privacy settings, then click **Try again**. |
| "Server link lost, retrying…" | Your voice keeps working. The app reconnects by itself; only roster changes wait until it does. |
| A net shows "Disconnected, retrying…" | It rejoins by itself within a few seconds. If your network blocks voice traffic entirely, tell an admin. |
| You were signed out | Someone signed in with your account elsewhere, or you were removed. Sign in again. |
| An invite link's **Open in Warcryer** button does nothing | The app is not installed yet, or the browser blocked the link. Install the app, or copy the invite page's address and paste it on the **Clan** tab under **Have an invite link?** |
| An invite link "no longer works" | It expired, ran out of uses or was withdrawn. Ask your clan's leader or an officer for a new one. |
| You closed the window but others still see you in voice | **Keep running in the tray** is on. Click the horn icon beside the Windows clock to bring the window back, or right-click it and choose **Quit**. |
| The compact strip does not show over the game | The game is in exclusive full screen. Switch it to windowed or borderless mode in the game's own options. |
| The app does not update | **Settings → Window and updates → Check for updates** says where it stands. If it reports a problem, download the newest installer from the Releases page and run it over the top; your settings are kept. |
| A bar says your party leader has dropped out | Click **I will** or a member's name. See [If your party leader drops out](#if-your-party-leader-drops-out). |

## What is stored about you

On the server: your Discord account ID and name, your in-game name, class and level, the other characters you list, your clan membership and who approved you, your constant party, your answer to each event (coming or not, and another character or a note if you gave one), your place in each operation's roster, when you joined and left each net, and your points if your alliance or clan keeps them. From those times, the organisers of an operation and your clan's leader and officers can see how long you were in voice during it. Voice is never recorded. Key bindings, audio settings and your per-player volumes stay on your computer.

To remove all of it, open **Settings → Account → Delete my account**. It asks once more before deleting, and cannot be undone. The full details are in the [privacy policy](/privacy/).
