# Land GIS — Android APK (GitHub Actions)

Xirmadan waa mashruuc Android oo dhameystiran (WebView) oo ku jira **Naqshadeeyaha Blocks & Plots** (HTML). Faylka **.apk** waxaa dhisa GitHub si toos ah — kombiyuutarkaaga uma baahnid Android Studio.

## Waxa ku jira
- `app/src/main/assets/index.html` — app-ka (gebi ahaan offline; fonts-ka dibadda waa laga saaray).
- `app/src/main/assets/jszip.min.js` — maktabadda ZIP. `proj4.js` waxaa soo dejiya workflow-ga (`scripts/fetch-libs.sh`).
- `app/src/main/java/.../MainActivity.java` — WebView, file picker (GeoJSON/Shapefile) iyo keydinta faylasha **Downloads/LandGIS**.
- `.github/workflows/build-apk.yml` — dhisaa `LandGIS-BlocksPlots.apk`.

## Talaabooyinka (GitHub)
1. Samee repository cusub (tusaale `Land-GIS-APK`).
2. Soo geli **dhammaan** waxa ku jira zip-kan (ku jiray `.github` oo ay ku jirto) xididka repo-ga. Haddii aad upload-garayso browser-ka, hubi in folder-ka `.github/workflows` la soo geliyey.
3. Tag **Actions** → **Build APK** → **Run workflow** (ama kaliya commit ku samee `main`). Sug ~5–8 daqiiqo.
4. Marka uu dhammaado: guji run-ka → **Artifacts** → **LandGIS-APK** → soo dejiso (waa zip, gudahiisa ku jira **LandGIS-BlocksPlots.apk**).
5. **Release (faylka .apk oo si joogto ah u taagan):** Repo → Releases → *Draft a new release* → tag `v1.0` → Publish. Workflow-gu wuxuu APK-ga ku dhejin doonaa bogga Release.
6. Taleefanka: soo dejiso APK-ga → fur → ogolow **Install unknown apps** → rakib.

## Qaabka isticmaalka
- App-ku wuu furmaa oo nadiif yahay. Geli xuduudka (GeoJSON/Shapefile) adigoo riixaya "Import Map".
- Dhoofinta (PDF, ZIP, GeoJSON, CSV) waxay ku kaydsan yihiin **Downloads/LandGIS**.
- Project-yada iyo wax-ka-beddelada waxay ku kaydsan yihiin app-ka (IndexedDB/localStorage); haddii aad tirtirto app data way lumayaan.

## Xaddidaadyo (run ahaan)
- APK-gan waa **debug-signed**: wuu rakibmaa oo wuu shaqeeyaa, laakiin **Google Play** uma ogola. Si aad Play Store ugu soo geliso waxaa lagu baahan yahay keystore gaar ah oo release-signed ah iyo `.aab`.
- Wuxuu u baahan yahay **Android 10+** (API 29).
- Tijaabadii APK-ga lama sameyn karin halkan (ma jiro Android SDK); u hubi taleefankaaga marka ugu horreysa.

## Dhisid gudaha (ikhtiyaari)
`bash scripts/fetch-libs.sh` kadibna Android Studio ku fur folder-kan → Build → Build APK(s). Ama `gradle assembleDebug` (Gradle 8.9, JDK 17).
