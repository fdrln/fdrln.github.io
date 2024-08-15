const staticGrassCardGameCalculator = "grass-card-game-calculator";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/index.js",
  "/assets/img/logo.png",
  "/assets/img/paper.jpg",
  "/assets/video/smoke.mp4",
  "/views/GameSession.html",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticGrassCardGameCalculator).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
