'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "19336d72b9382ac1beec15bfd5b039e0",
"assets/AssetManifest.json": "fb04cb8cc0ef7a9123db024b8caca785",
"assets/assets/fonts/FlameBold.otf": "5eb731ddb91bfac7e5d1e008595d25d3",
"assets/assets/fonts/FlameRegular.otf": "377b7ce4ee9fc5060b66336857a59569",
"assets/assets/images/ilus_01.png": "c99a66e4df925e432b274684ac24d424",
"assets/assets/images/ilus_02.png": "d5c2b80c6f71a021049143e143e5561e",
"assets/assets/images/ilus_03.png": "dbc741d5557e3faf194ff833fad492da",
"assets/assets/images/papitas_00000.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00001.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00002.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00003.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00004.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00005.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00006.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00007.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00008.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00009.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00010.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00011.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00012.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00013.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00014.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00015.png": "9f3af2f2f09e4dfdf29d049c72fc857f",
"assets/assets/images/papitas_00016.png": "e847752e17883907081c4bfcf669b13d",
"assets/assets/images/papitas_00017.png": "a8509ee07c4e7109fff25dd596f13036",
"assets/assets/images/papitas_00018.png": "b9491c8f40aea62b1a0bbbd2991a090c",
"assets/assets/images/papitas_00019.png": "55bb0f5fecd7a013b82ec4bb072016f1",
"assets/assets/images/papitas_00020.png": "7f9dce387a476a8d8882818eeacc7f55",
"assets/assets/images/papitas_00021.png": "baf5459404ea916fa7d02c1285d291ec",
"assets/assets/images/papitas_00022.png": "af8fd36971c744aba80a326593247d1c",
"assets/assets/images/papitas_00023.png": "2a87835a169a2a711731030c06283bab",
"assets/assets/images/papitas_00024.png": "82cf681e309ff5fea2e392fada791ff7",
"assets/assets/images/papitas_00025.png": "a81b01a50e58a54bb2e0030ce9b30ceb",
"assets/assets/images/papitas_00026.png": "5ee54229a2b3e2768597fd48a5217c98",
"assets/assets/images/papitas_00027.png": "890e74071ff8ac86b0571c20d61f76f7",
"assets/assets/images/papitas_00028.png": "44b754e35cc14e0dff8110834af3b03c",
"assets/assets/images/papitas_00029.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00030.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00031.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00032.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00033.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00034.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00035.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00036.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00037.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00038.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00039.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00040.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00041.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00042.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00043.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00044.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00045.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00046.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/images/papitas_00047.png": "e25b8a764bffbf6a305f44a5a93f3af0",
"assets/assets/sonidos/papitas.mp3": "f48510814a0c7e3b3644309fc18e68fa",
"assets/FontManifest.json": "b6a5910739d34a87b46de99d6fa134d1",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d276297e4597cc75ea04d9427d88dc48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f1fb23177a5a108a1b4c104761e270c",
"/": "2f1fb23177a5a108a1b4c104761e270c",
"main.dart.js": "ed75281543e4b418e9679ebc3e058e28",
"manifest.json": "0e05499a87ecc77dce7df78c463b3315",
"version.json": "fedd1749d13d4dc430769b6c8ba08d98"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
