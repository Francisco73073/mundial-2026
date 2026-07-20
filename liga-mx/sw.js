// Service Worker — Liga MX PWA (network-first: siempre la versión más reciente)
const CACHE = 'ligamx-v5';
const SHELL = [
  './',
  './index.html',
  './app_data.js',
  './data.json',
  './manifest.webmanifest',
  './icons/app-192.png',
  './icons/app-512.png',
  './icons/app-180.png',
  './icons/app-512-maskable.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // network-first SIEMPRE: trae lo más reciente; el caché solo respalda sin conexión
  e.respondWith(
    fetch(e.request, { cache: 'no-store' })
      .then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return resp;
      })
      .catch(() =>
        caches.match(e.request).then((r) => {
          if (r) return r;
          if (e.request.mode === 'navigate') return caches.match('./index.html');
        })
      )
  );
});
