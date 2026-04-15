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

# Extract bundleId (UUID) from the fetched index.html
BUNDLE_ID=$(grep -oE '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' "$TMP_INDEX" | head -1)

if [ -z "$BUNDLE_ID" ]; then
  echo "ERROR: Could not extract bundle ID from fetched index.html"
  rm -f "$TMP_INDEX"
  exit 1
fi

echo "    Bundle ID: $BUNDLE_ID"

# Replace index.html
mv "$TMP_INDEX" "$REPO_DIR/index.html"
echo "==> Updated index.html"

# Download new component JS and CSS
echo "==> Downloading component JS..."
curl -sf "$FIGMA_SITE/_components/v2/$NEW_HASH.js" \
  -o "$REPO_DIR/_components/v2/$NEW_HASH.js"

echo "==> Downloading component CSS..."
curl -sf "$FIGMA_SITE/_components/v2/$NEW_HASH.css" \
  -o "$REPO_DIR/_components/v2/$NEW_HASH.css"

# Create assets directory and download images
mkdir -p "$REPO_DIR/_components/v2/$NEW_HASH"

echo "==> Extracting image assets from JS..."
ASSET_PATHS=$(grep -oE "_components/v2/$NEW_HASH/[^\"' ]+" \
  "$REPO_DIR/_components/v2/$NEW_HASH.js" | sort -u)

ASSET_COUNT=0
for ASSET_PATH in $ASSET_PATHS; do
  FILENAME=$(basename "$ASSET_PATH")
  echo "    Downloading $FILENAME..."
  curl -sf "$FIGMA_SITE/$ASSET_PATH" \
    -o "$REPO_DIR/_components/v2/$NEW_HASH/$FILENAME"
  ASSET_COUNT=$((ASSET_COUNT + 1))
done

echo "    $ASSET_COUNT asset(s) downloaded"

# Download updated bundle JSON
echo "==> Downloading bundle JSON..."
mkdir -p "$REPO_DIR/_json/$BUNDLE_ID"
curl -sf "$FIGMA_SITE/_json/$BUNDLE_ID/_index.json" \
  -o "$REPO_DIR/_json/$BUNDLE_ID/_index.json"
