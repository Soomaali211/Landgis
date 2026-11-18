# Land GIS Workbench — isku-darka koowaad

## Faylasha la beddelay/abuuray
- `index.html` — portal-ka cusub; Blocks & Plots Designer waa goobta koowaad, GIS Layers & Projects-na waxaa lagu hayaa tab kale.
- `service-worker.js` — cache version-ka waxaa loo qaaday `land-gis-v2`.
- `manifest.json` — PWA manifest-ka sida xogta aad dirtay.

## Faylasha astaanta
Ha tirtirin ama ha beddelin `icon.svg`, `icon-192.png`, iyo `icon-512.png` ee repository-gaaga; `index.html` iyo manifest-ku way tixraacayaan.

## Ku rakibidda GitHub
1. Kaydi nuqulka repository-ga hadda jira.
2. Ku beddel `index.html` faylka cusub ee ZIP-kan.
3. Ku beddel `service-worker.js` faylka cusub.
4. Ku beddel `manifest.json` faylka cusub.
5. Astaamaha hore ku daa isla root-ka repository-ga.
6. GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/(root)`.
7. Markaad deploy-gareyso, browser-ka ka xir PWA-gii hore oo dib u fur; cache version-ku waa `land-gis-v2`.

## Waxa ku jira
- Naqshadeeyaha Blocks & Plots oo wata xisaabinta, special roads, mobile bottom-sheet, PDF, GeoJSON, Shapefile iyo ZIP exports ee faylkii asalka ahaa.
- GIS Layers & Projects oo ilaaliya hawlihii index.html-kii hore: GeoJSON layers, owners, heerar, project save/restore, IndexedDB, audit, SVG/PNG/GeoJSON.
- Map/Legend Control ee portal-ka: qari/muuji blocks, plots, half-plots, special roads, sample, boundary iyo labels; cinwaanka Legend-ka waa la beddeli karaa.

## Xaddidaad muhiim ah oo aan la qarin
Tani waa isku-dar labada workspace oo hal `index.html` ah. Xogta labada workspace weli si toos ah isuma gudbiso, qaar ka mid ah kontaroolada portal-ka waxay saameeyaan muuqaalka khariidadda shaashadda oo keliya; PDF-ga naqshadeeyaha weli wuxuu adeegsadaa qaabkiisa gudaha. Legend-ka PDF-ga ee dhinaca midig sida tusaalaha aad dirtay iyo isku-xirka hal xog-ururin oo labada workspace wadaagaan waxay u baahan yihiin marxalad horumarineed iyo tijaabo gaar ah.

## Tijaabo
Faylasha waa la isku-dubbariday oo qaab-dhismeedka HTML/JS waa la hubinayaa. Tijaabada browser-ka dhabta ah (GeoJSON gelin, roads, mobile touch, PDF, offline/PWA iyo soo celinta projects) weli lama dhammeystirin.
