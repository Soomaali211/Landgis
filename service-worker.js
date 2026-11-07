// Beddel V mar kasta oo aad faylasha cusboonaysiiso (si browser-ku nuqulka cusub u qaado).
const V = 'land-gis-v1';
const FILES = ['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;   // wax dibadda ah ma kaydino
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(n => {
    if (n.ok) { const c = n.clone(); caches.open(V).then(x => x.put(r, c)); }
    return n;
  }).catch(() => caches.match('./'))));
});
