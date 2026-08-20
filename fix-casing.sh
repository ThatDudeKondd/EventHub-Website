#!/usr/bin/env bash
set -uo pipefail

APP_FILE="src/App.jsx"

if [ ! -f "$APP_FILE" ]; then
  echo "Error: $APP_FILE not found. Run this from the repo root."
  exit 1
fi

echo "Scanning imports in $APP_FILE..."
echo

imports=$(grep -oP "(?<=from [\"'])\.[^\"']+" "$APP_FILE")

if [ -z "$imports" ]; then
  echo "No relative imports found in $APP_FILE — nothing to check."
  exit 0
fi

fixed=0

while read -r import_path; do
  [ -z "$import_path" ] && continue

  rel_path="${import_path#./}"
  dir=$(dirname "src/$rel_path")
  base=$(basename "$rel_path")

  if [ ! -d "$dir" ]; then
    echo "SKIP: directory '$dir' doesn't exist (import: $import_path)"
    continue
  fi

  exact_match=$(find "$dir" -maxdepth 1 -name "${base}.*" 2>/dev/null | head -n1)
  if [ -n "$exact_match" ]; then
    continue
  fi

  ci_match=$(find "$dir" -maxdepth 1 -iname "${base}.*" 2>/dev/null | head -n1)

  if [ -z "$ci_match" ]; then
    echo "WARNING: no file found for import '$import_path' (even case-insensitively)."
    continue
  fi

  ext="${ci_match##*.}"
  target="$dir/${base}.${ext}"

  echo "Fixing: $ci_match -> $target"
  git mv "$ci_match" "$target"
  fixed=$((fixed + 1))
done < <(echo "$imports")

echo
echo "Done. $fixed file(s) renamed. Review with 'git status', then commit and push."
