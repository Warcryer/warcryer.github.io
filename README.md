# warcryer.org

The website for [Warcryer](https://warcryer.org/): voice chat for large gaming alliances and clans, an open-source alternative to TeamSpeak where the event roster decides who hears whom.

Built with [Astro](https://astro.build/) into plain files, which nginx serves on the project's server. Nothing runs on the server for it.

## Working on it

```sh
npm ci
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # the site, in dist/
```

`/api/status` and `/api/release` are answered by nginx, not by Astro, so in `npm run dev` the footer's status light stays grey and the download page falls back to GitHub's releases page. Both work on the live site.

| Where | What |
| --- | --- |
| `src/pages/` | One file per page. `compare/[product].astro` and `guides/[guide].astro` make one page per entry in their data. |
| `src/layouts/Base.astro` | Head, header and menu, footer: every page. |
| `src/data/site.ts` | Addresses used everywhere (Discord, GitHub) and the main menu. |
| `src/data/compare.ts` | The facts behind the comparison pages. Everything said about another product must come from that product's own pages; when re-checking, update `CHECKED`. |
| `src/data/guides.ts` | The list of guides and what each covers. |
| `src/content/` | The guides, privacy policy and terms, **copied** from the app's repository. Do not edit them here. |
| `src/styles/site.css` | All the styles. Colours and type match the app. |
| `public/` | Files served as they are: emblem, favicon, fonts, screenshots, robots.txt. |
| `infra/` | The nginx site file, the one-off root setup, and the deploy script. |

## The guides and policies

They are written once, in the app's repository (`docs/*.md`, `PRIVACY.md`, `TERMS.md`), and shown both in the app and here. After they change and a release is published:

```sh
npm run sync-docs              # copies them from the newest published release
npm run sync-docs -- v0.26.0   # or from a given tag
```

It rewrites links between them to the site's addresses and records which version was copied (`src/content/source.json`). Commit what it changed, then deploy.

## Putting it live

```sh
bash infra/deploy.sh             # build and switch warcryer.org to it
bash infra/deploy.sh rollback    # back to the previous deploy
bash infra/deploy.sh list
```

No sudo: `/var/www/warcryer.org` belongs to this account. Each deploy is a folder of its own named after its time and commit, and the `current` link switches in one step; the last five are kept. It refuses uncommitted changes.

The server was prepared once with `sudo bash infra/setup-root.sh` (folders, nginx site file, Let's Encrypt certificate). Run it again after changing `infra/nginx/warcryer.org.conf`. The site sits behind Cloudflare, whose SSL mode for the zone is "Full (strict)".

## The old address

The site used to be at warcryer.github.io, published by GitHub Pages from this repository. That address now only sends visitors to the same page here: the branch `github-pages` holds those forwarding pages, and GitHub Pages publishes that branch.

## Credits

The screenshots come from the walkthrough recording and from the server's click-through test (`e2e/tour.mjs` with `SHOTS=1`), both of which use invented clans and players. Fonts are Cinzel and Inter, both under the SIL Open Font License. Everything else here is MIT licensed, like the client.

Warcryer is a community project. It is not affiliated with or endorsed by NCSOFT or any game publisher.
