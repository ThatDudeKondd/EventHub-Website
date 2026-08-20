# fix-first-letter-casing.ps1
# Walks the current directory recursively and, for every file whose name
# starts with an uppercase letter, renames it so the first letter is
# lowercase — using a two-step git mv so the change actually registers
# on Windows' case-insensitive filesystem (a direct rename is invisible
# to git there).
#
# Run this from the repo root (e.g. eventhub-website\).
# Skips .git and node_modules entirely.

$ErrorActionPreference = "Stop"

if (-not (Test-Path ".git")) {
    Write-Host "Error: no .git folder here. Run this from the repo root." -ForegroundColor Red
    exit 1
}

$files = Get-ChildItem -Recurse -File |
    Where-Object {
        $_.FullName -notmatch '\\\.git\\' -and
        $_.FullName -notmatch '\\node_modules\\'
    }

$renamed = 0

foreach ($file in $files) {
    $name = $file.Name
    $firstChar = $name.Substring(0,1)

    if ($firstChar -cmatch '[A-Z]') {
        $newName = $firstChar.ToLower() + $name.Substring(1)

        # Only act if this isn't already correctly cased (case-sensitive compare)
        if ($name -cne $newName) {
            $dir = $file.DirectoryName
            $tmpName = "$newName.tmp_rename"

            Push-Location $dir
            git mv $name $tmpName
            git mv $tmpName $newName
            Pop-Location

            Write-Host "Renamed: $name -> $newName (in $dir)"
            $renamed++
        }
    }
}

Write-Host ""
Write-Host "Done. $renamed file(s) renamed." -ForegroundColor Green
Write-Host "Review with 'git status', then commit and push."