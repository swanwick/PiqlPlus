#!/usr/bin/env bash
set -e

FIGMA_SITE="https://make-cover-77603485.figma.site"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "==> Checking for changes on Figma Make site..."

# Fetch latest index.html to a temp file
TMP_INDEX="$REPO_DIR/.sync-tmp-index.html"
curl -sf "$FIGMA_SITE" -o "$TMP_INDEX"

# Extract new component hash from preload link: _components/v2/{hash}.js
NEW_HASH=$(grep -oE '_components/v2/[a-f0-9]+\.js' "$TMP_INDEX" | head -1 | grep -oE '[a-f0-9]{40}')

if [ -z "$NEW_HASH" ]; then
  echo "ERROR: Could not extract component hash from fetched index.html"
  rm -f "$TMP_INDEX"
  exit 1
fi

# Extract current hash from repo index.html
OLD_HASH=$(grep -oE '_components/v2/[a-f0-9]+\.js' "$REPO_DIR/index.html" | head -1 | grep -oE '[a-f0-9]{40}')

echo "    Current hash: ${OLD_HASH:-none}"
echo "    Latest hash:  $NEW_HASH"

if [ "$NEW_HASH" = "$OLD_HASH" ]; then
  echo "==> No changes detected. Site is already up to date."
  rm -f "$TMP_INDEX"
  exit 0
fi

echo "==> Changes detected. Starting sync..."
