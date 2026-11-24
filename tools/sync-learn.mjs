// Fetches the Learn section's published articles from the Warcryer service and writes them where the
// build reads them: src/data/learn.json (the articles, already drawn as HTML), src/styles/learn-article.css
// (the look of an article's text, the same file the editor's preview uses) and public/learn-img/ (the
// pictures the articles show, fetched from the service by name). `npm run build` runs this first, so every
// build of the site holds exactly what is published at that moment.
//
//   node tools/sync-learn.mjs           fails if the service cannot be reached: a build must never
//                                       quietly drop the articles
//   node tools/sync-learn.mjs --soft    for working on the site: keeps what is there, or starts empty
//
// LEARN_API says where to ask (default: the live service).
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(root, "src/data/learn.json");
const CSS = join(root, "src/styles/learn-article.css");
const PICTURES = join(root, "public/learn-img");
const API = process.env.LEARN_API ?? "https://app.warcryer.org/api/learn/published";
const soft = process.argv.includes("--soft");
const EMPTY = { stamp: "", site: "https://warcryer.org", categories: [], articles: [], moved: [], images: [], css: "" };

const text = (v) => typeof v === "string";
function sound(x) {
  if (!x || !text(x.stamp) || !Array.isArray(x.categories) || !Array.isArray(x.articles) || !Array.isArray(x.moved) || !text(x.css)) return "it is not an export";
  for (const c of x.categories) if (![c.key, c.name, c.slug, c.path, c.description].every(text)) return "a category is incomplete";
  for (const a of x.articles) {
    if (![a.categoryKey, a.slug, a.path, a.title, a.description, a.promise, a.html, a.firstPublishedAt, a.publishedAt].every(text) || !Array.isArray(a.toc) || !Array.isArray(a.faq) || !Array.isArray(a.related)) return `the article ${a?.slug ?? "?"} is incomplete`;
    const category = x.categories.find((c) => c.key === a.categoryKey);
    if (!category || a.path !== `${category.path}${a.slug}/` || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug)) return `the article ${a.slug} has a bad address`;
  }
  // The pictures (an export from before there were any has none).
  for (const i of x.images ?? []) if (!text(i.file) || !/^[a-z0-9]{4,24}\.(png|jpg)$/.test(i.file) || i.from !== `/api/learn/image/${i.file}` || i.path !== `/learn-img/${i.file}`) return "a picture is not as expected";
  for (const a of x.articles) for (const m of a.html.matchAll(/<img src="([^"]*)"/g)) if (!(x.images ?? []).some((i) => i.path === m[1])) return `the article ${a.slug} shows a picture the export does not list`;
  for (const m of x.moved) if (!/^\/learn\/[a-z0-9-]+\/[a-z0-9-]+\/$/.test(m.from) || !x.articles.some((a) => a.path === m.to)) return "a moved address is bad";
  return null;
}

function write(x) {
  mkdirSync(dirname(DATA), { recursive: true });
  const { css, ...data } = x;
  writeFileSync(DATA, `${JSON.stringify({ ...data, images: data.images ?? [] }, null, 1)}\n`);
  writeFileSync(CSS, css || "/* No articles are published yet. */\n");
}

/** Fetches the pictures that are not here yet (a picture never changes under its name) and clears out the ones no article shows any more. */
async function pictures(images) {
  mkdirSync(PICTURES, { recursive: true });
  for (const i of images) {
    const file = join(PICTURES, i.file);
    if (existsSync(file) && statSync(file).size > 0) continue;
    const res = await fetch(new URL(i.from, API), { signal: AbortSignal.timeout(60_000) });
    const bytes = Buffer.from(await res.arrayBuffer());
    const png = bytes.subarray(1, 4).toString() === "PNG";
    const jpg = bytes[0] === 0xff && bytes[1] === 0xd8;
    if (!res.ok || !(i.file.endsWith(".png") ? png : jpg)) throw new Error(`the picture ${i.file} could not be fetched (${res.status})`);
    writeFileSync(file, bytes);
  }
  for (const f of readdirSync(PICTURES)) if (!images.some((i) => i.file === f)) unlinkSync(join(PICTURES, f));
}

try {
  const res = await fetch(API, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`${API} answered ${res.status}`);
  const x = await res.json();
  const wrong = sound(x);
  if (wrong) throw new Error(`${API}: ${wrong}`);
  await pictures(x.images ?? []);
  write(x);
  console.log(`Learn: ${x.articles.length} published ${x.articles.length === 1 ? "article" : "articles"}, ${(x.images ?? []).length} ${(x.images ?? []).length === 1 ? "picture" : "pictures"} (${x.stamp}).`);
} catch (e) {
  if (!soft) {
    console.error(`Learn: the published articles could not be read (${e.message}). Nothing was built; the site that is live stays as it is.`);
    process.exit(1);
  }
  if (existsSync(DATA) && existsSync(CSS)) console.warn(`Learn: could not ask the service (${e.message}); keeping the ${JSON.parse(readFileSync(DATA, "utf8")).articles.length} articles already here.`);
  else {
    write(EMPTY);
    console.warn(`Learn: could not ask the service (${e.message}); starting with no articles.`);
  }
}
