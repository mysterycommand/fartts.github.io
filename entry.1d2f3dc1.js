parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jwVQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.el=o,exports.on=n,exports.off=i,exports.dpr=exports.cAF=exports.rAF=void 0;const{requestAnimationFrame:e,cancelAnimationFrame:t,devicePixelRatio:r}=window;function o(e){const t=document.querySelector(e);if(!t)throw new Error(`Couldn't get "${e}" element`);return t}function n(e,t){return window.addEventListener(e,t)}function i(e,t){return window.removeEventListener(e,t)}exports.dpr=r,exports.cAF=t,exports.rAF=e;
},{}],"qZBz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=h,exports.saw=w,exports.tri=y,exports.toDegrees=q,exports.toRadians=F,exports.isFinite=exports.ππ=exports.sqrt=exports.sin=exports.round=exports.random=exports.pow=exports.π=exports.min=exports.max=exports.hypot=exports.floor=exports.cos=exports.ceil=exports.atan2=exports.acos=exports.abs=void 0;const{abs:o,acos:t,atan2:r,ceil:s,cos:e,floor:p,hypot:x,max:n,min:i,PI:a,pow:c,random:u,round:d,sin:m,sqrt:f}=Math;exports.sqrt=f,exports.sin=m,exports.round=d,exports.random=u,exports.pow=c,exports.π=a,exports.min=i,exports.max=n,exports.hypot=x,exports.floor=p,exports.cos=e,exports.ceil=s,exports.atan2=r,exports.acos=t,exports.abs=o;const l=2*a;exports.ππ=l;const{isFinite:b}=Number;function h(o,t,r){return(1-r)*o+r*t}function w(o){return o%l/a-1}function y(t){return 1-2*o(w(t))}function q(o){return 180*o/a}function F(o){return o*a/180}exports.isFinite=b;
},{}],"JzCA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.screen=r;var e=require("../../../lib/core/dom"),t=require("../../../lib/core/math");function n(e,t,n,i=!1){e.addEventListener(t,n,i)}function i(e=1,t=0){return t%e==0?t:t+(e-t%e)}function a(e,n,i,a,c){switch(e){case"cover":return(0,t.max)(n/a,i/c);case"contain":return(0,t.min)(n/a,i/c)}}const c={containerSelector:"main",canvasSelector:"canvas",contextType:"2d",pixelScale:1,canvasSizing:"cover"};function r(t){const{containerSelector:r,canvasSelector:o,contextType:s,pixelScale:h,canvasSizing:d}=Object.assign(Object.assign({},c),t),v=(0,e.el)(r),g=(0,e.el)(o),l=g.getContext(s),u={dpr:window.devicePixelRatio,containerWidth:v.clientWidth,containerHeight:v.clientHeight,canvasWidth:g.width,canvasHeight:g.height,canvasScale:1,context:l};return n(window,"resize",()=>{u.containerWidth=v.clientWidth,u.containerHeight=v.clientHeight;const e=i(h,u.containerWidth),t=i(h,u.containerHeight);u.canvasWidth=e*u.dpr/h,u.canvasHeight=t*u.dpr/h,u.canvasScale=a(d,u.containerWidth,u.containerHeight,u.canvasWidth,u.canvasHeight),g.width=u.canvasWidth,g.height=u.canvasHeight,g.style.transform=`scale(${u.canvasScale})`}),window.dispatchEvent(new Event("resize")),{get dpr(){return u.dpr},get containerWidth(){return u.containerWidth},get containerHeight(){return u.containerHeight},get canvasWidth(){return u.canvasWidth},get canvasHeight(){return u.canvasHeight},get canvasScale(){return u.canvasScale},context:l}}
},{"../../../lib/core/dom":"jwVQ","../../../lib/core/math":"qZBz"}],"LZDb":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e,n){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,n))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(t=>(console.warn(s,t),i(e,n))):i(e,n)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"VeqN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.update=h,exports.draw=R,exports.default=W,exports.__wbindgen_throw=exports.__wbindgen_debug_string=exports.__wbg_randomFillSync_d5bd2d655fdf256a=exports.__wbg_getRandomValues_f5e14ab7ac8e995d=exports.__wbg_getRandomValues_a3d34b4fee3c2869=exports.__wbg_crypto_968f1772287e2df0=exports.__wbg_require_604837428532a733=exports.__wbg_self_1b7a39e3a92c949c=exports.__wbindgen_is_undefined=exports.__wbg_translate_882094cd23d918c7=exports.__wbg_rotate_43a9ff93afb49de2=exports.__wbg_save_0bee05b6d23ded8e=exports.__wbg_restore_28d621c4540ffa99=exports.__wbg_fillRect_45e261a0d8e4d566=exports.__wbg_arc_a76d718c10697300=exports.__wbg_fill_591769697a512b9a=exports.__wbg_beginPath_3fa944f9f04ab627=exports.__wbg_setfillStyle_379229e7549f4190=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_string_new=exports.__wbindgen_object_drop_ref=void 0;var e=require("./wasm-loader.js");let t;const n=new Array(32).fill(void 0);function _(e){return n[e]}n.push(void 0,null,!0,!1);let r=n.length;function o(e){e<36||(n[e]=r,r=e)}function c(e){const t=_(e);return o(e),t}const s="undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder;let a=new s("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let f=null;function b(){return null!==f&&f.buffer===t.memory.buffer||(f=new Uint8Array(t.memory.buffer)),f}function i(e,t){return a.decode(b().subarray(e,e+t))}function d(e){r===n.length&&n.push(n.length+1);const t=r;return r=n[t],n[t]=e,t}function u(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=u(e[0]));for(let _=1;_<t;_++)n+=", "+u(e[_]);return n+="]"}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let _;if(!(n.length>1))return toString.call(e);if("Object"==(_=n[1]))try{return"Object("+JSON.stringify(e)+")"}catch(r){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:_}let l=0;const g="undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder;let w=new g("utf-8");const p="function"==typeof w.encodeInto?function(e,t){return w.encodeInto(e,t)}:function(e,t){const n=w.encode(e);return t.set(n),{read:e.length,written:n.length}};function x(e,t,n){if(void 0===n){const n=w.encode(e),_=t(n.length);return b().subarray(_,_+n.length).set(n),l=n.length,_}let _=e.length,r=t(_);const o=b();let c=0;for(;c<_;c++){const t=e.charCodeAt(c);if(t>127)break;o[r+c]=t}if(c!==_){0!==c&&(e=e.slice(c)),r=n(r,_,_=c+3*e.length);const t=b().subarray(r+c,r+_);c+=p(e,t).written}return l=c,r}let y=null;function m(){return null!==y&&y.buffer===t.memory.buffer||(y=new Int32Array(t.memory.buffer)),y}function h(e){t.update(e)}let v=32;function S(e){if(1==v)throw new Error("out of js stack");return n[--v]=e,v}function R(e,_,r){try{t.draw(S(e),_,r)}finally{n[v++]=void 0}}function j(e){return function(){try{return e.apply(this,arguments)}catch(n){t.__wbindgen_exn_store(d(n))}}}function V(e,t){return b().subarray(e/1,e/1+t)}const k=function(e){c(e)};exports.__wbindgen_object_drop_ref=k;const q=function(e,t){return d(i(e,t))};exports.__wbindgen_string_new=q;const E=function(){return d(new Error)};exports.__wbg_new_59cb74e423758ede=E;const $=function(e,n){var r=x(_(n).stack,t.__wbindgen_malloc,t.__wbindgen_realloc),o=l;m()[e/4+1]=o,m()[e/4+0]=r};exports.__wbg_stack_558ba5917b466edd=$;const A=function(e,n){try{console.error(i(e,n))}finally{t.__wbindgen_free(e,n)}};exports.__wbg_error_4bb6c2a97407129a=A;const F=function(e,t){_(e).fillStyle=_(t)};exports.__wbg_setfillStyle_379229e7549f4190=F;const O=function(e){_(e).beginPath()};exports.__wbg_beginPath_3fa944f9f04ab627=O;const T=function(e){_(e).fill()};exports.__wbg_fill_591769697a512b9a=T;const P=j(function(e,t,n,r,o,c){_(e).arc(t,n,r,o,c)});exports.__wbg_arc_a76d718c10697300=P;const D=function(e,t,n,r,o){_(e).fillRect(t,n,r,o)};exports.__wbg_fillRect_45e261a0d8e4d566=D;const I=function(e){_(e).restore()};exports.__wbg_restore_28d621c4540ffa99=I;const M=function(e){_(e).save()};exports.__wbg_save_0bee05b6d23ded8e=M;const B=j(function(e,t){_(e).rotate(t)});exports.__wbg_rotate_43a9ff93afb49de2=B;const C=j(function(e,t,n){_(e).translate(t,n)});exports.__wbg_translate_882094cd23d918c7=C;const J=function(e){return void 0===_(e)};exports.__wbindgen_is_undefined=J;const N=j(function(){return d(self.self)});exports.__wbg_self_1b7a39e3a92c949c=N;const U=function(e,t){return d(require(i(e,t)))};exports.__wbg_require_604837428532a733=U;const z=function(e){return d(_(e).crypto)};exports.__wbg_crypto_968f1772287e2df0=z;const G=function(e){return d(_(e).getRandomValues)};exports.__wbg_getRandomValues_a3d34b4fee3c2869=G;const H=function(e,t,n){_(e).getRandomValues(V(t,n))};exports.__wbg_getRandomValues_f5e14ab7ac8e995d=H;const K=function(e,t,n){_(e).randomFillSync(V(t,n))};exports.__wbg_randomFillSync_d5bd2d655fdf256a=K;const L=function(e,n){var r=x(u(_(n)),t.__wbindgen_malloc,t.__wbindgen_realloc),o=l;m()[e/4+1]=o,m()[e/4+0]=r};exports.__wbindgen_debug_string=L;const Q=function(e,t){throw new Error(i(e,t))};function W(n){return(0,e.load)(n,{"./wasm_particles_bg.js":{__wbindgen_object_drop_ref:k,__wbindgen_string_new:q,__wbg_new_59cb74e423758ede:E,__wbg_stack_558ba5917b466edd:$,__wbg_error_4bb6c2a97407129a:A,__wbg_setfillStyle_379229e7549f4190:F,__wbg_beginPath_3fa944f9f04ab627:O,__wbg_fill_591769697a512b9a:T,__wbg_arc_a76d718c10697300:P,__wbg_fillRect_45e261a0d8e4d566:D,__wbg_restore_28d621c4540ffa99:I,__wbg_save_0bee05b6d23ded8e:M,__wbg_rotate_43a9ff93afb49de2:B,__wbg_translate_882094cd23d918c7:C,__wbindgen_is_undefined:J,__wbg_self_1b7a39e3a92c949c:N,__wbg_require_604837428532a733:U,__wbg_crypto_968f1772287e2df0:z,__wbg_getRandomValues_a3d34b4fee3c2869:G,__wbg_getRandomValues_f5e14ab7ac8e995d:H,__wbg_randomFillSync_d5bd2d655fdf256a:K,__wbindgen_debug_string:L,__wbindgen_throw:Q}}).then(e=>(t=e,{update:h,draw:R}))}exports.__wbindgen_throw=Q;
},{"./wasm-loader.js":"LZDb"}],"JJgM":[function(require,module,exports) {
module.exports="/wasm_particles_bg.87023e85.wasm";
},{}],"b3dD":[function(require,module,exports) {
"use strict";var e=r(require("../pkg/wasm_particles_bg.js"));function r(e){return e&&e.__esModule?e:{default:e}}module.exports=(0,e.default)(require("../pkg/wasm_particles_bg.wasm"));
},{"../pkg/wasm-loader.js":"LZDb","../pkg/wasm_particles_bg.js":"VeqN","../pkg/wasm_particles_bg.wasm":"JJgM"}],"RYid":[function(require,module,exports) {

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
//# sourceMappingURL=/entry.1d2f3dc1.js.map