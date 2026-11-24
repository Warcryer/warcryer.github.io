// /llms-full.txt: the whole site as one Markdown text (see src/lib/llms.ts).
import { llmsFull } from "../lib/llms";

export const GET = () => new Response(llmsFull(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
