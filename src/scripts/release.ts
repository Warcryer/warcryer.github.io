// The newest release, as GitHub reports it. nginx passes /api/release on
// warcryer.org to GitHub's API and keeps the answer for ten minutes, so the
// site always offers the newest installer without being rebuilt, and a
// visitor's browser never contacts GitHub just to read it.

export type Release = { version: string; date: string; url: string; size: number; page: string };

type GithubAsset = { name: string; size: number; browser_download_url: string };
type GithubRelease = { tag_name: string; published_at: string; html_url: string; assets: GithubAsset[] };

export async function loadRelease(): Promise<Release | null> {
  try {
    const r = await fetch("/api/release", { headers: { accept: "application/json" } });
    if (!r.ok) return null;
    const g = (await r.json()) as GithubRelease;
    const exe = g.assets?.find((a) => /_x64-setup\.exe$/.test(a.name));
    if (!exe) return null;
    return { version: g.tag_name.replace(/^v/, ""), date: g.published_at, url: exe.browser_download_url, size: exe.size, page: g.html_url };
  } catch {
    return null;
  }
}
