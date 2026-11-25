// The site as plain Markdown, for AI assistants and anything else that reads text better than pages:
// /llms.txt (an index, after the llms.txt proposal), /llms-full.txt (everything in one file) and one file
// for each page under /llms/. They are built from the same data as the pages, so they cannot drift apart.
//
// The files end in .txt, not .md: the web server sends .txt as text, and would send .md as a download.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { DIFFERS, DOES, DOES_NOT, FACTS, FAQ, NOT_TO_BE_CONFUSED, ONE_LINE, SUMMARY } from "../data/about";
import { CHECKED, COMMON_FAQ, ORDER, PRODUCTS, ROWS, type ProductKey } from "../data/compare";
import { GUIDES } from "../data/guides";
import { ARTICLES, CATEGORIES, articlesIn, day, type LearnArticle } from "../data/learn";
import { DISCORD, GITHUB, SITE, YOUTUBE } from "../data/site";

const abs = (path: string) => (path.startsWith("/") ? `${SITE}${path}` : path);
/** Links written for the site ("/download/") made whole, so the text can be read anywhere. */
const whole = (md: string) => md.replace(/\]\((\/[^)\s]*)\)/g, (_m, p: string) => `](${SITE}${p})`);
const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");

/**
 * Signs that are not plain ASCII, written out. The web server sends .txt without naming its encoding, and
 * some programs then read it as Latin-1: an arrow would arrive as three wrong letters.
 */
export const plainSigns = (text: string) =>
  text.replace(/\u2192/g, "->").replace(/\u2026/g, "...").replace(/\u00d7/g, "x").replace(/\u00bb/g, ">>").replace(/\u2713/g, "yes").replace(/[\u25be\u25b8\u25b4]/g, ">")
    .replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u00b7/g, "-").replace(/\u00a0/g, " ");

export type TextDoc = { slug: string; title: string; about: string; page: string; body: () => string };

export function aboutMd(): string {
  return [
    "# What Warcryer is",
    `> ${ONE_LINE}`,
    SUMMARY,
    `Web page: ${SITE}/about/`,
    "## The facts",
    ...FACTS.map(([k, v]) => `- **${k}:** ${v}`),
    `- **Website:** ${SITE}/`,
    `- **Download:** ${SITE}/download/`,
    `- **Source code of the Windows app:** ${GITHUB}`,
    `- **YouTube channel:** ${YOUTUBE}`,
    `- **Discord:** ${DISCORD}`,
    "## What it does",
    ...DOES.map(([k, v]) => `- **${k}:** ${v}`),
    "## What it does not do",
    ...DOES_NOT.map((l) => `- ${l}`),
    "## How it differs from a voice chat app",
    DIFFERS,
    `Side by side: ${ORDER.map((k) => `[Warcryer vs ${PRODUCTS[k].name}](${SITE}/compare/${k}/)`).join(", ")}.`,
    "## Not to be confused with",
    NOT_TO_BE_CONFUSED,
    "## Questions",
    ...FAQ.map((f) => `### ${f.q}\n\n${f.a}`),
  ].join("\n\n");
}

export function compareMd(key: ProductKey): string {
  const p = PRODUCTS[key];
  return [
    `# ${p.title}`,
    `> ${p.description}`,
    p.lede,
    `Web page: ${SITE}/compare/${key}/`,
    `What is said about ${p.name} here was checked against its own published pages on ${CHECKED}. ${p.name} is a trademark of its owner; Warcryer is not affiliated with it.`,
    "## Side by side",
    [`| | Warcryer | ${p.name} |`, "|---|---|---|", ...ROWS.map((r) => `| ${cell(r.label)} | ${cell(r.ours)} | ${cell(p.cells[r.id] ?? "")} |`)].join("\n"),
    "## The differences that matter",
    ...p.differences.map((d) => `### ${d.title}\n\n${d.body}`),
    `## When ${p.name} is the better choice`,
    ...p.them_if.map((l) => `- ${l}`),
    "## When Warcryer is the better choice",
    ...p.us_if.map((l) => `- ${l}`),
    "## What Warcryer does not do",
    ...DOES_NOT.map((l) => `- ${l}`),
    `## Moving from ${p.name}`,
    ...p.moving.map((l, i) => `${i + 1}. ${l}`),
    "## Questions",
    ...[...p.faq, ...COMMON_FAQ].map((f) => `### ${f.q}\n\n${f.a}`),
    "## Sources",
    ...p.sources.map((s) => `- [${s.label}](${s.url})`),
  ].join("\n\n");
}

export function guideMd(slug: string): string {
  const md = readFileSync(join(process.cwd(), "src/content/guides", `${slug}.md`), "utf8").replace(/^<!--[\s\S]*?-->\s*/, "");
  return whole(md).trim() + `\n\nWeb page: ${SITE}/guides/${slug}/`;
}

const unescape = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
/**
 * An article's HTML back as Markdown. The HTML is our own (core/learn/markdown.ts in the service draws it
 * from a fixed set of tags), so a few replacements are enough; anything unknown is dropped to its text.
 */
export function htmlToMd(html: string): string {
  let s = html.replace(/\r/g, "");
  s = s.replace(/<a [^>]*class="[^"]*anchor[^"]*"[^>]*>.*?<\/a>/g, "");
  s = s.replace(/<sup[^>]*>.*?<\/sup>/g, "").replace(/<span class="la-publisher">(.*?)<\/span>/gs, ", $1");
  s = s.replace(/<p class="la-(?:quick|callout)-title">(.*?)<\/p>/gs, "\n\n**$1**\n\n");
  // A picture: its description stands for it, with its caption under it.
  s = s.replace(/<figure class="la-figure"><img src="([^"]*)" alt="([^"]*)"[^>]*>(?:<figcaption>(.*?)<\/figcaption>)?<\/figure>/gs, (_m, src: string, alt: string, caption?: string) => `\n\n![${alt}](${abs(unescape(src))})${caption ? `\n\n*${caption}*` : ""}\n\n`);
  s = s.replace(/<h2[^>]*>(.*?)<\/h2>/gs, "\n\n## $1\n\n").replace(/<h3[^>]*>(.*?)<\/h3>/gs, "\n\n### $1\n\n").replace(/<h4[^>]*>(.*?)<\/h4>/gs, "\n\n#### $1\n\n");
  s = s.replace(/<tr[^>]*>(.*?)<\/tr>/gs, (_m, row: string) => `| ${[...row.matchAll(/<t[hd][^>]*>(.*?)<\/t[hd]>/gs)].map((c) => c[1].replace(/\n/g, " ").trim()).join(" | ")} |\n`);
  s = s.replace(/<thead[^>]*>(.*?)<\/thead>/gs, (_m, head: string) => `${head}${"|---".repeat((head.match(/\|/g)?.length ?? 2) - 1)}|\n`);
  s = s.replace(/<caption[^>]*>(.*?)<\/caption>/gs, "\n\n$1\n\n").replace(/<\/?tbody[^>]*>/g, "").replace(/<\/?table[^>]*>/g, "\n\n");
  s = s.replace(/<ol[^>]*>(.*?)<\/ol>/gs, (_m, items: string) => { let n = 0; return `\n\n${items.replace(/<li[^>]*>(.*?)<\/li>/gs, (_x, t: string) => `${++n}. ${t.trim()}\n`)}\n`; });
  s = s.replace(/<li[^>]*>(.*?)<\/li>/gs, (_m, t: string) => `- ${t.trim()}\n`).replace(/<\/?ul[^>]*>/g, "\n\n");
  s = s.replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gs, "\n\n```\n$1\n```\n\n");
  s = s.replace(/<a [^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gs, (_m, href: string, text: string) => `[${text}](${abs(unescape(href))})`);
  s = s.replace(/<(strong|b)>(.*?)<\/\1>/gs, "**$2**").replace(/<(em|i)>(.*?)<\/\1>/gs, "*$2*").replace(/<code>(.*?)<\/code>/gs, "`$1`");
  s = s.replace(/<p[^>]*>(.*?)<\/p>/gs, "\n\n$1\n\n").replace(/<br\s*\/?>/g, "\n");
  s = s.replace(/<[^>]+>/g, "");
  return unescape(s).replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function articleMd(a: LearnArticle): string {
  return [`# ${a.title}`, `> ${a.promise || a.description}`, `Web page: ${SITE}${a.path}\nPublished by Warcryer on ${day(a.firstPublishedAt)}; last changed ${day(a.publishedAt)}.`, htmlToMd(a.html)].join("\n\n");
}

/** Every page that has a text twin, in the order the index lists them. */
export function textDocs(): TextDoc[] {
  return [
    { slug: "about", title: "What Warcryer is", about: "The facts in one place: what it is, who it is for, price, platforms, limits, and how it differs from a voice chat app.", page: "/about/", body: aboutMd },
    ...GUIDES.map((g) => ({ slug: `guide-${g.slug}`, title: `Guide: ${g.name}`, about: `${g.for} ${g.covers}`, page: `/guides/${g.slug}/`, body: () => guideMd(g.slug) })),
    ...ORDER.map((k) => ({ slug: `compare-${k}`, title: `Warcryer vs ${PRODUCTS[k].name}`, about: PRODUCTS[k].headline, page: `/compare/${k}/`, body: () => compareMd(k) })),
    ...ARTICLES.map((a) => ({ slug: `learn-${a.slug}`, title: a.title, about: a.description, page: a.path, body: () => articleMd(a) })),
  ];
}

const line = (d: TextDoc) => `- [${d.title}](${SITE}/llms/${d.slug}.txt): ${d.about} Web page: ${SITE}${d.page}`;

/** /llms.txt: what Warcryer is, and where each thing is written down. */
export function llmsIndex(): string {
  const docs = textDocs();
  const pick = (prefix: string) => docs.filter((d) => d.slug.startsWith(prefix));
  const learn = CATEGORIES.flatMap((c) => articlesIn(c).map((a) => docs.find((d) => d.page === a.path)!));
  return plainSigns([
    "# Warcryer",
    `> ${ONE_LINE} ${SUMMARY}`,
    ...FACTS.filter(([k]) => ["Runs on", "Price", "Status", "Games", "Size", "Signing in", "Source code"].includes(k)).map(([k, v]) => `- **${k}:** ${v}`).join("\n").split("\n\n"),
    NOT_TO_BE_CONFUSED,
    `Everything below in one file: ${SITE}/llms-full.txt`,
    "## About",
    pick("about").map(line).join("\n"),
    "## Guides",
    pick("guide-").map(line).join("\n"),
    "## Comparisons",
    `Each says where the other product is the better choice, and names its sources. Checked on ${CHECKED}.`,
    pick("compare-").map(line).join("\n"),
    ...(learn.length ? ["## Learn", "Articles for people who run guilds, clans and alliances.", learn.map(line).join("\n")] : []),
    "## Optional",
    [`- [Download](${SITE}/download/): the Windows installer and how to install it.`, `- [Status](${SITE}/status/): whether the service is up.`, `- [Privacy policy](${SITE}/privacy/)`, `- [Terms of use](${SITE}/terms/)`, `- [YouTube channel](${YOUTUBE}): a walkthrough and short videos of each part.`, `- [Source code of the Windows app](${GITHUB})`, `- [Discord](${DISCORD}): questions, beta codes, corrections.`].join("\n"),
  ].join("\n\n") + "\n");
}

/** /llms-full.txt: every text twin, one after another. */
export function llmsFull(): string {
  return plainSigns(`# Warcryer: the whole site as text\n\n> ${ONE_LINE} ${SUMMARY}\n\n` + textDocs().map((d) => d.body().replace(/^(#{1,5}) /gm, "#$1 ")).join("\n\n---\n\n") + "\n");
}
