(function(e){function t(t){for(var r,o,a=t[0],c=t[1],l=t[2],p=0,s=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-32bb9839":"6215f19a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-32bb9839":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-32bb9839":"4708e041"}[e]+".css",i=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===r||p===i))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){l=s[a],p=l.getAttribute("data-href");if(p===r||p===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=a(e);var s=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/StarKraft-Miner-Vue/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=p;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u=n("2877"),a={},c=Object(u["a"])(a,o,i,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("8c4f"));function s(e){return function(){return n("9dac")("./"+e)}}r["a"].use(p["a"]);var d=[{path:"/",name:"Home",component:s("Home.vue")}],f=new p["a"]({mode:"history",base:"/StarKraft-Miner-Vue/",routes:d}),m=f,h=(n("7db0"),n("4160"),n("b0c0"),n("159b"),n("2f62"));r["a"].use(h["a"]);var v=new h["a"].Store({state:{mineralCount:0,idleCount:0,totalCount:0,upgrades:[{id:1,name:"SCV",price:25,multiplier:1,quantity:0,type:"click"},{id:2,name:"Probe",price:120,multiplier:20,quantity:0,type:"click"},{id:3,name:"Reaver",price:450,multiplier:50,quantity:0,type:"idle"},{id:4,name:"Ultralisk",price:1e3,multiplier:100,quantity:0,type:"idle"}],inventory:{upgrades:[]}},mutations:{buyUpgrade:function(e,t){e.inventory.upgrades.push(t)},updateUpgrade:function(e,t){e.mineralCount-=t.price,t.quantity++,t.multiplier=t.multiplier*t.quantity,t.price=Math.ceil(1.1*(t.price+25))}},actions:{collect:function(e){e.dispatch,e.commit;var t=e.state;t.mineralCount++,t.totalCount++,t.inventory.upgrades.length>0&&t.inventory.upgrades.forEach((function(e){"click"==e.type&&(t.mineralCount+=e.multiplier,t.totalCount+=e.multiplier)}))},buyUpgrade:function(e,t){e.dispatch;var n=e.commit,r=e.state,o=r.mineralCount,i=r.upgrades.find((function(e){return e.name==t.name}));if(o<i.price)console.log("We require more minerals");else{var u=r.inventory.upgrades.find((function(e){return e.name==t.name}));u?n("updateUpgrade",u):(n("updateUpgrade",i),n("buyUpgrade",i)),console.log(r.inventory)}},idleCollect:function(e){var t=e.dispatch,n=(e.commit,e.state);t("updateIdleCount"),n.inventory.upgrades.forEach((function(e){"idle"==e.type&&(n.mineralCount+=e.multiplier,n.totalCount+=e.multiplier)}))},updateIdleCount:function(e){e.dispatch,e.commit;var t=e.state,n=0;t.inventory.upgrades.forEach((function(e){"idle"==e.type&&(n+=e.multiplier)})),t.idleCount=n}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:m,store:v,render:function(e){return e(l)}}).$mount("#app")},"9dac":function(e,t,n){var r={"./Home":["bb51","chunk-32bb9839"],"./Home.vue":["bb51","chunk-32bb9839"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="9dac",e.exports=o}});
//# sourceMappingURL=app.d561e5f3.js.map