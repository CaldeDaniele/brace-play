const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./controller-C6ZPLS1L.js","./save-YImEjCcc.js","./controller-MwaZ1tf0.css"])))=>i.map(i=>d[i]);
import{A as e,B as t,D as n,E as r,F as i,G as a,H as o,I as s,J as c,K as l,L as u,M as d,N as f,O as p,P as m,R as h,U as g,V as _,W as v,Y as y,_ as b,b as x,g as S,h as ee,i as C,j as te,k as w,m as ne,n as re,q as T,r as E,t as D,v as ie,x as O,y as ae,z as k}from"./save-YImEjCcc.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var oe=`modulepreload`,A=function(e,t){return new URL(e,t).href},se={},ce=function(e){return e.pathname.endsWith(`.css`)},le=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=A(t,n);let r=s(t);if(r.href in se)return;se[r.href]=!0;let i=ce(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:oe,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ue=`false`,de=`false`,fe=ue===`true`,pe=de===`true`;function me(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,fe||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await le(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!pe){if(fe)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function he(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function ge(e){if(!/^[A-Za-z0-9_-]*$/.test(e))throw Error(`base64url non valido`);let t=e.replace(/-/g,`+`).replace(/_/g,`/`)+`=`.repeat((4-e.length%4)%4),n=atob(t);return Uint8Array.from(n,e=>e.charCodeAt(0))}var _e=e=>new TextEncoder().encode(e);async function ve(e){return[...new Uint8Array(await crypto.subtle.digest(`SHA-256`,_e(e)))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var ye={name:`ECDSA`,namedCurve:`P-256`},be={name:`ECDSA`,hash:`SHA-256`},xe=c({kty:v(`EC`),crv:v(`P-256`),x:y().min(1).max(100),y:y().min(1).max(100)});function Se(e){return crypto.subtle.importKey(`jwk`,e,ye,!0,[`verify`])}async function Ce(e){let t=await crypto.subtle.exportKey(`spki`,await Se(e));return he(new Uint8Array(await crypto.subtle.digest(`SHA-256`,t)))}async function we(e,t,n,r){return`BRACE1\n${e}\n${t}\n${n}\n${await ve(r)}`}async function Te(e,t,n,r,i){let a=await we(t,n,i,r),o=await crypto.subtle.sign(be,e,_e(a));return{time:String(i),signature:he(new Uint8Array(o))}}async function Ee(e,t,n){try{let r=t.split(`.`);if(r.length!==2)return null;let[i,a]=r;if(!await crypto.subtle.verify(be,e,ge(a),_e(i)))return null;let o=n.safeParse(JSON.parse(new TextDecoder().decode(ge(i))));return o.success?o.data:null}catch{return null}}var De=y().regex(/^[a-z][a-z0-9_]*$/).max(64),Oe=a().int().min(0),ke=t([`web`,`itch-full`]),Ae=y().regex(/^[A-Za-z0-9_-]{16,64}$/),je=c({v:v(1),kind:v(`ticket`),runId:y().min(1).max(64),deviceId:y().min(1).max(64),seed:y().regex(/^[0-9a-f]{12}$/),scenarioId:De,edition:ke,issuedAt:Oe,expiresAt:Oe}),Me=c({v:v(1),kind:v(`entitlement`),deviceId:y().min(1).max(64),unlocked:g(),limit:a().int().min(0),used:a().int().min(0),resetsAt:Oe,issuedAt:Oe,expiresAt:Oe});c({publicKey:xe}),c({edition:ke,scenarioId:De,nonce:Ae}),c({runId:y().min(1).max(64),endingId:De,days:a().int().min(0).max(1e3),discoveries:o(De).max(200)}),c({runs:o(c({nonce:Ae,seed:y().regex(/^[0-9a-f]{12}$/),scenarioId:De,startedAt:Oe})).max(20)}),c({code:y().min(1).max(40)}),c({kind:t([`tester`,`itch`]),count:a().int().min(1).max(500),batch:y().regex(/^[A-Za-z0-9_-]{1,40}$/)});var Ne=new Set([`localhost`,`127.0.0.1`,`[::1]`]);function Pe(e){let t;try{t=new URL(e)}catch{return null}let n=t.protocol===`https:`,r=t.protocol===`http:`&&Ne.has(t.hostname);return!n&&!r||t.pathname!==`/`||t.search!==``||t.hash!==``?null:t.origin}function Fe(e){let t=e.VITE_API_URL??``,n=e.VITE_SERVER_KEY??``;if(t===``||n===``)return null;let r=Pe(t);if(r===null)return null;try{let e=xe.safeParse(JSON.parse(n));return e.success?{baseUrl:r,serverKey:e.data}:null}catch{return null}}function Ie(){return Fe({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_API_URL:`https://brace-api.calde-daniele.workers.dev`,VITE_SERVER_KEY:`{"kty":"EC","crv":"P-256","x":"XcTYXiT_CPuk6G33vnv8iltxBqZwILK_t8uGrE9_g10","y":"wT0wj-Nne-DH-DI3YqHxZSHWuXXzOiHRUT3pomiVabM"}`})}var Le=[`web`,`itch-demo`,`itch-full`];function Re(e){return Le.includes(e)}function ze(e){if(Re(e))return e;throw Error(`Unknown edition "${e}" (expected one of: ${Le.join(`, `)})`)}function Be(){return ze(`web`)}var Ve=[`click`,`descent-start`,`landing`,`day-end`,`ending`,`alert`],He=e=>Ve.includes(e),Ue={click:[{at:0,freq:660,duration:.05,type:`triangle`,gain:.15}],"descent-start":[{at:0,freq:220,duration:.3,type:`sine`,gain:.25},{at:.3,freq:330,duration:.3,type:`sine`,gain:.25}],landing:[{at:0,freq:110,duration:.25,type:`square`,gain:.3},{at:.25,freq:82,duration:.5,type:`sine`,gain:.3}],"day-end":[{at:0,freq:392,duration:.18,type:`triangle`,gain:.2},{at:.18,freq:294,duration:.3,type:`triangle`,gain:.2}],ending:[{at:0,freq:262,duration:.4,type:`sine`,gain:.25},{at:.4,freq:330,duration:.4,type:`sine`,gain:.25},{at:.8,freq:392,duration:.8,type:`sine`,gain:.25}],alert:[{at:0,freq:880,duration:.12,type:`square`,gain:.15},{at:.2,freq:880,duration:.12,type:`square`,gain:.15}]},We=e=>Ue[e].map(e=>({...e}));function Ge(e){let t=null;return{play:n=>{if(!e.enabled()||t===null||!He(n))return;let r=t;for(let e of We(n)){let t=r.createOscillator(),n=r.createGain();t.type=e.type,t.frequency.value=e.freq;let i=r.currentTime+e.at;n.gain.setValueAtTime(e.gain,i),n.gain.exponentialRampToValueAtTime(1e-4,i+e.duration),t.connect(n),n.connect(r.destination),t.start(i),t.stop(i+e.duration+.02)}},unlock:()=>{if(t!==null)return;let e=typeof AudioContext>`u`?void 0:AudioContext;if(e!==void 0)try{t=new e,t.resume()}catch{t=null}}}}var Ke={landing:[90],ending:[40,60,40],alert:[30,40,30],"day-end":[25]},qe=e=>Object.hasOwn(Ke,e)?[...Ke[e]]:null;function Je(e){return{pulse(t){let n=qe(t);if(n===null||!e.enabled())return;let r=typeof navigator>`u`?void 0:navigator;r!==void 0&&typeof r.vibrate==`function`&&r.vibrate(n)}}}var Ye=c({locale:t([`it`,`en`]),sound:g(),haptics:g()});function Xe(e){return{locale:e.toLowerCase().startsWith(`en`)?`en`:`it`,sound:!0,haptics:!0}}function Ze(e,t){if(e===null)return t;try{let n=Ye.safeParse(JSON.parse(e));return n.success?n.data:t}catch{return t}}var Qe=e=>JSON.stringify(e);function $e(e,t=`brace-game`){return e===void 0?Promise.resolve(!0):new Promise(n=>{e.request(t,{ifAvailable:!0},e=>{if(e===null){n(!1);return}return n(!0),new Promise(()=>{})})})}var et=`kv`;function tt(e){return new Promise((t,n)=>{if(typeof indexedDB>`u`)return n(Error(`indexeddb-unavailable`));let r=indexedDB.open(e,1);r.onupgradeneeded=()=>r.result.createObjectStore(et),r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error??Error(`indexeddb-open-failed`))})}function nt(e,t,n){return new Promise((r,i)=>{let a=e.transaction(et,t),o=n(a.objectStore(et));a.oncomplete=()=>r(o.result),a.onerror=()=>i(a.error??Error(`indexeddb-failed`)),a.onabort=()=>i(a.error??Error(`indexeddb-aborted`))})}function rt(e=`brace`){let t=null,n=()=>t??=tt(e);return{get:async e=>{let t=await nt(await n(),`readonly`,t=>t.get(e));return typeof t==`string`?t:null},set:async(e,t)=>{await nt(await n(),`readwrite`,n=>n.put(t,e))},delete:async e=>{await nt(await n(),`readwrite`,t=>t.delete(e))}}}async function it(){let e=typeof navigator>`u`?void 0:navigator.storage;if(e===void 0||typeof e.persist!=`function`)return`unsupported`;try{return await e.persisted?.()||await e.persist()?`granted`:`denied`}catch{return`denied`}}var at=`keys`,ot=`device`;function st(e=`brace-device`){let t=null,n=()=>t??=new Promise((t,n)=>{if(typeof indexedDB>`u`)return n(Error(`indexeddb-unavailable`));let r=indexedDB.open(e,1);r.onupgradeneeded=()=>r.result.createObjectStore(at),r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error??Error(`indexeddb-open-failed`))}),r=async(e,t)=>{let r=await n();return new Promise((n,i)=>{let a=r.transaction(at,e),o=t(a.objectStore(at));a.oncomplete=()=>n(o.result),a.onerror=()=>i(a.error??Error(`indexeddb-failed`)),a.onabort=()=>i(a.error??Error(`indexeddb-aborted`))})};return{load:async()=>await r(`readonly`,e=>e.get(ot))??null,save:async e=>{await r(`readwrite`,t=>t.put(e,ot))}}}function ct(e){return e!==null&&typeof CryptoKey<`u`&&e.privateKey instanceof CryptoKey&&e.privateKey.type===`private`&&xe.safeParse(e.publicJwk).success}async function lt(e){return{id:await Ce(e.publicJwk),publicJwk:e.publicJwk,sign:(t,n,r,i)=>Te(e.privateKey,t,n,r,i)}}async function ut(e){let t=await e.load();if(ct(t))return lt(t);let n=await crypto.subtle.generateKey({name:`ECDSA`,namedCurve:`P-256`},!1,[`sign`,`verify`]),r=await crypto.subtle.exportKey(`jwk`,n.publicKey),i={privateKey:n.privateKey,publicJwk:xe.parse({kty:r.kty,crv:r.crv,x:r.x,y:r.y})};return await e.save(i),lt(i)}var dt=new WeakMap;function ft(e){let t=dt.get(e);return t===void 0&&(t=ut(e),dt.set(e,t),t.catch(()=>dt.delete(e))),t}var j=e=>typeof e==`object`&&!!e&&!Array.isArray(e),pt=l({accepted:a().int().min(0)});function mt(e){let{baseUrl:t,device:n}=e,r=e.timeoutMs??8e3,i=Se(e.serverKey),a=0,o=0;async function s(i,s,c){o=Math.max(e.now()+a,o+1);let l=await n.sign(i,s,c,o),u=new AbortController,d,f=new Promise(e=>{d=setTimeout(()=>{u.abort(),e(`timeout`)},r)});try{let r=await Promise.race([e.fetch(`${t}${s}`,{method:i,headers:{"Content-Type":`application/json`,"X-Brace-Device":n.id,"X-Brace-Time":l.time,"X-Brace-Signature":l.signature},...c===``?{}:{body:c},signal:u.signal}),f]);if(r===`timeout`||r.status>=500)return{kind:`network`};if(r.status===204)return{kind:`http`,status:204,json:null};try{return{kind:`http`,status:r.status,json:await r.json()}}catch{return{kind:`network`}}}catch{return{kind:`network`}}finally{clearTimeout(d)}}async function c(t,n,r){let i=r===void 0?``:JSON.stringify(r),o=await s(t,n,i);return o.kind===`http`&&o.status===401&&j(o.json)&&o.json.error===`stale_request`&&typeof o.json.serverTime==`number`?(a=o.json.serverTime-e.now(),s(t,n,i)):o}async function l(e,t){if(typeof e!=`string`)return null;let n=await Ee(await i,e,t);return n===null?null:{token:e,payload:n}}async function u(e){let t=await l(e,Me);return t!==null&&t.payload.deviceId===n.id?t:null}let d=(e,t)=>({kind:`rejected`,status:e,code:j(t)&&typeof t.error==`string`?t.error:`unknown`});async function f(e){if(e.kind===`network`)return e;if(e.status!==200)return d(e.status,e.json);let t=j(e.json)?await u(e.json.entitlement):null;return t===null?{kind:`invalid-token`}:{kind:`ok`,value:t}}return{async register(){let e=await c(`POST`,`/device`,{publicKey:n.publicJwk});return e.kind===`http`&&e.status===200&&(!j(e.json)||e.json.deviceId!==n.id)?{kind:`invalid-token`}:f(e)},async entitlement(){return f(await c(`GET`,`/entitlement`))},async startRun(e,t,r){let i=await c(`POST`,`/run/start`,{edition:t,scenarioId:e,nonce:r});if(i.kind===`network`)return i;if(i.status===403&&j(i.json)&&i.json.error===`quota_exhausted`){let e=await u(i.json.entitlement);return e===null?{kind:`invalid-token`}:{kind:`quota`,entitlement:e}}if(i.status!==200)return d(i.status,i.json);if(!j(i.json))return{kind:`invalid-token`};let a=await l(i.json.ticket,je),o=await u(i.json.entitlement);return a===null||o===null||a.payload.deviceId!==n.id||a.payload.scenarioId!==e||a.payload.edition!==t?{kind:`invalid-token`}:{kind:`ok`,value:{ticket:a,entitlement:o}}},async redeem(e){return f(await c(`POST`,`/unlock/redeem`,{code:e}))},verifyEntitlement:e=>u(e),async sync(e){let t=await c(`POST`,`/run/sync`,{runs:e});if(t.kind===`network`)return t;if(t.status!==200)return d(t.status,t.json);let n=pt.safeParse(t.json);return n.success?{kind:`ok`,value:{accepted:n.data.accepted}}:{kind:`invalid-token`}}}}var ht=/^[A-Za-z0-9_-]{1,64}$/,gt=()=>crypto.getRandomValues(new Uint8Array(6));function _t(e,t=gt){let n=new URLSearchParams(e).get(`seed`);return n!==null&&ht.test(n)?n:[...t()].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var vt=e=>[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``),yt=e=>crypto.getRandomValues(new Uint8Array(e));function bt(e){return{usesServer:!1,load:()=>Promise.resolve(),request:t=>Promise.resolve(e(t)),status:()=>null,refresh:()=>Promise.resolve(),syncPending:()=>Promise.resolve(),redeem:()=>Promise.resolve({kind:`error`,code:`no_server`}),subscribe:()=>()=>{}}}function xt(e,t=()=>yt(6)){return bt(()=>({kind:`ticket`,seed:_t(e,t),source:`local`}))}var St=`de0000000001`;function Ct(){return bt(()=>({kind:`ticket`,seed:St,source:`demo`}))}function wt(){return bt(()=>({kind:`error`,code:`unconfigured`}))}var Tt=`server-state`,Et=50,Dt=20,Ot=y().regex(/^[a-z][a-z0-9_]*$/).max(64),kt=l({nonce:Ae,seed:y().regex(/^[0-9a-f]{12}$/),scenarioId:Ot,startedAt:a().int().min(0)}),At=l({v:v(1),registered:g(),entitlement:y().nullable(),lastSeen:a().int().min(0),pending:o(kt).max(Et),start:l({scenarioId:Ot,nonce:Ae}).nullable()}),jt=()=>({v:1,registered:!1,entitlement:null,lastSeen:0,pending:[],start:null});function Mt(e){let{kv:t,edition:n}=e,r=jt(),i=null,a=new Set,o=null,s=Promise.resolve(),c=()=>{o??=e.getClient().catch(e=>{throw o=null,e});let t=o;return new Promise((n,r)=>{let i=setTimeout(()=>{o===t&&(o=null),r(Error(`client-timeout`))},e.clientTimeoutMs??1e4);t.then(e=>{clearTimeout(i),n(e)},e=>{clearTimeout(i),r(e instanceof Error?e:Error(String(e)))})})},l=e=>{let t=s.then(e,e);return s=t.catch(()=>void 0),t},u=()=>{for(let e of[...a])e()},d=()=>Math.max(e.now(),r.lastSeen),f=async()=>{try{await t.set(Tt,JSON.stringify(r))}catch{}},p=()=>{r={...r,lastSeen:Math.max(r.lastSeen,e.now())}},m=async t=>{i=t,r={...r,entitlement:t.token,lastSeen:Math.max(r.lastSeen,t.payload.issuedAt,e.now())},await f(),u()},h=()=>i!==null&&i.payload.unlocked&&d()<i.payload.expiresAt;async function g(e){let t=await e.register();return t.kind===`ok`?(r={...r,registered:!0},await m(t.value),null):t.kind===`network`?{kind:`network`}:t.kind===`rejected`?{kind:`error`,code:t.code}:{kind:`error`,code:`invalid_token`}}async function _(t){if(!h())return{kind:`network`};let n=vt(e.random(6)),i=r.start?.nonce??he(e.random(16)),a=[...r.pending,{nonce:i,seed:n,scenarioId:t,startedAt:d()}].slice(-50);return r={...r,pending:a,start:null},await f(),{kind:`ticket`,seed:n,source:`offline`}}async function v(e){for(;r.pending.length>0;){let t=r.pending.slice(0,Dt),n=await e.sync(t);if(n.kind===`network`||n.kind===`invalid-token`||n.kind===`rejected`&&(n.code===`rate_limited`||n.code===`stale_request`))return;r={...r,pending:r.pending.slice(t.length)},await f()}}return{usesServer:!0,async load(){try{let e=await t.get(Tt),n=e===null?null:At.safeParse(JSON.parse(e));r=n?.success?n.data:jt()}catch{r=jt()}if(i=null,r.entitlement!==null){try{i=await(await c()).verifyEntitlement(r.entitlement)}catch{i=null}i===null&&(r={...r,entitlement:null})}u()},request(t){return l(async()=>{let i;try{i=await c()}catch{return{kind:`error`,code:`device_key`}}if(p(),!r.registered){let e=await g(i);if(e!==null)return e}let a=r.start?.scenarioId===t?r.start.nonce:he(e.random(16));r={...r,start:{scenarioId:t,nonce:a}},await f();for(let e=0;;e+=1){let o=await i.startRun(t,n,a);if(o.kind===`ok`)return r={...r,start:null},await m(o.value.entitlement),{kind:`ticket`,seed:o.value.ticket.payload.seed,source:`server`};if(o.kind===`quota`)return r={...r,start:null},await m(o.entitlement),{kind:`quota`,resetsAt:o.entitlement.payload.resetsAt,limit:o.entitlement.payload.limit};if(o.kind===`network`)return _(t);if(o.kind===`rejected`&&o.code===`unknown_device`&&e===0){let e=await g(i);if(e!==null)return e;continue}return{kind:`error`,code:o.kind===`rejected`?o.code:`invalid_token`}}})},status(){if(i===null)return null;let e=i.payload,t=e.resetsAt<=d();return{unlocked:e.unlocked,limit:e.limit,used:t?0:e.used,resetsAt:t?null:e.resetsAt}},refresh(){return l(async()=>{let e;try{e=await c()}catch{return}if(p(),!r.registered)return;let t=await e.entitlement();t.kind===`ok`?await m(t.value):t.kind===`rejected`&&t.code===`unknown_device`&&await g(e),await v(e)})},syncPending(){return l(async()=>{try{await v(await c())}catch{}})},redeem(e){return l(async()=>{let t;try{t=await c()}catch{return{kind:`error`,code:`device_key`}}if(p(),!r.registered){let e=await g(t);if(e?.kind===`network`)return{kind:`network`};if(e?.kind===`error`)return{kind:`error`,code:e.code}}let n=await t.redeem(e);if(n.kind===`rejected`&&n.code===`unknown_device`){let r=await g(t);if(r?.kind===`network`)return{kind:`network`};if(r?.kind===`error`)return{kind:`error`,code:r.code};n=await t.redeem(e)}if(n.kind===`ok`)return await m(n.value),{kind:`ok`};if(n.kind===`network`)return{kind:`network`};if(n.kind===`invalid-token`)return{kind:`error`,code:`invalid_token`};switch(n.code){case`invalid_code`:return{kind:`invalid`};case`already_redeemed`:return{kind:`used`};case`rate_limited`:return{kind:`limited`};default:return{kind:`error`,code:n.code}}})},subscribe(e){return a.add(e),()=>a.delete(e)}}}function Nt(e){let{edition:t,config:n}=e;if(t===`itch-demo`)return Ct();if(n!==null){let r=e.fetch??((e,t)=>fetch(e,t));return Mt({getClient:async()=>mt({baseUrl:n.baseUrl,serverKey:n.serverKey,device:await ft(st()),fetch:r,now:()=>Date.now()}),kv:e.kv,edition:t,now:()=>Date.now(),random:yt})}return e.debug?xt(e.search):wt()}var Pt=`BRACE1:`;function Ft(e){let t=new TextEncoder().encode(e),n=``;for(let e of t)n+=String.fromCharCode(e);return Pt+btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function It(e){let t=e.replace(/\s+/g,``);if(!t.startsWith(Pt))throw Error(`save-code-invalid`);let n=t.slice(7);if(n===``||!/^[A-Za-z0-9_-]+$/.test(n))throw Error(`save-code-invalid`);try{let e=atob(n.replace(/-/g,`+`).replace(/_/g,`/`)),t=Uint8Array.from(e,e=>e.charCodeAt(0));return new TextDecoder(`utf-8`,{fatal:!0}).decode(t)}catch{throw Error(`save-code-invalid`)}}function Lt(e){return`brace-salvataggio-${e.toISOString().slice(0,10)}.json`}function Rt(e,t){let n=URL.createObjectURL(new Blob([t],{type:`application/json`})),r=document.createElement(`a`);r.href=n,r.download=e,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var zt=(e,t)=>[...new Set([...e,...t])].sort();function Bt(e){return{archiveUnlocked:[],scenariosUnlocked:Object.values(e.scenarios).filter(e=>e.unlockedBy===void 0).map(e=>e.id).sort(),stats:{runsStarted:0,runsCompleted:0,endingsSeen:[],bestDay:0}}}function Vt(e){return{...e,stats:{...e.stats,runsStarted:e.stats.runsStarted+1}}}function Ht(e,t,n){if(t.phase!==`ended`||t.endingId===null)throw Error(`applyRunEnd: la run deve essere in fase ended`);let r=zt(e.archiveUnlocked,t.colony?.archive??[]),i=Object.values(n.scenarios).filter(e=>e.unlockedBy!==void 0&&r.includes(e.unlockedBy)).map(e=>e.id);return{archiveUnlocked:r,scenariosUnlocked:zt(e.scenariosUnlocked,i),stats:{runsStarted:e.stats.runsStarted,runsCompleted:e.stats.runsCompleted+1,endingsSeen:zt(e.stats.endingsSeen,[t.endingId]),bestDay:Math.max(e.stats.bestDay,t.day)}}}function Ut(e,t){let n=e,r=k(t.scenarios,e.scenarioId);if(r===void 0)return null;if(e.landing!==null){let t=new Set(r.characters.map(e=>e.id)),i=new Set(r.cargo),a=e.landing.injured.filter(e=>t.has(e)),o=e.landing.lostItems.filter(e=>i.has(e));(a.length!==e.landing.injured.length||o.length!==e.landing.lostItems.length)&&(n={...n,landing:{...e.landing,injured:a,lostItems:o}})}let i=n.colony;return i!==null&&i.pendingEvent!==null&&k(t.events,i.pendingEvent)===void 0&&(n={...n,colony:{...i,pendingEvent:null}}),n}var Wt=`save`,Gt=`diary`,Kt=l({seed:y().nullable(),days:o(l({day:a().int(),entries:o(_())}))});function qt(e){let{content:t,kv:n}=e,r=()=>({profile:Bt(t),run:null,diary:[],loadError:null,saveFailed:!1,resumedDescent:!1}),i=r(),a=new Set,o=Promise.resolve(),s=!1,c=()=>{for(let e of[...a])e()},l=e=>{i={...i,...e},c()};function u(){if(i.loadError!==null||s)return;let e=re({formatVersion:2,profile:i.profile,run:i.run}),t=JSON.stringify({seed:i.run?.seed??null,days:i.diary});o=o.then(async()=>{try{await n.set(Wt,e),await n.set(Gt,t),i.saveFailed&&l({saveFailed:!1})}catch{i.saveFailed||l({saveFailed:!0})}})}function d(n){let r=i.run;if(r===null)throw Error(`azione "${n.type}" senza una run in corso`);let a=C(r,n,t),o=i.profile,s=i.diary;r.phase!==`ended`&&a.state.phase===`ended`&&(o=Ht(o,a.state,t));for(let e of a.effects)e.type===`day-log`&&(s=[...s,{day:r.day,entries:e.entries}].slice(-40));i={...i,run:a.state,profile:o,diary:s},u(),c();for(let t of a.effects)e.onEffect?.(t)}function f(){let e=i.run;e!==null&&(e.phase===`briefing`?l({run:null}):e.phase===`descent`&&(d(E(e,t)),l({resumedDescent:!0})))}async function p(e){if(e===null)return[];try{let t=await n.get(Gt);if(t===null)return[];let r=Kt.safeParse(JSON.parse(t));return!r.success||r.data.seed!==e.seed?[]:r.data.days}catch{return[]}}return{state:()=>i,subscribe(e){return a.add(e),()=>a.delete(e)},async load(){let e;try{e=await n.get(Wt)}catch{s=!0,i={...r(),saveFailed:!0},c();return}if(e===null){i=r(),c();return}try{let n=D(e),a=n.run===null?null:Ut(n.run,t),o=await p(a);i={...r(),profile:n.profile,run:a,diary:o},c()}catch(e){if(!(e instanceof h))throw e;i={...r(),loadError:e},c();return}try{f()}catch(e){console.error(e),i={...i,run:null,diary:[],resumedDescent:!1},u(),c()}},startRun(e,n){if(i.loadError!==null)throw Error(`startRun: il salvataggio non è leggibile`);if(!i.profile.scenariosUnlocked.includes(e))throw Error(`startRun: scenario "${e}" non sbloccato`);let r=O(n,e,t);i={...i,run:r,profile:Vt(i.profile),diary:[],resumedDescent:!1},d({type:`begin-descent`})},descentProgress(e,t){i.run?.phase===`descent`&&d({type:`descent-progress`,log:e,tick:t})},finishDescent:e=>d({type:`finish-descent`,log:e}),beginDays:()=>d({type:`begin-days`}),advanceDay:e=>d({type:`advance-day`,decisions:e}),leaveEnded(){i.run?.phase===`ended`&&(i={...i,run:null,diary:[]},u(),c())},exportSave:()=>re({formatVersion:2,profile:i.profile,run:i.run}),async importSave(e){let n=D(e),a=n.run===null?null:Ut(n.run,t);if(n.run!==null&&a===null)throw new h(`invalid`,`la run salvata usa uno scenario che questa versione non ha`);let l=i,d=s;i={...r(),profile:n.profile,run:a};try{f()}catch(e){throw i=l,s=d,c(),new h(`invalid`,e instanceof Error?e.message:`salvataggio non utilizzabile`)}s=!1,c(),u(),await o},async reset(){await o;try{await n.delete(Wt),await n.delete(Gt)}catch{}s=!1,i=r(),c()},flush:()=>o}}function M(e,t={},...n){let r=document.createElement(e);t.class!==void 0&&(r.className=t.class),t.testid!==void 0&&(r.dataset.testid=t.testid),t.text!==void 0&&(r.textContent=t.text),t.type!==void 0&&r.setAttribute(`type`,t.type),t.href!==void 0&&r.setAttribute(`href`,t.href),t.value!==void 0&&(r.value=t.value),t.disabled!==void 0&&(r.disabled=t.disabled),t.hidden===!0&&(r.hidden=!0);for(let[e,n]of Object.entries(t.attrs??{}))r.setAttribute(e,n);for(let[e,n]of Object.entries(t.data??{}))r.dataset[e]=n;t.onClick!==void 0&&r.addEventListener(`click`,t.onClick),t.onChange!==void 0&&r.addEventListener(`change`,t.onChange),t.onInput!==void 0&&r.addEventListener(`input`,t.onInput);for(let e of n)e!=null&&e!==!1&&r.append(typeof e==`number`?String(e):e);return r}function N(e,t,n={}){return M(`button`,{class:`btn ${n.kind??`primary`}`,type:`button`,text:e,...n.testid===void 0?{}:{testid:n.testid},...n.disabled===void 0?{}:{disabled:n.disabled},onClick:()=>{n.sfx?.(`click`),t()}})}var Jt={it:`en`,en:`it`};function Yt(e,t){return(n,r)=>{let i=k(e.i18n[t],n)??k(e.i18n[Jt[t]],n)??n;return r===void 0?i:i.replace(/\{(\w+)\}/g,(e,t)=>Object.hasOwn(r,t)?String(r[t]):e)}}var Xt=[`jettison`,`steer`,`chute`,`react`],Zt=[{id:`oxygen`,from:2},{id:`thermal`,from:1},{id:`insulated`,from:1},{id:`signal`,from:2}];function Qt(e,t){let n=k(e.scenarios,t);if(n===void 0)throw Error(`briefing: scenario "${t}" non esiste`);return{crew:n.characters.map(e=>({id:e.id,nameKey:e.nameKey,roleKey:e.roleKey,bioKey:e.bioKey,portrait:e.portrait,abilities:e.abilities.map(e=>({skill:e.skill,bonus:e.bonus}))})),cargo:n.cargo.flatMap(t=>{let n=k(e.items,t);return n===void 0?[]:[{id:n.id,nameKey:n.nameKey,descriptionKey:n.descriptionKey,whenMissingKey:n.whenMissingKey,icon:n.icon,mass:n.mass}]}),chains:Zt.map(e=>({id:e.id,fromKeys:Array.from({length:e.from},(t,n)=>`ui.briefing.chain.${e.id}.from.${n}`),toKey:`ui.briefing.chain.${e.id}.to`})),gestures:Xt}}function $t(e,t){e.indexOf(t)===-1&&e.push(t)}function en(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var P=(e,t,n)=>n>t?t:n<e?e:n,F={},tn=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),nn=e=>typeof e==`object`&&!!e,rn=e=>/^0[^.\s]+$/u.test(e);function an(e){let t;return()=>(t===void 0&&(t=e()),t)}var on=e=>e,sn=(...e)=>e.reduce((e,t)=>n=>t(e(n))),cn=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ln=class{constructor(){this.subscriptions=[]}add(e){return $t(this.subscriptions,e),()=>this.remove(e)}remove(e){en(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},I=e=>e*1e3,L=e=>e/1e3,un=(e,t)=>t?1e3/t*e:0,dn=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},fn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,pn=1e-7,mn=12;function hn(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=fn(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>pn&&++s<mn);return o}function gn(e,t,n,r){if(e===t&&n===r)return on;let i=t=>hn(t,0,1,e,n);return e=>e===0||e===1?e:fn(i(e),t,r)}var _n=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vn=e=>t=>1-e(1-t),yn=gn(.33,1.53,.69,.99),bn=vn(yn),xn=_n(bn),Sn=e=>e>=1?1:(e*=2)<1?.5*bn(e):.5*(2-2**(-10*(e-1))),Cn=e=>1-Math.sin(Math.acos(e)),wn=vn(Cn),Tn=_n(Cn),En=gn(.42,0,1,1),Dn=gn(0,0,.58,1),On=gn(.42,0,.58,1),kn=e=>Array.isArray(e)&&typeof e[0]!=`number`;function An(e,t){return kn(e)?e[dn(0,e.length,t)]:e}var jn=e=>Array.isArray(e)&&typeof e[0]==`number`,Mn={linear:on,easeIn:En,easeInOut:On,easeOut:Dn,circIn:Cn,circInOut:Tn,circOut:wn,backIn:bn,backInOut:xn,backOut:yn,anticipate:Sn},Nn=e=>typeof e==`string`,Pn=e=>{if(jn(e)){e.length;let[t,n,r,i]=e;return gn(t,n,r,i)}return Nn(e)?(Mn[e],`${e}`,Mn[e]):e},R={delta:0,timestamp:0,isProcessing:!1},Fn;function In(){Fn=void 0}var z={now:()=>(Fn===void 0&&z.set(R.isProcessing||F.useManualTiming?R.timestamp:performance.now()),Fn),set:e=>{Fn=e,queueMicrotask(In)}},B=e=>Math.round(e*1e5)/1e5,Ln=(e=>t=>typeof t==`string`&&t.startsWith(e))(`var(--`),Rn=e=>Ln(e)?zn.test(e.split(`/*`)[0].trim()):!1,zn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Bn(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var V={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Vn={...V,transform:e=>P(0,1,e)},Hn={...V,default:1},Un=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Wn(e){return e==null}var Gn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kn=(e,t)=>n=>!!(typeof n==`string`&&Gn.test(n)&&n.startsWith(e)||t&&!Wn(n)&&Object.prototype.hasOwnProperty.call(n,t)),qn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Un);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Jn=e=>P(0,255,e),Yn={...V,transform:e=>Math.round(Jn(e))},H={test:Kn(`rgb`,`red`),parse:qn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Yn.transform(e)+`, `+Yn.transform(t)+`, `+Yn.transform(n)+`, `+B(Vn.transform(r))+`)`};function Xn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Zn={test:Kn(`#`),parse:Xn,transform:H.transform},Qn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),U=Qn(`deg`),$n=Qn(`%`),W=Qn(`px`),er=Qn(`vh`),tr=Qn(`vw`),nr={...$n,parse:e=>$n.parse(e)/100,transform:e=>$n.transform(e*100)},rr={test:Kn(`hsl`,`hue`),parse:qn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+$n.transform(B(t))+`, `+$n.transform(B(n))+`, `+B(Vn.transform(r))+`)`},G={test:e=>H.test(e)||Zn.test(e)||rr.test(e),parse:e=>H.test(e)?H.parse(e):rr.test(e)?rr.parse(e):Zn.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?H.transform(e):rr.transform(e),getAnimatableNone:e=>{let t=G.parse(e);return t.alpha=0,G.transform(t)}},ir=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ar=new RegExp(Un.source),or=new RegExp(ir.source,`i`);function sr(e){return isNaN(e)&&typeof e==`string`&&(ar.test(e)||or.test(e))}var cr=`number`,lr=`color`,ur=`var`,dr=`var(`,fr="${}",pr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function mr(e){let t=e.toString();return ar.test(t)||or.test(t)}function hr(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(pr,e=>(G.test(e)?(r.color.push(a),i.push(lr),n.push(G.parse(e))):e.startsWith(dr)?(r.var.push(a),i.push(ur),n.push(e)):(r.number.push(a),i.push(cr),n.push(parseFloat(e))),++a,fr)).split(fr),indexes:r,types:i}}function gr(e){return hr(e).values}function _r({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===cr?B(r[a]):e===lr?G.transform(r[a]):r[a]}return i}}function vr(e){return _r(hr(e))}var yr=e=>typeof e==`number`?0:G.test(e)?G.getAnimatableNone(e):e,br=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:yr(e);function xr(e){let t=hr(e);return _r(t)(t.values.map((e,n)=>br(e,t.split[n])))}var K={test:sr,parse:gr,createTransformer:vr,getAnimatableNone:xr};function Sr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Cr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Sr(s,r,e+1/3),a=Sr(s,r,e),o=Sr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function wr(e,t){return n=>n>0?t:e}var Tr=(e,t,n)=>e+(t-e)*n,Er=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Dr=[Zn,H,rr],Or=e=>Dr.find(t=>t.test(e));function kr(e){let t=Or(e);if(!t)return`${e}`,!1;let n=t.parse(e);return t===rr&&(n=Cr(n)),n}var Ar=(e,t)=>{let n=kr(e),r=kr(t);if(!n||!r)return wr(e,t);let i={...n};return e=>(i.red=Er(n.red,r.red,e),i.green=Er(n.green,r.green,e),i.blue=Er(n.blue,r.blue,e),i.alpha=Tr(n.alpha,r.alpha,e),H.transform(i))},jr=new Set([`none`,`hidden`]);function Mr(e,t){return jr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Nr(e,t){return n=>Tr(e,t,n)}function Pr(e){return typeof e==`number`?Nr:typeof e==`string`?Rn(e)?wr:G.test(e)?Ar:Rr:Array.isArray(e)?Fr:typeof e==`object`?G.test(e)?Ar:Ir:wr}function Fr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Pr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ir(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Pr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Lr(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Rr=(e,t)=>{let n=K.createTransformer(t),r=hr(e),i=hr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?jr.has(e)&&!i.values.length||jr.has(t)&&!r.values.length?Mr(e,t):sn(Fr(Lr(r,i),i.values),n):(`${e}${t}`,wr(e,t))},zr=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function Br(e,t){let n=zr.exec(e);if(!n)return;let r=zr.exec(t);if(!r||n[2]!==r[2])return;let i=n[2],a=parseFloat(n[1]),o=parseFloat(r[1]);return e=>B(Tr(a,o,e))+i}function Vr(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return Tr(e,t,n);if(typeof e==`string`&&typeof t==`string`){let n=Br(e,t);if(n)return n}return Pr(e)(e,t)}var Hr=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Ur(e){let t=new Set,n=new Set,r=!1,i=!1,a=new Set,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(n.add(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Wr=40;function Gr(e,t,n={delta:0,timestamp:0,isProcessing:!1}){let r=!1,i=!0,a=()=>r=!0,o=Hr.reduce((e,t)=>(e[t]=Ur(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=F.useManualTiming,o=a?n.timestamp:performance.now();r=!1,a||(n.delta=i?1e3/60:Math.max(Math.min(o-n.timestamp,Wr),1)),n.timestamp=o,n.isProcessing=!0,s.process(n),c.process(n),l.process(n),u.process(n),d.process(n),f.process(n),p.process(n),m.process(n),n.isProcessing=!1,r&&t&&(i=!1,e(h))},g=()=>{r=!0,i=!0,n.isProcessing||e(h)};return{schedule:Hr.reduce((e,t)=>{let n=o[t];return e[t]=(e,t=!1,i=!1)=>(r||g(),n.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Hr.length;t++)o[Hr[t]].cancel(e)},state:n,steps:o}}var{schedule:q,cancel:Kr,steps:qr}=Gr(typeof requestAnimationFrame<`u`?requestAnimationFrame:on,!0,R),Jr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>q.update(t,e),stop:()=>Kr(t),now:()=>R.isProcessing?R.timestamp:z.now()}},Yr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Xr=2e4;function Zr(e,t=50,n=Xr,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function Qr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Zr(r),Xr);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:L(i)}}var J={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},$r=e=>e<0?1/Math.max(1+e,J.minDamping):Math.max(1-e,J.minDamping);function ei(e,t){if(!(e>1))return 1;let n=Math.sqrt(e*e-1),r=e-n,i=e+n,a=2*n*Math.exp(-t)*(1+t);return ri(e=>i*Math.exp(-r*e)-r*Math.exp(-i*e)-a,e=>Math.exp(-i*e)-Math.exp(-r*e),t)/t}function ti(e,t){return e*Math.sqrt(1-t*t)}var ni=12;function ri(e,t,n){let r=n;for(let n=1;n<ni;n++)r-=e(r)/t(r);return r}var ii=.001;function ai({duration:e=J.duration,bounce:t=J.bounce}){let n,r;J.maxDuration;let i=$r(t);e=P(J.minDuration,J.maxDuration,L(e)),i<1?(n=t=>{let n=t*i,r=n*e,a=ti(t,i),o=Math.exp(-r);return ii-n/a*o},r=t=>{let r=t*i*e,a=i*i*t*t*e,o=Math.exp(-r),s=ti(t*t,i);return(-n(t)+ii>0?-1:1)*-a*o/s}):(n=t=>-.001+Math.exp(-t*e)*(t*e+1),r=t=>Math.exp(-t*e)*(-t*(e*e)));let a=5/e,o=ri(n,r,a),s=o*ei(i,o*e),c=s*s;return{stiffness:c,damping:i*2*Math.sqrt(c),duration:I(e)}}var oi=(e,t)=>(t?e>=0:e>0)&&e<1/0;function si(e,t){if(oi(e,t))return e}function ci(e){let t=si(e.stiffness),n=si(e.damping,!0),r=si(e.mass),i={...e,stiffness:t??J.stiffness,damping:n??J.damping,mass:r??J.mass,isResolvedFromDuration:!1,isTimeDefined:(t??n??r)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(i.isTimeDefined){if(e.visualDuration){let t=$r(e.bounce||0),n=2*Math.PI/(e.visualDuration*1.2)*ei(t,2*Math.PI/1.2);i.stiffness=n*n,i.damping=2*t*Math.sqrt(i.stiffness)}else Object.assign(i,ai(i)),i.isResolvedFromDuration=!0;(!oi(i.stiffness)||!oi(i.damping,!0))&&(i.stiffness=J.stiffness,i.damping=J.damping)}return i}function li(e=J.visualDuration,t=J.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},r=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:o,damping:s,mass:c,duration:l,isResolvedFromDuration:u,isTimeDefined:d}=ci({...n}),f=e=>d?0:-L(e),p=s/(2*Math.sqrt(o*c)),m=L(Math.sqrt(o/c)),h=p*m,g={target:i,delta:i-r,velocity:f(n.velocity||0)||0,restSpeed:0,restDelta:0},_=()=>{let e=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(e?J.restSpeed.granular:J.restSpeed.default),g.restDelta=n.restDelta||(e?J.restDelta.granular:J.restDelta.default)};_();let v,y,b;if(p<1){let e=ti(m,p),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{t.A=(g.velocity+h*g.delta)/e,t.sinC=h*t.A+g.delta*e,t.cosC=h*g.delta-t.A*e};let n=n=>{n!==t.t&&(t.t=n,t.env=Math.exp(-h*n),t.sin=Math.sin(e*n),t.cos=Math.cos(e*n))};v=e=>(n(e),g.target-t.env*(t.A*t.sin+g.delta*t.cos)),y=e=>(n(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(p===1){v=e=>g.target-Math.exp(-m*e)*(g.delta+(g.velocity+m*g.delta)*e);let e={C:0};b=()=>{e.C=g.velocity+m*g.delta},y=t=>Math.exp(-m*t)*(m*e.C*t-g.velocity)}else{let e=m*Math.sqrt(p*p-1),t=h-e,n=h+e,r=d?1/0:300/e,i=(e,t)=>Math.exp(t>r?-e*r-h*(t-r):-e*t),a={S:0,F:0};b=()=>{let t=(g.velocity+h*g.delta)/e;a.S=(g.delta+t)/2,a.F=(g.delta-t)/2},v=e=>g.target-a.S*i(t,e)-a.F*i(n,e),y=e=>t*a.S*i(t,e)+n*a.F*i(n,e)}b();let x=u&&l||null,S={calculatedDuration:x,retarget:(e,t)=>{g.target=e[e.length-1],g.delta=g.target-e[0],g.velocity=f(t),n.restSpeed&&n.restDelta||_(),S.calculatedDuration=x,a.done=!1,b()},velocity:e=>I(y(e)),next:e=>{let t=v(e);if(u)a.done=e>=l;else{let n=I(y(e));a.done=Math.abs(n)<=g.restSpeed&&Math.abs(g.target-t)<=g.restDelta}return a.value=a.done?g.target:t,a},toString:()=>{let e=Math.min(Zr(S),Xr),t=Yr(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}li.applyToOptions=e=>{let t=Qr(e,100,li);return e.ease=t.ease,e.duration=I(t.duration),e.type=`keyframes`,e};function ui({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=li({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function di(e,t,n){let r=[],i=n||F.mix||Vr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=sn(Array.isArray(t)?t[n]||on:t,a)),r.push(a)}return r}function fi(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=di(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=cn(e[r],e[r+1],n);return s[r](i)};return n?t=>l(P(e[0],e[a-1],t)):l}function pi(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=cn(0,t,r);e.push(Tr(n,1,i))}}function mi(e){let t=[0];return pi(t,e.length-1),t}function hi(e,t){return e.map(e=>e*t)}function gi(e,t){return e.map(()=>t||On).splice(0,e.length-1)}function _i({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=kn(r)?r.map(Pn):Pn(r)||On,a={done:!1,value:t[0]};if(t.length===2&&!Array.isArray(i)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){let[n,r]=t,o=n===r?void 0:(F.mix||Vr)(n,r);return{calculatedDuration:e,next:t=>(a.value=o?o(i(e>0?P(0,1,t/e):1)):r,a.done=t>=e,a)}}let o=fi(hi(n&&n.length===t.length?n:mi(t),e),t,{ease:Array.isArray(i)?i:gi(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var vi=5;function yi(e,t,n){let r=Math.max(t-vi,0);return un(n-e(r),t-r)}function bi(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):yi(t=>e.next(t).value,t,e.next(t).value)}var xi=e=>e!==null;function Si(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(xi),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Ci={decay:ui,inertia:ui,tween:_i,keyframes:_i,spring:li};function wi(e){typeof e.type==`string`&&(e.type=Ci[e.type])}function Ti(e,t){return{kind:e,animation:t,timestamp:z.now(),frameTimestamp:R.timestamp,frameIsProcessing:R.isProcessing}}function Ei(e,t,n){let r=globalThis.__MOTION_INSPECT__;if(r)try{r({...Ti(`animation-start`,e),options:n?{...t,...n}:t})}catch{}}var Di=class{constructor(){this.isResolved=!1}get finished(){return this._finished||=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e}),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}},Oi=e=>e/100,ki=class extends Di{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==z.now()&&this.tick(z.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),Ei(this,this.options)}initAnimation(){let{options:e}=this;wi(e);let{type:t=_i,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||_i;s!==_i&&typeof o[0]!=`number`&&(this.mixKeyframes=sn(Oi,Vr(o[0],o[1])),o=[0,100]);let c=s(o===e.keyframes?e:{...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Zr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=P(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ui&&(b.value=Si(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return L(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+L(e)}get time(){return L(this.currentTime)}set time(e){e=I(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return bi(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(z.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=L(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Jr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(z.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}},Ai=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ji(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Un)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Ai.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Mi=/\b([a-z-]*)\(.*?\)/gu,Ni={...K,getAnimatableNone:e=>{let t=e.match(Mi);return t?t.map(ji).join(` `):e}},Pi={...K,getAnimatableNone:e=>{let t=K.parse(e);return K.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Fi={...V,transform:Math.round},Ii={rotate:U,pathRotation:U,rotateX:U,rotateY:U,rotateZ:U,scale:Hn,scaleX:Hn,scaleY:Hn,scaleZ:Hn,skew:U,skewX:U,skewY:U,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Vn,originX:nr,originY:nr,originZ:W},Y={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,fontSize:W,backgroundPositionX:W,backgroundPositionY:W,...Ii,zIndex:Fi,fillOpacity:Vn,strokeOpacity:Vn,numOctaves:Fi},Li={...Y,color:G,backgroundColor:G,outlineColor:G,fill:G,stroke:G,borderColor:G,borderTopColor:G,borderRightColor:G,borderBottomColor:G,borderLeftColor:G,filter:Ni,WebkitFilter:Ni,mask:Pi,WebkitMask:Pi},Ri=e=>Li[e],zi=new Set([Ni,Pi]);function Bi(e,t){let n=Ri(e);return zi.has(n)||(n=K),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Vi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var X=e=>e*180/Math.PI,Hi=e=>Wi(X(Math.atan2(e[1],e[0]))),Ui={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Hi,rotateZ:Hi,skewX:e=>X(Math.atan(e[1])),skewY:e=>X(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Wi=e=>(e%=360,e<0&&(e+=360),e),Gi=Hi,Ki=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),qi=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ji={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ki,scaleY:qi,scale:e=>(Ki(e)+qi(e))/2,rotateX:e=>Wi(X(Math.atan2(e[6],e[5]))),rotateY:e=>Wi(X(Math.atan2(-e[2],e[0]))),rotateZ:Gi,rotate:Gi,skewX:e=>X(Math.atan(e[4])),skewY:e=>X(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Yi(e){return+!!e.includes(`scale`)}function Xi(e,t){if(!e||e===`none`)return Yi(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Ji,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Ui,i=t}if(!i)return Yi(t);let a=r[t],o=i[1].split(`,`).map(Qi);return typeof a==`function`?a(o):o[a]}var Zi=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Xi(n,t)};function Qi(e){return parseFloat(e.trim())}var $i=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ea=new Set([...$i,`pathRotation`]),ta=e=>e===V||e===W,na=new Set([`x`,`y`,`z`]),ra=$i.filter(e=>!na.has(e));function ia(e){let t=[];return ra.forEach(n=>{let r=e.getValue(n);if(r!==void 0){let e=r.get(),i=+!!n.startsWith(`scale`);if(e===i)return;t.push([n,e]),r.set(i)}}),t}var aa=new Set([`bottom`,`right`]);function oa(e,t,n,r,i,a){let o=parseFloat(e);if(!isNaN(o))return o;let{min:s,max:c}=t()[n],l=c-s;return a===`border-box`?l:l-parseFloat(r)-parseFloat(i)}var Z={width:({width:e,paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r},i)=>oa(e,i,`x`,t,n,r),height:({height:e,paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r},i)=>oa(e,i,`y`,t,n,r),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{let{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:({transform:e})=>Xi(e,`x`),y:({transform:e})=>Xi(e,`y`)};Z.translateX=Z.x,Z.translateY=Z.y;var Q=new Set,sa=!1,ca=!1,la=!1;function ua(){if(ca){let e=[],t=new Set,n=new Set;Q.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),aa.has(r.name)&&n.add(r.element))});let r=new Map;n.forEach(e=>{let t=ia(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}ca=!1,sa=!1,Q.forEach(e=>e.complete(la)),Q.clear()}function da(){Q.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ca=!0)})}function fa(){la=!0,da(),ua(),la=!1}function pa(e,t,n){if(typeof e==`string`){if(tn(e)||rn(e))return parseFloat(e);if(!K.test(e)&&K.test(n))return Bi(t,n)}return e??void 0}var ma=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Q.add(this),sa||(sa=!0,q.read(da),q.resolveKeyframes(ua))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=pa(n.readValue(t,a),t,a);r!==void 0&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Vi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Q.delete(this)}cancel(){this.state===`scheduled`&&(Q.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},ha=e=>e.startsWith(`--`);function ga(e,t,n){ha(t)?e.style.setProperty(t,n):e.style[t]=n}var _a={};function va(e,t){let n=an(e);return()=>_a[t]??n()}var ya=va(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ba=va(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),xa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Sa={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:xa([0,.65,.55,1]),circOut:xa([.55,0,1,.45]),backIn:xa([.31,.01,.66,-.59]),backOut:xa([.33,1.53,.69,.99])};function Ca(e,t){if(e)return typeof e==`function`?ba()?Yr(e,t):`ease-out`:jn(e)?xa(e):Array.isArray(e)?e.map(e=>Ca(e,t)||Sa.easeOut):Sa[e]}function wa(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Ca(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Ta(e){return typeof e==`function`&&`applyToOptions`in e}function Ea({type:e,...t}){return Ta(e)&&ba()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Da=class extends Di{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Ea(e);this.animation=wa(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Si(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),ga(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()},Ei(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return L(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+L(e)}get time(){return L(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=I(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ya()?(this.animation.timeline=e,t?.(this.animation),on):n(this)}},Oa={anticipate:Sn,backInOut:xn,circInOut:Tn};function ka(e){return e in Oa}function Aa(e){typeof e.ease==`string`&&ka(e.ease)&&(e.ease=Oa[e.ease])}var ja=10,Ma=class extends Da{constructor(e){Aa(e),wi(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new ki({...a,autoplay:!1}),s=Math.max(ja,z.now()-this.startTime),c=P(0,ja,s-ja),l=o.sample(s).value,{name:u}=this.options;i&&u&&ga(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Na=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(K.test(e)||e===`0`)&&!e.startsWith(`url(`));function Pa(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Fa(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Na(i,t),s=Na(a,t);return!o||!s?(o!==s&&`${t}${i}${a}${o?a:i}`,!1):Pa(e)||(n===`spring`||Ta(n))&&r}function Ia(e){e.duration=0,e.type=`keyframes`}var La=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Ra=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function za(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Ra.test(e[t]))return!0;return!1}var Ba=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Va=an(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Ha(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!n||!(La.has(n)||Ba.has(n)))return!1;let c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Va()&&(La.has(n)||Ba.has(n)&&za(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ua=40,Wa=class extends Di{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=z.now();let{keyframes:t,name:n,motionValue:r,element:i}=e,a=e;a.autoplay??=!0,a.delay??=0,a.type??=`keyframes`,a.repeat??=0,a.repeatDelay??=0,a.repeatType??=`loop`;let o=i?.KeyframeResolver||ma;this.keyframeResolver=new o(t,(e,t,n)=>this.onKeyframesResolved(e,t,a,!n),n,r,i),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=z.now();let u=!0;Fa(e,i,a,o)||(u=!1,(F.instantAnimations||!s)&&l?.(Si(e,n,t)),e[0]=e[e.length-1],Ia(n),n.repeat=0);let d=r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ua?this.resolvedAt:this.createdAt:void 0,{onComplete:f}=n;n.startTime??=d,n.finalKeyframe=t,n.keyframes=e,n.onComplete=()=>{f?.(),this.notifyFinished()};let p=u&&!c&&Ha(n),m;if(p){n.element=n.motionValue?.owner?.current;try{m=new Ma(n)}catch{m=new ki(n)}}else m=new ki(n);this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),fa()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}},Ga=class{constructor(e){this.stop=()=>this.runAll(`stop`),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll(`time`)}set time(e){this.setAll(`time`,e)}get speed(){return this.getAll(`speed`)}set speed(e){this.setAll(`speed`,e)}get state(){return this.getAll(`state`)}get startTime(){return this.getAll(`startTime`)}get duration(){return Ka(this.animations,`duration`)}get iterationDuration(){return Ka(this.animations,`iterationDuration`)}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll(`play`)}pause(){this.runAll(`pause`)}cancel(){this.runAll(`cancel`)}complete(){this.runAll(`complete`)}};function Ka(e,t){let n=0;for(let r=0;r<e.length;r++){let i=e[r][t];i!==null&&i>n&&(n=i)}return n}var qa=class extends Ga{then(e,t){return this.finished.finally(e).then(()=>{})}},Ja=30,Ya=e=>!isNaN(parseFloat(e)),Xa={current:void 0},Za=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=z.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=z.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ya(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){var n;return e===`change`?this.onChangeSubscribe(t):((n=this.events)[e]||(n[e]=new ln)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new ln,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){q.read(()=>{!this.changeSubscriber&&!this.events.change?.getSize()&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Xa.current&&Xa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=z.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ja)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ja);return un(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0;let n=!1,r;r=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===r&&this.clearAnimation(),t()}),n||(this.animation=r),this.events.animationStart?.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Qa(e,t){return new Za(e,t)}function $a(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function eo(e,t){let n=e?.[t]??e?.default??e;return n===e?n:$a(n,e)}var to={type:`spring`,stiffness:500,damping:25,restSpeed:10},no=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ro={type:`keyframes`,duration:.8},io={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},ao=(e,{keyframes:t})=>t.length>2?ro:ea.has(e)?e.startsWith(`scale`)?no(t[1]):to:io,oo=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function so(e){for(let t in e)if(!oo.has(t))return!0;return!1}var co=(e,t,n,r={},i,a)=>o=>{let s=eo(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=I(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};so(s)||Object.assign(u,ao(e,u)),u.duration&&=I(u.duration),u.repeatDelay&&=I(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ia(u),u.delay===0&&(d=!0)),(F.instantAnimations||F.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Ia(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Si(u.keyframes,s);if(e!==void 0){q.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new ki(u):new Wa(u)},lo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function uo(e){let t=lo.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function fo(e,t,n=1){`${e}`;let[r,i]=uo(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return tn(e)?parseFloat(e):e}return Rn(i)?fo(i,t,n+1):i}var po=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...$i]),mo=e=>!!(e&&e.getVelocity);function ho(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var go={test:e=>e===`auto`,parse:e=>e},_o=e=>t=>t.test(e),vo=[V,W,$n,U,tr,er,go],yo=e=>vo.find(_o(e));function bo(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||rn(e)}var xo=new Set([`auto`,`none`,`0`]);function So(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!xo.has(t)&&mr(t)&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]!==i&&(e[r]=Bi(n,i))}var Co=class extends ma{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Rn(r))){let i=fo(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!po.has(n)||e.length!==2)return;let[r,i]=e;if(typeof r==`number`&&typeof i==`number`)return;let a=yo(r),o=yo(i);if(Bn(r)!==Bn(i)&&Z[n]){this.needsMeasurement=!0;return}if(a!==o){if(ta(a)&&ta(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Z[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||bo(e[t]))&&n.push(t);n.length&&So(e,n,t)}measure(){let{element:e,name:t}=this;return Z[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&this.motionValue?.jump(r,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e||!e.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let n=t.length-1,r=t[n];t[n]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},wo=[];function To(e){typeof e.test==`function`&&e.read,Eo(e),wo.unshift(e)}function Eo(e){en(wo,e)}function Do(e){return wo.find(t=>t.test(e))}function Oo(e,t,n={},r){let i=[],{velocity:a}=n,o=n.reduceMotion??r?.shouldReduceMotion;for(let s in t){if(s===`transition`||s===`transitionEnd`)continue;let c=t[s];if(c===void 0)continue;let l=e(s),u=l.get();if(u!==void 0&&!l.isAnimating()&&!Array.isArray(c)&&c===u&&!a){q.update(()=>l.set(c));continue}l.start(co(s,l,c,o&&po.has(s)?{type:!1}:n,r)),l.animation&&i.push(l.animation)}let{transitionEnd:s}=t;if(s){let t=()=>q.update(()=>{for(let t in s)e(t).set(s[t])});i.length?Promise.all(i).then(t):t()}return i}function ko(e,t,n,r,i){return Oo(r=>{let a=e.get(t,r);if(!a){let o;if(!i){let i=n[r];o=Ao(i)??e.read(t,r,i),`${r}`}a=Qa(o,{owner:i}),e(t,{[r]:a})}return a},n,r,i)}function Ao(e){let t=Array.isArray(e)?e[0]:void 0;return t===null?void 0:t}function jo(e){return nn(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function Mo(e){return nn(e)&&`ownerSVGElement`in e}var No=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Po(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Fo=class{constructor(e=q.render){this.step=e,this.values=new Map,this.pending=[],this.numPending=0,this.flush=()=>{let{pending:e,numPending:t}=this;this.numPending=0;for(let n=0;n<t;n++)e[n]()}}set(e,t,n,r){if(this.values.get(e)?.onRemove(),r)for(let e of this.values.values())e.value===r&&(n=e.render);let i=()=>n&&this.schedule(n);t.get()!==void 0&&i();let a=t.on(`change`,i),o=()=>{a(),n&&!r&&this.cancel(n),this.values.get(e)?.onRemove===o&&this.values.delete(e)};return this.values.set(e,{value:t,render:r?void 0:n,onRemove:o}),o}get(e){return this.values.get(e)?.value}release(){let e=new Map;return this.values.forEach((t,n)=>{e.set(n,t.value),t.onRemove()}),this.transformKeys=this.transformValues=void 0,e}schedule(e){let{pending:t,numPending:n}=this;for(let r=0;r<n;r++)if(t[r]===e)return;n||this.step(this.flush),t[this.numPending++]=e}cancel(e){let{pending:t}=this;for(let n=0;n<this.numPending;n++)if(t[n]===e){t[n]=t[--this.numPending];return}}};function Io(e,{step:t,...n}={}){let r=new WeakMap;return Object.assign((n,i)=>{let a=r.get(n)??new Fo(t);r.set(n,a);let o=[];for(let t in i){let r=i[t],s=e(n,a,t,r);o.push(s)}return()=>{for(let e of o)e()}},n,{get:(e,t)=>r.get(e)?.get(t),flush:e=>r.get(e)?.flush(),state:e=>r.get(e)})}var Lo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ro={};function zo(e){let t=``,{transformKeys:n=[],transformValues:r={}}=e;for(let e=0;e<n.length;e++){let i=n[e],a=r[i].get();a!==void 0&&(typeof a==`number`?a:parseFloat(a))!==+!!i.startsWith(`scale`)&&(t+=(t&&` `)+(Ro[i]||(Ro[i]=(Lo[i]||i)+`(`))+No(a,Ii[i])+`)`)}let i=e.get(`pathRotation`)?.get();return i&&(t+=(t&&` `)+`rotate(`+No(i,Ii.pathRotation)+`)`),t||`none`}var Bo=new Set([`originX`,`originY`,`originZ`]),Vo=(e,t)=>No(e.get(t)?.get(),Y[t]),Ho=(e,t,n,r)=>{let i,a;if(ea.has(n)){if(n!==`pathRotation`){let e=t.transformKeys??=[];(t.transformValues??={})[n]=r,e.includes(n)||(e.push(n),e.sort((e,t)=>$i.indexOf(e)-$i.indexOf(t)))}t.get(`transform`)||(!jo(e)&&!t.get(`transformBox`)&&Ho(e,t,`transformBox`,new Za(`fill-box`)),t.set(`transform`,new Za(`none`),()=>{e.style.transform=zo(t)})),a=t.get(`transform`)}else Bo.has(n)?(t.get(`transformOrigin`)||t.set(`transformOrigin`,new Za(``),()=>{let n=Vo(t,`originX`)??`50%`,r=Vo(t,`originY`)??`50%`,i=Vo(t,`originZ`)??0;e.style.transformOrigin=`${n} ${r} ${i}`}),a=t.get(`transformOrigin`)):i=ha(n)?()=>{e.style.setProperty(n,r.get())}:()=>{e.style[n]=No(r.get(),Y[n])};return t.set(n,r,i,a)},Uo=e=>jo(e)||Mo(e),Wo=(e,t)=>{if(ea.has(t))return Zi(e,t);let n=getComputedStyle(e),r=ha(t)?n.getPropertyValue(t):n[t];return typeof r==`string`&&r.trim()||0},Go=Io(Ho,{test:Uo,read:Wo}),Ko=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function qo(e,t){if(!(t in e))return!1;let n=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),t)||Object.getOwnPropertyDescriptor(e,t);return n&&typeof n.set==`function`}var Jo=(e,t,n,r,i=n)=>{let a=qo(e,i);!a&&(i.startsWith(`data`)||i.startsWith(`aria`))&&(i=ho(i));let o=Y[n]||Y[i],s=a?()=>{e[i]=No(r.get(),Y[n])}:()=>{let t=No(r.get(),o);t==null?e.removeAttribute(i):e.setAttribute(i,String(t))};return t.set(n,r,s)};function Yo(e,t,n,r){return q.render(()=>e.setAttribute(`pathLength`,`1`)),n===`pathOffset`?t.set(n,r,()=>{let t=r.get();e.setAttribute(`stroke-dashoffset`,`${-t}`)}):(t.get(`stroke-dasharray`)||t.set(`stroke-dasharray`,new Za(`1 1`),()=>{let n=t.get(`pathLength`)?.get()??1,r=t.get(`pathSpacing`)?.get();e.setAttribute(`stroke-dasharray`,`${n} ${r??1-Number(n)}`)}),t.set(n,r,void 0,t.get(`stroke-dasharray`)))}var Xo=Io((e,t,n,r)=>n.startsWith(`path`)?Yo(e,t,n,r):n.startsWith(`attr`)?Jo(e,t,n,r,Zo(n)):(ea.has(n)||Bo.has(n)||ha(n)||n in e.style?Ho:Jo)(e,t,n,r),{test:Mo,read:(e,t)=>ea.has(t)?Y[t]?.default||0:ha(t)||Ko.includes(t)?Wo(e,t)||e.getAttribute(ho(t))||0:(t=Zo(t),e.getAttribute(ho(t))??e.getAttribute(t)??void 0)});function Zo(e){return e.replace(/^attr([A-Z])/,(e,t)=>t.toLowerCase())}function Qo({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function $o(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function es(e,t){return Qo($o(e.getBoundingClientRect(),t))}var ts={},ns=e=>Mo(e)?Xo:Go,rs=class{constructor(e,t){this.effect=e,this.current=t,this.KeyframeResolver=Co}getValue(e){return this.effect.get(this.current,e)}readValue(e,t){return this.effect.read(this.current,e,t)}render(){this.effect.flush(this.current)}measureViewportBox(){return es(this.current)}getProps(){return ts}};function is(e,t,n,r){if(r)return Oo(e=>r.getValue(e,null),t,n,r);let i=ns(e);return ko(i,e,t,n,new rs(i,e))}var as=Io((e,t,n,r)=>t.set(n,r,()=>{e[n]=r.get()}),{test:e=>nn(e),read:(e,t)=>{let n=e[t];return typeof n==`string`||typeof n==`number`?n:void 0}}),os=new WeakMap;function ss(e,t,n){let r=mo(e)?e:Qa(e);return r.start(co(``,r,t,n)),r.animation}function cs(e){return typeof e==`object`&&!Array.isArray(e)}function ls(e,t,n,r){return e==null?[]:typeof e==`string`&&cs(t)?Po(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>e!=null):[e]}function us(e,t,n){return e*(t+1)+n*t}function ds(e,t,n,r){return typeof t==`number`?t:t.startsWith(`-`)||t.startsWith(`+`)?Math.max(0,e+parseFloat(t)):t===`<`?n:t.startsWith(`<`)?Math.max(0,n+parseFloat(t.slice(1))):r.get(t)??e}function fs(e,t,n){for(let r=0;r<e.length;r++){let i=e[r];i.at>t&&i.at<n&&(en(e,i),r--)}}function ps(e,t,n,r,i,a){fs(e,i,a);for(let o=0;o<t.length;o++)e.push({value:t[o],at:Tr(i,a,r[o]),easing:An(n,o)})}function ms(e,t,n=0){let r=t+1+t*n;for(let t=0;t<e.length;t++)e[t]=e[t]/r}function hs(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}var gs=`easeInOut`,_s=20;function vs(e,{defaultTransition:t={},...n}={},r,i){let a=t.duration||.3,o=new Map,s=new Map,c={},l=new Map,u=0,d=0,f=0;for(let n=0;n<e.length;n++){let o=e[n];if(typeof o==`string`){l.set(o,d);continue}if(!Array.isArray(o)){l.set(o.name,ds(d,o.at,u,l));continue}let[p,m,h={}]=o;h.at!==void 0&&(d=ds(d,h.at,u,l));let g=0,_=(e,n,r,o=0,s=0)=>{let c=xs(e),{delay:l=0,times:u=mi(c),type:p=t.type||`keyframes`,repeat:m,repeatType:h,repeatDelay:_=0,...v}=n,{ease:y=t.ease||`easeOut`,duration:b}=n,x=typeof l==`function`?l(o,s):l,S=c.length,ee=Ta(p)?p:i?.[p||`keyframes`];if(S<=2&&ee){let e=100;if(S===2&&ws(c)){let t=c[1]-c[0];e=Math.abs(t)}let n={...t,...v};b!==void 0&&(n.duration=I(b));let r=Qr(n,e,ee);y=r.ease,b=r.duration}b??=a;let C=d+x;u.length===1&&u[0]===0&&(u[1]=1);let te=u.length-c.length;if(te>0&&pi(u,te),c.length===1&&c.unshift(null),m&&`${m}${_s}`,m&&m<_s){let e=b>0?_/b:0;b=us(b,m,_);let t=[...c],n=[...u];y=Array.isArray(y)?[...y]:[y];let r=[...y],i=h===`reverse`||h===`mirror`,a=t,o=r;i&&(a=[...t].reverse(),h===`reverse`&&(o=[...r].reverse().map(e=>typeof e==`function`?vn(e):e)));for(let s=0;s<m;s++){let l=i&&s%2==0,d=l?a:t,f=l?o:r,p=(s+1)*(1+e);e>0&&(c.push(c[c.length-1]),u.push(p),y.push(`linear`)),c.push(...d);for(let e=0;e<d.length;e++)u.push(n[e]+p),y.push(e===0?`linear`:An(f,e-1))}ms(u,m,e)}let w=C+b;ps(r,c,y,u,C,w),g=Math.max(x+b,g),f=Math.max(w,f)};if(mo(p)){let e=ys(p,s);_(m,h,bs(`default`,e))}else{let e=ls(p,m,r,c),t=e.length;for(let n=0;n<t;n++){m=m,h=h;let r=e[n],i=ys(r,s);for(let e in m)_(m[e],Ss(h,e),bs(e,i),n,t)}}u=d,d+=g}return s.forEach((e,r)=>{for(let i in e){let a=e[i];a.sort(hs);let s=[],c=[],l=[];for(let e=0;e<a.length;e++){let{at:t,value:n,easing:r}=a[e];s.push(n),c.push(cn(0,f,t)),l.push(r||`easeOut`)}c[0]!==0&&(c.unshift(0),s.unshift(s[0]),l.unshift(gs)),c[c.length-1]!==1&&(c.push(1),s.push(null)),o.has(r)||o.set(r,{keyframes:{},transition:{}});let u=o.get(r);u.keyframes[i]=s;let{type:d,...p}=t;u.transition[i]={...p,duration:f,ease:l,times:c,...n}}}),o}function ys(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function bs(e,t){return t[e]||(t[e]=[]),t[e]}function xs(e){return Array.isArray(e)?e:[e]}function Ss(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}var Cs=e=>typeof e==`number`,ws=e=>e.every(Cs);function Ts(e,t){return mo(e)||typeof e==`number`||typeof e==`string`&&!cs(t)}function Es(e,t,n,r){let i=[];if(Ts(e,t))i.push(ss(e,cs(t)&&t.default||t,n&&(n.default||n)));else{if(e==null)return i;let a=ls(e,t,r),o=a.length;for(let e=0;e<o;e++){let r=a[e],s={...n};`delay`in s&&typeof s.delay==`function`&&(s.delay=s.delay(e,o)),r instanceof Element?i.push(...is(r,t,s,os.get(r))):i.push(...ko(Do(r)??as,r,t,s))}}return i}function Ds(e,t,n){let r=[];return vs(e.map(e=>{if(Array.isArray(e)&&typeof e[0]==`function`){let t=e[0],n=Qa(0);return n.on(`change`,t),e.length===1?[n,[0,1]]:e.length===2?[n,[0,1],e[1]]:[n,e[1],e[2]]}return e}),t,n,{spring:li}).forEach(({keyframes:e,transition:t},n)=>{r.push(...Es(n,e,t))}),r}function Os(e){return Array.isArray(e)&&e.some(Array.isArray)}function ks(e={}){let{scope:t,reduceMotion:n,skipAnimations:r}=e;function i(e,i,a){let o=[],s,c={};if(n!==void 0&&(c.reduceMotion=n),r!==void 0&&(c.skipAnimations=r),Os(e)){let{onComplete:n,...r}=i||{};typeof n==`function`&&(s=n),o=Ds(e,{...c,...r},t)}else{let{onComplete:n,...r}=a||{};typeof n==`function`&&(s=n),o=Es(e,i,{...c,...r},t)}let l=new qa(o);return s&&l.finished.then(s),t&&(t.animations.push(l),l.finished.then(()=>{en(t.animations,l)})),l}return i}var As=Object.assign(ks(),{addEffect:To,removeEffect:Eo});function js(){return typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Ms(e){if(!js())try{As(e,{opacity:[0,1],transform:[`translateY(10px)`,`translateY(0px)`]},{duration:.22,ease:`easeOut`})}catch{}}function $(e,t){e.replaceChildren(t),Ms(t)}var Ns=5;function Ps(e,t,n){let{t:r}=t,i=n.briefing,a=0,o=e=>M(`span`,{class:`avatar`,attrs:{"aria-hidden":`true`},text:e.slice(0,1).toUpperCase()}),s=[()=>[M(`h2`,{text:r(`ui.briefing.planet.title`)}),M(`div`,{class:`globe`,attrs:{"aria-hidden":`true`}},M(`span`,{class:`twilight`})),M(`p`,{text:r(`ui.briefing.planet.line1`)}),M(`p`,{text:r(`ui.briefing.planet.line2`)}),M(`p`,{text:r(`ui.briefing.planet.line3`)})],()=>[M(`h2`,{text:r(`ui.briefing.crew.title`)}),M(`p`,{class:`muted`,text:r(`ui.briefing.crew.hint`)}),M(`ul`,{class:`rows`},...i.crew.map(e=>M(`li`,{class:`row-item`},o(r(e.nameKey)),M(`div`,{class:`grow`},M(`strong`,{text:r(e.nameKey)}),M(`span`,{class:`muted`,text:` · ${r(e.roleKey)}`}),M(`p`,{class:`small`,text:r(e.bioKey)}),M(`div`,{class:`row`},...e.abilities.map(e=>M(`span`,{class:`chip good`,text:`${r(`ui.skill.${e.skill}`)} +${e.bonus}`})))))))],()=>[M(`h2`,{text:r(`ui.briefing.cargo.title`)}),M(`p`,{class:`muted`,text:r(`ui.briefing.cargo.hint`)}),M(`ul`,{class:`rows`},...i.cargo.map(e=>M(`li`,{class:`row-item`},o(r(e.nameKey)),M(`div`,{class:`grow`},M(`strong`,{text:r(e.nameKey)}),M(`span`,{class:`chip`,text:r(`ui.briefing.cargo.mass`,{n:e.mass})}),M(`p`,{class:`small`,text:r(e.descriptionKey)}),M(`p`,{class:`small muted`,text:r(`ui.briefing.cargo.missing`,{text:r(e.whenMissingKey)})})))))],()=>[M(`h2`,{text:r(`ui.briefing.chains.title`)}),M(`ul`,{class:`rows chains`},...i.chains.map(e=>M(`li`,{class:`chain`,data:{chain:e.id}},...e.fromKeys.flatMap((e,t)=>[t>0?M(`span`,{class:`op`,text:`+`}):null,M(`span`,{class:`chip`,text:r(e)})]),M(`span`,{class:`op`,text:`→`}),M(`span`,{class:`chip good`,text:r(e.toKey)}))))],()=>[M(`h2`,{text:r(`ui.briefing.descent.title`)}),M(`ul`,{class:`rows`},...i.gestures.map(e=>M(`li`,{class:`row-item`},M(`span`,{class:`mini ${e}`,attrs:{"aria-hidden":`true`}},M(`i`)),M(`div`,{class:`grow`},M(`strong`,{text:r(`ui.gesture.${e}`)}),M(`p`,{class:`small`,text:r(`ui.briefing.gesture.${e}`)})))))]],c=M(`section`,{class:`panel briefing-card`,testid:`briefing-card`}),l=M(`div`,{class:`dots`}),u=M(`div`,{class:`row nav`}),d=e=>{a=Math.min(4,Math.max(0,e)),f()};function f(){c.dataset.index=String(a),c.replaceChildren(...s[a]().filter(e=>e!==null&&e!==!1)),c.scrollTop=0,Ms(c),l.setAttribute(`aria-label`,r(`ui.briefing.progress`,{i:a+1,n:Ns})),l.replaceChildren(...Array.from({length:Ns},(e,t)=>M(`span`,{class:t===a?`dot on`:`dot`})));let e=[];a===0?e.push(N(r(`ui.common.back`),n.onBack,{testid:`briefing-back`,kind:`ghost`,sfx:t.sfx})):e.push(N(r(`ui.common.back`),()=>d(a-1),{testid:`briefing-prev`,kind:`secondary`,sfx:t.sfx})),e.push(a===4?N(r(`ui.briefing.start`),n.onStart,{testid:`briefing-start`,sfx:t.sfx}):N(r(`ui.common.next`),()=>d(a+1),{testid:`briefing-next`,sfx:t.sfx})),u.replaceChildren(...e)}let p=N(r(`ui.common.skip`),n.onStart,{testid:`briefing-skip`,kind:`ghost`,sfx:t.sfx});$(e,M(`main`,{class:`screen briefing`},M(`div`,{class:`row top`},l,M(`span`,{class:`grow`}),p),c,u)),f()}var Fs=e=>e.pendingEvent!==null;function Is(e,t,n){try{return ne(e,r.parse(t),n),null}catch(e){if(e instanceof x)return e.message;throw e}}function Ls(e,t){let n=e.characters.filter(S),r=e=>[...n].sort((t,n)=>n[e]-t[e]).map(e=>e.id),i=r(`foodDebt`).slice(0,e.resources.food),a=r(`waterDebt`).slice(0,e.resources.water),o=n.filter(e=>e.statuses.includes(`sick`)||e.statuses.includes(`injured`)).slice(0,e.resources.medikit).map(e=>e.id),s=n=>Is(e,Fs(e)?{...n,choice:ee(e,t)[0]}:n,t)===null,c={food:i,water:a,medikit:o};if(s(c))return c;let l={food:i,water:a};return s(l)?l:{}}var Rs=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t];function zs(e,t){return{...e,expeditions:(e.expeditions??[]).filter(e=>e.character!==t),repairs:(e.repairs??[]).filter(e=>e.character!==t)}}function Bs(e,t,n){let r=zs(e,t);return n===null?r:{...r,expeditions:[...r.expeditions??[],{character:t,destination:n}]}}function Vs(e,t,n){let r=zs(e,t);return n===null?r:{...r,repairs:[...r.repairs??[],{character:t,target:n}]}}function Hs(e,t,n){let r=[{value:`none`,kind:`none`,disabled:!1}],i=e.characters.find(e=>e.id===n);if(i===void 0)return r;e.resources.hull<10&&r.push({value:`repair:hull`,kind:`repair`,target:`hull`,disabled:!1});for(let t of e.broken)r.push({value:`repair:${t}`,kind:`repair`,target:t,disabled:!1});let a=b(e,t),o=ae(e,t),s=ie(a,n)||[`sick`,`injured`,`exhausted`].some(e=>i.statuses.includes(e));for(let n of e.world.destinations){let e=k(t.destinations,n.id)?.requiresTool,i=e!==void 0&&!o.has(e);r.push({value:`go:${n.id}`,kind:`go`,destination:n.id,days:n.days,disabled:s||i,...i?{needsTool:e}:{}})}return r}function Us(e,t){let n=(e.expeditions??[]).find(e=>e.character===t);if(n!==void 0)return`go:${n.destination}`;let r=(e.repairs??[]).find(e=>e.character===t);return r===void 0?`none`:`repair:${r.target}`}function Ws(e,t,n){return n.startsWith(`go:`)?Bs(e,t,n.slice(3)):n.startsWith(`repair:`)?Vs(e,t,n.slice(7)):Bs(e,t,null)}function Gs(e,t,n){if(Fs(e)&&t.choice===void 0)return`ui.days.err.choice`;let r=e.resources;return(t.food??[]).length>r.food?`ui.days.err.food`:(t.water??[]).length+ +(t.electrolyzer===!0)>r.water?`ui.days.err.water`:+(t.radio===!0)+ +(t.electrolyzer===!0)>r.energy?`ui.days.err.energy`:(t.medikit??[]).length>r.medikit?`ui.days.err.medikit`:Is(e,t,n)===null?null:`ui.days.err.generic`}var Ks=e=>e>0?`+${e}`:String(e);function qs(e,t){let{t:n}=t;switch(e.type){case`weather`:return n(`ui.log.weather`,{kind:n(`ui.weather.${e.kind}`)});case`event`:return n(`ui.log.event`,{text:n(e.textKey)});case`status`:return n(e.gained?`ui.log.status.gained`:`ui.log.status.lost`,{name:t.name(e.character),status:n(`ui.status.${e.status}`)});case`death`:return n(`ui.log.death`,{name:t.name(e.character),cause:n(`ui.cause.${e.cause}`)});case`ration`:return n(e.resource===`food`?`ui.log.ration.food`:`ui.log.ration.water`,{name:t.name(e.character)});case`medikit`:return n(e.healed?`ui.log.medikit.healed`:`ui.log.medikit.failed`,{name:t.name(e.character)});case`repair`:{let r=e.target===`hull`?n(`ui.resource.hull`):n(`ui.machine.${e.target}`);return n(e.success?`ui.log.repair.ok`:`ui.log.repair.fail`,{name:t.name(e.character),target:r})}case`machine`:return n(e.broken?`ui.log.machine.broken`:`ui.log.machine.fixed`,{machine:n(`ui.machine.${e.machine}`)});case`resource`:return n(`ui.log.resource`,{resource:n(`ui.resource.${e.resource}`),delta:Ks(e.delta)});case`item`:return n(e.gained?`ui.log.item.gained`:`ui.log.item.lost`,{item:t.item(e.item)});case`expedition-start`:return n(`ui.log.expedition_start`,{name:t.name(e.character),destination:t.destination(e.destination),day:e.returnDay});case`expedition-return`:{let r=Object.entries(e.found).filter(([,e])=>e>0).map(([e,t])=>`${n(`ui.resource.${e}`)} ×${t}`).join(`, `),i={name:t.name(e.character),destination:t.destination(e.destination),found:r};return n(r===``?`ui.log.expedition_return_nothing`:`ui.log.expedition_return`,i)}case`expedition-missing`:return n(`ui.log.expedition_missing`,{name:t.name(e.character),destination:t.destination(e.destination)});case`refused`:return n(e.activity===`repair`?`ui.log.refused.repair`:`ui.log.refused.expedition`,{name:t.name(e.character)});case`quarrel`:return n(`ui.log.quarrel`,{name:t.name(e.character),other:t.name(e.with)});case`crisis`:return n(`ui.log.crisis`,{name:t.name(e.character)});case`abandon`:return n(`ui.log.abandon`,{name:t.name(e.character)});case`morale`:return n(`ui.log.morale`,{name:t.name(e.character),delta:Ks(e.delta)});case`signal`:return n(`ui.log.signal`,{total:e.total});case`oxygen`:return n(`ui.log.oxygen`,{n:e.produced});case`oxygen-out`:return n(`ui.log.oxygen_out`);case`archive`:return n(`ui.log.archive`,{title:t.entry(e.entry)});case`ending`:return n(`ui.log.ending`,{title:t.ending(e.endingId)})}}var Js=[`sick`,`injured`,`hungry`,`thirsty`,`exhausted`,`missing`,`dead`];function Ys(e,t,n){let{t:r,content:i}=t,a=n.run.colony;if(a===null)throw Error(`mountDays: la run non ha lo stato delle giornate`);let o=k(i.scenarios,n.run.scenarioId),s=e=>r(o?.characters.find(t=>t.id===e)?.nameKey??e),c=e=>r(k(i.destinations,e)?.nameKey??e),l=Ls(a,i),d=[],f=e=>{l=e,O()},p=a.world.weather[a.day-1]??`calm`,m=M(`div`,{class:`row days-head`},M(`h2`,{class:`grow`,testid:`days-day`,text:r(`ui.days.day`,{n:a.day})}),M(`span`,{class:p===`calm`?`chip`:`chip warn`,testid:`days-weather`,text:r(`ui.weather.${p}`)}),N(r(`ui.days.manual`),()=>n.onManual(),{testid:`manual-open`,kind:`ghost`,sfx:t.sfx})),h=M(`section`,{class:`panel res-grid`,testid:`days-resources`},...u.map(e=>{let t=a.resources[e];return M(`div`,{class:e!==`hull`&&e!==`medikit`&&t<=1?`res low`:`res`,testid:`days-res-${e}`},M(`span`,{class:`res-name`,text:r(`ui.resource.${e}`)}),M(`strong`,{text:e===`hull`?`${t}/10`:String(t)}))})),g=null,_=[];if(a.pendingEvent!==null){let e=k(i.events,a.pendingEvent);if(e!==void 0){let n=ee(a,i);g=M(`section`,{class:`panel event`,testid:`event-card`},M(`div`,{class:`illustration`,data:{illustration:e.illustration},attrs:{"aria-hidden":`true`}}),M(`h3`,{text:r(e.titleKey)}),M(`p`,{text:r(e.textKey)}),M(`div`,{class:`stack`},...n.map(n=>{let i=e.choices.find(e=>e.id===n),a=M(`button`,{class:`btn secondary choice`,type:`button`,text:r(i?.labelKey??n),testid:`event-choice-${n}`,onClick:()=>{t.sfx(`click`),f({...l,choice:n})}});return _.push([n,a]),a})))}}d.push(()=>{for(let[e,t]of _)t.setAttribute(`aria-pressed`,String(l.choice===e)),t.classList.toggle(`picked`,l.choice===e)});let v=(e,t,n,r)=>{let i=M(`input`,{type:`checkbox`,testid:e});return i.addEventListener(`change`,()=>r(i.checked)),d.push(()=>{i.checked=n()}),M(`label`,{class:`toggle`},i,M(`span`,{text:t}))},y=M(`section`,{class:`stack`,testid:`days-crew`});for(let e of a.characters){let t=S(e),n=a.expeditions.find(t=>t.character===e.id),o=e.statuses.map(e=>M(`span`,{class:Js.includes(e)?`chip bad`:`chip`,text:r(`ui.status.${e}`)})),u=[];e.foodDebt>0&&u.push(M(`p`,{class:`small muted`,text:r(`ui.days.no_food`,{n:e.foodDebt})})),e.waterDebt>0&&u.push(M(`p`,{class:`small muted`,text:r(`ui.days.no_water`,{n:e.waterDebt})})),n!==void 0&&u.push(M(`p`,{class:`small muted`,text:r(`ui.days.returns`,{dest:c(n.destination),n:n.returnDay})}));let p=M(`article`,{class:t?`panel crew`:`panel crew off`,testid:`crew-${e.id}`},M(`div`,{class:`row`},M(`strong`,{class:`grow`,text:s(e.id)}),M(`span`,{class:`small muted`,text:r(`ui.days.mood`,{v:e.morale>0?`+${e.morale}`:String(e.morale)})})),M(`div`,{class:`row`},...o),...u);if(t){let t=M(`div`,{class:`controls`});t.append(v(`food-${e.id}`,r(`ui.days.eat`),()=>(l.food??[]).includes(e.id),()=>f({...l,food:Rs(l.food??[],e.id)})),v(`water-${e.id}`,r(`ui.days.drink`),()=>(l.water??[]).includes(e.id),()=>f({...l,water:Rs(l.water??[],e.id)}))),(e.statuses.includes(`sick`)||e.statuses.includes(`injured`))&&t.append(v(`medikit-${e.id}`,r(`ui.days.medikit`),()=>(l.medikit??[]).includes(e.id),()=>f({...l,medikit:Rs(l.medikit??[],e.id)})));let n=M(`select`,{testid:`act-${e.id}`,attrs:{"aria-label":`${s(e.id)}: ${r(`ui.days.activity`)}`}});for(let t of Hs(a,i,e.id)){let e=t.kind===`none`?r(`ui.days.act.rest`):t.kind===`repair`?r(`ui.days.act.repair`,{target:t.target===`hull`?r(`ui.resource.hull`):r(`ui.machine.${t.target}`)}):r(`ui.days.act.go`,{dest:c(t.destination??``),days:t.days??0})+(t.needsTool===void 0?``:` (${r(`ui.tool.${t.needsTool}`)})`),i=M(`option`,{value:t.value,text:e});i.disabled=t.disabled,n.append(i)}n.addEventListener(`change`,()=>f(Ws(l,e.id,n.value))),d.push(()=>{n.value=Us(l,e.id)}),t.append(M(`label`,{class:`act`},n)),p.append(t)}y.append(p)}let b=ae(a,i),x=M(`section`,{class:`panel stack`,testid:`days-machines`}),C=(e,t)=>{if(!b.has(e))return;let n=a.broken.includes(e),i=M(`input`,{type:`checkbox`,testid:`machine-${e}`,disabled:n});i.addEventListener(`change`,()=>f({...l,[e]:i.checked})),d.push(()=>{i.checked=e===`radio`?l.radio===!0:l.electrolyzer===!0}),x.append(M(`label`,{class:`toggle`},i,M(`span`,{text:r(t)}),n?M(`span`,{class:`chip bad`,text:r(`ui.days.broken`)}):null))};C(`electrolyzer`,`ui.days.electrolyzer`),C(`radio`,`ui.days.radio`),b.has(`radio`)&&x.append(M(`p`,{class:`small muted`,testid:`days-signals`,text:r(`ui.days.signals`,{n:a.signals})}));let te={t:r,name:s,destination:c,item:e=>r(k(i.items,e)?.nameKey??e),entry:e=>r(k(i.archive,e)?.titleKey??e),ending:e=>r(k(i.endings,e)?.titleKey??e)},w=[...n.diary].sort((e,t)=>t.day-e.day),ne=e=>M(`div`,{class:`diary-day`,data:{day:String(e.day)}},M(`h4`,{text:r(`ui.days.diary_day`,{n:e.day})}),M(`ul`,{},...e.entries.flatMap(e=>{try{return[M(`li`,{text:qs(e,te)})]}catch{return[]}}))),[re,...T]=w,E=M(`section`,{class:`panel`,testid:`diary`},M(`h3`,{text:r(`ui.days.diary`)}),re===void 0?M(`p`,{class:`muted`,text:r(`ui.days.diary_empty`)}):ne(re),T.length>0?M(`details`,{},M(`summary`,{text:r(`ui.days.diary_older`)}),...T.map(ne)):null),D=M(`p`,{class:`small problem`,testid:`days-problem`,attrs:{role:`status`}}),ie=N(r(`ui.days.end_day`),()=>{Gs(a,l,i)===null&&(ie.disabled=!0,n.onEndDay(l))},{testid:`days-end-day`,sfx:t.sfx});d.push(()=>{let e=Gs(a,l,i);D.textContent=e===null?``:r(e),ie.disabled=e!==null});function O(){for(let e of d)e()}$(e,M(`main`,{class:`screen days`},m,h,g,M(`h3`,{class:`section-title`,text:r(`ui.days.crew`)}),y,b.has(`radio`)||b.has(`electrolyzer`)?M(`h3`,{class:`section-title`,text:r(`ui.days.machines`)}):null,b.has(`radio`)||b.has(`electrolyzer`)?x:null,E,M(`div`,{class:`days-foot`},D,ie))),O()}var Xs=()=>le(()=>import(`./controller-C6ZPLS1L.js`),__vite__mapDeps([0,1,2]),import.meta.url);async function Zs(e,t,n=Xs){let{startDescent:r}=await n(),i=null,a=r({root:e,content:t.content,seed:t.seed,scenarioId:t.scenarioId,locale:t.locale,autopilot:t.debug.autopilot,speed:t.debug.speed,quality:t.debug.quality,showFps:t.debug.showFps,tutorial:t.tutorial,onProgress:e=>{i=e,t.onProgress(e.log,e.tick)},onEnd:e=>t.onEnd(e.log)});return t.exposeDebug&&(window.__brace={state:()=>a.state(),fps:()=>a.fps(),saved:()=>i}),()=>{a.stop(),e.classList.remove(`descent-root`)}}var Qs=(e,t)=>{let n=e.get(t);return n!==null&&n!==`0`&&n!==`false`};function $s(e){let t=new URLSearchParams(e),n=(t.get(`seed`)??``).slice(0,64),r=Number(t.get(`speed`));return{seed:n===``?`debug`:n,scenario:t.get(`scenario`)||null,tutorial:Qs(t,`tutorial`),autopilot:Qs(t,`autopilot`),speed:Number.isFinite(r)&&r>=1?Math.min(50,r):1,quality:t.get(`quality`),locale:t.get(`lang`)===`en`?`en`:`it`,fps:Qs(t,`fps`)}}function ec(e,t,n){let{t:r,content:i}=t,{run:a}=n;if(a.phase!==`ended`||a.endingId===null||a.colony===null)throw Error(`mountEnding: la run non è conclusa`);let o=k(i.endings,a.endingId),s=a.colony.characters.filter(e=>!e.statuses.includes(`dead`)&&!e.statuses.includes(`missing`)).length,c=a.colony.characters.filter(e=>e.statuses.includes(`dead`)).length,l=(e,t,n)=>[M(`dt`,{text:e}),M(`dd`,{testid:n,text:String(t)})];$(e,M(`main`,{class:`screen ending`},M(`div`,{class:`illustration`,data:{illustration:o?.illustration??``},attrs:{"aria-hidden":`true`}}),M(`h2`,{testid:`ending-title`,text:o===void 0?a.endingId:r(o.titleKey)}),M(`p`,{testid:`ending-text`,text:o===void 0?``:r(o.textKey)}),M(`dl`,{class:`panel report`,testid:`ending-stats`},...l(r(`ui.ending.days`),a.day,`ending-stat-days`),...l(r(`ui.ending.alive`),s,`ending-stat-alive`),...l(r(`ui.ending.dead`),c,`ending-stat-dead`),...l(r(`ui.ending.archive`),a.colony.archive.length,`ending-stat-archive`),...l(r(`ui.ending.runs`),n.profile.stats.runsCompleted,`ending-stat-runs`)),N(r(`ui.ending.back`),n.onBack,{testid:`ending-back`,sfx:t.sfx})))}function tc(e,t,n){let{t:r,content:i}=t,a=n.run.landing;if(a===null)throw Error(`mountLanding: la run non ha un esito di atterraggio`);let o=k(i.scenarios,n.run.scenarioId),s=e=>r(o?.characters.find(t=>t.id===e)?.nameKey??e),c=e=>r(k(i.items,e)?.nameKey??e),l=(e,t)=>e.length>0?e.join(`, `):t,u=(e,t,n)=>[M(`dt`,{text:e}),M(`dd`,{text:t,testid:n})];$(e,M(`main`,{class:`screen`,testid:`landing-report`},M(`h2`,{text:r(`ui.landing.title`)}),M(`p`,{class:`muted`,text:r(`ui.landing.intro`)}),n.resumed?M(`p`,{class:`notice`,testid:`landing-resumed-note`,text:r(`ui.landing.resumed`)}):null,M(`dl`,{class:`panel report`},...u(r(`ui.landing.zone`),r(`ui.zone.${a.zone}`),`report-zone`),...u(r(`ui.landing.hull`),`${a.hull}/10`,`report-hull`),...u(r(`ui.landing.injured`),l(a.injured.map(s),r(`ui.landing.none`)),`report-injured`),...u(r(`ui.landing.lost`),l(a.lostItems.map(c),r(`ui.landing.nothing`)),`report-lost`)),N(r(`ui.landing.continue`),n.onContinue,{testid:`landing-continue`,sfx:t.sfx})))}var nc=[`oxygen`,`thermal`,`insulated`,`signal`];function rc(e,t,n){let{t:r}=t,a=(e,t,n)=>M(`section`,{class:`panel`,testid:`manual-section-${e}`},M(`h3`,{text:t}),M(`ul`,{class:`manual-list`},...n.map(([e,t])=>M(`li`,{},M(`strong`,{text:e}),M(`span`,{text:` — ${t}`}))))),o=M(`div`,{class:`overlay`,testid:`manual`,attrs:{role:`dialog`,"aria-modal":`true`,"aria-label":r(`ui.manual.title`)}},M(`div`,{class:`overlay-body`},M(`div`,{class:`row overlay-top`},M(`h2`,{class:`grow`,text:r(`ui.manual.title`)}),N(r(`ui.common.close`),()=>{o.remove(),n.onClose()},{testid:`manual-close`,kind:`secondary`,sfx:t.sfx})),a(`resources`,r(`ui.manual.resources.title`),u.map(e=>[r(`ui.resource.${e}`),r(`ui.manual.resource.${e}`)])),a(`statuses`,r(`ui.manual.statuses.title`),i.map(e=>[r(`ui.status.${e}`),r(`ui.manual.status.${e}`)])),a(`chains`,r(`ui.manual.chains.title`),nc.map(e=>[r(`ui.manual.chain.${e}`),``])),a(`descent`,r(`ui.manual.descent.title`),Xt.map(e=>[r(`ui.gesture.${e}`),r(`ui.briefing.gesture.${e}`)])))),s=()=>{document.removeEventListener(`keydown`,c),o.remove(),n.onClose()},c=e=>{e.key===`Escape`&&s()};return o.querySelector(`[data-testid="manual-close"]`)?.addEventListener(`click`,()=>{document.removeEventListener(`keydown`,c)}),document.addEventListener(`keydown`,c),e.append(o),o.querySelector(`[data-testid="manual-close"]`)?.focus(),Ms(o),o}var ic={network:{title:`ui.server.network_title`,body:`ui.server.network_body`},error:{title:`ui.server.error_title`,body:`ui.server.error_body`},unconfigured:{title:`ui.server.unconfigured_title`,body:`ui.server.unconfigured_body`}};function ac(e,t,n){let{t:r}=t,{onRetry:i}=n;$(e,M(`main`,{class:`screen`,testid:`network`,data:{reason:n.reason}},M(`h2`,{text:r(ic[n.reason].title)}),M(`p`,{class:`notice`,text:r(ic[n.reason].body)}),i===void 0?null:N(r(`ui.server.network_retry`),i,{testid:`network-retry`,sfx:t.sfx}),N(r(`ui.common.back`),n.onBack,{testid:`network-back`,kind:`ghost`,sfx:t.sfx})))}function oc(e,t){return new Intl.DateTimeFormat(t===`it`?`it-IT`:`en-GB`,{timeZone:`Europe/Rome`,weekday:`long`,day:`numeric`,month:`long`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).format(e)}function sc(e){return Math.max(0,e.limit-e.used)}function cc(e,t,n){let{t:r}=t;$(e,M(`main`,{class:`screen`,testid:`quota`},M(`h2`,{text:r(`ui.server.quota_title`)}),M(`p`,{class:`notice`,testid:`quota-text`,text:r(`ui.server.quota_body`,{limit:n.limit,when:oc(n.resetsAt,t.settings.locale)})}),M(`p`,{class:`muted`,text:r(`ui.server.quota_hint`)}),N(r(`ui.server.redeem_cta`),n.onRedeem,{testid:`quota-redeem`,sfx:t.sfx}),N(r(`ui.common.back`),n.onBack,{testid:`quota-back`,kind:`ghost`,sfx:t.sfx})))}function lc(e){switch(e.kind){case`ok`:return`ui.server.redeem_ok`;case`invalid`:return`ui.server.redeem_invalid`;case`used`:return`ui.server.redeem_used`;case`limited`:return`ui.server.redeem_limited`;case`network`:return`ui.server.redeem_network`;case`error`:return`ui.server.redeem_error`}}function uc(e,t,n){let{t:r}=t,i=M(`input`,{type:`text`,testid:`redeem-input`,attrs:{"aria-label":r(`ui.server.redeem_label`),placeholder:r(`ui.server.redeem_placeholder`),autocomplete:`off`,autocapitalize:`characters`,spellcheck:`false`,maxlength:`40`}}),a=M(`p`,{class:`small`,testid:`redeem-message`,attrs:{role:`status`}}),o=M(`div`,{class:`stack`}),s=!1,c=N(r(`ui.server.redeem_apply`),()=>{let e=i.value.trim();s||e===``||(s=!0,c.disabled=!0,a.className=`small muted`,a.textContent=r(`ui.server.redeem_working`),n.onSubmit(e).then(e=>{if(s=!1,c.disabled=!1,a.textContent=r(lc(e)),e.kind!==`ok`){a.className=`small notice bad`;return}a.className=`small notice`,o.replaceChildren(N(n.afterLabel,n.onDone,{testid:`redeem-done`,sfx:t.sfx}))}))},{testid:`redeem-apply`,sfx:t.sfx});o.append(M(`label`,{class:`stack`},M(`span`,{text:r(`ui.server.redeem_label`)}),i),c),$(e,M(`main`,{class:`screen`,testid:`redeem`},M(`h2`,{text:r(`ui.server.redeem_title`)}),M(`p`,{class:`muted`,text:r(`ui.server.redeem_hint`)}),o,a,N(r(`ui.common.back`),n.onBack,{testid:`redeem-back`,kind:`ghost`,sfx:t.sfx})))}function dc(e,t,n){let{t:r}=t,i=M(`div`,{class:`stack`}),a=()=>{i.replaceChildren(M(`div`,{class:`panel stack`},M(`p`,{text:r(`ui.recovery.confirm`)}),M(`div`,{class:`row`},N(r(`ui.recovery.confirm_yes`),n.onReset,{testid:`save-error-reset-confirm`,sfx:t.sfx}),N(r(`ui.recovery.confirm_no`),o,{testid:`save-error-reset-cancel`,kind:`secondary`,sfx:t.sfx}))))};function o(){i.replaceChildren(N(r(`ui.recovery.reset`),a,{testid:`save-error-reset`,kind:`secondary`,sfx:t.sfx}))}o(),$(e,M(`main`,{class:`screen`,testid:`save-error`},M(`h2`,{text:r(`ui.recovery.title`)}),M(`p`,{class:`notice bad`,text:r(n.errorCode===`too-new`?`ui.recovery.too_new`:`ui.recovery.corrupt`)}),M(`p`,{class:`muted`,text:r(`ui.recovery.hint`)}),N(r(`ui.recovery.download`),n.onDownloadRaw,{testid:`save-error-download`,sfx:t.sfx}),i))}function fc(e,t,n){let{t:r}=t,i=M(`div`,{class:`stack`});for(let e of n.scenarios)i.append(M(`button`,{class:`pick`,type:`button`,testid:`scenario-pick-${e.id}`,onClick:()=>{t.sfx(`click`),n.onPick(e.id)}},M(`strong`,{text:r(e.nameKey)}),M(`span`,{text:r(e.descriptionKey)})));$(e,M(`main`,{class:`screen`},M(`h2`,{text:r(`ui.scenario.title`)}),i,n.quotaNote?M(`p`,{class:`muted`,testid:`scenario-quota`,text:n.quotaNote}):null,N(r(`ui.common.back`),n.onBack,{testid:`scenario-back`,kind:`ghost`,sfx:t.sfx})))}function pc(e){switch(e){case`save-code-invalid`:case`corrupt`:return`ui.settings.import.err_code`;case`too-new`:return`ui.settings.import.err_new`;default:return`ui.settings.import.err_invalid`}}function mc(e,t,n){let{t:r}=t,i=n.settings,a=(e,r)=>M(`button`,{class:`btn ${i.locale===e?`primary`:`secondary`}`,type:`button`,text:r,testid:`settings-lang-${e}`,attrs:{"aria-pressed":String(i.locale===e)},onClick:()=>{t.sfx(`click`),n.onChange({...i,locale:e})}}),o=(e,t)=>{let r=M(`input`,{type:`checkbox`,testid:`settings-${e}`});return r.checked=i[e],r.addEventListener(`change`,()=>n.onChange({...i,[e]:r.checked})),M(`label`,{class:`toggle`},r,M(`span`,{text:t}))},s=M(`textarea`,{testid:`settings-code`,attrs:{readonly:``,rows:`4`,"aria-label":r(`ui.settings.export.title`)}}),c=M(`span`,{class:`small muted`,testid:`settings-copied`}),l=M(`textarea`,{testid:`settings-import-text`,attrs:{rows:`4`,"aria-label":r(`ui.settings.import.title`)}}),u=M(`div`,{class:`stack`}),d=M(`p`,{class:`small`,testid:`settings-import-message`,attrs:{role:`status`}}),f=M(`input`,{type:`file`,testid:`settings-import-file`,attrs:{accept:`.json,application/json,text/plain`}});f.addEventListener(`change`,()=>{let e=f.files?.[0];e!==void 0&&e.text().then(e=>{l.value=e})});let p=n.saveFailed||n.persistence===`denied`||n.persistence===`unsupported`?M(`p`,{class:`notice`,testid:`settings-persistence-warning`,text:r(n.saveFailed?`ui.settings.warn.save_failed`:`ui.settings.warn.not_persistent`)}):null;$(e,M(`main`,{class:`screen`},M(`h2`,{text:r(`ui.settings.title`)}),p,M(`section`,{class:`panel stack`},M(`h3`,{text:r(`ui.settings.language`)}),M(`div`,{class:`row`},a(`it`,r(`ui.settings.lang_it`)),a(`en`,r(`ui.settings.lang_en`))),o(`sound`,r(`ui.settings.sound`)),o(`haptics`,r(`ui.settings.haptics`))),(()=>{let e=n.unlock;if(e==null)return null;let{summary:i}=e,a=[];return i?.unlocked===!0?a.push(M(`p`,{text:r(`ui.server.settings_unlocked`)})):i!==null&&(a.push(M(`p`,{text:r(`ui.server.settings_used`,{used:i.used,limit:i.limit})})),i.resetsAt!==null&&a.push(M(`p`,{class:`small muted`,text:r(`ui.server.settings_reset`,{when:oc(i.resetsAt,t.settings.locale)})}))),M(`section`,{class:`panel stack`,testid:`settings-unlock`},M(`h3`,{text:r(`ui.server.settings_title`)}),...a,i?.unlocked===!0?null:N(r(`ui.server.redeem_cta`),e.onRedeem,{testid:`settings-redeem`,kind:`secondary`,sfx:t.sfx}))})(),M(`section`,{class:`panel stack`},M(`h3`,{text:r(`ui.settings.export.title`)}),M(`div`,{class:`row`},N(r(`ui.settings.export.code`),()=>{s.value=n.onExportCode(),c.textContent=``},{testid:`settings-export-code`,kind:`secondary`,sfx:t.sfx}),N(r(`ui.settings.export.file`),n.onExportFile,{testid:`settings-export-file`,kind:`secondary`,sfx:t.sfx})),s,M(`div`,{class:`row`},N(r(`ui.settings.export.copy`),()=>{s.value!==``&&navigator.clipboard?.writeText(s.value).then(()=>c.textContent=r(`ui.settings.export.copied`)).catch(()=>{})},{testid:`settings-copy`,kind:`ghost`,sfx:t.sfx}),c)),M(`section`,{class:`panel stack`},M(`h3`,{text:r(`ui.settings.import.title`)}),M(`p`,{class:`small muted`,text:r(`ui.settings.import.hint`)}),l,f,N(r(`ui.settings.import.apply`),()=>{let e=l.value.trim();if(e===``)return;let i=()=>{u.replaceChildren(),n.onImport(e).then(e=>{d.textContent=e.ok?r(`ui.settings.import.ok`):r(e.messageKey)})};if(!n.hasProgress)return i();d.textContent=``,u.replaceChildren(M(`div`,{class:`notice bad stack`},M(`p`,{text:r(`ui.settings.import.confirm`)}),M(`div`,{class:`row`},N(r(`ui.settings.import.confirm_yes`),i,{testid:`settings-import-confirm`,sfx:t.sfx}),N(r(`ui.settings.import.confirm_no`),()=>u.replaceChildren(),{testid:`settings-import-cancel`,kind:`secondary`,sfx:t.sfx}))))},{testid:`settings-import-apply`,sfx:t.sfx}),u,d),N(r(`ui.common.back`),n.onBack,{testid:`settings-back`,kind:`ghost`,sfx:t.sfx})))}function hc(e,t){return t===`web`?`v${e}`:`v${e} · ${t}`}function gc(e,t,n){let{t:r}=t,i=M(`nav`,{class:`menu`});n.canContinue&&(i.append(N(r(`ui.title.continue`),n.onContinue,{testid:`title-continue`,sfx:t.sfx})),n.resumeNote!==null&&i.append(M(`p`,{class:`resume-note`,testid:`title-resume-note`,text:n.resumeNote}))),i.append(N(r(`ui.title.new`),n.onNew,{testid:`title-new`,kind:n.canContinue?`secondary`:`primary`,sfx:t.sfx}),M(`button`,{class:`btn secondary`,type:`button`,testid:`title-archive`,disabled:!0},r(`ui.title.archive`),M(`small`,{text:r(`ui.title.archive_soon`)})),N(r(`ui.title.settings`),n.onSettings,{testid:`title-settings`,kind:`secondary`,sfx:t.sfx}));let a=n.updateAvailable===!0?N(r(`ui.title.update`),()=>n.onUpdate?.(),{testid:`title-update`,kind:`ghost`,sfx:t.sfx}):null;$(e,M(`main`,{class:`screen title`,data:{edition:n.edition}},M(`h1`,{text:`BRACE!`}),M(`p`,{class:`tagline`,text:r(`ui.title.tagline`)}),i,M(`p`,{class:`version`,testid:`version`,text:hc(n.version,n.edition)}),a))}var _c={autopilot:!1,speed:1,quality:null,fps:!1};async function vc(e,t){let{content:n}=t,r=t.settings,i=qt({content:n,kv:t.kv,onEffect:e=>{e.type===`sfx`&&(t.audio.play(e.id),t.haptics.pulse(e.id))}}),a=t.download??Rt,o=t.debug?$s(t.search):_c,s=t.mountDescent??((e,t)=>Zs(e,t)),c=`title`,l=`title`,u=null,d=!1,f=null,p=`settings`,m=!1,g=``,_=null,v=0;document.documentElement.lang=r.locale,e.addEventListener(`pointerdown`,()=>t.audio.unlock(),{once:!0});let y=()=>({t:Yt(n,r.locale),content:n,settings:r,sfx:e=>t.audio.play(e)}),b=()=>{v++,_?.(),_=null},x=e=>{let t=e.run;if(t===null)return null;let n=y().t;return t.phase===`days`?n(`ui.app.resume.days`,{n:t.day}):t.phase===`ended`?n(`ui.app.resume.ended`):n(`ui.app.resume.landing`)},S=()=>t.updateAvailable?.()??!1,ee=()=>{if(!t.tickets.usesServer)return null;let e=t.tickets.status();if(e===null)return null;let n=y().t;return e.unlocked?n(`ui.server.quota_line_unlocked`):n(`ui.server.quota_line`,{left:sc(e),limit:e.limit})},C=()=>{if(!t.tickets.usesServer)return`none`;let e=t.tickets.status();return e===null?`unknown`:`${e.unlocked}:${e.used}:${e.limit}:${e.resetsAt}`},te=e=>{let t=r.locale;if(e.loadError!==null&&c!==`settings`)return`recovery:${t}`;switch(c){case`settings`:return`settings:${t}:${C()}`;case`scenario`:return`scenario:${t}:${ee()??``}`;case`gate`:return`gate:${t}:${f?.kind??``}`;case`redeem`:return`redeem:${t}`;case`briefing`:return`briefing:${t}:${u}`;case`play`:{let n=e.run;return n===null||n.phase===`briefing`?`title-fallback`:n.phase===`descent`?`descent`:n.phase===`landing`?`landing:${t}:${e.resumedDescent}`:n.phase===`days`?`days:${t}:${n.day}`:`ended:${t}`}default:return`title:${t}:${e.run!==null}:${x(e)}:${d}:${S()}`}},w=M(`div`,{class:`save-banner`,testid:`save-failed-banner`,hidden:!0}),ne=e=>{w.textContent=y().t(`ui.settings.warn.save_failed`),w.hidden=!e.saveFailed},re=()=>{g!==`descent`&&e.append(w)};function T(){let n=y().t;g=`error`,e.replaceChildren(M(`main`,{class:`screen`,testid:`app-error`},M(`h2`,{text:n(`ui.common.error`)}),M(`p`,{class:`muted`,text:n(`ui.app.error_hint`)}),N(n(`ui.ending.back`),()=>{c=`title`,d=!1,A(!0)},{testid:`app-error-back`,sfx:e=>t.audio.play(e)})))}let E=e=>()=>{try{e()}catch(e){console.error(e),T()}};function D(){for(let t of e.querySelectorAll(`button`))t.disabled=!0;e.querySelector(`main`)?.append(M(`p`,{class:`notice`,testid:`server-busy`,attrs:{role:`status`},text:y().t(`ui.server.connecting`)}))}function ie(e,t){if(t.kind===`ticket`){f=null,i.startRun(e,t.seed),c=`play`,A();return}f=t.kind===`quota`?{kind:`quota`,resetsAt:t.resetsAt,limit:t.limit}:t.kind===`network`?{kind:`network`}:{kind:t.code===`unconfigured`?`unconfigured`:`error`},c=`gate`,A()}function O(e){m||(m=!0,D(),t.tickets.request(e).catch(e=>(console.error(e),{kind:`error`,code:`exception`})).then(t=>{m=!1,E(()=>ie(e,t))()}))}let ae=!1,oe=()=>{ae||=(history.pushState({brace:!0},``),!0)};window.addEventListener(`popstate`,()=>{if(ae=!1,m){oe();return}if(g===`descent`){oe();return}if(c===`briefing`)c=`scenario`;else if(c===`scenario`)c=`title`;else if(c===`settings`)c=l;else if(c===`play`)c=`title`;else if(c===`gate`)c=`scenario`;else if(c===`redeem`)c=p===`gate`?`gate`:`settings`;else return;d=!1,A(!0)});function A(e=!1){try{se(e)}catch(e){console.error(e),b(),T()}}function se(m){let C=i.state();ne(C),c===`play`&&(C.run===null||C.run.phase===`briefing`)&&(c=`title`);let w=te(C);if(!m&&w===g)return;g===`descent`&&w!==`descent`&&b(),g=w;let D=y();if(w.startsWith(`recovery`))dc(e,D,{errorCode:C.loadError?.code??`corrupt`,onDownloadRaw:E(()=>{t.kv.get(`save`).then(e=>a(`brace-salvataggio-illeggibile.json`,e??``))}),onReset:E(()=>{i.reset().then(()=>{c=`title`,A(!0)})})});else if(w.startsWith(`settings`))mc(e,D,{settings:r,persistence:t.persistence(),saveFailed:C.saveFailed,hasProgress:C.run!==null||C.profile.stats.runsStarted>0,onChange:e=>{let n=e.locale!==r.locale;r=e,t.saveSettings(e),document.documentElement.lang=e.locale,n&&A(!0)},onExportCode:()=>Ft(i.exportSave()),onExportFile:()=>a(Lt((t.now??(()=>new Date))()),i.exportSave()),onImport:async e=>{try{let t=e.startsWith(`{`)?e:It(e);return await i.importSave(t),{ok:!0}}catch(e){return{ok:!1,messageKey:pc(e instanceof h?e.code:e instanceof Error?e.message:`invalid`)}}},onBack:()=>{c=l,A()},unlock:t.tickets.usesServer?{summary:t.tickets.status(),onRedeem:()=>{p=`settings`,c=`redeem`,A()}}:null});else if(w.startsWith(`scenario`))fc(e,D,{scenarios:C.profile.scenariosUnlocked.flatMap(e=>{let t=k(n.scenarios,e);return t===void 0?[]:[t]}),quotaNote:ee(),onPick:e=>{u=e,c=`briefing`,A()},onBack:()=>{c=`title`,A()}});else if(w.startsWith(`briefing`)){let t=u;if(t===null){c=`scenario`,A(!0);return}Ps(e,D,{briefing:Qt(n,t),onStart:()=>O(t),onBack:()=>{c=`scenario`,A()}})}else if(w.startsWith(`gate`)){let t=f,n=u;if(t===null||n===null){c=`scenario`,A(!0);return}t.kind===`quota`?cc(e,D,{limit:t.limit,resetsAt:t.resetsAt,onRedeem:()=>{p=`gate`,c=`redeem`,A()},onBack:()=>{c=`scenario`,A()}}):ac(e,D,{reason:t.kind,...t.kind===`unconfigured`?{}:{onRetry:()=>O(n)},onBack:()=>{c=`scenario`,A()}})}else if(w.startsWith(`redeem`)){let n=D.t,r=p===`gate`&&u!==null;uc(e,D,{afterLabel:n(r?`ui.server.redeem_start`:`ui.server.redeem_done`),onSubmit:e=>t.tickets.redeem(e).catch(e=>(console.error(e),{kind:`error`,code:`exception`})),onDone:()=>{r&&u!==null?O(u):(c=`settings`,A(!0))},onBack:()=>{c=p===`gate`?`gate`:`settings`,A()}})}else if(w===`descent`){let a=C.run,c=++v;e.replaceChildren(),s(e,{content:n,locale:r.locale,seed:a.seed,scenarioId:a.scenarioId,tutorial:C.profile.stats.runsStarted<=1,exposeDebug:t.debug,debug:{autopilot:o.autopilot,speed:o.speed,quality:o.quality,showFps:o.fps},onProgress:(e,t)=>i.descentProgress(e,t),onEnd:e=>E(()=>i.finishDescent(e))()}).then(e=>{c===v?_=e:e()}).catch(e=>{console.error(e),c===v&&T()})}else if(w.startsWith(`landing`))tc(e,D,{run:C.run,resumed:C.resumedDescent,onContinue:E(()=>i.beginDays())});else if(w.startsWith(`days`))Ys(e,D,{run:C.run,diary:C.diary,onEndDay:e=>E(()=>i.advanceDay(e))(),onManual:()=>{rc(e,D,{onClose:()=>{}})}});else if(w.startsWith(`ended`))ec(e,D,{run:C.run,profile:C.profile,onBack:()=>{i.leaveEnded(),c=`title`,A(!0)}});else if(gc(e,D,{version:t.version,edition:t.edition,canContinue:C.run!==null,resumeNote:x(C),updateAvailable:S(),onUpdate:()=>t.applyUpdate?.(),onNew:()=>{C.run!==null&&C.run.phase!==`ended`?(d=!0,A()):(c=`scenario`,A())},onContinue:()=>{c=`play`,A()},onSettings:()=>{l=`title`,c=`settings`,A()}}),d){let t=D.t;e.querySelector(`main`)?.append(M(`div`,{class:`panel stack`,testid:`title-new-confirm-box`},M(`p`,{text:t(`ui.title.new_confirm`)}),M(`div`,{class:`row`},N(t(`ui.title.new_confirm_yes`),()=>{d=!1,c=`scenario`,A()},{testid:`title-new-confirm`,sfx:D.sfx}),N(t(`ui.title.new_confirm_no`),()=>{d=!1,A()},{testid:`title-new-cancel`,kind:`secondary`,sfx:D.sfx}))))}c!==`title`&&oe(),re()}e.textContent=``;try{await t.tickets.load()}catch(e){console.error(e)}return await i.load(),i.subscribe(()=>A()),t.tickets.subscribe(()=>A()),A(!0),{store:i,refresh:()=>A()}}var yc=`{
  "id": "dune_di_brace",
  "category": "place",
  "illustration": "ar_brace",
  "titleKey": "archive.dune_di_brace.title",
  "textKey": "archive.dune_di_brace.text"
}
`,bc=`{
  "id": "ghiacci_di_brina",
  "category": "place",
  "illustration": "ar_brina",
  "titleKey": "archive.ghiacci_di_brina.title",
  "textKey": "archive.ghiacci_di_brina.text"
}
`,xc=`{
  "id": "piante_di_brina",
  "category": "species",
  "illustration": "ar_piante",
  "titleKey": "archive.piante.title",
  "textKey": "archive.piante.text"
}
`,Sc=`{
  "id": "relitto_arca7",
  "category": "wreck",
  "illustration": "ar_relitto",
  "titleKey": "archive.relitto.title",
  "textKey": "archive.relitto.text"
}
`,Cc=`{
  "id": "segnale_di_giano",
  "category": "phenomenon",
  "illustration": "ar_segnale",
  "titleKey": "archive.segnale.title",
  "textKey": "archive.segnale.text"
}
`,wc=`{
  "id": "bosco_basso",
  "kind": "site",
  "nameKey": "destination.bosco_basso.name",
  "descriptionKey": "destination.bosco_basso.description",
  "illustration": "ds_bosco",
  "days": { "min": 1, "max": 2 },
  "loot": [{ "resource": "food", "amount": { "min": 2, "max": 4 }, "chance": 0.8 }],
  "risk": { "injury": 0.1, "missing": 0.04 },
  "archive": "piante_di_brina"
}
`,Tc=`{
  "id": "brace_dune",
  "kind": "brace",
  "nameKey": "destination.brace_dune.name",
  "descriptionKey": "destination.brace_dune.description",
  "illustration": "ds_brace",
  "days": { "min": 1, "max": 2 },
  "requiresTool": "thermal_suit",
  "loot": [
    { "resource": "energy", "amount": { "min": 2, "max": 4 }, "chance": 0.8 },
    { "resource": "medikit", "amount": 1, "chance": 0.3 }
  ],
  "risk": { "injury": 0.2, "missing": 0.05 },
  "archive": "dune_di_brace"
}
`,Ec=`{
  "id": "brina_ghiacci",
  "kind": "brina",
  "nameKey": "destination.brina_ghiacci.name",
  "descriptionKey": "destination.brina_ghiacci.description",
  "illustration": "ds_brina",
  "days": { "min": 1, "max": 2 },
  "requiresTool": "insulated_suit",
  "loot": [
    { "resource": "water", "amount": { "min": 2, "max": 5 }, "chance": 0.95 },
    { "resource": "food", "amount": { "min": 1, "max": 2 }, "chance": 0.3 }
  ],
  "risk": { "injury": 0.15, "missing": 0.05 },
  "archive": "ghiacci_di_brina",
  "flag": "brina_visitata"
}
`,Dc=`{
  "id": "cratere_vetro",
  "kind": "site",
  "nameKey": "destination.cratere_vetro.name",
  "descriptionKey": "destination.cratere_vetro.description",
  "illustration": "ds_cratere",
  "days": { "min": 2, "max": 2 },
  "loot": [
    { "resource": "energy", "amount": { "min": 2, "max": 3 }, "chance": 0.6 },
    { "resource": "medikit", "amount": 1, "chance": 0.4 },
    { "resource": "oxygen", "amount": { "min": 1, "max": 3 }, "chance": 0.5 }
  ],
  "risk": { "injury": 0.15, "missing": 0.06 }
}
`,Oc=`{
  "id": "grotta_cristalli",
  "kind": "site",
  "nameKey": "destination.grotta_cristalli.name",
  "descriptionKey": "destination.grotta_cristalli.description",
  "illustration": "ds_grotta",
  "days": { "min": 1, "max": 1 },
  "loot": [
    { "resource": "water", "amount": { "min": 1, "max": 3 }, "chance": 0.7 },
    { "resource": "energy", "amount": { "min": 1, "max": 2 }, "chance": 0.4 }
  ],
  "risk": { "injury": 0.1, "missing": 0.03 }
}
`,kc=`{
  "id": "relitto_arca7",
  "kind": "wreck",
  "nameKey": "destination.relitto_arca7.name",
  "descriptionKey": "destination.relitto_arca7.description",
  "illustration": "ds_relitto",
  "days": { "min": 2, "max": 3 },
  "loot": [
    { "resource": "food", "amount": { "min": 2, "max": 4 }, "chance": 0.7 },
    { "resource": "water", "amount": { "min": 1, "max": 3 }, "chance": 0.5 },
    { "resource": "medikit", "amount": 1, "chance": 0.5 },
    { "resource": "oxygen", "amount": { "min": 2, "max": 4 }, "chance": 0.7 }
  ],
  "risk": { "injury": 0.2, "missing": 0.08 },
  "archive": "relitto_arca7",
  "flag": "relitto_visitato"
}
`,Ac=`{
  "id": "abbandono",
  "kind": "abandon",
  "priority": 4,
  "conditions": [{ "op": "flag", "flag": "capsula_abbandonata" }],
  "illustration": "end_abbandono",
  "titleKey": "ending.abbandono.title",
  "textKey": "ending.abbandono.text"
}
`,jc=`{
  "id": "colonia",
  "kind": "colony",
  "priority": 1,
  "conditions": [
    { "op": "day-gte", "value": 30 },
    { "op": "alive-gte", "value": 1 }
  ],
  "illustration": "end_colonia",
  "titleKey": "ending.colonia.title",
  "textKey": "ending.colonia.text"
}
`,Mc=`{
  "id": "contatto",
  "kind": "contact",
  "priority": 6,
  "conditions": [{ "op": "flag", "flag": "contatto_stabilito" }],
  "illustration": "end_contatto",
  "titleKey": "ending.contatto.title",
  "textKey": "ending.contatto.text"
}
`,Nc=`{
  "id": "morte",
  "kind": "death",
  "priority": 9,
  "conditions": [{ "op": "alive-lte", "value": 0 }],
  "illustration": "end_morte",
  "titleKey": "ending.morte.silenzio.title",
  "textKey": "ending.morte.silenzio.text"
}
`,Pc=`{
  "id": "soccorso",
  "kind": "rescue",
  "priority": 5,
  "conditions": [{ "op": "rescue-arrived" }, { "op": "alive-gte", "value": 1 }],
  "illustration": "end_soccorso",
  "titleKey": "ending.soccorso.title",
  "textKey": "ending.soccorso.arrivo"
}
`,Fc=`{
  "id": "brillamento",
  "weight": 1,
  "modifiers": [{ "when": { "op": "weather", "kind": "flare" }, "multiply": 20 }],
  "illustration": "ev_brillamento",
  "titleKey": "event.brillamento.title",
  "textKey": "event.brillamento.text",
  "choices": [
    {
      "id": "shield",
      "labelKey": "event.brillamento.shield",
      "outcomes": [
        { "weight": 8, "textKey": "event.brillamento.shield.ok" },
        {
          "weight": 2,
          "textKey": "event.brillamento.shield.radio",
          "effects": [{ "op": "machine-break", "machine": "radio" }]
        }
      ]
    },
    {
      "id": "harvest",
      "labelKey": "event.brillamento.harvest",
      "outcomes": [
        {
          "weight": 6,
          "textKey": "event.brillamento.harvest.ok",
          "effects": [{ "op": "resource-add", "resource": "energy", "amount": 3 }]
        },
        {
          "weight": 4,
          "textKey": "event.brillamento.harvest.bad",
          "effects": [
            { "op": "resource-add", "resource": "energy", "amount": 2 },
            { "op": "status-add", "target": "$random", "status": "sick" }
          ]
        }
      ]
    }
  ]
}
`,Ic=`{
  "id": "commemorazione",
  "weight": 8,
  "conditions": [
    { "op": "someone-status", "status": "dead" },
    { "op": "alive-gte", "value": 1 },
    { "op": "no-flag", "flag": "commemorato" }
  ],
  "illustration": "ev_commemorazione",
  "titleKey": "event.commemorazione.title",
  "textKey": "event.commemorazione.text",
  "choices": [
    {
      "id": "remember",
      "labelKey": "event.commemorazione.remember",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.commemorazione.remember.ok",
          "effects": [
            { "op": "flag-set", "flag": "commemorato" },
            { "op": "morale-add", "target": "$all", "amount": 1 }
          ]
        }
      ]
    },
    {
      "id": "move_on",
      "labelKey": "event.commemorazione.move_on",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.commemorazione.move_on.ok",
          "effects": [{ "op": "flag-set", "flag": "commemorato" }]
        }
      ]
    }
  ]
}
`,Lc=`{
  "id": "condensa",
  "weight": 5,
  "modifiers": [
    { "when": { "op": "resource-lte", "resource": "water", "value": 2 }, "multiply": 3 }
  ],
  "illustration": "ev_condensa",
  "titleKey": "event.condensa.title",
  "textKey": "event.condensa.text",
  "choices": [
    {
      "id": "collect",
      "labelKey": "event.condensa.collect",
      "outcomes": [
        {
          "weight": 8,
          "textKey": "event.condensa.collect.ok",
          "effects": [
            { "op": "resource-add", "resource": "water", "amount": { "min": 1, "max": 3 } }
          ]
        },
        { "weight": 2, "textKey": "event.condensa.collect.little" }
      ]
    }
  ]
}
`,Rc=`{
  "id": "creatura_stiva",
  "weight": 4,
  "conditions": [
    { "op": "day-gte", "value": 3 },
    { "op": "resource-gte", "resource": "food", "value": 1 }
  ],
  "illustration": "ev_creatura",
  "titleKey": "event.creatura_stiva.title",
  "textKey": "event.creatura_stiva.text",
  "choices": [
    {
      "id": "trap",
      "labelKey": "event.creatura_stiva.trap",
      "outcomes": [
        {
          "weight": 6,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "notice" }, "multiply": 2 }],
          "textKey": "event.creatura_stiva.trap.ok",
          "effects": [
            { "op": "resource-add", "resource": "food", "amount": { "min": 1, "max": 2 } }
          ]
        },
        {
          "weight": 4,
          "textKey": "event.creatura_stiva.trap.bad",
          "effects": [
            { "op": "status-add", "target": "$random", "status": "injured" },
            { "op": "resource-add", "resource": "food", "amount": -1 }
          ]
        }
      ]
    },
    {
      "id": "leave",
      "labelKey": "event.creatura_stiva.leave",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.creatura_stiva.leave.ok",
          "effects": [
            { "op": "resource-add", "resource": "food", "amount": { "min": -2, "max": -1 } }
          ]
        }
      ]
    }
  ]
}
`,zc=`{
  "id": "crepa_cede",
  "weight": 0,
  "chain": { "id": "crepa", "step": 2 },
  "illustration": "ev_crepa",
  "titleKey": "event.crepa_cede.title",
  "textKey": "event.crepa_cede.text",
  "choices": [
    {
      "id": "patch",
      "labelKey": "event.crepa_cede.patch",
      "outcomes": [
        {
          "weight": 6,
          "textKey": "event.crepa_cede.patch.bad",
          "effects": [{ "op": "resource-add", "resource": "hull", "amount": -2 }]
        },
        {
          "weight": 4,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "repair" }, "multiply": 2 }],
          "textKey": "event.crepa_cede.patch.ok",
          "effects": [{ "op": "resource-add", "resource": "hull", "amount": -1 }]
        }
      ]
    }
  ]
}
`,Bc=`{
  "id": "crepa_scafo",
  "weight": 4,
  "conditions": [
    { "op": "skill-present", "skill": "notice" },
    { "op": "resource-lte", "resource": "hull", "value": 9 }
  ],
  "modifiers": [
    { "when": { "op": "resource-lte", "resource": "hull", "value": 5 }, "multiply": 2 }
  ],
  "chain": { "id": "crepa", "step": 1 },
  "illustration": "ev_crepa",
  "titleKey": "event.crepa_scafo.title",
  "textKey": "event.crepa_scafo.text",
  "choices": [
    {
      "id": "seal",
      "labelKey": "event.crepa_scafo.seal",
      "conditions": [{ "op": "skill-present", "skill": "repair" }],
      "outcomes": [
        {
          "weight": 8,
          "textKey": "event.crepa_scafo.seal.ok",
          "effects": [{ "op": "resource-add", "resource": "hull", "amount": 1 }]
        },
        {
          "weight": 2,
          "textKey": "event.crepa_scafo.seal.bad",
          "effects": [{ "op": "schedule-event", "event": "crepa_cede", "afterDays": 2 }]
        }
      ]
    },
    {
      "id": "later",
      "labelKey": "event.crepa_scafo.later",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.crepa_scafo.later.ok",
          "effects": [{ "op": "schedule-event", "event": "crepa_cede", "afterDays": 2 }]
        }
      ]
    }
  ]
}
`,Vc=`{
  "id": "diario_notturno",
  "weight": 3,
  "conditions": [{ "op": "day-gte", "value": 2 }],
  "modifiers": [{ "when": { "op": "morale-lte", "value": -2 }, "multiply": 2 }],
  "illustration": "ev_diario",
  "titleKey": "event.diario_notturno.title",
  "textKey": "event.diario_notturno.text",
  "choices": [
    {
      "id": "write",
      "labelKey": "event.diario_notturno.write",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.diario_notturno.write.ok",
          "effects": [{ "op": "morale-add", "target": "$random", "amount": 1 }]
        }
      ]
    },
    {
      "id": "sleep",
      "labelKey": "event.diario_notturno.sleep",
      "outcomes": [{ "weight": 1, "textKey": "event.diario_notturno.sleep.ok" }]
    }
  ]
}
`,Hc=`{
  "id": "febbre",
  "weight": 5,
  "conditions": [{ "op": "someone-status", "status": "sick" }],
  "illustration": "ev_febbre",
  "titleKey": "event.febbre.title",
  "textKey": "event.febbre.text",
  "choices": [
    {
      "id": "medikit",
      "labelKey": "event.febbre.medikit",
      "conditions": [{ "op": "resource-gte", "resource": "medikit", "value": 1 }],
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.febbre.medikit.ok",
          "effects": [
            { "op": "resource-add", "resource": "medikit", "amount": -1 },
            { "op": "status-remove", "target": "$random", "status": "sick" }
          ]
        }
      ]
    },
    {
      "id": "rest",
      "labelKey": "event.febbre.rest",
      "outcomes": [
        {
          "weight": 4,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "heal" }, "multiply": 2 }],
          "textKey": "event.febbre.rest.ok",
          "effects": [{ "op": "status-remove", "target": "$random", "status": "sick" }]
        },
        {
          "weight": 6,
          "textKey": "event.febbre.rest.bad",
          "effects": [{ "op": "status-add", "target": "$random", "status": "exhausted" }]
        }
      ]
    }
  ]
}
`,Uc=`{
  "id": "festa_improvvisata",
  "weight": 3,
  "conditions": [
    { "op": "day-gte", "value": 4 },
    { "op": "resource-gte", "resource": "food", "value": 3 }
  ],
  "modifiers": [{ "when": { "op": "morale-lte", "value": -1 }, "multiply": 2 }],
  "illustration": "ev_festa",
  "titleKey": "event.festa_improvvisata.title",
  "textKey": "event.festa_improvvisata.text",
  "choices": [
    {
      "id": "party",
      "labelKey": "event.festa_improvvisata.party",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.festa_improvvisata.party.ok",
          "effects": [
            { "op": "resource-add", "resource": "food", "amount": -1 },
            { "op": "morale-add", "target": "$all", "amount": 2 }
          ]
        }
      ]
    },
    {
      "id": "skip",
      "labelKey": "event.festa_improvvisata.skip",
      "outcomes": [{ "weight": 1, "textKey": "event.festa_improvvisata.skip.ok" }]
    }
  ]
}
`,Wc=`{
  "id": "guasto_elettrolizzatore",
  "weight": 4,
  "conditions": [
    { "op": "has-tool", "tool": "electrolyzer" },
    { "op": "not", "condition": { "op": "machine-broken", "machine": "electrolyzer" } }
  ],
  "modifiers": [
    { "when": { "op": "resource-lte", "resource": "hull", "value": 4 }, "multiply": 3 }
  ],
  "illustration": "ev_guasto",
  "titleKey": "event.guasto_elettrolizzatore.title",
  "textKey": "event.guasto_elettrolizzatore.text",
  "choices": [
    {
      "id": "fix",
      "labelKey": "event.guasto_elettrolizzatore.fix",
      "outcomes": [
        {
          "weight": 5,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "repair" }, "multiply": 3 }],
          "textKey": "event.guasto_elettrolizzatore.fix.ok"
        },
        {
          "weight": 5,
          "textKey": "event.guasto_elettrolizzatore.fix.bad",
          "effects": [{ "op": "machine-break", "machine": "electrolyzer" }]
        }
      ]
    },
    {
      "id": "ignore",
      "labelKey": "event.guasto_elettrolizzatore.ignore",
      "outcomes": [
        { "weight": 3, "textKey": "event.guasto_elettrolizzatore.ignore.ok" },
        {
          "weight": 7,
          "textKey": "event.guasto_elettrolizzatore.ignore.bad",
          "effects": [{ "op": "machine-break", "machine": "electrolyzer" }]
        }
      ]
    }
  ]
}
`,Gc=`{
  "id": "lite",
  "weight": 5,
  "conditions": [
    { "op": "morale-lte", "value": -1 },
    { "op": "alive-gte", "value": 2 }
  ],
  "illustration": "ev_lite",
  "titleKey": "event.lite.title",
  "textKey": "event.lite.text",
  "choices": [
    {
      "id": "mediate",
      "labelKey": "event.lite.mediate",
      "outcomes": [
        {
          "weight": 6,
          "textKey": "event.lite.mediate.ok",
          "effects": [{ "op": "morale-add", "target": "$all", "amount": 1 }]
        },
        {
          "weight": 4,
          "textKey": "event.lite.mediate.bad",
          "effects": [{ "op": "morale-add", "target": "$random", "amount": -1 }]
        }
      ]
    },
    {
      "id": "vent",
      "labelKey": "event.lite.vent",
      "outcomes": [
        { "weight": 5, "textKey": "event.lite.vent.ok" },
        {
          "weight": 5,
          "textKey": "event.lite.vent.bad",
          "effects": [{ "op": "morale-add", "target": "$random", "amount": -2 }]
        }
      ]
    }
  ]
}
`,Kc=`{
  "id": "orto_germogli",
  "weight": 0,
  "conditions": [{ "op": "flag", "flag": "semi_raccolti" }],
  "chain": { "id": "orto", "step": 2 },
  "illustration": "ev_orto",
  "titleKey": "event.orto_germogli.title",
  "textKey": "event.orto_germogli.text",
  "choices": [
    {
      "id": "water",
      "labelKey": "event.orto_germogli.water",
      "conditions": [{ "op": "resource-gte", "resource": "water", "value": 2 }],
      "outcomes": [
        {
          "weight": 8,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "botany" }, "multiply": 2 }],
          "textKey": "event.orto_germogli.water.ok",
          "effects": [
            { "op": "resource-add", "resource": "water", "amount": -2 },
            { "op": "flag-set", "flag": "serra_attiva" },
            { "op": "morale-add", "target": "$all", "amount": 1 }
          ]
        },
        {
          "weight": 2,
          "textKey": "event.orto_germogli.water.bad",
          "effects": [{ "op": "resource-add", "resource": "water", "amount": -2 }]
        }
      ]
    },
    {
      "id": "leave",
      "labelKey": "event.orto_germogli.leave",
      "outcomes": [{ "weight": 1, "textKey": "event.orto_germogli.leave.ok" }]
    }
  ]
}
`,qc=`{
  "id": "orto_raccolto",
  "weight": 6,
  "conditions": [{ "op": "flag", "flag": "serra_attiva" }],
  "modifiers": [
    { "when": { "op": "resource-lte", "resource": "food", "value": 2 }, "multiply": 2 }
  ],
  "illustration": "ev_orto",
  "titleKey": "event.orto_raccolto.title",
  "textKey": "event.orto_raccolto.text",
  "choices": [
    {
      "id": "harvest",
      "labelKey": "event.orto_raccolto.harvest",
      "outcomes": [
        {
          "weight": 8,
          "textKey": "event.orto_raccolto.harvest.ok",
          "effects": [
            { "op": "resource-add", "resource": "food", "amount": { "min": 2, "max": 4 } }
          ]
        },
        { "weight": 2, "textKey": "event.orto_raccolto.harvest.rot" }
      ]
    }
  ]
}
`,Jc=`{
  "id": "piante_strane",
  "weight": 5,
  "conditions": [
    {
      "op": "character-present",
      "character": "elio"
    }
  ],
  "modifiers": [
    {
      "when": {
        "op": "resource-lte",
        "resource": "food",
        "value": 2
      },
      "multiply": 3
    }
  ],
  "chain": { "id": "orto", "step": 1 },
  "illustration": "ev_flora",
  "titleKey": "event.piante_strane.title",
  "textKey": "event.piante_strane.text",
  "choices": [
    {
      "id": "harvest",
      "labelKey": "event.piante_strane.harvest",
      "outcomes": [
        {
          "weight": 7,
          "textKey": "event.piante_strane.harvest.ok",
          "effects": [
            {
              "op": "resource-add",
              "resource": "food",
              "amount": {
                "min": 1,
                "max": 3
              }
            },
            {
              "op": "unlock-archive",
              "entry": "piante_di_brina"
            },
            { "op": "flag-set", "flag": "semi_raccolti" },
            { "op": "schedule-event", "event": "orto_germogli", "afterDays": 3 }
          ]
        },
        {
          "weight": 3,
          "textKey": "event.piante_strane.harvest.bad",
          "effects": [
            {
              "op": "status-add",
              "target": "$random",
              "status": "sick"
            }
          ]
        }
      ]
    },
    {
      "id": "leave",
      "labelKey": "event.piante_strane.leave",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.piante_strane.leave.ok"
        }
      ]
    }
  ]
}
`,Yc=`{
  "id": "polvere_pannelli",
  "weight": 4,
  "modifiers": [{ "when": { "op": "weather", "kind": "storm" }, "multiply": 2 }],
  "illustration": "ev_pannelli",
  "titleKey": "event.polvere_pannelli.title",
  "textKey": "event.polvere_pannelli.text",
  "choices": [
    {
      "id": "clean",
      "labelKey": "event.polvere_pannelli.clean",
      "outcomes": [
        {
          "weight": 7,
          "textKey": "event.polvere_pannelli.clean.ok",
          "effects": [{ "op": "resource-add", "resource": "energy", "amount": 2 }]
        },
        {
          "weight": 3,
          "textKey": "event.polvere_pannelli.clean.bad",
          "effects": [{ "op": "status-add", "target": "$random", "status": "exhausted" }]
        }
      ]
    },
    {
      "id": "wait",
      "labelKey": "event.polvere_pannelli.wait",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.polvere_pannelli.wait.ok",
          "effects": [{ "op": "resource-add", "resource": "energy", "amount": -1 }]
        }
      ]
    }
  ]
}
`,Xc=`{
  "id": "relitto_carico",
  "weight": 8,
  "conditions": [{ "op": "flag", "flag": "relitto_visitato" }],
  "chain": { "id": "relitto", "step": 1 },
  "illustration": "ev_relitto",
  "titleKey": "event.relitto_carico.title",
  "textKey": "event.relitto_carico.text",
  "choices": [
    {
      "id": "suit",
      "labelKey": "event.relitto_carico.suit",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.relitto_carico.suit.ok",
          "effects": [
            { "op": "item-add", "item": "tuta_termica" },
            { "op": "schedule-event", "event": "relitto_partenza", "afterDays": 4 }
          ]
        }
      ]
    },
    {
      "id": "parts",
      "labelKey": "event.relitto_carico.parts",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.relitto_carico.parts.ok",
          "effects": [
            { "op": "machine-repair", "machine": "radio" },
            { "op": "signals-add", "amount": 1 },
            { "op": "schedule-event", "event": "relitto_partenza", "afterDays": 4 }
          ]
        }
      ]
    },
    {
      "id": "electrolyzer",
      "labelKey": "event.relitto_carico.electrolyzer",
      "conditions": [{ "op": "not", "condition": { "op": "has-tool", "tool": "electrolyzer" } }],
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.relitto_carico.electrolyzer.ok",
          "effects": [
            { "op": "item-add", "item": "elettrolizzatore" },
            { "op": "schedule-event", "event": "relitto_partenza", "afterDays": 4 }
          ]
        }
      ]
    }
  ]
}
`,Zc=`{
  "id": "relitto_partenza",
  "weight": 0,
  "conditions": [{ "op": "flag", "flag": "relitto_visitato" }],
  "chain": { "id": "relitto", "step": 2 },
  "illustration": "ev_relitto",
  "titleKey": "event.relitto_partenza.title",
  "textKey": "event.relitto_partenza.text",
  "choices": [
    {
      "id": "go",
      "labelKey": "event.relitto_partenza.go",
      "conditions": [{ "op": "alive-gte", "value": 2 }],
      "outcomes": [
        {
          "weight": 6,
          "modifiers": [{ "when": { "op": "skill-present", "skill": "explore" }, "multiply": 1.5 }],
          "textKey": "event.relitto_partenza.go.ok",
          "effects": [
            { "op": "flag-set", "flag": "capsula_abbandonata" },
            { "op": "end-run", "ending": "abbandono" }
          ]
        },
        {
          "weight": 4,
          "textKey": "event.relitto_partenza.go.bad",
          "effects": [
            { "op": "status-add", "target": "$random", "status": "injured" },
            { "op": "morale-add", "target": "$all", "amount": -1 }
          ]
        }
      ]
    },
    {
      "id": "stay",
      "labelKey": "event.relitto_partenza.stay",
      "outcomes": [{ "weight": 1, "textKey": "event.relitto_partenza.stay.ok" }]
    }
  ]
}
`,Qc=`{
  "id": "ritorno_disperso",
  "weight": 8,
  "conditions": [{ "op": "someone-status", "status": "missing" }],
  "modifiers": [{ "when": { "op": "skill-present", "skill": "notice" }, "multiply": 1.5 }],
  "illustration": "ev_ritorno",
  "titleKey": "event.ritorno_disperso.title",
  "textKey": "event.ritorno_disperso.text",
  "choices": [
    {
      "id": "welcome",
      "labelKey": "event.ritorno_disperso.welcome",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.ritorno_disperso.welcome.ok",
          "effects": [{ "op": "special", "id": "return_missing" }]
        }
      ]
    }
  ]
}
`,$c=`{
  "id": "segnale_debole",
  "weight": 6,
  "conditions": [
    {
      "op": "day-gte",
      "value": 2
    },
    { "op": "has-tool", "tool": "radio" }
  ],
  "modifiers": [
    {
      "when": {
        "op": "character-present",
        "character": "tobia"
      },
      "multiply": 2
    }
  ],
  "chain": {
    "id": "segnale",
    "step": 1
  },
  "illustration": "ev_segnale",
  "titleKey": "event.segnale_debole.title",
  "textKey": "event.segnale_debole.text",
  "choices": [
    {
      "id": "investigate",
      "labelKey": "event.segnale_debole.investigate",
      "outcomes": [
        {
          "weight": 7,
          "textKey": "event.segnale_debole.investigate.found",
          "effects": [
            {
              "op": "flag-set",
              "flag": "segnale_trovato"
            },
            {
              "op": "schedule-event",
              "event": "segnale_fonte",
              "afterDays": 2
            }
          ]
        },
        {
          "weight": 3,
          "textKey": "event.segnale_debole.investigate.nothing"
        }
      ]
    },
    {
      "id": "ignore",
      "labelKey": "event.segnale_debole.ignore",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.segnale_debole.ignore.ok"
        }
      ]
    }
  ]
}
`,el=`{
  "id": "segnale_fonte",
  "weight": 0,
  "conditions": [
    {
      "op": "flag",
      "flag": "segnale_trovato"
    }
  ],
  "chain": {
    "id": "segnale",
    "step": 2
  },
  "illustration": "ev_segnale",
  "titleKey": "event.segnale_fonte.title",
  "textKey": "event.segnale_fonte.text",
  "choices": [
    {
      "id": "respond",
      "labelKey": "event.segnale_fonte.respond",
      "outcomes": [
        {
          "weight": 5,
          "textKey": "event.segnale_fonte.respond.contact",
          "effects": [
            { "op": "flag-set", "flag": "contatto_stabilito" },
            {
              "op": "unlock-archive",
              "entry": "segnale_di_giano"
            },
            {
              "op": "end-run",
              "ending": "contatto"
            }
          ]
        },
        {
          "weight": 5,
          "modifiers": [{ "when": { "op": "machine-broken", "machine": "radio" }, "multiply": 4 }],
          "textKey": "event.segnale_fonte.respond.lost",
          "effects": [{ "op": "morale-add", "target": "$all", "amount": -1 }]
        }
      ]
    },
    {
      "id": "wait",
      "labelKey": "event.segnale_fonte.wait",
      "outcomes": [
        {
          "weight": 1,
          "textKey": "event.segnale_fonte.wait.ok"
        }
      ]
    }
  ]
}
`,tl=`{
  "id": "tempesta",
  "weight": 4,
  "modifiers": [{ "when": { "op": "weather", "kind": "storm" }, "multiply": 8 }],
  "illustration": "ev_tempesta",
  "titleKey": "event.tempesta.title",
  "textKey": "event.tempesta.text",
  "choices": [
    {
      "id": "shelter",
      "labelKey": "event.tempesta.shelter",
      "outcomes": [
        {
          "weight": 8,
          "textKey": "event.tempesta.shelter.ok"
        },
        {
          "weight": 2,
          "textKey": "event.tempesta.shelter.hull",
          "effects": [
            {
              "op": "resource-add",
              "resource": "hull",
              "amount": -1
            }
          ]
        }
      ]
    },
    {
      "id": "work",
      "labelKey": "event.tempesta.work",
      "outcomes": [
        {
          "weight": 6,
          "textKey": "event.tempesta.work.ok",
          "effects": [
            {
              "op": "resource-add",
              "resource": "energy",
              "amount": {
                "min": 1,
                "max": 3
              }
            }
          ]
        },
        {
          "weight": 4,
          "textKey": "event.tempesta.work.bad",
          "modifiers": [
            {
              "when": {
                "op": "character-status",
                "character": "mara",
                "status": "injured"
              },
              "multiply": 3
            }
          ],
          "effects": [
            {
              "op": "status-add",
              "target": "$random",
              "status": "injured"
            }
          ]
        }
      ]
    }
  ]
}
`,nl=`{
  "id": "avaria_sterzo",
  "weight": 1,
  "reactSeconds": 4,
  "effect": {
    "kind": "steering-lock",
    "seconds": 8
  },
  "nameKey": "hazard.avaria_sterzo.name",
  "alertKey": "hazard.avaria_sterzo.alert",
  "reactKey": "hazard.avaria_sterzo.react",
  "successKey": "hazard.avaria_sterzo.success",
  "failKey": "hazard.avaria_sterzo.fail"
}
`,rl=`{
  "id": "avvitamento",
  "weight": 1,
  "reactSeconds": 3,
  "effect": {
    "kind": "injury",
    "count": 1
  },
  "nameKey": "hazard.avvitamento.name",
  "alertKey": "hazard.avvitamento.alert",
  "reactKey": "hazard.avvitamento.react",
  "successKey": "hazard.avvitamento.success",
  "failKey": "hazard.avvitamento.fail"
}
`,il=`{
  "id": "detriti",
  "weight": 1,
  "reactSeconds": 3,
  "effect": {
    "kind": "hull",
    "damage": 2
  },
  "nameKey": "hazard.detriti.name",
  "alertKey": "hazard.detriti.alert",
  "reactKey": "hazard.detriti.react",
  "successKey": "hazard.detriti.success",
  "failKey": "hazard.detriti.fail"
}
`,al=`{
  "id": "guasto_stiva",
  "weight": 1,
  "reactSeconds": 4,
  "effect": {
    "kind": "lose-item",
    "count": 1
  },
  "nameKey": "hazard.guasto_stiva.name",
  "alertKey": "hazard.guasto_stiva.alert",
  "reactKey": "hazard.guasto_stiva.react",
  "successKey": "hazard.guasto_stiva.success",
  "failKey": "hazard.guasto_stiva.fail"
}
`,ol=`{
  "item.radio.name": "Radio",
  "item.radio.description": "Long-range transmitter: every signal sent brings a rescue closer.",
  "item.radio.missing": "Without a radio, nobody will ever know you are here.",
  "item.elettrolizzatore.name": "Electrolyzer",
  "item.elettrolizzatore.description": "Water + energy → oxygen. Noisy, fragile, essential.",
  "item.elettrolizzatore.missing": "Without the electrolyzer the capsule's air is numbered.",
  "item.tuta_isolante.name": "Insulated suit",
  "item.tuta_isolante.description": "Lets you reach the Brina side, where ice means water.",
  "item.tuta_isolante.missing": "Without an insulated suit the frozen side stays out of reach.",
  "item.tuta_termica.name": "Thermal suit",
  "item.tuta_termica.description": "Lets you walk on the Brace side without cooking.",
  "item.tuta_termica.missing": "Without a thermal suit the scorching side stays out of reach.",

  "destination.brace_dune.name": "The Brace dunes",
  "destination.brace_dune.description": "Glassy sand and heat that makes the air shimmer. Solar cells everywhere, if you don't melt first.",
  "destination.brina_ghiacci.name": "The Brina ice fields",
  "destination.brina_ghiacci.description": "A white plain that creaks. Under the crust there is good water.",
  "destination.relitto_arca7.name": "The ARCA-7 wreck",
  "destination.relitto_arca7.description": "The hull of another mission, crumpled like a can. Two or three days' walk.",
  "destination.grotta_cristalli.name": "The crystal cave",
  "destination.grotta_cristalli.description": "It drips, it glitters and it echoes strangely. Close to the capsule.",
  "destination.bosco_basso.name": "The low wood",
  "destination.bosco_basso.description": "Low, twisted shrubs at the edge of the twilight. Some of it is edible.",
  "destination.cratere_vetro.name": "The glass crater",
  "destination.cratere_vetro.description": "An ancient impact melted the rock. Inside lies scrap from who knows what.",

  "archive.dune_di_brace.title": "Brace dunes",
  "archive.dune_di_brace.text": "Sand melted over and over by the fixed star: on the lit side it has never rained.",
  "archive.ghiacci_di_brina.title": "Brina ice fields",
  "archive.ghiacci_di_brina.text": "Water frozen for millennia on the dark side, within reach of anyone with the right suit.",

  "ending.soccorso.arrivo": "A ship answers the call and descends into the twilight. Someone, at last, heard you.",
  "ending.morte.silenzio.title": "Silence",
  "ending.morte.silenzio.text": "There is nobody left in the capsule to write the diary.",
  "ending.colonia.title": "Colony",
  "ending.colonia.text": "Thirty days later nobody has come for you. You stopped waiting: this is home now.",
  "ending.abbandono.title": "The new home",
  "ending.abbandono.text": "You leave the capsule and move into the ARCA-7 wreck. More room, more ghosts.",

  "event.segnale_fonte.respond.lost": "We answer. Silence. Maybe the wrong frequency, maybe the wrong planet.",

  "event.orto_germogli.title": "Sprouts",
  "event.orto_germogli.text": "The seeds Elio collected have put out two tiny leaves. They want water, of course.",
  "event.orto_germogli.water": "Give them two rations of water",
  "event.orto_germogli.water.ok": "They grow. Elio talks to them. I pretend not to hear, but I smile.",
  "event.orto_germogli.water.bad": "They rot anyway. Wasted water, and we all know it.",
  "event.orto_germogli.leave": "We can't afford it",
  "event.orto_germogli.leave.ok": "The little leaves dry up in silence. Nobody mentions it.",
  "event.orto_raccolto.title": "The garden",
  "event.orto_raccolto.text": "The little garden under the lamp is ready for a harvest.",
  "event.orto_raccolto.harvest": "Harvest",
  "event.orto_raccolto.harvest.ok": "Real vegetables. They taste weird, but they're ours.",
  "event.orto_raccolto.harvest.rot": "Mould. The planet reminds us who's in charge.",

  "event.guasto_elettrolizzatore.title": "A hiss",
  "event.guasto_elettrolizzatore.text": "The electrolyzer is whistling in a way we don't like at all.",
  "event.guasto_elettrolizzatore.fix": "Step in right away",
  "event.guasto_elettrolizzatore.fix.ok": "A gasket swapped just in time. The whistling stops.",
  "event.guasto_elettrolizzatore.fix.bad": "Worse than before: now it's properly broken.",
  "event.guasto_elettrolizzatore.ignore": "Hope it goes away",
  "event.guasto_elettrolizzatore.ignore.ok": "It does. Sometimes machines just complain.",
  "event.guasto_elettrolizzatore.ignore.bad": "It doesn't. A sharp bang and the machine dies.",

  "event.brillamento.title": "Flare",
  "event.brillamento.text": "The star spits light and the sky turns white. The sensors go haywire.",
  "event.brillamento.shield": "Shield everything and wait",
  "event.brillamento.shield.ok": "We stay in the dark until it passes. Better that way.",
  "event.brillamento.shield.radio": "The radio wasn't shielded enough: it's gone.",
  "event.brillamento.harvest": "Use it to charge the batteries",
  "event.brillamento.harvest.ok": "Batteries fuller than ever.",
  "event.brillamento.harvest.bad": "Batteries charged, but someone took too much light and feels sick.",

  "event.condensa.title": "Condensation",
  "event.condensa.text": "Drops form on the cold walls of the capsule.",
  "event.condensa.collect": "Collect them",
  "event.condensa.collect.ok": "A bottle of water, drop by drop.",
  "event.condensa.collect.little": "Enough to wet your lips, no more.",

  "event.ritorno_disperso.title": "Footsteps outside",
  "event.ritorno_disperso.text": "Someone knocks on the hatch. Three slow knocks.",
  "event.ritorno_disperso.welcome": "Open it",
  "event.ritorno_disperso.welcome.ok": "They're back. Exhausted, filthy, alive. Nobody can stop hugging them.",

  "event.lite.title": "A fight",
  "event.lite.text": "A spoon out of place and the shouting starts. Space is short, patience shorter.",
  "event.lite.mediate": "Step in between",
  "event.lite.mediate.ok": "Apologies all round. For today.",
  "event.lite.mediate.bad": "Now they're angry at whoever stepped in too.",
  "event.lite.vent": "Let them vent",
  "event.lite.vent.ok": "They shout, then sit side by side as if nothing happened.",
  "event.lite.vent.bad": "Words fly that can't be taken back.",

  "event.festa_improvvisata.title": "A party",
  "event.festa_improvvisata.text": "Today would have been a birthday, back on Earth. The calendar doesn't count here, but cake does.",
  "event.festa_improvvisata.party": "Celebrate with an extra ration",
  "event.festa_improvvisata.party.ok": "Candles made of matches. We actually laughed.",
  "event.festa_improvvisata.skip": "Not the time",
  "event.festa_improvvisata.skip.ok": "We'll remember it when we're home. If.",

  "event.creatura_stiva.title": "Something in the hold",
  "event.creatura_stiva.text": "Scratching among the food crates. Lots of little feet.",
  "event.creatura_stiva.trap": "Set a trap",
  "event.creatura_stiva.trap.ok": "Caught it. Tobia says it's edible. Tobia says a lot of things.",
  "event.creatura_stiva.trap.bad": "It bites, escapes, and takes a ration with it.",
  "event.creatura_stiva.leave": "Leave it alone",
  "event.creatura_stiva.leave.ok": "It leaves us alone, but not our food.",

  "event.crepa_scafo.title": "A crack",
  "event.crepa_scafo.text": "Tobia points at a thin line on the wall. Nobody else had noticed it.",
  "event.crepa_scafo.seal": "Seal it now",
  "event.crepa_scafo.seal.ok": "Mara closes it and reinforces the panel. Better than before.",
  "event.crepa_scafo.seal.bad": "The sealant doesn't hold. We'll have to keep an eye on it.",
  "event.crepa_scafo.later": "Leave it for later",
  "event.crepa_scafo.later.ok": "The crack stays there. Every now and then someone stares at it.",
  "event.crepa_cede.title": "The crack gives way",
  "event.crepa_cede.text": "A snap in the night: the crack has widened and it whistles.",
  "event.crepa_cede.patch": "Patch it as best we can",
  "event.crepa_cede.patch.bad": "Tape, glue and prayers. The hull comes out battered.",
  "event.crepa_cede.patch.ok": "Patched in a hurry, but patched. The damage is contained.",

  "event.febbre.title": "The fever",
  "event.febbre.text": "Whoever is sick is burning and shaking. It will be a long night.",
  "event.febbre.medikit": "Use a medikit",
  "event.febbre.medikit.ok": "Antibiotics and patience. By morning the fever is down.",
  "event.febbre.rest": "Rest and cool water",
  "event.febbre.rest.ok": "Elio stays up all night. The fever passes.",
  "event.febbre.rest.bad": "The fever stays and whoever is nursing collapses from exhaustion.",

  "event.relitto_carico.title": "The ARCA-7 cargo",
  "event.relitto_carico.text": "There's still useful stuff in the wreck, but you can only carry one thing at a time.",
  "event.relitto_carico.suit": "Take the thermal suit",
  "event.relitto_carico.suit.ok": "A whole thermal suit. The Brace side is now within reach.",
  "event.relitto_carico.parts": "Strip the antenna",
  "event.relitto_carico.parts.ok": "Parts for the radio and a stronger signal than usual.",
  "event.relitto_carico.electrolyzer": "Strip out their electrolyzer",
  "event.relitto_carico.electrolyzer.ok": "It weighs a ton, but it works. We can breathe without counting again.",
  "event.relitto_partenza.title": "Move out?",
  "event.relitto_partenza.text": "The wreck is bigger and sturdier than the capsule. Someone suggests moving there.",
  "event.relitto_partenza.go": "Everybody goes",
  "event.relitto_partenza.go.ok": "We pack everything and leave. The capsule stays behind, small and alone.",
  "event.relitto_partenza.go.bad": "The trip goes badly: we turn back with someone hurt and less hope.",
  "event.relitto_partenza.stay": "Stay in the capsule",
  "event.relitto_partenza.stay.ok": "The capsule is cramped, but it's ours.",

  "event.polvere_pannelli.title": "Dust on the panels",
  "event.polvere_pannelli.text": "A layer of red dust covers the solar panels.",
  "event.polvere_pannelli.clean": "Go out and clean them",
  "event.polvere_pannelli.clean.ok": "Shiny panels, happy batteries.",
  "event.polvere_pannelli.clean.bad": "Clean, but whoever went out comes back wrecked.",
  "event.polvere_pannelli.wait": "Wait for the wind",
  "event.polvere_pannelli.wait.ok": "The wind doesn't come. The batteries drain.",

  "event.diario_notturno.title": "Diary, night",
  "event.diario_notturno.text": "I can't sleep. The light here never changes: it's always this endless sunset.",
  "event.diario_notturno.write": "Write",
  "event.diario_notturno.write.ok": "I write it all down. Tomorrow someone will read it and laugh at my dramatic sentences.",
  "event.diario_notturno.sleep": "Try to sleep",
  "event.diario_notturno.sleep.ok": "I count the bolts on the ceiling. Forty-two. As always.",

  "event.commemorazione.title": "A farewell",
  "event.commemorazione.text": "The empty seat at the table is louder than any storm.",
  "event.commemorazione.remember": "Remember them together",
  "event.commemorazione.remember.ok": "Everyone tells a story. We cry, then laugh, then cry again.",
  "event.commemorazione.move_on": "Move on",
  "event.commemorazione.move_on.ok": "Nobody talks about it. The seat stays empty."
}
`,sl=`{
  "hazard.detriti.name": "Debris",
  "hazard.detriti.alert": "DEBRIS INCOMING. Evasive manoeuvre!",
  "hazard.detriti.react": "DODGE",
  "hazard.detriti.success": "Debris avoided.",
  "hazard.detriti.fail": "Debris strike: the hull gives way.",
  "hazard.avaria_sterzo.name": "Steering failure",
  "hazard.avaria_sterzo.alert": "STEERING FAILURE. Switch to manual control!",
  "hazard.avaria_sterzo.react": "MANUAL",
  "hazard.avaria_sterzo.success": "Manual control engaged.",
  "hazard.avaria_sterzo.fail": "The steering is dead for a few seconds.",
  "hazard.guasto_stiva.name": "Cargo bay failure",
  "hazard.guasto_stiva.alert": "CARGO HATCH UNLOCKED. Close it!",
  "hazard.guasto_stiva.react": "CLOSE",
  "hazard.guasto_stiva.success": "Hatch closed.",
  "hazard.guasto_stiva.fail": "The hatch swings open: something flies out.",
  "hazard.avvitamento.name": "Spin",
  "hazard.avvitamento.alert": "THE CAPSULE IS SPINNING. Stabilise!",
  "hazard.avvitamento.react": "STABILISE",
  "hazard.avvitamento.success": "Spin stopped.",
  "hazard.avvitamento.fail": "Thrown around the cabin: someone gets hurt.",
  "descent.hud.impact": "IMPACT",
  "descent.hud.altitude": "ALT {km} km",
  "descent.hud.velocity": "VEL {v} km/s",
  "descent.band.brace": "BRACE",
  "descent.band.twilight": "TWILIGHT",
  "descent.band.brina": "BRINA",
  "descent.zone.brace": "Too far into the Brace side",
  "descent.zone.brina": "Too far into the Brina side",
  "descent.zone.twilight_brace": "Twilight, toward the Brace",
  "descent.zone.twilight_brina": "Twilight, toward the Brina",
  "descent.steer.left": "Steer toward the Brace side",
  "descent.steer.right": "Steer toward the Brina side",
  "descent.steer.locked": "STEERING LOCKED",
  "descent.hold.title": "CARGO",
  "descent.hold.mass": "{kg} kg · safe {safe}",
  "descent.hold.safe": "safe",
  "descent.hold.hint": "Swipe up or double tap to jettison · hold to read",
  "descent.hold.again": "tap again",
  "descent.hold.card": "{name}, {kg} kilograms",
  "descent.mass.over": "OVERWEIGHT",
  "descent.chute.button": "OPEN PARACHUTE",
  "descent.chute.open": "OPEN",
  "descent.chute.ready": "Parachute ready",
  "descent.chute.early": "Too early: the canopy tore",
  "descent.chute.good": "Parachute open",
  "descent.chute.perfect": "Perfect parachute",
  "descent.chute.late": "Late! Hard braking",
  "descent.chute.auto": "Automatic deployment, at the last second",
  "descent.fire.start": "FIRE: {item}. Jettison it!",
  "descent.fire.out": "Fire jettisoned",
  "descent.fire.burnt": "{item} destroyed by fire. Hull −{n}",
  "descent.item.lost": "{item} lost",
  "descent.wind.brace": "HIGH-ALTITUDE CURRENT → Brace side",
  "descent.wind.brina": "HIGH-ALTITUDE CURRENT → Brina side",
  "descent.wind.end": "The current dies down",
  "descent.tutorial.jettison": "The capsule is too heavy. The clock starts at the first jettison: swipe an item up or tap it twice.",
  "descent.tutorial.steer": "Hold ◀ ▶ or drag on the planet: stay inside the twilight band.",
  "descent.tutorial.chute": "Open the parachute when the needle is in the green zone.",
  "descent.tutorial.react": "Mishap! Tap the button before time runs out.",
  "descent.report.title": "LANDING",
  "descent.report.zone": "Zone",
  "descent.report.zone.twilight": "Twilight band",
  "descent.report.zone.brace_edge": "Edge of the Brace side",
  "descent.report.zone.brina_edge": "Edge of the Brina side",
  "descent.report.hull": "Hull",
  "descent.report.injured": "Injured",
  "descent.report.lost": "Items lost",
  "descent.report.none": "none",
  "descent.report.replay": "Log → same outcome",
  "descent.report.again": "Play again",
  "descent.report.autopilot": "Watch the autopilot",
  "descent.error.content": "Invalid content: the descent cannot start."
}
`,cl=`{
  "ui.app.resume.days": "Day {n}",
  "ui.app.resume.landing": "Touchdown",
  "ui.app.resume.ended": "Ending",
  "ui.title.new_confirm": "A run is already in progress: starting over discards it.",
  "ui.title.new_confirm_yes": "Start over",
  "ui.title.new_confirm_no": "Cancel",
  "ui.app.error_hint": "An error occurred. Your progress was not touched.",
  "ui.app.other_tab": "BRACE! is already open in another tab. Close it and try again so the save is not corrupted.",
  "ui.app.other_tab_retry": "Try again",
  "ui.title.update": "New version available: update"
}
`,ll=`{
  "ui.briefing.start": "Begin the descent",
  "ui.briefing.progress": "Card {i} of {n}"
}
`,ul=`{
  "ui.briefing.planet.title": "The planet",
  "ui.briefing.planet.line1": "Giano always shows the same face to its star.",
  "ui.briefing.planet.line2": "One side is scorching (Brace), the other frozen (Brina).",
  "ui.briefing.planet.line3": "Between them, a twilight band where life is possible.",
  "ui.briefing.crew.title": "The family",
  "ui.briefing.crew.hint": "Everyone is good at something. The rest you will find out by living together.",
  "ui.briefing.cargo.title": "The hold",
  "ui.briefing.cargo.hint": "Everything has weight: the more you bring down, the harder the impact.",
  "ui.briefing.cargo.mass": "Weight {n}",
  "ui.briefing.cargo.missing": "If missing: {text}",
  "ui.briefing.chains.title": "Chains to remember",
  "ui.briefing.chain.oxygen.from.0": "Water",
  "ui.briefing.chain.oxygen.from.1": "Energy",
  "ui.briefing.chain.oxygen.to": "Oxygen",
  "ui.briefing.chain.thermal.from.0": "Thermal suit",
  "ui.briefing.chain.thermal.to": "Brace side",
  "ui.briefing.chain.insulated.from.0": "Insulated suit",
  "ui.briefing.chain.insulated.to": "Brina side",
  "ui.briefing.chain.signal.from.0": "Radio",
  "ui.briefing.chain.signal.from.1": "Signals",
  "ui.briefing.chain.signal.to": "Rescue",
  "ui.briefing.descent.title": "The descent in 4 gestures",
  "ui.briefing.gesture.jettison": "Swipe up or double-tap an item to jettison it.",
  "ui.briefing.gesture.steer": "Drag or use the arrows to reach the green band.",
  "ui.briefing.gesture.chute": "Open the parachute when the indicator is green.",
  "ui.briefing.gesture.react": "Tap “React” when a hazard appears."
}
`,dl=`{
  "ui.common.next": "Next",
  "ui.common.skip": "Skip",
  "ui.common.close": "Close",
  "ui.common.error": "Something went wrong"
}
`,fl=`{
  "ui.days.day": "Day {n}",
  "ui.days.manual": "Manual",
  "ui.days.crew": "Crew",
  "ui.days.machines": "Machines",
  "ui.days.diary": "Diary",
  "ui.days.diary_day": "Day {n}",
  "ui.days.diary_older": "Earlier days",
  "ui.days.diary_empty": "No entries yet.",
  "ui.days.eat": "Eats",
  "ui.days.drink": "Drinks",
  "ui.days.medikit": "Medkit",
  "ui.days.activity": "Activity",
  "ui.days.act.rest": "Rest",
  "ui.days.act.repair": "Repair: {target}",
  "ui.days.act.go": "Expedition: {dest} ({days} d)",
  "ui.days.no_food": "{n} days without food",
  "ui.days.no_water": "{n} days without water",
  "ui.days.returns": "At {dest}: back on day {n}",
  "ui.days.mood": "Mood {v}",
  "ui.days.radio": "Transmit by radio (1 energy)",
  "ui.days.electrolyzer": "Electrolyzer (1 water + 1 energy → oxygen)",
  "ui.days.broken": "broken",
  "ui.days.signals": "Signals sent: {n}",
  "ui.days.end_day": "End the day",
  "ui.days.err.choice": "Choose what to do about the event.",
  "ui.days.err.food": "Not enough food for all the rations.",
  "ui.days.err.water": "Not enough water.",
  "ui.days.err.energy": "Not enough energy.",
  "ui.days.err.medikit": "Not enough medkits.",
  "ui.days.err.generic": "Something is off: check today’s choices.",
  "ui.tool.electrolyzer": "electrolyzer",
  "ui.tool.radio": "radio",
  "ui.tool.thermal_suit": "needs the thermal suit",
  "ui.tool.insulated_suit": "needs the insulated suit"
}
`,pl=`{
  "ui.status.hungry": "Hungry",
  "ui.status.thirsty": "Thirsty",
  "ui.status.sick": "Sick",
  "ui.status.injured": "Injured",
  "ui.status.exhausted": "Exhausted",
  "ui.status.depressed": "Low spirits",
  "ui.status.away": "Away",
  "ui.status.missing": "Missing",
  "ui.status.dead": "Dead",
  "ui.resource.food": "Food",
  "ui.resource.water": "Water",
  "ui.resource.energy": "Energy",
  "ui.resource.oxygen": "Oxygen",
  "ui.resource.hull": "Hull",
  "ui.resource.medikit": "Medkit",
  "ui.machine.radio": "Radio",
  "ui.machine.electrolyzer": "Electrolyzer",
  "ui.weather.calm": "calm",
  "ui.weather.storm": "storm",
  "ui.weather.flare": "solar flare",
  "ui.skill.repair": "Repair",
  "ui.skill.heal": "Heal",
  "ui.skill.explore": "Explore",
  "ui.skill.notice": "Notice",
  "ui.skill.botany": "Plants",
  "ui.zone.twilight": "Twilight band",
  "ui.zone.brace_edge": "Edge of Brace",
  "ui.zone.brina_edge": "Edge of Brina",
  "ui.cause.starvation": "hunger",
  "ui.cause.thirst": "thirst",
  "ui.cause.weakness": "weakness",
  "ui.cause.suffocation": "suffocation",
  "ui.gesture.jettison": "Jettison",
  "ui.gesture.steer": "Steer",
  "ui.gesture.chute": "Parachute",
  "ui.gesture.react": "React",
  "ui.log.weather": "Weather: {kind}.",
  "ui.log.event": "{text}",
  "ui.log.status.gained": "{name} is now: {status}.",
  "ui.log.status.lost": "{name} is no longer: {status}.",
  "ui.log.death": "{name} did not make it ({cause}).",
  "ui.log.ration.food": "{name} ate.",
  "ui.log.ration.water": "{name} drank.",
  "ui.log.medikit.healed": "The medkit helped {name}.",
  "ui.log.medikit.failed": "The medkit was not enough for {name}.",
  "ui.log.repair.ok": "{name} repaired: {target}.",
  "ui.log.repair.fail": "{name} failed to repair {target}.",
  "ui.log.machine.broken": "Fault: {machine}.",
  "ui.log.machine.fixed": "{machine} works again.",
  "ui.log.resource": "{resource}: {delta}.",
  "ui.log.item.gained": "Found: {item}.",
  "ui.log.item.lost": "Lost: {item}.",
  "ui.log.expedition_start": "{name} leaves for {destination} (back on day {day}).",
  "ui.log.expedition_return": "{name} is back from {destination}: {found}.",
  "ui.log.expedition_return_nothing": "{name} is back from {destination} empty-handed.",
  "ui.log.expedition_missing": "{name} did not return from {destination}.",
  "ui.log.refused.expedition": "{name} refuses to go out.",
  "ui.log.refused.repair": "{name} refuses to repair.",
  "ui.log.quarrel": "{name} and {other} had an argument.",
  "ui.log.crisis": "{name} is having a breakdown.",
  "ui.log.abandon": "{name} has left the capsule.",
  "ui.log.morale": "{name}’s mood: {delta}.",
  "ui.log.signal": "Signals gathered: {total}.",
  "ui.log.oxygen": "The electrolyzer produces {n} oxygen.",
  "ui.log.oxygen_out": "The oxygen is gone.",
  "ui.log.archive": "New Archive entry: {title}.",
  "ui.log.ending": "Ending: {title}."
}
`,ml=`{
  "ui.ending.days": "Days lived",
  "ui.ending.alive": "Survivors",
  "ui.ending.dead": "Deaths",
  "ui.ending.archive": "Archive entries found",
  "ui.ending.runs": "Runs completed",
  "ui.ending.back": "Back to title"
}
`,hl=`{
  "ui.landing.title": "Touchdown",
  "ui.landing.intro": "Capsule down. Damage assessment complete.",
  "ui.landing.zone": "Zone",
  "ui.landing.hull": "Hull",
  "ui.landing.injured": "Injured",
  "ui.landing.lost": "Items lost",
  "ui.landing.none": "none",
  "ui.landing.nothing": "nothing",
  "ui.landing.resumed": "The autopilot completed the descent while you were away.",
  "ui.landing.continue": "Begin the days"
}
`,gl=`{
  "ui.manual.title": "Ship’s manual",
  "ui.manual.resources.title": "Resources",
  "ui.manual.resource.food": "One ration per person per day. Without food hunger arrives after about three days: sometimes sooner, sometimes later.",
  "ui.manual.resource.water": "One dose per person per day. Thirst arrives before hunger.",
  "ui.manual.resource.energy": "Powers the radio and the electrolyzer. The panels recharge it every day; storms drain it.",
  "ui.manual.resource.oxygen": "Without oxygen nobody recovers from exhaustion and, after a few days, people die. The electrolyzer makes it from water and energy.",
  "ui.manual.resource.hull": "Hull integrity, from 0 to 10. The more damaged, the likelier the faults.",
  "ui.manual.resource.medikit": "They treat the sick and the injured. There are few: use them wisely.",
  "ui.manual.statuses.title": "Character states",
  "ui.manual.status.hungry": "Has not eaten for days. Gets worse quickly if already weak.",
  "ui.manual.status.thirsty": "Has not drunk for days. More urgent than hunger.",
  "ui.manual.status.sick": "May recover alone if well fed and hydrated; otherwise needs a medkit.",
  "ui.manual.status.injured": "Cannot go on expeditions until healed.",
  "ui.manual.status.exhausted": "Needs rest and air: cannot go out.",
  "ui.manual.status.depressed": "Morale is low: refusals, arguments, breakdowns and desertions are possible.",
  "ui.manual.status.away": "On an expedition. Back on the day shown in the diary.",
  "ui.manual.status.missing": "Did not return. Perhaps an event will bring them back.",
  "ui.manual.status.dead": "Dead. Permanent.",
  "ui.manual.chains.title": "Chains to remember",
  "ui.manual.chain.oxygen": "Water + energy → oxygen (electrolyzer).",
  "ui.manual.chain.thermal": "Thermal suit → expeditions to Brace.",
  "ui.manual.chain.insulated": "Insulated suit → expeditions to Brina.",
  "ui.manual.chain.signal": "Radio → signals → rescue: it takes several days of transmitting.",
  "ui.manual.descent.title": "The descent"
}
`,_l=`{
  "ui.server.connecting": "Connecting to the server…",
  "ui.server.quota_line": "Free runs: {left} of {limit} this week",
  "ui.server.quota_line_unlocked": "Game unlocked: no run limit",
  "ui.server.quota_title": "Free runs used up",
  "ui.server.quota_body": "You have used the {limit} free runs of this week. They come back {when}, Italian time.",
  "ui.server.quota_hint": "If you have a descent in progress, “Continue” on the title screen is always available.",
  "ui.server.redeem_cta": "Redeem a code",
  "ui.server.network_title": "Network needed",
  "ui.server.network_body": "To start a new descent BRACE! has to confirm the run with the server. Check your connection and try again.",
  "ui.server.network_retry": "Try again",
  "ui.server.error_title": "Can't start the descent",
  "ui.server.error_body": "The server did not accept the request. Try again in a moment; if it keeps happening, reload the game to update it.",
  "ui.server.unconfigured_title": "Copy not connected",
  "ui.server.unconfigured_body": "This copy of BRACE! is not connected to the official server and cannot start new games.",
  "ui.server.redeem_title": "Redeem a code",
  "ui.server.redeem_hint": "Got a tester or itch.io code? Enter it here: it unlocks the game forever on this device.",
  "ui.server.redeem_label": "Code",
  "ui.server.redeem_placeholder": "BRACE-XXXX-XXXX-XXXX",
  "ui.server.redeem_apply": "Unlock",
  "ui.server.redeem_working": "Checking the code…",
  "ui.server.redeem_ok": "Unlocked! From now on you play with no run limit.",
  "ui.server.redeem_invalid": "Invalid code. Check you typed it right: codes never contain the letters I, L, O or U.",
  "ui.server.redeem_used": "This code has already been used on another device.",
  "ui.server.redeem_limited": "Too many attempts. Try again later.",
  "ui.server.redeem_network": "You need to be online to redeem a code. Try again when you are.",
  "ui.server.redeem_error": "The code could not be redeemed. Try again in a moment.",
  "ui.server.redeem_done": "Done",
  "ui.server.redeem_start": "Begin the descent",
  "ui.server.settings_title": "Unlock",
  "ui.server.settings_unlocked": "Game unlocked: no run limit.",
  "ui.server.settings_used": "Free runs used this week: {used} of {limit}.",
  "ui.server.settings_reset": "They come back {when}, Italian time."
}
`,vl=`{
  "ui.settings.title": "Settings",
  "ui.settings.language": "Language and preferences",
  "ui.settings.lang_it": "Italiano",
  "ui.settings.lang_en": "English",
  "ui.settings.sound": "Sounds",
  "ui.settings.haptics": "Vibration",
  "ui.settings.export.title": "Export your save",
  "ui.settings.export.code": "Show the code",
  "ui.settings.export.file": "Download the file",
  "ui.settings.export.copy": "Copy",
  "ui.settings.export.copied": "Copied",
  "ui.settings.import.title": "Import a save",
  "ui.settings.import.hint": "Paste a code or choose a file. It replaces the data on this device.",
  "ui.settings.import.apply": "Import",
  "ui.settings.import.ok": "Save imported.",
  "ui.settings.import.err_code": "Code not recognised.",
  "ui.settings.import.err_new": "This save comes from a newer version of the game.",
  "ui.settings.import.err_invalid": "The save is not valid.",
  "ui.settings.warn.not_persistent": "The browser may erase game data: export your save from time to time.",
  "ui.settings.warn.save_failed": "Cannot save on this device: the game goes on, but saving is not guaranteed.",
  "ui.recovery.title": "Unreadable save",
  "ui.recovery.corrupt": "The save is damaged or does not belong to this game.",
  "ui.recovery.too_new": "The save comes from a newer version of the game. Reload the page or update the app.",
  "ui.recovery.hint": "Nothing was erased. You can download a copy before starting over.",
  "ui.recovery.download": "Download the raw file",
  "ui.recovery.reset": "Start over",
  "ui.recovery.confirm": "Erase everything? Archive and progress will be lost.",
  "ui.recovery.confirm_yes": "Yes, erase",
  "ui.recovery.confirm_no": "Cancel",
  "ui.settings.import.confirm": "Importing replaces the progress on this device. Continue?",
  "ui.settings.import.confirm_yes": "Yes, replace",
  "ui.settings.import.confirm_no": "Cancel"
}
`,yl=`{
  "ui.title.tagline": "A family, a planet that does not spin.",
  "ui.title.new": "New run",
  "ui.title.continue": "Continue",
  "ui.title.archive": "Archive",
  "ui.title.archive_soon": "soon",
  "ui.title.settings": "Settings",
  "ui.scenario.title": "Choose a scenario",
  "ui.common.back": "Back"
}
`,bl=`{
  "scenario.famiglia.name": "The family",
  "scenario.famiglia.description": "Four people, one capsule, a planet that does not spin.",
  "character.mara.name": "Mara",
  "character.mara.role": "Flight engineer",
  "character.mara.bio": "Fixes anything except arguments.",
  "character.elio.name": "Elio",
  "character.elio.role": "Doctor and botanist",
  "character.elio.bio": "Treats wounds and knows which plants not to eat.",
  "character.lin.name": "Lin",
  "character.lin.role": "Scout",
  "character.lin.bio": "Fifteen, great sense of direction, terrible sense of danger.",
  "character.tobia.name": "Tobia",
  "character.tobia.role": "Observer",
  "character.tobia.bio": "Never leaves the capsule, but notices what the others miss.",
  "item.acqua.name": "Water",
  "item.acqua.description": "Drinking water supply.",
  "item.acqua.missing": "Without water, thirst sets in within days.",
  "item.razioni.name": "Rations",
  "item.razioni.description": "Long-life food.",
  "item.razioni.missing": "Without food, hunger is only a matter of time.",
  "item.medikit.name": "Medkit",
  "item.medikit.description": "Treats wounds and minor illness.",
  "item.medikit.missing": "Without a medkit, every wound weighs more.",
  "event.tempesta.title": "The storm",
  "event.tempesta.text": "The wind lifts the dust and the sky turns rust-coloured.",
  "event.tempesta.shelter": "Shut ourselves in",
  "event.tempesta.shelter.ok": "It passes. Outside is chaos, inside it's just noise.",
  "event.tempesta.shelter.hull": "A plate gives way: the hull takes a hit.",
  "event.tempesta.work": "Use it to get some work done",
  "event.tempesta.work.ok": "The panels charge more than expected.",
  "event.tempesta.work.bad": "Someone gets hurt repairing in the dark.",
  "event.segnale_debole.title": "A faint signal",
  "event.segnale_debole.text": "The radio crackles with a rhythm that is not noise.",
  "event.segnale_debole.investigate": "Follow the signal",
  "event.segnale_debole.investigate.found": "It is a real signal, and it comes from far away.",
  "event.segnale_debole.investigate.nothing": "Just static. You lost half a day.",
  "event.segnale_debole.ignore": "Ignore it",
  "event.segnale_debole.ignore.ok": "Better not to get our hopes up.",
  "event.segnale_fonte.title": "The source of the signal",
  "event.segnale_fonte.text": "The signal repeats, stronger. Someone, or something, is answering.",
  "event.segnale_fonte.respond": "Answer",
  "event.segnale_fonte.respond.contact": "Contact is established.",
  "event.segnale_fonte.wait": "Wait",
  "event.segnale_fonte.wait.ok": "The signal fades as it came.",
  "event.piante_strane.title": "Strange plants",
  "event.piante_strane.text": "Something green grows in the shade of a rock.",
  "event.piante_strane.harvest": "Harvest them",
  "event.piante_strane.harvest.ok": "They are edible. Elio is almost happy.",
  "event.piante_strane.harvest.bad": "They were not.",
  "event.piante_strane.leave": "Leave them be",
  "event.piante_strane.leave.ok": "You live longer this way.",
  "ending.soccorso.title": "Rescue",
  "ending.contatto.title": "Contact",
  "ending.contatto.text": "The signal was no accident: someone else is on Giano.",
  "archive.segnale.title": "The Giano signal",
  "archive.segnale.text": "Periodic emission of unknown origin, detected in the twilight band.",
  "archive.relitto.title": "ARCA-7 wreck",
  "archive.relitto.text": "Hull of another mission, two days from the capsule.",
  "archive.piante.title": "Brina plants",
  "archive.piante.text": "Low vegetation that survives on the edge of the frozen side."
}
`,xl=`{
  "item.radio.name": "Radio",
  "item.radio.description": "Trasmettitore a lungo raggio: ogni segnale inviato avvicina un soccorso.",
  "item.radio.missing": "Senza radio nessuno saprà mai che siete qui.",
  "item.elettrolizzatore.name": "Elettrolizzatore",
  "item.elettrolizzatore.description": "Acqua + energia → ossigeno. Rumoroso, delicato, indispensabile.",
  "item.elettrolizzatore.missing": "Senza elettrolizzatore l'aria della capsula è contata.",
  "item.tuta_isolante.name": "Tuta isolante",
  "item.tuta_isolante.description": "Permette di raggiungere il lato di Brina, dove il ghiaccio è acqua.",
  "item.tuta_isolante.missing": "Senza tuta isolante il lato ghiacciato resta fuori portata.",
  "item.tuta_termica.name": "Tuta termica",
  "item.tuta_termica.description": "Permette di camminare sul lato di Brace senza cuocersi.",
  "item.tuta_termica.missing": "Senza tuta termica il lato rovente resta fuori portata.",

  "destination.brace_dune.name": "Le dune di Brace",
  "destination.brace_dune.description": "Sabbia vetrificata e un caldo che fa tremare l'aria. Celle solari ovunque, se non ti sciogli prima.",
  "destination.brina_ghiacci.name": "I ghiacci di Brina",
  "destination.brina_ghiacci.description": "Una pianura bianca che scricchiola. Sotto la crosta c'è acqua buona.",
  "destination.relitto_arca7.name": "Il relitto della ARCA-7",
  "destination.relitto_arca7.description": "Lo scafo di un'altra missione, piegato come una lattina. Due o tre giorni di cammino.",
  "destination.grotta_cristalli.name": "La grotta dei cristalli",
  "destination.grotta_cristalli.description": "Gocciola, brilla e fa un'eco strana. Vicina alla capsula.",
  "destination.bosco_basso.name": "Il bosco basso",
  "destination.bosco_basso.description": "Arbusti bassi e contorti al limite del crepuscolo. Qualcosa si mangia.",
  "destination.cratere_vetro.name": "Il cratere di vetro",
  "destination.cratere_vetro.description": "Un impatto antico ha fuso la roccia. Dentro ci sono rottami di chissà cosa.",

  "archive.dune_di_brace.title": "Dune di Brace",
  "archive.dune_di_brace.text": "Sabbia fusa e rifusa dalla stella fissa: sul lato illuminato non piove da sempre.",
  "archive.ghiacci_di_brina.title": "Ghiacci di Brina",
  "archive.ghiacci_di_brina.text": "Acqua congelata da millenni sul lato al buio, a portata di chi ha la tuta giusta.",

  "ending.soccorso.arrivo": "Una nave risponde alla chiamata e scende nel crepuscolo. Qualcuno, finalmente, vi ha sentiti.",
  "ending.morte.silenzio.title": "Silenzio",
  "ending.morte.silenzio.text": "Nella capsula non resta nessuno a scrivere il diario.",
  "ending.colonia.title": "Colonia",
  "ending.colonia.text": "Trenta giorni dopo nessuno vi è venuto a prendere. Avete smesso di aspettarli: adesso questa è casa.",
  "ending.abbandono.title": "La nuova casa",
  "ending.abbandono.text": "Lasciate la capsula e vi trasferite nel relitto della ARCA-7. Più spazio, più fantasmi.",

  "event.segnale_fonte.respond.lost": "Rispondiamo. Silenzio. Forse abbiamo sbagliato frequenza, forse abbiamo sbagliato pianeta.",

  "event.orto_germogli.title": "Germogli",
  "event.orto_germogli.text": "I semi raccolti da Elio hanno messo fuori due foglioline. Chiedono acqua, ovviamente.",
  "event.orto_germogli.water": "Dargli due razioni d'acqua",
  "event.orto_germogli.water.ok": "Crescono. Elio parla con loro. Io faccio finta di non sentire, ma sorrido.",
  "event.orto_germogli.water.bad": "Marciscono lo stesso. Acqua buttata, e lo sappiamo tutti.",
  "event.orto_germogli.leave": "Non possiamo permettercelo",
  "event.orto_germogli.leave.ok": "Le foglioline si seccano in silenzio. Nessuno ne parla.",
  "event.orto_raccolto.title": "L'orto",
  "event.orto_raccolto.text": "L'orticello sotto la lampada è pronto per un raccolto.",
  "event.orto_raccolto.harvest": "Raccogliere",
  "event.orto_raccolto.harvest.ok": "Verdura vera. Ha un sapore strano, ma è nostra.",
  "event.orto_raccolto.harvest.rot": "Muffa. Il pianeta ci ricorda chi comanda.",

  "event.guasto_elettrolizzatore.title": "Un sibilo",
  "event.guasto_elettrolizzatore.text": "L'elettrolizzatore fischia in un modo che non ci piace per niente.",
  "event.guasto_elettrolizzatore.fix": "Intervenire subito",
  "event.guasto_elettrolizzatore.fix.ok": "Una guarnizione cambiata in tempo. Il fischio smette.",
  "event.guasto_elettrolizzatore.fix.bad": "Peggio di prima: adesso è proprio rotto.",
  "event.guasto_elettrolizzatore.ignore": "Speriamo che passi",
  "event.guasto_elettrolizzatore.ignore.ok": "Passa. A volte le macchine si lamentano e basta.",
  "event.guasto_elettrolizzatore.ignore.bad": "Non passa. Un colpo secco e la macchina si spegne.",

  "event.brillamento.title": "Brillamento",
  "event.brillamento.text": "La stella sputa luce e il cielo diventa bianco. I sensori impazziscono.",
  "event.brillamento.shield": "Schermare tutto e aspettare",
  "event.brillamento.shield.ok": "Rimaniamo al buio finché passa. Meglio così.",
  "event.brillamento.shield.radio": "La radio non era schermata abbastanza: è andata.",
  "event.brillamento.harvest": "Sfruttarlo per caricare le batterie",
  "event.brillamento.harvest.ok": "Batterie piene come non mai.",
  "event.brillamento.harvest.bad": "Batterie cariche, ma qualcuno ha preso troppa luce e sta male.",

  "event.condensa.title": "Condensa",
  "event.condensa.text": "Sulle pareti fredde della capsula si formano gocce.",
  "event.condensa.collect": "Raccoglierle",
  "event.condensa.collect.ok": "Una bottiglia d'acqua, goccia dopo goccia.",
  "event.condensa.collect.little": "Bastano per inumidirsi le labbra, non di più.",

  "event.ritorno_disperso.title": "Passi fuori",
  "event.ritorno_disperso.text": "Qualcuno bussa al portello. Tre colpi lenti.",
  "event.ritorno_disperso.welcome": "Aprire",
  "event.ritorno_disperso.welcome.ok": "È tornato. Sfinito, sporco, vivo. Nessuno riesce a smettere di abbracciarlo.",

  "event.lite.title": "Una lite",
  "event.lite.text": "Basta un cucchiaio fuori posto e si urla. Lo spazio è poco, la pazienza meno.",
  "event.lite.mediate": "Mettersi in mezzo",
  "event.lite.mediate.ok": "Ci si chiede scusa. Per oggi.",
  "event.lite.mediate.bad": "Adesso ce l'hanno anche con chi si è messo in mezzo.",
  "event.lite.vent": "Lasciarli sfogare",
  "event.lite.vent.ok": "Urlano, poi si siedono vicini come se niente fosse.",
  "event.lite.vent.bad": "Volano parole che non si possono riprendere.",

  "event.festa_improvvisata.title": "Una festa",
  "event.festa_improvvisata.text": "Oggi sarebbe stato un compleanno, sulla Terra. Il calendario qui non vale, ma la torta sì.",
  "event.festa_improvvisata.party": "Festeggiare con una razione in più",
  "event.festa_improvvisata.party.ok": "Candeline fatte con i fiammiferi. Abbiamo riso per davvero.",
  "event.festa_improvvisata.skip": "Non è il momento",
  "event.festa_improvvisata.skip.ok": "Ce lo ricorderemo quando saremo a casa. Se.",

  "event.creatura_stiva.title": "Qualcosa nella stiva",
  "event.creatura_stiva.text": "Rumori di zampe tra le casse del cibo. Tante zampe.",
  "event.creatura_stiva.trap": "Preparare una trappola",
  "event.creatura_stiva.trap.ok": "Presa. Tobia dice che è commestibile. Tobia dice un sacco di cose.",
  "event.creatura_stiva.trap.bad": "Morde, scappa e si porta via una razione.",
  "event.creatura_stiva.leave": "Lasciarla stare",
  "event.creatura_stiva.leave.ok": "Lei lascia stare noi, ma non il nostro cibo.",

  "event.crepa_scafo.title": "Una crepa",
  "event.crepa_scafo.text": "Tobia indica una linea sottile sulla parete. Nessun altro l'aveva notata.",
  "event.crepa_scafo.seal": "Sigillarla subito",
  "event.crepa_scafo.seal.ok": "Mara la chiude e rinforza il pannello. Meglio di prima.",
  "event.crepa_scafo.seal.bad": "Il sigillante non tiene. Bisognerà tenerla d'occhio.",
  "event.crepa_scafo.later": "Rimandare",
  "event.crepa_scafo.later.ok": "La crepa resta lì. Ogni tanto qualcuno la guarda.",
  "event.crepa_cede.title": "La crepa cede",
  "event.crepa_cede.text": "Di notte uno schiocco: la crepa si è allargata e fischia.",
  "event.crepa_cede.patch": "Tappare alla meglio",
  "event.crepa_cede.patch.bad": "Nastro, colla e preghiere. Lo scafo ne esce malconcio.",
  "event.crepa_cede.patch.ok": "Tappata in fretta, ma tappata. Il danno è contenuto.",

  "event.febbre.title": "La febbre",
  "event.febbre.text": "Chi è malato scotta e trema. La notte sarà lunga.",
  "event.febbre.medikit": "Usare un medikit",
  "event.febbre.medikit.ok": "Antibiotici e pazienza. Al mattino la febbre è scesa.",
  "event.febbre.rest": "Riposo e acqua fresca",
  "event.febbre.rest.ok": "Elio veglia tutta la notte. La febbre passa.",
  "event.febbre.rest.bad": "La febbre resta e chi lo assiste crolla dalla stanchezza.",

  "event.relitto_carico.title": "Il carico della ARCA-7",
  "event.relitto_carico.text": "Nel relitto c'è ancora roba utile, ma si può portare via solo una cosa per volta.",
  "event.relitto_carico.suit": "Prendere la tuta termica",
  "event.relitto_carico.suit.ok": "Una tuta termica intera. Il lato di Brace ora è raggiungibile.",
  "event.relitto_carico.parts": "Smontare l'antenna",
  "event.relitto_carico.parts.ok": "Pezzi per la radio e un segnale più forte del solito.",
  "event.relitto_carico.electrolyzer": "Smontare il loro elettrolizzatore",
  "event.relitto_carico.electrolyzer.ok": "Pesa una tonnellata, ma funziona. Torniamo a respirare senza contare.",
  "event.relitto_partenza.title": "Trasferirsi?",
  "event.relitto_partenza.text": "Il relitto è più grande e più solido della capsula. Qualcuno propone di trasferirsi lì.",
  "event.relitto_partenza.go": "Partire tutti",
  "event.relitto_partenza.go.ok": "Carichiamo tutto e partiamo. La capsula resta indietro, piccola e sola.",
  "event.relitto_partenza.go.bad": "Il viaggio va male: torniamo indietro con un ferito e meno speranze.",
  "event.relitto_partenza.stay": "Restare nella capsula",
  "event.relitto_partenza.stay.ok": "La capsula è stretta, ma è nostra.",

  "event.polvere_pannelli.title": "Polvere sui pannelli",
  "event.polvere_pannelli.text": "Uno strato di polvere rossa copre i pannelli solari.",
  "event.polvere_pannelli.clean": "Uscire a pulirli",
  "event.polvere_pannelli.clean.ok": "Pannelli lucidi, batterie contente.",
  "event.polvere_pannelli.clean.bad": "Puliti, ma chi è uscito torna distrutto.",
  "event.polvere_pannelli.wait": "Aspettare il vento",
  "event.polvere_pannelli.wait.ok": "Il vento non arriva. Le batterie calano.",

  "event.diario_notturno.title": "Diario, notte",
  "event.diario_notturno.text": "Non riesco a dormire. La luce qui non cambia mai: è sempre questo tramonto infinito.",
  "event.diario_notturno.write": "Scrivere",
  "event.diario_notturno.write.ok": "Scrivo tutto. Domani qualcuno lo leggerà e riderà delle mie frasi drammatiche.",
  "event.diario_notturno.sleep": "Provare a dormire",
  "event.diario_notturno.sleep.ok": "Conto i bulloni del soffitto. Sono quarantadue. Come sempre.",

  "event.commemorazione.title": "Un saluto",
  "event.commemorazione.text": "Il posto vuoto a tavola fa più rumore di qualsiasi tempesta.",
  "event.commemorazione.remember": "Ricordarlo insieme",
  "event.commemorazione.remember.ok": "Ognuno racconta una storia. Piangiamo, poi ridiamo, poi piangiamo ancora.",
  "event.commemorazione.move_on": "Andare avanti",
  "event.commemorazione.move_on.ok": "Nessuno ne parla. Il posto resta vuoto."
}
`,Sl=`{
  "hazard.detriti.name": "Detriti",
  "hazard.detriti.alert": "DETRITI IN AVVICINAMENTO. Manovra evasiva!",
  "hazard.detriti.react": "SCHIVA",
  "hazard.detriti.success": "Detriti evitati.",
  "hazard.detriti.fail": "Impatto con i detriti: lo scafo cede.",
  "hazard.avaria_sterzo.name": "Avaria dello sterzo",
  "hazard.avaria_sterzo.alert": "AVARIA DELLO STERZO. Passa al comando manuale!",
  "hazard.avaria_sterzo.react": "MANUALE",
  "hazard.avaria_sterzo.success": "Comando manuale inserito.",
  "hazard.avaria_sterzo.fail": "Lo sterzo non risponde per qualche secondo.",
  "hazard.guasto_stiva.name": "Guasto alla stiva",
  "hazard.guasto_stiva.alert": "PORTELLO DELLA STIVA SBLOCCATO. Richiudilo!",
  "hazard.guasto_stiva.react": "CHIUDI",
  "hazard.guasto_stiva.success": "Portello richiuso.",
  "hazard.guasto_stiva.fail": "Il portello si apre: qualcosa vola via.",
  "hazard.avvitamento.name": "Avvitamento",
  "hazard.avvitamento.alert": "LA CAPSULA SI AVVITA. Stabilizza!",
  "hazard.avvitamento.react": "STABILIZZA",
  "hazard.avvitamento.success": "Rotazione fermata.",
  "hazard.avvitamento.fail": "Sballottati in cabina: qualcuno si fa male.",
  "descent.hud.impact": "IMPATTO",
  "descent.hud.altitude": "QUOTA {km} km",
  "descent.hud.velocity": "VEL {v} km/s",
  "descent.band.brace": "BRACE",
  "descent.band.twilight": "CREPUSCOLO",
  "descent.band.brina": "BRINA",
  "descent.zone.brace": "Troppo nel lato Brace",
  "descent.zone.brina": "Troppo nel lato Brina",
  "descent.zone.twilight_brace": "Crepuscolo, verso il Brace",
  "descent.zone.twilight_brina": "Crepuscolo, verso la Brina",
  "descent.steer.left": "Vira verso il lato Brace",
  "descent.steer.right": "Vira verso il lato Brina",
  "descent.steer.locked": "STERZO BLOCCATO",
  "descent.hold.title": "STIVA",
  "descent.hold.mass": "{kg} kg · sicuro {safe}",
  "descent.hold.safe": "sicuro",
  "descent.hold.hint": "Scorri in alto o tocca due volte per sganciare · tieni premuto per leggere",
  "descent.hold.again": "tocca ancora",
  "descent.hold.card": "{name}, {kg} chili",
  "descent.mass.over": "CARICO ECCESSIVO",
  "descent.chute.button": "APRI PARACADUTE",
  "descent.chute.open": "APERTO",
  "descent.chute.ready": "Paracadute pronto",
  "descent.chute.early": "Troppo presto: la vela si è strappata",
  "descent.chute.good": "Paracadute aperto",
  "descent.chute.perfect": "Paracadute perfetto",
  "descent.chute.late": "Tardi! Frenata brusca",
  "descent.chute.auto": "Apertura automatica, all'ultimo",
  "descent.fire.start": "INCENDIO: {item}. Sgancialo!",
  "descent.fire.out": "Incendio sganciato",
  "descent.fire.burnt": "{item} distrutto dal fuoco. Scafo −{n}",
  "descent.item.lost": "{item} perso",
  "descent.wind.brace": "CORRENTE D'ALTA QUOTA → lato Brace",
  "descent.wind.brina": "CORRENTE D'ALTA QUOTA → lato Brina",
  "descent.wind.end": "La corrente si calma",
  "descent.tutorial.jettison": "La capsula è troppo pesante. Il tempo parte al primo sgancio: scorri un oggetto verso l'alto o toccalo due volte.",
  "descent.tutorial.steer": "Tieni premuto ◀ ▶ o trascina sul pianeta: resta nella fascia del crepuscolo.",
  "descent.tutorial.chute": "Apri il paracadute quando l'ago è nella zona verde.",
  "descent.tutorial.react": "Imprevisto! Tocca il pulsante prima che scada il tempo.",
  "descent.report.title": "ATTERRAGGIO",
  "descent.report.zone": "Zona",
  "descent.report.zone.twilight": "Fascia del crepuscolo",
  "descent.report.zone.brace_edge": "Bordo del lato Brace",
  "descent.report.zone.brina_edge": "Bordo del lato Brina",
  "descent.report.hull": "Scafo",
  "descent.report.injured": "Feriti",
  "descent.report.lost": "Oggetti persi",
  "descent.report.none": "nessuno",
  "descent.report.replay": "Registro → stesso esito",
  "descent.report.again": "Rigioca",
  "descent.report.autopilot": "Guarda il pilota automatico",
  "descent.error.content": "Contenuti non validi: la discesa non può partire."
}
`,Cl=`{
  "ui.app.resume.days": "Giorno {n}",
  "ui.app.resume.landing": "Atterraggio",
  "ui.app.resume.ended": "Finale",
  "ui.title.new_confirm": "Una run è già in corso: ricominciare la cancella.",
  "ui.title.new_confirm_yes": "Ricomincia",
  "ui.title.new_confirm_no": "Annulla",
  "ui.app.error_hint": "Si è verificato un errore. I tuoi progressi non sono stati toccati.",
  "ui.app.other_tab": "BRACE! è già aperto in un’altra scheda. Chiudila e riprova, così il salvataggio non si rovina.",
  "ui.app.other_tab_retry": "Riprova",
  "ui.title.update": "Nuova versione disponibile: aggiorna"
}
`,wl=`{
  "ui.briefing.start": "Inizia la discesa",
  "ui.briefing.progress": "Scheda {i} di {n}"
}
`,Tl=`{
  "ui.briefing.planet.title": "Il pianeta",
  "ui.briefing.planet.line1": "Giano mostra sempre la stessa faccia alla sua stella.",
  "ui.briefing.planet.line2": "Un lato è rovente (Brace), l’altro ghiacciato (Brina).",
  "ui.briefing.planet.line3": "In mezzo, una fascia di crepuscolo dove si può vivere.",
  "ui.briefing.crew.title": "La famiglia",
  "ui.briefing.crew.hint": "Ognuno sa fare qualcosa. Il resto lo scoprirai vivendo insieme.",
  "ui.briefing.cargo.title": "La stiva",
  "ui.briefing.cargo.hint": "Pesa tutto: più carico porti giù, più duro sarà l’impatto.",
  "ui.briefing.cargo.mass": "Peso {n}",
  "ui.briefing.cargo.missing": "Se manca: {text}",
  "ui.briefing.chains.title": "Catene da ricordare",
  "ui.briefing.chain.oxygen.from.0": "Acqua",
  "ui.briefing.chain.oxygen.from.1": "Energia",
  "ui.briefing.chain.oxygen.to": "Ossigeno",
  "ui.briefing.chain.thermal.from.0": "Tuta termica",
  "ui.briefing.chain.thermal.to": "Lato Brace",
  "ui.briefing.chain.insulated.from.0": "Tuta isolante",
  "ui.briefing.chain.insulated.to": "Lato Brina",
  "ui.briefing.chain.signal.from.0": "Radio",
  "ui.briefing.chain.signal.from.1": "Segnali",
  "ui.briefing.chain.signal.to": "Soccorso",
  "ui.briefing.descent.title": "La discesa in 4 gesti",
  "ui.briefing.gesture.jettison": "Scorri verso l’alto o tocca due volte un oggetto per sganciarlo.",
  "ui.briefing.gesture.steer": "Trascina o usa le frecce per portarti sulla fascia verde.",
  "ui.briefing.gesture.chute": "Apri il paracadute quando l’indicatore è verde.",
  "ui.briefing.gesture.react": "Tocca “Reagisci” quando compare un imprevisto."
}
`,El=`{
  "ui.common.next": "Avanti",
  "ui.common.skip": "Salta",
  "ui.common.close": "Chiudi",
  "ui.common.error": "Qualcosa è andato storto"
}
`,Dl=`{
  "ui.days.day": "Giorno {n}",
  "ui.days.manual": "Manuale",
  "ui.days.crew": "Equipaggio",
  "ui.days.machines": "Macchine",
  "ui.days.diary": "Diario",
  "ui.days.diary_day": "Giorno {n}",
  "ui.days.diary_older": "Giorni precedenti",
  "ui.days.diary_empty": "Nessuna voce ancora.",
  "ui.days.eat": "Mangia",
  "ui.days.drink": "Beve",
  "ui.days.medikit": "Medikit",
  "ui.days.activity": "Attività",
  "ui.days.act.rest": "Riposa",
  "ui.days.act.repair": "Ripara: {target}",
  "ui.days.act.go": "Spedizione: {dest} ({days} g)",
  "ui.days.no_food": "Senza cibo da {n} giorni",
  "ui.days.no_water": "Senza acqua da {n} giorni",
  "ui.days.returns": "In {dest}: rientra il giorno {n}",
  "ui.days.mood": "Umore {v}",
  "ui.days.radio": "Trasmetti con la radio (1 energia)",
  "ui.days.electrolyzer": "Elettrolizzatore (1 acqua + 1 energia → ossigeno)",
  "ui.days.broken": "guasto",
  "ui.days.signals": "Segnali trasmessi: {n}",
  "ui.days.end_day": "Termina la giornata",
  "ui.days.err.choice": "Scegli cosa fare con l’evento.",
  "ui.days.err.food": "Non c’è abbastanza cibo per tutte le razioni.",
  "ui.days.err.water": "Non c’è abbastanza acqua.",
  "ui.days.err.energy": "Non c’è abbastanza energia.",
  "ui.days.err.medikit": "Non ci sono abbastanza medikit.",
  "ui.days.err.generic": "Qualcosa non torna: controlla le scelte di oggi.",
  "ui.tool.electrolyzer": "elettrolizzatore",
  "ui.tool.radio": "radio",
  "ui.tool.thermal_suit": "serve la tuta termica",
  "ui.tool.insulated_suit": "serve la tuta isolante"
}
`,Ol=`{
  "ui.status.hungry": "Affamato",
  "ui.status.thirsty": "Assetato",
  "ui.status.sick": "Malato",
  "ui.status.injured": "Ferito",
  "ui.status.exhausted": "Esausto",
  "ui.status.depressed": "Giù di morale",
  "ui.status.away": "In spedizione",
  "ui.status.missing": "Disperso",
  "ui.status.dead": "Morto",
  "ui.resource.food": "Cibo",
  "ui.resource.water": "Acqua",
  "ui.resource.energy": "Energia",
  "ui.resource.oxygen": "Ossigeno",
  "ui.resource.hull": "Scafo",
  "ui.resource.medikit": "Medikit",
  "ui.machine.radio": "Radio",
  "ui.machine.electrolyzer": "Elettrolizzatore",
  "ui.weather.calm": "calmo",
  "ui.weather.storm": "tempesta",
  "ui.weather.flare": "brillamento",
  "ui.skill.repair": "Riparare",
  "ui.skill.heal": "Curare",
  "ui.skill.explore": "Esplorare",
  "ui.skill.notice": "Notare",
  "ui.skill.botany": "Piante",
  "ui.zone.twilight": "Fascia del crepuscolo",
  "ui.zone.brace_edge": "Bordo di Brace",
  "ui.zone.brina_edge": "Bordo di Brina",
  "ui.cause.starvation": "fame",
  "ui.cause.thirst": "sete",
  "ui.cause.weakness": "debolezza",
  "ui.cause.suffocation": "soffocamento",
  "ui.gesture.jettison": "Sgancia",
  "ui.gesture.steer": "Punta",
  "ui.gesture.chute": "Paracadute",
  "ui.gesture.react": "Reagisci",
  "ui.log.weather": "Meteo: {kind}.",
  "ui.log.event": "{text}",
  "ui.log.status.gained": "{name} è ora: {status}.",
  "ui.log.status.lost": "{name} non è più: {status}.",
  "ui.log.death": "{name} non ce l’ha fatta ({cause}).",
  "ui.log.ration.food": "{name} ha mangiato.",
  "ui.log.ration.water": "{name} ha bevuto.",
  "ui.log.medikit.healed": "Il medikit ha aiutato {name}.",
  "ui.log.medikit.failed": "Il medikit non è bastato per {name}.",
  "ui.log.repair.ok": "{name} ha riparato: {target}.",
  "ui.log.repair.fail": "Riparazione fallita ({target}) per {name}.",
  "ui.log.machine.broken": "Guasto: {machine}.",
  "ui.log.machine.fixed": "{machine} funziona di nuovo.",
  "ui.log.resource": "{resource}: {delta}.",
  "ui.log.item.gained": "Trovato: {item}.",
  "ui.log.item.lost": "Perso: {item}.",
  "ui.log.expedition_start": "{name} parte per {destination} (rientro: giorno {day}).",
  "ui.log.expedition_return": "{name} è tornato da {destination}: {found}.",
  "ui.log.expedition_return_nothing": "{name} è tornato da {destination} a mani vuote.",
  "ui.log.expedition_missing": "{name} non è tornato da {destination}.",
  "ui.log.refused.expedition": "{name} si rifiuta di uscire.",
  "ui.log.refused.repair": "{name} si rifiuta di riparare.",
  "ui.log.quarrel": "{name} e {other} hanno litigato.",
  "ui.log.crisis": "{name} ha una crisi.",
  "ui.log.abandon": "{name} ha lasciato la capsula.",
  "ui.log.morale": "Umore di {name}: {delta}.",
  "ui.log.signal": "Segnali raccolti: {total}.",
  "ui.log.oxygen": "L’elettrolizzatore produce {n} di ossigeno.",
  "ui.log.oxygen_out": "L’ossigeno è finito.",
  "ui.log.archive": "Nuova voce dell’Archivio: {title}.",
  "ui.log.ending": "Finale: {title}."
}
`,kl=`{
  "ui.ending.days": "Giorni vissuti",
  "ui.ending.alive": "Sopravvissuti",
  "ui.ending.dead": "Morti",
  "ui.ending.archive": "Voci dell’Archivio trovate",
  "ui.ending.runs": "Run completate",
  "ui.ending.back": "Torna al titolo"
}
`,Al=`{
  "ui.landing.title": "Atterraggio",
  "ui.landing.intro": "Capsula a terra. Rilevamento dei danni completato.",
  "ui.landing.zone": "Zona",
  "ui.landing.hull": "Scafo",
  "ui.landing.injured": "Feriti",
  "ui.landing.lost": "Oggetti persi",
  "ui.landing.none": "nessuno",
  "ui.landing.nothing": "niente",
  "ui.landing.resumed": "La discesa è stata conclusa dal pilota automatico mentre eri via.",
  "ui.landing.continue": "Inizia i giorni"
}
`,jl=`{
  "ui.manual.title": "Manuale di bordo",
  "ui.manual.resources.title": "Risorse",
  "ui.manual.resource.food": "Una razione per persona al giorno. Senza cibo la fame arriva dopo circa tre giorni: a volte prima, a volte dopo.",
  "ui.manual.resource.water": "Una dose per persona al giorno. La sete arriva prima della fame.",
  "ui.manual.resource.energy": "Alimenta radio ed elettrolizzatore. I pannelli la ricaricano ogni giorno; le tempeste ne portano via.",
  "ui.manual.resource.oxygen": "Senza ossigeno non si recupera la stanchezza e, dopo qualche giorno, si muore. L’elettrolizzatore lo produce da acqua ed energia.",
  "ui.manual.resource.hull": "Integrità dello scafo, da 0 a 10. Più è danneggiato, più sono probabili i guasti.",
  "ui.manual.resource.medikit": "Curano malati e feriti. Sono pochi: usali con giudizio.",
  "ui.manual.statuses.title": "Stati dei personaggi",
  "ui.manual.status.hungry": "Non mangia da giorni. Peggiora in fretta se è già debilitato.",
  "ui.manual.status.thirsty": "Non beve da giorni. È più urgente della fame.",
  "ui.manual.status.sick": "Può guarire da solo se è ben nutrito e idratato; altrimenti serve un medikit.",
  "ui.manual.status.injured": "Non può partire in spedizione finché non guarisce.",
  "ui.manual.status.exhausted": "Ha bisogno di riposo e di aria: non può partire.",
  "ui.manual.status.depressed": "Il morale è basso: possibili rifiuti, litigi, crisi e abbandoni.",
  "ui.manual.status.away": "È in spedizione. Rientra nel giorno indicato nel diario.",
  "ui.manual.status.missing": "Non è tornato. Forse un evento lo riporterà indietro.",
  "ui.manual.status.dead": "Morto. Definitivo.",
  "ui.manual.chains.title": "Catene da ricordare",
  "ui.manual.chain.oxygen": "Acqua + energia → ossigeno (elettrolizzatore).",
  "ui.manual.chain.thermal": "Tuta termica → spedizioni verso Brace.",
  "ui.manual.chain.insulated": "Tuta isolante → spedizioni verso Brina.",
  "ui.manual.chain.signal": "Radio → segnali → soccorso: servono più giorni di trasmissione.",
  "ui.manual.descent.title": "La discesa"
}
`,Ml=`{
  "ui.server.connecting": "Connessione al server…",
  "ui.server.quota_line": "Run gratuite: {left} di {limit} questa settimana",
  "ui.server.quota_line_unlocked": "Gioco sbloccato: nessun limite di run",
  "ui.server.quota_title": "Run gratuite esaurite",
  "ui.server.quota_body": "Hai usato le {limit} run gratuite di questa settimana. Si ricaricano {when}, ora italiana.",
  "ui.server.quota_hint": "Se hai una discesa in corso, «Continua» dal titolo resta sempre disponibile.",
  "ui.server.redeem_cta": "Riscatta un codice",
  "ui.server.network_title": "Serve la rete",
  "ui.server.network_body": "Per iniziare una nuova discesa BRACE! deve confermare la run con il server. Controlla la connessione e riprova.",
  "ui.server.network_retry": "Riprova",
  "ui.server.error_title": "Impossibile iniziare la discesa",
  "ui.server.error_body": "Il server non ha accettato la richiesta. Riprova tra poco; se succede ancora, ricarica il gioco per aggiornarlo.",
  "ui.server.unconfigured_title": "Copia non collegata",
  "ui.server.unconfigured_body": "Questa copia di BRACE! non è collegata al server ufficiale e non può avviare nuove partite.",
  "ui.server.redeem_title": "Riscatta un codice",
  "ui.server.redeem_hint": "Hai un codice da tester o da itch.io? Inseriscilo qui: sblocca il gioco per sempre su questo dispositivo.",
  "ui.server.redeem_label": "Codice",
  "ui.server.redeem_placeholder": "BRACE-XXXX-XXXX-XXXX",
  "ui.server.redeem_apply": "Sblocca",
  "ui.server.redeem_working": "Controllo il codice…",
  "ui.server.redeem_ok": "Sbloccato! Da ora giochi senza limiti di run.",
  "ui.server.redeem_invalid": "Codice non valido. Controlla di averlo scritto giusto: nei codici non esistono le lettere I, L, O e U.",
  "ui.server.redeem_used": "Questo codice è già stato usato su un altro dispositivo.",
  "ui.server.redeem_limited": "Troppi tentativi. Riprova più tardi.",
  "ui.server.redeem_network": "Serve la rete per riscattare un codice. Riprova quando sei online.",
  "ui.server.redeem_error": "Non è stato possibile riscattare il codice. Riprova tra poco.",
  "ui.server.redeem_done": "Fatto",
  "ui.server.redeem_start": "Inizia la discesa",
  "ui.server.settings_title": "Sblocco",
  "ui.server.settings_unlocked": "Gioco sbloccato: nessun limite di run.",
  "ui.server.settings_used": "Run gratuite usate questa settimana: {used} di {limit}.",
  "ui.server.settings_reset": "Si ricaricano {when}, ora italiana."
}
`,Nl=`{
  "ui.settings.title": "Impostazioni",
  "ui.settings.language": "Lingua e preferenze",
  "ui.settings.lang_it": "Italiano",
  "ui.settings.lang_en": "English",
  "ui.settings.sound": "Suoni",
  "ui.settings.haptics": "Vibrazione",
  "ui.settings.export.title": "Esporta il salvataggio",
  "ui.settings.export.code": "Mostra il codice",
  "ui.settings.export.file": "Scarica il file",
  "ui.settings.export.copy": "Copia",
  "ui.settings.export.copied": "Copiato",
  "ui.settings.import.title": "Importa un salvataggio",
  "ui.settings.import.hint": "Incolla un codice o scegli un file. Sostituisce i dati di questo dispositivo.",
  "ui.settings.import.apply": "Importa",
  "ui.settings.import.ok": "Salvataggio importato.",
  "ui.settings.import.err_code": "Codice non riconosciuto.",
  "ui.settings.import.err_new": "Il salvataggio viene da una versione più recente del gioco.",
  "ui.settings.import.err_invalid": "Il salvataggio non è valido.",
  "ui.settings.warn.not_persistent": "Il browser potrebbe cancellare i dati di gioco: esporta il salvataggio di tanto in tanto.",
  "ui.settings.warn.save_failed": "Non riesco a salvare su questo dispositivo: la partita continua, ma il salvataggio non è garantito.",
  "ui.recovery.title": "Salvataggio non leggibile",
  "ui.recovery.corrupt": "Il salvataggio è danneggiato o non è di questo gioco.",
  "ui.recovery.too_new": "Il salvataggio viene da una versione più recente del gioco. Aggiorna la pagina o l’app.",
  "ui.recovery.hint": "Non è stato cancellato nulla. Puoi scaricare una copia prima di ripartire da zero.",
  "ui.recovery.download": "Scarica il file grezzo",
  "ui.recovery.reset": "Ricomincia da zero",
  "ui.recovery.confirm": "Cancellare tutto? Archivio e progressi andranno persi.",
  "ui.recovery.confirm_yes": "Sì, cancella",
  "ui.recovery.confirm_no": "Annulla",
  "ui.settings.import.confirm": "Importare sostituisce i progressi di questo dispositivo. Continuare?",
  "ui.settings.import.confirm_yes": "Sì, sostituisci",
  "ui.settings.import.confirm_no": "Annulla"
}
`,Pl=`{
  "ui.title.tagline": "Una famiglia, un pianeta che non gira.",
  "ui.title.new": "Nuova run",
  "ui.title.continue": "Continua",
  "ui.title.archive": "Archivio",
  "ui.title.archive_soon": "presto",
  "ui.title.settings": "Impostazioni",
  "ui.scenario.title": "Scegli lo scenario",
  "ui.common.back": "Indietro"
}
`,Fl=`{
  "scenario.famiglia.name": "La famiglia",
  "scenario.famiglia.description": "Quattro persone, una capsula, un pianeta che non gira.",
  "character.mara.name": "Mara",
  "character.mara.role": "Ingegnera di bordo",
  "character.mara.bio": "Ripara qualsiasi cosa, tranne le discussioni.",
  "character.elio.name": "Elio",
  "character.elio.role": "Medico e botanico",
  "character.elio.bio": "Cura le ferite e sa quali piante non mangiare.",
  "character.lin.name": "Lin",
  "character.lin.role": "Esploratrice",
  "character.lin.bio": "Quindici anni, ottimo senso dell'orientamento, pessimo senso del pericolo.",
  "character.tobia.name": "Tobia",
  "character.tobia.role": "Osservatore",
  "character.tobia.bio": "Non esce dalla capsula, ma nota ciò che agli altri sfugge.",
  "item.acqua.name": "Acqua",
  "item.acqua.description": "Scorta d'acqua potabile.",
  "item.acqua.missing": "Senza acqua, la sete arriva in pochi giorni.",
  "item.razioni.name": "Razioni",
  "item.razioni.description": "Cibo a lunga conservazione.",
  "item.razioni.missing": "Senza cibo, la fame è questione di tempo.",
  "item.medikit.name": "Medikit",
  "item.medikit.description": "Cura ferite e malattie lievi.",
  "item.medikit.missing": "Senza medikit, ogni ferita pesa di più.",
  "event.tempesta.title": "La tempesta",
  "event.tempesta.text": "Il vento alza la polvere e il cielo diventa color ruggine.",
  "event.tempesta.shelter": "Chiudersi dentro",
  "event.tempesta.shelter.ok": "Passa. Fuori è un casino, dentro è solo rumore.",
  "event.tempesta.shelter.hull": "Una lamiera cede: lo scafo ne risente.",
  "event.tempesta.work": "Approfittarne per lavorare",
  "event.tempesta.work.ok": "I pannelli ricaricano più del previsto.",
  "event.tempesta.work.bad": "Qualcuno si fa male a riparare nel buio.",
  "event.segnale_debole.title": "Un segnale debole",
  "event.segnale_debole.text": "La radio gracchia un ritmo che non è rumore.",
  "event.segnale_debole.investigate": "Seguire il segnale",
  "event.segnale_debole.investigate.found": "È un segnale vero, e viene da lontano.",
  "event.segnale_debole.investigate.nothing": "Solo statica. Hai perso mezza giornata.",
  "event.segnale_debole.ignore": "Ignorarlo",
  "event.segnale_debole.ignore.ok": "Meglio non farsi illusioni.",
  "event.segnale_fonte.title": "La fonte del segnale",
  "event.segnale_fonte.text": "Il segnale si ripete, più forte. Qualcuno, o qualcosa, risponde.",
  "event.segnale_fonte.respond": "Rispondere",
  "event.segnale_fonte.respond.contact": "Il contatto è stabilito.",
  "event.segnale_fonte.wait": "Aspettare",
  "event.segnale_fonte.wait.ok": "Il segnale si spegne com'era venuto.",
  "event.piante_strane.title": "Piante strane",
  "event.piante_strane.text": "Qualcosa di verde cresce all'ombra di una roccia.",
  "event.piante_strane.harvest": "Raccoglierle",
  "event.piante_strane.harvest.ok": "Sono commestibili. Elio è quasi felice.",
  "event.piante_strane.harvest.bad": "Non lo erano.",
  "event.piante_strane.leave": "Lasciarle stare",
  "event.piante_strane.leave.ok": "Si vive di più così.",
  "ending.soccorso.title": "Soccorso",
  "ending.contatto.title": "Contatto",
  "ending.contatto.text": "Il segnale non era un caso: c'è qualcun altro su Giano.",
  "archive.segnale.title": "Il segnale di Giano",
  "archive.segnale.text": "Emissione periodica di origine ignota, rilevata nel crepuscolo.",
  "archive.relitto.title": "Relitto della ARCA-7",
  "archive.relitto.text": "Scafo di un'altra missione, a due giorni dalla capsula.",
  "archive.piante.title": "Piante di Brina",
  "archive.piante.text": "Vegetazione bassa che sopravvive al confine del lato ghiacciato."
}
`,Il=`{
  "illustrations": [
    { "id": "icon_radio", "kind": "icon" },
    { "id": "icon_elettrolizzatore", "kind": "icon" },
    { "id": "icon_tuta_isolante", "kind": "icon" },
    { "id": "icon_tuta_termica", "kind": "icon" },
    { "id": "ds_brace", "kind": "event" },
    { "id": "ds_brina", "kind": "event" },
    { "id": "ds_relitto", "kind": "event" },
    { "id": "ds_grotta", "kind": "event" },
    { "id": "ds_bosco", "kind": "event" },
    { "id": "ds_cratere", "kind": "event" },
    { "id": "ar_brace", "kind": "archive" },
    { "id": "ar_brina", "kind": "archive" },
    { "id": "end_colonia", "kind": "ending" },
    { "id": "end_abbandono", "kind": "ending" },
    { "id": "ev_orto", "kind": "event" },
    { "id": "ev_guasto", "kind": "event" },
    { "id": "ev_brillamento", "kind": "event" },
    { "id": "ev_condensa", "kind": "event" },
    { "id": "ev_ritorno", "kind": "event" },
    { "id": "ev_lite", "kind": "event" },
    { "id": "ev_festa", "kind": "event" },
    { "id": "ev_creatura", "kind": "event" },
    { "id": "ev_crepa", "kind": "event" },
    { "id": "ev_febbre", "kind": "event" },
    { "id": "ev_relitto", "kind": "event" },
    { "id": "ev_pannelli", "kind": "event" },
    { "id": "ev_diario", "kind": "event" },
    { "id": "ev_commemorazione", "kind": "event" }
  ]
}
`,Ll=`{
  "illustrations": [
    {
      "id": "ev_tempesta",
      "kind": "event"
    },
    {
      "id": "ev_segnale",
      "kind": "event"
    },
    {
      "id": "ev_flora",
      "kind": "event"
    },
    {
      "id": "crew_mara",
      "kind": "portrait"
    },
    {
      "id": "crew_elio",
      "kind": "portrait"
    },
    {
      "id": "crew_lin",
      "kind": "portrait"
    },
    {
      "id": "crew_tobia",
      "kind": "portrait"
    },
    {
      "id": "icon_acqua",
      "kind": "icon"
    },
    {
      "id": "icon_razioni",
      "kind": "icon"
    },
    {
      "id": "icon_medikit",
      "kind": "icon"
    },
    {
      "id": "ar_segnale",
      "kind": "archive"
    },
    {
      "id": "ar_relitto",
      "kind": "archive"
    },
    {
      "id": "ar_piante",
      "kind": "archive"
    },
    {
      "id": "end_soccorso",
      "kind": "ending"
    },
    {
      "id": "end_contatto",
      "kind": "ending"
    },
    {
      "id": "end_morte",
      "kind": "ending"
    }
  ]
}
`,Rl=`{
  "id": "acqua",
  "nameKey": "item.acqua.name",
  "descriptionKey": "item.acqua.description",
  "whenMissingKey": "item.acqua.missing",
  "icon": "icon_acqua",
  "mass": 10,
  "provides": [
    {
      "resource": "water",
      "amount": 6
    }
  ]
}
`,zl=`{
  "id": "elettrolizzatore",
  "nameKey": "item.elettrolizzatore.name",
  "descriptionKey": "item.elettrolizzatore.description",
  "whenMissingKey": "item.elettrolizzatore.missing",
  "icon": "icon_elettrolizzatore",
  "mass": 8,
  "tool": "electrolyzer"
}
`,Bl=`{
  "id": "medikit",
  "nameKey": "item.medikit.name",
  "descriptionKey": "item.medikit.description",
  "whenMissingKey": "item.medikit.missing",
  "icon": "icon_medikit",
  "mass": 2,
  "provides": [
    {
      "resource": "medikit",
      "amount": 2
    }
  ]
}
`,Vl=`{
  "id": "radio",
  "nameKey": "item.radio.name",
  "descriptionKey": "item.radio.description",
  "whenMissingKey": "item.radio.missing",
  "icon": "icon_radio",
  "mass": 4,
  "tool": "radio"
}
`,Hl=`{
  "id": "razioni",
  "nameKey": "item.razioni.name",
  "descriptionKey": "item.razioni.description",
  "whenMissingKey": "item.razioni.missing",
  "icon": "icon_razioni",
  "mass": 6,
  "provides": [
    {
      "resource": "food",
      "amount": 6
    }
  ]
}
`,Ul=`{
  "id": "tuta_isolante",
  "nameKey": "item.tuta_isolante.name",
  "descriptionKey": "item.tuta_isolante.description",
  "whenMissingKey": "item.tuta_isolante.missing",
  "icon": "icon_tuta_isolante",
  "mass": 5,
  "tool": "insulated_suit"
}
`,Wl=`{
  "id": "tuta_termica",
  "nameKey": "item.tuta_termica.name",
  "descriptionKey": "item.tuta_termica.description",
  "whenMissingKey": "item.tuta_termica.missing",
  "icon": "icon_tuta_termica",
  "mass": 5,
  "tool": "thermal_suit"
}
`,Gl=`{
  "id": "famiglia",
  "nameKey": "scenario.famiglia.name",
  "descriptionKey": "scenario.famiglia.description",
  "cargo": ["acqua", "razioni", "medikit", "radio", "elettrolizzatore", "tuta_isolante"],
  "startResources": { "oxygen": 6, "energy": 3 },
  "characters": [
    {
      "id": "mara",
      "nameKey": "character.mara.name",
      "roleKey": "character.mara.role",
      "bioKey": "character.mara.bio",
      "portrait": "crew_mara",
      "abilities": [
        {
          "skill": "repair",
          "bonus": 2
        }
      ],
      "staysInside": false
    },
    {
      "id": "elio",
      "nameKey": "character.elio.name",
      "roleKey": "character.elio.role",
      "bioKey": "character.elio.bio",
      "portrait": "crew_elio",
      "abilities": [
        {
          "skill": "heal",
          "bonus": 2
        },
        {
          "skill": "botany",
          "bonus": 1
        }
      ],
      "staysInside": false
    },
    {
      "id": "lin",
      "nameKey": "character.lin.name",
      "roleKey": "character.lin.role",
      "bioKey": "character.lin.bio",
      "portrait": "crew_lin",
      "abilities": [
        {
          "skill": "explore",
          "bonus": 2
        }
      ],
      "staysInside": false
    },
    {
      "id": "tobia",
      "nameKey": "character.tobia.name",
      "roleKey": "character.tobia.role",
      "bioKey": "character.tobia.bio",
      "portrait": "crew_tobia",
      "abilities": [
        {
          "skill": "notice",
          "bonus": 2
        }
      ],
      "staysInside": true
    }
  ]
}
`,Kl=T(y(),y());function ql(e){return e.issues.map(e=>`${e.path.join(`.`)||`(radice)`}: ${e.message}`).join(`; `)}function Jl(t){let r=[],i={scenarios:{},items:{},events:{},endings:{},archive:{},illustrations:{},i18n:{it:{},en:{}},hazards:{},destinations:{}},a=!1,o=new Set,c=(e,t)=>{let n;try{n=JSON.parse(e.text)}catch(t){r.push({code:`json`,path:e.path,message:t.message});return}let i=t.safeParse(n);if(!i.success){r.push({code:`schema`,path:e.path,message:ql(i.error)});return}return i.data},l=(e,t,n,i)=>{let a=c(e,n);if(a!==void 0){if(a.id!==t){r.push({code:`filename-id-mismatch`,path:e.path,message:`l'id "${a.id}" non coincide con il nome del file "${t}"`});return}i[a.id]=a}};for(let s of[...t].sort((e,t)=>e.path<t.path?-1:+(e.path>t.path))){let t=/^(scenarios|items|events|endings|archive)\/([^/]+)\.json$/.exec(s.path),u=/^destinations\/([^/]+)\.json$/.exec(s.path);if(t){let n=t[2];switch(t[1]){case`scenarios`:l(s,n,m,i.scenarios);break;case`items`:l(s,n,f,i.items);break;case`events`:l(s,n,d,i.events);break;case`endings`:l(s,n,te,i.endings);break;default:l(s,n,e,i.archive)}}else if(/^hazards\/[^/]+\.json$/.test(s.path))l(s,s.path.slice(8,-5),p,i.hazards);else if(u)l(s,u[1],n,i.destinations);else if(/^illustrations(\.json|\/[^/]+\.json)$/.test(s.path)){a=!0;let e=c(s,w);for(let t of e?.illustrations??[])Object.hasOwn(i.illustrations,t.id)&&r.push({code:`duplicate-id`,path:s.path,message:`illustrazione "${t.id}" duplicata`}),i.illustrations[t.id]=t}else if(/^i18n\/(it|en)(\.json|\/[^/]+\.json)$/.test(s.path)){let e=s.path.slice(5,7);o.add(e);let t=c(s,Kl)??{};for(let[n,a]of Object.entries(t))Object.hasOwn(i.i18n[e],n)&&r.push({code:`duplicate-id`,path:s.path,message:`chiave i18n "${n}" già definita in un altro file ${e}`}),i.i18n[e][n]=a}else r.push({code:`unexpected-file`,path:s.path,message:`file non previsto nella cartella dei contenuti`})}a||r.push({code:`missing-file`,path:`illustrations.json`,message:`file obbligatorio mancante`});for(let e of s)o.has(e)||r.push({code:`missing-file`,path:`i18n/${e}.json`,message:`file obbligatorio mancante`});return{content:r.length===0?i:null,issues:r}}var Yl=Object.assign({"../content/archive/dune_di_brace.json":yc,"../content/archive/ghiacci_di_brina.json":bc,"../content/archive/piante_di_brina.json":xc,"../content/archive/relitto_arca7.json":Sc,"../content/archive/segnale_di_giano.json":Cc,"../content/destinations/bosco_basso.json":wc,"../content/destinations/brace_dune.json":Tc,"../content/destinations/brina_ghiacci.json":Ec,"../content/destinations/cratere_vetro.json":Dc,"../content/destinations/grotta_cristalli.json":Oc,"../content/destinations/relitto_arca7.json":kc,"../content/endings/abbandono.json":Ac,"../content/endings/colonia.json":jc,"../content/endings/contatto.json":Mc,"../content/endings/morte.json":Nc,"../content/endings/soccorso.json":Pc,"../content/events/brillamento.json":Fc,"../content/events/commemorazione.json":Ic,"../content/events/condensa.json":Lc,"../content/events/creatura_stiva.json":Rc,"../content/events/crepa_cede.json":zc,"../content/events/crepa_scafo.json":Bc,"../content/events/diario_notturno.json":Vc,"../content/events/febbre.json":Hc,"../content/events/festa_improvvisata.json":Uc,"../content/events/guasto_elettrolizzatore.json":Wc,"../content/events/lite.json":Gc,"../content/events/orto_germogli.json":Kc,"../content/events/orto_raccolto.json":qc,"../content/events/piante_strane.json":Jc,"../content/events/polvere_pannelli.json":Yc,"../content/events/relitto_carico.json":Xc,"../content/events/relitto_partenza.json":Zc,"../content/events/ritorno_disperso.json":Qc,"../content/events/segnale_debole.json":$c,"../content/events/segnale_fonte.json":el,"../content/events/tempesta.json":tl,"../content/hazards/avaria_sterzo.json":nl,"../content/hazards/avvitamento.json":rl,"../content/hazards/detriti.json":il,"../content/hazards/guasto_stiva.json":al,"../content/i18n/en/days.json":ol,"../content/i18n/en/descent.json":sl,"../content/i18n/en/ui-app.json":cl,"../content/i18n/en/ui-briefing-nav.json":ll,"../content/i18n/en/ui-briefing.json":ul,"../content/i18n/en/ui-common.json":dl,"../content/i18n/en/ui-days-screen.json":fl,"../content/i18n/en/ui-days.json":pl,"../content/i18n/en/ui-ending.json":ml,"../content/i18n/en/ui-landing.json":hl,"../content/i18n/en/ui-manual.json":gl,"../content/i18n/en/ui-server.json":_l,"../content/i18n/en/ui-settings.json":vl,"../content/i18n/en/ui-title.json":yl,"../content/i18n/en.json":bl,"../content/i18n/it/days.json":xl,"../content/i18n/it/descent.json":Sl,"../content/i18n/it/ui-app.json":Cl,"../content/i18n/it/ui-briefing-nav.json":wl,"../content/i18n/it/ui-briefing.json":Tl,"../content/i18n/it/ui-common.json":El,"../content/i18n/it/ui-days-screen.json":Dl,"../content/i18n/it/ui-days.json":Ol,"../content/i18n/it/ui-ending.json":kl,"../content/i18n/it/ui-landing.json":Al,"../content/i18n/it/ui-manual.json":jl,"../content/i18n/it/ui-server.json":Ml,"../content/i18n/it/ui-settings.json":Nl,"../content/i18n/it/ui-title.json":Pl,"../content/i18n/it.json":Fl,"../content/illustrations/days.json":Il,"../content/illustrations.json":Ll,"../content/items/acqua.json":Rl,"../content/items/elettrolizzatore.json":zl,"../content/items/medikit.json":Bl,"../content/items/radio.json":Vl,"../content/items/razioni.json":Hl,"../content/items/tuta_isolante.json":Ul,"../content/items/tuta_termica.json":Wl,"../content/scenarios/famiglia.json":Gl});function Xl(){return Jl(Object.entries(Yl).map(([e,t])=>({path:e.replace(`../content/`,``),text:t})))}function Zl(e,t,n){let{t:r}=t;$(e,M(`main`,{class:`screen title`,testid:`other-tab`},M(`h1`,{text:`BRACE!`}),M(`p`,{class:`notice`,text:r(`ui.app.other_tab`)}),N(r(`ui.app.other_tab_retry`),n.onRetry,{testid:`other-tab-retry`,sfx:t.sfx})))}var Ql=document.getElementById(`app`);if(!Ql)throw Error(`#app mancante in index.html`);var $l=!1,eu=null,tu=me({immediate:!0,onNeedRefresh(){$l=!0,eu?.()}});async function nu(e){let{content:t,issues:n}=Xl();if(t===null){e.textContent=`Contenuti non validi (${n.length} problemi): vedi npm run validate:content.`;return}let r=rt(),i=Xe(navigator.language);try{i=Ze(await r.get(`settings`),i)}catch{}let a=navigator.locks;if(!await $e(a)){Zl(e,{t:Yt(t,i.locale),content:t,settings:i,sfx:()=>{}},{onRetry:()=>location.reload()});return}let o=`unknown`;e.addEventListener(`pointerdown`,()=>void it().then(e=>o=e),{once:!0});let s=Be(),c=Nt({edition:s,config:Ie(),debug:!1,search:location.search,kv:r});eu=(await vc(e,{content:t,kv:r,settings:i,saveSettings:e=>{i=e,r.set(`settings`,Qe(e)).catch(()=>{})},search:location.search,debug:!1,version:`0.1.0`,edition:s,tickets:c,audio:Ge({enabled:()=>i.sound}),haptics:Je({enabled:()=>i.haptics}),persistence:()=>o,updateAvailable:()=>$l,applyUpdate:()=>void tu(!0)})).refresh,c.refresh().catch(()=>{})}nu(Ql);export{$s as n,Xl as t};