'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-chrome-192x192.png": "d19f3b7349e9c05cbd30fed63d8d9c0e",
"android-chrome-512x512.png": "f3d38f7cba3a2128b291ce7b6acfd685",
"apple-touch-icon.png": "9edcc2bf2254e84a595ed02ec7e2dd31",
"assets/AssetManifest.json": "3bd8b1c804963fed601a03211e6a06a2",
"assets/assets/fonts/AteraIconsFont.ttf": "eb33bc325d34163c31d1ec2853fc8f5f",
"assets/assets/fonts/MontserratAlt1-Black.ttf": "4e5cd85e2981467d09d0bffa47f54610",
"assets/assets/fonts/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/assets/fonts/MontserratAlt1-ExtraBold.ttf": "1e255fcf02437e156bbe0e9a5e3126d4",
"assets/assets/fonts/MontserratAlt1-ExtraLight.ttf": "72ee61ab90d985a3bde1853f01b56e6c",
"assets/assets/fonts/MontserratAlt1-Light.ttf": "3b8bf05c0d2fb5ca05e822f5723826b7",
"assets/assets/fonts/MontserratAlt1-Medium.ttf": "29295d2928c6bd76a76c9e789982bc85",
"assets/assets/fonts/MontserratAlt1-Regular.ttf": "a8deb2821dc0fdf6fd70cc272bea65bc",
"assets/assets/fonts/MontserratAlt1-SemiBold.ttf": "ba155473d72fb574bd945b20f4598560",
"assets/assets/fonts/MontserratAlt1-Thin.ttf": "70c0ce724b3c5fb6145eeb9474acb19a",
"assets/assets/fonts/Nunito-Bold.ttf": "6f47bcfc065790f02ed3cb8b51bef56f",
"assets/assets/fonts/Nunito-BoldItalic.ttf": "725d81f848fb5c0189c9fd6102d33ee6",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "26a1ec90be635d027479741f815494cb",
"assets/assets/fonts/Nunito-ExtraLightItalic.ttf": "592f55ff60492e54ca877f588bb8d52e",
"assets/assets/fonts/Nunito-Italic.ttf": "7726e581d53ee89148d110321729344f",
"assets/assets/fonts/Nunito-Light.ttf": "c41c2502180f63ce383b6e3cc042617a",
"assets/assets/fonts/Nunito-LightItalic.ttf": "424413200c2a4c02e03d6edf064960aa",
"assets/assets/fonts/Nunito-Regular.ttf": "65bb0a158ee1967292ee4d11079d45ae",
"assets/assets/fonts/Nunito-SemiBold.ttf": "713ac08dfb7141494d4a69f344ff69fd",
"assets/assets/fonts/Nunito-SemiBoldItalic.ttf": "1b31a5055cad7ed13ad2c1bc423adec6",
"assets/assets/images/achievement.svg": "4666544ef63e119a2986e6d305e16ea7",
"assets/assets/images/app_page.svg": "0d5489d23f82016f307e6acebee7eeeb",
"assets/assets/images/brenta_long.webp": "c4b40280eb3548275558ece59ea5d772",
"assets/assets/images/comunicazione.svg": "887670989b916f9cee5fb8d8e299cdce",
"assets/assets/images/coupons.svg": "75a27da8234dcf780cc4a39700e053bb",
"assets/assets/images/discover.svg": "2312bd1a86fa4376271d5a95c259855b",
"assets/assets/images/eri.webp": "a542a13a7c009ead65a1763fddc868b8",
"assets/assets/images/revenue.svg": "4f5cbe5c6a913f80361d68dd273bc00d",
"assets/assets/images/secure_info.svg": "d95e6ccd4085d53b3a46db4dc0f910e4",
"assets/assets/images/target.svg": "32166c755d4c6311acb830e108273022",
"assets/assets/images/thom.webp": "70e5bcf032ade2a1cf6b5110cba62ac6",
"assets/assets/images/trat.webp": "55377db9429e6781b45457f243ea3d70",
"assets/assets/images/turismo.svg": "943f51fe6fbe45557582517a7a00e620",
"assets/assets/lottie/fatal_error.json": "7312cee89d15e1491d82f71895c5ed7b",
"assets/assets/videos/architecture.mp4": "3dfca961f741f20236412cd284c78ca5",
"assets/FontManifest.json": "3479787b443b05f4ad4134dee690e9ec",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "82381c006999d9330e99b2bdf42f9394",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon-16x16.png": "6a201e651cf90d8b05b74c0449d2694f",
"favicon-32x32.png": "0d27bf45b4790c73b7ad08bd9cb52f8b",
"favicon.png": "638a027660cadfaf60045a83e9c966cd",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4cfb269b948dd343f544b8259b21845c",
"/": "4cfb269b948dd343f544b8259b21845c",
"main.dart.js": "855cba1fcd7f68877bd07f45c0137735",
"manifest.json": "885dd1d1b82a940158b57d669a2e466f",
"version.json": "5d2becf7d3b503dcfda59c10faa57e37"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
