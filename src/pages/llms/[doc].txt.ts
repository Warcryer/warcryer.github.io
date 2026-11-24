// /llms/<page>.txt: one page of the site as Markdown text (see src/lib/llms.ts).
import { plainSigns, textDocs } from "../../lib/llms";

export function getStaticPaths() {
  return textDocs().map((d) => ({ params: { doc: d.slug } }));
}

export const GET = ({ params }: { params: { doc: string } }) => {
  const doc = textDocs().find((d) => d.slug === params.doc)!;
  return new Response(plainSigns(doc.body()) + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
