parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function E(a){return a&&a.__esModule?{d:a.default}:{d:a}}var W=window,t=W.requestAnimationFrame,aa=W.cancelAnimationFrame;function v($){return document.querySelector($)}function $($,e){return window.addEventListener($,e)}aa,t,v,$;var b={};var ka=function(){var t={exports:this};return function(t,n,s){function r(t){var n,s=this,r=(n=4022871197,function(t){t=t.toString();for(var s=0;s<t.length;s++){var r=.02519603282416938*(n+=t.charCodeAt(s));r-=n=r>>>0,n=(r*=n)>>>0,n+=4294967296*(r-=n)}return 2.3283064365386963e-10*(n>>>0)});s.next=function(){var t=2091639*s.s0+2.3283064365386963e-10*s.c;return s.s0=s.s1,s.s1=s.s2,s.s2=t-(s.c=0|t)},s.c=1,s.s0=r(" "),s.s1=r(" "),s.s2=r(" "),s.s0-=r(t),s.s0<0&&(s.s0+=1),s.s1-=r(t),s.s1<0&&(s.s1+=1),s.s2-=r(t),s.s2<0&&(s.s2+=1),r=null}function e(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function o(t,n){var s=new r(t),o=n&&n.state,u=s.next;return u.int32=function(){return 4294967296*s.next()|0},u.double=function(){return u()+1.1102230246251565e-16*(2097152*u()|0)},u.quick=u,o&&("object"==typeof o&&e(o,s),u.state=function(){return e(s,{})}),u}n&&n.exports?n.exports=o:s&&s.amd?s(function(){return o}):this.alea=o}(0,"object"==typeof t&&t,!1),t.exports}.call({});var Ta=function(){var t={exports:this};return function(t,n,r){function e(t){var n=this,r="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:r+=t;for(var e=0;e<r.length+64;e++)n.x^=0|r.charCodeAt(e),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function u(t,n){var r=new e(t),u=n&&n.state,x=function(){return(r.next()>>>0)/4294967296};return x.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},x.int32=r.next,x.quick=x,u&&("object"==typeof u&&o(u,r),x.state=function(){return o(r,{})}),x}n&&n.exports?n.exports=u:r&&r.amd?r(function(){return u}):this.xor128=u}(0,"object"==typeof t&&t,!1),t.exports}.call({});var eb=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),r==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function x(t,n){var e=new r(t),x=n&&n.state,u=function(){return(e.next()>>>0)/4294967296};return u.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=e.next,u.quick=u,x&&("object"==typeof x&&o(x,e),u.state=function(){return o(e,{})}),u}n&&n.exports?n.exports=x:e&&e.amd?e(function(){return x}):this.xorwow=x}(0,"object"==typeof t&&t,!1),t.exports}.call({});var ib=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this;n.next=function(){var t,e,r=n.x,o=n.i;return t=r[o],e=(t^=t>>>7)^t<<24,e^=(t=r[o+1&7])^t>>>10,e^=(t=r[o+3&7])^t>>>3,e^=(t=r[o+4&7])^t<<7,t=r[o+7&7],e^=(t^=t<<13)^t<<9,r[o]=e,n.i=o+1&7,e},function(t,n){var e,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,e=0;e<n.length;++e)r[7&e]=r[7&e]<<15^n.charCodeAt(e)+r[e+1&7]<<13;for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);for(8==e?r[7]=-1:r[e],t.x=r,t.i=0,e=256;e>0;--e)t.next()}(n,t)}function o(t,n){return n.x=t.x.slice(),n.i=t.i,n}function i(t,n){null==t&&(t=+new Date);var e=new r(t),i=n&&n.state,u=function(){return(e.next()>>>0)/4294967296};return u.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=e.next,u.quick=u,i&&(i.x&&o(i,e),u.state=function(){return o(e,{})}),u}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorshift7=i}(0,"object"==typeof t&&t,!1),t.exports}.call({});var ub=function(){var t={exports:this};return function(t,n,r){function e(t){var n=this;n.next=function(){var t,r,e=n.w,o=n.X,i=n.i;return n.w=e=e+1640531527|0,r=o[i+34&127],t=o[i=i+1&127],r^=r<<13,t^=t<<17,r^=r>>>15,t^=t>>>12,r=o[i]=r^t,n.i=i,r+(e^e>>>16)|0},function(t,n){var r,e,o,i,u,c=[],a=128;for(n===(0|n)?(e=n,n=null):(n+="\0",e=0,a=Math.max(a,n.length)),o=0,i=-32;i<a;++i)n&&(e^=n.charCodeAt((i+32)%n.length)),0===i&&(u=e),e^=e<<10,e^=e>>>15,e^=e<<4,e^=e>>>13,i>=0&&(u=u+1640531527|0,o=0==(r=c[127&i]^=e+u)?o+1:0);for(o>=128&&(c[127&(n&&n.length||0)]=-1),o=127,i=512;i>0;--i)e=c[o+34&127],r=c[o=o+1&127],e^=e<<13,r^=r<<17,e^=e>>>15,r^=r>>>12,c[o]=e^r;t.w=u,t.X=c,t.i=o}(n,t)}function o(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function i(t,n){null==t&&(t=+new Date);var r=new e(t),i=n&&n.state,u=function(){return(r.next()>>>0)/4294967296};return u.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=r.next,u.quick=u,i&&(i.X&&o(i,r),u.state=function(){return o(r,{})}),u}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i}(0,"object"==typeof t&&t,!1),t.exports}.call({});var zb=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.b,e=n.c,r=n.d,o=n.a;return t=t<<25^t>>>7^e,e=e-r|0,r=r<<24^r>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-r|0,n.d=r<<16^e>>>16^o,n.a=o-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):e+=t;for(var r=0;r<e.length+20;r++)n.b^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function c(t,n){var e=new r(t),c=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=e.next,a.quick=a,c&&("object"==typeof c&&o(c,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=c:e&&e.amd?e(function(){return c}):this.tychei=c}(0,"object"==typeof t&&t,!1),t.exports}.call({});var w,h={},Eb=arguments[0];var pa=false;function Aa(){if(pa)return;pa=true}!function(r,n){var t,e=(0,eval)("this"),o=256,a=6,i="random",u=n.pow(o,a),f=n.pow(2,52),c=2*f,$=o-1;function s($,s,d){var h=[],y=g(function r(n,t){var e,o=[],a=typeof n;if(t&&"object"==a)for(e in n)try{o.push(r(n[e],t-1))}catch(r){}return o.length?o:"string"==a?n:n+"\0"}((s=1==s?{entropy:!0}:s||{}).entropy?[$,v(r)]:null==$?function(){try{var n;return t&&(n=t.randomBytes)?n=n(o):(n=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(n)),v(n)}catch(n){var a=e.navigator,i=a&&a.plugins;return[+new Date,e,i,e.screen,v(r)]}}():$,3),h),V=new l(h),m=function(){for(var r=V.g(a),n=u,t=0;r<f;)r=(r+t)*o,n*=o,t=V.g(1);for(;r>=c;)r/=2,n/=2,t>>>=1;return(r+t)/n};return m.int32=function(){return 0|V.g(4)},m.quick=function(){return V.g(4)/4294967296},m.double=m,g(v(V.S),r),(s.pass||d||function(r,t,e,o){return o&&(o.S&&p(o,V),r.state=function(){return p(V,{})}),e?(n[i]=r,t):r})(m,y,"global"in s?s.global:this==n,s.state)}function l(r){var n,t=r.length,e=this,a=0,i=e.i=e.j=0,u=e.S=[];for(t||(r=[t++]);a<o;)u[a]=a++;for(a=0;a<o;a++)u[a]=u[i=$&i+r[a%t]+(n=u[a])],u[i]=n;(e.g=function(r){for(var n,t=0,a=e.i,i=e.j,u=e.S;r--;)n=u[a=$&a+1],t=t*o+u[$&(u[a]=u[i=$&i+n])+(u[i]=n)];return e.i=a,e.j=i,t})(o)}function p(r,n){return n.i=r.i,n.j=r.j,n.S=r.S.slice(),n}function g(r,n){for(var t,e=r+"",o=0;o<e.length;)n[$&o]=$&(t^=19*n[$&o])+e.charCodeAt(o++);return v(n)}function v(r){return String.fromCharCode.apply(0,r)}if(n["seed"+i]=s,g(n.random(),r),h){h=s;try{t=(Aa(),{})}catch(r){}}else"function"==typeof w&&w.amd&&w(function(){return s})}([],Math);var Ha={};h.alea=ka,h.xor128=Ta,h.xorwow=eb,h.xorshift7=ib,h.xor4096=ub,h.tychei=zb,Ha=h;var Ia={};Ia={name:"@fartts/fartts",version:"1.8.2",description:"\uD835\uDC53(unctional)Art(-making).\u1D1B(ype)\uA731(cript) - an experiment by [Matt Hayes](https://github.com/mysterycommand)",main:"index.js",repository:"git@github.com:fartts/fartts.git",author:"Matt Hayes <matt@mysterycommand.com>",license:"MIT",private:!0,scripts:{clean:"rm -rf .cache/ coverage/ dist/ node_modules/",build:"parcel build src/app/{index.html,README.md} --public-url / --experimental-scope-hoisting",start:"parcel src/app/{index.html,README.md}",lint:"tslint 'src/**/*.ts'",test:"jest",coverage:"open coverage/lcov-report/index.html"},engines:{node:"8.12.0",npm:"6.4.1",yarn:"1.9.4"},dependencies:{seedrandom:"2.4.4"},devDependencies:{"@semantic-release/changelog":"3.0.0","@semantic-release/git":"7.0.4","@types/jest":"23.3.2","@types/node":"10.10.3","@types/seedrandom":"2.4.27",commitizen:"3.0.2","cz-conventional-changelog":"2.1.0","glslify-bundle":"5.0.0","glslify-deps":"1.3.1","identity-obj-proxy":"3.0.0",jest:"23.6.0","parcel-bundler":"1.9.7","parcel-plugin-typescript":"1.0.0",prettier:"1.14.3","semantic-release":"15.9.16","semantic-release-github-pr":"5.1.0","ts-jest":"23.10.1",tslint:"5.11.0","tslint-config-prettier":"1.15.0","tslint-plugin-prettier":"2.0.0",typescript:"3.0.3"},config:{commitizen:{path:"cz-conventional-changelog"}}};var Sa=E(Ha);var o=Sa.d(Ia.name);b.random=o;var ab=Math.abs,_=Math.acos,fb=Math.atan2,hb=Math.ceil,X=Math.cos,ob=Math.floor,V=Math.hypot,yb=Math.max,U=Math.min,f=Math.PI,y=Math.round,T=Math.sin,na=Math.sqrt;b.sqrt=na,b.sin=T,b.round=y,b.π=f,b.min=U,b.max=yb,b.hypot=V,b.floor=ob,b.cos=X,b.ceil=hb,b.atan2=fb,b.acos=_,b.abs=ab;f*=2;function C($,o,r){return $+(o-$)*r}function ra(){return 1===y(o())}function S($){return $%f/f-1}function Ca($){return 1-2*Math.abs(S($))}function Da($){return 180*$/f}function Ga($){return $*f/180}b.ππ=f,b.lerp=C,b.randomBool=ra,b.saw=S,b.tri=Ca,b.toDegrees=Da,b.toRadians=Ga;var l=1e3/60;var F=-1,La=0,Ra=0,H=0,Q=0,Ua=0;function Xa(r,$){function e(a){for(F=t(e),Ua=(Q=a-La)-Ra,Ra=Q,H+=Ua,H=U(H,1e3);H>=l;)r(Q,l),H-=l;$(H/l)}return{start:function(){-1===F&&(F=t(function(r){F=t(e),$(1),La=r,Ra=0,H=0}))},stop:function(){-1!==F&&(aa(F),F=-1)}}}var $a=Number.isInteger;function N(e,$){for(;!$a(e/$);)e+=1;return e}var db=!0;function x(e,$){if(!db)return!1;db=!1;var r=window.devicePixelRatio,t=$.clientWidth,i=$.clientHeight;void 0===r&&(r=1);var x=(t=N(t,10))*r/10,g=(i=N(i,10))*r/10;return e.style.width=t+"px",e.style.height=i+"px",e.width=x,e.height=g,!0}x,$("resize",function(){db=!0});function M($){if(Array.isArray($)){for(var r=0,e=Array($.length);r<$.length;r++)e[r]=$[r];return e}return Array.from($)}function gb($){if(Array.isArray($)){for(var n=0,o=Array($.length);n<$.length;n++)o[n]=$[n];return o}return Array.from($)}function z($,n){return e("dot",$,n),$.reduce(function($,o,r){return $+o*n[r]},0)}function p($){return V.apply(void 0,gb($))}function L($){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I($.length),o=p($),r=p(n);return 0===o||0===r?0:_(z($,n)/(o*r))}function pb($){return c($.length)($)}function q($,n){return n instanceof g&&e("add",$,n),c($.length)($.map(ma(n)))}var vb,k;function s(a,t){return a.concat(t)}function u(a,t,e){if(a!==t)throw new Error((a>t?"not enough":"too many")+" arguments provided for "+e)}function G(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;if(!(e<a&&a<t))throw new Error(a+" out of range ["+e+", "+t+"]")}function e(a,t,e){if(t.length!==e.length)throw new Error(["wrong operand types - no operation "+a+" exists that takes a","left-hand operand of type '"+t.length+"-component vector' and a","right operand of type 'const "+e.length+"-component vector' (or","there is no acceptable conversion)"].join(" "))}s,k,function(a){a.Construction="construction",a.Assignment="assignment"}(k||(vb=k={},k,vb)),u,G,e;z,p,L,pb,q;var ma=function($){return"number"==typeof $?function(n){return n+$}:function(n,o){return n+$[o]}};function J($,n){return n instanceof g&&e("sub",$,n),c($.length)($.map(oa(n)))}var oa=function($){return"number"==typeof $?function(n){return n-$}:function(n,o){return n-$[o]}};function Db($,n){return n instanceof g&&e("mul",$,n),c($.length)($.map(qa(n)))}var qa=function($){return"number"==typeof $?function(n){return n*$}:function(n,o){return n*$[o]}};function K($,n){return n instanceof g&&e("div",$,n),c($.length)($.map(sa(n)))}var sa=function($){return"number"==typeof $?function(n){return n/$}:function(n,o){return n/$[o]}};function ta($){return c($.length)(K($,$.magnitude))}function ua($,n,o){return e("lerp",$,n),o instanceof g&&e("lerp",$,o),c($.length)($.map(va(n,o)))}ta,ua;var va=function($,n){return"number"==typeof n?function(o,r){return C(o,$[r],n)}:function(o,r){return C(o,$[r],n[r])}};var wa=function(){function t(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),xa=function t(r,e,o){null===r&&(r=Function.prototype);var n=Object.getOwnPropertyDescriptor(r,e);if(void 0===n){var a=Object.getPrototypeOf(r);return null===a?void 0:t(a,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};function ya(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function za(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function B(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?t:r}function Ba(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}var g=function(t){function r(){za(this,r);for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];var n=e.reduce(s,[]);if(1===n.length&&"number"==typeof n[0])var a=B(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n[0]));else{var i;a=B(this,(i=r.__proto__||Object.getPrototypeOf(r)).call.apply(i,[this].concat(ya(n))))}return B(a)}return Ba(r,Array),wa(r,[{key:"toString",value:function(){return"vec"+this.length+"("+xa(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"toString",this).call(this)+")"}},{key:"dot",get:function(){return z(this,this)}},{key:"magnitude",get:function(){return p(this)}},{key:"direction",get:function(){return L(this)}}]),r}();function i(r){if(Array.isArray(r)){for(var e=0,$=Array(r.length);e<r.length;e++)$[e]=r[e];return $}return Array.from(r)}function Ea(r,e,$,a){return $>0?r.reduce(function(r,e){return r.concat(a.map(function(r){return""+e+r}))},a):r}function Fa(r,e,$){return[].concat(i(r),[[e,$]])}var O=[["x","y","z","w"],["s","t","p","q"],["r","g","b","a"]],P=new Set(O.reduce(function(r,e){return[].concat(i(r),i(e.reduceRight(Ea,e)))},[]));var m=new Map(O.reduce(function(r,e){return[].concat(i(r),i(e.reduce(Fa,[])))},[]));var Ja=Reflect.get,Ka=Reflect.set;function R($,r){var e=m.has(r)&&m.get(r);return G(e,$.length),$[e]}function Ma($,r){if(1===r.length)return R($,r);var e=r.split("");return c(e.length)(e.map(function(r){return R($,r)}))}function Na($,r,e){var t=m.has(r)&&m.get(r);G(t,$.length),$[t]=e}function Oa($,r,e){var t=r.split(""),U=[e].reduce(s,[]),a=t.length;return u(a,U.length,k.Assignment),t.forEach(function(r,e){return Na($,r,U[e])}),!0}function Pa($,r){var e=r.reduce(s,[]);return u($,e.length,k.Construction),new g(e)}var Qa={get:function($,r){return"string"==typeof r&&P.has(r)?Ma($,r):Ja($,r)},set:function($,r,e){return"string"==typeof r&&P.has(r)?Oa($,r,e):Ka($,r,e)}};function D($){return function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return new Proxy(Pa($,e),Qa)}}function c($){return r[$-2]}var r=[D(2),D(3),D(4)],n=r[0],Va=r[1],Wa=r[2];function I($){var r=c($),e=new Array($-1).fill(0);return r.apply(void 0,[1].concat(M(e)))}function Ya($){var r=c($),e=new Array($).fill(0);return r.apply(void 0,M(e))}Wa,Va,n,I,Ya;function Za(e,r){if(!e.getShaderParameter(r,e.COMPILE_STATUS))throw new Error("shader "+r+" failed to compile:\n"+e.getShaderInfoLog(r))}function A(e,r,o){var t=e.createShader(r);return e.shaderSource(t,o),e.compileShader(t),t}Za,A;function _a(r,t){if(!r.getProgramParameter(t,r.LINK_STATUS))throw new Error("program ("+t+") failed to link:\n"+r.getProgramInfoLog(t))}function Y(r,t,a){var e=r.createProgram();return r.attachShader(e,t),r.attachShader(e,a),r.linkProgram(e),e}_a,Y;var bb={};bb="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nattribute vec2 aPositions;\n\nuniform vec2 uTranslation;\nuniform vec2 uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\n\nvoid main() {\n  vec2 position = ((aPositions + uTranslation) / uResolution) * 2.0 - 1.0;\n  gl_PointSize = uPointSize;\n  gl_Position = vec4(position, 0.0, 1.0);\n  vColor = gl_Position * 0.5 + 0.5;\n}\n";var cb={};cb="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nvarying vec4 vColor;\n\nvoid main() {\n\tgl_FragColor = vec4(vColor.xy, 1.0 - vColor.y, 1.0);\n}\n";var Z=v("main"),d=v("canvas"),a=d.getContext("webgl",{antialias:!1}),j=void 0,ba=void 0,ca=void 0,jb=void 0,kb=[0,0],lb=void 0,mb=[0,0],nb=void 0,da=0;function ea($,r){kb=[$/2,r/2],mb=[$,r],da=y($/30),a.viewport(0,0,$,r)}var qb=.01,rb=n(0,10);function sb(){return(2*o()-1)*da}function tb(){return o()*f}function fa(){return n(0,d.height/8)}function ga(){var $=sb(),r=tb();return n(T(r)*$,X(r)*$)}function wb(){var $=fa(),r=ga();return{cpos:$,ppos:q($,r),update:function($){var r=J(this.cpos,this.ppos);r=J(r,K(rb,$*$)),r=Db(r,1-qb),this.ppos=this.cpos,this.cpos=q(this.cpos,r)}}}var xb=new Array(50).fill(!0).reduce(function($,r,a){return $.concat(wb())},[]),ha=function($){return xb.reduce(function(r,a){if(a.update($),a.cpos.y<-d.height/2){var i=fa(),t=ga();a.cpos=i,a.ppos=q(i,t)}return r.concat(a.cpos)},[])},ia=ha(0);function Ab(){var $CCK$$interop$default=E(bb);var $gmVu$$interop$default=E(cb);x(d,Z)&&ea(d.width,d.height),a.clearColor(0,0,0,1),j=Y(a,A(a,a.VERTEX_SHADER,$CCK$$interop$default.d),A(a,a.FRAGMENT_SHADER,$gmVu$$interop$default.d)),ba=a.getAttribLocation(j,"aPositions"),ca=a.createBuffer(),jb=a.getUniformLocation(j,"uTranslation"),lb=a.getUniformLocation(j,"uResolution"),nb=a.getUniformLocation(j,"uPointSize")}function Bb($,r){ia=ha(r)}function Cb($){x(d,Z)&&ea(d.width,d.height),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(j),a.bindBuffer(a.ARRAY_BUFFER,ca),a.bufferData(a.ARRAY_BUFFER,new Float32Array(ia),a.STATIC_DRAW),a.enableVertexAttribArray(ba),a.bindBuffer(a.ARRAY_BUFFER,ca),a.vertexAttribPointer(ba,2,a.FLOAT,!1,0,0),a.uniform2fv(jb,kb),a.uniform2fv(lb,mb),a.uniform1f(nb,da),a.drawArrays(a.POINTS,0,ia.length/2)}var la=Xa(Bb,Cb),ja=la.start;Ab(),ja();b.__esModule=true;return{"jFug":b,"P4Cy":{}};});