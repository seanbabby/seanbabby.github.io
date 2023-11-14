'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "56f24fd90e44b17e54e0681e894612bb",
"index.html": "da1a17492e03257771cd1ed9997096d8",
"/": "da1a17492e03257771cd1ed9997096d8",
"main.dart.js": "938e1e66d453d3b9815baebadb5e9ed6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eef344d26cc5e1da93c9544741975b1",
"assets/AssetManifest.json": "35a200cf6caa6fdf7f919f275739b322",
"assets/NOTICES": "dca5cfb245142eee838384ede9a17d85",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "17a13b81248a1629d40e35985454e750",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/desktop-icon-display-coin.svg": "14edc54fd46f784ef1bc2ab93f3109aa",
"assets/assets/desktop-image-newsfeed-avatar-normal.svg": "fe50a6fa9475789f79d965295ac14972",
"assets/assets/desktop-icon-newsfeed-official-large.svg": "b1c3bc90809ba92d0dcb88e252700a72",
"assets/assets/desktop_bg_area03.webp": "06d39a6daab072f27ebf91a72603e773",
"assets/assets/desktop_pic_area02_01.webp": "4d0139f338a26d70bce0989b2f2e0b15",
"assets/assets/desktop_icon_area01_03_normal.svg": "0a9c33c2210907af37b22b8c3d2b2012",
"assets/assets/mobile-icon-actionbar-language-normal.svg": "5a7bcfc28035cdd15755bcaa5231a825",
"assets/assets/mobile-icon-actionbar-language-pressed.svg": "2e9d35676261a7dfa1992ab40bdaa459",
"assets/assets/mobile-icon-newsfeed-post-addpic-disable.svg": "603d37b428dd561e531af56ba362007f",
"assets/assets/mobile-icon-actionbar-back-normal.svg": "668ca505848ad49872f2fa0fce48b0fd",
"assets/assets/desktop_pic_profile_avatar_default.png": "2744679a0218068a98eaa7747b26e21c",
"assets/assets/2.0x/desktop_bg_area03.webp": "1c368a31b5b8f69279842eac1de78656",
"assets/assets/2.0x/desktop_pic_area02_01.webp": "c39dcfa9934dfd8f1063beb140c5a9eb",
"assets/assets/2.0x/desktop_pic_profile_avatar_default.png": "08004e866aadac6615eec52ed9433fda",
"assets/assets/2.0x/desktop-bg-kv.webp": "58d8973586f3a0063d1a9597907bce8f",
"assets/assets/2.0x/desktop_pic_commodity_largepic_default.webp": "ea86a916b4f73d5b97b45127e79a252a",
"assets/assets/2.0x/desktop-pic-qpp-logo-01.png": "2269d89de681aeaba268d4c938c5c4d3",
"assets/assets/2.0x/desktop_pic_area02_03.webp": "3dcea73bb725aadb58e0b406f2882b2a",
"assets/assets/2.0x/desktop_pic_area02_02.webp": "faa0e1cdb4607a9411d7514f59b8ab30",
"assets/assets/2.0x/desktop-pic-commodity-largepic-sample-general.webp": "c5f2ff7322da77219783757113b88465",
"assets/assets/desktop-bg-kv.webp": "b94e0a57977a63d5e52b498fa719e4e2",
"assets/assets/desktop_icon_area01_04_normal.svg": "32b1584e6f07bbd62894136d658d3848",
"assets/assets/KV.png": "ce64b9ad0620acda996bc8abc216cef4",
"assets/assets/desktop_pic_commodity_largepic_default.webp": "4a37c68803b3225dc59077c3bd37eb26",
"assets/assets/3.0x/desktop_bg_area03.webp": "0f4e64a164e1fa0e4fc19450fa8614cb",
"assets/assets/3.0x/desktop_pic_area02_01.webp": "3bb9bdcb9d9e7a5bc8eaa6450d0b71a5",
"assets/assets/3.0x/desktop_pic_profile_avatar_default.png": "a9811f4200df6f6be5089e67084256ba",
"assets/assets/3.0x/desktop-bg-kv.webp": "2e1fb90fa346b70db6b24850c8328470",
"assets/assets/3.0x/desktop_pic_commodity_largepic_default.webp": "6c301919a1aaf8f06a240df5f75a3a1d",
"assets/assets/3.0x/desktop-pic-qpp-logo-01.png": "b17fe7fdfa6675c7e32e68a2f973854f",
"assets/assets/3.0x/desktop_pic_area02_03.webp": "c7a07e8398002ca5e33ba3b88c7a1779",
"assets/assets/3.0x/desktop_pic_area02_02.webp": "5a8c953249eb04b8e550844111f701dd",
"assets/assets/3.0x/desktop-pic-commodity-largepic-sample-general.webp": "b950e73462cb18a3e386c1e4b2049f80",
"assets/assets/desktop_bg_area03_box.svg": "a28f0d1b888c4716103ff85fb9d1189e",
"assets/assets/mobile-pic-qpp-logo-03.svg": "8ac28f469be92113517520cd20ce9056",
"assets/assets/mobile-icon-actionbar-list-logout-pressed.svg": "9a97cb71efe7cdcc8daed2dbf5e29cd5",
"assets/assets/langs/langs.csv": "298ec55dc9d02ca2c9ccd92264a7369d",
"assets/assets/area1-bg-xl.jpg": "5a4723e68f477b5794f0bbe0c5313c8e",
"assets/assets/desktop-icon-display-scratch-card-qr-code.svg": "1ee6607b23e9750e3404ba3270a7e956",
"assets/assets/desktop-icon-display-idcard.svg": "3850afe317a321cd4dffef0a8c7c1141",
"assets/assets/btn-apple.png": "1ef10c95139087d386eb5c147e5b2c5e",
"assets/assets/desktop-image-qpp-text.svg": "6e9a95d3f7faafbf0191e7b6cdbcaa4e",
"assets/assets/desktop-pic-qpp-logo-01.svg": "679c2e4387bab3f4c4c7e3c64036d555",
"assets/assets/desktop_icon_area01_02_nomal.svg": "564d699039b8ccdb051b4cad7e8820ac",
"assets/assets/desktop_pic_qpp_logo_03.svg": "5990509694f0c6799310763d776eb59d",
"assets/assets/desktop_icon_area04_official.svg": "848b645ed75052ba7cd02f8400f7788e",
"assets/assets/desktop-icon-display-ticket.svg": "8ac5f7da2b5e7c254e02d603b48fbc87",
"assets/assets/desktop_icon_area01_01_pressed.svg": "eee80a154a21f376ab5895e6fcc73307",
"assets/assets/desktop-pic-qpp-logo-01.png": "eab5aaac5cc9bcfc96163ddfd82bbc81",
"assets/assets/desktop-icon-display-scratch-card-serial-number.svg": "f75c2039c6cde3b78ee52cddb80a3959",
"assets/assets/desktop-icon-display-treasure.svg": "605e002962a5d1d78baa3c25341c355d",
"assets/assets/desktop_pic_area02_03.webp": "14984997806052105ba480b754e64351",
"assets/assets/desktop-pic-commodity-avatar-default.svg": "2f6242de88b9eec6ef20d0711181ac84",
"assets/assets/btn-google.png": "5ea92cc949f93028c98ccdff5a3e2c18",
"assets/assets/desktop_pic_area02_02.webp": "8c246a956299bd63f3ab350b0a37c50d",
"assets/assets/desktop-pic-commodity-largepic-sample-general.webp": "6c54e2810be2da87225dbcd1eb28bc1b",
"assets/assets/mobile-icon-newsfeed-post-addpic-normal.svg": "47dac2971c3ed95737add3539caaec02",
"assets/assets/mobile-icon-newsfeed-official-small.svg": "277743eea887dc0489cae1948f86ee2c",
"assets/assets/area1-KV.png": "9a0a844944ab13c833c1352f182cedf7",
"assets/assets/mobile-icon-actionbar-back-pressed.svg": "9b546ed677680c88dae99644153c2888",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
