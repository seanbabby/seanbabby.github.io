'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "56f24fd90e44b17e54e0681e894612bb",
"index.html": "364b6cb24a672335335d9efccd303cf7",
"/": "364b6cb24a672335335d9efccd303cf7",
"main.dart.js": "f8370538940e0aa5d2f395a79c2310a8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "0779870e0631e939f0c163de78855e77",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eef344d26cc5e1da93c9544741975b1",
"assets/AssetManifest.json": "195a8276081cc5e462424ad3d18c7c19",
"assets/NOTICES": "a4526d2f9207ce76857de07ddec17999",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d68faf6444acb3bba871158c06109618",
"assets/assets/desktop-icon-area-04-official.svg": "50eab018d26b319d798564deca07e63b",
"assets/assets/desktop-icon-display-coin.svg": "14edc54fd46f784ef1bc2ab93f3109aa",
"assets/assets/desktop-pic-platform-appstore.webp": "c50aae2f8cc5044e192fa492b0763724",
"assets/assets/desktop-icon-commodity-nft-properties.svg": "748901056962efd917106669f3cd033c",
"assets/assets/pic-empty-default.svg": "d7fd594bde699bf670b72b36ec38ab8a",
"assets/assets/mobile-bg-area-03.webp": "3dff31cf017af312422128b960678911",
"assets/assets/desktop-image-newsfeed-avatar-normal.svg": "fe50a6fa9475789f79d965295ac14972",
"assets/assets/desktop-bg-area-01.webp": "6927a68077762073da186fa2f516e4c1",
"assets/assets/desktop-image-qpp-logo-01.svg": "3951fb2cb06efc75e526f9294de612b6",
"assets/assets/desktop-icon-area-01-03-pressed.svg": "8ad29b7ddaae6dc4e2f75ce60c5fb780",
"assets/assets/desktop-icon-newsfeed-official-large.svg": "b1c3bc90809ba92d0dcb88e252700a72",
"assets/assets/desktop-icon-area-01-01-normal.svg": "6734b87a123d0808368a6813e901e371",
"assets/assets/mobile-icon-actionbar-language-normal.svg": "cbc95f1d13362273ba628908eae6e600",
"assets/assets/desktop-pic-platform-googleplay.webp": "af2cf12e07eb7c26e7e3af8d4305a6fb",
"assets/assets/mobile-icon-actionbar-language-pressed.svg": "2e9d35676261a7dfa1992ab40bdaa459",
"assets/assets/mobile-icon-newsfeed-post-addpic-disable.svg": "603d37b428dd561e531af56ba362007f",
"assets/assets/mobile-icon-actionbar-back-normal.svg": "668ca505848ad49872f2fa0fce48b0fd",
"assets/assets/desktop-icon-area-01-04-normal.svg": "32b1584e6f07bbd62894136d658d3848",
"assets/assets/mobile-icon-image-magnifier.svg": "a473f29222bd46f84dfcb4661ac64f40",
"assets/assets/desktop-icon-area-01-02-nomal.svg": "d4ba8c2c499360b4e55d2ed5a7208185",
"assets/assets/desktop-pic-area-01.webp": "5e4a824eece8a6e52f2f527ffbd769e3",
"assets/assets/desktop-pic-kv.webp": "009f647f312a0c5a5e2e456070716ebf",
"assets/assets/mobile-icon-actionbar-list-normal.svg": "7ef6b659999bcd79ea7047349c42fed8",
"assets/assets/mobile-bg-kv.webp": "37a89c5ab0f70597be64d105cbc32158",
"assets/assets/desktop_pic_profile_avatar_default.png": "2744679a0218068a98eaa7747b26e21c",
"assets/assets/2.0x/desktop-pic-platform-appstore.webp": "0a012ef4ed9f548464d314e6fe908712",
"assets/assets/2.0x/mobile-bg-area-03.webp": "b9a2b037bbe1c8d76d489c6fd01e0a66",
"assets/assets/2.0x/desktop-bg-area-01.webp": "8f9c743dc6cf957e73738f84203963f6",
"assets/assets/2.0x/desktop-pic-platform-googleplay.webp": "22fb4c5cc13b12ac7b9c17281cb12061",
"assets/assets/2.0x/desktop-pic-area-01.webp": "260bf60c0851cba1512f0056f0f6be23",
"assets/assets/2.0x/desktop-pic-kv.webp": "3e483d266f73a80b7acacf4decce0b2f",
"assets/assets/2.0x/mobile-bg-kv.webp": "71db3fd52fd2471d0c0277e4950d1dad",
"assets/assets/2.0x/desktop_pic_profile_avatar_default.png": "08004e866aadac6615eec52ed9433fda",
"assets/assets/2.0x/mobile-pic-area-02-02.webp": "a510044413dccda548377099904adb7a",
"assets/assets/2.0x/desktop-pic-area-02-03.webp": "187cb8686b1558e8be6dfab275eb515d",
"assets/assets/2.0x/desktop-pic-area-02-02.webp": "ebcf04d84661b8ac513447ad8cd1cc18",
"assets/assets/2.0x/mobile-pic-kv.webp": "a9666aac1bc29573e616555ed2c03013",
"assets/assets/2.0x/mobile-pic-area-02-03.webp": "ba1dcd371c0f7c4cc58b28927090e596",
"assets/assets/2.0x/desktop-pic-area-02-01.webp": "004ac678bfdb716ef7d435d1f5539a2b",
"assets/assets/2.0x/mobile-pic-area-02-01.webp": "bed65f1620aeda1704e1c708252de489",
"assets/assets/2.0x/mobile-bg-area-01.webp": "444190db4865d684bc84b28869b8a21d",
"assets/assets/2.0x/desktop-bg-area-03.webp": "ae9859f5a99a72e2007c7f3e8f2fc4c2",
"assets/assets/2.0x/desktop-pic-commodity-largepic-sample-general.webp": "8bfa142eb590e9785cc0497c34460fda",
"assets/assets/desktop-icon-arrowdown-double.svg": "8bf60b5e41fe758804202960bfb12a09",
"assets/assets/mobile-pic-area-02-02.webp": "59e07fb80dcf1aeff3f91ca0ea344927",
"assets/assets/desktop-icon-area-01-03-normal.svg": "ac47992fe7479e7a1cf88c2841f79b7f",
"assets/assets/desktop-icon-commodity-nft-describe.svg": "e69ada96b2c124aca580d67d6b3bb918",
"assets/assets/desktop-pic-area-02-03.webp": "57d3b460d583dae1936ba7345a9e906d",
"assets/assets/desktop-pic-area-02-02.webp": "c5cf51024df5ea631d19073b3420ee64",
"assets/assets/pic-fail.svg": "0aa868d65b99f72a307985340c26e70a",
"assets/assets/mobile-pic-kv.webp": "e92fd587140a9ce9781289838447fa77",
"assets/assets/mobile-pic-area-02-03.webp": "5848ac53fba40ca04338d4900975498b",
"assets/assets/3.0x/desktop-pic-platform-appstore.webp": "075001f9f6a0b5f5e0625e35f290cdbb",
"assets/assets/3.0x/mobile-bg-area-03.webp": "bc937f9982b13183ac9fd6da711aadd3",
"assets/assets/3.0x/desktop-bg-area-01.webp": "70faa476bbbb01f051565de34410519e",
"assets/assets/3.0x/desktop-pic-platform-googleplay.webp": "e539fd5234f1c8d96631ba40f3b5c296",
"assets/assets/3.0x/desktop-pic-area-01.webp": "a6375942b2b504ba7262075b727b1894",
"assets/assets/3.0x/desktop-pic-kv.webp": "6d5c328f577a94ff0fd3e2153ad5d01a",
"assets/assets/3.0x/mobile-bg-kv.webp": "cdd7f11ab1bba9c9c789026f592d525a",
"assets/assets/3.0x/desktop_pic_profile_avatar_default.png": "a9811f4200df6f6be5089e67084256ba",
"assets/assets/3.0x/mobile-pic-area-02-02.webp": "c8f548d185ae1541dfb0d4fb4ba87bb3",
"assets/assets/3.0x/desktop-pic-area-02-03.webp": "e424dbe26fedd0de1877677e488d62df",
"assets/assets/3.0x/desktop-pic-area-02-02.webp": "a8c220e332d27b078dc361a90f60cb37",
"assets/assets/3.0x/mobile-pic-kv.webp": "c47a961c142eea940516db23430f65d0",
"assets/assets/3.0x/mobile-pic-area-02-03.webp": "835612d77a759e6371e36a5c071d7812",
"assets/assets/3.0x/desktop-pic-area-02-01.webp": "037474984bcc38cc0fbd5453f4ea7880",
"assets/assets/3.0x/mobile-pic-area-02-01.webp": "4010b5ce8ac4c7eb4180de11eec220eb",
"assets/assets/3.0x/mobile-bg-area-01.webp": "647add48855b2c6d1b63c095eb6baa3a",
"assets/assets/3.0x/desktop-bg-area-03.webp": "56421a4f9c38a656e591676054d3dc7f",
"assets/assets/3.0x/desktop-pic-commodity-largepic-sample-general.webp": "4e30836283eb9ae52a0c8deb6d794db4",
"assets/assets/desktop_bg_area03_box.svg": "a28f0d1b888c4716103ff85fb9d1189e",
"assets/assets/mobile-icon-actionbar-list-logout-pressed.svg": "9a97cb71efe7cdcc8daed2dbf5e29cd5",
"assets/assets/desktop-icon-list-selection-arrow-down.svg": "988358c2020e6b620873a88cbe6ebf15",
"assets/assets/langs/langs.csv": "298ec55dc9d02ca2c9ccd92264a7369d",
"assets/assets/desktop-pic-area-02-01.webp": "62dc482b8021f3f2afe0be8d5b3fc695",
"assets/assets/desktop_bg_kv.png": "9e1345977132015da73dec041ee456e8",
"assets/assets/desktop-icon-display-scratch-card-qr-code.svg": "1ee6607b23e9750e3404ba3270a7e956",
"assets/assets/desktop-icon-display-idcard.svg": "3850afe317a321cd4dffef0a8c7c1141",
"assets/assets/desktop-pic-qpp-logo-02.svg": "0f603f00c8f3978fe5b3478642e84814",
"assets/assets/desktop-pic-qpp-text.svg": "6e9a95d3f7faafbf0191e7b6cdbcaa4e",
"assets/assets/desktop-image-qpp-text.svg": "6e9a95d3f7faafbf0191e7b6cdbcaa4e",
"assets/assets/desktop-pic-qpp-logo-03.svg": "89c0dc6873e7b0f3a0f77f4e17a7efb9",
"assets/assets/desktop-icon-area-01-02-pressed.svg": "996da1e5148660c53d0f59eb51164cf5",
"assets/assets/desktop-pic-qpp-logo-01.svg": "679c2e4387bab3f4c4c7e3c64036d555",
"assets/assets/desktop-icon-arrowdown.svg": "c0a3729b91605f804d53feb60100bf86",
"assets/assets/desktop-image-error.svg": "86b8b0229b67720765b5880ba8261b51",
"assets/assets/desktop-icon-dialog-delete-normal.svg": "7c6d0ae782037195fb146b738d2c2ff8",
"assets/assets/mobile-pic-area-02-01.webp": "1373e103333bd0f1eb7f111eef092750",
"assets/assets/desktop-icon-display-ticket.svg": "8ac5f7da2b5e7c254e02d603b48fbc87",
"assets/assets/mobile-bg-area-01.webp": "1fa5369f26cf926235dd1d607f09aaa1",
"assets/assets/desktop-icon-area-01-01-pressed.svg": "eee80a154a21f376ab5895e6fcc73307",
"assets/assets/desktop-icon-display-scratch-card-serial-number.svg": "f75c2039c6cde3b78ee52cddb80a3959",
"assets/assets/desktop-icon-display-treasure.svg": "605e002962a5d1d78baa3c25341c355d",
"assets/assets/pic-qrcode.svg": "a8453dfbe26610a3060b39d456828fbf",
"assets/assets/pic-successful.svg": "a8e57e47622bfaa8a8cb62abdff084e0",
"assets/assets/desktop-pic-commodity-avatar-default.svg": "2f6242de88b9eec6ef20d0711181ac84",
"assets/assets/desktop-icon-kv-registered.svg": "3ffe502d08285974c930c39c88240aae",
"assets/assets/desktop-bg-area-03.webp": "b0f58946891875d991d8445a46a73054",
"assets/assets/desktop-icon-area-01-04-pressed.svg": "f2709ec8b0b466a585c528688afd26fa",
"assets/assets/desktop-pic-commodity-largepic-sample-general.webp": "59e5cb7ee7199ac2768530ced18eda35",
"assets/assets/mobile-icon-newsfeed-post-addpic-normal.svg": "47dac2971c3ed95737add3539caaec02",
"assets/assets/mobile-icon-newsfeed-official-small.svg": "277743eea887dc0489cae1948f86ee2c",
"assets/assets/mobile-icon-actionbar-back-pressed.svg": "9b546ed677680c88dae99644153c2888",
"assets/assets/desktop-icon-list-selection-arrow-up.svg": "47efb2622e75a96f6c6a2a2c8588005c",
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
