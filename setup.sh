#!/bin/sh
set -eu

# --- Defaults (latest / main) ---
THEME="${THEME:-ai_friendly}"
REF="${REF:-refs/heads/main}"

# --- Parse args (override env) ---
while [ $# -gt 0 ]; do
  case "$1" in
    --theme) THEME="$2"; shift 2;;
    --ref)   REF="$2";   shift 2;;
    *)       echo "Unknown option: $1" >&2; exit 1;;
  esac
done

BASE_URL="https://raw.githubusercontent.com/sotetsuk/marp-ai-friendly/${REF}"

# --- 1. Download theme CSS ---
mkdir -p themes
echo "Downloading theme: ${THEME} (ref: ${REF})"
curl -sL -o "themes/${THEME}.css" "${BASE_URL}/themes/ai_friendly.css"

# --- 2. Create .marprc.yml ---
cat > .marprc.yml << 'MARPRC'
themeSet: [themes/]
allowLocalFiles: true
MARPRC
echo "Created .marprc.yml"

# --- 3. Update .vscode/settings.json ---
URL="${BASE_URL}/themes/ai_friendly.css"
mkdir -p .vscode
if command -v python3 >/dev/null 2>&1; then
  python3 -c "
import json, os
p = '.vscode/settings.json'
s = json.load(open(p)) if os.path.exists(p) else {}
t = s.setdefault('markdown.marp.themes', [])
u = '${URL}'
if u not in t:
    t.append(u)
json.dump(s, open(p, 'w'), indent=2)
print('Updated .vscode/settings.json')
"
else
  echo "python3 not found; skipping .vscode/settings.json update"
  echo "To enable VS Code Marp preview, manually add this URL to markdown.marp.themes:"
  echo "  ${URL}"
fi

echo "Done!"
