// Turns a guide or policy (Markdown copied from the app's repository) into
// HTML for the site, with headings given the same anchors GitHub gives them,
// so links written for GitHub (#talking) keep working here.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Marked, type Tokens } from "marked";

export type Heading = { depth: number; id: string; text: string };
export type Doc = { title: string; html: string; headings: Heading[] };

const CONTENT = join(process.cwd(), "src/content");

function slugger() {
  const seen = new Map<string, number>();
  return (text: string) => {
    const base = text
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/&[a-z]+;|&#\d+;/g, "")
      .replace(/[^\p{L}\p{N}\s_-]/gu, "")
      .trim()
      .replace(/\s/g, "-");
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return n ? `${base}-${n}` : base;
  };
}

const plain = (html: string) => html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

/** Reads src/content/<file> and renders it. The first "# Title" becomes the page title. */
export function loadDoc(file: string): Doc {
  let md = readFileSync(join(CONTENT, file), "utf8").replace(/^<!--[\s\S]*?-->\s*/, "");
  let title = "";
  md = md.replace(/^# (.+)\n/m, (_m, t: string) => {
    title = t.trim();
    return "";
  });

  const slug = slugger();
  const headings: Heading[] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Heading["tokens"]) => string } }, token: Tokens.Heading) {
        const inner = this.parser.parseInline(token.tokens);
        const id = slug(inner);
        headings.push({ depth: token.depth, id, text: plain(inner) });
        return `<h${token.depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>${inner}</h${token.depth}>\n`;
      },
    },
  });
  const html = (marked.parse(md, { async: false }) as string)
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");
  return { title, html, headings };
}
