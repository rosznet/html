self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('tbl40-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/tbl40.html',
        '/Digital-7.ttf'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request).catch(() => {
          return caches.match('/tbl40.html');
        });
      })
  );
});
