/* Nieko nekesuoja SAMONINGAI. Visas turinys ateina is Apps Script, tad kesas
   reikstu, kad viename telefone liktu sena versija - butent nuo to bego sita
   programele. Service worker cia reikalingas tik tam, kad Chrome leistu
   programele idiegti. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
