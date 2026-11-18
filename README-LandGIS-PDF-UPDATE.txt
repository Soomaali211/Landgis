LAND GIS WORKBENCH — PDF LEGEND & BORDER COORDINATES UPDATE

Files in this package:
- index.html: updated app entry point. PDF button now opens a settings dialog.
- service-worker.js: cache version bumped to land-gis-v3.
- manifest.json: PWA metadata.
- README-LandGIS-PDF-UPDATE.txt: this guide.

GitHub integration (repository root / main):
1. Back up/download the current repository before replacing anything.
2. Upload and replace index.html, service-worker.js, and manifest.json in the repository root.
3. Keep icon.svg, icon-192.png, icon-512.png, and README.md already in the repository; do not delete them.
4. Commit the three updated files to main.
5. In Settings > Pages, keep the existing main / (root) deployment configuration.
6. Open the deployed app online once so service worker land-gis-v3 can install. If old content remains, clear this site's browser cache/site data and reopen.

PDF changes:
- Tapping PDF opens a configuration dialog before export.
- Legend layout: horizontal or vertical.
- Placement: right of map or below map.
- Border coordinate labels/ticks: on/off.
- Coordinate format: UTM Easting/Northing or WGS84 Longitude/Latitude.
- Grid/tick lines, tick divisions, paper size and orientation.
- Individual legend entries can be shown/hidden.

Verification status:
The source files were updated and static structure checks are run before delivery. A full live browser/device test and validation against the user's deployed GitHub Pages site are still required.
