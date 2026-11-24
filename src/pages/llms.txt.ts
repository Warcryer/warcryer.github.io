// /llms.txt: an index of the site for AI assistants (see src/lib/llms.ts).
import { llmsIndex } from "../lib/llms";

export const GET = () => new Response(llmsIndex(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
