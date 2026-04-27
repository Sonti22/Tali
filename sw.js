/* Service Worker — кэширует HTML/JS/CSS/фото на длительный offline-просмотр */
const VERSION = 'taly-1777287988085';
const PRECACHE = [
  './',
  './index.html',
  './hero.mp4',
  './manifest.json',
  '/Tali/index.html',
  '/Tali/styles.css',
  '/Tali/manifest.json',
  '/Tali/hero.mp4',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  /* HTML — network-first, чтобы видеть свежие правки */
  if (e.request.mode === 'navigate' || (e.request.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  /* Всё остальное (фото / аудио / видео / шрифты / cdn) — cache-first */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (r.ok && (r.type === 'basic' || r.type === 'cors')) {
          const copy = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copy).catch(() => {}));
        }
        return r;
      }).catch(() => cached);
    })
  );
});
