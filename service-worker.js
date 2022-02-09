const CACHE_NAME = "goPlay-v3";
var urlsToCache = [
    "/",
    "/nav.html",
    "/script/nav.js",
    "/index.html",
    "/pages/home.html",
    "/pages/about.html",
    "/pages/allgame.html",
    "/pages/categories.html",
    "/css/costum.css",
    "/materialize/css/materialize.min.css",
    "/script/allgame.js",
    "/script/categories.js",
    "/script/data.js",
    "/script/home.js",
    "/materialize/js/materialize.min.js",
    "/img/Apex-legends-cover.jpg",
    "/img/bg.jpg",
    "/img/Cyberpunk 2077.jpg",
    "/img/doom.jpg",
    "/img/Insurgency-Sandstorm.jpg",
    "/img/New World.jpg",
    "/img/resident-evil-2-biohazard-re2-deluxe-edition-cover.jpg",
    "/img/spongebob-squarepants-battle-for-bikini-bottom-rehydrated-cover.jpg",
    "/img/text.jpg",
    "/img/the-last-of-us-part-ii-cover.jpg",
    "/img/Wasteland_3.jpg",
    "/img/newgamelogo.png",
    "/img/watch_dogs_legion.png",
    "/img/profile.jpg",
    "/img/star.png",
    "/img/unstar.png",
    "/icon-192x192.png",
    "/icon-512x512.png",
    "/manifest.json",
    "/service-worker.js"
];

// Memasang cache 
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// Menggunakan cache dari browser
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
        .match(event.request, {
            cacheName: CACHE_NAME
        })
        .then(function (response) {
            if (response) {
                console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
                return response;
            }

            console.log(
                "ServiceWorker: Memuat aset dari server: ",
                event.request.url
            );
            return fetch(event.request);
        })
    );
});

// Update cache baru
self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + " dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});