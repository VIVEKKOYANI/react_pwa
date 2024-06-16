const cacheName = 'appV1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/manifest.json',
                '/index.html',
                '/'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    // Optionally, you can remove old caches here if necessary
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                return caches.open(cacheName).then((cache) => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(() => {
            // Fallback response in case both cache and network fail
            return caches.match('/index.html');
        })
    );
});