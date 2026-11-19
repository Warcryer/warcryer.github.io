// The Warcryer website (warcryer.org). Built to plain files in dist/, which
// nginx serves; see README.md, "Putting it live".
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://warcryer.org",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.endsWith("/404/") })],
  // Never inline scripts into the page: the site's security policy
  // (infra/nginx/warcryer.org.conf) allows scripts from its own files only.
  vite: { build: { assetsInlineLimit: 0 } },
});
