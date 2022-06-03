(()=>{"use strict";var e={377:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o,r,i,a=1+2*n,l=Math.round(180*n*Math.random()),s=1-n,c=(o=t.pos,r=t.center,i=t.distance,{x:(o.x-r.x)*Math.random()*i,y:(o.y-r.y)*Math.random()*i}),d=c.x*n,u=c.y*n,f=t.duration;t.class&&e.setAttribute("class",t.class),e.setAttribute("style","\n        left: "+t.pos.x+"px;\n        top:  "+t.pos.y+"px;\n        height: "+t.size.x+"px;\n        width:  "+t.size.y+"px;\n        transform: translate("+d+"px, "+u+"px) scale("+a+") rotate("+l+"deg);\n        opacity: "+s+";\n        position: absolute;\n        background: "+(t.color||"#6f5d4c")+";\n        pointer-events: none;\n        transition: all linear "+f+"ms, opacity "+f+"ms;\n        visibility: "+(n?"visible":"hidden")+"\n    ")};t.createShatter=function(e){var t=document.createElement("div");return n(t,e,0),document.body.appendChild(t),function(o){Object.assign(e,o),n(t,e,1),setTimeout((function(){return document.body.removeChild(t)}),e.duration)}}},316:(e,t,n)=>{var o=n(629);n(629).prepare,t.XY=function(e,t){var n=o.prepare(e,t);requestAnimationFrame((function(){return n()}))}},629:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(377),i=n(158);t.prepare=function(e,t){void 0===t&&(t={});var n=e.getBoundingClientRect();Object.assign(t,{center:t.center||i.getElementCenter(n),color:t.color||i.getShatterColor(e),duration:t.duration||500,distance:t.distance||2});for(var a=i.getShatterSize(n,t.sliceCount,t.maxSliceSize),l=Object.assign(i.inferShatterConfig(t),{size:a}),s=[],c=n.left;c<n.right;c+=a.x)for(var d=n.top;d<n.bottom;d+=a.y){var u={x:c,y:d},f=r.createShatter(o(o({},l),{pos:u}));s.push(f)}return function(n){var o=i.inferShatterConfig(n);s.forEach((function(e){return e(o)})),Object.assign({},t,n).shouldRemoveEl?e.parentElement.removeChild(e):e.setAttribute("style","visibility: hidden")}}},158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.purge=function(e){for(var n in e)if(e.hasOwnProperty(n))switch(typeof e[n]){case"undefined":delete e[n];break;case"object":e[n]=t.purge(e[n])}return e},t.inferShatterConfig=function(e){return void 0===e&&(e={}),t.purge({duration:e.duration,distance:e.distance,center:e.center,color:e.color,class:e.shatterClass})},t.getShatterColor=function(e){return window.getComputedStyle(e).getPropertyValue("background-color")||"#CCCCCC"},t.getShatterSize=function(e,t,n){return void 0===t&&(t=10),void 0===n&&(n=15),{x:Math.min(e.width/t,n),y:Math.min(e.height/t,n)}},t.getElementCenter=function(e){return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}},99:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=n(667),s=n.n(l),c=new URL(n(414),n.b),d=new URL(n(319),n.b),u=a()(r()),f=s()(c),h=s()(d);u.push([e.id,'@font-face{font-family:"mine-sweeper";src:url('+f+')}.cell{width:30px;height:30px;align-self:center;justify-self:center;font-size:15px;text-align:center;font-weight:lighter;display:flex;align-items:center;justify-content:center;font-family:"mine-sweeper"}.cell--opened{background-color:#acacac}.cell--unopened{background-color:#000}.cell--unopened p{display:none}.cell--flag{background-image:url('+h+');background-size:30px 30px}.cell--unopened-end{background-color:#505050}.cell--0 p{visibility:hidden}.cell--1{color:blue}.cell--2{color:green}.cell--3{color:red}.cell--4{color:navy}.cell--5{color:maroon}.cell--6{color:#2b8285}.cell--7{color:#000}.cell--8{color:#535353}.field{display:grid;background-color:#00249b;padding:10px;visibility:hidden}h1{font-family:"mine-sweeper";color:#a700a7;margin:0;border-top:#fff 4px solid;border-bottom:#fff 4px solid;width:100%;text-align:center;vertical-align:center}body{background-color:#000;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.settings{color:#fff;display:flex;flex-direction:column}.settings__heading{font-size:20px;font-family:"mine-sweeper";color:blue;border-bottom:#fff 4px solid}.settings__option{border:#fff 4px solid;margin:5px;width:120px;height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:20px;font-family:"Courier New",Courier,monospace;text-align:center;font-weight:bold}.settings__option *{margin:0px}.settings__option:hover{border:blue 4px solid}.settings__option__selected{border:red 4px solid}.settings__option__selected .settings__custom-settings{display:flex;width:100%;justify-content:space-around}.settings__option__selected .settings__custom-settings *{font-family:"Courier New",Courier,monospace;font-size:12px;width:30px;text-align:center}.settings__size{display:flex;flex-wrap:wrap;justify-content:center}.settings__difficulty{display:flex;flex-wrap:wrap;justify-content:center}.settings__custom-settings{display:none}.settings__start{padding:5px;margin:20px;font-size:20px;align-self:flex-end;background-color:#000;color:#fff;border:4px green solid;font-family:"mine-sweeper"}.settings__start:hover{border:4px blue solid}.flag{display:none;width:80%;justify-content:space-around;color:#fff;align-items:center;margin:15px}.flag__label{display:none}.flag__checkbox{background-image:url('+h+');width:40px;height:40px;background-size:34px 34px;border:3px #000 solid}.flag__checkbox--selected{border:3px red solid}.flag__left{font-family:"mine-sweeper";font-size:30px}',""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=o.base?s[0]+o.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var f=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var p=r(h,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var s=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},319:(e,t,n)=>{e.exports=n.p+"2edc045e47adab4061a0.svg"},414:(e,t,n)=>{e.exports=n.p+"0e2f95687141c4483cf6.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e={};!function e(t,n,o,r){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function a(){}function l(e){var o=n.exports.Promise,r=void 0!==o?o:t.Promise;return"function"==typeof r?new r(e):(e(a,a),null)}var s,c,d,u,f,h,p,g,m,y=(d=Math.floor(1e3/60),u={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(s=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function n(o){f===o||f+d-1<o?(f=o,delete u[t],e()):u[t]=requestAnimationFrame(n)})),t},c=function(e){u[e]&&cancelAnimationFrame(u[e])}):(s=function(e){return setTimeout(e,d)},c=function(e){return clearTimeout(e)}),{frame:s,cancel:c}),v=(g={},function(){if(h)return h;if(!o&&i){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{h=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,o,r){if(p)return t(n,null),p;var i=Math.random().toString(36).slice(2);return p=l((function(o){function a(t){t.data.callback===i&&(delete g[i],e.removeEventListener("message",a),p=null,r(),o())}e.addEventListener("message",a),t(n,i),g[i]=a.bind(null,{data:{callback:i}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),g)g[t](),delete g[t]}}(h)}return h}),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:b[t],n)}function w(e){return e<0?0:Math.floor(e)}function M(e){return parseInt(e,16)}function _(e){return e.map(C)}function C(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:M(t.substring(0,2)),g:M(t.substring(2,4)),b:M(t.substring(4,6))}}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function k(e,n){var a,s=!e,c=!!x(n||{},"resize"),d=x(n,"disableForReducedMotion",Boolean),u=i&&x(n||{},"useWorker")?v():null,f=s?S:E,h=!(!e||!u||!e.__confetti_initialized),p="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(t,n,i){for(var s,c,d,u,h=x(t,"particleCount",w),p=x(t,"angle",Number),g=x(t,"spread",Number),m=x(t,"startVelocity",Number),v=x(t,"decay",Number),b=x(t,"gravity",Number),M=x(t,"drift",Number),C=x(t,"colors",_),S=x(t,"ticks",Number),E=x(t,"shapes"),k=x(t,"scalar"),L=function(e){var t=x(e,"origin",Object);return t.x=x(t,"x",Number),t.y=x(t,"y",Number),t}(t),T=h,z=[],j=e.width*L.x,I=e.height*L.y;T--;)z.push((void 0,void 0,c=(s={x:j,y:I,angle:p,spread:g,startVelocity:m,color:C[T%C.length],shape:E[(0,u=E.length,Math.floor(Math.random()*(u-0))+0)],ticks:S,decay:v,gravity:b,drift:M,scalar:k}).angle*(Math.PI/180),d=s.spread*(Math.PI/180),{x:s.x,y:s.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*s.startVelocity+Math.random()*s.startVelocity,angle2D:-c+(.5*d-Math.random()*d),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:s.color,shape:s.shape,tick:0,totalTicks:s.ticks,decay:s.decay,drift:s.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*s.gravity,ovalScalar:.6,scalar:s.scalar}));return a?a.addFettis(z):(a=function(e,t,n,i,a){var s,c,d=t.slice(),u=e.getContext("2d"),f=l((function(t){function l(){s=c=null,u.clearRect(0,0,i.width,i.height),a(),t()}s=y.frame((function t(){!o||i.width===r.width&&i.height===r.height||(i.width=e.width=r.width,i.height=e.height=r.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),u.clearRect(0,0,i.width,i.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,o=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-o)*t.ovalScalar,Math.abs(a-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,o,r,i,a,l,s){e.save(),e.translate(t,n),e.rotate(i),e.scale(o,r),e.arc(0,0,1,0,l,void 0),e.restore()}(e,t.x,t.y,Math.abs(i-o)*t.ovalScalar,Math.abs(a-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(i),Math.floor(a)),e.lineTo(Math.floor(o),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?s=y.frame(t):l()})),c=l}));return{addFettis:function(e){return d=d.concat(e),f},canvas:e,promise:f,reset:function(){s&&y.cancel(s),c&&c()}}}(e,z,f,n,i)).promise}function m(n){var o=d||x(n,"disableForReducedMotion",Boolean),r=x(n,"zIndex",Number);if(o&&p)return l((function(e){e()}));s&&a?e=a.canvas:s&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(r),document.body.appendChild(e)),c&&!h&&f(e);var i={width:e.width,height:e.height};function m(){if(u){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};return f(t),void u.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function y(){a=null,c&&t.removeEventListener("resize",m),s&&e&&(document.body.removeChild(e),e=null,h=!1)}return u&&!h&&u.init(e),h=!0,u&&(e.__confetti_initialized=!0),c&&t.addEventListener("resize",m,!1),u?u.fire(n,i,y):g(n,i,y)}return m.reset=function(){u&&u.reset(),a&&a.reset()},m}function L(){return m||(m=k(null,{useWorker:!0,resize:!0})),m}n.exports=function(){return L().apply(this,arguments)},n.exports.reset=function(){L().reset()},n.exports.create=k}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),e,!1);const t=e.exports;e.exports.create;var o=n(379),r=n.n(o),i=n(795),a=n.n(i),l=n(569),s=n.n(l),c=n(565),d=n.n(c),u=n(216),f=n.n(u),h=n(589),p=n.n(h),g=n(99),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),r()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var y=n(316);const v=document.querySelector(".field"),b=document.querySelectorAll(".size-option"),x=document.querySelectorAll(".difficulty-option"),w=document.querySelector("#generate-button");let M=0;const _=[];let C=0,S=0,E=[];const k=(e,t)=>{for(let n=0;n<t.length;n++)for(let o=0;o<t[0].length;o++)if(t[n][o]===e)return{x:o,y:n};return 0},L=(e,t,n)=>{const o=[];for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++)if((0!==r||0!==i)&&e.y+r>=0&&e.y+r<t&&e.x+i>=0&&e.x+i<n){const t={x:e.x+i,y:e.y+r};o.push(t)}return o},T=(e,t)=>{for(let n=0;n<t.length;n++)if(t[n].x===e.x&&t[n].y===e.y)return!0;return!1},z=e=>{const t=document.querySelector("#mines");M=t.value;const n=k(e.target,E);for(let e=0;e<M;e++){let e=Math.floor(Math.random()*_[0].length),t=Math.floor(Math.random()*_.length);const o=L(n,C,S);for(o.push(n);"x"===_[t][e]||T({x:e,y:t},o);)e=Math.floor(Math.random()*_[0].length),t=Math.floor(Math.random()*_.length);_[t][e]="x",console.log("added x"+e+" y"+t),L({x:e,y:t},C,S).forEach((e=>{isNaN(_[e.y][e.x])||_[e.y][e.x]++}))}_.forEach((e=>console.log(e.join(" "))));for(let e=0;e<C;e++)for(let t=0;t<S;t++)E[e][t].innerHTML=`<p>${_[e][t]}</p>`,E[e][t].classList.add(`cell--${"x"===_[e][t]?"mine":_[e][t]}`);console.log("here"),E.forEach((e=>e.forEach((e=>e.removeEventListener("click",z))))),E.forEach((e=>e.forEach((e=>e.addEventListener("click",j))))),I(E[n.y][n.x])},j=e=>{document.getElementById("flag").checked?e.target.classList.contains("cell--flag")?e.target.classList.remove("cell--flag"):e.target.classList.add("cell--flag"):e.target.classList.contains("cell--flag")||I(e.target)},I=e=>{const t=e.classList;t.contains("cell--unopened")&&(t.remove("cell--unopened"),t.add("cell--opened"),t.contains("cell--mine")?R():t.contains("cell--0")&&(console.log(),L(k(e,E),E.length,E[0].length).forEach((e=>I(E[e.y][e.x]))))),O(E)},O=e=>{for(let t=0;t<e.length;t++)for(let n=0;n<e[0].length;n++)if(e[t][n].classList.contains("cell--unopened")&&!e[t][n].classList.contains("cell--mine"))return!1;return t({particleCount:200,spread:90,angle:-40,origin:{x:-.1,y:-.1},gravity:.5}),t({particleCount:200,spread:90,angle:220,origin:{x:1.1,y:-.1},gravity:.5}),t({particleCount:200,spread:90,angle:-90,origin:{x:.5,y:-.2},gravity:.5}),t({particleCount:200,spread:90,angle:135,origin:{x:1,y:1},gravity:.5}),t({particleCount:200,spread:90,angle:45,origin:{x:0,y:1},gravity:.5}),!0},R=()=>{console.log("mine!"),E.forEach((e=>e.forEach((e=>{console.log("here!"),e.classList.contains("cell--unopened")&&(e.classList.remove("cell--unopened"),e.classList.add("cell--unopened-end")),e.classList.contains("cell--mine")&&((0,y.XY)(e,{duration:1e4,shouldRemoveEl:!1,distance:6,color:"#FF8000",sliceCount:5,maxSliceSize:10,shatterClass:"asdf"}),(0,y.XY)(e,{duration:1e4,shouldRemoveEl:!1,distance:5,color:"#FF0000",sliceCount:5,maxSliceSize:10,shatterClass:"asdf"}),console.log("explode"))})))),console.log(E)},F=e=>{w.removeEventListener("click",F);const t=document.querySelector(".settings"),n=document.querySelector("#height"),o=document.querySelector("#width");t.style.display="none",document.querySelector(".flag").style.display="flex",console.log("generating grid"),v.style.visibility="visible";let r="";for(let e=0;e<b.length;e++)if(b[e].classList.contains("settings__option__selected")){r=b[e].innerText;break}switch(r){case"Small":C=10,S=10;break;case"Medium":C=15,S=15;break;case"Large":C=25,S=25;break;case"Fit to Screen":if(C=Math.floor((screen.height-90)/40),S=Math.floor(screen.width/40),console.log(C+"   "+S),C*S>900){const e=900/C*S;C*=e,S*=e}console.log(C+"   "+S),console.log(screen.height+"   "+screen.width);break;default:C=n.value,S=o.value}console.log(r);for(let e=0;e<C;e++){E.push([]);for(let t=0;t<S;t++)v.innerHTML+='\n                <div class="cell cell--unopened">\n                </div>\n            ',E[e].push(null),console.log("new cell")}const i=document.querySelectorAll(".cell");for(let e=0;e<C;e++)for(let t=0;t<S;t++)E[e][t]=i[t+S*e];v.style.gridTemplateColumns=`repeat(${S}, 1fr)`,v.style.gridTemplateRows=`repeat(${C}, 1fr)`,v.style.width=35*S+"px",v.style.height=35*C+"px";for(let e=0;e<C;e++){_.push([]);for(let t=0;t<S;t++)_[e].push(0)}console.log("here"),E.forEach((e=>e.forEach((e=>e.addEventListener("click",z)))))},N=e=>{b.forEach((e=>e.classList.remove("settings__option__selected"))),e.currentTarget.classList.add("settings__option__selected")},P=e=>{x.forEach((e=>e.classList.remove("settings__option__selected"))),e.currentTarget.classList.add("settings__option__selected")};w.addEventListener("click",F),b.forEach((e=>e.addEventListener("click",N))),x.forEach((e=>e.addEventListener("click",P)))})()})();