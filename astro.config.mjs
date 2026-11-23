// The Warcryer website (warcryer.org). Built to plain files in dist/, which
// nginx serves; see README.md, "Putting it live".
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { existsSync, readFileSync } from "node:fs";

// The Learn section's articles (src/data/learn.json, written by tools/sync-learn.mjs before a build): the
// sitemap gives each its date, and leaves out old addresses that only forward and the front page while it is empty.
const learnFile = new URL("./src/data/learn.json", import.meta.url);
const learn = existsSync(learnFile) ? JSON.parse(readFileSync(learnFile, "utf8")) : { articles: [], moved: [] };
const SITE = "https://warcryer.org";
const learnDates = new Map(learn.articles.map((a) => [`${SITE}${a.path}`, a.publishedAt]));
const notListed = new Set([...learn.moved.map((m) => `${SITE}${m.from}`), ...(learn.articles.length ? [] : [`${SITE}/learn/`])]);

export default defineConfig({
  site: "https://warcryer.org",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !notListed.has(page),
      serialize: (item) => (learnDates.has(item.url) ? { ...item, lastmod: learnDates.get(item.url) } : item),
    }),
  ],
  // Never inline scripts into the page: the site's security policy
  // (infra/nginx/warcryer.org.conf) allows scripts from its own files only.
  vite: { build: { assetsInlineLimit: 0 } },
});
