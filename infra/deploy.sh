#!/usr/bin/env bash
# Builds the site and puts it live at warcryer.org. Run as alliancevoice, no
# sudo: bash infra/deploy.sh
#
# Each deploy goes into a folder of its own under /var/www/warcryer.org/releases
# and the "current" link is switched to it in one step, so a visitor never sees
# half a site. The last five are kept.
#   bash infra/deploy.sh rollback   # back to the one before
#   bash infra/deploy.sh list       # what is there, newest first
#
# It refuses to deploy uncommitted changes (FORCE=1 to do it anyway), so
# what is live can always be found in git: the folder name ends in the commit.
set -euo pipefail
cd "$(dirname "$0")/.."
WWW=/var/www/warcryer.org
KEEP=5

case "${1:-}" in
  list)
    ls -1t "$WWW/releases"; echo "current -> $(readlink "$WWW/current")"; exit 0 ;;
  rollback)
    now=$(basename "$(readlink "$WWW/current")")
    prev=$(ls -1t "$WWW/releases" | grep -vx "$now" | head -1)
    [ -n "$prev" ] || { echo "Nothing to go back to." >&2; exit 1; }
    ln -sfn "releases/$prev" "$WWW/current.new" && mv -Tf "$WWW/current.new" "$WWW/current"
    echo "warcryer.org is back on $prev (was $now)"; exit 0 ;;
esac

[ -w "$WWW/releases" ] || { echo "$WWW/releases is missing or not writable; run infra/setup-root.sh first." >&2; exit 1; }
if [ -n "$(git status --porcelain)" ] && [ "${FORCE:-}" != 1 ]; then
  echo "There are uncommitted changes; commit them first (or FORCE=1)." >&2; git status --short >&2; exit 1
fi

[ -d node_modules ] || npm ci
npm run -s build
[ -f dist/index.html ] && [ -f dist/404.html ] || { echo "The build did not produce the site." >&2; exit 1; }

name="$(date -u +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD)"
mkdir "$WWW/releases/$name"
cp -a dist/. "$WWW/releases/$name/"
chmod -R a+rX "$WWW/releases/$name"
ln -sfn "releases/$name" "$WWW/current.new" && mv -Tf "$WWW/current.new" "$WWW/current"
echo "warcryer.org now serves $name"

ls -1t "$WWW/releases" | tail -n +$((KEEP + 1)) | while read -r old; do rm -rf "${WWW:?}/releases/${old:?}"; done
