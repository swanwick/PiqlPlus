#!/usr/bin/env bash
set -e

FIGMA_SITE="https://emboss-reuse-71113277.figma.site"
SUBPATH="AlphaSurvey"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="$REPO_DIR/$SUBPATH"

echo "==> Checking for changes on Figma Make site ($SUBPATH)..."

# Fetch latest index.html to a temp file
TMP_INDEX="$REPO_DIR/.sync-tmp-alphasurvey.html"
curl -sf "$FIGMA_SITE" -o "$TMP_INDEX"

# Extract new component hash from preload link: _components/v2/{hash}.js
NEW_HASH=$(grep -oE '_components/v2/[a-f0-9]+\.js' "$TMP_INDEX" | head -1 | grep -oE '[a-f0-9]{40}')

if [ -z "$NEW_HASH" ]; then
  echo "ERROR: Could not extract component hash from fetched index.html"
  rm -f "$TMP_INDEX"
  exit 1
fi

# Extract current hash from repo index.html (|| true prevents set -e on no match)
OLD_HASH=$(grep -oE '_components/v2/[a-f0-9]+\.js' "$DEST/index.html" 2>/dev/null | head -1 | grep -oE '[a-f0-9]{40}' || true)

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

# Rewrite root-relative paths to subpath-relative so assets load correctly at /AlphaSurvey
sed -i \
  -e "s|/_components/|/$SUBPATH/_components/|g" \
  -e "s|/_json/|/$SUBPATH/_json/|g" \
  -e "s|/_runtimes/|/$SUBPATH/_runtimes/|g" \
  "$TMP_INDEX"

# Place index.html in subdirectory
mkdir -p "$DEST"
mv "$TMP_INDEX" "$DEST/index.html"
echo "==> Updated $SUBPATH/index.html"

# Download new component JS and CSS
echo "==> Downloading component JS..."
mkdir -p "$DEST/_components/v2"
curl -sf "$FIGMA_SITE/_components/v2/$NEW_HASH.js" \
  -o "$DEST/_components/v2/$NEW_HASH.js"

echo "==> Downloading component CSS..."
curl -sf "$FIGMA_SITE/_components/v2/$NEW_HASH.css" \
  -o "$DEST/_components/v2/$NEW_HASH.css"

# Create assets directory and download images
mkdir -p "$DEST/_components/v2/$NEW_HASH"

echo "==> Extracting image assets from JS..."
ASSET_PATHS=$(grep -oE "_components/v2/$NEW_HASH/[^\"' ]+" \
  "$DEST/_components/v2/$NEW_HASH.js" | sort -u)

ASSET_COUNT=0
for ASSET_PATH in $ASSET_PATHS; do
  FILENAME=$(basename "$ASSET_PATH")
  echo "    Downloading $FILENAME..."
  curl -sf "$FIGMA_SITE/$ASSET_PATH" \
    -o "$DEST/_components/v2/$NEW_HASH/$FILENAME"
  ASSET_COUNT=$((ASSET_COUNT + 1))
done

echo "    $ASSET_COUNT asset(s) downloaded"

# Download updated bundle JSON
echo "==> Downloading bundle JSON..."
mkdir -p "$DEST/_json/$BUNDLE_ID"
curl -sf "$FIGMA_SITE/_json/$BUNDLE_ID/_index.json" \
  -o "$DEST/_json/$BUNDLE_ID/_index.json"

# Remove old component files
if [ -n "$OLD_HASH" ] && [ "$OLD_HASH" != "$NEW_HASH" ]; then
  echo "==> Removing old component files..."
  rm -f "$DEST/_components/v2/$OLD_HASH.js"
  rm -f "$DEST/_components/v2/$OLD_HASH.css"
  rm -rf "$DEST/_components/v2/$OLD_HASH"
  echo "    Removed $SUBPATH/_components/v2/$OLD_HASH{.js,.css,/}"
fi

# Commit and push
echo "==> Committing changes..."
cd "$REPO_DIR"
git add "$SUBPATH/"

TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M UTC")
git commit -m "Sync AlphaSurvey from Figma Make ($TIMESTAMP)"

echo "==> Pushing to GitHub..."
git push origin HEAD:main

echo ""
echo "=============================="
echo " Sync complete!"
echo "=============================="
echo " Old hash: $OLD_HASH"
echo " New hash: $NEW_HASH"
echo " URL:      https://piqlplus.com/AlphaSurvey"
echo " Vercel:   https://vercel.com/swanwick/piqlplus"
echo "=============================="
