(()=>{"use strict";var e,t,r,o,n,a={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=a,c.c=f,e=[],c.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var f=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(f=!1,n<a&&(a=n));if(f){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);c.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(n,a),n},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({42:"121d9bd9",53:"935f2afb",85:"1f391b9e",125:"3d9c95a4",313:"2f0b6f54",385:"9f24d647",414:"393be207",480:"7cccb8fe",514:"1be78505",553:"9716e837",708:"48206b9c",817:"14eb3368",918:"17896441",940:"81c98393"}[e]||e)+"."+{42:"a5ef6595",53:"3b97b9d1",85:"c74697af",125:"d10bea86",210:"6168d991",313:"9d74d6ab",385:"76d891a7",414:"4e8126aa",480:"dd21e1f5",514:"815f3d5d",553:"f9204a62",708:"303b7980",817:"a9cce534",918:"0ceaf6db",940:"c95b88af",972:"e7a4a22e"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="snxdocs:",c.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var f,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){f=l;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",n+r),f.src=e),o[e]=[t];var s=(t,r)=>{f.onerror=f.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"918","121d9bd9":"42","935f2afb":"53","1f391b9e":"85","3d9c95a4":"125","2f0b6f54":"313","9f24d647":"385","393be207":"414","7cccb8fe":"480","1be78505":"514","9716e837":"553","48206b9c":"708","14eb3368":"817","81c98393":"940"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=c.p+c.u(t),f=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,o[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],f=r[1],i=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in f)c.o(f,o)&&(c.m[o]=f[o]);if(i)var u=i(c)}for(t&&t(r);d<a.length;d++)n=a[d],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(u)},r=self.webpackChunksnxdocs=self.webpackChunksnxdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();