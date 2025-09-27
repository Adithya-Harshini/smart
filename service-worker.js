const CACHE_NAME='shikshasetu-cache-v1';
const urlsToCache=['index.html','dashboard.html','profile.html','updates.html','news.html','colleges.html','jobs.html','quizzes.html','offline.html','css/style.css','js/auth.js','js/main.js','js/location.js','js/quiz.js','js/news.js','manifest.json'];

self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))) });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('offline.html')))) });
