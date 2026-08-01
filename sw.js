// Service worker mínimo: no cachea nada, solo evita el aviso de
// "SW registration failed" en consola. Si ya tienes un sw.js con caché
// offline en tu repositorio de GitHub, usa ese en lugar de este.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
