#!/usr/bin/env bash
# Soo dejiso proj4.js (offline) -> app/src/main/assets. Waxaa loo isticmaalaa GitHub Actions iyo dhisid gudaha ah.
set -e
A="app/src/main/assets"
if [ ! -s "$A/proj4.js" ] || [ "$(wc -c < "$A/proj4.js")" -lt 50000 ]; then
  curl -fsSL "https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.9.2/proj4.js" -o "$A/proj4.js" || {
    echo "cdnjs failed, trying npm"; T="$(mktemp -d)"; (cd "$T" && npm init -y >/dev/null && npm install proj4@2.9.2 >/dev/null); cp "$T/node_modules/proj4/dist/proj4.js" "$A/proj4.js"; }
fi
test "$(wc -c < "$A/proj4.js")" -gt 50000 && echo "proj4.js OK" || { echo "proj4.js missing"; exit 1; }
