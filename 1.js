(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{36:function(n,e,t){"use strict";(function(n){t.d(e,"e",(function(){return l})),t.d(e,"g",(function(){return p})),t.d(e,"h",(function(){return w})),t.d(e,"d",(function(){return x})),t.d(e,"f",(function(){return _})),t.d(e,"a",(function(){return m})),t.d(e,"b",(function(){return j})),t.d(e,"c",(function(){return C}));var r=t(37);let u=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let o=null;function c(){return null!==o&&o.buffer===r.h.buffer||(o=new Uint8Array(r.h.buffer)),o}function i(n,e){return u.decode(c().subarray(n,n+e))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let d=f.length;function l(){r.f()}let a=0;let s=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const b="function"==typeof s.encodeInto?function(n,e){return s.encodeInto(n,e)}:function(n,e){const t=s.encode(n);return e.set(t),{read:n.length,written:t.length}};function h(n,e,t){if(void 0===t){const t=s.encode(n),r=e(t.length);return c().subarray(r,r+t.length).set(t),a=t.length,r}let r=n.length,u=e(r);const o=c();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;o[u+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),u=t(u,r,r=i+3*n.length);const e=c().subarray(u+i,u+r);i+=b(n,e).written}return a=i,u}function g(n){const e=function(n){return f[n]}(n);return function(n){n<36||(f[n]=d,d=n)}(n),e}function p(n){var e=h(n,r.c,r.d),t=a;return g(r.i(e,t))}function w(){return r.j()>>>0}let y=null;function v(){return null!==y&&y.buffer===r.h.buffer||(y=new Int32Array(r.h.buffer)),y}function x(n){try{const c=r.a(-16);var e=h(n,r.c,r.d),t=a;r.e(c,e,t);var u=v()[c/4+0],o=v()[c/4+1];return i(u,o)}finally{r.a(16),r.b(u,o)}}function _(n){var e=h(n,r.c,r.d),t=a;return 0!==r.g(e,t)}const m=Object.freeze({Choices:0,0:"Choices",InvalidChoice:1,1:"InvalidChoice",Dialogue:2,2:"Dialogue",Input:3,3:"Input",Commands:4,4:"Commands",None:5,5:"None"}),j=function(n,e){console.log(i(n,e))},C=function(n,e){return function(n){d===f.length&&f.push(f.length+1);const e=d;return d=f[e],f[e]=n,e}(JSON.parse(i(n,e)))}}).call(this,t(38)(n))},37:function(n,e,t){"use strict";var r=t.w[n.i];n.exports=r;t(36);r.k()},38:function(n,e){n.exports=function(n){if(!n.webpackPolyfill){var e=Object.create(n);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},39:function(n,e,t){"use strict";t.r(e);var r=t(36);t.d(e,"init",(function(){return r.e})),t.d(e,"next",(function(){return r.g})),t.d(e,"tag",(function(){return r.h})),t.d(e,"autocomplete",(function(){return r.d})),t.d(e,"is_choice",(function(){return r.f})),t.d(e,"LineTag",(function(){return r.a})),t.d(e,"__wbg_log_aa12d9415a833abf",(function(){return r.b})),t.d(e,"__wbindgen_json_parse",(function(){return r.c}))}}]);