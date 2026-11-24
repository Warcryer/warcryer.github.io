// Tells the search engines that take part in IndexNow (Bing and others; the assistants that search the
// web lean on their indexes) which pages changed in a deploy. infra/deploy.sh runs it after the new
// release is live:
//
//   node tools/indexnow.mjs <release folder>          tell them
//   node tools/indexnow.mjs <release folder> --dry    only say what would be told
//
// The key is not a secret: it is the name and the content of a file at the site's root (public/<key>.txt),
// which is how the engines know the notice comes from the site. What was told last is kept beside the
// releases (.indexnow.json: an address and the hash of its page), so a deploy that changes one page names
// one page. A failure here never fails a deploy.
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const HOST = "warcryer.org";
const release = process.argv[2];
const dry = process.argv.includes("--dry");
if (!release || !existsSync(join(release, "sitemap-0.xml"))) {
  console.log("IndexNow: no release folder with a sitemap was named; nothing told.");
  process.exit(0);
}
const keyFile = readdirSync(release).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) {
  console.log("IndexNow: the release has no key file; nothing told.");
  process.exit(0);
}
const key = keyFile.slice(0, -4);
const stateFile = join(dirname(dirname(release)), ".indexnow.json");
const before = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, "utf8")) : {};

// Every address in the sitemap, with the hash of the page behind it. The names of the stylesheet and
// scripts change with any deploy that touches them, so they are left out of what is hashed.
const urls = [...readFileSync(join(release, "sitemap-0.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const now = {};
for (const url of urls) {
  const file = join(release, new URL(url).pathname, "index.html");
  if (!existsSync(file)) continue;
  now[url] = createHash("sha256").update(readFileSync(file, "utf8").replace(/\/_astro\/[^"' )]+/g, "")).digest("hex").slice(0, 16);
}
const changed = Object.keys(now).filter((u) => before[u] !== now[u]);
if (changed.length === 0) {
  console.log("IndexNow: no page changed; nothing told.");
  process.exit(0);
}
if (dry) {
  console.log(`IndexNow (dry): would name ${changed.length} of ${urls.length} pages:\n${changed.join("\n")}`);
  process.exit(0);
}
try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: changed }),
    signal: AbortSignal.timeout(20000),
  });
  if (res.status === 200 || res.status === 202) {
    // Only what was told is remembered: a page whose notice failed is named again next time.
    writeFileSync(stateFile, JSON.stringify(now, null, 1));
    console.log(`IndexNow: named ${changed.length} of ${urls.length} pages (answer ${res.status}).`);
  } else {
    console.log(`IndexNow: the notice was refused (answer ${res.status}: ${(await res.text()).slice(0, 200)}). It is tried again at the next deploy.`);
  }
} catch (e) {
  console.log(`IndexNow: could not be reached (${e?.message ?? e}). It is tried again at the next deploy.`);
}
