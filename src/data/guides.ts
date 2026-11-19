// The guides, in the order they are offered. Their text is copied from the
// app's repository by tools/sync-docs.mjs into src/content/guides/.
export const GUIDES = [
  {
    slug: "members",
    name: "Members",
    for: "Everyone. Read this one first.",
    covers: "Installing, signing in, your class and level, invite links, talking and keys, chat, signing up for events, being moved, leading a party, the compact strip, updates, settings, deleting your account.",
  },
  {
    slug: "first-hour",
    name: "Your alliance's first hour",
    for: "Whoever starts an alliance.",
    covers: "From installing to a first planned operation, step by step.",
  },
  {
    slug: "clan-leaders",
    name: "Clan leaders and officers",
    for: "Clan leaders and their officers.",
    covers: "Approving members, invite links, officers, the crest, constant parties, your clan's parties in an operation, Discord announcements, attendance and history, the clan log.",
  },
  {
    slug: "alliance-admins",
    name: "Alliance admins and event leaders",
    for: "Alliance owners, admins and event leaders.",
    covers: "Clans, game setup, operations and changing them, reusing a roster, who is coming, the roster board and what each party needs, briefings, chat, attendance and history, bans, the log, owning an alliance.",
  },
] as const;
