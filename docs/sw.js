self.addEventListener("install", event => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", event => {
  // 现在不做缓存，只保持最小功能
});