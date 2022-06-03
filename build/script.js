(()=>{"use strict";var e={377:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r,o,i,a=1+2*n,l=Math.round(180*n*Math.random()),c=1-n,s=(r=t.pos,o=t.center,i=t.distance,{x:(r.x-o.x)*Math.random()*i,y:(r.y-o.y)*Math.random()*i}),u=s.x*n,d=s.y*n,f=t.duration;t.class&&e.setAttribute("class",t.class),e.setAttribute("style","\n        left: "+t.pos.x+"px;\n        top:  "+t.pos.y+"px;\n        height: "+t.size.x+"px;\n        width:  "+t.size.y+"px;\n        transform: translate("+u+"px, "+d+"px) scale("+a+") rotate("+l+"deg);\n        opacity: "+c+";\n        position: absolute;\n        background: "+(t.color||"#6f5d4c")+";\n        pointer-events: none;\n        transition: all linear "+f+"ms, opacity "+f+"ms;\n        visibility: "+(n?"visible":"hidden")+"\n    ")};t.createShatter=function(e){var t=document.createElement("div");return n(t,e,0),document.body.appendChild(t),function(r){Object.assign(e,r),n(t,e,1),setTimeout((function(){return document.body.removeChild(t)}),e.duration)}}},316:(e,t,n)=>{var r=n(629);n(629).prepare,t.XY=function(e,t){var n=r.prepare(e,t);requestAnimationFrame((function(){return n()}))}},629:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(377),i=n(158);t.prepare=function(e,t){void 0===t&&(t={});var n=e.getBoundingClientRect();Object.assign(t,{center:t.center||i.getElementCenter(n),color:t.color||i.getShatterColor(e),duration:t.duration||500,distance:t.distance||2});for(var a=i.getShatterSize(n,t.sliceCount,t.maxSliceSize),l=Object.assign(i.inferShatterConfig(t),{size:a}),c=[],s=n.left;s<n.right;s+=a.x)for(var u=n.top;u<n.bottom;u+=a.y){var d={x:s,y:u},f=o.createShatter(r(r({},l),{pos:d}));c.push(f)}return function(n){var r=i.inferShatterConfig(n);c.forEach((function(e){return e(r)})),Object.assign({},t,n).shouldRemoveEl?e.parentElement.removeChild(e):e.setAttribute("style","visibility: hidden")}}},158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.purge=function(e){for(var n in e)if(e.hasOwnProperty(n))switch(typeof e[n]){case"undefined":delete e[n];break;case"object":e[n]=t.purge(e[n])}return e},t.inferShatterConfig=function(e){return void 0===e&&(e={}),t.purge({duration:e.duration,distance:e.distance,center:e.center,color:e.color,class:e.shatterClass})},t.getShatterColor=function(e){return window.getComputedStyle(e).getPropertyValue("background-color")||"#CCCCCC"},t.getShatterSize=function(e,t,n){return void 0===t&&(t=10),void 0===n&&(n=15),{x:Math.min(e.width/t,n),y:Math.min(e.height/t,n)}},t.getElementCenter=function(e){return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}},99:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),l=n(667),c=n.n(l),s=new URL(n(414),n.b),u=new URL(n(319),n.b),d=a()(o()),f=c()(s),h=c()(u);d.push([e.id,'@font-face{font-family:"mine-sweeper";src:url('+f+')}.cell{width:30px;height:30px;align-self:center;justify-self:center;font-size:15px;text-align:center;font-weight:lighter;display:flex;align-items:center;justify-content:center;font-family:"mine-sweeper"}.cell--opened{background-color:#acacac}.cell--unopened{background-color:#000}.cell--unopened p{display:none}.cell--flag{background-image:url('+h+');background-size:30px 30px}.cell--unopened-end{background-color:#505050}.cell--0 p{visibility:hidden}.cell--1{color:blue}.cell--2{color:green}.cell--3{color:red}.cell--4{color:navy}.cell--5{color:maroon}.cell--6{color:#2b8285}.cell--7{color:#000}.cell--8{color:#535353}.field{display:grid;background-color:#00249b;padding:10px;visibility:hidden}h1{font-family:"mine-sweeper";color:#a700a7;margin-bottom:0}body{background-color:#000;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.settings{color:#fff;display:flex;flex-direction:column}.settings__heading{font-size:20px;font-family:"mine-sweeper"}.settings__option{border:#fff 2px solid;margin:5px;width:120px;height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:20px}.settings__option *{display:none;margin:0px}.settings__option:hover{border:blue 2px solid}.settings__option__selected{border:red 2px solid}.settings__option__selected *{display:block}.settings__size{display:flex;flex-wrap:wrap;justify-content:center}.settings__size__custom__form{display:flex;justify-content:space-around;width:100%}.settings__size__custom__form *{font-size:12px;width:30px}',""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var c=e[l],s=r.base?c[0]+r.base:c[0],u=i[s]||0,d="".concat(s," ").concat(u);i[s]=u+1;var f=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var p=o(h,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var c=r(e,o),s=0;s<i.length;s++){var u=n(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},319:(e,t,n)=>{e.exports=n.p+"2edc045e47adab4061a0.svg"},414:(e,t,n)=>{e.exports=n.p+"0e2f95687141c4483cf6.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e={};!function e(t,n,r,o){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function a(){}function l(e){var r=n.exports.Promise,o=void 0!==r?r:t.Promise;return"function"==typeof o?new o(e):(e(a,a),null)}var c,s,u,d,f,h,p,g,m,v=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function n(r){f===r||f+u-1<r?(f=r,delete d[t],e()):d[t]=requestAnimationFrame(n)})),t},s=function(e){d[e]&&cancelAnimationFrame(d[e])}):(c=function(e){return setTimeout(e,u)},s=function(e){return clearTimeout(e)}),{frame:c,cancel:s}),y=(g={},function(){if(h)return h;if(!r&&i){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{h=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,o){if(p)return t(n,null),p;var i=Math.random().toString(36).slice(2);return p=l((function(r){function a(t){t.data.callback===i&&(delete g[i],e.removeEventListener("message",a),p=null,o(),r())}e.addEventListener("message",a),t(n,i),g[i]=a.bind(null,{data:{callback:i}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),g)g[t](),delete g[t]}}(h)}return h}),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:b[t],n)}function w(e){return e<0?0:Math.floor(e)}function M(e){return parseInt(e,16)}function C(e){return e.map(S)}function S(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:M(t.substring(0,2)),g:M(t.substring(2,4)),b:M(t.substring(4,6))}}function E(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function _(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function k(e,n){var a,c=!e,s=!!x(n||{},"resize"),u=x(n,"disableForReducedMotion",Boolean),d=i&&x(n||{},"useWorker")?y():null,f=c?E:_,h=!(!e||!d||!e.__confetti_initialized),p="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(t,n,i){for(var c,s,u,d,h=x(t,"particleCount",w),p=x(t,"angle",Number),g=x(t,"spread",Number),m=x(t,"startVelocity",Number),y=x(t,"decay",Number),b=x(t,"gravity",Number),M=x(t,"drift",Number),S=x(t,"colors",C),E=x(t,"ticks",Number),_=x(t,"shapes"),k=x(t,"scalar"),T=function(e){var t=x(e,"origin",Object);return t.x=x(t,"x",Number),t.y=x(t,"y",Number),t}(t),L=h,z=[],I=e.width*T.x,j=e.height*T.y;L--;)z.push((void 0,void 0,s=(c={x:I,y:j,angle:p,spread:g,startVelocity:m,color:S[L%S.length],shape:_[(0,d=_.length,Math.floor(Math.random()*(d-0))+0)],ticks:E,decay:y,gravity:b,drift:M,scalar:k}).angle*(Math.PI/180),u=c.spread*(Math.PI/180),{x:c.x,y:c.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*c.startVelocity+Math.random()*c.startVelocity,angle2D:-s+(.5*u-Math.random()*u),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*c.gravity,ovalScalar:.6,scalar:c.scalar}));return a?a.addFettis(z):(a=function(e,t,n,i,a){var c,s,u=t.slice(),d=e.getContext("2d"),f=l((function(t){function l(){c=s=null,d.clearRect(0,0,i.width,i.height),a(),t()}c=v.frame((function t(){!r||i.width===o.width&&i.height===o.height||(i.width=e.width=o.width,i.height=e.height=o.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),d.clearRect(0,0,i.width,i.height),u=u.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(a-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,o,i,a,l,c){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,o),e.arc(0,0,1,0,l,void 0),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(a-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(i),Math.floor(a)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})),u.length?c=v.frame(t):l()})),s=l}));return{addFettis:function(e){return u=u.concat(e),f},canvas:e,promise:f,reset:function(){c&&v.cancel(c),s&&s()}}}(e,z,f,n,i)).promise}function m(n){var r=u||x(n,"disableForReducedMotion",Boolean),o=x(n,"zIndex",Number);if(r&&p)return l((function(e){e()}));c&&a?e=a.canvas:c&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(o),document.body.appendChild(e)),s&&!h&&f(e);var i={width:e.width,height:e.height};function m(){if(d){var t={getBoundingClientRect:function(){if(!c)return e.getBoundingClientRect()}};return f(t),void d.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function v(){a=null,s&&t.removeEventListener("resize",m),c&&e&&(document.body.removeChild(e),e=null,h=!1)}return d&&!h&&d.init(e),h=!0,d&&(e.__confetti_initialized=!0),s&&t.addEventListener("resize",m,!1),d?d.fire(n,i,v):g(n,i,v)}return m.reset=function(){d&&d.reset(),a&&a.reset()},m}function T(){return m||(m=k(null,{useWorker:!0,resize:!0})),m}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=k}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),e,!1);const t=e.exports;e.exports.create;var r=n(379),o=n.n(r),i=n(795),a=n.n(i),l=n(569),c=n.n(l),s=n(565),u=n.n(s),d=n(216),f=n.n(d),h=n(589),p=n.n(h),g=n(99),m={};m.styleTagTransform=p(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),o()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var v=n(316);const y=document.querySelector(".field"),b=document.querySelector("#generate-button"),x=document.querySelector("#height"),w=document.querySelector("#width"),M=document.querySelector("#mines");let C=0;const S=[];let E=0,_=0,k=[];const T=(e,t)=>{for(let n=0;n<t.length;n++)for(let r=0;r<t[0].length;r++)if(t[n][r]===e)return{x:r,y:n};return 0},L=(e,t,n)=>{const r=[];for(let o=-1;o<=1;o++)for(let i=-1;i<=1;i++)if((0!==o||0!==i)&&e.y+o>=0&&e.y+o<t&&e.x+i>=0&&e.x+i<n){const t={x:e.x+i,y:e.y+o};r.push(t)}return r},z=(e,t)=>{for(let n=0;n<t.length;n++)if(t[n].x===e.x&&t[n].y===e.y)return!0;return!1},I=e=>{const t=T(e.target,k);for(let e=0;e<C;e++){let e=Math.floor(Math.random()*S[0].length),n=Math.floor(Math.random()*S.length);const r=L(t,E,_);for(r.push(t);"x"===S[n][e]||z({x:e,y:n},r);)e=Math.floor(Math.random()*S[0].length),n=Math.floor(Math.random()*S.length);S[n][e]="x",console.log("added x"+e+" y"+n),L({x:e,y:n},E,_).forEach((e=>{isNaN(S[e.y][e.x])||S[e.y][e.x]++}))}S.forEach((e=>console.log(e.join(" "))));for(let e=0;e<E;e++)for(let t=0;t<_;t++)k[e][t].innerHTML=`<p>${S[e][t]}</p>`,k[e][t].classList.add(`cell--${"x"===S[e][t]?"mine":S[e][t]}`);console.log("here"),k.forEach((e=>e.forEach((e=>e.removeEventListener("click",I))))),k.forEach((e=>e.forEach((e=>e.addEventListener("click",j))))),O(k[t.y][t.x])},j=e=>{document.getElementById("flag").checked?e.target.classList.contains("cell--flag")?e.target.classList.remove("cell--flag"):e.target.classList.add("cell--flag"):e.target.classList.contains("cell--flag")||O(e.target)},O=e=>{const t=e.classList;t.contains("cell--unopened")&&(t.remove("cell--unopened"),t.add("cell--opened"),t.contains("cell--mine")?P():t.contains("cell--0")&&(console.log(),L(T(e,k),k.length,k[0].length).forEach((e=>O(k[e.y][e.x]))))),R(k)},R=e=>{for(let t=0;t<e.length;t++)for(let n=0;n<e[0].length;n++)if(e[t][n].classList.contains("cell--unopened")&&!e[t][n].classList.contains("cell--mine"))return!1;return t({particleCount:200,spread:90,angle:-40,origin:{x:-.1,y:-.1},gravity:.5}),t({particleCount:200,spread:90,angle:220,origin:{x:1.1,y:-.1},gravity:.5}),t({particleCount:200,spread:90,angle:-90,origin:{x:.5,y:-.2},gravity:.5}),t({particleCount:200,spread:90,angle:135,origin:{x:1,y:1},gravity:.5}),t({particleCount:200,spread:90,angle:45,origin:{x:0,y:1},gravity:.5}),!0},P=()=>{console.log("mine!"),k.forEach((e=>e.forEach((e=>{console.log("here!"),e.classList.contains("cell--unopened")&&(e.classList.remove("cell--unopened"),e.classList.add("cell--unopened-end")),e.classList.contains("cell--mine")&&((0,v.XY)(e,{duration:1e4,shouldRemoveEl:!1,distance:6,color:"#FF8000",sliceCount:5,maxSliceSize:10,shatterClass:"asdf"}),(0,v.XY)(e,{duration:1e4,shouldRemoveEl:!1,distance:5,color:"#FF0000",sliceCount:5,maxSliceSize:10,shatterClass:"asdf"}),console.log("explode"))})))),console.log(k)},F=e=>{b.removeEventListener("click",F),document.querySelector(".form").style.display="none",console.log("generating grid"),E=x.value,_=w.value,C=M.value,y.style.visibility="visible";for(let e=0;e<E;e++){k.push([]);for(let t=0;t<_;t++)y.innerHTML+='\n                <div class="cell cell--unopened">\n                </div>\n            ',k[e].push(null),console.log("new cell")}const t=document.querySelectorAll(".cell");for(let e=0;e<E;e++)for(let n=0;n<_;n++)k[e][n]=t[n+_*e];y.style.gridTemplateColumns=`repeat(${_}, 1fr)`,y.style.gridTemplateRows=`repeat(${E}, 1fr)`,y.style.width=35*_+"px",y.style.height=35*E+"px";for(let e=0;e<E;e++){S.push([]);for(let t=0;t<_;t++)S[e].push(0)}console.log("here"),k.forEach((e=>e.forEach((e=>e.addEventListener("click",I)))))};window.addEventListener("load",(()=>console.log("hi"))),b.addEventListener("click",F)})()})();