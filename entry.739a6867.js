parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jwVQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.el=o,exports.on=n,exports.off=i,exports.dpr=exports.cAF=exports.rAF=void 0;const{requestAnimationFrame:e,cancelAnimationFrame:t,devicePixelRatio:r}=window;function o(e){const t=document.querySelector(e);if(!t)throw new Error(`Couldn't get "${e}" element`);return t}function n(e,t){return window.addEventListener(e,t)}function i(e,t){return window.removeEventListener(e,t)}exports.dpr=r,exports.cAF=t,exports.rAF=e;
},{}],"qZBz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=h,exports.saw=w,exports.tri=y,exports.toDegrees=q,exports.toRadians=F,exports.isFinite=exports.ππ=exports.sqrt=exports.sin=exports.round=exports.random=exports.pow=exports.π=exports.min=exports.max=exports.hypot=exports.floor=exports.cos=exports.ceil=exports.atan2=exports.acos=exports.abs=void 0;const{abs:o,acos:t,atan2:r,ceil:s,cos:e,floor:p,hypot:x,max:n,min:i,PI:a,pow:c,random:u,round:d,sin:m,sqrt:f}=Math;exports.sqrt=f,exports.sin=m,exports.round=d,exports.random=u,exports.pow=c,exports.π=a,exports.min=i,exports.max=n,exports.hypot=x,exports.floor=p,exports.cos=e,exports.ceil=s,exports.atan2=r,exports.acos=t,exports.abs=o;const l=2*a;exports.ππ=l;const{isFinite:b}=Number;function h(o,t,r){return(1-r)*o+r*t}function w(o){return o%l/a-1}function y(t){return 1-2*o(w(t))}function q(o){return 180*o/a}function F(o){return o*a/180}exports.isFinite=b;
},{}],"JzCA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.screen=r;var e=require("../../../lib/core/dom"),t=require("../../../lib/core/math");function n(e,t,n,i=!1){e.addEventListener(t,n,i)}function i(e=1,t=0){return t%e==0?t:t+(e-t%e)}function a(e,n,i,a,c){switch(e){case"cover":return(0,t.max)(n/a,i/c);case"contain":return(0,t.min)(n/a,i/c)}}const c={containerSelector:"main",canvasSelector:"canvas",contextType:"2d",pixelScale:1,canvasSizing:"cover"};function r(t){const{containerSelector:r,canvasSelector:o,contextType:s,pixelScale:h,canvasSizing:d}=Object.assign(Object.assign({},c),t),v=(0,e.el)(r),g=(0,e.el)(o),l=g.getContext(s),u={dpr:window.devicePixelRatio,containerWidth:v.clientWidth,containerHeight:v.clientHeight,canvasWidth:g.width,canvasHeight:g.height,canvasScale:1,context:l};return n(window,"resize",()=>{u.containerWidth=v.clientWidth,u.containerHeight=v.clientHeight;const e=i(h,u.containerWidth),t=i(h,u.containerHeight);u.canvasWidth=e*u.dpr/h,u.canvasHeight=t*u.dpr/h,u.canvasScale=a(d,u.containerWidth,u.containerHeight,u.canvasWidth,u.canvasHeight),g.width=u.canvasWidth,g.height=u.canvasHeight,g.style.transform=`scale(${u.canvasScale})`}),window.dispatchEvent(new Event("resize")),{get dpr(){return u.dpr},get containerWidth(){return u.containerWidth},get containerHeight(){return u.containerHeight},get canvasWidth(){return u.canvasWidth},get canvasHeight(){return u.canvasHeight},get canvasScale(){return u.canvasScale},context:l}}
},{"../../../lib/core/dom":"jwVQ","../../../lib/core/math":"qZBz"}],"LZDb":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e,n){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,n))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(t=>(console.warn(s,t),i(e,n))):i(e,n)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"cNZx":[function(require,module,exports) {
module.exports="/12_wasm_particles_bg.715d11ca.wasm";
},{}],"tqsK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.update=v,exports.draw=S,exports.__wbindgen_throw=exports.__wbindgen_debug_string=exports.__wbg_randomFillSync_d5bd2d655fdf256a=exports.__wbg_getRandomValues_f5e14ab7ac8e995d=exports.__wbg_getRandomValues_a3d34b4fee3c2869=exports.__wbg_crypto_968f1772287e2df0=exports.__wbg_require_604837428532a733=exports.__wbg_self_1b7a39e3a92c949c=exports.__wbindgen_is_undefined=exports.__wbg_translate_995449d37efa9be6=exports.__wbg_rotate_67312d380e6bfe41=exports.__wbg_save_adc15597ea9ca2d1=exports.__wbg_restore_d8b8a7523e90d7da=exports.__wbg_fillRect_cececda617224b84=exports.__wbg_arc_0185cf2160d3de9d=exports.__wbg_fill_f4f9d112ed7e3042=exports.__wbg_beginPath_3a12d0ba9db8e708=exports.__wbg_setfillStyle_75dc599fc5bda8da=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_string_new=exports.__wbindgen_object_drop_ref=void 0;var e=n(require("./12_wasm_particles_bg.wasm"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t();if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in e)if(Object.prototype.hasOwnProperty.call(e,_)){var c=o?Object.getOwnPropertyDescriptor(e,_):null;c&&(c.get||c.set)?Object.defineProperty(r,_,c):r[_]=e[_]}return r.default=e,n&&n.set(e,r),r}const r=new Array(32).fill(void 0);function o(e){return r[e]}r.push(void 0,null,!0,!1);let _=r.length;function c(e){e<36||(r[e]=_,_=e)}function s(e){const t=o(e);return c(e),t}const i="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let f=new i("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let u=null;function a(){return null!==u&&u.buffer===e.memory.buffer||(u=new Uint8Array(e.memory.buffer)),u}function d(e,t){return f.decode(a().subarray(e,e+t))}function l(e){_===r.length&&r.push(r.length+1);const t=_;return _=r[t],r[t]=e,t}function b(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=b(e[0]));for(let r=1;r<t;r++)n+=", "+b(e[r]);return n+="]"}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if("Object"==(r=n[1]))try{return"Object("+JSON.stringify(e)+")"}catch(o){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}let g=0;const p="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let w=new p("utf-8");const x="function"==typeof w.encodeInto?function(e,t){return w.encodeInto(e,t)}:function(e,t){const n=w.encode(e);return t.set(n),{read:e.length,written:n.length}};function y(e,t,n){if(void 0===n){const n=w.encode(e),r=t(n.length);return a().subarray(r,r+n.length).set(n),g=n.length,r}let r=e.length,o=t(r);const _=a();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;_[o+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),o=n(o,r,r=c+3*e.length);const t=a().subarray(o+c,o+r);c+=x(e,t).written}return g=c,o}let m=null;function h(){return null!==m&&m.buffer===e.memory.buffer||(m=new Int32Array(e.memory.buffer)),m}function v(t){e.update(t)}let j=32;function O(e){if(1==j)throw new Error("out of js stack");return r[--j]=e,j}function S(t,n,o){try{e.draw(O(t),n,o)}finally{r[j++]=void 0}}function P(t){return function(){try{return t.apply(this,arguments)}catch(n){e.__wbindgen_exn_store(l(n))}}}function R(e,t){return a().subarray(e/1,e/1+t)}const k=function(e){s(e)};exports.__wbindgen_object_drop_ref=k;const E=function(e,t){return l(d(e,t))};exports.__wbindgen_string_new=E;const $=function(){return l(new Error)};exports.__wbg_new_59cb74e423758ede=$;const q=function(t,n){var r=y(o(n).stack,e.__wbindgen_malloc,e.__wbindgen_realloc),_=g;h()[t/4+1]=_,h()[t/4+0]=r};exports.__wbg_stack_558ba5917b466edd=q;const A=function(t,n){try{console.error(d(t,n))}finally{e.__wbindgen_free(t,n)}};exports.__wbg_error_4bb6c2a97407129a=A;const T=function(e,t){o(e).fillStyle=o(t)};exports.__wbg_setfillStyle_75dc599fc5bda8da=T;const V=function(e){o(e).beginPath()};exports.__wbg_beginPath_3a12d0ba9db8e708=V;const D=function(e){o(e).fill()};exports.__wbg_fill_f4f9d112ed7e3042=D;const F=P(function(e,t,n,r,_,c){o(e).arc(t,n,r,_,c)});exports.__wbg_arc_0185cf2160d3de9d=F;const M=function(e,t,n,r,_){o(e).fillRect(t,n,r,_)};exports.__wbg_fillRect_cececda617224b84=M;const I=function(e){o(e).restore()};exports.__wbg_restore_d8b8a7523e90d7da=I;const W=function(e){o(e).save()};exports.__wbg_save_adc15597ea9ca2d1=W;const B=P(function(e,t){o(e).rotate(t)});exports.__wbg_rotate_67312d380e6bfe41=B;const C=P(function(e,t,n){o(e).translate(t,n)});exports.__wbg_translate_995449d37efa9be6=C;const J=function(e){return void 0===o(e)};exports.__wbindgen_is_undefined=J;const N=P(function(){return l(self.self)});exports.__wbg_self_1b7a39e3a92c949c=N;const U=function(e,t){return l(require(d(e,t)))};exports.__wbg_require_604837428532a733=U;const z=function(e){return l(o(e).crypto)};exports.__wbg_crypto_968f1772287e2df0=z;const G=function(e){return l(o(e).getRandomValues)};exports.__wbg_getRandomValues_a3d34b4fee3c2869=G;const H=function(e,t,n){o(e).getRandomValues(R(t,n))};exports.__wbg_getRandomValues_f5e14ab7ac8e995d=H;const K=function(e,t,n){o(e).randomFillSync(R(t,n))};exports.__wbg_randomFillSync_d5bd2d655fdf256a=K;const L=function(t,n){var r=y(b(o(n)),e.__wbindgen_malloc,e.__wbindgen_realloc),_=g;h()[t/4+1]=_,h()[t/4+0]=r};exports.__wbindgen_debug_string=L;const Q=function(e,t){throw new Error(d(e,t))};exports.__wbindgen_throw=Q;
},{"./12_wasm_particles_bg.wasm":"cNZx"}],"a9nw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={};exports.default=a;var r=o(require("./12_wasm_particles_bg.wasm")),t=require("./12_wasm_particles_bg.js");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(t,a,u):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}function a(e){return load(e,{"./12_wasm_particles.js":{}}).then(e=>(r=function(){throw new Error('"wasm" is read-only.')}(),{}))}Object.keys(t).forEach(function(r){"default"!==r&&"__esModule"!==r&&(Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(exports,r,{enumerable:!0,get:function(){return t[r]}}))});
},{"./12_wasm_particles_bg.wasm":"cNZx","./12_wasm_particles_bg.js":"tqsK"}],"b3dD":[function(require,module,exports) {
"use strict";var e=r(require("../pkg/12_wasm_particles.js"));function r(e){return e&&e.__esModule?e:{default:e}}module.exports=(0,e.default)(require("../pkg/12_wasm_particles_bg.wasm"));
},{"../pkg/wasm-loader.js":"LZDb","../pkg/12_wasm_particles.js":"a9nw","../pkg/12_wasm_particles_bg.wasm":"cNZx"}],"RYid":[function(require,module,exports) {

},{}],"XgMn":[function(require,module,exports) {

},{"../../src/styles/base.css":"RYid","../../src/styles/cover.css":"RYid"}],"Ymn5":[function(require,module,exports) {
"use strict";var e=require("./screen"),r=require("./lib.rs");require("./style.css");var i=require("../../../lib/core/dom"),t=require("../../../lib/core/math");const c=(0,e.screen)(),s=1e3/60;let a=-1,n=0,u=0,o=0,l=0,q=0;function d(e){for(a=(0,i.rAF)(d),q=(l=e-n)-u,u=l,o+=q,o=(0,t.min)(o,1e3);o>=s;)(0,r.update)(l),o-=s;(0,r.draw)(c.context,c.canvasWidth,c.canvasHeight)}(0,i.rAF)(e=>{-1===a&&(a=(0,i.rAF)(d),n=e,u=0)});
},{"./screen":"JzCA","./lib.rs":"b3dD","./style.css":"XgMn","../../../lib/core/dom":"jwVQ","../../../lib/core/math":"qZBz"}],0:[function(require,module,exports) {
function cacheReplace(id, mod) {
  // replace the entry in the cache with the loaded wasm module
  module.bundle.cache[id] = null;
  module.bundle.register(id, mod);
}

Promise.all([
  require("./lib.rs").then(wasm => cacheReplace("b3dD", wasm))
]).then(() => {
  require("./entry.ts");
});

},{"./lib.rs":"b3dD","./entry.ts":"Ymn5"}]},{},[0], null)
//# sourceMappingURL=/entry.739a6867.js.map