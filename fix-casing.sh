#!/usr/bin/env bash
# fix-casing.sh — finds imports in src/App.jsx whose filename casing doesn't
# match the actual file on disk (common when a repo was developed on
# Windows/Mac and deployed to a case-sensitive Linux filesystem), and
# renames the file to match the import exactly, preserving git history.
#
# Run this from the repo root (where src/ lives).

set -euo pipefail

APP_FILE="src/App.jsx"

if [ ! -f "$APP_FILE" ]; then
  echo "Error: $APP_FILE not found. Run this from the repo root."
  exit 1
fi

echo "Scanning imports in $APP_FILE..."
echo

fixed=0

# Extract every relative import path, e.g. ./pages/Commands, ./lib/pagenotfound
grep -oP '(?<=from ")\.[^"]+' "$APP_FILE" | while read -r import_path; do
  # Strip leading "./" -> relative path under src/
  rel_path="${import_path#./}"
  dir=$(dirname "src/$rel_path")
  base=$(basename "$rel_path")

  if [ ! -d "$dir" ]; then
    continue
  fi

  # Does a file matching the import's exact case already exist (any extension)?
  exact_match=$(find "$dir" -maxdepth 1 -iname "${base}.*" -name "${base}.*" 2>/dev/null | head -n1)
  if [ -n "$exact_match" ]; then
    continue   # already correct, nothing to do
  fi

  # Find a case-insensitive match instead
  ci_match=$(find "$dir" -maxdepth 1 -iname "${base}.*" 2>/dev/null | head -n1)

  if [ -z "$ci_match" ]; then
    echo "WARNING: no file found for import '$import_path' (even case-insensitively) — may be genuinely missing."
    continue
  fi

  ext="${ci_match##*.}"
  target="$dir/${base}.${ext}"

  echo "Fixing: $ci_match -> $target"
  git mv "$ci_match" "$target"
  fixed=$((fixed + 1))
done

echo
echo "Done. Review with 'git status', then commit and push."
