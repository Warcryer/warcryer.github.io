// After a build: every published article has its page, every old address forwards, and no link inside an
// article leads to a page of ours that was not built. A build that fails this is not deployed.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const learn = JSON.parse(readFileSync(join(root, "src/data/learn.json"), "utf8"));
const page = (path) => join(root, "dist", path, "index.html");
const wrong = [];

if (!existsSync(page("/learn/"))) wrong.push("the Learn front page was not built");
for (const a of learn.articles) {
  if (!existsSync(page(a.path))) {
    wrong.push(`no page for ${a.path}`);
    continue;
  }
  const html = readFileSync(page(a.path), "utf8");
  if (!html.includes("<h1")) wrong.push(`${a.path} has no title`);
  for (const m of a.html.matchAll(/href="(\/[^"#?]*)/g)) if (!existsSync(page(m[1])) && !existsSync(join(root, "dist", m[1]))) wrong.push(`${a.path} links to ${m[1]}, which is not a page`);
  if (!existsSync(page(learn.categories.find((c) => c.key === a.categoryKey).path))) wrong.push(`no category page for ${a.path}`);
}
for (const m of learn.moved) if (!existsSync(page(m.from))) wrong.push(`the old address ${m.from} does not forward`);

if (wrong.length) {
  console.error(`Learn: the build is not sound:\n  ${wrong.join("\n  ")}`);
  process.exit(1);
}
console.log(`Learn: ${learn.articles.length} article pages checked.`);
