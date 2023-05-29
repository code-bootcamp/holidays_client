var CACHE_NAME = "cache-v1";
var FILES_TO_CACHE = ["/pwa_resources/offline.html"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keyList) {
      Promise.all(
        keyList.map(function (key) {
          if (CACHE_NAME !== key) return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  if ("navigate" !== event.request.mode) return;

  event.respondWith(
    fetch(event.request).catch(function () {
      caches.open(CACHE_NAME).then(function (cache) {
        cache.match("/pwa_resources/offline.html");
      });
    })
  );
});
