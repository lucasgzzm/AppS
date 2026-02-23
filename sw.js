const CACHE_NAME = "saldosmart-v3";

const FILES = [
  "./",
  "./index.html",
  "./add.html",
  "./styles.css",
  "./manifest.webmanifest",
  "./icon-192.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request)
      .then(res=>res || fetch(e.request))
  );
});