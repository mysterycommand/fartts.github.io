parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jwVQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.el=o,exports.on=n,exports.off=i,exports.dpr=exports.cAF=exports.rAF=void 0;const{requestAnimationFrame:e,cancelAnimationFrame:r,devicePixelRatio:t}=window;function o(e){return document.querySelector(e)}function n(e,r){return window.addEventListener(e,r)}function i(e,r){return window.removeEventListener(e,r)}exports.dpr=t,exports.cAF=r,exports.rAF=e;
},{}],"YeXx":[function(require,module,exports) {
var define;
var t;!function(t,n,e){function s(t){var n,e=this,s=(n=4022871197,function(t){t=String(t);for(var e=0;e<t.length;e++){var s=.02519603282416938*(n+=t.charCodeAt(e));s-=n=s>>>0,n=(s*=n)>>>0,n+=4294967296*(s-=n)}return 2.3283064365386963e-10*(n>>>0)});e.next=function(){var t=2091639*e.s0+2.3283064365386963e-10*e.c;return e.s0=e.s1,e.s1=e.s2,e.s2=t-(e.c=0|t)},e.c=1,e.s0=s(" "),e.s1=s(" "),e.s2=s(" "),e.s0-=s(t),e.s0<0&&(e.s0+=1),e.s1-=s(t),e.s1<0&&(e.s1+=1),e.s2-=s(t),e.s2<0&&(e.s2+=1),s=null}function r(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function u(t,n){var e=new s(t),u=n&&n.state,o=e.next;return o.int32=function(){return 4294967296*e.next()|0},o.double=function(){return o()+1.1102230246251565e-16*(2097152*o()|0)},o.quick=o,u&&("object"==typeof u&&r(u,e),o.state=function(){return r(e,{})}),o}n&&n.exports?n.exports=u:e&&e.amd?e(function(){return u}):this.alea=u}(0,"object"==typeof module&&module,"function"==typeof t&&t);
},{}],"ARKG":[function(require,module,exports) {
var define;
var t;!function(t,n,e){function r(t){var n=this,e="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function u(t,n){var e=new r(t),u=n&&n.state,x=function(){return(e.next()>>>0)/4294967296};return x.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},x.int32=e.next,x.quick=x,u&&("object"==typeof u&&o(u,e),x.state=function(){return o(e,{})}),x}n&&n.exports?n.exports=u:e&&e.amd?e(function(){return u}):this.xor128=u}(0,"object"==typeof module&&module,"function"==typeof t&&t);
},{}],"wlgW":[function(require,module,exports) {
var define;
var t;!function(t,n,e){function o(t){var n=this,e="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;for(var o=0;o<e.length+64;o++)n.x^=0|e.charCodeAt(o),o==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function r(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function u(t,n){var e=new o(t),u=n&&n.state,x=function(){return(e.next()>>>0)/4294967296};return x.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},x.int32=e.next,x.quick=x,u&&("object"==typeof u&&r(u,e),x.state=function(){return r(e,{})}),x}n&&n.exports?n.exports=u:e&&e.amd?e(function(){return u}):this.xorwow=u}(0,"object"==typeof module&&module,"function"==typeof t&&t);
},{}],"epaa":[function(require,module,exports) {
var define;
var n;!function(n,t,e){function r(n){var t=this;t.next=function(){var n,e,r=t.x,o=t.i;return n=r[o],e=(n^=n>>>7)^n<<24,e^=(n=r[o+1&7])^n>>>10,e^=(n=r[o+3&7])^n>>>3,e^=(n=r[o+4&7])^n<<7,n=r[o+7&7],e^=(n^=n<<13)^n<<9,r[o]=e,t.i=o+1&7,e},function(n,t){var e,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,e=0;e<t.length;++e)r[7&e]=r[7&e]<<15^t.charCodeAt(e)+r[e+1&7]<<13;for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);for(8==e?r[7]=-1:r[e],n.x=r,n.i=0,e=256;e>0;--e)n.next()}(t,n)}function o(n,t){return t.x=n.x.slice(),t.i=n.i,t}function i(n,t){null==n&&(n=+new Date);var e=new r(n),i=t&&t.state,u=function(){return(e.next()>>>0)/4294967296};return u.double=function(){do{var n=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},u.int32=e.next,u.quick=u,i&&(i.x&&o(i,e),u.state=function(){return o(e,{})}),u}t&&t.exports?t.exports=i:e&&e.amd?e(function(){return i}):this.xorshift7=i}(0,"object"==typeof module&&module,"function"==typeof n&&n);
},{}],"rz5j":[function(require,module,exports) {
var define;
var n;!function(n,t,e){function r(n){var t=this;t.next=function(){var n,e,r=t.w,o=t.X,u=t.i;return t.w=r=r+1640531527|0,e=o[u+34&127],n=o[u=u+1&127],e^=e<<13,n^=n<<17,e^=e>>>15,n^=n>>>12,e=o[u]=e^n,t.i=u,e+(r^r>>>16)|0},function(n,t){var e,r,o,u,i,c=[],f=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,f=Math.max(f,t.length)),o=0,u=-32;u<f;++u)t&&(r^=t.charCodeAt((u+32)%t.length)),0===u&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,u>=0&&(i=i+1640531527|0,o=0==(e=c[127&u]^=r+i)?o+1:0);for(o>=128&&(c[127&(t&&t.length||0)]=-1),o=127,u=512;u>0;--u)r=c[o+34&127],e=c[o=o+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,c[o]=r^e;n.w=i,n.X=c,n.i=o}(t,n)}function o(n,t){return t.i=n.i,t.w=n.w,t.X=n.X.slice(),t}function u(n,t){null==n&&(n=+new Date);var e=new r(n),u=t&&t.state,i=function(){return(e.next()>>>0)/4294967296};return i.double=function(){do{var n=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===n);return n},i.int32=e.next,i.quick=i,u&&(u.X&&o(u,e),i.state=function(){return o(e,{})}),i}t&&t.exports?t.exports=u:e&&e.amd?e(function(){return u}):this.xor4096=u}(0,"object"==typeof module&&module,"function"==typeof n&&n);
},{}],"2akq":[function(require,module,exports) {
var define;
var t;!function(t,n,e){function o(t){var n=this,e="";n.next=function(){var t=n.b,e=n.c,o=n.d,r=n.a;return t=t<<25^t>>>7^e,e=e-o|0,o=o<<24^o>>>8^r,r=r-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-o|0,n.d=o<<16^e>>>16^r,n.a=r-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):e+=t;for(var o=0;o<e.length+20;o++)n.b^=0|e.charCodeAt(o),n.next()}function r(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function u(t,n){var e=new o(t),u=n&&n.state,c=function(){return(e.next()>>>0)/4294967296};return c.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},c.int32=e.next,c.quick=c,u&&("object"==typeof u&&r(u,e),c.state=function(){return r(e,{})}),c}n&&n.exports?n.exports=u:e&&e.amd?e(function(){return u}):this.tychei=u}(0,"object"==typeof module&&module,"function"==typeof t&&t);
},{}],"7Zcg":[function(require,module,exports) {

},{}],"558V":[function(require,module,exports) {
var global = arguments[3];
var define;
var r,n=arguments[3];!function(n,t){var e,o=(0,eval)("this"),u=256,i=6,a="random",c=t.pow(u,i),f=t.pow(2,52),s=2*f,l=u-1;function p(r,l,p){var v=[],m=h(function r(n,t){var e,o=[],u=typeof n;if(t&&"object"==u)for(e in n)try{o.push(r(n[e],t-1))}catch(i){}return o.length?o:"string"==u?n:n+"\0"}((l=1==l?{entropy:!0}:l||{}).entropy?[r,d(n)]:null==r?function(){try{var r;return e&&(r=e.randomBytes)?r=r(u):(r=new Uint8Array(u),(o.crypto||o.msCrypto).getRandomValues(r)),d(r)}catch(a){var t=o.navigator,i=t&&t.plugins;return[+new Date,o,i,o.screen,d(n)]}}():r,3),v),j=new g(v),S=function(){for(var r=j.g(i),n=c,t=0;r<f;)r=(r+t)*u,n*=u,t=j.g(1);for(;r>=s;)r/=2,n/=2,t>>>=1;return(r+t)/n};return S.int32=function(){return 0|j.g(4)},S.quick=function(){return j.g(4)/4294967296},S.double=S,h(d(j.S),n),(l.pass||p||function(r,n,e,o){return o&&(o.S&&y(o,j),r.state=function(){return y(j,{})}),e?(t[a]=r,n):r})(S,m,"global"in l?l.global:this==t,l.state)}function g(r){var n,t=r.length,e=this,o=0,i=e.i=e.j=0,a=e.S=[];for(t||(r=[t++]);o<u;)a[o]=o++;for(o=0;o<u;o++)a[o]=a[i=l&i+r[o%t]+(n=a[o])],a[i]=n;(e.g=function(r){for(var n,t=0,o=e.i,i=e.j,a=e.S;r--;)n=a[o=l&o+1],t=t*u+a[l&(a[o]=a[i=l&i+n])+(a[i]=n)];return e.i=o,e.j=i,t})(u)}function y(r,n){return n.i=r.i,n.j=r.j,n.S=r.S.slice(),n}function h(r,n){for(var t,e=r+"",o=0;o<e.length;)n[l&o]=l&(t^=19*n[l&o])+e.charCodeAt(o++);return d(n)}function d(r){return String.fromCharCode.apply(0,r)}if(h(t.random(),n),"object"==typeof module&&module.exports){module.exports=p;try{e=require("crypto")}catch(v){}}else"function"==typeof r&&r.amd?r(function(){return p}):t["seed"+a]=p}([],Math);
},{"crypto":"7Zcg"}],"WI4f":[function(require,module,exports) {
var r=require("./lib/alea"),e=require("./lib/xor128"),i=require("./lib/xorwow"),o=require("./lib/xorshift7"),l=require("./lib/xor4096"),x=require("./lib/tychei"),u=require("./seedrandom");u.alea=r,u.xor128=e,u.xorwow=i,u.xorshift7=o,u.xor4096=l,u.tychei=x,module.exports=u;
},{"./lib/alea":"YeXx","./lib/xor128":"ARKG","./lib/xorwow":"wlgW","./lib/xorshift7":"epaa","./lib/xor4096":"rz5j","./lib/tychei":"2akq","./seedrandom":"558V"}],"qZBz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=w,exports.randomBool=y,exports.randomInt=_,exports.randomRange=F,exports.saw=M,exports.tri=g,exports.toDegrees=I,exports.toRadians=P,exports.isFinite=exports.ππ=exports.sqrt=exports.sin=exports.round=exports.pow=exports.π=exports.min=exports.max=exports.hypot=exports.floor=exports.cos=exports.ceil=exports.atan2=exports.acos=exports.abs=exports.random=void 0;var o=t(require("seedrandom"));function t(o){return o&&o.__esModule?o:{default:o}}const r="@fartts/fartts",e=(0,o.default)(r);exports.random=e;const{abs:s,acos:n,atan2:p,ceil:x,cos:i,floor:a,hypot:u,max:c,min:d,PI:f,pow:l,round:m,sin:b,sqrt:h}=Math;exports.sqrt=h,exports.sin=b,exports.round=m,exports.pow=l,exports.π=f,exports.min=d,exports.max=c,exports.hypot=u,exports.floor=a,exports.cos=i,exports.ceil=x,exports.atan2=p,exports.acos=n,exports.abs=s;const q=2*f;exports.ππ=q;const{isFinite:v}=Number;function w(o,t,r){return(1-r)*o+r*t}function y(){return 1===m(e())}function _(o,t){return m(void 0===t?F(0,o):F(o,t))}function F(o,t){return w(o,t,e())}function M(o){return o%q/f-1}function g(o){return 1-2*s(M(o))}function I(o){return 180*o/f}function P(o){return o*f/180}exports.isFinite=v;
},{"seedrandom":"WI4f"}],"xtaB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.screen=r;var e=require("../../lib/core/dom"),t=require("../../lib/core/math");function n(e,t,n,i=!1){e.addEventListener(t,n,i)}function i(e=1,t=0){return t%e==0?t:t+(e-t%e)}function a(e,n,i,a,c){switch(e){case"cover":return(0,t.max)(n/a,i/c);case"contain":return(0,t.min)(n/a,i/c)}}const c={containerSelector:"main",canvasSelector:"canvas",contextType:"2d",pixelScale:1,canvasSizing:"cover"};function r(t){const{containerSelector:r,canvasSelector:o,contextType:s,pixelScale:h,canvasSizing:d}=Object.assign({},c,t),v=(0,e.el)(r),g=(0,e.el)(o),l=g.getContext(s),u={dpr:window.devicePixelRatio,containerWidth:v.clientWidth,containerHeight:v.clientHeight,canvasWidth:g.width,canvasHeight:g.height,canvasScale:1,context:l};return n(window,"resize",()=>{u.containerWidth=v.clientWidth,u.containerHeight=v.clientHeight;const e=i(h,u.containerWidth),t=i(h,u.containerHeight);u.canvasWidth=e*u.dpr/h,u.canvasHeight=t*u.dpr/h,u.canvasScale=a(d,u.containerWidth,u.containerHeight,u.canvasWidth,u.canvasHeight),g.width=u.canvasWidth,g.height=u.canvasHeight,g.style.transform=`scale(${u.canvasScale})`}),window.dispatchEvent(new Event("resize")),{get dpr(){return u.dpr},get containerWidth(){return u.containerWidth},get containerHeight(){return u.containerHeight},get canvasWidth(){return u.canvasWidth},get canvasHeight(){return u.canvasHeight},get canvasScale(){return u.canvasScale},context:l}}
},{"../../lib/core/dom":"jwVQ","../../lib/core/math":"qZBz"}],"JfvS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__wbindgen_object_drop_ref=exports.__wbindgen_throw=exports.__wbindgen_jsval_eq=exports.__wbindgen_debug_string=exports.__wbindgen_is_undefined=exports.__wbindgen_string_new=exports.__wbg_randomFillSync_1b52c8482374c55b=exports.__wbg_require_6461b1e9a0d7c34a=exports.__wbg_getRandomValues_1ef11e888e5228e9=exports.__wbg_getRandomValues_1b4ba144162a5c9e=exports.__wbg_crypto_1e4302b85d4f64a2=exports.__wbg_self_ac379e780a0d8b94=exports.__wbg_call_f54d3a6dadb199ca=exports.__wbg_new_3a746f2619705add=exports.__widl_f_translate_CanvasRenderingContext2D=exports.__widl_f_rotate_CanvasRenderingContext2D=exports.__widl_f_save_CanvasRenderingContext2D=exports.__widl_f_restore_CanvasRenderingContext2D=exports.__widl_f_fill_rect_CanvasRenderingContext2D=exports.__widl_f_arc_CanvasRenderingContext2D=exports.__widl_f_set_fill_style_CanvasRenderingContext2D=exports.__widl_f_fill_CanvasRenderingContext2D=exports.__widl_f_begin_path_CanvasRenderingContext2D=exports.draw=exports.update=exports.default=void 0;var _=e(require("./pkg/lab_12_bg.wasm"));function e(_){return _&&_.__esModule?_:{default:_}}var t=_.default;exports.default=t;const n=_.default.update;exports.update=n;const a=_.default.draw;exports.draw=a;const d=_.default.__widl_f_begin_path_CanvasRenderingContext2D;exports.__widl_f_begin_path_CanvasRenderingContext2D=d;const s=_.default.__widl_f_fill_CanvasRenderingContext2D;exports.__widl_f_fill_CanvasRenderingContext2D=s;const o=_.default.__widl_f_set_fill_style_CanvasRenderingContext2D;exports.__widl_f_set_fill_style_CanvasRenderingContext2D=o;const r=_.default.__widl_f_arc_CanvasRenderingContext2D;exports.__widl_f_arc_CanvasRenderingContext2D=r;const l=_.default.__widl_f_fill_rect_CanvasRenderingContext2D;exports.__widl_f_fill_rect_CanvasRenderingContext2D=l;const i=_.default.__widl_f_restore_CanvasRenderingContext2D;exports.__widl_f_restore_CanvasRenderingContext2D=i;const g=_.default.__widl_f_save_CanvasRenderingContext2D;exports.__widl_f_save_CanvasRenderingContext2D=g;const f=_.default.__widl_f_rotate_CanvasRenderingContext2D;exports.__widl_f_rotate_CanvasRenderingContext2D=f;const w=_.default.__widl_f_translate_CanvasRenderingContext2D;exports.__widl_f_translate_CanvasRenderingContext2D=w;const x=_.default.__wbg_new_3a746f2619705add;exports.__wbg_new_3a746f2619705add=x;const b=_.default.__wbg_call_f54d3a6dadb199ca;exports.__wbg_call_f54d3a6dadb199ca=b;const p=_.default.__wbg_self_ac379e780a0d8b94;exports.__wbg_self_ac379e780a0d8b94=p;const c=_.default.__wbg_crypto_1e4302b85d4f64a2;exports.__wbg_crypto_1e4302b85d4f64a2=c;const u=_.default.__wbg_getRandomValues_1b4ba144162a5c9e;exports.__wbg_getRandomValues_1b4ba144162a5c9e=u;const C=_.default.__wbg_getRandomValues_1ef11e888e5228e9;exports.__wbg_getRandomValues_1ef11e888e5228e9=C;const v=_.default.__wbg_require_6461b1e9a0d7c34a;exports.__wbg_require_6461b1e9a0d7c34a=v;const R=_.default.__wbg_randomFillSync_1b52c8482374c55b;exports.__wbg_randomFillSync_1b52c8482374c55b=R;const D=_.default.__wbindgen_string_new;exports.__wbindgen_string_new=D;const m=_.default.__wbindgen_is_undefined;exports.__wbindgen_is_undefined=m;const y=_.default.__wbindgen_debug_string;exports.__wbindgen_debug_string=y;const j=_.default.__wbindgen_jsval_eq;exports.__wbindgen_jsval_eq=j;const q=_.default.__wbindgen_throw;exports.__wbindgen_throw=q;const h=_.default.__wbindgen_object_drop_ref;exports.__wbindgen_object_drop_ref=h;
},{"./pkg/lab_12_bg.wasm":"Iank"}],"c12K":[function(require,module,exports) {

},{"../styles/base.css":"7Zcg"}],"zaxb":[function(require,module,exports) {
"use strict";var e=require("./screen"),r=require("./lab-12/Cargo.toml");require("./style.css");var t=require("../../lib/core/dom"),i=require("../../lib/core/math");const a=(0,e.screen)(),c=1e3/60;let s=-1,n=0,o=0,u=0,l=0,q=0;function d(e){for(s=(0,t.rAF)(d),q=(l=e-n)-o,o=l,u+=q,u=(0,i.min)(u,1e3);u>=c;)(0,r.update)(l),u-=c;(0,r.draw)(a.context,a.canvasWidth,a.canvasHeight)}(0,t.rAF)(e=>{-1===s&&(s=(0,t.rAF)(d),n=e,o=0)});
},{"./screen":"xtaB","./lab-12/Cargo.toml":"JfvS","./style.css":"c12K","../../lib/core/dom":"jwVQ","../../lib/core/math":"qZBz"}],"ARet":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"yU0Q":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ARet"}],"waQW":[function(require,module,exports) {
var __dirname = "/home/travis/build/fartts/fartts/node_modules/parcel-plugin-wasm.rs";
var n,t="/home/travis/build/fartts/fartts/node_modules/parcel-plugin-wasm.rs";const e={update:function(t){return n.update(t)}},r=new Array(32);r.fill(void 0),r.push(void 0,null,!0,!1);let i=32;function o(n){if(1==i)throw new Error("out of js stack");return r[--i]=n,i}function u(n){return r[n]}e.draw=function(t,e,u){try{return n.draw(o(t),e,u)}finally{r[i++]=void 0}},e.__widl_f_begin_path_CanvasRenderingContext2D=function(n){u(n).beginPath()},e.__widl_f_fill_CanvasRenderingContext2D=function(n){u(n).fill()},e.__widl_f_set_fill_style_CanvasRenderingContext2D=function(n,t){u(n).fillStyle=u(t)};let _=null;function a(){return null!==_&&_.buffer===n.memory.buffer||(_=new Uint32Array(n.memory.buffer)),_}let c=r.length;function f(n){c===r.length&&r.push(r.length+1);const t=c;return c=r[t],r[t]=n,t}function l(n,t){const e=a();e[n/4]=1,e[n/4+1]=f(t)}e.__widl_f_arc_CanvasRenderingContext2D=function(n,t,e,r,i,o,_){try{u(n).arc(t,e,r,i,o)}catch(a){l(_,a)}},e.__widl_f_fill_rect_CanvasRenderingContext2D=function(n,t,e,r,i){u(n).fillRect(t,e,r,i)},e.__widl_f_restore_CanvasRenderingContext2D=function(n){u(n).restore()},e.__widl_f_save_CanvasRenderingContext2D=function(n){u(n).save()},e.__widl_f_rotate_CanvasRenderingContext2D=function(n,t,e){try{u(n).rotate(t)}catch(r){l(e,r)}},e.__widl_f_translate_CanvasRenderingContext2D=function(n,t,e,r){try{u(n).translate(t,e)}catch(i){l(r,i)}};let s=new TextDecoder("utf-8"),d=null;function b(){return null!==d&&d.buffer===n.memory.buffer||(d=new Uint8Array(n.memory.buffer)),d}function g(n,t){return s.decode(b().subarray(n,n+t))}function w(n,t){return b().subarray(n/1,n/1+t)}e.__wbg_new_3a746f2619705add=function(n,t){let e=g(n,t);return f(new Function(e))},e.__wbg_call_f54d3a6dadb199ca=function(n,t){return f(u(n).call(u(t)))},e.__wbg_self_ac379e780a0d8b94=function(n){return f(u(n).self)},e.__wbg_crypto_1e4302b85d4f64a2=function(n){return f(u(n).crypto)},e.__wbg_getRandomValues_1b4ba144162a5c9e=function(n){return f(u(n).getRandomValues)},e.__wbg_getRandomValues_1ef11e888e5228e9=function(n,t,e){let r=w(t,e);u(n).getRandomValues(r)},e.__wbg_require_6461b1e9a0d7c34a=function(n,t){let e=g(n,t);return f(require(e))},e.__wbg_randomFillSync_1b52c8482374c55b=function(n,t,e){let r=w(t,e);u(n).randomFillSync(r)},e.__wbindgen_string_new=function(n,t){return f(g(n,t))},e.__wbindgen_is_undefined=function(n){return void 0===u(n)?1:0};let y,m=new TextEncoder("utf-8"),h=0;function p(n){n<36||(r[n]=c,c=n)}function v(t){const r=fetch(t);let i;return(i="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(r,{"./lab_12":e}):r.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{"./lab_12":e}))).then(({instance:t})=>{n=v.wasm=t.exports})}function C(r){const i=require("fs");return new Promise(function(n,e){i.readFile(t+r,function(t,r){t?e(t):n(r.buffer)})}).then(n=>WebAssembly.instantiate(n,{"./lab_12":e})).then(({instance:t})=>{n=v.wasm=t.exports})}y="function"==typeof m.encodeInto?function(t){let e=t.length,r=n.__wbindgen_malloc(e),i=0;for(;;){const o=b().subarray(r+i,r+e),{read:u,written:_}=m.encodeInto(t,o);if(i+=_,0===(t=t.substring(u)).length)break;r=n.__wbindgen_realloc(r,e,2*e),e*=2}return h=i,r}:function(t){const e=m.encode(t),r=n.__wbindgen_malloc(e.length);return b().set(e,r),h=e.length,r},e.__wbindgen_debug_string=function(n,t){const e=n=>{const t=typeof n;if("number"==t||"boolean"==t||null==n)return`${n}`;if("string"==t)return`"${n}"`;if("symbol"==t){const t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=n.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(n)){const t=n.length;let r="[";t>0&&(r+=e(n[0]));for(let i=1;i<t;i++)r+=", "+e(n[i]);return r+="]"}const i=/\[object ([^\]]+)\]/.exec(r.call(n));let o;if(!(i.length>1))return r.call(n);if("Object"==(o=i[1]))try{return"Object("+JSON.stringify(n)+")"}catch(u){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n        ${n.stack}`:o},r=Object.prototype.toString,i=u(n),o=e(i),_=y(o);return a()[t/4]=h,_},e.__wbindgen_jsval_eq=function(n,t){return u(n)===u(t)?1:0},e.__wbindgen_throw=function(n,t){throw new Error(g(n,t))},e.__wbindgen_object_drop_ref=function(n){p(n)};const x=Object.assign(v,e);module.exports=function(n){return x(n).then(()=>e)};
},{"fs":"7Zcg"}],0:[function(require,module,exports) {
var b=require("yU0Q");b.register("wasm",require("waQW"));b.load([["lab_12_bg.e09e51b3.wasm","Iank"]]).then(function(){require("zaxb");});
},{}]},{},[0], null)
//# sourceMappingURL=/entry.bffbf915.js.map