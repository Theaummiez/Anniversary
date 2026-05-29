const ANNIVERSARY = new Date("2026-06-04T00:00:00").getTime();

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

function scheduleNotification() {
  const now = Date.now();
  const delay = ANNIVERSARY - now;

  if (delay <= 0) {
    self.registration.showNotification("💌 Alex & Tomy", {
      body: "Ta lettre d'amour est prête ! Ouvre le site pour la découvrir 💕",
      icon: "/favicon.ico",
      badge: "/favicon.ico",
      tag: "anniversary-2026",
    });
    return;
  }

  if (delay < 24 * 60 * 60 * 1000 * 7) {
    setTimeout(() => {
      self.registration.showNotification("💌 Alex & Tomy", {
        body: "Ta lettre d'amour est prête ! Ouvre le site pour la découvrir 💕",
        icon: "/favicon.ico",
        badge: "/favicon.ico",
        tag: "anniversary-2026",
      });
    }, delay);
  }
}

self.addEventListener("activate", () => scheduleNotification());
self.addEventListener("message", (e) => {
  if (e.data === "check-anniversary") scheduleNotification();
});
