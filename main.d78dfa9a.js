parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RYid":[function(require,module,exports) {

},{}],"r4In":[function(require,module,exports) {

},{"../../src/styles/base.css":"RYid","../../src/styles/cover.css":"RYid"}],"qZBz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=b,exports.saw=h,exports.tri=w,exports.toDegrees=y,exports.toRadians=q,exports.isFinite=exports.ππ=exports.sqrt=exports.sin=exports.round=exports.pow=exports.π=exports.min=exports.max=exports.hypot=exports.floor=exports.cos=exports.ceil=exports.atan2=exports.acos=exports.abs=void 0;const{abs:o,acos:t,atan2:s,ceil:r,cos:e,floor:p,hypot:x,max:n,min:i,PI:a,pow:c,round:u,sin:f,sqrt:l}=Math;exports.sqrt=l,exports.sin=f,exports.round=u,exports.pow=c,exports.π=a,exports.min=i,exports.max=n,exports.hypot=x,exports.floor=p,exports.cos=e,exports.ceil=r,exports.atan2=s,exports.acos=t,exports.abs=o;const d=2*a;exports.ππ=d;const{isFinite:m}=Number;function b(o,t,s){return(1-s)*o+s*t}function h(o){return o%d/a-1}function w(t){return 1-2*o(h(t))}function y(o){return 180*o/a}function q(o){return o*a/180}exports.isFinite=m;
},{}],"OA+L":[function(require,module,exports) {
module.exports="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nvarying vec4 v_color;\n\nvoid main() {\n\tgl_FragColor = vec4(1.0, v_color.xy, 1.0);\n}\n";
},{}],"/79w":[function(require,module,exports) {
module.exports="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\n\nattribute vec4 a_position;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_Position = a_position;\n  v_color = gl_Position * 0.5 + 0.5;\n}\n";
},{}],"3f/+":[function(require,module,exports) {
"use strict";require("./main.css");var e=require("../../../lib/core/math"),t=n(require("./shader.frag")),r=n(require("./shader.vert"));function n(e){return e&&e.__esModule?e:{default:e}}const a=document.querySelector("canvas"),i=a.getContext("webgl",{antialias:!1});var o;function s(e,t,r){const n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),n}function c(e,t,r){const n=e.createProgram();return e.attachShader(n,t),e.attachShader(n,r),e.linkProgram(n),n}i.clearColor(0,0,0,1),function(e){e[e.Vertex=i.VERTEX_SHADER]="Vertex",e[e.Fragment=i.FRAGMENT_SHADER]="Fragment"}(o||(o={}));const u=s(i,o.Vertex,r.default),d=s(i,o.Fragment,t.default),h=c(i,u,d),A=i.getAttribLocation(h,"a_position"),f=i.createBuffer();let R=0,l=!1;function F(t){if(requestAnimationFrame(F),l){const{innerHeight:e,innerWidth:t}=window,r=.1;a.width=t*r,a.height=e*r,i.viewport(0,0,a.width,a.height),a.style.width=`${t}px`,a.style.height=`${e}px`,l=!1}R=(R+1)%360;const r=(0,e.sin)((0,e.toRadians)(R)),n=(0,e.cos)((0,e.toRadians)(R));i.clear(i.COLOR_BUFFER_BIT),i.useProgram(h),i.bindBuffer(i.ARRAY_BUFFER,f),i.bufferData(i.ARRAY_BUFFER,new Float32Array([.4+.4*r,.6+.3*n,.3*r-.4,.4+.4*n,.1+.2*r,.2*n-.7]),i.DYNAMIC_DRAW),i.enableVertexAttribArray(A),i.bindBuffer(i.ARRAY_BUFFER,f),i.vertexAttribPointer(A,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3)}function g(){l=!0}window.addEventListener("resize",g),window.dispatchEvent(new Event("resize")),requestAnimationFrame(F);
},{"./main.css":"r4In","../../../lib/core/math":"qZBz","./shader.frag":"OA+L","./shader.vert":"/79w"}]},{},["3f/+"], null)
//# sourceMappingURL=/main.d78dfa9a.js.map