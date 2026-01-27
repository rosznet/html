self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('tbl30-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/tbl30.html',
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
          return caches.match('/tbl30.html');
        });
      })
  );
});
