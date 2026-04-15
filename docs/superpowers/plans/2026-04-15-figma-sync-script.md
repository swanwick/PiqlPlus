# Figma Sync Script Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Write `sync-from-figma.sh` — a bash script that detects changes on the live Figma Make site, downloads updated files, cleans up old ones, commits, and pushes to GitHub (triggering Vercel auto-deploy).

**Architecture:** Single self-contained bash script in the repo root. Reads current state from the local `index.html`, fetches live state from Figma's CDN, diffs by component hash, downloads only what changed, then does a git commit + push.

**Tech Stack:** bash, curl, grep, git — no external dependencies beyond what Git Bash on Windows already provides.

---

### Task 1: Scaffold the script with change detection

**Files:**
- Create: `sync-from-figma.sh`

- [ ] **Step 1: Create `sync-from-figma.sh` with the header, constants, and change detection logic**

```bash
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
```

- [ ] **Step 2: Make the script executable**

```bash
chmod +x sync-from-figma.sh
```

- [ ] **Step 3: Run the script to verify change detection works (expect it to detect current state as "up to date" since repo just synced)**

```bash
bash sync-from-figma.sh
```

Expected output:
```
==> Checking for changes on Figma Make site...
    Current hash: 56ba01bfcdb1ae66396509fffc460c41b301ded1
    Latest hash:  56ba01bfcdb1ae66396509fffc460c41b301ded1
==> No changes detected. Site is already up to date.
```

- [ ] **Step 4: Commit**

```bash
git add sync-from-figma.sh
git commit -m "Add sync script: change detection"
```

---

### Task 2: Add file downloads

**Files:**
- Modify: `sync-from-figma.sh`

- [ ] **Step 1: Append the download section after the change detection block**

Add this after the `echo "==> Changes detected..."` line:

```bash
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
```

- [ ] **Step 2: Verify the script syntax is valid**

```bash
bash -n sync-from-figma.sh
```

Expected: no output (no syntax errors)

- [ ] **Step 3: Commit**

```bash
git add sync-from-figma.sh
git commit -m "Add sync script: file downloads"
```

---

### Task 3: Add cleanup of old files

**Files:**
- Modify: `sync-from-figma.sh`

- [ ] **Step 1: Append the cleanup section after the downloads block**

```bash
# Remove old component files (only if hash actually changed and old hash is known)
if [ -n "$OLD_HASH" ] && [ "$OLD_HASH" != "$NEW_HASH" ]; then
  echo "==> Removing old component files..."
  rm -f "$REPO_DIR/_components/v2/$OLD_HASH.js"
  rm -f "$REPO_DIR/_components/v2/$OLD_HASH.css"
  rm -rf "$REPO_DIR/_components/v2/$OLD_HASH"
  echo "    Removed _components/v2/$OLD_HASH{.js,.css,/}"
fi
```

- [ ] **Step 2: Verify syntax**

```bash
bash -n sync-from-figma.sh
```

Expected: no output

- [ ] **Step 3: Commit**

```bash
git add sync-from-figma.sh
git commit -m "Add sync script: cleanup old component files"
```

---

### Task 4: Add git commit, push, and summary output

**Files:**
- Modify: `sync-from-figma.sh`

- [ ] **Step 1: Append the commit/push/summary block**

```bash
# Commit and push
echo "==> Committing changes..."
cd "$REPO_DIR"
git add index.html _components/ _json/

TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M UTC")
git commit -m "Sync from Figma Make ($TIMESTAMP)"

echo "==> Pushing to GitHub..."
git push origin HEAD:main

echo ""
echo "=============================="
echo " Sync complete!"
echo "=============================="
echo " Old hash: $OLD_HASH"
echo " New hash: $NEW_HASH"
echo " Vercel:   https://vercel.com/swanwick/piqlplus"
echo "=============================="
```

- [ ] **Step 2: Verify the complete script syntax**

```bash
bash -n sync-from-figma.sh
```

Expected: no output

- [ ] **Step 3: Do a full end-to-end dry-run by temporarily renaming the old hash in index.html to force a "change detected" path**

Open `index.html` and change one character of the hash in the preload link (e.g., `56ba01b...` → `56ba01c...`), then run:

```bash
bash sync-from-figma.sh
```

Expected output (roughly):
```
==> Checking for changes on Figma Make site...
    Current hash: 56ba01c... (your fake hash)
    Latest hash:  56ba01bfcdb1ae66396509fffc460c41b301ded1
==> Changes detected. Starting sync...
    Bundle ID: 0ef2c1f8-b99f-43ff-944c-1f981fbbf17f
==> Updated index.html
==> Downloading component JS...
==> Downloading component CSS...
==> Extracting image assets from JS...
    Downloading PiqlPlus_Logo_150px_height.e5db322b.png...
    Downloading Private_Pickle_Cleaned_Up.aada27fe.png...
    Downloading image-2.1a115305.png...
    3 asset(s) downloaded
==> Downloading bundle JSON...
==> Removing old component files...
    Removed _components/v2/56ba01c...{.js,.css,/}
==> Committing changes...
==> Pushing to GitHub...
==============================
 Sync complete!
==============================
 Old hash: 56ba01c...
 New hash: 56ba01bfcdb1ae66396509fffc460c41b301ded1
 Vercel:   https://vercel.com/swanwick/piqlplus
==============================
```

After the test, restore `index.html` if the script didn't already download the correct one (it should have).

- [ ] **Step 4: Commit the final script**

```bash
git add sync-from-figma.sh
git commit -m "Add sync script: git commit, push, and summary output"
git push origin HEAD:main
```
