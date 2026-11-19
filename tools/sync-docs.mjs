#!/usr/bin/env node
// Copies the guides and the policies from the Windows app's repository into
// src/content/, so the site shows the same words as the app.
//
//   npm run sync-docs              # from the newest published release
//   npm run sync-docs -- v0.25.0   # from a given tag or branch
//
// The app's repository is the one place these are written; edit them there,
// then run this and commit what it changed. It reads the files from git at the
// chosen ref, so the app's working folder does not have to be on that ref.
// CLIENT_REPO overrides where that repository is (default ~/voice-client).

import { execFileSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = process.env.CLIENT_REPO || join(homedir(), "voice-client");
const GITHUB = "https://github.com/Warcryer/client";

const git = (...args) => execFileSync("git", ["-C", REPO, ...args], { encoding: "utf8" });

function newestRelease() {
  try {
    return execFileSync("gh", ["release", "view", "-R", "Warcryer/client", "--json", "tagName", "-q", ".tagName"], { encoding: "utf8" }).trim();
  } catch {
    console.error("Could not ask GitHub for the newest release; using the newest tag in the repository instead.");
    return git("describe", "--tags", "--abbrev=0", "main").trim();
  }
}

const ref = process.argv[2] || newestRelease();

// [file in the app's repository, where it goes, its address on the site]
const FILES = [
  ["docs/members.md", "guides/members.md", "/guides/members/"],
  ["docs/clan-leaders.md", "guides/clan-leaders.md", "/guides/clan-leaders/"],
  ["docs/alliance-admins.md", "guides/alliance-admins.md", "/guides/alliance-admins/"],
  ["docs/first-hour.md", "guides/first-hour.md", "/guides/first-hour/"],
  ["PRIVACY.md", "policy/privacy.md", "/privacy/"],
  ["TERMS.md", "policy/terms.md", "/terms/"],
];

// A link as written in the app's repository, relative to the file it is in,
// becomes the site's address for the same thing.
function rewrite(target, from) {
  if (/^(https?:|mailto:|#)/.test(target)) {
    if (/^https:\/\/(ignite\.v1rtopia\.com|app\.warcryer\.org)\/status\/?$/.test(target)) return "/status/";
    return target;
  }
  const [file, hash] = target.split("#");
  const dir = dirname(from);
  const resolved = join(dir, file).replace(/^\.\//, "");
  if (/(^|\/)releases$/.test(file)) return "/download/";
  const known = FILES.find(([src]) => src === resolved);
  if (known) return known[2] + (hash ? `#${hash}` : "");
  // Anything else in the repository (source code, say) is shown on GitHub.
  return `${GITHUB}/tree/${ref}/${resolved}` + (hash ? `#${hash}` : "");
}

let changed = 0;
const unknown = new Set();
for (const [src, dest] of FILES) {
  let text = git("show", `${ref}:${src}`);
  text = text.replace(/\]\(([^)\s]+)\)/g, (_m, target) => {
    const to = rewrite(target, src);
    if (to.startsWith(`${GITHUB}/tree/`)) unknown.add(`${src}: ${target}`);
    return `](${to})`;
  });
  const out = join(ROOT, "src/content", dest);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, `<!-- Copied from ${GITHUB}/blob/${ref}/${src} by tools/sync-docs.mjs. Edit it there, not here. -->\n\n${text}`);
  changed++;
}
writeFileSync(join(ROOT, "src/content/source.json"), JSON.stringify({ ref, copied: new Date().toISOString().slice(0, 10) }, null, 2) + "\n");
console.log(`copied ${changed} files from ${ref}`);
for (const u of unknown) console.log(`  linked to GitHub: ${u}`);
