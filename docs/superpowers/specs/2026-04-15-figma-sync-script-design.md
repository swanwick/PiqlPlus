# Figma Make → GitHub → Vercel Sync Script

**Date:** 2026-04-15
**Status:** Approved

## Overview

A bash script (`sync-from-figma.sh`) in the repo root that syncs the latest published Figma Make site to GitHub, triggering an automatic Vercel production deployment. Invoked manually by asking Claude Code to "Update the PiqlPlus main website."

## Source of Truth

- **Figma Make site:** `https://make-cover-77603485.figma.site`
- **GitHub repo:** `https://github.com/swanwick/PiqlPlus` (branch: `main`)
- **Vercel project:** `https://piqlplus.vercel.app` (auto-deploys on push to `main`)

## What Changes Between Figma Publishes

When content is published in Figma Make, the component bundle gets a new SHA1 hash. The affected files are:

| File | Notes |
|------|-------|
| `index.html` | References the new hash in preload links and script import |
| `_components/v2/{hash}.js` | Compiled React component — the full site code |
| `_components/v2/{hash}.css` | Compiled CSS |
| `_components/v2/{hash}/*.png` | Image assets (filenames embed a content hash, vary per publish) |
| `_json/{bundleId}/_index.json` | Bundle config; bundleId stays stable across publishes |

The Figma Sites runtime JS (`/_runtimes/...`) is proxied to Figma's CDN via `vercel.json` and does not need to be downloaded.

## Script Behaviour

### 1. Change Detection
- Fetch `index.html` from the live Figma site
- Extract new component hash via regex on the `_components/v2/{hash}.js` preload link
- Compare to hash extracted from the current repo `index.html`
- If identical: print "No changes detected" and exit 0

### 2. Download Updated Files
- Replace `index.html` with the freshly fetched version
- Download `_components/v2/{new-hash}.js`
- Download `_components/v2/{new-hash}.css`
- Parse image asset paths from the new JS file
- Download each asset into `_components/v2/{new-hash}/`
- Download `_json/{bundleId}/_index.json`

### 3. Clean Up Old Files
- Delete `_components/v2/{old-hash}.js`
- Delete `_components/v2/{old-hash}.css`
- Delete `_components/v2/{old-hash}/` directory (and all contents)
- Old `_json/` is overwritten in place (bundleId doesn't change)

### 4. Commit and Push
- `git add index.html _components/ _json/`
- Commit: `"Sync from Figma Make (YYYY-MM-DD HH:MM UTC)"`
- `git push origin HEAD:main`
- Vercel auto-deploys from the push

### 5. Summary Output
Print: old hash → new hash, count of files changed, Vercel dashboard URL.

## Error Handling

- `set -e` — script exits immediately on any error
- If hash extraction fails (empty result): print error and exit 1 before touching any files
- If any `curl` download fails: `set -e` catches it, repo is left in a partially updated state — user should re-run
- If `git push` fails: commit is local; user can push manually

## File Layout

```
PiqlPlus/
├── sync-from-figma.sh          ← the script
├── index.html
├── vercel.json
├── _components/
│   └── v2/
│       ├── {hash}.js
│       ├── {hash}.css
│       └── {hash}/
│           └── *.png
└── _json/
    └── {bundleId}/
        └── _index.json
```

## Usage

```bash
bash sync-from-figma.sh
```

Or via Claude Code: say **"Update the PiqlPlus main website"** and Claude runs it.
