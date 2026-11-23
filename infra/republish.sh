#!/usr/bin/env bash
# Builds the site again as it is live, with the Learn articles as they are
# published now, and puts it live. The Warcryer service runs this after an
# article is published or taken down (LEARN_SITE_REBUILD in its settings); it
# can be run by hand as well: bash infra/republish.sh
#
# It does not build this folder, which may hold work in progress, but the
# commit that is live (the name of the current release ends in it), in a
# checkout of its own. So publishing an article never puts anything else live.
set -euo pipefail
cd "$(dirname "$0")/.."
WWW=${WWW:-/var/www/warcryer.org}
BUILD=${LEARN_BUILD_DIR:-$HOME/.cache/warcryer-site-live}

live=$(basename "$(readlink "$WWW/current")")
commit=${live##*-}
git cat-file -e "$commit^{commit}" 2>/dev/null || { echo "The live release ($live) names no commit of this repository." >&2; exit 1; }

if [ -e "$BUILD/.git" ]; then
  git -C "$BUILD" checkout -q --detach "$commit"
else
  mkdir -p "$(dirname "$BUILD")"
  git worktree prune
  git worktree add -q --detach "$BUILD" "$commit"
fi
cd "$BUILD"
[ -f infra/republish.sh ] || { echo "The live release ($live) is from before the Learn section; deploy the site once by hand first." >&2; exit 1; }
# The packages are installed again only when the list of them changed.
want=$(sha256sum package-lock.json | cut -d' ' -f1)
if [ ! -d node_modules ] || [ "$(cat node_modules/.lock-sum 2>/dev/null)" != "$want" ]; then
  npm ci --no-audit --no-fund
  echo "$want" > node_modules/.lock-sum
fi
WWW="$WWW" bash infra/deploy.sh
