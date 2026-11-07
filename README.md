# Land GIS — Khariirad + Legend (GitHub Pages + PWA)

Hal bog (`index.html`) oo gebi ahaan ku shaqeeya browser-ka. Xogta lama dirayo server; nashqadaha iyo calaamadaha waxay ku kaydsan yihiin **browser-kaaga (IndexedDB)**.

## Faylasha
`index.html` · `manifest.json` · `service-worker.js` · `icon.svg` · `icon-192.png` · `icon-512.png` · `.nojekyll`
Dhammaan waxay isticmaalaan **waddooyin dhaw (relative)**, sidaas darteed waxay ku shaqeeyaan `https://USER.github.io/REPO/`.

## Dhig GitHub Pages
1. GitHub: **New repository** (tusaale `Land-GIS-Public`). GitHub Free: Pages waxay u baahan tahay repo **public**.
2. Soo geli dhammaan faylasha **xididka** repo-ga (index.html oo yar-xaraf ah).
3. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, Folder = `/ (root)` → Save.
4. Sug 1–2 daqiiqo; URL: `https://USER.github.io/REPO/`. Fur, kadibna browser-ka dooro **Install / Add to Home screen**.

## Cusboonaysiin
Beddel `index.html`, kadibna kordhi nambarka `V` ee `service-worker.js` (`land-gis-v2`), commit, push.

## Amni (muhiim)
- **Ha geli GeoJSON-ka gaarka ah repo-ga dadweynaha.** Soo geli browser-ka gudihiisa (waxaa lagu kaydiyaa kaliya qalabkaaga).
- GitHub Pages waa static hosting: **login/roles/permissions** ma laha, sidaas darteed qof kasta oo helaa URL-ka wuu isticmaali karaa app-ka (laakiin ma arko xogtaada).
- Kayd: **Dhoofi project (fayl)** si aad nuqul ugu haysato; browser-ka xogta wuu tirtiri karaa haddii aad tirtirto site data.
- Haddii aad rabto repo gaar ah (private source) iyo mid dadweyne (deploy), ku soo koob oo keliya faylasha kore repo-ga dadweynaha.
