const CACHE_NAME = "manga-tool-v1";

const urlsToCache = [
  "home.html",
  "composition.html",
  "tag.html",
  "layout.html",
  "layout-setting.html",
  "generate.html",
  "tag-manage.html"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});