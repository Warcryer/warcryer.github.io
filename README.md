# warcryer.github.io

The project page for [Warcryer](https://warcryer.github.io/): voice chat for large gaming alliances and clans, an open-source alternative to TeamSpeak where the event roster decides who hears whom.

A plain static site: `index.html`, `style.css`, the emblem, fonts and screenshots. Whatever is on `main` is published by GitHub Pages.

The comparison pages under `compare/` (a hub, and one page each for TeamSpeak, Discord, Mumble and Ventrilo), `sitemap.xml` and `robots.txt` are written by `python3 tools/build-compare.py`, which holds their facts in one place. Change the facts there, run it from the repository's root and commit what it wrote. Everything said about another product must come from that product's own pages; when re-checking, update `CHECKED` in the script.

The screenshots come from the walkthrough recording and from the server's click-through test (`e2e/tour.mjs` with `SHOTS=1`), both of which use invented clans and players. Fonts are Cinzel and Inter, both under the SIL Open Font License. Everything else here is MIT licensed, like the client.

Warcryer is a community project. It is not affiliated with or endorsed by NCSOFT or any game publisher.
