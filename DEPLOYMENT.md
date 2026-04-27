# Deployment Notes

This repository is configured to deploy with npm using `package-lock.json`.

## Why this matters

Cloudflare Pages detects package managers by lockfiles. If `bun.lockb` is present, it will try to run `bun install --frozen-lockfile`, which can fail when the lockfile is not compatible with the current Bun version.

## What changed

- Removed `bun.lockb` from the repository.
- Added `bun.lockb` to `.gitignore` so future local Bun usage does not accidentally re-introduce the lockfile.

## Recommended deploy flow

Use npm for build and install commands:

- `npm ci`
- `npm run build`

If you want Cloudflare Pages to use a specific package manager, keep only the lockfile for that package manager in the repo.
