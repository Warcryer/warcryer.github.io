// The service's own answer to "is it working?". nginx passes /api/status on
// warcryer.org to the app's status check (the same one as the app's status
// page) and keeps each answer for 15 seconds, so visitors cannot load it.

export type Part = { key: string; name: string; what: string; state: "up" | "down" | "unknown" };
export type Status = { at: string; ok: boolean; parts: Part[] };

let pending: Promise<Status | null> | null = null;

/** One request per page, however many places ask. Null if it cannot be read. */
export function loadStatus(): Promise<Status | null> {
  pending ??= fetch("/api/status", { headers: { accept: "application/json" } })
    .then(async (r) => {
      // 503 still carries the answer: it means something is down.
      const s = (await r.json()) as Status;
      return Array.isArray(s.parts) ? s : null;
    })
    .catch(() => null);
  return pending;
}
