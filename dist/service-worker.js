importScripts("/precache-manifest.bb5a2760e55265a7a3694ab9147b13d1.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */
workbox.core.setCacheNameDetails({prefix: "glitch-starter"});

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('message', msg => {
  if (msg.data.action === 'skipWaiting') {
    self.skipWaiting()
  }
})
