const CACHE_PREFIX='riyoshi-integrated-';
const CACHE=CACHE_PREFIX+'v2-9-100';
const ASSETS=['./','./index.html','./style.css','./manifest.webmanifest','./過去問/data.js','./教材/data.js','./実過去問/index.html','./実過去問/style.css','./実過去問/data53.js','./実過去問/dataPast.js','./実過去問/dataPast40.js','./実過去問/dataPast30.js','./実過去問/dataPast24.js','./実過去問/app.js','./実過去問/images/53-q42.png','./実過去問/images/53-q46.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(res=>{if(e.request.url.startsWith(self.location.origin)&&res&&res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});}return res;}).catch(()=>caches.match(e.request).then(r=>{if(r)return r;if(e.request.mode==='navigate')return caches.match('./index.html');return undefined;})));});
