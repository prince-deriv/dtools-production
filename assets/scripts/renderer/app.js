//  Global Variables and Configurations
const version = "1.1.19";
const feature_version = "e";

window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"id":6743296,"license":"free","method":"css","minify":{"enabled":true},"token":"a076d05399","v4FontFaceShim":{"enabled":false},"v4shim":{"enabled":false},"version":"5.15.3"};
!function(t){"function"==typeof define&&define.amd?define("kit-loader",t):t()}((function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,c=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+c+"/"+r+o+"."+i}function a(t){return t.baseUrlKit+"/"+t.token+"/"+t.id+"/kit-upload.css"}function u(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var f,s=function(){},d="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,l="undefined"==typeof setImmediate?setTimeout:setImmediate,h=[];function m(){for(var t=0;t<h.length;t++)h[t][0](h[t][1]);h=[],f=!1}function p(t,e){h.push([t,e]),f||(f=!0,l(m,0))}function y(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){w(i,t)}}b(i,r)||("fulfilled"===n&&v(i,r),"rejected"===n&&w(i,r))}function b(e,n){var r;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var o=n.then;if("function"==typeof o)return o.call(n,(function(t){r||(r=!0,n===t?g(e,t):v(e,t))}),(function(t){r||(r=!0,w(e,t))})),!0}}catch(t){return r||w(e,t),!0}return!1}function v(t,e){t!==e&&b(t,e)||g(t,e)}function g(t,e){"pending"===t._state&&(t._state="settled",t._data=e,p(S,t))}function w(t,e){"pending"===t._state&&(t._state="settled",t._data=e,p(O,t))}function A(t){t._then=t._then.forEach(y)}function S(t){t._state="fulfilled",A(t)}function O(t){t._state="rejected",A(t),!t._handled&&d&&global.process.emit("unhandledRejection",t._data,t)}function j(t){global.process.emit("rejectionHandled",t)}function E(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof E==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){w(e,t)}try{t((function(t){v(e,t)}),n)}catch(t){n(t)}}(t,this)}E.prototype={constructor:E,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(s),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&d&&p(j,this)),"fulfilled"===this._state||"rejected"===this._state?p(y,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},E.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new E((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var c,a=0;a<t.length;a++)(c=t[a])&&"function"==typeof c.then?c.then(i(a),n):r[a]=c;o||e(r)}))},E.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new E((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},E.resolve=function(e){return e&&"object"===t(e)&&e.constructor===E?e:new E((function(t){t(e)}))},E.reject=function(t){return new E((function(e,n){n(t)}))};var _="function"==typeof Promise?Promise:E;function P(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return"URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o),i=i.toString(),new _((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function C(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function F(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=e.document||o,i=u.bind(u,o,["fa","fab","fas","far","fal","fad","fak"]),f=Object.keys(t.iconUploads||{}).length>0;t.autoA11y.enabled&&n(i);var s=[{id:"fa-main",addOn:void 0}];t.v4shim.enabled&&s.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v4FontFaceShim.enabled&&s.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),f&&s.push({id:"fa-kit-upload",customCss:!0});var d=s.map((function(n){return new _((function(o,i){P(n.customCss?a(t):c(t,{addOn:n.addOn,minify:t.minify.enabled}),e).then((function(i){o(U(i,r(r({},e),{},{baseUrl:t.baseUrl,version:t.version,id:n.id,contentFilter:function(t,e){return C(t,e.baseUrl,e.version)}})))})).catch(i)}))}));return _.all(d)}function U(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function k(t,e){e.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(e.autoFetchSvg=!0,e.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",e.fetchUploadedSvgFrom=t.uploadsUrl);var n=[];return t.v4shim.enabled&&n.push(new _((function(n,o){P(c(t,{addOn:"-v4-shims",minify:t.minify.enabled}),e).then((function(t){n(I(t,r(r({},e),{},{id:"fa-v4-shims"})))})).catch(o)}))),n.push(new _((function(n,o){P(c(t,{minify:t.minify.enabled}),e).then((function(t){var o=I(t,r(r({},e),{},{id:"fa-main"}));n(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,e))})).catch(o)}))),_.all(n)}function I(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function L(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function T(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var x=window.FontAwesomeKitConfig,M={detectingConflicts:x.detectConflictsUntil&&new Date<=new Date(x.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:x.token,XMLHttpRequest:window.XMLHttpRequest,document:document},D=document.currentScript,N=D?D.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?k(t,e):"css"===t.method?F(t,e,(function(t){L(t),T(t)})):void 0})(x,M).then((function(t){t.map((function(t){try{N.insertBefore(t,D?D.nextSibling:null)}catch(e){N.appendChild(t)}})),M.detectingConflicts&&D&&L((function(){D.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=c(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(x,M);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
const changelog = [
  {
    version: "1.1.19",
    date: "Jun 12 2024",
    added: [],
    description:
      "Auto-block the LastPass iframe that is disrupting developers.",
  },
  {
    version: "1.1.18",
    date: "April 18 2024",
    added: [],
    description: "Anti-Phishing feature added.",
  },
  {
    version: "1.1.17",
    date: "September 25 2023",
    added: ["Ability to choose from infamouse pets to relieve your stress"],
    description: "Added stress reliever",
  },
  ,
  {
    version: "1.1.16",
    date: "May 15 2023",
    added: ["Quick login feature"],
    description: "Added ability to login on test links without creating App ID",
  },
  {
    version: "1.1.15b",
    date: "April 14 2023",
    added: ["New Add Account Parameter"],
    description: "Password parameter is added`",
  },
  {
    version: "1.1.15",
    date: "February 28 2023",
    added: ["Release Version Generator"],
    description: "Generate version tag based on current date",
  },
  {
    version: "1.1.14",
    date: "March 10 2022",
    added: ["Added file merger"],
    description: "File merger allows users to merge specific files from a PR",
  },
  {
    version: "1.1.13",
    date: "January 28 2022",
    added: [
      "Deprecate Country Code override option",
      "Update ability on deriv local client information",
    ],
    description: "Customizable Client Information of deriv cookie",
  },
  {
    version: "1.1.12",
    date: "November 8 2021",
    added: ["Webtrader in App ID Generator"],
    description: "Ability to create app id for webtrader in binary",
  },
  {
    version: "1.1.11",
    date: "October 24 2021",
    added: ["Deriv Static controls"],
    description: "Ability to login to Deriv Static in local environment",
  },
  {
    version: "1.1.10",
    date: "September 6 2021",
    added: ["Added country & residence controls"],
    description:
      "Country & Residence controller feature allows to temporarily override cookie data instead of changing user residence or using VPN",
  },
  {
    version: "1.1.9",
    date: "September 2 2021",
    added: ["Added dark theme options in the settings"],
    description: "New page for settings.",
  },
  {
    version: "1.1.8",
    date: "August 29 2021",
    added: [
      "Ability to run local copy when no new updates from the live source code",
    ],
    description:
      "Speed up loading time by running local copy when no new updates instead of fetching everytime the extension popup is triggered.",
  },
  {
    version: "1.1.7",
    date: "August 24 2021",
    added: ["QA10 Default APP IDs"],
    description: "Quick select QA default end points",
  },
  {
    version: "1.1.6",
    date: "August 22 2021",
    added: ["Code for hiding error validation on account creation"],
    description:
      "Ability to turn off error validation in some QA boxes in order to proceed to normal account creation via perl scripts.",
  },
  {
    version: "1.1.5",
    date: "August 16 2021",
    added: ["offline mode", "automated perl file for creating account"],
    description:
      "Added a quick way to upload perl file responsible for creating accounts.",
  },
  {
    version: "1.1.4",
    date: "July 18 2021",
    added: ["stand alone code for top-up", "proxy settings"],
    description:
      "Added new feature proxy manager, allows chrome to gain proxy settings to access dedicated FE QA boxes",
  },
  {
    version: "1.1.3",
    date: "July 13 2021",
    added: ["enable dashboard checkbox", "enable service worker checkbox"],
    description:
      "Added dashboad and service worker control on end point manager",
  },
  {
    version: "1.1.2",
    date: "July 12 2021",
    added: ["Quick Links"],
    description: "Quick links for QA boxes",
  },
  {
    version: "1.1.1",
    date: "July 11 2021",
    added: ["Profile details"],
    fixed: ["incorrect options on account manager"],
    description:
      "<strong>Dtools</strong> will now use your Deriv information. Any tools that require your personal details will auto fill it for you.",
  },
  {
    version: "1.1.0",
    date: "July 8 2021",
    added: [
      "Changelog tab that displays all changes and bug fixes",
      "Auto update feature",
    ],
    updated: ["reduce files and file size."],
    description:
      "Code base refactor and self-update feature. Dtools will now automatically fetch new updates without repacking",
  },
  {
    version: "1.0.2",
    date: "June 17 2021",
    updated: [
      "App ID generator now only requires one code to copy and paste to generate app id",
    ],
    description: "Simplified code for generating app id",
  },
  {
    version: "1.0.1",
    date: "June 14 2021",
    added: ["Market controller feature"],
    updated: ["icons and popups"],
    description: "New tools and improved code base",
  },
];

const renderChangeLogs = () => {
  let html = "";

  changelog.map((log) => {
    html += `
        <div class="log-item">
            <span class="version">${log.version} - ${log.date}</span>
            <p class="desc">${log.description}</p>

            ${
              log.updated && log.updated.length
                ? `
                <div class="log-list">
                    <span class="log-title">Updated</span>
                    <ul>
                        ${log.updated.map((up) => {
                          return `<li>${up}</li>`;
                        })}
                    </ul>
                </div>
            `
                : ``
            }

            ${
              log.added && log.added.length
                ? `
                  <div class="log-list">
                      <span class="log-title">Added</span>
                      <ul>
                          ${log.added.map((ad) => `<li>${ad}</li>`).join("")}
                      </ul>
                  </div>
              `
                : ``
            }


            ${
              log.fixed && log.fixed.length
                ? `
                  <div class="log-list">
                      <span class="log-title">Fixed</span>
                      <ul>
                          ${log.fixed.map((fx) => `<li>${fx}</li>`).join("")}
                      </ul>
                  </div>
              `
                : ``
            }
        </div>
    `;
  });

  return html;
};

broker_codes = ["VRTC", "CR", "MF", "MLT", "MX"];
landing_companies = ["svg", "virtual"];

country_codes = [
  { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
  { code: "AL", code3: "ALB", name: "Albania", number: "008" },
  { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
  { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
  { code: "AD", code3: "AND", name: "Andorra", number: "020" },
  { code: "AO", code3: "AGO", name: "Angola", number: "024" },
  { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
  { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
  { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
  { code: "AR", code3: "ARG", name: "Argentina", number: "032" },
  { code: "AM", code3: "ARM", name: "Armenia", number: "051" },
  { code: "AW", code3: "ABW", name: "Aruba", number: "533" },
  { code: "AU", code3: "AUS", name: "Australia", number: "036" },
  { code: "AT", code3: "AUT", name: "Austria", number: "040" },
  { code: "AZ", code3: "AZE", name: "Azerbaijan", number: "031" },
  { code: "BS", code3: "BHS", name: "Bahamas (the)", number: "044" },
  { code: "BH", code3: "BHR", name: "Bahrain", number: "048" },
  { code: "BD", code3: "BGD", name: "Bangladesh", number: "050" },
  { code: "BB", code3: "BRB", name: "Barbados", number: "052" },
  { code: "BY", code3: "BLR", name: "Belarus", number: "112" },
  { code: "BE", code3: "BEL", name: "Belgium", number: "056" },
  { code: "BZ", code3: "BLZ", name: "Belize", number: "084" },
  { code: "BJ", code3: "BEN", name: "Benin", number: "204" },
  { code: "BM", code3: "BMU", name: "Bermuda", number: "060" },
  { code: "BT", code3: "BTN", name: "Bhutan", number: "064" },
  {
    code: "BO",
    code3: "BOL",
    name: "Bolivia (Plurinational State of)",
    number: "068",
  },
  {
    code: "BQ",
    code3: "BES",
    name: "Bonaire, Sint Eustatius and Saba",
    number: "535",
  },
  { code: "BA", code3: "BIH", name: "Bosnia and Herzegovina", number: "070" },
  { code: "BW", code3: "BWA", name: "Botswana", number: "072" },
  { code: "BV", code3: "BVT", name: "Bouvet Island", number: "074" },
  { code: "BR", code3: "BRA", name: "Brazil", number: "076" },
  {
    code: "IO",
    code3: "IOT",
    name: "British Indian Ocean Territory (the)",
    number: "086",
  },
  { code: "BN", code3: "BRN", name: "Brunei Darussalam", number: "096" },
  { code: "BG", code3: "BGR", name: "Bulgaria", number: "100" },
  { code: "BF", code3: "BFA", name: "Burkina Faso", number: "854" },
  { code: "BI", code3: "BDI", name: "Burundi", number: "108" },
  { code: "CV", code3: "CPV", name: "Cabo Verde", number: "132" },
  { code: "KH", code3: "KHM", name: "Cambodia", number: "116" },
  { code: "CM", code3: "CMR", name: "Cameroon", number: "120" },
  { code: "CA", code3: "CAN", name: "Canada", number: "124" },
  { code: "KY", code3: "CYM", name: "Cayman Islands (the)", number: "136" },
  {
    code: "CF",
    code3: "CAF",
    name: "Central African Republic (the)",
    number: "140",
  },
  { code: "TD", code3: "TCD", name: "Chad", number: "148" },
  { code: "CL", code3: "CHL", name: "Chile", number: "152" },
  { code: "CN", code3: "CHN", name: "China", number: "156" },
  { code: "CX", code3: "CXR", name: "Christmas Island", number: "162" },
  {
    code: "CC",
    code3: "CCK",
    name: "Cocos (Keeling) Islands (the)",
    number: "166",
  },
  { code: "CO", code3: "COL", name: "Colombia", number: "170" },
  { code: "KM", code3: "COM", name: "Comoros (the)", number: "174" },
  {
    code: "CD",
    code3: "COD",
    name: "Congo (the Democratic Republic of the)",
    number: "180",
  },
  { code: "CG", code3: "COG", name: "Congo (the)", number: "178" },
  { code: "CK", code3: "COK", name: "Cook Islands (the)", number: "184" },
  { code: "CR", code3: "CRI", name: "Costa Rica", number: "188" },
  { code: "HR", code3: "HRV", name: "Croatia", number: "191" },
  { code: "CU", code3: "CUB", name: "Cuba", number: "192" },
  { code: "CW", code3: "CUW", name: "Curaçao", number: "531" },
  { code: "CY", code3: "CYP", name: "Cyprus", number: "196" },
  { code: "CZ", code3: "CZE", name: "Czechia", number: "203" },
  { code: "CI", code3: "CIV", name: "Côte d'Ivoire", number: "384" },
  { code: "DK", code3: "DNK", name: "Denmark", number: "208" },
  { code: "DJ", code3: "DJI", name: "Djibouti", number: "262" },
  { code: "DM", code3: "DMA", name: "Dominica", number: "212" },
  { code: "DO", code3: "DOM", name: "Dominican Republic (the)", number: "214" },
  { code: "EC", code3: "ECU", name: "Ecuador", number: "218" },
  { code: "EG", code3: "EGY", name: "Egypt", number: "818" },
  { code: "SV", code3: "SLV", name: "El Salvador", number: "222" },
  { code: "GQ", code3: "GNQ", name: "Equatorial Guinea", number: "226" },
  { code: "ER", code3: "ERI", name: "Eritrea", number: "232" },
  { code: "EE", code3: "EST", name: "Estonia", number: "233" },
  { code: "SZ", code3: "SWZ", name: "Eswatini", number: "748" },
  { code: "ET", code3: "ETH", name: "Ethiopia", number: "231" },
  {
    code: "FK",
    code3: "FLK",
    name: "Falkland Islands (the) [Malvinas]",
    number: "238",
  },
  { code: "FO", code3: "FRO", name: "Faroe Islands (the)", number: "234" },
  { code: "FJ", code3: "FJI", name: "Fiji", number: "242" },
  { code: "FI", code3: "FIN", name: "Finland", number: "246" },
  { code: "FR", code3: "FRA", name: "France", number: "250" },
  { code: "GF", code3: "GUF", name: "French Guiana", number: "254" },
  { code: "PF", code3: "PYF", name: "French Polynesia", number: "258" },
  {
    code: "TF",
    code3: "ATF",
    name: "French Southern Territories (the)",
    number: "260",
  },
  { code: "GA", code3: "GAB", name: "Gabon", number: "266" },
  { code: "GM", code3: "GMB", name: "Gambia (the)", number: "270" },
  { code: "GE", code3: "GEO", name: "Georgia", number: "268" },
  { code: "DE", code3: "DEU", name: "Germany", number: "276" },
  { code: "GH", code3: "GHA", name: "Ghana", number: "288" },
  { code: "GI", code3: "GIB", name: "Gibraltar", number: "292" },
  { code: "GR", code3: "GRC", name: "Greece", number: "300" },
  { code: "GL", code3: "GRL", name: "Greenland", number: "304" },
  { code: "GD", code3: "GRD", name: "Grenada", number: "308" },
  { code: "GP", code3: "GLP", name: "Guadeloupe", number: "312" },
  { code: "GU", code3: "GUM", name: "Guam", number: "316" },
  { code: "GT", code3: "GTM", name: "Guatemala", number: "320" },
  { code: "GG", code3: "GGY", name: "Guernsey", number: "831" },
  { code: "GN", code3: "GIN", name: "Guinea", number: "324" },
  { code: "GW", code3: "GNB", name: "Guinea-Bissau", number: "624" },
  { code: "GY", code3: "GUY", name: "Guyana", number: "328" },
  { code: "HT", code3: "HTI", name: "Haiti", number: "332" },
  {
    code: "HM",
    code3: "HMD",
    name: "Heard Island and McDonald Islands",
    number: "334",
  },
  { code: "VA", code3: "VAT", name: "Holy See (the)", number: "336" },
  { code: "HN", code3: "HND", name: "Honduras", number: "340" },
  { code: "HK", code3: "HKG", name: "Hong Kong", number: "344" },
  { code: "HU", code3: "HUN", name: "Hungary", number: "348" },
  { code: "IS", code3: "ISL", name: "Iceland", number: "352" },
  { code: "IN", code3: "IND", name: "India", number: "356" },
  { code: "ID", code3: "IDN", name: "Indonesia", number: "360" },
  {
    code: "IR",
    code3: "IRN",
    name: "Iran (Islamic Republic of)",
    number: "364",
  },
  { code: "IQ", code3: "IRQ", name: "Iraq", number: "368" },
  { code: "IE", code3: "IRL", name: "Ireland", number: "372" },
  { code: "IM", code3: "IMN", name: "Isle of Man", number: "833" },
  { code: "IL", code3: "ISR", name: "Israel", number: "376" },
  { code: "IT", code3: "ITA", name: "Italy", number: "380" },
  { code: "JM", code3: "JAM", name: "Jamaica", number: "388" },
  { code: "JP", code3: "JPN", name: "Japan", number: "392" },
  { code: "JE", code3: "JEY", name: "Jersey", number: "832" },
  { code: "JO", code3: "JOR", name: "Jordan", number: "400" },
  { code: "KZ", code3: "KAZ", name: "Kazakhstan", number: "398" },
  { code: "KE", code3: "KEN", name: "Kenya", number: "404" },
  { code: "KI", code3: "KIR", name: "Kiribati", number: "296" },
  {
    code: "KP",
    code3: "PRK",
    name: "Korea (the Democratic People's Republic of)",
    number: "408",
  },
  { code: "KR", code3: "KOR", name: "Korea (the Republic of)", number: "410" },
  { code: "KW", code3: "KWT", name: "Kuwait", number: "414" },
  { code: "KG", code3: "KGZ", name: "Kyrgyzstan", number: "417" },
  {
    code: "LA",
    code3: "LAO",
    name: "Lao People's Democratic Republic (the)",
    number: "418",
  },
  { code: "LV", code3: "LVA", name: "Latvia", number: "428" },
  { code: "LB", code3: "LBN", name: "Lebanon", number: "422" },
  { code: "LS", code3: "LSO", name: "Lesotho", number: "426" },
  { code: "LR", code3: "LBR", name: "Liberia", number: "430" },
  { code: "LY", code3: "LBY", name: "Libya", number: "434" },
  { code: "LI", code3: "LIE", name: "Liechtenstein", number: "438" },
  { code: "LT", code3: "LTU", name: "Lithuania", number: "440" },
  { code: "LU", code3: "LUX", name: "Luxembourg", number: "442" },
  { code: "MO", code3: "MAC", name: "Macao", number: "446" },
  { code: "MG", code3: "MDG", name: "Madagascar", number: "450" },
  { code: "MW", code3: "MWI", name: "Malawi", number: "454" },
  { code: "MY", code3: "MYS", name: "Malaysia", number: "458" },
  { code: "MV", code3: "MDV", name: "Maldives", number: "462" },
  { code: "ML", code3: "MLI", name: "Mali", number: "466" },
  { code: "MT", code3: "MLT", name: "Malta", number: "470" },
  { code: "MH", code3: "MHL", name: "Marshall Islands (the)", number: "584" },
  { code: "MQ", code3: "MTQ", name: "Martinique", number: "474" },
  { code: "MR", code3: "MRT", name: "Mauritania", number: "478" },
  { code: "MU", code3: "MUS", name: "Mauritius", number: "480" },
  { code: "YT", code3: "MYT", name: "Mayotte", number: "175" },
  { code: "MX", code3: "MEX", name: "Mexico", number: "484" },
  {
    code: "FM",
    code3: "FSM",
    name: "Micronesia (Federated States of)",
    number: "583",
  },
  {
    code: "MD",
    code3: "MDA",
    name: "Moldova (the Republic of)",
    number: "498",
  },
  { code: "MC", code3: "MCO", name: "Monaco", number: "492" },
  { code: "MN", code3: "MNG", name: "Mongolia", number: "496" },
  { code: "ME", code3: "MNE", name: "Montenegro", number: "499" },
  { code: "MS", code3: "MSR", name: "Montserrat", number: "500" },
  { code: "MA", code3: "MAR", name: "Morocco", number: "504" },
  { code: "MZ", code3: "MOZ", name: "Mozambique", number: "508" },
  { code: "MM", code3: "MMR", name: "Myanmar", number: "104" },
  { code: "NA", code3: "NAM", name: "Namibia", number: "516" },
  { code: "NR", code3: "NRU", name: "Nauru", number: "520" },
  { code: "NP", code3: "NPL", name: "Nepal", number: "524" },
  { code: "NL", code3: "NLD", name: "Netherlands (the)", number: "528" },
  { code: "NC", code3: "NCL", name: "New Caledonia", number: "540" },
  { code: "NZ", code3: "NZL", name: "New Zealand", number: "554" },
  { code: "NI", code3: "NIC", name: "Nicaragua", number: "558" },
  { code: "NE", code3: "NER", name: "Niger (the)", number: "562" },
  { code: "NG", code3: "NGA", name: "Nigeria", number: "566" },
  { code: "NU", code3: "NIU", name: "Niue", number: "570" },
  { code: "NF", code3: "NFK", name: "Norfolk Island", number: "574" },
  {
    code: "MP",
    code3: "MNP",
    name: "Northern Mariana Islands (the)",
    number: "580",
  },
  { code: "NO", code3: "NOR", name: "Norway", number: "578" },
  { code: "OM", code3: "OMN", name: "Oman", number: "512" },
  { code: "PK", code3: "PAK", name: "Pakistan", number: "586" },
  { code: "PW", code3: "PLW", name: "Palau", number: "585" },
  { code: "PS", code3: "PSE", name: "Palestine, State of", number: "275" },
  { code: "PA", code3: "PAN", name: "Panama", number: "591" },
  { code: "PG", code3: "PNG", name: "Papua New Guinea", number: "598" },
  { code: "PY", code3: "PRY", name: "Paraguay", number: "600" },
  { code: "PE", code3: "PER", name: "Peru", number: "604" },
  { code: "PH", code3: "PHL", name: "Philippines (the)", number: "608" },
  { code: "PN", code3: "PCN", name: "Pitcairn", number: "612" },
  { code: "PL", code3: "POL", name: "Poland", number: "616" },
  { code: "PT", code3: "PRT", name: "Portugal", number: "620" },
  { code: "PR", code3: "PRI", name: "Puerto Rico", number: "630" },
  { code: "QA", code3: "QAT", name: "Qatar", number: "634" },
  {
    code: "MK",
    code3: "MKD",
    name: "Republic of North Macedonia",
    number: "807",
  },
  { code: "RO", code3: "ROU", name: "Romania", number: "642" },
  { code: "RU", code3: "RUS", name: "Russian Federation (the)", number: "643" },
  { code: "RW", code3: "RWA", name: "Rwanda", number: "646" },
  { code: "RE", code3: "REU", name: "Réunion", number: "638" },
  { code: "BL", code3: "BLM", name: "Saint Barthélemy", number: "652" },
  {
    code: "SH",
    code3: "SHN",
    name: "Saint Helena, Ascension and Tristan da Cunha",
    number: "654",
  },
  { code: "KN", code3: "KNA", name: "Saint Kitts and Nevis", number: "659" },
  { code: "LC", code3: "LCA", name: "Saint Lucia", number: "662" },
  {
    code: "MF",
    code3: "MAF",
    name: "Saint Martin (French part)",
    number: "663",
  },
  {
    code: "PM",
    code3: "SPM",
    name: "Saint Pierre and Miquelon",
    number: "666",
  },
  {
    code: "VC",
    code3: "VCT",
    name: "Saint Vincent and the Grenadines",
    number: "670",
  },
  { code: "WS", code3: "WSM", name: "Samoa", number: "882" },
  { code: "SM", code3: "SMR", name: "San Marino", number: "674" },
  { code: "ST", code3: "STP", name: "Sao Tome and Principe", number: "678" },
  { code: "SA", code3: "SAU", name: "Saudi Arabia", number: "682" },
  { code: "SN", code3: "SEN", name: "Senegal", number: "686" },
  { code: "RS", code3: "SRB", name: "Serbia", number: "688" },
  { code: "SC", code3: "SYC", name: "Seychelles", number: "690" },
  { code: "SL", code3: "SLE", name: "Sierra Leone", number: "694" },
  { code: "SG", code3: "SGP", name: "Singapore", number: "702" },
  {
    code: "SX",
    code3: "SXM",
    name: "Sint Maarten (Dutch part)",
    number: "534",
  },
  { code: "SK", code3: "SVK", name: "Slovakia", number: "703" },
  { code: "SI", code3: "SVN", name: "Slovenia", number: "705" },
  { code: "SB", code3: "SLB", name: "Solomon Islands", number: "090" },
  { code: "SO", code3: "SOM", name: "Somalia", number: "706" },
  { code: "ZA", code3: "ZAF", name: "South Africa", number: "710" },
  {
    code: "GS",
    code3: "SGS",
    name: "South Georgia and the South Sandwich Islands",
    number: "239",
  },
  { code: "SS", code3: "SSD", name: "South Sudan", number: "728" },
  { code: "ES", code3: "ESP", name: "Spain", number: "724" },
  { code: "LK", code3: "LKA", name: "Sri Lanka", number: "144" },
  { code: "SD", code3: "SDN", name: "Sudan (the)", number: "729" },
  { code: "SR", code3: "SUR", name: "Suriname", number: "740" },
  { code: "SJ", code3: "SJM", name: "Svalbard and Jan Mayen", number: "744" },
  { code: "SE", code3: "SWE", name: "Sweden", number: "752" },
  { code: "CH", code3: "CHE", name: "Switzerland", number: "756" },
  { code: "SY", code3: "SYR", name: "Syrian Arab Republic", number: "760" },
  { code: "TW", code3: "TWN", name: "Taiwan", number: "158" },
  { code: "TJ", code3: "TJK", name: "Tajikistan", number: "762" },
  {
    code: "TZ",
    code3: "TZA",
    name: "Tanzania, United Republic of",
    number: "834",
  },
  { code: "TH", code3: "THA", name: "Thailand", number: "764" },
  { code: "TL", code3: "TLS", name: "Timor-Leste", number: "626" },
  { code: "TG", code3: "TGO", name: "Togo", number: "768" },
  { code: "TK", code3: "TKL", name: "Tokelau", number: "772" },
  { code: "TO", code3: "TON", name: "Tonga", number: "776" },
  { code: "TT", code3: "TTO", name: "Trinidad and Tobago", number: "780" },
  { code: "TN", code3: "TUN", name: "Tunisia", number: "788" },
  { code: "TR", code3: "TUR", name: "Turkey", number: "792" },
  { code: "TM", code3: "TKM", name: "Turkmenistan", number: "795" },
  {
    code: "TC",
    code3: "TCA",
    name: "Turks and Caicos Islands (the)",
    number: "796",
  },
  { code: "TV", code3: "TUV", name: "Tuvalu", number: "798" },
  { code: "UG", code3: "UGA", name: "Uganda", number: "800" },
  { code: "UA", code3: "UKR", name: "Ukraine", number: "804" },
  {
    code: "AE",
    code3: "ARE",
    name: "United Arab Emirates (the)",
    number: "784",
  },
  {
    code: "GB",
    code3: "GBR",
    name: "United Kingdom of Great Britain and Northern Ireland (the)",
    number: "826",
  },
  {
    code: "UM",
    code3: "UMI",
    name: "United States Minor Outlying Islands (the)",
    number: "581",
  },
  {
    code: "US",
    code3: "USA",
    name: "United States of America (the)",
    number: "840",
  },
  { code: "UY", code3: "URY", name: "Uruguay", number: "858" },
  { code: "UZ", code3: "UZB", name: "Uzbekistan", number: "860" },
  { code: "VU", code3: "VUT", name: "Vanuatu", number: "548" },
  {
    code: "VE",
    code3: "VEN",
    name: "Venezuela (Bolivarian Republic of)",
    number: "862",
  },
  { code: "VN", code3: "VNM", name: "Viet Nam", number: "704" },
  { code: "VG", code3: "VGB", name: "Virgin Islands (British)", number: "092" },
  { code: "VI", code3: "VIR", name: "Virgin Islands (U.S.)", number: "850" },
  { code: "WF", code3: "WLF", name: "Wallis and Futuna", number: "876" },
  { code: "EH", code3: "ESH", name: "Western Sahara", number: "732" },
  { code: "YE", code3: "YEM", name: "Yemen", number: "887" },
  { code: "ZM", code3: "ZMB", name: "Zambia", number: "894" },
  { code: "ZW", code3: "ZWE", name: "Zimbabwe", number: "716" },
  { code: "AX", code3: "ALA", name: "Åland Islands", number: "248" },
];

currencies = [
  "USD",
  "EUR",
  "AUD",
  "GBP",
  "BTC",
  "LTC",
  "ETH",
  "USDC",
  "BCH",
  "DAI",
  "USB",
  "IDK",
  "PAX",
  "USDK",
  "BUSD",
  "EURS",
  "USDT",
];

other_accounts = [
  {
    title: "Default",
    value: "",
  },
  {
    title: "Payment Agent",
    value: "--pa",
  },
  {
    title: "DP2P Advertiser",
    value: "--advertiser",
  },
  {
    title: "Authenticated",
    value: "--authenticated",
  },
  {
    title: "No Currency",
    value: "--no_currency",
  },
  {
    title: "No Deposit",
    value: "--no_deposit",
  },
];

qa_boxes = [
  "01",
  "03",
  "04",
  "06",
  "07",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "34",
  "36",
  "37",
  "39",
  "40",
  "41",
  "42",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "69",
  "",
  "",
];

proxies = [
  {
    title: "System",
    value: 0,
    config: {
      mode: "system",
    },
  },
  {
    title: "FE QA boxes",
    value: 1,
    config: {
      mode: "fixed_servers",
      rules: {
        fallbackProxy: { scheme: "socks5", port: 1337, host: "127.0.0.1" },
        bypassList: [],
      },
    },
  },
];

database_accounts = {
  CR: "cr01",
  VRTC: "vr01",
  MF: "mf01",
  MLT: "mlt01",
  MX: "mx01",
};

end_points = {
  "app.deriv.com": 16929,
  "binary.bot": 15438,
  "binary.com": 14473,
  "binary.me": 15284,
  "bot.binary.com": 1169,
  "bot.binary.me": 15438,
  "deriv.app": 11780,
  "deriv.app/bot": 19111,
  localhost: 9998,
  "localhost.binary.sx": 9999,
  "smarttrader.deriv.app": 22168,
  "staging-app.deriv.com": 16303,
  "staging.binary.com": 1098,
  "staging.deriv.app/bot": 19112,
  "ticktrade.binary.com": 10,
  "ticktrade.binary.me": 15488,
  "webtrader.binary.com": 11,
  "webtrader.binary.me": 15437,
};

const window_sizes = {
  menu: [300, 280],
  endpoint: [300, 350],
  "app-id-generator": [400, 420],
  "market-controller": [450, 260],
};

const menu = [
  {
    icon: "hashtag",
    title: "App ID Generator",
    target: "app-id-generator",
  },
  {
    icon: "hand-point-up",
    title: "Endpoint Manager",
    target: "endpoint",
  },
  {
    icon: "user",
    title: "Add Account",
    target: "add-account",
  },
  {
    icon: "coins",
    title: "Account Top-Up",
    target: "top-up",
  },
  {
    icon: "paw",
    title: "Cats or Dogs?",
    target: "cat-dog",
  },

  {
    icon: "balance-scale-right",
    title: "Market Controller",
    target: "market-controller",
  },
  // {
  //   icon: "flag",
  //   title: "Country & Residence",
  //   target: "country-code",
  // },
  {
    icon: "globe",
    title: "Deriv Static",
    target: "deriv-static",
  },
  {
    icon: "fighter-jet",
    title: "Quick Login",
    target: "quick-login",
  },
  // {
  //   icon: "road",
  //   title: "Release Manager",
  //   target: "release-manager",
  // },
  {
    icon: "copy",
    title: "File Merger",
    target: "git-file-merger",
  },
  {
    icon: "ban",
    title: "Anti-Phishing",
    target: "anti-phish",
    is_new: true,
  },
  {
    icon: "ban",
    title: "LastPass Blocker",
    target: "lastpass-blocker",
    is_new: true,
  },
  // {
  //   icon: "dizzy",
  //   title: "Proxy Manager",
  //   target: "proxy-manager",
  // },
];

const renderMenu = () => {
  let content = "";
  menu.forEach((m) => {
    content += `<div class="box-item router-link" data-target="${m.target}">
            <i class="fas fa-${m.icon} icon"></i>
            <span class="text">${m.title}</span>
            ${m.is_new ? '<span class="new-item">new</span>' : ""}
          </div>`;
  });

  return content;
};

const cleanKey = (key, prefix = "") => {
  return key.replace(`dtools_${prefix}`, "");
};

const getUnix = () => {
  return Math.floor(new Date().getTime() / 1000);
};

const close = () => {
  window.close();
};

const launch = (file) => {
  const popupWindow = window.open(
    chrome.extension.getURL(`popup.html`),
    file,
    `resizable=0,width=${window_sizes[file][0]},height=${window_sizes[file][1]}`
  );

  window.close();
};

const selectMenu = (e) => {
  const popups = [];

  if (popups.includes(e)) {
    launch(e);
  } else {
    $(".app-section").hide();
    $(`#${e}`).css("display", "flex");
  }

  if (e != "menu") {
    $(".top-icon-box").hide();
  } else {
    $(".top-icon-box").show();
  }
};

const popupCenter = ({ url, title, w, h }) => {
  const left = (screen.width - w) / 2;
  const top = (screen.height - h) / 2;

  const newWindow = window.open(
    url,
    title,
    `
    scrollbars=yes,
    width=${w}, 
    height=${h}, 
    top=${top}, 
    left=${left}
    `
  );

  if (window.focus) newWindow.focus();
};

const cookieManager = {
  country_code: null,
  load: () => {
    ["country_code"].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];

        cookieManager[key] = val;
      });
    });
  },
  init: () => {
    cookieManager.load();

    setInterval(() => {
      cookieManager.load();
    }, 10);
  },
};

const css = ['body%20%7B' 
,'%20%20min-width%3A%20300px%3B' 
,'%20%20height%3A%20auto%3B' 
,'%20%20background%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'button.btn-primary%20%7B' 
,'%20%20background%3A%20%23ff444f%20%21important%3B' 
,'%20%20border-color%3A%20%23ff444f%20%21important%3B' 
,'%7D' 
,'button.btn-secondary%20%7B' 
,'%20%20background%3A%20white%20%21important%3B' 
,'%20%20border-color%3A%20white%20%21important%3B' 
,'%20%20color%3A%20%23373737%20%21important%3B' 
,'%7D' 
,'button.btn-gray%20%7B' 
,'%20%20background%3A%20%23373737%20%21important%3B' 
,'%20%20border-color%3A%20%23373737%20%21important%3B' 
,'%20%20color%3A%20white%20%21important%3B' 
,'%7D' 
,'.lds-ellipsis%20%7B' 
,'%20%20margin-left%3A%20calc%2850%25%20-%2012%25%29%3B' 
,'%7D' 
,'h4%20%7B' 
,'%20%20font-size%3A%2016px%20%21important%3B' 
,'%7D' 
,'textarea%20%7B' 
,'%20%20resize%3A%20none%20%21important%3B' 
,'%7D' 
,'textarea.code%20%7B' 
,'%20%20height%3A%2020px%20%21important%3B' 
,'%20%20padding%3A%205px%20%21important%3B' 
,'%20%20font-size%3A%2010px%20%21important%3B' 
,'%20%20white-space%3A%20nowrap%20%21important%3B' 
,'%20%20outline%3A%20none%20%21important%3B' 
,'%20%20border-radius%3A%200px%20%21important%3B' 
,'%20%20line-height%3A%208px%20%21important%3B' 
,'%7D' 
,'textarea.code.big%20%7B' 
,'%20%20height%3A%2080px%20%21important%3B' 
,'%20%20white-space%3A%20pre-wrap%20%21important%3B' 
,'%20%20line-height%3A%2013px%20%21important%3B' 
,'%20%20font-size%3A%209px%20%21important%3B' 
,'%7D' 
,'textarea.code.mid%20%7B' 
,'%20%20height%3A%2050px%20%21important%3B' 
,'%20%20white-space%3A%20pre-wrap%20%21important%3B' 
,'%20%20line-height%3A%2013px%20%21important%3B' 
,'%20%20font-size%3A%209px%20%21important%3B' 
,'%7D' 
,'textarea.code.no-scroll%20%7B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%7D' 
,'label%20%7B' 
,'%20%20margin-bottom%3A%202px%20%21important%3B' 
,'%20%20font-size%3A%2012px%20%21important%3B' 
,'%20%20font-weight%3A%20bold%20%21important%3B' 
,'%7D' 
,'.main-wrapper%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20100vh%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.main-wrapper%20.main-container%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20100%25%3B' 
,'%20%20max-width%3A%20300px%3B' 
,'%7D' 
,'.main-wrapper%20.main-container.app-id-generator%20%7B' 
,'%20%20max-width%3A%20400px%3B' 
,'%20%20max-height%3A%20390px%3B' 
,'%7D' 
,'.main-wrapper%20.main-container.market-controller%20%7B' 
,'%20%20max-width%3A%20450px%3B' 
,'%20%20max-height%3A%20230px%3B' 
,'%7D' 
,'.main-container%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%20%20border%3A%20solid%201px%20%23dddddd%3B' 
,'%7D' 
,'.main-container%20.header%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20padding%3A%208px%3B' 
,'%20%20border-bottom%3A%20solid%201px%20%23dddddd%3B' 
,'%20%20margin-bottom%3A%205px%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.main-container%20.header%20.logo%20%7B' 
,'%20%20height%3A%2030px%3B' 
,'%20%20margin-right%3A%2010px%3B' 
,'%7D' 
,'.main-container%20.header%20.app-name%20%7B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20font-size%3A%2015px%3B' 
,'%7D' 
,'.main-container%20.header%20.top-icon-box%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20margin-left%3A%20auto%3B' 
,'%7D' 
,'.main-container%20.header%20.top-icon-box%20.top-icon%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%20%20margin%3A%200%205px%3B' 
,'%7D' 
,'.main-container%20.header%20.top-icon-box%20.top-icon.settings%20%7B' 
,'%20%20color%3A%20%23373737%3B' 
,'%7D' 
,'.main-container%20.header%20.top-icon-box%20.top-icon.changelog%20%7B' 
,'%20%20color%3A%20%234bb4b3%3B' 
,'%7D' 
,'.main-container%20.app-section%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%20%20padding%3A%2010px%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%7D' 
,'.main-container%20.app-section%20h4%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20margin-bottom%3A%2015px%3B' 
,'%7D' 
,'.main-container%20.app-section%20.back-btn%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20right%3A%207px%3B' 
,'%20%20top%3A%2013px%3B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%20%20background%3A%20%23f2f3f4%3B' 
,'%20%20padding%3A%205px%3B' 
,'%7D' 
,'.main-container%20.app-section%20%23aig-p2%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.main-container%20.app-section%20.footer-btn%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20justify-content%3A%20space-between%3B' 
,'%7D' 
,'.main-container%20.app-section%20.footer-btn%20button%20%7B' 
,'%20%20width%3A%20fit-content%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20justify-content%3A%20space-between%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20flex%3A%20none%3B' 
,'%20%20width%3A%2080px%3B' 
,'%20%20height%3A%2080px%3B' 
,'%20%20border-radius%3A%204px%3B' 
,'%20%20margin%3A%206px%3B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%20%20background%3A%20white%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%3Ahover%20%7B' 
,'%20%20background%3A%20%23ff444f%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%3Ahover%20.icon%2C' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%3Ahover%20.text%20%7B' 
,'%20%20color%3A%20white%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%20.icon%20%7B' 
,'%20%20margin-bottom%3A%205px%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%20.text%20%7B' 
,'%20%20font-size%3A%2012px%3B' 
,'%20%20color%3A%20%23373737%3B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20padding%3A%200px%2010px%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%7D' 
,'.main-container%20.app-section%23menu%20.box-menu-container%20.box-item%20.new-item%20%7B' 
,'%20%20background-color%3A%20%23ff444f%3B' 
,'%20%20color%3A%20%23f2f3f4%3B' 
,'%20%20text-transform%3A%20uppercase%3B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20-1px%3B' 
,'%20%20left%3A%20-10px%3B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20font-size%3A%2012px%3B' 
,'%20%20transform%3A%20rotate%28-21deg%29%3B' 
,'%20%20padding%3A%200%205px%3B' 
,'%20%20border-radius%3A%2010px%3B' 
,'%20%20animation%3A%20heartbeat%203s%20infinite%3B' 
,'%7D' 
,'.main-container%20.app-section%23endpoint%20.dc-checkbox__input%20%7B' 
,'%20%20margin-right%3A%205px%3B' 
,'%7D' 
,'.main-container%20.app-section.np%20%7B' 
,'%20%20padding%3A%200px%3B' 
,'%7D' 
,'.main-container%20.app-section.np%20h4%20%7B' 
,'%20%20padding%3A%2010px%3B' 
,'%7D' 
,'.main-container%20.app-section%23cat-dog%20.pet-box%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%7D' 
,'.main-container%20.app-section%23cat-dog%20.pet-box%20.pet-item%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20font-size%3A%2050px%3B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%20%20width%3A%2080px%3B' 
,'%20%20height%3A%2080px%3B' 
,'%20%20border-radius%3A%204px%3B' 
,'%20%20margin%3A%2010px%3B' 
,'%7D' 
,'.main-container%20.app-section%23cat-dog%20.pet-box%20.pet-item%3Ahover%20%7B' 
,'%20%20color%3A%20%23ff444f%3B' 
,'%7D' 
,'.delete-icon%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'.delete-icon%3Ahover%20%7B' 
,'%20%20background%3A%20red%3B' 
,'%20%20color%3A%20white%3B' 
,'%7D' 
,'.profile-container%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20border-bottom%3A%20solid%201px%20%23dddddd%3B' 
,'%20%20padding%3A%2010px%3B' 
,'%7D' 
,'.profile-container%20.photo%20%7B' 
,'%20%20width%3A%2050px%3B' 
,'%20%20height%3A%2050px%3B' 
,'%20%20border-radius%3A%2010px%3B' 
,'%20%20margin%3A%200%2010px%3B' 
,'%20%20padding%3A%202px%3B' 
,'%20%20background%3A%20%23eee%3B' 
,'%7D' 
,'.profile-container%20.details%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%7D' 
,'.profile-container%20.details%20.name%20%7B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20color%3A%20%23373737%3B' 
,'%20%20font-size%3A%2015px%3B' 
,'%20%20margin-bottom%3A%202px%3B' 
,'%7D' 
,'.profile-container%20.details%20.email%20%7B' 
,'%20%20font-size%3A%2012px%3B' 
,'%7D' 
,'.body-container%20%7B' 
,'%20%20height%3A%20auto%3B' 
,'%7D' 
,'%5Bdata-tooltip%5D%3Anot%28%5Bdata-tooltip%3D%22%22%5D%29%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%7D' 
,'%5Bdata-tooltip%5D%3Anot%28%5Bdata-tooltip%3D%22%22%5D%29%3A%3Aafter%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20opacity%3A%200%3B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%20%20content%3A%20attr%28data-tooltip%29%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20top%3A%20calc%28100%25%29%3B' 
,'%20%20border-radius%3A%203px%3B' 
,'%20%20background-color%3A%20%23ff444f%3B' 
,'%20%20color%3A%20white%3B' 
,'%20%20z-index%3A%2010%3B' 
,'%20%20padding%3A%201px%205px%3B' 
,'%20%20width%3A%20fit-content%3B' 
,'%20%20transform%3A%20translateY%28-20px%29%3B' 
,'%20%20transition%3A%20all%20150ms%20cubic-bezier%280.25%2C%200.8%2C%200.25%2C%201%29%3B' 
,'%20%20height%3A%20fit-content%3B' 
,'%20%20border-radius%3A%202px%3B' 
,'%20%20font-size%3A%2010px%3B' 
,'%7D' 
,'%5Bdata-tooltip%5D%3Anot%28%5Bdata-tooltip%3D%22%22%5D%29%3Ahover%3A%3Aafter%20%7B' 
,'%20%20opacity%3A%201%3B' 
,'%20%20transform%3A%20translateY%280%29%3B' 
,'%20%20transition-duration%3A%20300ms%3B' 
,'%7D' 
,'%23changelog-container%20h4%20%7B' 
,'%20%20margin-bottom%3A%203px%3B' 
,'%7D' 
,'%23changelog-container%20.log-item%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20border-top%3A%20solid%201px%20%23dddddd%3B' 
,'%20%20margin%3A%200%3B' 
,'%20%20padding%3A%2010px%3B' 
,'%7D' 
,'%23changelog-container%20.log-item%20.version%20%7B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20font-size%3A%2013px%3B' 
,'%20%20margin%3A%200%200%205px%3B' 
,'%7D' 
,'%23changelog-container%20.log-item%20.desc%20%7B' 
,'%20%20font-size%3A%2012px%3B' 
,'%7D' 
,'%23changelog-container%20.log-item%20.log-list%20.log-title%20%7B' 
,'%20%20font-size%3A%2012px%3B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%7D' 
,'%23changelog-container%20.log-item%20.log-list%20ul%20li%20%7B' 
,'%20%20font-size%3A%2012px%3B' 
,'%7D' 
,'.small-input-group%20.input-group-text%20%7B' 
,'%20%20height%3A%2038px%3B' 
,'%20%20min-width%3A%20125px%3B' 
,'%7D' 
,'.small-input-group%20.input-group-text.md%20%7B' 
,'%20%20min-width%3A%2080px%3B' 
,'%7D' 
,'.small-input-group%20.input-group-text.sm%20%7B' 
,'%20%20min-width%3A%2050px%3B' 
,'%7D' 
,'.small-input-group%20.input-group-text.xs%20%7B' 
,'%20%20min-width%3A%2030px%3B' 
,'%7D' 
,'.small-input-group%20.custom-select%20%7B' 
,'%20%20outline%3A%20none%20%21important%3B' 
,'%7D' 
,'.small-input-group%20button%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%20%20height%3A%2038px%3B' 
,'%20%20border%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-left%3A%20none%3B' 
,'%20%20outline%3A%20none%20%21important%3B' 
,'%7D' 
,'.form-check-input%20%7B' 
,'%20%20margin-top%3A%200.47rem%20%21important%3B' 
,'%7D' 
,'.offline-container%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20background%3A%20%23d6dadb%3B' 
,'%20%20padding%3A%2010px%3B' 
,'%20%20margin%3A%20-5px%200%202px%3B' 
,'%20%20box-shadow%3A%20%23abc%200%200%20150px%3B' 
,'%7D' 
,'.offline-container%20.icon%20%7B' 
,'%20%20color%3A%20%23373737%3B' 
,'%20%20font-size%3A%2030px%3B' 
,'%20%20margin-right%3A%2012px%3B' 
,'%20%20align-self%3A%20center%3B' 
,'%7D' 
,'.offline-container%20.alert-message%20%7B' 
,'%20%20color%3A%20%23373737%3B' 
,'%20%20font-size%3A%2011px%3B' 
,'%20%20font-weight%3A%20normal%3B' 
,'%7D' 
,'.offline-container%20.alert-message%20strong%20%7B' 
,'%20%20font-weight%3A%20bolder%3B' 
,'%20%20color%3A%20%234bb4b3%3B' 
,'%7D' 
,'.note-msg%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20padding%3A%205px%3B' 
,'%20%20font-size%3A%2010px%3B' 
,'%20%20font-weight%3A%20100%3B' 
,'%7D' 
,'.settings-form%20%7B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.settings-form%20.toggle%20%7B' 
,'%20%20margin-left%3A%20auto%3B' 
,'%7D' 
,'.toggle%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%20%20display%3A%20inline-block%3B' 
,'%7D' 
,'.toggle-switch%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20background%3A%20%23ccc%3B' 
,'%20%20border-radius%3A%2016px%3B' 
,'%20%20width%3A%2058px%3B' 
,'%20%20height%3A%2032px%3B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%20%20transition%3A%20background%200.25s%3B' 
,'%7D' 
,'.toggle-switch%3Abefore%2C' 
,'.toggle-switch%3Aafter%20%7B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.toggle-switch%3Abefore%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20background%3A%20linear-gradient%28to%20bottom%2C%20%23fff%200%25%2C%20%23eee%20100%25%29%3B' 
,'%20%20border-radius%3A%2050%25%3B' 
,'%20%20box-shadow%3A%200%200%200%201px%20rgba%280%2C%200%2C%200%2C%200.25%29%3B' 
,'%20%20width%3A%2024px%3B' 
,'%20%20height%3A%2024px%3B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%204px%3B' 
,'%20%20left%3A%204px%3B' 
,'%20%20transition%3A%20left%200.25s%3B' 
,'%7D' 
,'.toggle%3Ahover%20.toggle-switch%3Abefore%20%7B' 
,'%20%20background%3A%20linear-gradient%28to%20bottom%2C%20%23fff%200%25%2C%20%23fff%20100%25%29%3B' 
,'%20%20box-shadow%3A%200%200%200%201px%20rgba%280%2C%200%2C%200%2C%200.5%29%3B' 
,'%7D' 
,'.toggle-checkbox%3Achecked%20+%20.toggle-switch%20%7B' 
,'%20%20background%3A%20%23ff444f%3B' 
,'%7D' 
,'.toggle-checkbox%3Achecked%20+%20.toggle-switch%3Abefore%20%7B' 
,'%20%20left%3A%2030px%3B' 
,'%7D' 
,'.toggle-checkbox%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20visibility%3A%20hidden%3B' 
,'%7D' 
,'.toggle-label%20%7B' 
,'%20%20margin-left%3A%205px%3B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20top%3A%202px%3B' 
,'%7D' 
,'table%20th%2C' 
,'table%20td%20%7B' 
,'%20%20padding%3A%205px%3B' 
,'%20%20font-size%3A%2010px%3B' 
,'%7D' 
,'table%20th%20select%2C' 
,'table%20td%20select%20%7B' 
,'%20%20max-width%3A%20120px%3B' 
,'%7D' 
,'table%20tbody%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20overflow%3A%20auto%3B' 
,'%20%20overflow-x%3A%20hidden%3B' 
,'%20%20max-height%3A%20300px%3B' 
,'%7D' 
,'.info-box%20%7B' 
,'%20%20padding%3A%2010px%3B' 
,'%20%20font-size%3A%2012px%3B' 
,'%7D' 
,'.info-box%20strong%20%7B' 
,'%20%20color%3A%20var%28--red%29%3B' 
,'%7D' 
,'.data-box%20%7B' 
,'%20%20font-weight%3A%20bold%3B' 
,'%20%20font-size%3A%2015px%3B' 
,'%20%20padding%3A%2010px%3B' 
,'%7D' 
,'.data-box%20strong%20%7B' 
,'%20%20color%3A%20var%28--red%29%3B' 
,'%7D' 
,'body.dark-theme%20%7B' 
,'%20%20background%3A%20%23151717%20%21important%3B' 
,'%20%20background%3A%20-webkit-linear-gradient%28to%20left%2C%20%23373737%2C%20%23151717%29%20%21important%3B' 
,'%20%20background%3A%20linear-gradient%28to%20left%2C%20%23373737%2C%20%23151717%29%20%21important%3B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.header%20%7B' 
,'%20%20border-color%3A%20%23373737%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.back-btn%20%7B' 
,'%20%20background%3A%20transparent%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.app-name%20%7B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.top-icon.settings%20%7B' 
,'%20%20color%3A%20%23ff444f%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.main-container%20%7B' 
,'%20%20border%3A%20solid%201px%20%23373737%3B' 
,'%7D' 
,'body.dark-theme%20.offline-container%20%7B' 
,'%20%20background%3A%20%23373737%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.offline-container%20.alert-message%20%7B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.profile-container%20%7B' 
,'%20%20border-color%3A%20%23373737%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.profile-container%20.photo%20%7B' 
,'%20%20background%3A%20%23373737%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.profile-container%20.name%2C' 
,'body.dark-theme%20.profile-container%20.email%20%7B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.box-menu-container%20.box-item%20%7B' 
,'%20%20background%3A%20%23373737%20%21important%3B' 
,'%20%20box-shadow%3A%20%23151717%20-8px%20-3px%205px%3B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.box-menu-container%20.box-item%20.text%20%7B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.box-menu-container%20.box-item%3Ahover%20%7B' 
,'%20%20background%3A%20%23ff444f%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.code%2C' 
,'body.dark-theme%20input%2C' 
,'body.dark-theme%20select%20%7B' 
,'%20%20background%3A%20%23373737%20%21important%3B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'body.dark-theme%20.input-group-text%20%7B' 
,'%20%20background%3A%20%23232526%3B' 
,'%20%20background%3A%20-webkit-linear-gradient%28to%20right%2C%20%23414345%2C%20%23232526%29%3B' 
,'%20%20background%3A%20linear-gradient%28to%20right%2C%20%23414345%2C%20%23232526%29%3B' 
,'%20%20color%3A%20%23f2f3f4%20%21important%3B' 
,'%7D' 
,'@keyframes%20heartbeat%20%7B' 
,'%20%200%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%280.75%29%3B' 
,'%20%20%7D' 
,'%20%2020%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%281%29%3B' 
,'%20%20%7D' 
,'%20%2040%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%280.75%29%3B' 
,'%20%20%7D' 
,'%20%2060%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%281%29%3B' 
,'%20%20%7D' 
,'%20%2080%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%280.75%29%3B' 
,'%20%20%7D' 
,'%20%20100%25%20%7B' 
,'%20%20%20%20transform%3A%20scale%280.75%29%3B' 
,'%20%20%7D' 
,'%7D' 
,'%3Aroot%20%7B' 
,'%20%20--blue%3A%20%23007bff%3B' 
,'%20%20--indigo%3A%20%236610f2%3B' 
,'%20%20--purple%3A%20%236f42c1%3B' 
,'%20%20--pink%3A%20%23e83e8c%3B' 
,'%20%20--red%3A%20%23dc3545%3B' 
,'%20%20--orange%3A%20%23fd7e14%3B' 
,'%20%20--yellow%3A%20%23ffc107%3B' 
,'%20%20--green%3A%20%2328a745%3B' 
,'%20%20--teal%3A%20%2320c997%3B' 
,'%20%20--cyan%3A%20%2317a2b8%3B' 
,'%20%20--white%3A%20%23fff%3B' 
,'%20%20--gray%3A%20%236c757d%3B' 
,'%20%20--gray-dark%3A%20%23343a40%3B' 
,'%20%20--primary%3A%20%23007bff%3B' 
,'%20%20--secondary%3A%20%236c757d%3B' 
,'%20%20--success%3A%20%2328a745%3B' 
,'%20%20--info%3A%20%2317a2b8%3B' 
,'%20%20--warning%3A%20%23ffc107%3B' 
,'%20%20--danger%3A%20%23dc3545%3B' 
,'%20%20--light%3A%20%23f8f9fa%3B' 
,'%20%20--dark%3A%20%23343a40%3B' 
,'%20%20--breakpoint-xs%3A%200%3B' 
,'%20%20--breakpoint-sm%3A%20576px%3B' 
,'%20%20--breakpoint-md%3A%20768px%3B' 
,'%20%20--breakpoint-lg%3A%20992px%3B' 
,'%20%20--breakpoint-xl%3A%201200px%3B' 
,'%20%20--font-family-sans-serif%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C' 
,'%20%20%20%20Roboto%2C%20%22Helvetica%20Neue%22%2C%20Arial%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C' 
,'%20%20%20%20%22Segoe%20UI%20Emoji%22%2C%20%22Segoe%20UI%20Symbol%22%3B' 
,'%20%20--font-family-monospace%3A%20SFMono-Regular%2C%20Menlo%2C%20Monaco%2C%20Consolas%2C' 
,'%20%20%20%20%22Liberation%20Mono%22%2C%20%22Courier%20New%22%2C%20monospace%3B' 
,'%7D' 
,'*%2C' 
,'%3A%3Aafter%2C' 
,'%3A%3Abefore%20%7B' 
,'%20%20box-sizing%3A%20border-box%3B' 
,'%7D' 
,'html%20%7B' 
,'%20%20font-family%3A%20sans-serif%3B' 
,'%20%20line-height%3A%201.15%3B' 
,'%20%20-webkit-text-size-adjust%3A%20100%25%3B' 
,'%20%20-ms-text-size-adjust%3A%20100%25%3B' 
,'%20%20-ms-overflow-style%3A%20scrollbar%3B' 
,'%20%20-webkit-tap-highlight-color%3A%20transparent%3B' 
,'%7D' 
,'@-ms-viewport%20%7B' 
,'%20%20width%3A%20device-width%3B' 
,'%7D' 
,'article%2C' 
,'aside%2C' 
,'dialog%2C' 
,'figcaption%2C' 
,'figure%2C' 
,'footer%2C' 
,'header%2C' 
,'hgroup%2C' 
,'main%2C' 
,'nav%2C' 
,'section%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'body%20%7B' 
,'%20%20margin%3A%200%3B' 
,'%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C' 
,'%20%20%20%20%22Helvetica%20Neue%22%2C%20Arial%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C%20%22Segoe%20UI%20Emoji%22%2C' 
,'%20%20%20%20%22Segoe%20UI%20Symbol%22%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20text-align%3A%20left%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'%5Btabindex%3D%22-1%22%5D%3Afocus%20%7B' 
,'%20%20outline%3A%200%20%21important%3B' 
,'%7D' 
,'hr%20%7B' 
,'%20%20box-sizing%3A%20content-box%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20overflow%3A%20visible%3B' 
,'%7D' 
,'h1%2C' 
,'h2%2C' 
,'h3%2C' 
,'h4%2C' 
,'h5%2C' 
,'h6%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%7D' 
,'p%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%7D' 
,'abbr%5Bdata-original-title%5D%2C' 
,'abbr%5Btitle%5D%20%7B' 
,'%20%20text-decoration%3A%20underline%3B' 
,'%20%20-webkit-text-decoration%3A%20underline%20dotted%3B' 
,'%20%20text-decoration%3A%20underline%20dotted%3B' 
,'%20%20cursor%3A%20help%3B' 
,'%20%20border-bottom%3A%200%3B' 
,'%7D' 
,'address%20%7B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20font-style%3A%20normal%3B' 
,'%20%20line-height%3A%20inherit%3B' 
,'%7D' 
,'dl%2C' 
,'ol%2C' 
,'ul%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%7D' 
,'ol%20ol%2C' 
,'ol%20ul%2C' 
,'ul%20ol%2C' 
,'ul%20ul%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'dt%20%7B' 
,'%20%20font-weight%3A%20700%3B' 
,'%7D' 
,'dd%20%7B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'blockquote%20%7B' 
,'%20%20margin%3A%200%200%201rem%3B' 
,'%7D' 
,'dfn%20%7B' 
,'%20%20font-style%3A%20italic%3B' 
,'%7D' 
,'b%2C' 
,'strong%20%7B' 
,'%20%20font-weight%3A%20bolder%3B' 
,'%7D' 
,'small%20%7B' 
,'%20%20font-size%3A%2080%25%3B' 
,'%7D' 
,'sub%2C' 
,'sup%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20font-size%3A%2075%25%3B' 
,'%20%20line-height%3A%200%3B' 
,'%20%20vertical-align%3A%20baseline%3B' 
,'%7D' 
,'sub%20%7B' 
,'%20%20bottom%3A%20-0.25em%3B' 
,'%7D' 
,'sup%20%7B' 
,'%20%20top%3A%20-0.5em%3B' 
,'%7D' 
,'a%20%7B' 
,'%20%20color%3A%20%23007bff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20-webkit-text-decoration-skip%3A%20objects%3B' 
,'%7D' 
,'a%3Ahover%20%7B' 
,'%20%20color%3A%20%230056b3%3B' 
,'%20%20text-decoration%3A%20underline%3B' 
,'%7D' 
,'a%3Anot%28%5Bhref%5D%29%3Anot%28%5Btabindex%5D%29%20%7B' 
,'%20%20color%3A%20inherit%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'a%3Anot%28%5Bhref%5D%29%3Anot%28%5Btabindex%5D%29%3Afocus%2C' 
,'a%3Anot%28%5Bhref%5D%29%3Anot%28%5Btabindex%5D%29%3Ahover%20%7B' 
,'%20%20color%3A%20inherit%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'a%3Anot%28%5Bhref%5D%29%3Anot%28%5Btabindex%5D%29%3Afocus%20%7B' 
,'%20%20outline%3A%200%3B' 
,'%7D' 
,'code%2C' 
,'kbd%2C' 
,'pre%2C' 
,'samp%20%7B' 
,'%20%20font-family%3A%20monospace%2C%20monospace%3B' 
,'%20%20font-size%3A%201em%3B' 
,'%7D' 
,'pre%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20overflow%3A%20auto%3B' 
,'%20%20-ms-overflow-style%3A%20scrollbar%3B' 
,'%7D' 
,'figure%20%7B' 
,'%20%20margin%3A%200%200%201rem%3B' 
,'%7D' 
,'img%20%7B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%20%20border-style%3A%20none%3B' 
,'%7D' 
,'svg%3Anot%28%3Aroot%29%20%7B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%7D' 
,'table%20%7B' 
,'%20%20border-collapse%3A%20collapse%3B' 
,'%7D' 
,'caption%20%7B' 
,'%20%20padding-top%3A%200.75rem%3B' 
,'%20%20padding-bottom%3A%200.75rem%3B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20text-align%3A%20left%3B' 
,'%20%20caption-side%3A%20bottom%3B' 
,'%7D' 
,'th%20%7B' 
,'%20%20text-align%3A%20inherit%3B' 
,'%7D' 
,'label%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%7D' 
,'button%20%7B' 
,'%20%20border-radius%3A%200%3B' 
,'%7D' 
,'button%3Afocus%20%7B' 
,'%20%20outline%3A%201px%20dotted%3B' 
,'%20%20outline%3A%205px%20auto%20-webkit-focus-ring-color%3B' 
,'%7D' 
,'button%2C' 
,'input%2C' 
,'optgroup%2C' 
,'select%2C' 
,'textarea%20%7B' 
,'%20%20margin%3A%200%3B' 
,'%20%20font-family%3A%20inherit%3B' 
,'%20%20font-size%3A%20inherit%3B' 
,'%20%20line-height%3A%20inherit%3B' 
,'%7D' 
,'button%2C' 
,'input%20%7B' 
,'%20%20overflow%3A%20visible%3B' 
,'%7D' 
,'button%2C' 
,'select%20%7B' 
,'%20%20text-transform%3A%20none%3B' 
,'%7D' 
,'%5Btype%3D%22reset%22%5D%2C' 
,'%5Btype%3D%22submit%22%5D%2C' 
,'button%2C' 
,'html%20%5Btype%3D%22button%22%5D%20%7B' 
,'%20%20-webkit-appearance%3A%20button%3B' 
,'%7D' 
,'%5Btype%3D%22button%22%5D%3A%3A-moz-focus-inner%2C' 
,'%5Btype%3D%22reset%22%5D%3A%3A-moz-focus-inner%2C' 
,'%5Btype%3D%22submit%22%5D%3A%3A-moz-focus-inner%2C' 
,'button%3A%3A-moz-focus-inner%20%7B' 
,'%20%20padding%3A%200%3B' 
,'%20%20border-style%3A%20none%3B' 
,'%7D' 
,'input%5Btype%3D%22checkbox%22%5D%2C' 
,'input%5Btype%3D%22radio%22%5D%20%7B' 
,'%20%20box-sizing%3A%20border-box%3B' 
,'%20%20padding%3A%200%3B' 
,'%7D' 
,'input%5Btype%3D%22date%22%5D%2C' 
,'input%5Btype%3D%22datetime-local%22%5D%2C' 
,'input%5Btype%3D%22month%22%5D%2C' 
,'input%5Btype%3D%22time%22%5D%20%7B' 
,'%20%20-webkit-appearance%3A%20listbox%3B' 
,'%7D' 
,'textarea%20%7B' 
,'%20%20overflow%3A%20auto%3B' 
,'%20%20resize%3A%20vertical%3B' 
,'%7D' 
,'fieldset%20%7B' 
,'%20%20min-width%3A%200%3B' 
,'%20%20padding%3A%200%3B' 
,'%20%20margin%3A%200%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'legend%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20padding%3A%200%3B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%20%20font-size%3A%201.5rem%3B' 
,'%20%20line-height%3A%20inherit%3B' 
,'%20%20color%3A%20inherit%3B' 
,'%20%20white-space%3A%20normal%3B' 
,'%7D' 
,'progress%20%7B' 
,'%20%20vertical-align%3A%20baseline%3B' 
,'%7D' 
,'%5Btype%3D%22number%22%5D%3A%3A-webkit-inner-spin-button%2C' 
,'%5Btype%3D%22number%22%5D%3A%3A-webkit-outer-spin-button%20%7B' 
,'%20%20height%3A%20auto%3B' 
,'%7D' 
,'%5Btype%3D%22search%22%5D%20%7B' 
,'%20%20outline-offset%3A%20-2px%3B' 
,'%20%20-webkit-appearance%3A%20none%3B' 
,'%7D' 
,'%5Btype%3D%22search%22%5D%3A%3A-webkit-search-cancel-button%2C' 
,'%5Btype%3D%22search%22%5D%3A%3A-webkit-search-decoration%20%7B' 
,'%20%20-webkit-appearance%3A%20none%3B' 
,'%7D' 
,'%3A%3A-webkit-file-upload-button%20%7B' 
,'%20%20font%3A%20inherit%3B' 
,'%20%20-webkit-appearance%3A%20button%3B' 
,'%7D' 
,'output%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%7D' 
,'summary%20%7B' 
,'%20%20display%3A%20list-item%3B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'template%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'%5Bhidden%5D%20%7B' 
,'%20%20display%3A%20none%20%21important%3B' 
,'%7D' 
,'.h1%2C' 
,'.h2%2C' 
,'.h3%2C' 
,'.h4%2C' 
,'.h5%2C' 
,'.h6%2C' 
,'h1%2C' 
,'h2%2C' 
,'h3%2C' 
,'h4%2C' 
,'h5%2C' 
,'h6%20%7B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%20%20font-family%3A%20inherit%3B' 
,'%20%20font-weight%3A%20500%3B' 
,'%20%20line-height%3A%201.2%3B' 
,'%20%20color%3A%20inherit%3B' 
,'%7D' 
,'.h1%2C' 
,'h1%20%7B' 
,'%20%20font-size%3A%202.5rem%3B' 
,'%7D' 
,'.h2%2C' 
,'h2%20%7B' 
,'%20%20font-size%3A%202rem%3B' 
,'%7D' 
,'.h3%2C' 
,'h3%20%7B' 
,'%20%20font-size%3A%201.75rem%3B' 
,'%7D' 
,'.h4%2C' 
,'h4%20%7B' 
,'%20%20font-size%3A%201.5rem%3B' 
,'%7D' 
,'.h5%2C' 
,'h5%20%7B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%7D' 
,'.h6%2C' 
,'h6%20%7B' 
,'%20%20font-size%3A%201rem%3B' 
,'%7D' 
,'.lead%20%7B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20font-weight%3A%20300%3B' 
,'%7D' 
,'.display-1%20%7B' 
,'%20%20font-size%3A%206rem%3B' 
,'%20%20font-weight%3A%20300%3B' 
,'%20%20line-height%3A%201.2%3B' 
,'%7D' 
,'.display-2%20%7B' 
,'%20%20font-size%3A%205.5rem%3B' 
,'%20%20font-weight%3A%20300%3B' 
,'%20%20line-height%3A%201.2%3B' 
,'%7D' 
,'.display-3%20%7B' 
,'%20%20font-size%3A%204.5rem%3B' 
,'%20%20font-weight%3A%20300%3B' 
,'%20%20line-height%3A%201.2%3B' 
,'%7D' 
,'.display-4%20%7B' 
,'%20%20font-size%3A%203.5rem%3B' 
,'%20%20font-weight%3A%20300%3B' 
,'%20%20line-height%3A%201.2%3B' 
,'%7D' 
,'hr%20%7B' 
,'%20%20margin-top%3A%201rem%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20border%3A%200%3B' 
,'%20%20border-top%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.1%29%3B' 
,'%7D' 
,'.small%2C' 
,'small%20%7B' 
,'%20%20font-size%3A%2080%25%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%7D' 
,'.mark%2C' 
,'mark%20%7B' 
,'%20%20padding%3A%200.2em%3B' 
,'%20%20background-color%3A%20%23fcf8e3%3B' 
,'%7D' 
,'.list-unstyled%20%7B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%7D' 
,'.list-inline%20%7B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%7D' 
,'.list-inline-item%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%7D' 
,'.list-inline-item%3Anot%28%3Alast-child%29%20%7B' 
,'%20%20margin-right%3A%200.5rem%3B' 
,'%7D' 
,'.initialism%20%7B' 
,'%20%20font-size%3A%2090%25%3B' 
,'%20%20text-transform%3A%20uppercase%3B' 
,'%7D' 
,'.blockquote%20%7B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%7D' 
,'.blockquote-footer%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20font-size%3A%2080%25%3B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.blockquote-footer%3A%3Abefore%20%7B' 
,'%20%20content%3A%20%22%5C2014%20%5C00A0%22%3B' 
,'%7D' 
,'.img-fluid%20%7B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20height%3A%20auto%3B' 
,'%7D' 
,'.img-thumbnail%20%7B' 
,'%20%20padding%3A%200.25rem%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border%3A%201px%20solid%20%23dee2e6%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20height%3A%20auto%3B' 
,'%7D' 
,'.figure%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%7D' 
,'.figure-img%20%7B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%20%20line-height%3A%201%3B' 
,'%7D' 
,'.figure-caption%20%7B' 
,'%20%20font-size%3A%2090%25%3B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'code%2C' 
,'kbd%2C' 
,'pre%2C' 
,'samp%20%7B' 
,'%20%20font-family%3A%20SFMono-Regular%2C%20Menlo%2C%20Monaco%2C%20Consolas%2C%20%22Liberation%20Mono%22%2C' 
,'%20%20%20%20%22Courier%20New%22%2C%20monospace%3B' 
,'%7D' 
,'code%20%7B' 
,'%20%20font-size%3A%2087.5%25%3B' 
,'%20%20color%3A%20%23e83e8c%3B' 
,'%20%20word-break%3A%20break-word%3B' 
,'%7D' 
,'a%20%3E%20code%20%7B' 
,'%20%20color%3A%20inherit%3B' 
,'%7D' 
,'kbd%20%7B' 
,'%20%20padding%3A%200.2rem%200.4rem%3B' 
,'%20%20font-size%3A%2087.5%25%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23212529%3B' 
,'%20%20border-radius%3A%200.2rem%3B' 
,'%7D' 
,'kbd%20kbd%20%7B' 
,'%20%20padding%3A%200%3B' 
,'%20%20font-size%3A%20100%25%3B' 
,'%20%20font-weight%3A%20700%3B' 
,'%7D' 
,'pre%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20font-size%3A%2087.5%25%3B' 
,'%20%20color%3A%20%23212529%3B' 
,'%7D' 
,'pre%20code%20%7B' 
,'%20%20font-size%3A%20inherit%3B' 
,'%20%20color%3A%20inherit%3B' 
,'%20%20word-break%3A%20normal%3B' 
,'%7D' 
,'.pre-scrollable%20%7B' 
,'%20%20max-height%3A%20340px%3B' 
,'%20%20overflow-y%3A%20scroll%3B' 
,'%7D' 
,'.container%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding-right%3A%2015px%3B' 
,'%20%20padding-left%3A%2015px%3B' 
,'%20%20margin-right%3A%20auto%3B' 
,'%20%20margin-left%3A%20auto%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.container%20%7B' 
,'%20%20%20%20max-width%3A%20540px%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.container%20%7B' 
,'%20%20%20%20max-width%3A%20720px%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.container%20%7B' 
,'%20%20%20%20max-width%3A%20960px%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.container%20%7B' 
,'%20%20%20%20max-width%3A%201140px%3B' 
,'%20%20%7D' 
,'%7D' 
,'.container-fluid%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding-right%3A%2015px%3B' 
,'%20%20padding-left%3A%2015px%3B' 
,'%20%20margin-right%3A%20auto%3B' 
,'%20%20margin-left%3A%20auto%3B' 
,'%7D' 
,'.row%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20margin-right%3A%20-15px%3B' 
,'%20%20margin-left%3A%20-15px%3B' 
,'%7D' 
,'.no-gutters%20%7B' 
,'%20%20margin-right%3A%200%3B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.no-gutters%20%3E%20.col%2C' 
,'.no-gutters%20%3E%20%5Bclass*%3D%22col-%22%5D%20%7B' 
,'%20%20padding-right%3A%200%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%7D' 
,'.col%2C' 
,'.col-1%2C' 
,'.col-10%2C' 
,'.col-11%2C' 
,'.col-12%2C' 
,'.col-2%2C' 
,'.col-3%2C' 
,'.col-4%2C' 
,'.col-5%2C' 
,'.col-6%2C' 
,'.col-7%2C' 
,'.col-8%2C' 
,'.col-9%2C' 
,'.col-auto%2C' 
,'.col-lg%2C' 
,'.col-lg-1%2C' 
,'.col-lg-10%2C' 
,'.col-lg-11%2C' 
,'.col-lg-12%2C' 
,'.col-lg-2%2C' 
,'.col-lg-3%2C' 
,'.col-lg-4%2C' 
,'.col-lg-5%2C' 
,'.col-lg-6%2C' 
,'.col-lg-7%2C' 
,'.col-lg-8%2C' 
,'.col-lg-9%2C' 
,'.col-lg-auto%2C' 
,'.col-md%2C' 
,'.col-md-1%2C' 
,'.col-md-10%2C' 
,'.col-md-11%2C' 
,'.col-md-12%2C' 
,'.col-md-2%2C' 
,'.col-md-3%2C' 
,'.col-md-4%2C' 
,'.col-md-5%2C' 
,'.col-md-6%2C' 
,'.col-md-7%2C' 
,'.col-md-8%2C' 
,'.col-md-9%2C' 
,'.col-md-auto%2C' 
,'.col-sm%2C' 
,'.col-sm-1%2C' 
,'.col-sm-10%2C' 
,'.col-sm-11%2C' 
,'.col-sm-12%2C' 
,'.col-sm-2%2C' 
,'.col-sm-3%2C' 
,'.col-sm-4%2C' 
,'.col-sm-5%2C' 
,'.col-sm-6%2C' 
,'.col-sm-7%2C' 
,'.col-sm-8%2C' 
,'.col-sm-9%2C' 
,'.col-sm-auto%2C' 
,'.col-xl%2C' 
,'.col-xl-1%2C' 
,'.col-xl-10%2C' 
,'.col-xl-11%2C' 
,'.col-xl-12%2C' 
,'.col-xl-2%2C' 
,'.col-xl-3%2C' 
,'.col-xl-4%2C' 
,'.col-xl-5%2C' 
,'.col-xl-6%2C' 
,'.col-xl-7%2C' 
,'.col-xl-8%2C' 
,'.col-xl-9%2C' 
,'.col-xl-auto%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20min-height%3A%201px%3B' 
,'%20%20padding-right%3A%2015px%3B' 
,'%20%20padding-left%3A%2015px%3B' 
,'%7D' 
,'.col%20%7B' 
,'%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20flex-basis%3A%200%3B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20flex-grow%3A%201%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%7D' 
,'.col-auto%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20flex%3A%200%200%20auto%3B' 
,'%20%20width%3A%20auto%3B' 
,'%20%20max-width%3A%20none%3B' 
,'%7D' 
,'.col-1%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%208.333333%25%3B' 
,'%20%20flex%3A%200%200%208.333333%25%3B' 
,'%20%20max-width%3A%208.333333%25%3B' 
,'%7D' 
,'.col-2%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2016.666667%25%3B' 
,'%20%20flex%3A%200%200%2016.666667%25%3B' 
,'%20%20max-width%3A%2016.666667%25%3B' 
,'%7D' 
,'.col-3%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2025%25%3B' 
,'%20%20flex%3A%200%200%2025%25%3B' 
,'%20%20max-width%3A%2025%25%3B' 
,'%7D' 
,'.col-4%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2033.333333%25%3B' 
,'%20%20flex%3A%200%200%2033.333333%25%3B' 
,'%20%20max-width%3A%2033.333333%25%3B' 
,'%7D' 
,'.col-5%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2041.666667%25%3B' 
,'%20%20flex%3A%200%200%2041.666667%25%3B' 
,'%20%20max-width%3A%2041.666667%25%3B' 
,'%7D' 
,'.col-6%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2050%25%3B' 
,'%20%20flex%3A%200%200%2050%25%3B' 
,'%20%20max-width%3A%2050%25%3B' 
,'%7D' 
,'.col-7%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2058.333333%25%3B' 
,'%20%20flex%3A%200%200%2058.333333%25%3B' 
,'%20%20max-width%3A%2058.333333%25%3B' 
,'%7D' 
,'.col-8%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2066.666667%25%3B' 
,'%20%20flex%3A%200%200%2066.666667%25%3B' 
,'%20%20max-width%3A%2066.666667%25%3B' 
,'%7D' 
,'.col-9%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2075%25%3B' 
,'%20%20flex%3A%200%200%2075%25%3B' 
,'%20%20max-width%3A%2075%25%3B' 
,'%7D' 
,'.col-10%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2083.333333%25%3B' 
,'%20%20flex%3A%200%200%2083.333333%25%3B' 
,'%20%20max-width%3A%2083.333333%25%3B' 
,'%7D' 
,'.col-11%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%2091.666667%25%3B' 
,'%20%20flex%3A%200%200%2091.666667%25%3B' 
,'%20%20max-width%3A%2091.666667%25%3B' 
,'%7D' 
,'.col-12%20%7B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%200%20100%25%3B' 
,'%20%20flex%3A%200%200%20100%25%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%7D' 
,'.order-first%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%200%3B' 
,'%20%20-ms-flex-order%3A%20-1%3B' 
,'%20%20order%3A%20-1%3B' 
,'%7D' 
,'.order-last%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%2014%3B' 
,'%20%20-ms-flex-order%3A%2013%3B' 
,'%20%20order%3A%2013%3B' 
,'%7D' 
,'.order-0%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%201%3B' 
,'%20%20-ms-flex-order%3A%200%3B' 
,'%20%20order%3A%200%3B' 
,'%7D' 
,'.order-1%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%202%3B' 
,'%20%20-ms-flex-order%3A%201%3B' 
,'%20%20order%3A%201%3B' 
,'%7D' 
,'.order-2%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%203%3B' 
,'%20%20-ms-flex-order%3A%202%3B' 
,'%20%20order%3A%202%3B' 
,'%7D' 
,'.order-3%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%204%3B' 
,'%20%20-ms-flex-order%3A%203%3B' 
,'%20%20order%3A%203%3B' 
,'%7D' 
,'.order-4%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%205%3B' 
,'%20%20-ms-flex-order%3A%204%3B' 
,'%20%20order%3A%204%3B' 
,'%7D' 
,'.order-5%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%206%3B' 
,'%20%20-ms-flex-order%3A%205%3B' 
,'%20%20order%3A%205%3B' 
,'%7D' 
,'.order-6%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%207%3B' 
,'%20%20-ms-flex-order%3A%206%3B' 
,'%20%20order%3A%206%3B' 
,'%7D' 
,'.order-7%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%208%3B' 
,'%20%20-ms-flex-order%3A%207%3B' 
,'%20%20order%3A%207%3B' 
,'%7D' 
,'.order-8%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%209%3B' 
,'%20%20-ms-flex-order%3A%208%3B' 
,'%20%20order%3A%208%3B' 
,'%7D' 
,'.order-9%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%2010%3B' 
,'%20%20-ms-flex-order%3A%209%3B' 
,'%20%20order%3A%209%3B' 
,'%7D' 
,'.order-10%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%2011%3B' 
,'%20%20-ms-flex-order%3A%2010%3B' 
,'%20%20order%3A%2010%3B' 
,'%7D' 
,'.order-11%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%2012%3B' 
,'%20%20-ms-flex-order%3A%2011%3B' 
,'%20%20order%3A%2011%3B' 
,'%7D' 
,'.order-12%20%7B' 
,'%20%20-webkit-box-ordinal-group%3A%2013%3B' 
,'%20%20-ms-flex-order%3A%2012%3B' 
,'%20%20order%3A%2012%3B' 
,'%7D' 
,'.offset-1%20%7B' 
,'%20%20margin-left%3A%208.333333%25%3B' 
,'%7D' 
,'.offset-2%20%7B' 
,'%20%20margin-left%3A%2016.666667%25%3B' 
,'%7D' 
,'.offset-3%20%7B' 
,'%20%20margin-left%3A%2025%25%3B' 
,'%7D' 
,'.offset-4%20%7B' 
,'%20%20margin-left%3A%2033.333333%25%3B' 
,'%7D' 
,'.offset-5%20%7B' 
,'%20%20margin-left%3A%2041.666667%25%3B' 
,'%7D' 
,'.offset-6%20%7B' 
,'%20%20margin-left%3A%2050%25%3B' 
,'%7D' 
,'.offset-7%20%7B' 
,'%20%20margin-left%3A%2058.333333%25%3B' 
,'%7D' 
,'.offset-8%20%7B' 
,'%20%20margin-left%3A%2066.666667%25%3B' 
,'%7D' 
,'.offset-9%20%7B' 
,'%20%20margin-left%3A%2075%25%3B' 
,'%7D' 
,'.offset-10%20%7B' 
,'%20%20margin-left%3A%2083.333333%25%3B' 
,'%7D' 
,'.offset-11%20%7B' 
,'%20%20margin-left%3A%2091.666667%25%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.col-sm%20%7B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20%20%20flex-basis%3A%200%3B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20%20%20flex-grow%3A%201%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-auto%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20%20%20flex%3A%200%200%20auto%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20max-width%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-1%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20max-width%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-2%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20max-width%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-3%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20max-width%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-4%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20max-width%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-5%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20max-width%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-6%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20max-width%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-7%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20max-width%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-8%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20max-width%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-9%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20max-width%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-10%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20max-width%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-11%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20max-width%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-sm-12%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-first%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%200%3B' 
,'%20%20%20%20-ms-flex-order%3A%20-1%3B' 
,'%20%20%20%20order%3A%20-1%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-last%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2014%3B' 
,'%20%20%20%20-ms-flex-order%3A%2013%3B' 
,'%20%20%20%20order%3A%2013%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-0%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%201%3B' 
,'%20%20%20%20-ms-flex-order%3A%200%3B' 
,'%20%20%20%20order%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-1%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%202%3B' 
,'%20%20%20%20-ms-flex-order%3A%201%3B' 
,'%20%20%20%20order%3A%201%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-2%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%203%3B' 
,'%20%20%20%20-ms-flex-order%3A%202%3B' 
,'%20%20%20%20order%3A%202%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-3%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%204%3B' 
,'%20%20%20%20-ms-flex-order%3A%203%3B' 
,'%20%20%20%20order%3A%203%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-4%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%205%3B' 
,'%20%20%20%20-ms-flex-order%3A%204%3B' 
,'%20%20%20%20order%3A%204%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-5%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%206%3B' 
,'%20%20%20%20-ms-flex-order%3A%205%3B' 
,'%20%20%20%20order%3A%205%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-6%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%207%3B' 
,'%20%20%20%20-ms-flex-order%3A%206%3B' 
,'%20%20%20%20order%3A%206%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-7%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%208%3B' 
,'%20%20%20%20-ms-flex-order%3A%207%3B' 
,'%20%20%20%20order%3A%207%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-8%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%209%3B' 
,'%20%20%20%20-ms-flex-order%3A%208%3B' 
,'%20%20%20%20order%3A%208%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-9%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2010%3B' 
,'%20%20%20%20-ms-flex-order%3A%209%3B' 
,'%20%20%20%20order%3A%209%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-10%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2011%3B' 
,'%20%20%20%20-ms-flex-order%3A%2010%3B' 
,'%20%20%20%20order%3A%2010%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-11%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2012%3B' 
,'%20%20%20%20-ms-flex-order%3A%2011%3B' 
,'%20%20%20%20order%3A%2011%3B' 
,'%20%20%7D' 
,'%20%20.order-sm-12%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2013%3B' 
,'%20%20%20%20-ms-flex-order%3A%2012%3B' 
,'%20%20%20%20order%3A%2012%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-1%20%7B' 
,'%20%20%20%20margin-left%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-2%20%7B' 
,'%20%20%20%20margin-left%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-3%20%7B' 
,'%20%20%20%20margin-left%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-4%20%7B' 
,'%20%20%20%20margin-left%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-5%20%7B' 
,'%20%20%20%20margin-left%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-6%20%7B' 
,'%20%20%20%20margin-left%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-7%20%7B' 
,'%20%20%20%20margin-left%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-8%20%7B' 
,'%20%20%20%20margin-left%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-9%20%7B' 
,'%20%20%20%20margin-left%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-10%20%7B' 
,'%20%20%20%20margin-left%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-sm-11%20%7B' 
,'%20%20%20%20margin-left%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.col-md%20%7B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20%20%20flex-basis%3A%200%3B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20%20%20flex-grow%3A%201%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-auto%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20%20%20flex%3A%200%200%20auto%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20max-width%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.col-md-1%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20max-width%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-2%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20max-width%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-3%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20max-width%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-4%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20max-width%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-5%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20max-width%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-6%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20max-width%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-7%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20max-width%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-8%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20max-width%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-9%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20max-width%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-10%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20max-width%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-11%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20max-width%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-md-12%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.order-md-first%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%200%3B' 
,'%20%20%20%20-ms-flex-order%3A%20-1%3B' 
,'%20%20%20%20order%3A%20-1%3B' 
,'%20%20%7D' 
,'%20%20.order-md-last%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2014%3B' 
,'%20%20%20%20-ms-flex-order%3A%2013%3B' 
,'%20%20%20%20order%3A%2013%3B' 
,'%20%20%7D' 
,'%20%20.order-md-0%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%201%3B' 
,'%20%20%20%20-ms-flex-order%3A%200%3B' 
,'%20%20%20%20order%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.order-md-1%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%202%3B' 
,'%20%20%20%20-ms-flex-order%3A%201%3B' 
,'%20%20%20%20order%3A%201%3B' 
,'%20%20%7D' 
,'%20%20.order-md-2%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%203%3B' 
,'%20%20%20%20-ms-flex-order%3A%202%3B' 
,'%20%20%20%20order%3A%202%3B' 
,'%20%20%7D' 
,'%20%20.order-md-3%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%204%3B' 
,'%20%20%20%20-ms-flex-order%3A%203%3B' 
,'%20%20%20%20order%3A%203%3B' 
,'%20%20%7D' 
,'%20%20.order-md-4%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%205%3B' 
,'%20%20%20%20-ms-flex-order%3A%204%3B' 
,'%20%20%20%20order%3A%204%3B' 
,'%20%20%7D' 
,'%20%20.order-md-5%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%206%3B' 
,'%20%20%20%20-ms-flex-order%3A%205%3B' 
,'%20%20%20%20order%3A%205%3B' 
,'%20%20%7D' 
,'%20%20.order-md-6%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%207%3B' 
,'%20%20%20%20-ms-flex-order%3A%206%3B' 
,'%20%20%20%20order%3A%206%3B' 
,'%20%20%7D' 
,'%20%20.order-md-7%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%208%3B' 
,'%20%20%20%20-ms-flex-order%3A%207%3B' 
,'%20%20%20%20order%3A%207%3B' 
,'%20%20%7D' 
,'%20%20.order-md-8%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%209%3B' 
,'%20%20%20%20-ms-flex-order%3A%208%3B' 
,'%20%20%20%20order%3A%208%3B' 
,'%20%20%7D' 
,'%20%20.order-md-9%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2010%3B' 
,'%20%20%20%20-ms-flex-order%3A%209%3B' 
,'%20%20%20%20order%3A%209%3B' 
,'%20%20%7D' 
,'%20%20.order-md-10%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2011%3B' 
,'%20%20%20%20-ms-flex-order%3A%2010%3B' 
,'%20%20%20%20order%3A%2010%3B' 
,'%20%20%7D' 
,'%20%20.order-md-11%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2012%3B' 
,'%20%20%20%20-ms-flex-order%3A%2011%3B' 
,'%20%20%20%20order%3A%2011%3B' 
,'%20%20%7D' 
,'%20%20.order-md-12%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2013%3B' 
,'%20%20%20%20-ms-flex-order%3A%2012%3B' 
,'%20%20%20%20order%3A%2012%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-1%20%7B' 
,'%20%20%20%20margin-left%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-2%20%7B' 
,'%20%20%20%20margin-left%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-3%20%7B' 
,'%20%20%20%20margin-left%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-4%20%7B' 
,'%20%20%20%20margin-left%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-5%20%7B' 
,'%20%20%20%20margin-left%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-6%20%7B' 
,'%20%20%20%20margin-left%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-7%20%7B' 
,'%20%20%20%20margin-left%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-8%20%7B' 
,'%20%20%20%20margin-left%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-9%20%7B' 
,'%20%20%20%20margin-left%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-10%20%7B' 
,'%20%20%20%20margin-left%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-md-11%20%7B' 
,'%20%20%20%20margin-left%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.col-lg%20%7B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20%20%20flex-basis%3A%200%3B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20%20%20flex-grow%3A%201%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-auto%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20%20%20flex%3A%200%200%20auto%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20max-width%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-1%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20max-width%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-2%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20max-width%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-3%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20max-width%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-4%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20max-width%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-5%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20max-width%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-6%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20max-width%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-7%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20max-width%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-8%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20max-width%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-9%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20max-width%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-10%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20max-width%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-11%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20max-width%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-lg-12%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-first%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%200%3B' 
,'%20%20%20%20-ms-flex-order%3A%20-1%3B' 
,'%20%20%20%20order%3A%20-1%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-last%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2014%3B' 
,'%20%20%20%20-ms-flex-order%3A%2013%3B' 
,'%20%20%20%20order%3A%2013%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-0%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%201%3B' 
,'%20%20%20%20-ms-flex-order%3A%200%3B' 
,'%20%20%20%20order%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-1%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%202%3B' 
,'%20%20%20%20-ms-flex-order%3A%201%3B' 
,'%20%20%20%20order%3A%201%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-2%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%203%3B' 
,'%20%20%20%20-ms-flex-order%3A%202%3B' 
,'%20%20%20%20order%3A%202%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-3%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%204%3B' 
,'%20%20%20%20-ms-flex-order%3A%203%3B' 
,'%20%20%20%20order%3A%203%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-4%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%205%3B' 
,'%20%20%20%20-ms-flex-order%3A%204%3B' 
,'%20%20%20%20order%3A%204%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-5%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%206%3B' 
,'%20%20%20%20-ms-flex-order%3A%205%3B' 
,'%20%20%20%20order%3A%205%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-6%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%207%3B' 
,'%20%20%20%20-ms-flex-order%3A%206%3B' 
,'%20%20%20%20order%3A%206%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-7%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%208%3B' 
,'%20%20%20%20-ms-flex-order%3A%207%3B' 
,'%20%20%20%20order%3A%207%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-8%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%209%3B' 
,'%20%20%20%20-ms-flex-order%3A%208%3B' 
,'%20%20%20%20order%3A%208%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-9%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2010%3B' 
,'%20%20%20%20-ms-flex-order%3A%209%3B' 
,'%20%20%20%20order%3A%209%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-10%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2011%3B' 
,'%20%20%20%20-ms-flex-order%3A%2010%3B' 
,'%20%20%20%20order%3A%2010%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-11%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2012%3B' 
,'%20%20%20%20-ms-flex-order%3A%2011%3B' 
,'%20%20%20%20order%3A%2011%3B' 
,'%20%20%7D' 
,'%20%20.order-lg-12%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2013%3B' 
,'%20%20%20%20-ms-flex-order%3A%2012%3B' 
,'%20%20%20%20order%3A%2012%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-1%20%7B' 
,'%20%20%20%20margin-left%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-2%20%7B' 
,'%20%20%20%20margin-left%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-3%20%7B' 
,'%20%20%20%20margin-left%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-4%20%7B' 
,'%20%20%20%20margin-left%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-5%20%7B' 
,'%20%20%20%20margin-left%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-6%20%7B' 
,'%20%20%20%20margin-left%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-7%20%7B' 
,'%20%20%20%20margin-left%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-8%20%7B' 
,'%20%20%20%20margin-left%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-9%20%7B' 
,'%20%20%20%20margin-left%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-10%20%7B' 
,'%20%20%20%20margin-left%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-lg-11%20%7B' 
,'%20%20%20%20margin-left%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.col-xl%20%7B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20%20%20flex-basis%3A%200%3B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20%20%20flex-grow%3A%201%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-auto%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20%20%20flex%3A%200%200%20auto%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20max-width%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-1%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%208.333333%25%3B' 
,'%20%20%20%20max-width%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-2%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2016.666667%25%3B' 
,'%20%20%20%20max-width%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-3%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20flex%3A%200%200%2025%25%3B' 
,'%20%20%20%20max-width%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-4%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2033.333333%25%3B' 
,'%20%20%20%20max-width%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-5%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2041.666667%25%3B' 
,'%20%20%20%20max-width%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-6%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20flex%3A%200%200%2050%25%3B' 
,'%20%20%20%20max-width%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-7%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2058.333333%25%3B' 
,'%20%20%20%20max-width%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-8%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2066.666667%25%3B' 
,'%20%20%20%20max-width%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-9%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20flex%3A%200%200%2075%25%3B' 
,'%20%20%20%20max-width%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-10%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20flex%3A%200%200%2083.333333%25%3B' 
,'%20%20%20%20max-width%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-11%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20flex%3A%200%200%2091.666667%25%3B' 
,'%20%20%20%20max-width%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.col-xl-12%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20flex%3A%200%200%20100%25%3B' 
,'%20%20%20%20max-width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-first%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%200%3B' 
,'%20%20%20%20-ms-flex-order%3A%20-1%3B' 
,'%20%20%20%20order%3A%20-1%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-last%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2014%3B' 
,'%20%20%20%20-ms-flex-order%3A%2013%3B' 
,'%20%20%20%20order%3A%2013%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-0%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%201%3B' 
,'%20%20%20%20-ms-flex-order%3A%200%3B' 
,'%20%20%20%20order%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-1%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%202%3B' 
,'%20%20%20%20-ms-flex-order%3A%201%3B' 
,'%20%20%20%20order%3A%201%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-2%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%203%3B' 
,'%20%20%20%20-ms-flex-order%3A%202%3B' 
,'%20%20%20%20order%3A%202%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-3%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%204%3B' 
,'%20%20%20%20-ms-flex-order%3A%203%3B' 
,'%20%20%20%20order%3A%203%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-4%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%205%3B' 
,'%20%20%20%20-ms-flex-order%3A%204%3B' 
,'%20%20%20%20order%3A%204%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-5%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%206%3B' 
,'%20%20%20%20-ms-flex-order%3A%205%3B' 
,'%20%20%20%20order%3A%205%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-6%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%207%3B' 
,'%20%20%20%20-ms-flex-order%3A%206%3B' 
,'%20%20%20%20order%3A%206%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-7%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%208%3B' 
,'%20%20%20%20-ms-flex-order%3A%207%3B' 
,'%20%20%20%20order%3A%207%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-8%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%209%3B' 
,'%20%20%20%20-ms-flex-order%3A%208%3B' 
,'%20%20%20%20order%3A%208%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-9%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2010%3B' 
,'%20%20%20%20-ms-flex-order%3A%209%3B' 
,'%20%20%20%20order%3A%209%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-10%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2011%3B' 
,'%20%20%20%20-ms-flex-order%3A%2010%3B' 
,'%20%20%20%20order%3A%2010%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-11%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2012%3B' 
,'%20%20%20%20-ms-flex-order%3A%2011%3B' 
,'%20%20%20%20order%3A%2011%3B' 
,'%20%20%7D' 
,'%20%20.order-xl-12%20%7B' 
,'%20%20%20%20-webkit-box-ordinal-group%3A%2013%3B' 
,'%20%20%20%20-ms-flex-order%3A%2012%3B' 
,'%20%20%20%20order%3A%2012%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-1%20%7B' 
,'%20%20%20%20margin-left%3A%208.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-2%20%7B' 
,'%20%20%20%20margin-left%3A%2016.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-3%20%7B' 
,'%20%20%20%20margin-left%3A%2025%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-4%20%7B' 
,'%20%20%20%20margin-left%3A%2033.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-5%20%7B' 
,'%20%20%20%20margin-left%3A%2041.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-6%20%7B' 
,'%20%20%20%20margin-left%3A%2050%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-7%20%7B' 
,'%20%20%20%20margin-left%3A%2058.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-8%20%7B' 
,'%20%20%20%20margin-left%3A%2066.666667%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-9%20%7B' 
,'%20%20%20%20margin-left%3A%2075%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-10%20%7B' 
,'%20%20%20%20margin-left%3A%2083.333333%25%3B' 
,'%20%20%7D' 
,'%20%20.offset-xl-11%20%7B' 
,'%20%20%20%20margin-left%3A%2091.666667%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'.table%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.table%20td%2C' 
,'.table%20th%20%7B' 
,'%20%20padding%3A%200.75rem%3B' 
,'%20%20vertical-align%3A%20top%3B' 
,'%20%20border-top%3A%201px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.table%20thead%20th%20%7B' 
,'%20%20vertical-align%3A%20bottom%3B' 
,'%20%20border-bottom%3A%202px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.table%20tbody%20+%20tbody%20%7B' 
,'%20%20border-top%3A%202px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.table%20.table%20%7B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'.table-sm%20td%2C' 
,'.table-sm%20th%20%7B' 
,'%20%20padding%3A%200.3rem%3B' 
,'%7D' 
,'.table-bordered%20%7B' 
,'%20%20border%3A%201px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.table-bordered%20td%2C' 
,'.table-bordered%20th%20%7B' 
,'%20%20border%3A%201px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.table-bordered%20thead%20td%2C' 
,'.table-bordered%20thead%20th%20%7B' 
,'%20%20border-bottom-width%3A%202px%3B' 
,'%7D' 
,'.table-striped%20tbody%20tr%3Anth-of-type%28odd%29%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.05%29%3B' 
,'%7D' 
,'.table-hover%20tbody%20tr%3Ahover%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.075%29%3B' 
,'%7D' 
,'.table-primary%2C' 
,'.table-primary%20%3E%20td%2C' 
,'.table-primary%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23b8daff%3B' 
,'%7D' 
,'.table-hover%20.table-primary%3Ahover%20%7B' 
,'%20%20background-color%3A%20%239fcdff%3B' 
,'%7D' 
,'.table-hover%20.table-primary%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-primary%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%239fcdff%3B' 
,'%7D' 
,'.table-secondary%2C' 
,'.table-secondary%20%3E%20td%2C' 
,'.table-secondary%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23d6d8db%3B' 
,'%7D' 
,'.table-hover%20.table-secondary%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23c8cbcf%3B' 
,'%7D' 
,'.table-hover%20.table-secondary%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-secondary%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23c8cbcf%3B' 
,'%7D' 
,'.table-success%2C' 
,'.table-success%20%3E%20td%2C' 
,'.table-success%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23c3e6cb%3B' 
,'%7D' 
,'.table-hover%20.table-success%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23b1dfbb%3B' 
,'%7D' 
,'.table-hover%20.table-success%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-success%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23b1dfbb%3B' 
,'%7D' 
,'.table-info%2C' 
,'.table-info%20%3E%20td%2C' 
,'.table-info%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23bee5eb%3B' 
,'%7D' 
,'.table-hover%20.table-info%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23abdde5%3B' 
,'%7D' 
,'.table-hover%20.table-info%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-info%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23abdde5%3B' 
,'%7D' 
,'.table-warning%2C' 
,'.table-warning%20%3E%20td%2C' 
,'.table-warning%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23ffeeba%3B' 
,'%7D' 
,'.table-hover%20.table-warning%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23ffe8a1%3B' 
,'%7D' 
,'.table-hover%20.table-warning%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-warning%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23ffe8a1%3B' 
,'%7D' 
,'.table-danger%2C' 
,'.table-danger%20%3E%20td%2C' 
,'.table-danger%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23f5c6cb%3B' 
,'%7D' 
,'.table-hover%20.table-danger%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23f1b0b7%3B' 
,'%7D' 
,'.table-hover%20.table-danger%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-danger%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23f1b0b7%3B' 
,'%7D' 
,'.table-light%2C' 
,'.table-light%20%3E%20td%2C' 
,'.table-light%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23fdfdfe%3B' 
,'%7D' 
,'.table-hover%20.table-light%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23ececf6%3B' 
,'%7D' 
,'.table-hover%20.table-light%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-light%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23ececf6%3B' 
,'%7D' 
,'.table-dark%2C' 
,'.table-dark%20%3E%20td%2C' 
,'.table-dark%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23c6c8ca%3B' 
,'%7D' 
,'.table-hover%20.table-dark%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23b9bbbe%3B' 
,'%7D' 
,'.table-hover%20.table-dark%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-dark%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20%23b9bbbe%3B' 
,'%7D' 
,'.table-active%2C' 
,'.table-active%20%3E%20td%2C' 
,'.table-active%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.075%29%3B' 
,'%7D' 
,'.table-hover%20.table-active%3Ahover%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.075%29%3B' 
,'%7D' 
,'.table-hover%20.table-active%3Ahover%20%3E%20td%2C' 
,'.table-hover%20.table-active%3Ahover%20%3E%20th%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.075%29%3B' 
,'%7D' 
,'.table%20.thead-dark%20th%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23212529%3B' 
,'%20%20border-color%3A%20%2332383e%3B' 
,'%7D' 
,'.table%20.thead-light%20th%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-color%3A%20%23dee2e6%3B' 
,'%7D' 
,'.table-dark%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23212529%3B' 
,'%7D' 
,'.table-dark%20td%2C' 
,'.table-dark%20th%2C' 
,'.table-dark%20thead%20th%20%7B' 
,'%20%20border-color%3A%20%2332383e%3B' 
,'%7D' 
,'.table-dark.table-bordered%20%7B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.table-dark.table-striped%20tbody%20tr%3Anth-of-type%28odd%29%20%7B' 
,'%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.05%29%3B' 
,'%7D' 
,'.table-dark.table-hover%20tbody%20tr%3Ahover%20%7B' 
,'%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.075%29%3B' 
,'%7D' 
,'@media%20%28max-width%3A%20575.98px%29%20%7B' 
,'%20%20.table-responsive-sm%20%7B' 
,'%20%20%20%20display%3A%20block%3B' 
,'%20%20%20%20width%3A%20100%25%3B' 
,'%20%20%20%20overflow-x%3A%20auto%3B' 
,'%20%20%20%20-webkit-overflow-scrolling%3A%20touch%3B' 
,'%20%20%20%20-ms-overflow-style%3A%20-ms-autohiding-scrollbar%3B' 
,'%20%20%7D' 
,'%20%20.table-responsive-sm%20%3E%20.table-bordered%20%7B' 
,'%20%20%20%20border%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%20767.98px%29%20%7B' 
,'%20%20.table-responsive-md%20%7B' 
,'%20%20%20%20display%3A%20block%3B' 
,'%20%20%20%20width%3A%20100%25%3B' 
,'%20%20%20%20overflow-x%3A%20auto%3B' 
,'%20%20%20%20-webkit-overflow-scrolling%3A%20touch%3B' 
,'%20%20%20%20-ms-overflow-style%3A%20-ms-autohiding-scrollbar%3B' 
,'%20%20%7D' 
,'%20%20.table-responsive-md%20%3E%20.table-bordered%20%7B' 
,'%20%20%20%20border%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%20991.98px%29%20%7B' 
,'%20%20.table-responsive-lg%20%7B' 
,'%20%20%20%20display%3A%20block%3B' 
,'%20%20%20%20width%3A%20100%25%3B' 
,'%20%20%20%20overflow-x%3A%20auto%3B' 
,'%20%20%20%20-webkit-overflow-scrolling%3A%20touch%3B' 
,'%20%20%20%20-ms-overflow-style%3A%20-ms-autohiding-scrollbar%3B' 
,'%20%20%7D' 
,'%20%20.table-responsive-lg%20%3E%20.table-bordered%20%7B' 
,'%20%20%20%20border%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%201199.98px%29%20%7B' 
,'%20%20.table-responsive-xl%20%7B' 
,'%20%20%20%20display%3A%20block%3B' 
,'%20%20%20%20width%3A%20100%25%3B' 
,'%20%20%20%20overflow-x%3A%20auto%3B' 
,'%20%20%20%20-webkit-overflow-scrolling%3A%20touch%3B' 
,'%20%20%20%20-ms-overflow-style%3A%20-ms-autohiding-scrollbar%3B' 
,'%20%20%7D' 
,'%20%20.table-responsive-xl%20%3E%20.table-bordered%20%7B' 
,'%20%20%20%20border%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'.table-responsive%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20overflow-x%3A%20auto%3B' 
,'%20%20-webkit-overflow-scrolling%3A%20touch%3B' 
,'%20%20-ms-overflow-style%3A%20-ms-autohiding-scrollbar%3B' 
,'%7D' 
,'.table-responsive%20%3E%20.table-bordered%20%7B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.form-control%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding%3A%200.375rem%200.75rem%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20background-clip%3A%20padding-box%3B' 
,'%20%20border%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%20%20transition%3A%20border-color%200.15s%20ease-in-out%2C%20box-shadow%200.15s%20ease-in-out%3B' 
,'%7D' 
,'.form-control%3A%3A-ms-expand%20%7B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.form-control%3Afocus%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border-color%3A%20%2380bdff%3B' 
,'%20%20outline%3A%200%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.form-control%3A%3A-webkit-input-placeholder%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.form-control%3A%3A-moz-placeholder%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.form-control%3A-ms-input-placeholder%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.form-control%3A%3A-ms-input-placeholder%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.form-control%3A%3Aplaceholder%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.form-control%3Adisabled%2C' 
,'.form-control%5Breadonly%5D%20%7B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'select.form-control%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%20%7B' 
,'%20%20height%3A%20calc%282.25rem%20+%202px%29%3B' 
,'%7D' 
,'select.form-control%3Afocus%3A%3A-ms-value%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'.form-control-file%2C' 
,'.form-control-range%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'.col-form-label%20%7B' 
,'%20%20padding-top%3A%20calc%280.375rem%20+%201px%29%3B' 
,'%20%20padding-bottom%3A%20calc%280.375rem%20+%201px%29%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20font-size%3A%20inherit%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.col-form-label-lg%20%7B' 
,'%20%20padding-top%3A%20calc%280.5rem%20+%201px%29%3B' 
,'%20%20padding-bottom%3A%20calc%280.5rem%20+%201px%29%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.col-form-label-sm%20%7B' 
,'%20%20padding-top%3A%20calc%280.25rem%20+%201px%29%3B' 
,'%20%20padding-bottom%3A%20calc%280.25rem%20+%201px%29%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.form-control-plaintext%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding-top%3A%200.375rem%3B' 
,'%20%20padding-bottom%3A%200.375rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%20solid%20transparent%3B' 
,'%20%20border-width%3A%201px%200%3B' 
,'%7D' 
,'.form-control-plaintext.form-control-lg%2C' 
,'.form-control-plaintext.form-control-sm%2C' 
,'.input-group-lg%20%3E%20.form-control-plaintext.form-control%2C' 
,'.input-group-lg%20%3E%20.input-group-append%20%3E%20.form-control-plaintext.btn%2C' 
,'.input-group-lg' 
,'%20%20%3E%20.input-group-append' 
,'%20%20%3E%20.form-control-plaintext.input-group-text%2C' 
,'.input-group-lg%20%3E%20.input-group-prepend%20%3E%20.form-control-plaintext.btn%2C' 
,'.input-group-lg' 
,'%20%20%3E%20.input-group-prepend' 
,'%20%20%3E%20.form-control-plaintext.input-group-text%2C' 
,'.input-group-sm%20%3E%20.form-control-plaintext.form-control%2C' 
,'.input-group-sm%20%3E%20.input-group-append%20%3E%20.form-control-plaintext.btn%2C' 
,'.input-group-sm' 
,'%20%20%3E%20.input-group-append' 
,'%20%20%3E%20.form-control-plaintext.input-group-text%2C' 
,'.input-group-sm%20%3E%20.input-group-prepend%20%3E%20.form-control-plaintext.btn%2C' 
,'.input-group-sm' 
,'%20%20%3E%20.input-group-prepend' 
,'%20%20%3E%20.form-control-plaintext.input-group-text%20%7B' 
,'%20%20padding-right%3A%200%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%7D' 
,'.form-control-sm%2C' 
,'.input-group-sm%20%3E%20.form-control%2C' 
,'.input-group-sm%20%3E%20.input-group-append%20%3E%20.btn%2C' 
,'.input-group-sm%20%3E%20.input-group-append%20%3E%20.input-group-text%2C' 
,'.input-group-sm%20%3E%20.input-group-prepend%20%3E%20.btn%2C' 
,'.input-group-sm%20%3E%20.input-group-prepend%20%3E%20.input-group-text%20%7B' 
,'%20%20padding%3A%200.25rem%200.5rem%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20border-radius%3A%200.2rem%3B' 
,'%7D' 
,'.input-group-sm%20%3E%20.input-group-append%20%3E%20select.btn%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-sm' 
,'%20%20%3E%20.input-group-append' 
,'%20%20%3E%20select.input-group-text%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-sm%20%3E%20.input-group-prepend%20%3E%20select.btn%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-sm' 
,'%20%20%3E%20.input-group-prepend' 
,'%20%20%3E%20select.input-group-text%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-sm%20%3E%20select.form-control%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'select.form-control-sm%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%20%7B' 
,'%20%20height%3A%20calc%281.8125rem%20+%202px%29%3B' 
,'%7D' 
,'.form-control-lg%2C' 
,'.input-group-lg%20%3E%20.form-control%2C' 
,'.input-group-lg%20%3E%20.input-group-append%20%3E%20.btn%2C' 
,'.input-group-lg%20%3E%20.input-group-append%20%3E%20.input-group-text%2C' 
,'.input-group-lg%20%3E%20.input-group-prepend%20%3E%20.btn%2C' 
,'.input-group-lg%20%3E%20.input-group-prepend%20%3E%20.input-group-text%20%7B' 
,'%20%20padding%3A%200.5rem%201rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20border-radius%3A%200.3rem%3B' 
,'%7D' 
,'.input-group-lg%20%3E%20.input-group-append%20%3E%20select.btn%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-lg' 
,'%20%20%3E%20.input-group-append' 
,'%20%20%3E%20select.input-group-text%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-lg%20%3E%20.input-group-prepend%20%3E%20select.btn%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-lg' 
,'%20%20%3E%20.input-group-prepend' 
,'%20%20%3E%20select.input-group-text%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'.input-group-lg%20%3E%20select.form-control%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%2C' 
,'select.form-control-lg%3Anot%28%5Bsize%5D%29%3Anot%28%5Bmultiple%5D%29%20%7B' 
,'%20%20height%3A%20calc%282.875rem%20+%202px%29%3B' 
,'%7D' 
,'.form-group%20%7B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%7D' 
,'.form-text%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20margin-top%3A%200.25rem%3B' 
,'%7D' 
,'.form-row%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20margin-right%3A%20-5px%3B' 
,'%20%20margin-left%3A%20-5px%3B' 
,'%7D' 
,'.form-row%20%3E%20.col%2C' 
,'.form-row%20%3E%20%5Bclass*%3D%22col-%22%5D%20%7B' 
,'%20%20padding-right%3A%205px%3B' 
,'%20%20padding-left%3A%205px%3B' 
,'%7D' 
,'.form-check%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20padding-left%3A%201.25rem%3B' 
,'%7D' 
,'.form-check-input%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20margin-top%3A%200.3rem%3B' 
,'%20%20margin-left%3A%20-1.25rem%3B' 
,'%7D' 
,'.form-check-input%3Adisabled%20%7E%20.form-check-label%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.form-check-label%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.form-check-inline%20%7B' 
,'%20%20display%3A%20-webkit-inline-box%3B' 
,'%20%20display%3A%20-ms-inline-flexbox%3B' 
,'%20%20display%3A%20inline-flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20margin-right%3A%200.75rem%3B' 
,'%7D' 
,'.form-check-inline%20.form-check-input%20%7B' 
,'%20%20position%3A%20static%3B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-right%3A%200.3125rem%3B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.valid-feedback%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20margin-top%3A%200.25rem%3B' 
,'%20%20font-size%3A%2080%25%3B' 
,'%20%20color%3A%20%2328a745%3B' 
,'%7D' 
,'.valid-tooltip%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20100%25%3B' 
,'%20%20z-index%3A%205%3B' 
,'%20%20display%3A%20none%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20padding%3A%200.5rem%3B' 
,'%20%20margin-top%3A%200.1rem%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20rgba%2840%2C%20167%2C%2069%2C%200.8%29%3B' 
,'%20%20border-radius%3A%200.2rem%3B' 
,'%7D' 
,'.custom-select.is-valid%2C' 
,'.form-control.is-valid%2C' 
,'.was-validated%20.custom-select%3Avalid%2C' 
,'.was-validated%20.form-control%3Avalid%20%7B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.custom-select.is-valid%3Afocus%2C' 
,'.form-control.is-valid%3Afocus%2C' 
,'.was-validated%20.custom-select%3Avalid%3Afocus%2C' 
,'.was-validated%20.form-control%3Avalid%3Afocus%20%7B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.custom-select.is-valid%20%7E%20.valid-feedback%2C' 
,'.custom-select.is-valid%20%7E%20.valid-tooltip%2C' 
,'.form-control.is-valid%20%7E%20.valid-feedback%2C' 
,'.form-control.is-valid%20%7E%20.valid-tooltip%2C' 
,'.was-validated%20.custom-select%3Avalid%20%7E%20.valid-feedback%2C' 
,'.was-validated%20.custom-select%3Avalid%20%7E%20.valid-tooltip%2C' 
,'.was-validated%20.form-control%3Avalid%20%7E%20.valid-feedback%2C' 
,'.was-validated%20.form-control%3Avalid%20%7E%20.valid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.form-check-input.is-valid%20%7E%20.form-check-label%2C' 
,'.was-validated%20.form-check-input%3Avalid%20%7E%20.form-check-label%20%7B' 
,'%20%20color%3A%20%2328a745%3B' 
,'%7D' 
,'.form-check-input.is-valid%20%7E%20.valid-feedback%2C' 
,'.form-check-input.is-valid%20%7E%20.valid-tooltip%2C' 
,'.was-validated%20.form-check-input%3Avalid%20%7E%20.valid-feedback%2C' 
,'.was-validated%20.form-check-input%3Avalid%20%7E%20.valid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-control-input.is-valid%20%7E%20.custom-control-label%2C' 
,'.was-validated%20.custom-control-input%3Avalid%20%7E%20.custom-control-label%20%7B' 
,'%20%20color%3A%20%2328a745%3B' 
,'%7D' 
,'.custom-control-input.is-valid%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated%20.custom-control-input%3Avalid%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%2371dd8a%3B' 
,'%7D' 
,'.custom-control-input.is-valid%20%7E%20.valid-feedback%2C' 
,'.custom-control-input.is-valid%20%7E%20.valid-tooltip%2C' 
,'.was-validated%20.custom-control-input%3Avalid%20%7E%20.valid-feedback%2C' 
,'.was-validated%20.custom-control-input%3Avalid%20%7E%20.valid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-control-input.is-valid%3Achecked%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated' 
,'%20%20.custom-control-input%3Avalid%3Achecked' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%2334ce57%3B' 
,'%7D' 
,'.custom-control-input.is-valid%3Afocus%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated' 
,'%20%20.custom-control-input%3Avalid%3Afocus' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20box-shadow%3A%200%200%200%201px%20%23fff%2C%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.custom-file-input.is-valid%20%7E%20.custom-file-label%2C' 
,'.was-validated%20.custom-file-input%3Avalid%20%7E%20.custom-file-label%20%7B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.custom-file-input.is-valid%20%7E%20.custom-file-label%3A%3Abefore%2C' 
,'.was-validated%20.custom-file-input%3Avalid%20%7E%20.custom-file-label%3A%3Abefore%20%7B' 
,'%20%20border-color%3A%20inherit%3B' 
,'%7D' 
,'.custom-file-input.is-valid%20%7E%20.valid-feedback%2C' 
,'.custom-file-input.is-valid%20%7E%20.valid-tooltip%2C' 
,'.was-validated%20.custom-file-input%3Avalid%20%7E%20.valid-feedback%2C' 
,'.was-validated%20.custom-file-input%3Avalid%20%7E%20.valid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-file-input.is-valid%3Afocus%20%7E%20.custom-file-label%2C' 
,'.was-validated%20.custom-file-input%3Avalid%3Afocus%20%7E%20.custom-file-label%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.invalid-feedback%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20margin-top%3A%200.25rem%3B' 
,'%20%20font-size%3A%2080%25%3B' 
,'%20%20color%3A%20%23dc3545%3B' 
,'%7D' 
,'.invalid-tooltip%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20100%25%3B' 
,'%20%20z-index%3A%205%3B' 
,'%20%20display%3A%20none%3B' 
,'%20%20max-width%3A%20100%25%3B' 
,'%20%20padding%3A%200.5rem%3B' 
,'%20%20margin-top%3A%200.1rem%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20rgba%28220%2C%2053%2C%2069%2C%200.8%29%3B' 
,'%20%20border-radius%3A%200.2rem%3B' 
,'%7D' 
,'.custom-select.is-invalid%2C' 
,'.form-control.is-invalid%2C' 
,'.was-validated%20.custom-select%3Ainvalid%2C' 
,'.was-validated%20.form-control%3Ainvalid%20%7B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.custom-select.is-invalid%3Afocus%2C' 
,'.form-control.is-invalid%3Afocus%2C' 
,'.was-validated%20.custom-select%3Ainvalid%3Afocus%2C' 
,'.was-validated%20.form-control%3Ainvalid%3Afocus%20%7B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.custom-select.is-invalid%20%7E%20.invalid-feedback%2C' 
,'.custom-select.is-invalid%20%7E%20.invalid-tooltip%2C' 
,'.form-control.is-invalid%20%7E%20.invalid-feedback%2C' 
,'.form-control.is-invalid%20%7E%20.invalid-tooltip%2C' 
,'.was-validated%20.custom-select%3Ainvalid%20%7E%20.invalid-feedback%2C' 
,'.was-validated%20.custom-select%3Ainvalid%20%7E%20.invalid-tooltip%2C' 
,'.was-validated%20.form-control%3Ainvalid%20%7E%20.invalid-feedback%2C' 
,'.was-validated%20.form-control%3Ainvalid%20%7E%20.invalid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.form-check-input.is-invalid%20%7E%20.form-check-label%2C' 
,'.was-validated%20.form-check-input%3Ainvalid%20%7E%20.form-check-label%20%7B' 
,'%20%20color%3A%20%23dc3545%3B' 
,'%7D' 
,'.form-check-input.is-invalid%20%7E%20.invalid-feedback%2C' 
,'.form-check-input.is-invalid%20%7E%20.invalid-tooltip%2C' 
,'.was-validated%20.form-check-input%3Ainvalid%20%7E%20.invalid-feedback%2C' 
,'.was-validated%20.form-check-input%3Ainvalid%20%7E%20.invalid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-control-input.is-invalid%20%7E%20.custom-control-label%2C' 
,'.was-validated%20.custom-control-input%3Ainvalid%20%7E%20.custom-control-label%20%7B' 
,'%20%20color%3A%20%23dc3545%3B' 
,'%7D' 
,'.custom-control-input.is-invalid%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated%20.custom-control-input%3Ainvalid%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23efa2a9%3B' 
,'%7D' 
,'.custom-control-input.is-invalid%20%7E%20.invalid-feedback%2C' 
,'.custom-control-input.is-invalid%20%7E%20.invalid-tooltip%2C' 
,'.was-validated%20.custom-control-input%3Ainvalid%20%7E%20.invalid-feedback%2C' 
,'.was-validated%20.custom-control-input%3Ainvalid%20%7E%20.invalid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-control-input.is-invalid%3Achecked%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated' 
,'%20%20.custom-control-input%3Ainvalid%3Achecked' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23e4606d%3B' 
,'%7D' 
,'.custom-control-input.is-invalid%3Afocus%20%7E%20.custom-control-label%3A%3Abefore%2C' 
,'.was-validated' 
,'%20%20.custom-control-input%3Ainvalid%3Afocus' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20box-shadow%3A%200%200%200%201px%20%23fff%2C%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.custom-file-input.is-invalid%20%7E%20.custom-file-label%2C' 
,'.was-validated%20.custom-file-input%3Ainvalid%20%7E%20.custom-file-label%20%7B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.custom-file-input.is-invalid%20%7E%20.custom-file-label%3A%3Abefore%2C' 
,'.was-validated%20.custom-file-input%3Ainvalid%20%7E%20.custom-file-label%3A%3Abefore%20%7B' 
,'%20%20border-color%3A%20inherit%3B' 
,'%7D' 
,'.custom-file-input.is-invalid%20%7E%20.invalid-feedback%2C' 
,'.custom-file-input.is-invalid%20%7E%20.invalid-tooltip%2C' 
,'.was-validated%20.custom-file-input%3Ainvalid%20%7E%20.invalid-feedback%2C' 
,'.was-validated%20.custom-file-input%3Ainvalid%20%7E%20.invalid-tooltip%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.custom-file-input.is-invalid%3Afocus%20%7E%20.custom-file-label%2C' 
,'.was-validated%20.custom-file-input%3Ainvalid%3Afocus%20%7E%20.custom-file-label%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.25%29%3B' 
,'%7D' 
,'.form-inline%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-flow%3A%20row%20wrap%3B' 
,'%20%20flex-flow%3A%20row%20wrap%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.form-inline%20.form-check%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.form-inline%20label%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20%20%20display%3A%20flex%3B' 
,'%20%20%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20%20%20align-items%3A%20center%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20%20%20justify-content%3A%20center%3B' 
,'%20%20%20%20margin-bottom%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.form-group%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20%20%20display%3A%20flex%3B' 
,'%20%20%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20%20%20-ms-flex%3A%200%200%20auto%3B' 
,'%20%20%20%20flex%3A%200%200%20auto%3B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20wrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20wrap%3B' 
,'%20%20%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20%20%20align-items%3A%20center%3B' 
,'%20%20%20%20margin-bottom%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.form-control%20%7B' 
,'%20%20%20%20display%3A%20inline-block%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20vertical-align%3A%20middle%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.form-control-plaintext%20%7B' 
,'%20%20%20%20display%3A%20inline-block%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.input-group%20%7B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.form-check%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20%20%20display%3A%20flex%3B' 
,'%20%20%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20%20%20align-items%3A%20center%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20%20%20justify-content%3A%20center%3B' 
,'%20%20%20%20width%3A%20auto%3B' 
,'%20%20%20%20padding-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.form-check-input%20%7B' 
,'%20%20%20%20position%3A%20relative%3B' 
,'%20%20%20%20margin-top%3A%200%3B' 
,'%20%20%20%20margin-right%3A%200.25rem%3B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.custom-control%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20%20%20align-items%3A%20center%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20%20%20justify-content%3A%20center%3B' 
,'%20%20%7D' 
,'%20%20.form-inline%20.custom-control-label%20%7B' 
,'%20%20%20%20margin-bottom%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'.btn%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%20%20-webkit-user-select%3A%20none%3B' 
,'%20%20-moz-user-select%3A%20none%3B' 
,'%20%20-ms-user-select%3A%20none%3B' 
,'%20%20user-select%3A%20none%3B' 
,'%20%20border%3A%201px%20solid%20transparent%3B' 
,'%20%20padding%3A%200.375rem%200.75rem%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%20%20transition%3A%20color%200.15s%20ease-in-out%2C%20background-color%200.15s%20ease-in-out%2C' 
,'%20%20%20%20border-color%200.15s%20ease-in-out%2C%20box-shadow%200.15s%20ease-in-out%3B' 
,'%7D' 
,'.btn%3Afocus%2C' 
,'.btn%3Ahover%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.btn.focus%2C' 
,'.btn%3Afocus%20%7B' 
,'%20%20outline%3A%200%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.btn.disabled%2C' 
,'.btn%3Adisabled%20%7B' 
,'%20%20opacity%3A%200.65%3B' 
,'%7D' 
,'.btn%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'.btn%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%20%7B' 
,'%20%20background-image%3A%20none%3B' 
,'%7D' 
,'a.btn.disabled%2C' 
,'fieldset%3Adisabled%20a.btn%20%7B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%7D' 
,'.btn-primary%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.btn-primary%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%230069d9%3B' 
,'%20%20border-color%3A%20%230062cc%3B' 
,'%7D' 
,'.btn-primary.focus%2C' 
,'.btn-primary%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.btn-primary.disabled%2C' 
,'.btn-primary%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.btn-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-primary.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%230062cc%3B' 
,'%20%20border-color%3A%20%23005cbf%3B' 
,'%7D' 
,'.btn-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-primary.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.btn-secondary%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%236c757d%3B' 
,'%20%20border-color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-secondary%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%235a6268%3B' 
,'%20%20border-color%3A%20%23545b62%3B' 
,'%7D' 
,'.btn-secondary.focus%2C' 
,'.btn-secondary%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28108%2C%20117%2C%20125%2C%200.5%29%3B' 
,'%7D' 
,'.btn-secondary.disabled%2C' 
,'.btn-secondary%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%236c757d%3B' 
,'%20%20border-color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-secondary.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23545b62%3B' 
,'%20%20border-color%3A%20%234e555b%3B' 
,'%7D' 
,'.btn-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-secondary.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28108%2C%20117%2C%20125%2C%200.5%29%3B' 
,'%7D' 
,'.btn-success%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2328a745%3B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.btn-success%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23218838%3B' 
,'%20%20border-color%3A%20%231e7e34%3B' 
,'%7D' 
,'.btn-success.focus%2C' 
,'.btn-success%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-success.disabled%2C' 
,'.btn-success%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2328a745%3B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.btn-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-success.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%231e7e34%3B' 
,'%20%20border-color%3A%20%231c7430%3B' 
,'%7D' 
,'.btn-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-success.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-info%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2317a2b8%3B' 
,'%20%20border-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.btn-info%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23138496%3B' 
,'%20%20border-color%3A%20%23117a8b%3B' 
,'%7D' 
,'.btn-info.focus%2C' 
,'.btn-info%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2823%2C%20162%2C%20184%2C%200.5%29%3B' 
,'%7D' 
,'.btn-info.disabled%2C' 
,'.btn-info%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2317a2b8%3B' 
,'%20%20border-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.btn-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-info.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23117a8b%3B' 
,'%20%20border-color%3A%20%2310707f%3B' 
,'%7D' 
,'.btn-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-info.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2823%2C%20162%2C%20184%2C%200.5%29%3B' 
,'%7D' 
,'.btn-warning%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23ffc107%3B' 
,'%20%20border-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.btn-warning%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23e0a800%3B' 
,'%20%20border-color%3A%20%23d39e00%3B' 
,'%7D' 
,'.btn-warning.focus%2C' 
,'.btn-warning%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28255%2C%20193%2C%207%2C%200.5%29%3B' 
,'%7D' 
,'.btn-warning.disabled%2C' 
,'.btn-warning%3Adisabled%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23ffc107%3B' 
,'%20%20border-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.btn-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-warning.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23d39e00%3B' 
,'%20%20border-color%3A%20%23c69500%3B' 
,'%7D' 
,'.btn-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-warning.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28255%2C%20193%2C%207%2C%200.5%29%3B' 
,'%7D' 
,'.btn-danger%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23dc3545%3B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.btn-danger%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23c82333%3B' 
,'%20%20border-color%3A%20%23bd2130%3B' 
,'%7D' 
,'.btn-danger.focus%2C' 
,'.btn-danger%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-danger.disabled%2C' 
,'.btn-danger%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23dc3545%3B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.btn-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-danger.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23bd2130%3B' 
,'%20%20border-color%3A%20%23b21f2d%3B' 
,'%7D' 
,'.btn-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-danger.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-light%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%20%20border-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.btn-light%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23e2e6ea%3B' 
,'%20%20border-color%3A%20%23dae0e5%3B' 
,'%7D' 
,'.btn-light.focus%2C' 
,'.btn-light%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28248%2C%20249%2C%20250%2C%200.5%29%3B' 
,'%7D' 
,'.btn-light.disabled%2C' 
,'.btn-light%3Adisabled%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%20%20border-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.btn-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-light.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23dae0e5%3B' 
,'%20%20border-color%3A%20%23d3d9df%3B' 
,'%7D' 
,'.btn-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-light.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28248%2C%20249%2C%20250%2C%200.5%29%3B' 
,'%7D' 
,'.btn-dark%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23343a40%3B' 
,'%20%20border-color%3A%20%23343a40%3B' 
,'%7D' 
,'.btn-dark%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2323272b%3B' 
,'%20%20border-color%3A%20%231d2124%3B' 
,'%7D' 
,'.btn-dark.focus%2C' 
,'.btn-dark%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2852%2C%2058%2C%2064%2C%200.5%29%3B' 
,'%7D' 
,'.btn-dark.disabled%2C' 
,'.btn-dark%3Adisabled%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23343a40%3B' 
,'%20%20border-color%3A%20%23343a40%3B' 
,'%7D' 
,'.btn-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-dark.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%231d2124%3B' 
,'%20%20border-color%3A%20%23171a1d%3B' 
,'%7D' 
,'.btn-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-dark.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2852%2C%2058%2C%2064%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-primary%20%7B' 
,'%20%20color%3A%20%23007bff%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.btn-outline-primary%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.btn-outline-primary.focus%2C' 
,'.btn-outline-primary%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-primary.disabled%2C' 
,'.btn-outline-primary%3Adisabled%20%7B' 
,'%20%20color%3A%20%23007bff%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-primary.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.btn-outline-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-primary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-primary.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-secondary%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-outline-secondary%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%236c757d%3B' 
,'%20%20border-color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-outline-secondary.focus%2C' 
,'.btn-outline-secondary%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28108%2C%20117%2C%20125%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-secondary.disabled%2C' 
,'.btn-outline-secondary%3Adisabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-secondary.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%236c757d%3B' 
,'%20%20border-color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-outline-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-secondary%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-secondary.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28108%2C%20117%2C%20125%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-success%20%7B' 
,'%20%20color%3A%20%2328a745%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.btn-outline-success%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2328a745%3B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.btn-outline-success.focus%2C' 
,'.btn-outline-success%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-success.disabled%2C' 
,'.btn-outline-success%3Adisabled%20%7B' 
,'%20%20color%3A%20%2328a745%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-success.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2328a745%3B' 
,'%20%20border-color%3A%20%2328a745%3B' 
,'%7D' 
,'.btn-outline-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-success%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-success.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2840%2C%20167%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-info%20%7B' 
,'%20%20color%3A%20%2317a2b8%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.btn-outline-info%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2317a2b8%3B' 
,'%20%20border-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.btn-outline-info.focus%2C' 
,'.btn-outline-info%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2823%2C%20162%2C%20184%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-info.disabled%2C' 
,'.btn-outline-info%3Adisabled%20%7B' 
,'%20%20color%3A%20%2317a2b8%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-info.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2317a2b8%3B' 
,'%20%20border-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.btn-outline-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-info%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-info.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2823%2C%20162%2C%20184%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-warning%20%7B' 
,'%20%20color%3A%20%23ffc107%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.btn-outline-warning%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23ffc107%3B' 
,'%20%20border-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.btn-outline-warning.focus%2C' 
,'.btn-outline-warning%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28255%2C%20193%2C%207%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-warning.disabled%2C' 
,'.btn-outline-warning%3Adisabled%20%7B' 
,'%20%20color%3A%20%23ffc107%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-warning.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23ffc107%3B' 
,'%20%20border-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.btn-outline-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-warning%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-warning.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28255%2C%20193%2C%207%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-danger%20%7B' 
,'%20%20color%3A%20%23dc3545%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.btn-outline-danger%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23dc3545%3B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.btn-outline-danger.focus%2C' 
,'.btn-outline-danger%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-danger.disabled%2C' 
,'.btn-outline-danger%3Adisabled%20%7B' 
,'%20%20color%3A%20%23dc3545%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-danger.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23dc3545%3B' 
,'%20%20border-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.btn-outline-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-danger%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-danger.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28220%2C%2053%2C%2069%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-light%20%7B' 
,'%20%20color%3A%20%23f8f9fa%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.btn-outline-light%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%20%20border-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.btn-outline-light.focus%2C' 
,'.btn-outline-light%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28248%2C%20249%2C%20250%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-light.disabled%2C' 
,'.btn-outline-light%3Adisabled%20%7B' 
,'%20%20color%3A%20%23f8f9fa%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-light.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%20%20border-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.btn-outline-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-light%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-light.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%28248%2C%20249%2C%20250%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-dark%20%7B' 
,'%20%20color%3A%20%23343a40%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%20%20border-color%3A%20%23343a40%3B' 
,'%7D' 
,'.btn-outline-dark%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23343a40%3B' 
,'%20%20border-color%3A%20%23343a40%3B' 
,'%7D' 
,'.btn-outline-dark.focus%2C' 
,'.btn-outline-dark%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2852%2C%2058%2C%2064%2C%200.5%29%3B' 
,'%7D' 
,'.btn-outline-dark.disabled%2C' 
,'.btn-outline-dark%3Adisabled%20%7B' 
,'%20%20color%3A%20%23343a40%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-outline-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%2C' 
,'.btn-outline-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%2C' 
,'.show%20%3E%20.btn-outline-dark.dropdown-toggle%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23343a40%3B' 
,'%20%20border-color%3A%20%23343a40%3B' 
,'%7D' 
,'.btn-outline-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29.active%3Afocus%2C' 
,'.btn-outline-dark%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%3Aactive%3Afocus%2C' 
,'.show%20%3E%20.btn-outline-dark.dropdown-toggle%3Afocus%20%7B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%2852%2C%2058%2C%2064%2C%200.5%29%3B' 
,'%7D' 
,'.btn-link%20%7B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20color%3A%20%23007bff%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-link%3Ahover%20%7B' 
,'%20%20color%3A%20%230056b3%3B' 
,'%20%20text-decoration%3A%20underline%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border-color%3A%20transparent%3B' 
,'%7D' 
,'.btn-link.focus%2C' 
,'.btn-link%3Afocus%20%7B' 
,'%20%20text-decoration%3A%20underline%3B' 
,'%20%20border-color%3A%20transparent%3B' 
,'%20%20box-shadow%3A%20none%3B' 
,'%7D' 
,'.btn-link.disabled%2C' 
,'.btn-link%3Adisabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.btn-group-lg%20%3E%20.btn%2C' 
,'.btn-lg%20%7B' 
,'%20%20padding%3A%200.5rem%201rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20border-radius%3A%200.3rem%3B' 
,'%7D' 
,'.btn-group-sm%20%3E%20.btn%2C' 
,'.btn-sm%20%7B' 
,'%20%20padding%3A%200.25rem%200.5rem%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20border-radius%3A%200.2rem%3B' 
,'%7D' 
,'.btn-block%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'.btn-block%20+%20.btn-block%20%7B' 
,'%20%20margin-top%3A%200.5rem%3B' 
,'%7D' 
,'input%5Btype%3D%22button%22%5D.btn-block%2C' 
,'input%5Btype%3D%22reset%22%5D.btn-block%2C' 
,'input%5Btype%3D%22submit%22%5D.btn-block%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'.fade%20%7B' 
,'%20%20opacity%3A%200%3B' 
,'%20%20transition%3A%20opacity%200.15s%20linear%3B' 
,'%7D' 
,'.fade.show%20%7B' 
,'%20%20opacity%3A%201%3B' 
,'%7D' 
,'.collapse%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.collapse.show%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'tr.collapse.show%20%7B' 
,'%20%20display%3A%20table-row%3B' 
,'%7D' 
,'tbody.collapse.show%20%7B' 
,'%20%20display%3A%20table-row-group%3B' 
,'%7D' 
,'.collapsing%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20transition%3A%20height%200.35s%20ease%3B' 
,'%7D' 
,'.dropdown%2C' 
,'.dropup%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%7D' 
,'.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%200%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin-left%3A%200.255em%3B' 
,'%20%20vertical-align%3A%200.255em%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-top%3A%200.3em%20solid%3B' 
,'%20%20border-right%3A%200.3em%20solid%20transparent%3B' 
,'%20%20border-bottom%3A%200%3B' 
,'%20%20border-left%3A%200.3em%20solid%20transparent%3B' 
,'%7D' 
,'.dropdown-toggle%3Aempty%3A%3Aafter%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.dropdown-menu%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20100%25%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201000%3B' 
,'%20%20display%3A%20none%3B' 
,'%20%20float%3A%20left%3B' 
,'%20%20min-width%3A%2010rem%3B' 
,'%20%20padding%3A%200.5rem%200%3B' 
,'%20%20margin%3A%200.125rem%200%200%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20text-align%3A%20left%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20background-clip%3A%20padding-box%3B' 
,'%20%20border%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.15%29%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.dropup%20.dropdown-menu%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-bottom%3A%200.125rem%3B' 
,'%7D' 
,'.dropup%20.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%200%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin-left%3A%200.255em%3B' 
,'%20%20vertical-align%3A%200.255em%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-top%3A%200%3B' 
,'%20%20border-right%3A%200.3em%20solid%20transparent%3B' 
,'%20%20border-bottom%3A%200.3em%20solid%3B' 
,'%20%20border-left%3A%200.3em%20solid%20transparent%3B' 
,'%7D' 
,'.dropup%20.dropdown-toggle%3Aempty%3A%3Aafter%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.dropright%20.dropdown-menu%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-left%3A%200.125rem%3B' 
,'%7D' 
,'.dropright%20.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%200%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin-left%3A%200.255em%3B' 
,'%20%20vertical-align%3A%200.255em%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-top%3A%200.3em%20solid%20transparent%3B' 
,'%20%20border-bottom%3A%200.3em%20solid%20transparent%3B' 
,'%20%20border-left%3A%200.3em%20solid%3B' 
,'%7D' 
,'.dropright%20.dropdown-toggle%3Aempty%3A%3Aafter%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.dropright%20.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20vertical-align%3A%200%3B' 
,'%7D' 
,'.dropleft%20.dropdown-menu%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%20%20margin-right%3A%200.125rem%3B' 
,'%7D' 
,'.dropleft%20.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%200%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin-left%3A%200.255em%3B' 
,'%20%20vertical-align%3A%200.255em%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.dropleft%20.dropdown-toggle%3A%3Aafter%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.dropleft%20.dropdown-toggle%3A%3Abefore%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%200%3B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin-right%3A%200.255em%3B' 
,'%20%20vertical-align%3A%200.255em%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-top%3A%200.3em%20solid%20transparent%3B' 
,'%20%20border-right%3A%200.3em%20solid%3B' 
,'%20%20border-bottom%3A%200.3em%20solid%20transparent%3B' 
,'%7D' 
,'.dropleft%20.dropdown-toggle%3Aempty%3A%3Aafter%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.dropleft%20.dropdown-toggle%3A%3Abefore%20%7B' 
,'%20%20vertical-align%3A%200%3B' 
,'%7D' 
,'.dropdown-divider%20%7B' 
,'%20%20height%3A%200%3B' 
,'%20%20margin%3A%200.5rem%200%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20border-top%3A%201px%20solid%20%23e9ecef%3B' 
,'%7D' 
,'.dropdown-item%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding%3A%200.25rem%201.5rem%3B' 
,'%20%20clear%3A%20both%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20text-align%3A%20inherit%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.dropdown-item%3Afocus%2C' 
,'.dropdown-item%3Ahover%20%7B' 
,'%20%20color%3A%20%2316181b%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.dropdown-item.active%2C' 
,'.dropdown-item%3Aactive%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.dropdown-item.disabled%2C' 
,'.dropdown-item%3Adisabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%7D' 
,'.dropdown-menu.show%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.dropdown-header%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20padding%3A%200.5rem%201.5rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%7D' 
,'.btn-group%2C' 
,'.btn-group-vertical%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20-webkit-inline-box%3B' 
,'%20%20display%3A%20-ms-inline-flexbox%3B' 
,'%20%20display%3A%20inline-flex%3B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn%2C' 
,'.btn-group%20%3E%20.btn%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%201%20auto%3B' 
,'%20%20flex%3A%200%201%20auto%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn%3Ahover%2C' 
,'.btn-group%20%3E%20.btn%3Ahover%20%7B' 
,'%20%20z-index%3A%201%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn.active%2C' 
,'.btn-group-vertical%20%3E%20.btn%3Aactive%2C' 
,'.btn-group-vertical%20%3E%20.btn%3Afocus%2C' 
,'.btn-group%20%3E%20.btn.active%2C' 
,'.btn-group%20%3E%20.btn%3Aactive%2C' 
,'.btn-group%20%3E%20.btn%3Afocus%20%7B' 
,'%20%20z-index%3A%201%3B' 
,'%7D' 
,'.btn-group%20.btn%20+%20.btn%2C' 
,'.btn-group%20.btn%20+%20.btn-group%2C' 
,'.btn-group%20.btn-group%20+%20.btn%2C' 
,'.btn-group%20.btn-group%20+%20.btn-group%2C' 
,'.btn-group-vertical%20.btn%20+%20.btn%2C' 
,'.btn-group-vertical%20.btn%20+%20.btn-group%2C' 
,'.btn-group-vertical%20.btn-group%20+%20.btn%2C' 
,'.btn-group-vertical%20.btn-group%20+%20.btn-group%20%7B' 
,'%20%20margin-left%3A%20-1px%3B' 
,'%7D' 
,'.btn-toolbar%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20justify-content%3A%20flex-start%3B' 
,'%7D' 
,'.btn-toolbar%20.input-group%20%7B' 
,'%20%20width%3A%20auto%3B' 
,'%7D' 
,'.btn-group%20%3E%20.btn%3Afirst-child%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.btn-group%20%3E%20.btn-group%3Anot%28%3Alast-child%29%20%3E%20.btn%2C' 
,'.btn-group%20%3E%20.btn%3Anot%28%3Alast-child%29%3Anot%28.dropdown-toggle%29%20%7B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%20%20border-bottom-right-radius%3A%200%3B' 
,'%7D' 
,'.btn-group%20%3E%20.btn-group%3Anot%28%3Afirst-child%29%20%3E%20.btn%2C' 
,'.btn-group%20%3E%20.btn%3Anot%28%3Afirst-child%29%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%7D' 
,'.dropdown-toggle-split%20%7B' 
,'%20%20padding-right%3A%200.5625rem%3B' 
,'%20%20padding-left%3A%200.5625rem%3B' 
,'%7D' 
,'.dropdown-toggle-split%3A%3Aafter%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.btn-group-sm%20%3E%20.btn%20+%20.dropdown-toggle-split%2C' 
,'.btn-sm%20+%20.dropdown-toggle-split%20%7B' 
,'%20%20padding-right%3A%200.375rem%3B' 
,'%20%20padding-left%3A%200.375rem%3B' 
,'%7D' 
,'.btn-group-lg%20%3E%20.btn%20+%20.dropdown-toggle-split%2C' 
,'.btn-lg%20+%20.dropdown-toggle-split%20%7B' 
,'%20%20padding-right%3A%200.75rem%3B' 
,'%20%20padding-left%3A%200.75rem%3B' 
,'%7D' 
,'.btn-group-vertical%20%7B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20-webkit-box-align%3A%20start%3B' 
,'%20%20-ms-flex-align%3A%20start%3B' 
,'%20%20align-items%3A%20flex-start%3B' 
,'%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%7D' 
,'.btn-group-vertical%20.btn%2C' 
,'.btn-group-vertical%20.btn-group%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn%20+%20.btn%2C' 
,'.btn-group-vertical%20%3E%20.btn%20+%20.btn-group%2C' 
,'.btn-group-vertical%20%3E%20.btn-group%20+%20.btn%2C' 
,'.btn-group-vertical%20%3E%20.btn-group%20+%20.btn-group%20%7B' 
,'%20%20margin-top%3A%20-1px%3B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn-group%3Anot%28%3Alast-child%29%20%3E%20.btn%2C' 
,'.btn-group-vertical%20%3E%20.btn%3Anot%28%3Alast-child%29%3Anot%28.dropdown-toggle%29%20%7B' 
,'%20%20border-bottom-right-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%7D' 
,'.btn-group-vertical%20%3E%20.btn-group%3Anot%28%3Afirst-child%29%20%3E%20.btn%2C' 
,'.btn-group-vertical%20%3E%20.btn%3Anot%28%3Afirst-child%29%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%7D' 
,'.btn-group-toggle%20%3E%20.btn%2C' 
,'.btn-group-toggle%20%3E%20.btn-group%20%3E%20.btn%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.btn-group-toggle%20%3E%20.btn%20input%5Btype%3D%22checkbox%22%5D%2C' 
,'.btn-group-toggle%20%3E%20.btn%20input%5Btype%3D%22radio%22%5D%2C' 
,'.btn-group-toggle%20%3E%20.btn-group%20%3E%20.btn%20input%5Btype%3D%22checkbox%22%5D%2C' 
,'.btn-group-toggle%20%3E%20.btn-group%20%3E%20.btn%20input%5Btype%3D%22radio%22%5D%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20clip%3A%20rect%280%2C%200%2C%200%2C%200%29%3B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%7D' 
,'.input-group%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20-webkit-box-align%3A%20stretch%3B' 
,'%20%20-ms-flex-align%3A%20stretch%3B' 
,'%20%20align-items%3A%20stretch%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%2C' 
,'.input-group%20%3E%20.custom-select%2C' 
,'.input-group%20%3E%20.form-control%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex%3A%201%201%20auto%3B' 
,'%20%20flex%3A%201%201%20auto%3B' 
,'%20%20width%3A%201%25%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%3Afocus%2C' 
,'.input-group%20%3E%20.custom-select%3Afocus%2C' 
,'.input-group%20%3E%20.form-control%3Afocus%20%7B' 
,'%20%20z-index%3A%203%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%20+%20.custom-file%2C' 
,'.input-group%20%3E%20.custom-file%20+%20.custom-select%2C' 
,'.input-group%20%3E%20.custom-file%20+%20.form-control%2C' 
,'.input-group%20%3E%20.custom-select%20+%20.custom-file%2C' 
,'.input-group%20%3E%20.custom-select%20+%20.custom-select%2C' 
,'.input-group%20%3E%20.custom-select%20+%20.form-control%2C' 
,'.input-group%20%3E%20.form-control%20+%20.custom-file%2C' 
,'.input-group%20%3E%20.form-control%20+%20.custom-select%2C' 
,'.input-group%20%3E%20.form-control%20+%20.form-control%20%7B' 
,'%20%20margin-left%3A%20-1px%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-select%3Anot%28%3Alast-child%29%2C' 
,'.input-group%20%3E%20.form-control%3Anot%28%3Alast-child%29%20%7B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%20%20border-bottom-right-radius%3A%200%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-select%3Anot%28%3Afirst-child%29%2C' 
,'.input-group%20%3E%20.form-control%3Anot%28%3Afirst-child%29%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%3Anot%28%3Alast-child%29%20.custom-file-label%2C' 
,'.input-group%20%3E%20.custom-file%3Anot%28%3Alast-child%29%20.custom-file-label%3A%3Abefore%20%7B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%20%20border-bottom-right-radius%3A%200%3B' 
,'%7D' 
,'.input-group%20%3E%20.custom-file%3Anot%28%3Afirst-child%29%20.custom-file-label%2C' 
,'.input-group%20%3E%20.custom-file%3Anot%28%3Afirst-child%29%20.custom-file-label%3A%3Abefore%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%7D' 
,'.input-group-append%2C' 
,'.input-group-prepend%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%7D' 
,'.input-group-append%20.btn%2C' 
,'.input-group-prepend%20.btn%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20z-index%3A%202%3B' 
,'%7D' 
,'.input-group-append%20.btn%20+%20.btn%2C' 
,'.input-group-append%20.btn%20+%20.input-group-text%2C' 
,'.input-group-append%20.input-group-text%20+%20.btn%2C' 
,'.input-group-append%20.input-group-text%20+%20.input-group-text%2C' 
,'.input-group-prepend%20.btn%20+%20.btn%2C' 
,'.input-group-prepend%20.btn%20+%20.input-group-text%2C' 
,'.input-group-prepend%20.input-group-text%20+%20.btn%2C' 
,'.input-group-prepend%20.input-group-text%20+%20.input-group-text%20%7B' 
,'%20%20margin-left%3A%20-1px%3B' 
,'%7D' 
,'.input-group-prepend%20%7B' 
,'%20%20margin-right%3A%20-1px%3B' 
,'%7D' 
,'.input-group-append%20%7B' 
,'%20%20margin-left%3A%20-1px%3B' 
,'%7D' 
,'.input-group-text%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20padding%3A%200.375rem%200.75rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.input-group-text%20input%5Btype%3D%22checkbox%22%5D%2C' 
,'.input-group-text%20input%5Btype%3D%22radio%22%5D%20%7B' 
,'%20%20margin-top%3A%200%3B' 
,'%7D' 
,'.input-group' 
,'%20%20%3E%20.input-group-append%3Alast-child' 
,'%20%20%3E%20.btn%3Anot%28%3Alast-child%29%3Anot%28.dropdown-toggle%29%2C' 
,'.input-group' 
,'%20%20%3E%20.input-group-append%3Alast-child' 
,'%20%20%3E%20.input-group-text%3Anot%28%3Alast-child%29%2C' 
,'.input-group%20%3E%20.input-group-append%3Anot%28%3Alast-child%29%20%3E%20.btn%2C' 
,'.input-group%20%3E%20.input-group-append%3Anot%28%3Alast-child%29%20%3E%20.input-group-text%2C' 
,'.input-group%20%3E%20.input-group-prepend%20%3E%20.btn%2C' 
,'.input-group%20%3E%20.input-group-prepend%20%3E%20.input-group-text%20%7B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%20%20border-bottom-right-radius%3A%200%3B' 
,'%7D' 
,'.input-group%20%3E%20.input-group-append%20%3E%20.btn%2C' 
,'.input-group%20%3E%20.input-group-append%20%3E%20.input-group-text%2C' 
,'.input-group%20%3E%20.input-group-prepend%3Afirst-child%20%3E%20.btn%3Anot%28%3Afirst-child%29%2C' 
,'.input-group' 
,'%20%20%3E%20.input-group-prepend%3Afirst-child' 
,'%20%20%3E%20.input-group-text%3Anot%28%3Afirst-child%29%2C' 
,'.input-group%20%3E%20.input-group-prepend%3Anot%28%3Afirst-child%29%20%3E%20.btn%2C' 
,'.input-group%20%3E%20.input-group-prepend%3Anot%28%3Afirst-child%29%20%3E%20.input-group-text%20%7B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-bottom-left-radius%3A%200%3B' 
,'%7D' 
,'.custom-control%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20min-height%3A%201.5rem%3B' 
,'%20%20padding-left%3A%201.5rem%3B' 
,'%7D' 
,'.custom-control-inline%20%7B' 
,'%20%20display%3A%20-webkit-inline-box%3B' 
,'%20%20display%3A%20-ms-inline-flexbox%3B' 
,'%20%20display%3A%20inline-flex%3B' 
,'%20%20margin-right%3A%201rem%3B' 
,'%7D' 
,'.custom-control-input%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20z-index%3A%20-1%3B' 
,'%20%20opacity%3A%200%3B' 
,'%7D' 
,'.custom-control-input%3Achecked%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.custom-control-input%3Afocus%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20box-shadow%3A%200%200%200%201px%20%23fff%2C%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.custom-control-input%3Aactive%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23b3d7ff%3B' 
,'%7D' 
,'.custom-control-input%3Adisabled%20%7E%20.custom-control-label%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.custom-control-input%3Adisabled%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%7D' 
,'.custom-control-label%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200.25rem%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%201rem%3B' 
,'%20%20height%3A%201rem%3B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20-webkit-user-select%3A%20none%3B' 
,'%20%20-moz-user-select%3A%20none%3B' 
,'%20%20-ms-user-select%3A%20none%3B' 
,'%20%20user-select%3A%20none%3B' 
,'%20%20background-color%3A%20%23dee2e6%3B' 
,'%7D' 
,'.custom-control-label%3A%3Aafter%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200.25rem%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%201rem%3B' 
,'%20%20height%3A%201rem%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20background-repeat%3A%20no-repeat%3B' 
,'%20%20background-position%3A%20center%20center%3B' 
,'%20%20background-size%3A%2050%25%2050%25%3B' 
,'%7D' 
,'.custom-checkbox%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.custom-checkbox%20.custom-control-input%3Achecked%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.custom-checkbox%20.custom-control-input%3Achecked%20%7E%20.custom-control-label%3A%3Aafter%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%208%208%27%253E%253Cpath%20fill%3D%27%2523fff%27%20d%3D%27M6.564.75l-3.59%203.612-1.538-1.55L0%204.26%202.974%207.25%208%202.193z%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.custom-checkbox' 
,'%20%20.custom-control-input%3Aindeterminate' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.custom-checkbox' 
,'%20%20.custom-control-input%3Aindeterminate' 
,'%20%20%7E%20.custom-control-label%3A%3Aafter%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%204%204%27%253E%253Cpath%20stroke%3D%27%2523fff%27%20d%3D%27M0%202h4%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.custom-checkbox' 
,'%20%20.custom-control-input%3Adisabled%3Achecked' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.custom-checkbox' 
,'%20%20.custom-control-input%3Adisabled%3Aindeterminate' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.custom-radio%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20border-radius%3A%2050%25%3B' 
,'%7D' 
,'.custom-radio%20.custom-control-input%3Achecked%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.custom-radio%20.custom-control-input%3Achecked%20%7E%20.custom-control-label%3A%3Aafter%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%27-4%20-4%208%208%27%253E%253Ccircle%20r%3D%273%27%20fill%3D%27%2523fff%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.custom-radio' 
,'%20%20.custom-control-input%3Adisabled%3Achecked' 
,'%20%20%7E%20.custom-control-label%3A%3Abefore%20%7B' 
,'%20%20background-color%3A%20rgba%280%2C%20123%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.custom-select%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20calc%282.25rem%20+%202px%29%3B' 
,'%20%20padding%3A%200.375rem%201.75rem%200.375rem%200.75rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%20%20background%3A%20%23fff' 
,'%20%20%20%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%204%205%27%253E%253Cpath%20fill%3D%27%2523343a40%27%20d%3D%27M2%200L0%202h4zm0%205L0%203h4z%27/%253E%253C/svg%253E%22%29' 
,'%20%20%20%20no-repeat%20right%200.75rem%20center%3B' 
,'%20%20background-size%3A%208px%2010px%3B' 
,'%20%20border%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%20%20-webkit-appearance%3A%20none%3B' 
,'%20%20-moz-appearance%3A%20none%3B' 
,'%20%20appearance%3A%20none%3B' 
,'%7D' 
,'.custom-select%3Afocus%20%7B' 
,'%20%20border-color%3A%20%2380bdff%3B' 
,'%20%20outline%3A%200%3B' 
,'%20%20box-shadow%3A%20inset%200%201px%202px%20rgba%280%2C%200%2C%200%2C%200.075%29%2C' 
,'%20%20%20%200%200%205px%20rgba%28128%2C%20189%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.custom-select%3Afocus%3A%3A-ms-value%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'.custom-select%5Bmultiple%5D%2C' 
,'.custom-select%5Bsize%5D%3Anot%28%5Bsize%3D%221%22%5D%29%20%7B' 
,'%20%20height%3A%20auto%3B' 
,'%20%20padding-right%3A%200.75rem%3B' 
,'%20%20background-image%3A%20none%3B' 
,'%7D' 
,'.custom-select%3Adisabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%7D' 
,'.custom-select%3A%3A-ms-expand%20%7B' 
,'%20%20opacity%3A%200%3B' 
,'%7D' 
,'.custom-select-sm%20%7B' 
,'%20%20height%3A%20calc%281.8125rem%20+%202px%29%3B' 
,'%20%20padding-top%3A%200.375rem%3B' 
,'%20%20padding-bottom%3A%200.375rem%3B' 
,'%20%20font-size%3A%2075%25%3B' 
,'%7D' 
,'.custom-select-lg%20%7B' 
,'%20%20height%3A%20calc%282.875rem%20+%202px%29%3B' 
,'%20%20padding-top%3A%200.375rem%3B' 
,'%20%20padding-bottom%3A%200.375rem%3B' 
,'%20%20font-size%3A%20125%25%3B' 
,'%7D' 
,'.custom-file%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20calc%282.25rem%20+%202px%29%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.custom-file-input%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20z-index%3A%202%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20calc%282.25rem%20+%202px%29%3B' 
,'%20%20margin%3A%200%3B' 
,'%20%20opacity%3A%200%3B' 
,'%7D' 
,'.custom-file-input%3Afocus%20%7E%20.custom-file-control%20%7B' 
,'%20%20border-color%3A%20%2380bdff%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.custom-file-input%3Afocus%20%7E%20.custom-file-control%3A%3Abefore%20%7B' 
,'%20%20border-color%3A%20%2380bdff%3B' 
,'%7D' 
,'.custom-file-input%3Alang%28en%29%20%7E%20.custom-file-label%3A%3Aafter%20%7B' 
,'%20%20content%3A%20%22Browse%22%3B' 
,'%7D' 
,'.custom-file-label%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201%3B' 
,'%20%20height%3A%20calc%282.25rem%20+%202px%29%3B' 
,'%20%20padding%3A%200.375rem%200.75rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.custom-file-label%3A%3Aafter%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20z-index%3A%203%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20height%3A%20calc%28calc%282.25rem%20+%202px%29%20-%201px%20*%202%29%3B' 
,'%20%20padding%3A%200.375rem%200.75rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20content%3A%20%22Browse%22%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-left%3A%201px%20solid%20%23ced4da%3B' 
,'%20%20border-radius%3A%200%200.25rem%200.25rem%200%3B' 
,'%7D' 
,'.nav%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%7D' 
,'.nav-link%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20padding%3A%200.5rem%201rem%3B' 
,'%7D' 
,'.nav-link%3Afocus%2C' 
,'.nav-link%3Ahover%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.nav-link.disabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.nav-tabs%20%7B' 
,'%20%20border-bottom%3A%201px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.nav-tabs%20.nav-item%20%7B' 
,'%20%20margin-bottom%3A%20-1px%3B' 
,'%7D' 
,'.nav-tabs%20.nav-link%20%7B' 
,'%20%20border%3A%201px%20solid%20transparent%3B' 
,'%20%20border-top-left-radius%3A%200.25rem%3B' 
,'%20%20border-top-right-radius%3A%200.25rem%3B' 
,'%7D' 
,'.nav-tabs%20.nav-link%3Afocus%2C' 
,'.nav-tabs%20.nav-link%3Ahover%20%7B' 
,'%20%20border-color%3A%20%23e9ecef%20%23e9ecef%20%23dee2e6%3B' 
,'%7D' 
,'.nav-tabs%20.nav-link.disabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border-color%3A%20transparent%3B' 
,'%7D' 
,'.nav-tabs%20.nav-item.show%20.nav-link%2C' 
,'.nav-tabs%20.nav-link.active%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border-color%3A%20%23dee2e6%20%23dee2e6%20%23fff%3B' 
,'%7D' 
,'.nav-tabs%20.dropdown-menu%20%7B' 
,'%20%20margin-top%3A%20-1px%3B' 
,'%20%20border-top-left-radius%3A%200%3B' 
,'%20%20border-top-right-radius%3A%200%3B' 
,'%7D' 
,'.nav-pills%20.nav-link%20%7B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.nav-pills%20.nav-link.active%2C' 
,'.nav-pills%20.show%20%3E%20.nav-link%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.nav-fill%20.nav-item%20%7B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex%3A%201%201%20auto%3B' 
,'%20%20flex%3A%201%201%20auto%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%7D' 
,'.nav-justified%20.nav-item%20%7B' 
,'%20%20-ms-flex-preferred-size%3A%200%3B' 
,'%20%20flex-basis%3A%200%3B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20flex-grow%3A%201%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%7D' 
,'.tab-content%20%3E%20.tab-pane%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.tab-content%20%3E%20.active%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.navbar%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20-webkit-box-pack%3A%20justify%3B' 
,'%20%20-ms-flex-pack%3A%20justify%3B' 
,'%20%20justify-content%3A%20space-between%3B' 
,'%20%20padding%3A%200.5rem%201rem%3B' 
,'%7D' 
,'.navbar%20%3E%20.container%2C' 
,'.navbar%20%3E%20.container-fluid%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20-webkit-box-pack%3A%20justify%3B' 
,'%20%20-ms-flex-pack%3A%20justify%3B' 
,'%20%20justify-content%3A%20space-between%3B' 
,'%7D' 
,'.navbar-brand%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20padding-top%3A%200.3125rem%3B' 
,'%20%20padding-bottom%3A%200.3125rem%3B' 
,'%20%20margin-right%3A%201rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%20inherit%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%7D' 
,'.navbar-brand%3Afocus%2C' 
,'.navbar-brand%3Ahover%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.navbar-nav%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%7D' 
,'.navbar-nav%20.nav-link%20%7B' 
,'%20%20padding-right%3A%200%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%7D' 
,'.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20position%3A%20static%3B' 
,'%20%20float%3A%20none%3B' 
,'%7D' 
,'.navbar-text%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20padding-top%3A%200.5rem%3B' 
,'%20%20padding-bottom%3A%200.5rem%3B' 
,'%7D' 
,'.navbar-collapse%20%7B' 
,'%20%20-ms-flex-preferred-size%3A%20100%25%3B' 
,'%20%20flex-basis%3A%20100%25%3B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex-positive%3A%201%3B' 
,'%20%20flex-grow%3A%201%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%7D' 
,'.navbar-toggler%20%7B' 
,'%20%20padding%3A%200.25rem%200.75rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%201%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%201px%20solid%20transparent%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.navbar-toggler%3Afocus%2C' 
,'.navbar-toggler%3Ahover%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.navbar-toggler%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'.navbar-toggler-icon%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%201.5em%3B' 
,'%20%20height%3A%201.5em%3B' 
,'%20%20vertical-align%3A%20middle%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20background%3A%20no-repeat%20center%20center%3B' 
,'%20%20background-size%3A%20100%25%20100%25%3B' 
,'%7D' 
,'@media%20%28max-width%3A%20575.98px%29%20%7B' 
,'%20%20.navbar-expand-sm%20%3E%20.container%2C' 
,'%20%20.navbar-expand-sm%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20padding-right%3A%200%3B' 
,'%20%20%20%20padding-left%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.navbar-expand-sm%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-nav%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%3B' 
,'%20%20%20%20flex-direction%3A%20row%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20%20%20position%3A%20absolute%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-nav%20.dropdown-menu-right%20%7B' 
,'%20%20%20%20right%3A%200%3B' 
,'%20%20%20%20left%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%3B' 
,'%20%20%20%20padding-left%3A%200.5rem%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20%3E%20.container%2C' 
,'%20%20.navbar-expand-sm%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-collapse%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%20auto%3B' 
,'%20%20%20%20flex-basis%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.navbar-toggler%20%7B' 
,'%20%20%20%20display%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-sm%20.dropup%20.dropdown-menu%20%7B' 
,'%20%20%20%20top%3A%20auto%3B' 
,'%20%20%20%20bottom%3A%20100%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%20767.98px%29%20%7B' 
,'%20%20.navbar-expand-md%20%3E%20.container%2C' 
,'%20%20.navbar-expand-md%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20padding-right%3A%200%3B' 
,'%20%20%20%20padding-left%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.navbar-expand-md%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-nav%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%3B' 
,'%20%20%20%20flex-direction%3A%20row%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20%20%20position%3A%20absolute%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-nav%20.dropdown-menu-right%20%7B' 
,'%20%20%20%20right%3A%200%3B' 
,'%20%20%20%20left%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%3B' 
,'%20%20%20%20padding-left%3A%200.5rem%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20%3E%20.container%2C' 
,'%20%20.navbar-expand-md%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-collapse%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%20auto%3B' 
,'%20%20%20%20flex-basis%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.navbar-toggler%20%7B' 
,'%20%20%20%20display%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-md%20.dropup%20.dropdown-menu%20%7B' 
,'%20%20%20%20top%3A%20auto%3B' 
,'%20%20%20%20bottom%3A%20100%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%20991.98px%29%20%7B' 
,'%20%20.navbar-expand-lg%20%3E%20.container%2C' 
,'%20%20.navbar-expand-lg%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20padding-right%3A%200%3B' 
,'%20%20%20%20padding-left%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.navbar-expand-lg%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-nav%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%3B' 
,'%20%20%20%20flex-direction%3A%20row%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20%20%20position%3A%20absolute%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-nav%20.dropdown-menu-right%20%7B' 
,'%20%20%20%20right%3A%200%3B' 
,'%20%20%20%20left%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%3B' 
,'%20%20%20%20padding-left%3A%200.5rem%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20%3E%20.container%2C' 
,'%20%20.navbar-expand-lg%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-collapse%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%20auto%3B' 
,'%20%20%20%20flex-basis%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.navbar-toggler%20%7B' 
,'%20%20%20%20display%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-lg%20.dropup%20.dropdown-menu%20%7B' 
,'%20%20%20%20top%3A%20auto%3B' 
,'%20%20%20%20bottom%3A%20100%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28max-width%3A%201199.98px%29%20%7B' 
,'%20%20.navbar-expand-xl%20%3E%20.container%2C' 
,'%20%20.navbar-expand-xl%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20padding-right%3A%200%3B' 
,'%20%20%20%20padding-left%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.navbar-expand-xl%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20nowrap%3B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-nav%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%3B' 
,'%20%20%20%20flex-direction%3A%20row%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20%20%20position%3A%20absolute%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-nav%20.dropdown-menu-right%20%7B' 
,'%20%20%20%20right%3A%200%3B' 
,'%20%20%20%20left%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%3B' 
,'%20%20%20%20padding-left%3A%200.5rem%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20%3E%20.container%2C' 
,'%20%20.navbar-expand-xl%20%3E%20.container-fluid%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-collapse%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%20%20-ms-flex-preferred-size%3A%20auto%3B' 
,'%20%20%20%20flex-basis%3A%20auto%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.navbar-toggler%20%7B' 
,'%20%20%20%20display%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.navbar-expand-xl%20.dropup%20.dropdown-menu%20%7B' 
,'%20%20%20%20top%3A%20auto%3B' 
,'%20%20%20%20bottom%3A%20100%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'.navbar-expand%20%7B' 
,'%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-flow%3A%20row%20nowrap%3B' 
,'%20%20flex-flow%3A%20row%20nowrap%3B' 
,'%20%20-webkit-box-pack%3A%20start%3B' 
,'%20%20-ms-flex-pack%3A%20start%3B' 
,'%20%20justify-content%3A%20flex-start%3B' 
,'%7D' 
,'.navbar-expand%20%3E%20.container%2C' 
,'.navbar-expand%20%3E%20.container-fluid%20%7B' 
,'%20%20padding-right%3A%200%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-nav%20%7B' 
,'%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20row%3B' 
,'%20%20flex-direction%3A%20row%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-nav%20.dropdown-menu%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-nav%20.dropdown-menu-right%20%7B' 
,'%20%20right%3A%200%3B' 
,'%20%20left%3A%20auto%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20padding-right%3A%200.5rem%3B' 
,'%20%20padding-left%3A%200.5rem%3B' 
,'%7D' 
,'.navbar-expand%20%3E%20.container%2C' 
,'.navbar-expand%20%3E%20.container-fluid%20%7B' 
,'%20%20-ms-flex-wrap%3A%20nowrap%3B' 
,'%20%20flex-wrap%3A%20nowrap%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-collapse%20%7B' 
,'%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20display%3A%20flex%20%21important%3B' 
,'%20%20-ms-flex-preferred-size%3A%20auto%3B' 
,'%20%20flex-basis%3A%20auto%3B' 
,'%7D' 
,'.navbar-expand%20.navbar-toggler%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.navbar-expand%20.dropup%20.dropdown-menu%20%7B' 
,'%20%20top%3A%20auto%3B' 
,'%20%20bottom%3A%20100%25%3B' 
,'%7D' 
,'.navbar-light%20.navbar-brand%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.9%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-brand%3Afocus%2C' 
,'.navbar-light%20.navbar-brand%3Ahover%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.9%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.5%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-nav%20.nav-link%3Afocus%2C' 
,'.navbar-light%20.navbar-nav%20.nav-link%3Ahover%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.7%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-nav%20.nav-link.disabled%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.3%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-nav%20.active%20%3E%20.nav-link%2C' 
,'.navbar-light%20.navbar-nav%20.nav-link.active%2C' 
,'.navbar-light%20.navbar-nav%20.nav-link.show%2C' 
,'.navbar-light%20.navbar-nav%20.show%20%3E%20.nav-link%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.9%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-toggler%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.5%29%3B' 
,'%20%20border-color%3A%20rgba%280%2C%200%2C%200%2C%200.1%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-toggler-icon%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20viewBox%3D%270%200%2030%2030%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%253E%253Cpath%20stroke%3D%27rgba%280%2C%200%2C%200%2C%200.5%29%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-miterlimit%3D%2710%27%20d%3D%27M4%207h22M4%2015h22M4%2023h22%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-text%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.5%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-text%20a%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.9%29%3B' 
,'%7D' 
,'.navbar-light%20.navbar-text%20a%3Afocus%2C' 
,'.navbar-light%20.navbar-text%20a%3Ahover%20%7B' 
,'%20%20color%3A%20rgba%280%2C%200%2C%200%2C%200.9%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-brand%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-brand%3Afocus%2C' 
,'.navbar-dark%20.navbar-brand%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-nav%20.nav-link%20%7B' 
,'%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-nav%20.nav-link%3Afocus%2C' 
,'.navbar-dark%20.navbar-nav%20.nav-link%3Ahover%20%7B' 
,'%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.75%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-nav%20.nav-link.disabled%20%7B' 
,'%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-nav%20.active%20%3E%20.nav-link%2C' 
,'.navbar-dark%20.navbar-nav%20.nav-link.active%2C' 
,'.navbar-dark%20.navbar-nav%20.nav-link.show%2C' 
,'.navbar-dark%20.navbar-nav%20.show%20%3E%20.nav-link%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-toggler%20%7B' 
,'%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.5%29%3B' 
,'%20%20border-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.1%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-toggler-icon%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20viewBox%3D%270%200%2030%2030%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%253E%253Cpath%20stroke%3D%27rgba%28255%2C%20255%2C%20255%2C%200.5%29%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-miterlimit%3D%2710%27%20d%3D%27M4%207h22M4%2015h22M4%2023h22%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-text%20%7B' 
,'%20%20color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-text%20a%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%7D' 
,'.navbar-dark%20.navbar-text%20a%3Afocus%2C' 
,'.navbar-dark%20.navbar-text%20a%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%7D' 
,'.card%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20min-width%3A%200%3B' 
,'%20%20word-wrap%3A%20break-word%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20background-clip%3A%20border-box%3B' 
,'%20%20border%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.125%29%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.card%20%3E%20hr%20%7B' 
,'%20%20margin-right%3A%200%3B' 
,'%20%20margin-left%3A%200%3B' 
,'%7D' 
,'.card%20%3E%20.list-group%3Afirst-child%20.list-group-item%3Afirst-child%20%7B' 
,'%20%20border-top-left-radius%3A%200.25rem%3B' 
,'%20%20border-top-right-radius%3A%200.25rem%3B' 
,'%7D' 
,'.card%20%3E%20.list-group%3Alast-child%20.list-group-item%3Alast-child%20%7B' 
,'%20%20border-bottom-right-radius%3A%200.25rem%3B' 
,'%20%20border-bottom-left-radius%3A%200.25rem%3B' 
,'%7D' 
,'.card-body%20%7B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex%3A%201%201%20auto%3B' 
,'%20%20flex%3A%201%201%20auto%3B' 
,'%20%20padding%3A%201.25rem%3B' 
,'%7D' 
,'.card-title%20%7B' 
,'%20%20margin-bottom%3A%200.75rem%3B' 
,'%7D' 
,'.card-subtitle%20%7B' 
,'%20%20margin-top%3A%20-0.375rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.card-text%3Alast-child%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.card-link%3Ahover%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.card-link%20+%20.card-link%20%7B' 
,'%20%20margin-left%3A%201.25rem%3B' 
,'%7D' 
,'.card-header%20%7B' 
,'%20%20padding%3A%200.75rem%201.25rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.03%29%3B' 
,'%20%20border-bottom%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.125%29%3B' 
,'%7D' 
,'.card-header%3Afirst-child%20%7B' 
,'%20%20border-radius%3A%20calc%280.25rem%20-%201px%29%20calc%280.25rem%20-%201px%29%200%200%3B' 
,'%7D' 
,'.card-header%20+%20.list-group%20.list-group-item%3Afirst-child%20%7B' 
,'%20%20border-top%3A%200%3B' 
,'%7D' 
,'.card-footer%20%7B' 
,'%20%20padding%3A%200.75rem%201.25rem%3B' 
,'%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200.03%29%3B' 
,'%20%20border-top%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.125%29%3B' 
,'%7D' 
,'.card-footer%3Alast-child%20%7B' 
,'%20%20border-radius%3A%200%200%20calc%280.25rem%20-%201px%29%20calc%280.25rem%20-%201px%29%3B' 
,'%7D' 
,'.card-header-tabs%20%7B' 
,'%20%20margin-right%3A%20-0.625rem%3B' 
,'%20%20margin-bottom%3A%20-0.75rem%3B' 
,'%20%20margin-left%3A%20-0.625rem%3B' 
,'%20%20border-bottom%3A%200%3B' 
,'%7D' 
,'.card-header-pills%20%7B' 
,'%20%20margin-right%3A%20-0.625rem%3B' 
,'%20%20margin-left%3A%20-0.625rem%3B' 
,'%7D' 
,'.card-img-overlay%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20padding%3A%201.25rem%3B' 
,'%7D' 
,'.card-img%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20border-radius%3A%20calc%280.25rem%20-%201px%29%3B' 
,'%7D' 
,'.card-img-top%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20border-top-left-radius%3A%20calc%280.25rem%20-%201px%29%3B' 
,'%20%20border-top-right-radius%3A%20calc%280.25rem%20-%201px%29%3B' 
,'%7D' 
,'.card-img-bottom%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20border-bottom-right-radius%3A%20calc%280.25rem%20-%201px%29%3B' 
,'%20%20border-bottom-left-radius%3A%20calc%280.25rem%20-%201px%29%3B' 
,'%7D' 
,'.card-deck%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%7D' 
,'.card-deck%20.card%20%7B' 
,'%20%20margin-bottom%3A%2015px%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.card-deck%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20wrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20wrap%3B' 
,'%20%20%20%20margin-right%3A%20-15px%3B' 
,'%20%20%20%20margin-left%3A%20-15px%3B' 
,'%20%20%7D' 
,'%20%20.card-deck%20.card%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20%20%20display%3A%20flex%3B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex%3A%201%200%200%25%3B' 
,'%20%20%20%20flex%3A%201%200%200%25%3B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20%20%20flex-direction%3A%20column%3B' 
,'%20%20%20%20margin-right%3A%2015px%3B' 
,'%20%20%20%20margin-bottom%3A%200%3B' 
,'%20%20%20%20margin-left%3A%2015px%3B' 
,'%20%20%7D' 
,'%7D' 
,'.card-group%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%7D' 
,'.card-group%20%3E%20.card%20%7B' 
,'%20%20margin-bottom%3A%2015px%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.card-group%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20%20%20-ms-flex-flow%3A%20row%20wrap%3B' 
,'%20%20%20%20flex-flow%3A%20row%20wrap%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%20%7B' 
,'%20%20%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20%20%20-ms-flex%3A%201%200%200%25%3B' 
,'%20%20%20%20flex%3A%201%200%200%25%3B' 
,'%20%20%20%20margin-bottom%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%20+%20.card%20%7B' 
,'%20%20%20%20margin-left%3A%200%3B' 
,'%20%20%20%20border-left%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Afirst-child%20%7B' 
,'%20%20%20%20border-top-right-radius%3A%200%3B' 
,'%20%20%20%20border-bottom-right-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Afirst-child%20.card-header%2C' 
,'%20%20.card-group%20%3E%20.card%3Afirst-child%20.card-img-top%20%7B' 
,'%20%20%20%20border-top-right-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Afirst-child%20.card-footer%2C' 
,'%20%20.card-group%20%3E%20.card%3Afirst-child%20.card-img-bottom%20%7B' 
,'%20%20%20%20border-bottom-right-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Alast-child%20%7B' 
,'%20%20%20%20border-top-left-radius%3A%200%3B' 
,'%20%20%20%20border-bottom-left-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Alast-child%20.card-header%2C' 
,'%20%20.card-group%20%3E%20.card%3Alast-child%20.card-img-top%20%7B' 
,'%20%20%20%20border-top-left-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Alast-child%20.card-footer%2C' 
,'%20%20.card-group%20%3E%20.card%3Alast-child%20.card-img-bottom%20%7B' 
,'%20%20%20%20border-bottom-left-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Aonly-child%20%7B' 
,'%20%20%20%20border-radius%3A%200.25rem%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Aonly-child%20.card-header%2C' 
,'%20%20.card-group%20%3E%20.card%3Aonly-child%20.card-img-top%20%7B' 
,'%20%20%20%20border-top-left-radius%3A%200.25rem%3B' 
,'%20%20%20%20border-top-right-radius%3A%200.25rem%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Aonly-child%20.card-footer%2C' 
,'%20%20.card-group%20%3E%20.card%3Aonly-child%20.card-img-bottom%20%7B' 
,'%20%20%20%20border-bottom-right-radius%3A%200.25rem%3B' 
,'%20%20%20%20border-bottom-left-radius%3A%200.25rem%3B' 
,'%20%20%7D' 
,'%20%20.card-group%20%3E%20.card%3Anot%28%3Afirst-child%29%3Anot%28%3Alast-child%29%3Anot%28%3Aonly-child%29%20%7B' 
,'%20%20%20%20border-radius%3A%200%3B' 
,'%20%20%7D' 
,'%20%20.card-group' 
,'%20%20%20%20%3E%20.card%3Anot%28%3Afirst-child%29%3Anot%28%3Alast-child%29%3Anot%28%3Aonly-child%29' 
,'%20%20%20%20.card-footer%2C' 
,'%20%20.card-group' 
,'%20%20%20%20%3E%20.card%3Anot%28%3Afirst-child%29%3Anot%28%3Alast-child%29%3Anot%28%3Aonly-child%29' 
,'%20%20%20%20.card-header%2C' 
,'%20%20.card-group' 
,'%20%20%20%20%3E%20.card%3Anot%28%3Afirst-child%29%3Anot%28%3Alast-child%29%3Anot%28%3Aonly-child%29' 
,'%20%20%20%20.card-img-bottom%2C' 
,'%20%20.card-group' 
,'%20%20%20%20%3E%20.card%3Anot%28%3Afirst-child%29%3Anot%28%3Alast-child%29%3Anot%28%3Aonly-child%29' 
,'%20%20%20%20.card-img-top%20%7B' 
,'%20%20%20%20border-radius%3A%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'.card-columns%20.card%20%7B' 
,'%20%20margin-bottom%3A%200.75rem%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.card-columns%20%7B' 
,'%20%20%20%20-webkit-column-count%3A%203%3B' 
,'%20%20%20%20-moz-column-count%3A%203%3B' 
,'%20%20%20%20column-count%3A%203%3B' 
,'%20%20%20%20-webkit-column-gap%3A%201.25rem%3B' 
,'%20%20%20%20-moz-column-gap%3A%201.25rem%3B' 
,'%20%20%20%20column-gap%3A%201.25rem%3B' 
,'%20%20%7D' 
,'%20%20.card-columns%20.card%20%7B' 
,'%20%20%20%20display%3A%20inline-block%3B' 
,'%20%20%20%20width%3A%20100%25%3B' 
,'%20%20%7D' 
,'%7D' 
,'.breadcrumb%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-ms-flex-wrap%3A%20wrap%3B' 
,'%20%20flex-wrap%3A%20wrap%3B' 
,'%20%20padding%3A%200.75rem%201rem%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.breadcrumb-item%20+%20.breadcrumb-item%3A%3Abefore%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20padding-right%3A%200.5rem%3B' 
,'%20%20padding-left%3A%200.5rem%3B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20content%3A%20%22/%22%3B' 
,'%7D' 
,'.breadcrumb-item%20+%20.breadcrumb-item%3Ahover%3A%3Abefore%20%7B' 
,'%20%20text-decoration%3A%20underline%3B' 
,'%7D' 
,'.breadcrumb-item%20+%20.breadcrumb-item%3Ahover%3A%3Abefore%20%7B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.breadcrumb-item.active%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%7D' 
,'.pagination%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.page-link%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20padding%3A%200.5rem%200.75rem%3B' 
,'%20%20margin-left%3A%20-1px%3B' 
,'%20%20line-height%3A%201.25%3B' 
,'%20%20color%3A%20%23007bff%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border%3A%201px%20solid%20%23dee2e6%3B' 
,'%7D' 
,'.page-link%3Ahover%20%7B' 
,'%20%20color%3A%20%230056b3%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-color%3A%20%23dee2e6%3B' 
,'%7D' 
,'.page-link%3Afocus%20%7B' 
,'%20%20z-index%3A%202%3B' 
,'%20%20outline%3A%200%3B' 
,'%20%20box-shadow%3A%200%200%200%200.2rem%20rgba%280%2C%20123%2C%20255%2C%200.25%29%3B' 
,'%7D' 
,'.page-link%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'.page-item%3Afirst-child%20.page-link%20%7B' 
,'%20%20margin-left%3A%200%3B' 
,'%20%20border-top-left-radius%3A%200.25rem%3B' 
,'%20%20border-bottom-left-radius%3A%200.25rem%3B' 
,'%7D' 
,'.page-item%3Alast-child%20.page-link%20%7B' 
,'%20%20border-top-right-radius%3A%200.25rem%3B' 
,'%20%20border-bottom-right-radius%3A%200.25rem%3B' 
,'%7D' 
,'.page-item.active%20.page-link%20%7B' 
,'%20%20z-index%3A%201%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.page-item.disabled%20.page-link%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%20%20cursor%3A%20auto%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border-color%3A%20%23dee2e6%3B' 
,'%7D' 
,'.pagination-lg%20.page-link%20%7B' 
,'%20%20padding%3A%200.75rem%201.5rem%3B' 
,'%20%20font-size%3A%201.25rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.pagination-lg%20.page-item%3Afirst-child%20.page-link%20%7B' 
,'%20%20border-top-left-radius%3A%200.3rem%3B' 
,'%20%20border-bottom-left-radius%3A%200.3rem%3B' 
,'%7D' 
,'.pagination-lg%20.page-item%3Alast-child%20.page-link%20%7B' 
,'%20%20border-top-right-radius%3A%200.3rem%3B' 
,'%20%20border-bottom-right-radius%3A%200.3rem%3B' 
,'%7D' 
,'.pagination-sm%20.page-link%20%7B' 
,'%20%20padding%3A%200.25rem%200.5rem%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.pagination-sm%20.page-item%3Afirst-child%20.page-link%20%7B' 
,'%20%20border-top-left-radius%3A%200.2rem%3B' 
,'%20%20border-bottom-left-radius%3A%200.2rem%3B' 
,'%7D' 
,'.pagination-sm%20.page-item%3Alast-child%20.page-link%20%7B' 
,'%20%20border-top-right-radius%3A%200.2rem%3B' 
,'%20%20border-bottom-right-radius%3A%200.2rem%3B' 
,'%7D' 
,'.badge%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20padding%3A%200.25em%200.4em%3B' 
,'%20%20font-size%3A%2075%25%3B' 
,'%20%20font-weight%3A%20700%3B' 
,'%20%20line-height%3A%201%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%20%20vertical-align%3A%20baseline%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.badge%3Aempty%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.btn%20.badge%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20top%3A%20-1px%3B' 
,'%7D' 
,'.badge-pill%20%7B' 
,'%20%20padding-right%3A%200.6em%3B' 
,'%20%20padding-left%3A%200.6em%3B' 
,'%20%20border-radius%3A%2010rem%3B' 
,'%7D' 
,'.badge-primary%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%7D' 
,'.badge-primary%5Bhref%5D%3Afocus%2C' 
,'.badge-primary%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%230062cc%3B' 
,'%7D' 
,'.badge-secondary%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%236c757d%3B' 
,'%7D' 
,'.badge-secondary%5Bhref%5D%3Afocus%2C' 
,'.badge-secondary%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23545b62%3B' 
,'%7D' 
,'.badge-success%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2328a745%3B' 
,'%7D' 
,'.badge-success%5Bhref%5D%3Afocus%2C' 
,'.badge-success%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%231e7e34%3B' 
,'%7D' 
,'.badge-info%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%2317a2b8%3B' 
,'%7D' 
,'.badge-info%5Bhref%5D%3Afocus%2C' 
,'.badge-info%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23117a8b%3B' 
,'%7D' 
,'.badge-warning%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23ffc107%3B' 
,'%7D' 
,'.badge-warning%5Bhref%5D%3Afocus%2C' 
,'.badge-warning%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23d39e00%3B' 
,'%7D' 
,'.badge-danger%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23dc3545%3B' 
,'%7D' 
,'.badge-danger%5Bhref%5D%3Afocus%2C' 
,'.badge-danger%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23bd2130%3B' 
,'%7D' 
,'.badge-light%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.badge-light%5Bhref%5D%3Afocus%2C' 
,'.badge-light%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23dae0e5%3B' 
,'%7D' 
,'.badge-dark%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23343a40%3B' 
,'%7D' 
,'.badge-dark%5Bhref%5D%3Afocus%2C' 
,'.badge-dark%5Bhref%5D%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%231d2124%3B' 
,'%7D' 
,'.jumbotron%20%7B' 
,'%20%20padding%3A%202rem%201rem%3B' 
,'%20%20margin-bottom%3A%202rem%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-radius%3A%200.3rem%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.jumbotron%20%7B' 
,'%20%20%20%20padding%3A%204rem%202rem%3B' 
,'%20%20%7D' 
,'%7D' 
,'.jumbotron-fluid%20%7B' 
,'%20%20padding-right%3A%200%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20border-radius%3A%200%3B' 
,'%7D' 
,'.alert%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20padding%3A%200.75rem%201.25rem%3B' 
,'%20%20margin-bottom%3A%201rem%3B' 
,'%20%20border%3A%201px%20solid%20transparent%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.alert-heading%20%7B' 
,'%20%20color%3A%20inherit%3B' 
,'%7D' 
,'.alert-link%20%7B' 
,'%20%20font-weight%3A%20700%3B' 
,'%7D' 
,'.alert-dismissible%20%7B' 
,'%20%20padding-right%3A%204rem%3B' 
,'%7D' 
,'.alert-dismissible%20.close%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20padding%3A%200.75rem%201.25rem%3B' 
,'%20%20color%3A%20inherit%3B' 
,'%7D' 
,'.alert-primary%20%7B' 
,'%20%20color%3A%20%23004085%3B' 
,'%20%20background-color%3A%20%23cce5ff%3B' 
,'%20%20border-color%3A%20%23b8daff%3B' 
,'%7D' 
,'.alert-primary%20hr%20%7B' 
,'%20%20border-top-color%3A%20%239fcdff%3B' 
,'%7D' 
,'.alert-primary%20.alert-link%20%7B' 
,'%20%20color%3A%20%23002752%3B' 
,'%7D' 
,'.alert-secondary%20%7B' 
,'%20%20color%3A%20%23383d41%3B' 
,'%20%20background-color%3A%20%23e2e3e5%3B' 
,'%20%20border-color%3A%20%23d6d8db%3B' 
,'%7D' 
,'.alert-secondary%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23c8cbcf%3B' 
,'%7D' 
,'.alert-secondary%20.alert-link%20%7B' 
,'%20%20color%3A%20%23202326%3B' 
,'%7D' 
,'.alert-success%20%7B' 
,'%20%20color%3A%20%23155724%3B' 
,'%20%20background-color%3A%20%23d4edda%3B' 
,'%20%20border-color%3A%20%23c3e6cb%3B' 
,'%7D' 
,'.alert-success%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23b1dfbb%3B' 
,'%7D' 
,'.alert-success%20.alert-link%20%7B' 
,'%20%20color%3A%20%230b2e13%3B' 
,'%7D' 
,'.alert-info%20%7B' 
,'%20%20color%3A%20%230c5460%3B' 
,'%20%20background-color%3A%20%23d1ecf1%3B' 
,'%20%20border-color%3A%20%23bee5eb%3B' 
,'%7D' 
,'.alert-info%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23abdde5%3B' 
,'%7D' 
,'.alert-info%20.alert-link%20%7B' 
,'%20%20color%3A%20%23062c33%3B' 
,'%7D' 
,'.alert-warning%20%7B' 
,'%20%20color%3A%20%23856404%3B' 
,'%20%20background-color%3A%20%23fff3cd%3B' 
,'%20%20border-color%3A%20%23ffeeba%3B' 
,'%7D' 
,'.alert-warning%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23ffe8a1%3B' 
,'%7D' 
,'.alert-warning%20.alert-link%20%7B' 
,'%20%20color%3A%20%23533f03%3B' 
,'%7D' 
,'.alert-danger%20%7B' 
,'%20%20color%3A%20%23721c24%3B' 
,'%20%20background-color%3A%20%23f8d7da%3B' 
,'%20%20border-color%3A%20%23f5c6cb%3B' 
,'%7D' 
,'.alert-danger%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23f1b0b7%3B' 
,'%7D' 
,'.alert-danger%20.alert-link%20%7B' 
,'%20%20color%3A%20%23491217%3B' 
,'%7D' 
,'.alert-light%20%7B' 
,'%20%20color%3A%20%23818182%3B' 
,'%20%20background-color%3A%20%23fefefe%3B' 
,'%20%20border-color%3A%20%23fdfdfe%3B' 
,'%7D' 
,'.alert-light%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23ececf6%3B' 
,'%7D' 
,'.alert-light%20.alert-link%20%7B' 
,'%20%20color%3A%20%23686868%3B' 
,'%7D' 
,'.alert-dark%20%7B' 
,'%20%20color%3A%20%231b1e21%3B' 
,'%20%20background-color%3A%20%23d6d8d9%3B' 
,'%20%20border-color%3A%20%23c6c8ca%3B' 
,'%7D' 
,'.alert-dark%20hr%20%7B' 
,'%20%20border-top-color%3A%20%23b9bbbe%3B' 
,'%7D' 
,'.alert-dark%20.alert-link%20%7B' 
,'%20%20color%3A%20%23040505%3B' 
,'%7D' 
,'@-webkit-keyframes%20progress-bar-stripes%20%7B' 
,'%20%20from%20%7B' 
,'%20%20%20%20background-position%3A%201rem%200%3B' 
,'%20%20%7D' 
,'%20%20to%20%7B' 
,'%20%20%20%20background-position%3A%200%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'@keyframes%20progress-bar-stripes%20%7B' 
,'%20%20from%20%7B' 
,'%20%20%20%20background-position%3A%201rem%200%3B' 
,'%20%20%7D' 
,'%20%20to%20%7B' 
,'%20%20%20%20background-position%3A%200%200%3B' 
,'%20%20%7D' 
,'%7D' 
,'.progress%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20height%3A%201rem%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20font-size%3A%200.75rem%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.progress-bar%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20transition%3A%20width%200.6s%20ease%3B' 
,'%7D' 
,'.progress-bar-striped%20%7B' 
,'%20%20background-image%3A%20linear-gradient%28' 
,'%20%20%20%2045deg%2C' 
,'%20%20%20%20rgba%28255%2C%20255%2C%20255%2C%200.15%29%2025%25%2C' 
,'%20%20%20%20transparent%2025%25%2C' 
,'%20%20%20%20transparent%2050%25%2C' 
,'%20%20%20%20rgba%28255%2C%20255%2C%20255%2C%200.15%29%2050%25%2C' 
,'%20%20%20%20rgba%28255%2C%20255%2C%20255%2C%200.15%29%2075%25%2C' 
,'%20%20%20%20transparent%2075%25%2C' 
,'%20%20%20%20transparent' 
,'%20%20%29%3B' 
,'%20%20background-size%3A%201rem%201rem%3B' 
,'%7D' 
,'.progress-bar-animated%20%7B' 
,'%20%20-webkit-animation%3A%20progress-bar-stripes%201s%20linear%20infinite%3B' 
,'%20%20animation%3A%20progress-bar-stripes%201s%20linear%20infinite%3B' 
,'%7D' 
,'.media%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20start%3B' 
,'%20%20-ms-flex-align%3A%20start%3B' 
,'%20%20align-items%3A%20flex-start%3B' 
,'%7D' 
,'.media-body%20%7B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex%3A%201%3B' 
,'%20%20flex%3A%201%3B' 
,'%7D' 
,'.list-group%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%7D' 
,'.list-group-item-action%20%7B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20text-align%3A%20inherit%3B' 
,'%7D' 
,'.list-group-item-action%3Afocus%2C' 
,'.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23495057%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20background-color%3A%20%23f8f9fa%3B' 
,'%7D' 
,'.list-group-item-action%3Aactive%20%7B' 
,'%20%20color%3A%20%23212529%3B' 
,'%20%20background-color%3A%20%23e9ecef%3B' 
,'%7D' 
,'.list-group-item%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20padding%3A%200.75rem%201.25rem%3B' 
,'%20%20margin-bottom%3A%20-1px%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20border%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.125%29%3B' 
,'%7D' 
,'.list-group-item%3Afirst-child%20%7B' 
,'%20%20border-top-left-radius%3A%200.25rem%3B' 
,'%20%20border-top-right-radius%3A%200.25rem%3B' 
,'%7D' 
,'.list-group-item%3Alast-child%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20border-bottom-right-radius%3A%200.25rem%3B' 
,'%20%20border-bottom-left-radius%3A%200.25rem%3B' 
,'%7D' 
,'.list-group-item%3Afocus%2C' 
,'.list-group-item%3Ahover%20%7B' 
,'%20%20z-index%3A%201%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%7D' 
,'.list-group-item.disabled%2C' 
,'.list-group-item%3Adisabled%20%7B' 
,'%20%20color%3A%20%236c757d%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'.list-group-item.active%20%7B' 
,'%20%20z-index%3A%202%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23007bff%3B' 
,'%20%20border-color%3A%20%23007bff%3B' 
,'%7D' 
,'.list-group-flush%20.list-group-item%20%7B' 
,'%20%20border-right%3A%200%3B' 
,'%20%20border-left%3A%200%3B' 
,'%20%20border-radius%3A%200%3B' 
,'%7D' 
,'.list-group-flush%3Afirst-child%20.list-group-item%3Afirst-child%20%7B' 
,'%20%20border-top%3A%200%3B' 
,'%7D' 
,'.list-group-flush%3Alast-child%20.list-group-item%3Alast-child%20%7B' 
,'%20%20border-bottom%3A%200%3B' 
,'%7D' 
,'.list-group-item-primary%20%7B' 
,'%20%20color%3A%20%23004085%3B' 
,'%20%20background-color%3A%20%23b8daff%3B' 
,'%7D' 
,'.list-group-item-primary.list-group-item-action%3Afocus%2C' 
,'.list-group-item-primary.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23004085%3B' 
,'%20%20background-color%3A%20%239fcdff%3B' 
,'%7D' 
,'.list-group-item-primary.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23004085%3B' 
,'%20%20border-color%3A%20%23004085%3B' 
,'%7D' 
,'.list-group-item-secondary%20%7B' 
,'%20%20color%3A%20%23383d41%3B' 
,'%20%20background-color%3A%20%23d6d8db%3B' 
,'%7D' 
,'.list-group-item-secondary.list-group-item-action%3Afocus%2C' 
,'.list-group-item-secondary.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23383d41%3B' 
,'%20%20background-color%3A%20%23c8cbcf%3B' 
,'%7D' 
,'.list-group-item-secondary.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23383d41%3B' 
,'%20%20border-color%3A%20%23383d41%3B' 
,'%7D' 
,'.list-group-item-success%20%7B' 
,'%20%20color%3A%20%23155724%3B' 
,'%20%20background-color%3A%20%23c3e6cb%3B' 
,'%7D' 
,'.list-group-item-success.list-group-item-action%3Afocus%2C' 
,'.list-group-item-success.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23155724%3B' 
,'%20%20background-color%3A%20%23b1dfbb%3B' 
,'%7D' 
,'.list-group-item-success.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23155724%3B' 
,'%20%20border-color%3A%20%23155724%3B' 
,'%7D' 
,'.list-group-item-info%20%7B' 
,'%20%20color%3A%20%230c5460%3B' 
,'%20%20background-color%3A%20%23bee5eb%3B' 
,'%7D' 
,'.list-group-item-info.list-group-item-action%3Afocus%2C' 
,'.list-group-item-info.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%230c5460%3B' 
,'%20%20background-color%3A%20%23abdde5%3B' 
,'%7D' 
,'.list-group-item-info.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%230c5460%3B' 
,'%20%20border-color%3A%20%230c5460%3B' 
,'%7D' 
,'.list-group-item-warning%20%7B' 
,'%20%20color%3A%20%23856404%3B' 
,'%20%20background-color%3A%20%23ffeeba%3B' 
,'%7D' 
,'.list-group-item-warning.list-group-item-action%3Afocus%2C' 
,'.list-group-item-warning.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23856404%3B' 
,'%20%20background-color%3A%20%23ffe8a1%3B' 
,'%7D' 
,'.list-group-item-warning.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23856404%3B' 
,'%20%20border-color%3A%20%23856404%3B' 
,'%7D' 
,'.list-group-item-danger%20%7B' 
,'%20%20color%3A%20%23721c24%3B' 
,'%20%20background-color%3A%20%23f5c6cb%3B' 
,'%7D' 
,'.list-group-item-danger.list-group-item-action%3Afocus%2C' 
,'.list-group-item-danger.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23721c24%3B' 
,'%20%20background-color%3A%20%23f1b0b7%3B' 
,'%7D' 
,'.list-group-item-danger.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23721c24%3B' 
,'%20%20border-color%3A%20%23721c24%3B' 
,'%7D' 
,'.list-group-item-light%20%7B' 
,'%20%20color%3A%20%23818182%3B' 
,'%20%20background-color%3A%20%23fdfdfe%3B' 
,'%7D' 
,'.list-group-item-light.list-group-item-action%3Afocus%2C' 
,'.list-group-item-light.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%23818182%3B' 
,'%20%20background-color%3A%20%23ececf6%3B' 
,'%7D' 
,'.list-group-item-light.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%23818182%3B' 
,'%20%20border-color%3A%20%23818182%3B' 
,'%7D' 
,'.list-group-item-dark%20%7B' 
,'%20%20color%3A%20%231b1e21%3B' 
,'%20%20background-color%3A%20%23c6c8ca%3B' 
,'%7D' 
,'.list-group-item-dark.list-group-item-action%3Afocus%2C' 
,'.list-group-item-dark.list-group-item-action%3Ahover%20%7B' 
,'%20%20color%3A%20%231b1e21%3B' 
,'%20%20background-color%3A%20%23b9bbbe%3B' 
,'%7D' 
,'.list-group-item-dark.list-group-item-action.active%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20background-color%3A%20%231b1e21%3B' 
,'%20%20border-color%3A%20%231b1e21%3B' 
,'%7D' 
,'.close%20%7B' 
,'%20%20float%3A%20right%3B' 
,'%20%20font-size%3A%201.5rem%3B' 
,'%20%20font-weight%3A%20700%3B' 
,'%20%20line-height%3A%201%3B' 
,'%20%20color%3A%20%23000%3B' 
,'%20%20text-shadow%3A%200%201px%200%20%23fff%3B' 
,'%20%20opacity%3A%200.5%3B' 
,'%7D' 
,'.close%3Afocus%2C' 
,'.close%3Ahover%20%7B' 
,'%20%20color%3A%20%23000%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20opacity%3A%200.75%3B' 
,'%7D' 
,'.close%3Anot%28%3Adisabled%29%3Anot%28.disabled%29%20%7B' 
,'%20%20cursor%3A%20pointer%3B' 
,'%7D' 
,'button.close%20%7B' 
,'%20%20padding%3A%200%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%200%3B' 
,'%20%20-webkit-appearance%3A%20none%3B' 
,'%7D' 
,'.modal-open%20%7B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%7D' 
,'.modal%20%7B' 
,'%20%20position%3A%20fixed%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201050%3B' 
,'%20%20display%3A%20none%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20outline%3A%200%3B' 
,'%7D' 
,'.modal-open%20.modal%20%7B' 
,'%20%20overflow-x%3A%20hidden%3B' 
,'%20%20overflow-y%3A%20auto%3B' 
,'%7D' 
,'.modal-dialog%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20width%3A%20auto%3B' 
,'%20%20margin%3A%200.5rem%3B' 
,'%20%20pointer-events%3A%20none%3B' 
,'%7D' 
,'.modal.fade%20.modal-dialog%20%7B' 
,'%20%20transition%3A%20-webkit-transform%200.3s%20ease-out%3B' 
,'%20%20transition%3A%20transform%200.3s%20ease-out%3B' 
,'%20%20transition%3A%20transform%200.3s%20ease-out%2C%20-webkit-transform%200.3s%20ease-out%3B' 
,'%20%20-webkit-transform%3A%20translate%280%2C%20-25%25%29%3B' 
,'%20%20transform%3A%20translate%280%2C%20-25%25%29%3B' 
,'%7D' 
,'.modal.show%20.modal-dialog%20%7B' 
,'%20%20-webkit-transform%3A%20translate%280%2C%200%29%3B' 
,'%20%20transform%3A%20translate%280%2C%200%29%3B' 
,'%7D' 
,'.modal-dialog-centered%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20min-height%3A%20calc%28100%25%20-%20%280.5rem%20*%202%29%29%3B' 
,'%7D' 
,'.modal-content%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-orient%3A%20vertical%3B' 
,'%20%20-webkit-box-direction%3A%20normal%3B' 
,'%20%20-ms-flex-direction%3A%20column%3B' 
,'%20%20flex-direction%3A%20column%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20pointer-events%3A%20auto%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20background-clip%3A%20padding-box%3B' 
,'%20%20border%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.2%29%3B' 
,'%20%20border-radius%3A%200.3rem%3B' 
,'%20%20outline%3A%200%3B' 
,'%7D' 
,'.modal-backdrop%20%7B' 
,'%20%20position%3A%20fixed%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201040%3B' 
,'%20%20background-color%3A%20%23000%3B' 
,'%7D' 
,'.modal-backdrop.fade%20%7B' 
,'%20%20opacity%3A%200%3B' 
,'%7D' 
,'.modal-backdrop.show%20%7B' 
,'%20%20opacity%3A%200.5%3B' 
,'%7D' 
,'.modal-header%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20start%3B' 
,'%20%20-ms-flex-align%3A%20start%3B' 
,'%20%20align-items%3A%20flex-start%3B' 
,'%20%20-webkit-box-pack%3A%20justify%3B' 
,'%20%20-ms-flex-pack%3A%20justify%3B' 
,'%20%20justify-content%3A%20space-between%3B' 
,'%20%20padding%3A%201rem%3B' 
,'%20%20border-bottom%3A%201px%20solid%20%23e9ecef%3B' 
,'%20%20border-top-left-radius%3A%200.3rem%3B' 
,'%20%20border-top-right-radius%3A%200.3rem%3B' 
,'%7D' 
,'.modal-header%20.close%20%7B' 
,'%20%20padding%3A%201rem%3B' 
,'%20%20margin%3A%20-1rem%20-1rem%20-1rem%20auto%3B' 
,'%7D' 
,'.modal-title%20%7B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%7D' 
,'.modal-body%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20-webkit-box-flex%3A%201%3B' 
,'%20%20-ms-flex%3A%201%201%20auto%3B' 
,'%20%20flex%3A%201%201%20auto%3B' 
,'%20%20padding%3A%201rem%3B' 
,'%7D' 
,'.modal-footer%20%7B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20-webkit-box-pack%3A%20end%3B' 
,'%20%20-ms-flex-pack%3A%20end%3B' 
,'%20%20justify-content%3A%20flex-end%3B' 
,'%20%20padding%3A%201rem%3B' 
,'%20%20border-top%3A%201px%20solid%20%23e9ecef%3B' 
,'%7D' 
,'.modal-footer%20%3E%20%3Anot%28%3Afirst-child%29%20%7B' 
,'%20%20margin-left%3A%200.25rem%3B' 
,'%7D' 
,'.modal-footer%20%3E%20%3Anot%28%3Alast-child%29%20%7B' 
,'%20%20margin-right%3A%200.25rem%3B' 
,'%7D' 
,'.modal-scrollbar-measure%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20-9999px%3B' 
,'%20%20width%3A%2050px%3B' 
,'%20%20height%3A%2050px%3B' 
,'%20%20overflow%3A%20scroll%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.modal-dialog%20%7B' 
,'%20%20%20%20max-width%3A%20500px%3B' 
,'%20%20%20%20margin%3A%201.75rem%20auto%3B' 
,'%20%20%7D' 
,'%20%20.modal-dialog-centered%20%7B' 
,'%20%20%20%20min-height%3A%20calc%28100%25%20-%20%281.75rem%20*%202%29%29%3B' 
,'%20%20%7D' 
,'%20%20.modal-sm%20%7B' 
,'%20%20%20%20max-width%3A%20300px%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.modal-lg%20%7B' 
,'%20%20%20%20max-width%3A%20800px%3B' 
,'%20%20%7D' 
,'%7D' 
,'.tooltip%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20z-index%3A%201070%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20margin%3A%200%3B' 
,'%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C' 
,'%20%20%20%20%22Helvetica%20Neue%22%2C%20Arial%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C%20%22Segoe%20UI%20Emoji%22%2C' 
,'%20%20%20%20%22Segoe%20UI%20Symbol%22%3B' 
,'%20%20font-style%3A%20normal%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20text-align%3A%20left%3B' 
,'%20%20text-align%3A%20start%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20text-shadow%3A%20none%3B' 
,'%20%20text-transform%3A%20none%3B' 
,'%20%20letter-spacing%3A%20normal%3B' 
,'%20%20word-break%3A%20normal%3B' 
,'%20%20word-spacing%3A%20normal%3B' 
,'%20%20white-space%3A%20normal%3B' 
,'%20%20line-break%3A%20auto%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20word-wrap%3A%20break-word%3B' 
,'%20%20opacity%3A%200%3B' 
,'%7D' 
,'.tooltip.show%20%7B' 
,'%20%20opacity%3A%200.9%3B' 
,'%7D' 
,'.tooltip%20.arrow%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%200.8rem%3B' 
,'%20%20height%3A%200.4rem%3B' 
,'%7D' 
,'.tooltip%20.arrow%3A%3Abefore%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-color%3A%20transparent%3B' 
,'%20%20border-style%3A%20solid%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22top%22%5D%2C' 
,'.bs-tooltip-top%20%7B' 
,'%20%20padding%3A%200.4rem%200%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%2C' 
,'.bs-tooltip-top%20.arrow%20%7B' 
,'%20%20bottom%3A%200%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-tooltip-top%20.arrow%3A%3Abefore%20%7B' 
,'%20%20top%3A%200%3B' 
,'%20%20border-width%3A%200.4rem%200.4rem%200%3B' 
,'%20%20border-top-color%3A%20%23000%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22right%22%5D%2C' 
,'.bs-tooltip-right%20%7B' 
,'%20%20padding%3A%200%200.4rem%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%2C' 
,'.bs-tooltip-right%20.arrow%20%7B' 
,'%20%20left%3A%200%3B' 
,'%20%20width%3A%200.4rem%3B' 
,'%20%20height%3A%200.8rem%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-tooltip-right%20.arrow%3A%3Abefore%20%7B' 
,'%20%20right%3A%200%3B' 
,'%20%20border-width%3A%200.4rem%200.4rem%200.4rem%200%3B' 
,'%20%20border-right-color%3A%20%23000%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22bottom%22%5D%2C' 
,'.bs-tooltip-bottom%20%7B' 
,'%20%20padding%3A%200.4rem%200%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%2C' 
,'.bs-tooltip-bottom%20.arrow%20%7B' 
,'%20%20top%3A%200%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-tooltip-bottom%20.arrow%3A%3Abefore%20%7B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20border-width%3A%200%200.4rem%200.4rem%3B' 
,'%20%20border-bottom-color%3A%20%23000%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22left%22%5D%2C' 
,'.bs-tooltip-left%20%7B' 
,'%20%20padding%3A%200%200.4rem%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%2C' 
,'.bs-tooltip-left%20.arrow%20%7B' 
,'%20%20right%3A%200%3B' 
,'%20%20width%3A%200.4rem%3B' 
,'%20%20height%3A%200.8rem%3B' 
,'%7D' 
,'.bs-tooltip-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-tooltip-left%20.arrow%3A%3Abefore%20%7B' 
,'%20%20left%3A%200%3B' 
,'%20%20border-width%3A%200.4rem%200%200.4rem%200.4rem%3B' 
,'%20%20border-left-color%3A%20%23000%3B' 
,'%7D' 
,'.tooltip-inner%20%7B' 
,'%20%20max-width%3A%20200px%3B' 
,'%20%20padding%3A%200.25rem%200.5rem%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20background-color%3A%20%23000%3B' 
,'%20%20border-radius%3A%200.25rem%3B' 
,'%7D' 
,'.popover%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201060%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20max-width%3A%20276px%3B' 
,'%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C' 
,'%20%20%20%20%22Helvetica%20Neue%22%2C%20Arial%2C%20sans-serif%2C%20%22Apple%20Color%20Emoji%22%2C%20%22Segoe%20UI%20Emoji%22%2C' 
,'%20%20%20%20%22Segoe%20UI%20Symbol%22%3B' 
,'%20%20font-style%3A%20normal%3B' 
,'%20%20font-weight%3A%20400%3B' 
,'%20%20line-height%3A%201.5%3B' 
,'%20%20text-align%3A%20left%3B' 
,'%20%20text-align%3A%20start%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20text-shadow%3A%20none%3B' 
,'%20%20text-transform%3A%20none%3B' 
,'%20%20letter-spacing%3A%20normal%3B' 
,'%20%20word-break%3A%20normal%3B' 
,'%20%20word-spacing%3A%20normal%3B' 
,'%20%20white-space%3A%20normal%3B' 
,'%20%20line-break%3A%20auto%3B' 
,'%20%20font-size%3A%200.875rem%3B' 
,'%20%20word-wrap%3A%20break-word%3B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%20%20background-clip%3A%20padding-box%3B' 
,'%20%20border%3A%201px%20solid%20rgba%280%2C%200%2C%200%2C%200.2%29%3B' 
,'%20%20border-radius%3A%200.3rem%3B' 
,'%7D' 
,'.popover%20.arrow%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%201rem%3B' 
,'%20%20height%3A%200.5rem%3B' 
,'%20%20margin%3A%200%200.3rem%3B' 
,'%7D' 
,'.popover%20.arrow%3A%3Aafter%2C' 
,'.popover%20.arrow%3A%3Abefore%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-color%3A%20transparent%3B' 
,'%20%20border-style%3A%20solid%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%2C' 
,'.bs-popover-top%20%7B' 
,'%20%20margin-bottom%3A%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%2C' 
,'.bs-popover-top%20.arrow%20%7B' 
,'%20%20bottom%3A%20calc%28%280.5rem%20+%201px%29%20*%20-1%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-top%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-top%20.arrow%3A%3Abefore%20%7B' 
,'%20%20border-width%3A%200.5rem%200.5rem%200%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-top%20.arrow%3A%3Abefore%20%7B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20border-top-color%3A%20rgba%280%2C%200%2C%200%2C%200.25%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22top%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-top%20.arrow%3A%3Aafter%20%7B' 
,'%20%20bottom%3A%201px%3B' 
,'%20%20border-top-color%3A%20%23fff%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%2C' 
,'.bs-popover-right%20%7B' 
,'%20%20margin-left%3A%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%2C' 
,'.bs-popover-right%20.arrow%20%7B' 
,'%20%20left%3A%20calc%28%280.5rem%20+%201px%29%20*%20-1%29%3B' 
,'%20%20width%3A%200.5rem%3B' 
,'%20%20height%3A%201rem%3B' 
,'%20%20margin%3A%200.3rem%200%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-right%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-right%20.arrow%3A%3Abefore%20%7B' 
,'%20%20border-width%3A%200.5rem%200.5rem%200.5rem%200%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-right%20.arrow%3A%3Abefore%20%7B' 
,'%20%20left%3A%200%3B' 
,'%20%20border-right-color%3A%20rgba%280%2C%200%2C%200%2C%200.25%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22right%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-right%20.arrow%3A%3Aafter%20%7B' 
,'%20%20left%3A%201px%3B' 
,'%20%20border-right-color%3A%20%23fff%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%2C' 
,'.bs-popover-bottom%20%7B' 
,'%20%20margin-top%3A%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%2C' 
,'.bs-popover-bottom%20.arrow%20%7B' 
,'%20%20top%3A%20calc%28%280.5rem%20+%201px%29%20*%20-1%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-bottom%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-bottom%20.arrow%3A%3Abefore%20%7B' 
,'%20%20border-width%3A%200%200.5rem%200.5rem%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-bottom%20.arrow%3A%3Abefore%20%7B' 
,'%20%20top%3A%200%3B' 
,'%20%20border-bottom-color%3A%20rgba%280%2C%200%2C%200%2C%200.25%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-bottom%20.arrow%3A%3Aafter%20%7B' 
,'%20%20top%3A%201px%3B' 
,'%20%20border-bottom-color%3A%20%23fff%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22bottom%22%5D%20.popover-header%3A%3Abefore%2C' 
,'.bs-popover-bottom%20.popover-header%3A%3Abefore%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20left%3A%2050%25%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%201rem%3B' 
,'%20%20margin-left%3A%20-0.5rem%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%20%20border-bottom%3A%201px%20solid%20%23f7f7f7%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%2C' 
,'.bs-popover-left%20%7B' 
,'%20%20margin-right%3A%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%2C' 
,'.bs-popover-left%20.arrow%20%7B' 
,'%20%20right%3A%20calc%28%280.5rem%20+%201px%29%20*%20-1%29%3B' 
,'%20%20width%3A%200.5rem%3B' 
,'%20%20height%3A%201rem%3B' 
,'%20%20margin%3A%200.3rem%200%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-left%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-left%20.arrow%3A%3Abefore%20%7B' 
,'%20%20border-width%3A%200.5rem%200%200.5rem%200.5rem%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%3A%3Abefore%2C' 
,'.bs-popover-left%20.arrow%3A%3Abefore%20%7B' 
,'%20%20right%3A%200%3B' 
,'%20%20border-left-color%3A%20rgba%280%2C%200%2C%200%2C%200.25%29%3B' 
,'%7D' 
,'.bs-popover-auto%5Bx-placement%5E%3D%22left%22%5D%20.arrow%3A%3Aafter%2C' 
,'.bs-popover-left%20.arrow%3A%3Aafter%20%7B' 
,'%20%20right%3A%201px%3B' 
,'%20%20border-left-color%3A%20%23fff%3B' 
,'%7D' 
,'.popover-header%20%7B' 
,'%20%20padding%3A%200.5rem%200.75rem%3B' 
,'%20%20margin-bottom%3A%200%3B' 
,'%20%20font-size%3A%201rem%3B' 
,'%20%20color%3A%20inherit%3B' 
,'%20%20background-color%3A%20%23f7f7f7%3B' 
,'%20%20border-bottom%3A%201px%20solid%20%23ebebeb%3B' 
,'%20%20border-top-left-radius%3A%20calc%280.3rem%20-%201px%29%3B' 
,'%20%20border-top-right-radius%3A%20calc%280.3rem%20-%201px%29%3B' 
,'%7D' 
,'.popover-header%3Aempty%20%7B' 
,'%20%20display%3A%20none%3B' 
,'%7D' 
,'.popover-body%20%7B' 
,'%20%20padding%3A%200.5rem%200.75rem%3B' 
,'%20%20color%3A%20%23212529%3B' 
,'%7D' 
,'.carousel%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%7D' 
,'.carousel-inner%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%7D' 
,'.carousel-item%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20none%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20transition%3A%20-webkit-transform%200.6s%20ease%3B' 
,'%20%20transition%3A%20transform%200.6s%20ease%3B' 
,'%20%20transition%3A%20transform%200.6s%20ease%2C%20-webkit-transform%200.6s%20ease%3B' 
,'%20%20-webkit-backface-visibility%3A%20hidden%3B' 
,'%20%20backface-visibility%3A%20hidden%3B' 
,'%20%20-webkit-perspective%3A%201000px%3B' 
,'%20%20perspective%3A%201000px%3B' 
,'%7D' 
,'.carousel-item-next%2C' 
,'.carousel-item-prev%2C' 
,'.carousel-item.active%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%7D' 
,'.carousel-item-next%2C' 
,'.carousel-item-prev%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%7D' 
,'.carousel-item-next.carousel-item-left%2C' 
,'.carousel-item-prev.carousel-item-right%20%7B' 
,'%20%20-webkit-transform%3A%20translateX%280%29%3B' 
,'%20%20transform%3A%20translateX%280%29%3B' 
,'%7D' 
,'@supports%20%28' 
,'%20%20%28-webkit-transform-style%3A%20preserve-3d%29%20or%20%28transform-style%3A%20preserve-3d%29' 
,'%29%20%7B' 
,'%20%20.carousel-item-next.carousel-item-left%2C' 
,'%20%20.carousel-item-prev.carousel-item-right%20%7B' 
,'%20%20%20%20-webkit-transform%3A%20translate3d%280%2C%200%2C%200%29%3B' 
,'%20%20%20%20transform%3A%20translate3d%280%2C%200%2C%200%29%3B' 
,'%20%20%7D' 
,'%7D' 
,'.active.carousel-item-right%2C' 
,'.carousel-item-next%20%7B' 
,'%20%20-webkit-transform%3A%20translateX%28100%25%29%3B' 
,'%20%20transform%3A%20translateX%28100%25%29%3B' 
,'%7D' 
,'@supports%20%28' 
,'%20%20%28-webkit-transform-style%3A%20preserve-3d%29%20or%20%28transform-style%3A%20preserve-3d%29' 
,'%29%20%7B' 
,'%20%20.active.carousel-item-right%2C' 
,'%20%20.carousel-item-next%20%7B' 
,'%20%20%20%20-webkit-transform%3A%20translate3d%28100%25%2C%200%2C%200%29%3B' 
,'%20%20%20%20transform%3A%20translate3d%28100%25%2C%200%2C%200%29%3B' 
,'%20%20%7D' 
,'%7D' 
,'.active.carousel-item-left%2C' 
,'.carousel-item-prev%20%7B' 
,'%20%20-webkit-transform%3A%20translateX%28-100%25%29%3B' 
,'%20%20transform%3A%20translateX%28-100%25%29%3B' 
,'%7D' 
,'@supports%20%28' 
,'%20%20%28-webkit-transform-style%3A%20preserve-3d%29%20or%20%28transform-style%3A%20preserve-3d%29' 
,'%29%20%7B' 
,'%20%20.active.carousel-item-left%2C' 
,'%20%20.carousel-item-prev%20%7B' 
,'%20%20%20%20-webkit-transform%3A%20translate3d%28-100%25%2C%200%2C%200%29%3B' 
,'%20%20%20%20transform%3A%20translate3d%28-100%25%2C%200%2C%200%29%3B' 
,'%20%20%7D' 
,'%7D' 
,'.carousel-control-next%2C' 
,'.carousel-control-prev%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-align%3A%20center%3B' 
,'%20%20-ms-flex-align%3A%20center%3B' 
,'%20%20align-items%3A%20center%3B' 
,'%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20width%3A%2015%25%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%20%20opacity%3A%200.5%3B' 
,'%7D' 
,'.carousel-control-next%3Afocus%2C' 
,'.carousel-control-next%3Ahover%2C' 
,'.carousel-control-prev%3Afocus%2C' 
,'.carousel-control-prev%3Ahover%20%7B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-decoration%3A%20none%3B' 
,'%20%20outline%3A%200%3B' 
,'%20%20opacity%3A%200.9%3B' 
,'%7D' 
,'.carousel-control-prev%20%7B' 
,'%20%20left%3A%200%3B' 
,'%7D' 
,'.carousel-control-next%20%7B' 
,'%20%20right%3A%200%3B' 
,'%7D' 
,'.carousel-control-next-icon%2C' 
,'.carousel-control-prev-icon%20%7B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%2020px%3B' 
,'%20%20height%3A%2020px%3B' 
,'%20%20background%3A%20transparent%20no-repeat%20center%20center%3B' 
,'%20%20background-size%3A%20100%25%20100%25%3B' 
,'%7D' 
,'.carousel-control-prev-icon%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27%2523fff%27%20viewBox%3D%270%200%208%208%27%253E%253Cpath%20d%3D%27M5.25%200l-4%204%204%204%201.5-1.5-2.5-2.5%202.5-2.5-1.5-1.5z%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.carousel-control-next-icon%20%7B' 
,'%20%20background-image%3A%20url%28%22data%3Aimage/svg+xml%3Bcharset%3Dutf8%2C%253Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20fill%3D%27%2523fff%27%20viewBox%3D%270%200%208%208%27%253E%253Cpath%20d%3D%27M2.75%200l-1.5%201.5%202.5%202.5-2.5%202.5%201.5%201.5%204-4-4-4z%27/%253E%253C/svg%253E%22%29%3B' 
,'%7D' 
,'.carousel-indicators%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%2010px%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%2015%3B' 
,'%20%20display%3A%20-webkit-box%3B' 
,'%20%20display%3A%20-ms-flexbox%3B' 
,'%20%20display%3A%20flex%3B' 
,'%20%20-webkit-box-pack%3A%20center%3B' 
,'%20%20-ms-flex-pack%3A%20center%3B' 
,'%20%20justify-content%3A%20center%3B' 
,'%20%20padding-left%3A%200%3B' 
,'%20%20margin-right%3A%2015%25%3B' 
,'%20%20margin-left%3A%2015%25%3B' 
,'%20%20list-style%3A%20none%3B' 
,'%7D' 
,'.carousel-indicators%20li%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20-webkit-box-flex%3A%200%3B' 
,'%20%20-ms-flex%3A%200%201%20auto%3B' 
,'%20%20flex%3A%200%201%20auto%3B' 
,'%20%20width%3A%2030px%3B' 
,'%20%20height%3A%203px%3B' 
,'%20%20margin-right%3A%203px%3B' 
,'%20%20margin-left%3A%203px%3B' 
,'%20%20text-indent%3A%20-999px%3B' 
,'%20%20background-color%3A%20rgba%28255%2C%20255%2C%20255%2C%200.5%29%3B' 
,'%7D' 
,'.carousel-indicators%20li%3A%3Abefore%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%20-10px%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%2010px%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.carousel-indicators%20li%3A%3Aafter%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20bottom%3A%20-10px%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20display%3A%20inline-block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%2010px%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.carousel-indicators%20.active%20%7B' 
,'%20%20background-color%3A%20%23fff%3B' 
,'%7D' 
,'.carousel-caption%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20right%3A%2015%25%3B' 
,'%20%20bottom%3A%2020px%3B' 
,'%20%20left%3A%2015%25%3B' 
,'%20%20z-index%3A%2010%3B' 
,'%20%20padding-top%3A%2020px%3B' 
,'%20%20padding-bottom%3A%2020px%3B' 
,'%20%20color%3A%20%23fff%3B' 
,'%20%20text-align%3A%20center%3B' 
,'%7D' 
,'.align-baseline%20%7B' 
,'%20%20vertical-align%3A%20baseline%20%21important%3B' 
,'%7D' 
,'.align-top%20%7B' 
,'%20%20vertical-align%3A%20top%20%21important%3B' 
,'%7D' 
,'.align-middle%20%7B' 
,'%20%20vertical-align%3A%20middle%20%21important%3B' 
,'%7D' 
,'.align-bottom%20%7B' 
,'%20%20vertical-align%3A%20bottom%20%21important%3B' 
,'%7D' 
,'.align-text-bottom%20%7B' 
,'%20%20vertical-align%3A%20text-bottom%20%21important%3B' 
,'%7D' 
,'.align-text-top%20%7B' 
,'%20%20vertical-align%3A%20text-top%20%21important%3B' 
,'%7D' 
,'.bg-primary%20%7B' 
,'%20%20background-color%3A%20%23007bff%20%21important%3B' 
,'%7D' 
,'a.bg-primary%3Afocus%2C' 
,'a.bg-primary%3Ahover%2C' 
,'button.bg-primary%3Afocus%2C' 
,'button.bg-primary%3Ahover%20%7B' 
,'%20%20background-color%3A%20%230062cc%20%21important%3B' 
,'%7D' 
,'.bg-secondary%20%7B' 
,'%20%20background-color%3A%20%236c757d%20%21important%3B' 
,'%7D' 
,'a.bg-secondary%3Afocus%2C' 
,'a.bg-secondary%3Ahover%2C' 
,'button.bg-secondary%3Afocus%2C' 
,'button.bg-secondary%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23545b62%20%21important%3B' 
,'%7D' 
,'.bg-success%20%7B' 
,'%20%20background-color%3A%20%2328a745%20%21important%3B' 
,'%7D' 
,'a.bg-success%3Afocus%2C' 
,'a.bg-success%3Ahover%2C' 
,'button.bg-success%3Afocus%2C' 
,'button.bg-success%3Ahover%20%7B' 
,'%20%20background-color%3A%20%231e7e34%20%21important%3B' 
,'%7D' 
,'.bg-info%20%7B' 
,'%20%20background-color%3A%20%2317a2b8%20%21important%3B' 
,'%7D' 
,'a.bg-info%3Afocus%2C' 
,'a.bg-info%3Ahover%2C' 
,'button.bg-info%3Afocus%2C' 
,'button.bg-info%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23117a8b%20%21important%3B' 
,'%7D' 
,'.bg-warning%20%7B' 
,'%20%20background-color%3A%20%23ffc107%20%21important%3B' 
,'%7D' 
,'a.bg-warning%3Afocus%2C' 
,'a.bg-warning%3Ahover%2C' 
,'button.bg-warning%3Afocus%2C' 
,'button.bg-warning%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23d39e00%20%21important%3B' 
,'%7D' 
,'.bg-danger%20%7B' 
,'%20%20background-color%3A%20%23dc3545%20%21important%3B' 
,'%7D' 
,'a.bg-danger%3Afocus%2C' 
,'a.bg-danger%3Ahover%2C' 
,'button.bg-danger%3Afocus%2C' 
,'button.bg-danger%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23bd2130%20%21important%3B' 
,'%7D' 
,'.bg-light%20%7B' 
,'%20%20background-color%3A%20%23f8f9fa%20%21important%3B' 
,'%7D' 
,'a.bg-light%3Afocus%2C' 
,'a.bg-light%3Ahover%2C' 
,'button.bg-light%3Afocus%2C' 
,'button.bg-light%3Ahover%20%7B' 
,'%20%20background-color%3A%20%23dae0e5%20%21important%3B' 
,'%7D' 
,'.bg-dark%20%7B' 
,'%20%20background-color%3A%20%23343a40%20%21important%3B' 
,'%7D' 
,'a.bg-dark%3Afocus%2C' 
,'a.bg-dark%3Ahover%2C' 
,'button.bg-dark%3Afocus%2C' 
,'button.bg-dark%3Ahover%20%7B' 
,'%20%20background-color%3A%20%231d2124%20%21important%3B' 
,'%7D' 
,'.bg-white%20%7B' 
,'%20%20background-color%3A%20%23fff%20%21important%3B' 
,'%7D' 
,'.bg-transparent%20%7B' 
,'%20%20background-color%3A%20transparent%20%21important%3B' 
,'%7D' 
,'.border%20%7B' 
,'%20%20border%3A%201px%20solid%20%23dee2e6%20%21important%3B' 
,'%7D' 
,'.border-top%20%7B' 
,'%20%20border-top%3A%201px%20solid%20%23dee2e6%20%21important%3B' 
,'%7D' 
,'.border-right%20%7B' 
,'%20%20border-right%3A%201px%20solid%20%23dee2e6%20%21important%3B' 
,'%7D' 
,'.border-bottom%20%7B' 
,'%20%20border-bottom%3A%201px%20solid%20%23dee2e6%20%21important%3B' 
,'%7D' 
,'.border-left%20%7B' 
,'%20%20border-left%3A%201px%20solid%20%23dee2e6%20%21important%3B' 
,'%7D' 
,'.border-0%20%7B' 
,'%20%20border%3A%200%20%21important%3B' 
,'%7D' 
,'.border-top-0%20%7B' 
,'%20%20border-top%3A%200%20%21important%3B' 
,'%7D' 
,'.border-right-0%20%7B' 
,'%20%20border-right%3A%200%20%21important%3B' 
,'%7D' 
,'.border-bottom-0%20%7B' 
,'%20%20border-bottom%3A%200%20%21important%3B' 
,'%7D' 
,'.border-left-0%20%7B' 
,'%20%20border-left%3A%200%20%21important%3B' 
,'%7D' 
,'.border-primary%20%7B' 
,'%20%20border-color%3A%20%23007bff%20%21important%3B' 
,'%7D' 
,'.border-secondary%20%7B' 
,'%20%20border-color%3A%20%236c757d%20%21important%3B' 
,'%7D' 
,'.border-success%20%7B' 
,'%20%20border-color%3A%20%2328a745%20%21important%3B' 
,'%7D' 
,'.border-info%20%7B' 
,'%20%20border-color%3A%20%2317a2b8%20%21important%3B' 
,'%7D' 
,'.border-warning%20%7B' 
,'%20%20border-color%3A%20%23ffc107%20%21important%3B' 
,'%7D' 
,'.border-danger%20%7B' 
,'%20%20border-color%3A%20%23dc3545%20%21important%3B' 
,'%7D' 
,'.border-light%20%7B' 
,'%20%20border-color%3A%20%23f8f9fa%20%21important%3B' 
,'%7D' 
,'.border-dark%20%7B' 
,'%20%20border-color%3A%20%23343a40%20%21important%3B' 
,'%7D' 
,'.border-white%20%7B' 
,'%20%20border-color%3A%20%23fff%20%21important%3B' 
,'%7D' 
,'.rounded%20%7B' 
,'%20%20border-radius%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.rounded-top%20%7B' 
,'%20%20border-top-left-radius%3A%200.25rem%20%21important%3B' 
,'%20%20border-top-right-radius%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.rounded-right%20%7B' 
,'%20%20border-top-right-radius%3A%200.25rem%20%21important%3B' 
,'%20%20border-bottom-right-radius%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.rounded-bottom%20%7B' 
,'%20%20border-bottom-right-radius%3A%200.25rem%20%21important%3B' 
,'%20%20border-bottom-left-radius%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.rounded-left%20%7B' 
,'%20%20border-top-left-radius%3A%200.25rem%20%21important%3B' 
,'%20%20border-bottom-left-radius%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.rounded-circle%20%7B' 
,'%20%20border-radius%3A%2050%25%20%21important%3B' 
,'%7D' 
,'.rounded-0%20%7B' 
,'%20%20border-radius%3A%200%20%21important%3B' 
,'%7D' 
,'.clearfix%3A%3Aafter%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20clear%3A%20both%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.d-none%20%7B' 
,'%20%20display%3A%20none%20%21important%3B' 
,'%7D' 
,'.d-inline%20%7B' 
,'%20%20display%3A%20inline%20%21important%3B' 
,'%7D' 
,'.d-inline-block%20%7B' 
,'%20%20display%3A%20inline-block%20%21important%3B' 
,'%7D' 
,'.d-block%20%7B' 
,'%20%20display%3A%20block%20%21important%3B' 
,'%7D' 
,'.d-table%20%7B' 
,'%20%20display%3A%20table%20%21important%3B' 
,'%7D' 
,'.d-table-row%20%7B' 
,'%20%20display%3A%20table-row%20%21important%3B' 
,'%7D' 
,'.d-table-cell%20%7B' 
,'%20%20display%3A%20table-cell%20%21important%3B' 
,'%7D' 
,'.d-flex%20%7B' 
,'%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20display%3A%20flex%20%21important%3B' 
,'%7D' 
,'.d-inline-flex%20%7B' 
,'%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20display%3A%20inline-flex%20%21important%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.d-sm-none%20%7B' 
,'%20%20%20%20display%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-inline%20%7B' 
,'%20%20%20%20display%3A%20inline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-inline-block%20%7B' 
,'%20%20%20%20display%3A%20inline-block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-block%20%7B' 
,'%20%20%20%20display%3A%20block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-table%20%7B' 
,'%20%20%20%20display%3A%20table%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-table-row%20%7B' 
,'%20%20%20%20display%3A%20table-row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-table-cell%20%7B' 
,'%20%20%20%20display%3A%20table-cell%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-sm-inline-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20inline-flex%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.d-md-none%20%7B' 
,'%20%20%20%20display%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-inline%20%7B' 
,'%20%20%20%20display%3A%20inline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-inline-block%20%7B' 
,'%20%20%20%20display%3A%20inline-block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-block%20%7B' 
,'%20%20%20%20display%3A%20block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-table%20%7B' 
,'%20%20%20%20display%3A%20table%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-table-row%20%7B' 
,'%20%20%20%20display%3A%20table-row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-table-cell%20%7B' 
,'%20%20%20%20display%3A%20table-cell%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-md-inline-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20inline-flex%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.d-lg-none%20%7B' 
,'%20%20%20%20display%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-inline%20%7B' 
,'%20%20%20%20display%3A%20inline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-inline-block%20%7B' 
,'%20%20%20%20display%3A%20inline-block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-block%20%7B' 
,'%20%20%20%20display%3A%20block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-table%20%7B' 
,'%20%20%20%20display%3A%20table%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-table-row%20%7B' 
,'%20%20%20%20display%3A%20table-row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-table-cell%20%7B' 
,'%20%20%20%20display%3A%20table-cell%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-lg-inline-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20inline-flex%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.d-xl-none%20%7B' 
,'%20%20%20%20display%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-inline%20%7B' 
,'%20%20%20%20display%3A%20inline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-inline-block%20%7B' 
,'%20%20%20%20display%3A%20inline-block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-block%20%7B' 
,'%20%20%20%20display%3A%20block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-table%20%7B' 
,'%20%20%20%20display%3A%20table%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-table-row%20%7B' 
,'%20%20%20%20display%3A%20table-row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-table-cell%20%7B' 
,'%20%20%20%20display%3A%20table-cell%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-xl-inline-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20inline-flex%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20print%20%7B' 
,'%20%20.d-print-none%20%7B' 
,'%20%20%20%20display%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-inline%20%7B' 
,'%20%20%20%20display%3A%20inline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-inline-block%20%7B' 
,'%20%20%20%20display%3A%20inline-block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-block%20%7B' 
,'%20%20%20%20display%3A%20block%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-table%20%7B' 
,'%20%20%20%20display%3A%20table%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-table-row%20%7B' 
,'%20%20%20%20display%3A%20table-row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-table-cell%20%7B' 
,'%20%20%20%20display%3A%20table-cell%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20flex%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.d-print-inline-flex%20%7B' 
,'%20%20%20%20display%3A%20-webkit-inline-box%20%21important%3B' 
,'%20%20%20%20display%3A%20-ms-inline-flexbox%20%21important%3B' 
,'%20%20%20%20display%3A%20inline-flex%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'.embed-responsive%20%7B' 
,'%20%20position%3A%20relative%3B' 
,'%20%20display%3A%20block%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20padding%3A%200%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%7D' 
,'.embed-responsive%3A%3Abefore%20%7B' 
,'%20%20display%3A%20block%3B' 
,'%20%20content%3A%20%22%22%3B' 
,'%7D' 
,'.embed-responsive%20.embed-responsive-item%2C' 
,'.embed-responsive%20embed%2C' 
,'.embed-responsive%20iframe%2C' 
,'.embed-responsive%20object%2C' 
,'.embed-responsive%20video%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20width%3A%20100%25%3B' 
,'%20%20height%3A%20100%25%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.embed-responsive-21by9%3A%3Abefore%20%7B' 
,'%20%20padding-top%3A%2042.857143%25%3B' 
,'%7D' 
,'.embed-responsive-16by9%3A%3Abefore%20%7B' 
,'%20%20padding-top%3A%2056.25%25%3B' 
,'%7D' 
,'.embed-responsive-4by3%3A%3Abefore%20%7B' 
,'%20%20padding-top%3A%2075%25%3B' 
,'%7D' 
,'.embed-responsive-1by1%3A%3Abefore%20%7B' 
,'%20%20padding-top%3A%20100%25%3B' 
,'%7D' 
,'.flex-row%20%7B' 
,'%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20-ms-flex-direction%3A%20row%20%21important%3B' 
,'%20%20flex-direction%3A%20row%20%21important%3B' 
,'%7D' 
,'.flex-column%20%7B' 
,'%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20-ms-flex-direction%3A%20column%20%21important%3B' 
,'%20%20flex-direction%3A%20column%20%21important%3B' 
,'%7D' 
,'.flex-row-reverse%20%7B' 
,'%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20-ms-flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20flex-direction%3A%20row-reverse%20%21important%3B' 
,'%7D' 
,'.flex-column-reverse%20%7B' 
,'%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20-ms-flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20flex-direction%3A%20column-reverse%20%21important%3B' 
,'%7D' 
,'.flex-wrap%20%7B' 
,'%20%20-ms-flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20flex-wrap%3A%20wrap%20%21important%3B' 
,'%7D' 
,'.flex-nowrap%20%7B' 
,'%20%20-ms-flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20flex-wrap%3A%20nowrap%20%21important%3B' 
,'%7D' 
,'.flex-wrap-reverse%20%7B' 
,'%20%20-ms-flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%7D' 
,'.justify-content-start%20%7B' 
,'%20%20-webkit-box-pack%3A%20start%20%21important%3B' 
,'%20%20-ms-flex-pack%3A%20start%20%21important%3B' 
,'%20%20justify-content%3A%20flex-start%20%21important%3B' 
,'%7D' 
,'.justify-content-end%20%7B' 
,'%20%20-webkit-box-pack%3A%20end%20%21important%3B' 
,'%20%20-ms-flex-pack%3A%20end%20%21important%3B' 
,'%20%20justify-content%3A%20flex-end%20%21important%3B' 
,'%7D' 
,'.justify-content-center%20%7B' 
,'%20%20-webkit-box-pack%3A%20center%20%21important%3B' 
,'%20%20-ms-flex-pack%3A%20center%20%21important%3B' 
,'%20%20justify-content%3A%20center%20%21important%3B' 
,'%7D' 
,'.justify-content-between%20%7B' 
,'%20%20-webkit-box-pack%3A%20justify%20%21important%3B' 
,'%20%20-ms-flex-pack%3A%20justify%20%21important%3B' 
,'%20%20justify-content%3A%20space-between%20%21important%3B' 
,'%7D' 
,'.justify-content-around%20%7B' 
,'%20%20-ms-flex-pack%3A%20distribute%20%21important%3B' 
,'%20%20justify-content%3A%20space-around%20%21important%3B' 
,'%7D' 
,'.align-items-start%20%7B' 
,'%20%20-webkit-box-align%3A%20start%20%21important%3B' 
,'%20%20-ms-flex-align%3A%20start%20%21important%3B' 
,'%20%20align-items%3A%20flex-start%20%21important%3B' 
,'%7D' 
,'.align-items-end%20%7B' 
,'%20%20-webkit-box-align%3A%20end%20%21important%3B' 
,'%20%20-ms-flex-align%3A%20end%20%21important%3B' 
,'%20%20align-items%3A%20flex-end%20%21important%3B' 
,'%7D' 
,'.align-items-center%20%7B' 
,'%20%20-webkit-box-align%3A%20center%20%21important%3B' 
,'%20%20-ms-flex-align%3A%20center%20%21important%3B' 
,'%20%20align-items%3A%20center%20%21important%3B' 
,'%7D' 
,'.align-items-baseline%20%7B' 
,'%20%20-webkit-box-align%3A%20baseline%20%21important%3B' 
,'%20%20-ms-flex-align%3A%20baseline%20%21important%3B' 
,'%20%20align-items%3A%20baseline%20%21important%3B' 
,'%7D' 
,'.align-items-stretch%20%7B' 
,'%20%20-webkit-box-align%3A%20stretch%20%21important%3B' 
,'%20%20-ms-flex-align%3A%20stretch%20%21important%3B' 
,'%20%20align-items%3A%20stretch%20%21important%3B' 
,'%7D' 
,'.align-content-start%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20start%20%21important%3B' 
,'%20%20align-content%3A%20flex-start%20%21important%3B' 
,'%7D' 
,'.align-content-end%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20end%20%21important%3B' 
,'%20%20align-content%3A%20flex-end%20%21important%3B' 
,'%7D' 
,'.align-content-center%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20center%20%21important%3B' 
,'%20%20align-content%3A%20center%20%21important%3B' 
,'%7D' 
,'.align-content-between%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20justify%20%21important%3B' 
,'%20%20align-content%3A%20space-between%20%21important%3B' 
,'%7D' 
,'.align-content-around%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20distribute%20%21important%3B' 
,'%20%20align-content%3A%20space-around%20%21important%3B' 
,'%7D' 
,'.align-content-stretch%20%7B' 
,'%20%20-ms-flex-line-pack%3A%20stretch%20%21important%3B' 
,'%20%20align-content%3A%20stretch%20%21important%3B' 
,'%7D' 
,'.align-self-auto%20%7B' 
,'%20%20-ms-flex-item-align%3A%20auto%20%21important%3B' 
,'%20%20align-self%3A%20auto%20%21important%3B' 
,'%7D' 
,'.align-self-start%20%7B' 
,'%20%20-ms-flex-item-align%3A%20start%20%21important%3B' 
,'%20%20align-self%3A%20flex-start%20%21important%3B' 
,'%7D' 
,'.align-self-end%20%7B' 
,'%20%20-ms-flex-item-align%3A%20end%20%21important%3B' 
,'%20%20align-self%3A%20flex-end%20%21important%3B' 
,'%7D' 
,'.align-self-center%20%7B' 
,'%20%20-ms-flex-item-align%3A%20center%20%21important%3B' 
,'%20%20align-self%3A%20center%20%21important%3B' 
,'%7D' 
,'.align-self-baseline%20%7B' 
,'%20%20-ms-flex-item-align%3A%20baseline%20%21important%3B' 
,'%20%20align-self%3A%20baseline%20%21important%3B' 
,'%7D' 
,'.align-self-stretch%20%7B' 
,'%20%20-ms-flex-item-align%3A%20stretch%20%21important%3B' 
,'%20%20align-self%3A%20stretch%20%21important%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.flex-sm-row%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-column%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-row-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-column-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-wrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-nowrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-sm-wrap-reverse%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-sm-start%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-sm-end%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-sm-center%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-sm-between%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-sm-around%20%7B' 
,'%20%20%20%20-ms-flex-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-sm-start%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-sm-end%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-sm-center%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-items%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-sm-baseline%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-items%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-sm-stretch%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-items%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-start%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-end%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-center%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20align-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-between%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-around%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-sm-stretch%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-content%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-auto%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20auto%20%21important%3B' 
,'%20%20%20%20align-self%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-start%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-end%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-center%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-self%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-baseline%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-self%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-sm-stretch%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-self%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.flex-md-row%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-column%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-row-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-column-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-wrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-nowrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-md-wrap-reverse%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-md-start%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-md-end%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-md-center%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-md-between%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-md-around%20%7B' 
,'%20%20%20%20-ms-flex-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-md-start%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-md-end%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-md-center%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-items%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-md-baseline%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-items%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-md-stretch%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-items%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-start%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-end%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-center%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20align-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-between%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-around%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-md-stretch%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-content%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-auto%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20auto%20%21important%3B' 
,'%20%20%20%20align-self%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-start%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-end%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-center%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-self%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-baseline%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-self%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-md-stretch%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-self%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.flex-lg-row%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-column%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-row-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-column-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-wrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-nowrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-lg-wrap-reverse%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-lg-start%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-lg-end%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-lg-center%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-lg-between%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-lg-around%20%7B' 
,'%20%20%20%20-ms-flex-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-lg-start%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-lg-end%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-lg-center%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-items%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-lg-baseline%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-items%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-lg-stretch%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-items%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-start%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-end%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-center%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20align-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-between%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-around%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-lg-stretch%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-content%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-auto%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20auto%20%21important%3B' 
,'%20%20%20%20align-self%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-start%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-end%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-center%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-self%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-baseline%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-self%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-lg-stretch%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-self%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.flex-xl-row%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-column%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20normal%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-row-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20horizontal%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20row-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-column-reverse%20%7B' 
,'%20%20%20%20-webkit-box-orient%3A%20vertical%20%21important%3B' 
,'%20%20%20%20-webkit-box-direction%3A%20reverse%20%21important%3B' 
,'%20%20%20%20-ms-flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%20%20flex-direction%3A%20column-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-wrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-nowrap%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20nowrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.flex-xl-wrap-reverse%20%7B' 
,'%20%20%20%20-ms-flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%20%20flex-wrap%3A%20wrap-reverse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-xl-start%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-xl-end%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-xl-center%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-xl-between%20%7B' 
,'%20%20%20%20-webkit-box-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20-ms-flex-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.justify-content-xl-around%20%7B' 
,'%20%20%20%20-ms-flex-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20justify-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-xl-start%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20start%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-xl-end%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20end%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-items%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-xl-center%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20center%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-items%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-xl-baseline%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-items%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-items-xl-stretch%20%7B' 
,'%20%20%20%20-webkit-box-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20-ms-flex-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-items%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-start%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20start%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-end%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20end%20%21important%3B' 
,'%20%20%20%20align-content%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-center%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20center%20%21important%3B' 
,'%20%20%20%20align-content%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-between%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20justify%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-between%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-around%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20distribute%20%21important%3B' 
,'%20%20%20%20align-content%3A%20space-around%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-content-xl-stretch%20%7B' 
,'%20%20%20%20-ms-flex-line-pack%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-content%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-auto%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20auto%20%21important%3B' 
,'%20%20%20%20align-self%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-start%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20start%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-start%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-end%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20end%20%21important%3B' 
,'%20%20%20%20align-self%3A%20flex-end%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-center%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20center%20%21important%3B' 
,'%20%20%20%20align-self%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-baseline%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20baseline%20%21important%3B' 
,'%20%20%20%20align-self%3A%20baseline%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.align-self-xl-stretch%20%7B' 
,'%20%20%20%20-ms-flex-item-align%3A%20stretch%20%21important%3B' 
,'%20%20%20%20align-self%3A%20stretch%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'.float-left%20%7B' 
,'%20%20float%3A%20left%20%21important%3B' 
,'%7D' 
,'.float-right%20%7B' 
,'%20%20float%3A%20right%20%21important%3B' 
,'%7D' 
,'.float-none%20%7B' 
,'%20%20float%3A%20none%20%21important%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.float-sm-left%20%7B' 
,'%20%20%20%20float%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-sm-right%20%7B' 
,'%20%20%20%20float%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-sm-none%20%7B' 
,'%20%20%20%20float%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.float-md-left%20%7B' 
,'%20%20%20%20float%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-md-right%20%7B' 
,'%20%20%20%20float%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-md-none%20%7B' 
,'%20%20%20%20float%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.float-lg-left%20%7B' 
,'%20%20%20%20float%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-lg-right%20%7B' 
,'%20%20%20%20float%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-lg-none%20%7B' 
,'%20%20%20%20float%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.float-xl-left%20%7B' 
,'%20%20%20%20float%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-xl-right%20%7B' 
,'%20%20%20%20float%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.float-xl-none%20%7B' 
,'%20%20%20%20float%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'.position-static%20%7B' 
,'%20%20position%3A%20static%20%21important%3B' 
,'%7D' 
,'.position-relative%20%7B' 
,'%20%20position%3A%20relative%20%21important%3B' 
,'%7D' 
,'.position-absolute%20%7B' 
,'%20%20position%3A%20absolute%20%21important%3B' 
,'%7D' 
,'.position-fixed%20%7B' 
,'%20%20position%3A%20fixed%20%21important%3B' 
,'%7D' 
,'.position-sticky%20%7B' 
,'%20%20position%3A%20-webkit-sticky%20%21important%3B' 
,'%20%20position%3A%20sticky%20%21important%3B' 
,'%7D' 
,'.fixed-top%20%7B' 
,'%20%20position%3A%20fixed%3B' 
,'%20%20top%3A%200%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201030%3B' 
,'%7D' 
,'.fixed-bottom%20%7B' 
,'%20%20position%3A%20fixed%3B' 
,'%20%20right%3A%200%3B' 
,'%20%20bottom%3A%200%3B' 
,'%20%20left%3A%200%3B' 
,'%20%20z-index%3A%201030%3B' 
,'%7D' 
,'@supports%20%28%28position%3A%20-webkit-sticky%29%20or%20%28position%3A%20sticky%29%29%20%7B' 
,'%20%20.sticky-top%20%7B' 
,'%20%20%20%20position%3A%20-webkit-sticky%3B' 
,'%20%20%20%20position%3A%20sticky%3B' 
,'%20%20%20%20top%3A%200%3B' 
,'%20%20%20%20z-index%3A%201020%3B' 
,'%20%20%7D' 
,'%7D' 
,'.sr-only%20%7B' 
,'%20%20position%3A%20absolute%3B' 
,'%20%20width%3A%201px%3B' 
,'%20%20height%3A%201px%3B' 
,'%20%20padding%3A%200%3B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20clip%3A%20rect%280%2C%200%2C%200%2C%200%29%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%20%20-webkit-clip-path%3A%20inset%2850%25%29%3B' 
,'%20%20clip-path%3A%20inset%2850%25%29%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.sr-only-focusable%3Aactive%2C' 
,'.sr-only-focusable%3Afocus%20%7B' 
,'%20%20position%3A%20static%3B' 
,'%20%20width%3A%20auto%3B' 
,'%20%20height%3A%20auto%3B' 
,'%20%20overflow%3A%20visible%3B' 
,'%20%20clip%3A%20auto%3B' 
,'%20%20white-space%3A%20normal%3B' 
,'%20%20-webkit-clip-path%3A%20none%3B' 
,'%20%20clip-path%3A%20none%3B' 
,'%7D' 
,'.w-25%20%7B' 
,'%20%20width%3A%2025%25%20%21important%3B' 
,'%7D' 
,'.w-50%20%7B' 
,'%20%20width%3A%2050%25%20%21important%3B' 
,'%7D' 
,'.w-75%20%7B' 
,'%20%20width%3A%2075%25%20%21important%3B' 
,'%7D' 
,'.w-100%20%7B' 
,'%20%20width%3A%20100%25%20%21important%3B' 
,'%7D' 
,'.h-25%20%7B' 
,'%20%20height%3A%2025%25%20%21important%3B' 
,'%7D' 
,'.h-50%20%7B' 
,'%20%20height%3A%2050%25%20%21important%3B' 
,'%7D' 
,'.h-75%20%7B' 
,'%20%20height%3A%2075%25%20%21important%3B' 
,'%7D' 
,'.h-100%20%7B' 
,'%20%20height%3A%20100%25%20%21important%3B' 
,'%7D' 
,'.mw-100%20%7B' 
,'%20%20max-width%3A%20100%25%20%21important%3B' 
,'%7D' 
,'.mh-100%20%7B' 
,'%20%20max-height%3A%20100%25%20%21important%3B' 
,'%7D' 
,'.m-0%20%7B' 
,'%20%20margin%3A%200%20%21important%3B' 
,'%7D' 
,'.mt-0%2C' 
,'.my-0%20%7B' 
,'%20%20margin-top%3A%200%20%21important%3B' 
,'%7D' 
,'.mr-0%2C' 
,'.mx-0%20%7B' 
,'%20%20margin-right%3A%200%20%21important%3B' 
,'%7D' 
,'.mb-0%2C' 
,'.my-0%20%7B' 
,'%20%20margin-bottom%3A%200%20%21important%3B' 
,'%7D' 
,'.ml-0%2C' 
,'.mx-0%20%7B' 
,'%20%20margin-left%3A%200%20%21important%3B' 
,'%7D' 
,'.m-1%20%7B' 
,'%20%20margin%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.mt-1%2C' 
,'.my-1%20%7B' 
,'%20%20margin-top%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.mr-1%2C' 
,'.mx-1%20%7B' 
,'%20%20margin-right%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.mb-1%2C' 
,'.my-1%20%7B' 
,'%20%20margin-bottom%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.ml-1%2C' 
,'.mx-1%20%7B' 
,'%20%20margin-left%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.m-2%20%7B' 
,'%20%20margin%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.mt-2%2C' 
,'.my-2%20%7B' 
,'%20%20margin-top%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.mr-2%2C' 
,'.mx-2%20%7B' 
,'%20%20margin-right%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.mb-2%2C' 
,'.my-2%20%7B' 
,'%20%20margin-bottom%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.ml-2%2C' 
,'.mx-2%20%7B' 
,'%20%20margin-left%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.m-3%20%7B' 
,'%20%20margin%3A%201rem%20%21important%3B' 
,'%7D' 
,'.mt-3%2C' 
,'.my-3%20%7B' 
,'%20%20margin-top%3A%201rem%20%21important%3B' 
,'%7D' 
,'.mr-3%2C' 
,'.mx-3%20%7B' 
,'%20%20margin-right%3A%201rem%20%21important%3B' 
,'%7D' 
,'.mb-3%2C' 
,'.my-3%20%7B' 
,'%20%20margin-bottom%3A%201rem%20%21important%3B' 
,'%7D' 
,'.ml-3%2C' 
,'.mx-3%20%7B' 
,'%20%20margin-left%3A%201rem%20%21important%3B' 
,'%7D' 
,'.m-4%20%7B' 
,'%20%20margin%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.mt-4%2C' 
,'.my-4%20%7B' 
,'%20%20margin-top%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.mr-4%2C' 
,'.mx-4%20%7B' 
,'%20%20margin-right%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.mb-4%2C' 
,'.my-4%20%7B' 
,'%20%20margin-bottom%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.ml-4%2C' 
,'.mx-4%20%7B' 
,'%20%20margin-left%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.m-5%20%7B' 
,'%20%20margin%3A%203rem%20%21important%3B' 
,'%7D' 
,'.mt-5%2C' 
,'.my-5%20%7B' 
,'%20%20margin-top%3A%203rem%20%21important%3B' 
,'%7D' 
,'.mr-5%2C' 
,'.mx-5%20%7B' 
,'%20%20margin-right%3A%203rem%20%21important%3B' 
,'%7D' 
,'.mb-5%2C' 
,'.my-5%20%7B' 
,'%20%20margin-bottom%3A%203rem%20%21important%3B' 
,'%7D' 
,'.ml-5%2C' 
,'.mx-5%20%7B' 
,'%20%20margin-left%3A%203rem%20%21important%3B' 
,'%7D' 
,'.p-0%20%7B' 
,'%20%20padding%3A%200%20%21important%3B' 
,'%7D' 
,'.pt-0%2C' 
,'.py-0%20%7B' 
,'%20%20padding-top%3A%200%20%21important%3B' 
,'%7D' 
,'.pr-0%2C' 
,'.px-0%20%7B' 
,'%20%20padding-right%3A%200%20%21important%3B' 
,'%7D' 
,'.pb-0%2C' 
,'.py-0%20%7B' 
,'%20%20padding-bottom%3A%200%20%21important%3B' 
,'%7D' 
,'.pl-0%2C' 
,'.px-0%20%7B' 
,'%20%20padding-left%3A%200%20%21important%3B' 
,'%7D' 
,'.p-1%20%7B' 
,'%20%20padding%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.pt-1%2C' 
,'.py-1%20%7B' 
,'%20%20padding-top%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.pr-1%2C' 
,'.px-1%20%7B' 
,'%20%20padding-right%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.pb-1%2C' 
,'.py-1%20%7B' 
,'%20%20padding-bottom%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.pl-1%2C' 
,'.px-1%20%7B' 
,'%20%20padding-left%3A%200.25rem%20%21important%3B' 
,'%7D' 
,'.p-2%20%7B' 
,'%20%20padding%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.pt-2%2C' 
,'.py-2%20%7B' 
,'%20%20padding-top%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.pr-2%2C' 
,'.px-2%20%7B' 
,'%20%20padding-right%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.pb-2%2C' 
,'.py-2%20%7B' 
,'%20%20padding-bottom%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.pl-2%2C' 
,'.px-2%20%7B' 
,'%20%20padding-left%3A%200.5rem%20%21important%3B' 
,'%7D' 
,'.p-3%20%7B' 
,'%20%20padding%3A%201rem%20%21important%3B' 
,'%7D' 
,'.pt-3%2C' 
,'.py-3%20%7B' 
,'%20%20padding-top%3A%201rem%20%21important%3B' 
,'%7D' 
,'.pr-3%2C' 
,'.px-3%20%7B' 
,'%20%20padding-right%3A%201rem%20%21important%3B' 
,'%7D' 
,'.pb-3%2C' 
,'.py-3%20%7B' 
,'%20%20padding-bottom%3A%201rem%20%21important%3B' 
,'%7D' 
,'.pl-3%2C' 
,'.px-3%20%7B' 
,'%20%20padding-left%3A%201rem%20%21important%3B' 
,'%7D' 
,'.p-4%20%7B' 
,'%20%20padding%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.pt-4%2C' 
,'.py-4%20%7B' 
,'%20%20padding-top%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.pr-4%2C' 
,'.px-4%20%7B' 
,'%20%20padding-right%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.pb-4%2C' 
,'.py-4%20%7B' 
,'%20%20padding-bottom%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.pl-4%2C' 
,'.px-4%20%7B' 
,'%20%20padding-left%3A%201.5rem%20%21important%3B' 
,'%7D' 
,'.p-5%20%7B' 
,'%20%20padding%3A%203rem%20%21important%3B' 
,'%7D' 
,'.pt-5%2C' 
,'.py-5%20%7B' 
,'%20%20padding-top%3A%203rem%20%21important%3B' 
,'%7D' 
,'.pr-5%2C' 
,'.px-5%20%7B' 
,'%20%20padding-right%3A%203rem%20%21important%3B' 
,'%7D' 
,'.pb-5%2C' 
,'.py-5%20%7B' 
,'%20%20padding-bottom%3A%203rem%20%21important%3B' 
,'%7D' 
,'.pl-5%2C' 
,'.px-5%20%7B' 
,'%20%20padding-left%3A%203rem%20%21important%3B' 
,'%7D' 
,'.m-auto%20%7B' 
,'%20%20margin%3A%20auto%20%21important%3B' 
,'%7D' 
,'.mt-auto%2C' 
,'.my-auto%20%7B' 
,'%20%20margin-top%3A%20auto%20%21important%3B' 
,'%7D' 
,'.mr-auto%2C' 
,'.mx-auto%20%7B' 
,'%20%20margin-right%3A%20auto%20%21important%3B' 
,'%7D' 
,'.mb-auto%2C' 
,'.my-auto%20%7B' 
,'%20%20margin-bottom%3A%20auto%20%21important%3B' 
,'%7D' 
,'.ml-auto%2C' 
,'.mx-auto%20%7B' 
,'%20%20margin-left%3A%20auto%20%21important%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.m-sm-0%20%7B' 
,'%20%20%20%20margin%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-0%2C' 
,'%20%20.my-sm-0%20%7B' 
,'%20%20%20%20margin-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-0%2C' 
,'%20%20.mx-sm-0%20%7B' 
,'%20%20%20%20margin-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-0%2C' 
,'%20%20.my-sm-0%20%7B' 
,'%20%20%20%20margin-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-0%2C' 
,'%20%20.mx-sm-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-1%20%7B' 
,'%20%20%20%20margin%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-1%2C' 
,'%20%20.my-sm-1%20%7B' 
,'%20%20%20%20margin-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-1%2C' 
,'%20%20.mx-sm-1%20%7B' 
,'%20%20%20%20margin-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-1%2C' 
,'%20%20.my-sm-1%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-1%2C' 
,'%20%20.mx-sm-1%20%7B' 
,'%20%20%20%20margin-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-2%20%7B' 
,'%20%20%20%20margin%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-2%2C' 
,'%20%20.my-sm-2%20%7B' 
,'%20%20%20%20margin-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-2%2C' 
,'%20%20.mx-sm-2%20%7B' 
,'%20%20%20%20margin-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-2%2C' 
,'%20%20.my-sm-2%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-2%2C' 
,'%20%20.mx-sm-2%20%7B' 
,'%20%20%20%20margin-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-3%20%7B' 
,'%20%20%20%20margin%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-3%2C' 
,'%20%20.my-sm-3%20%7B' 
,'%20%20%20%20margin-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-3%2C' 
,'%20%20.mx-sm-3%20%7B' 
,'%20%20%20%20margin-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-3%2C' 
,'%20%20.my-sm-3%20%7B' 
,'%20%20%20%20margin-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-3%2C' 
,'%20%20.mx-sm-3%20%7B' 
,'%20%20%20%20margin-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-4%20%7B' 
,'%20%20%20%20margin%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-4%2C' 
,'%20%20.my-sm-4%20%7B' 
,'%20%20%20%20margin-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-4%2C' 
,'%20%20.mx-sm-4%20%7B' 
,'%20%20%20%20margin-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-4%2C' 
,'%20%20.my-sm-4%20%7B' 
,'%20%20%20%20margin-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-4%2C' 
,'%20%20.mx-sm-4%20%7B' 
,'%20%20%20%20margin-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-5%20%7B' 
,'%20%20%20%20margin%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-5%2C' 
,'%20%20.my-sm-5%20%7B' 
,'%20%20%20%20margin-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-5%2C' 
,'%20%20.mx-sm-5%20%7B' 
,'%20%20%20%20margin-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-5%2C' 
,'%20%20.my-sm-5%20%7B' 
,'%20%20%20%20margin-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-5%2C' 
,'%20%20.mx-sm-5%20%7B' 
,'%20%20%20%20margin-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-0%20%7B' 
,'%20%20%20%20padding%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-0%2C' 
,'%20%20.py-sm-0%20%7B' 
,'%20%20%20%20padding-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-0%2C' 
,'%20%20.px-sm-0%20%7B' 
,'%20%20%20%20padding-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-0%2C' 
,'%20%20.py-sm-0%20%7B' 
,'%20%20%20%20padding-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-0%2C' 
,'%20%20.px-sm-0%20%7B' 
,'%20%20%20%20padding-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-1%20%7B' 
,'%20%20%20%20padding%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-1%2C' 
,'%20%20.py-sm-1%20%7B' 
,'%20%20%20%20padding-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-1%2C' 
,'%20%20.px-sm-1%20%7B' 
,'%20%20%20%20padding-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-1%2C' 
,'%20%20.py-sm-1%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-1%2C' 
,'%20%20.px-sm-1%20%7B' 
,'%20%20%20%20padding-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-2%20%7B' 
,'%20%20%20%20padding%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-2%2C' 
,'%20%20.py-sm-2%20%7B' 
,'%20%20%20%20padding-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-2%2C' 
,'%20%20.px-sm-2%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-2%2C' 
,'%20%20.py-sm-2%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-2%2C' 
,'%20%20.px-sm-2%20%7B' 
,'%20%20%20%20padding-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-3%20%7B' 
,'%20%20%20%20padding%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-3%2C' 
,'%20%20.py-sm-3%20%7B' 
,'%20%20%20%20padding-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-3%2C' 
,'%20%20.px-sm-3%20%7B' 
,'%20%20%20%20padding-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-3%2C' 
,'%20%20.py-sm-3%20%7B' 
,'%20%20%20%20padding-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-3%2C' 
,'%20%20.px-sm-3%20%7B' 
,'%20%20%20%20padding-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-4%20%7B' 
,'%20%20%20%20padding%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-4%2C' 
,'%20%20.py-sm-4%20%7B' 
,'%20%20%20%20padding-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-4%2C' 
,'%20%20.px-sm-4%20%7B' 
,'%20%20%20%20padding-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-4%2C' 
,'%20%20.py-sm-4%20%7B' 
,'%20%20%20%20padding-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-4%2C' 
,'%20%20.px-sm-4%20%7B' 
,'%20%20%20%20padding-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-sm-5%20%7B' 
,'%20%20%20%20padding%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-sm-5%2C' 
,'%20%20.py-sm-5%20%7B' 
,'%20%20%20%20padding-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-sm-5%2C' 
,'%20%20.px-sm-5%20%7B' 
,'%20%20%20%20padding-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-sm-5%2C' 
,'%20%20.py-sm-5%20%7B' 
,'%20%20%20%20padding-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-sm-5%2C' 
,'%20%20.px-sm-5%20%7B' 
,'%20%20%20%20padding-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-sm-auto%20%7B' 
,'%20%20%20%20margin%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-sm-auto%2C' 
,'%20%20.my-sm-auto%20%7B' 
,'%20%20%20%20margin-top%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-sm-auto%2C' 
,'%20%20.mx-sm-auto%20%7B' 
,'%20%20%20%20margin-right%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-sm-auto%2C' 
,'%20%20.my-sm-auto%20%7B' 
,'%20%20%20%20margin-bottom%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-sm-auto%2C' 
,'%20%20.mx-sm-auto%20%7B' 
,'%20%20%20%20margin-left%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.m-md-0%20%7B' 
,'%20%20%20%20margin%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-0%2C' 
,'%20%20.my-md-0%20%7B' 
,'%20%20%20%20margin-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-0%2C' 
,'%20%20.mx-md-0%20%7B' 
,'%20%20%20%20margin-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-0%2C' 
,'%20%20.my-md-0%20%7B' 
,'%20%20%20%20margin-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-0%2C' 
,'%20%20.mx-md-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-1%20%7B' 
,'%20%20%20%20margin%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-1%2C' 
,'%20%20.my-md-1%20%7B' 
,'%20%20%20%20margin-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-1%2C' 
,'%20%20.mx-md-1%20%7B' 
,'%20%20%20%20margin-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-1%2C' 
,'%20%20.my-md-1%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-1%2C' 
,'%20%20.mx-md-1%20%7B' 
,'%20%20%20%20margin-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-2%20%7B' 
,'%20%20%20%20margin%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-2%2C' 
,'%20%20.my-md-2%20%7B' 
,'%20%20%20%20margin-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-2%2C' 
,'%20%20.mx-md-2%20%7B' 
,'%20%20%20%20margin-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-2%2C' 
,'%20%20.my-md-2%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-2%2C' 
,'%20%20.mx-md-2%20%7B' 
,'%20%20%20%20margin-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-3%20%7B' 
,'%20%20%20%20margin%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-3%2C' 
,'%20%20.my-md-3%20%7B' 
,'%20%20%20%20margin-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-3%2C' 
,'%20%20.mx-md-3%20%7B' 
,'%20%20%20%20margin-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-3%2C' 
,'%20%20.my-md-3%20%7B' 
,'%20%20%20%20margin-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-3%2C' 
,'%20%20.mx-md-3%20%7B' 
,'%20%20%20%20margin-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-4%20%7B' 
,'%20%20%20%20margin%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-4%2C' 
,'%20%20.my-md-4%20%7B' 
,'%20%20%20%20margin-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-4%2C' 
,'%20%20.mx-md-4%20%7B' 
,'%20%20%20%20margin-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-4%2C' 
,'%20%20.my-md-4%20%7B' 
,'%20%20%20%20margin-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-4%2C' 
,'%20%20.mx-md-4%20%7B' 
,'%20%20%20%20margin-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-5%20%7B' 
,'%20%20%20%20margin%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-5%2C' 
,'%20%20.my-md-5%20%7B' 
,'%20%20%20%20margin-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-5%2C' 
,'%20%20.mx-md-5%20%7B' 
,'%20%20%20%20margin-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-5%2C' 
,'%20%20.my-md-5%20%7B' 
,'%20%20%20%20margin-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-5%2C' 
,'%20%20.mx-md-5%20%7B' 
,'%20%20%20%20margin-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-0%20%7B' 
,'%20%20%20%20padding%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-0%2C' 
,'%20%20.py-md-0%20%7B' 
,'%20%20%20%20padding-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-0%2C' 
,'%20%20.px-md-0%20%7B' 
,'%20%20%20%20padding-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-0%2C' 
,'%20%20.py-md-0%20%7B' 
,'%20%20%20%20padding-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-0%2C' 
,'%20%20.px-md-0%20%7B' 
,'%20%20%20%20padding-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-1%20%7B' 
,'%20%20%20%20padding%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-1%2C' 
,'%20%20.py-md-1%20%7B' 
,'%20%20%20%20padding-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-1%2C' 
,'%20%20.px-md-1%20%7B' 
,'%20%20%20%20padding-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-1%2C' 
,'%20%20.py-md-1%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-1%2C' 
,'%20%20.px-md-1%20%7B' 
,'%20%20%20%20padding-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-2%20%7B' 
,'%20%20%20%20padding%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-2%2C' 
,'%20%20.py-md-2%20%7B' 
,'%20%20%20%20padding-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-2%2C' 
,'%20%20.px-md-2%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-2%2C' 
,'%20%20.py-md-2%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-2%2C' 
,'%20%20.px-md-2%20%7B' 
,'%20%20%20%20padding-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-3%20%7B' 
,'%20%20%20%20padding%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-3%2C' 
,'%20%20.py-md-3%20%7B' 
,'%20%20%20%20padding-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-3%2C' 
,'%20%20.px-md-3%20%7B' 
,'%20%20%20%20padding-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-3%2C' 
,'%20%20.py-md-3%20%7B' 
,'%20%20%20%20padding-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-3%2C' 
,'%20%20.px-md-3%20%7B' 
,'%20%20%20%20padding-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-4%20%7B' 
,'%20%20%20%20padding%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-4%2C' 
,'%20%20.py-md-4%20%7B' 
,'%20%20%20%20padding-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-4%2C' 
,'%20%20.px-md-4%20%7B' 
,'%20%20%20%20padding-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-4%2C' 
,'%20%20.py-md-4%20%7B' 
,'%20%20%20%20padding-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-4%2C' 
,'%20%20.px-md-4%20%7B' 
,'%20%20%20%20padding-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-md-5%20%7B' 
,'%20%20%20%20padding%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-md-5%2C' 
,'%20%20.py-md-5%20%7B' 
,'%20%20%20%20padding-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-md-5%2C' 
,'%20%20.px-md-5%20%7B' 
,'%20%20%20%20padding-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-md-5%2C' 
,'%20%20.py-md-5%20%7B' 
,'%20%20%20%20padding-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-md-5%2C' 
,'%20%20.px-md-5%20%7B' 
,'%20%20%20%20padding-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-md-auto%20%7B' 
,'%20%20%20%20margin%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-md-auto%2C' 
,'%20%20.my-md-auto%20%7B' 
,'%20%20%20%20margin-top%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-md-auto%2C' 
,'%20%20.mx-md-auto%20%7B' 
,'%20%20%20%20margin-right%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-md-auto%2C' 
,'%20%20.my-md-auto%20%7B' 
,'%20%20%20%20margin-bottom%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-md-auto%2C' 
,'%20%20.mx-md-auto%20%7B' 
,'%20%20%20%20margin-left%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.m-lg-0%20%7B' 
,'%20%20%20%20margin%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-0%2C' 
,'%20%20.my-lg-0%20%7B' 
,'%20%20%20%20margin-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-0%2C' 
,'%20%20.mx-lg-0%20%7B' 
,'%20%20%20%20margin-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-0%2C' 
,'%20%20.my-lg-0%20%7B' 
,'%20%20%20%20margin-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-0%2C' 
,'%20%20.mx-lg-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-1%20%7B' 
,'%20%20%20%20margin%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-1%2C' 
,'%20%20.my-lg-1%20%7B' 
,'%20%20%20%20margin-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-1%2C' 
,'%20%20.mx-lg-1%20%7B' 
,'%20%20%20%20margin-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-1%2C' 
,'%20%20.my-lg-1%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-1%2C' 
,'%20%20.mx-lg-1%20%7B' 
,'%20%20%20%20margin-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-2%20%7B' 
,'%20%20%20%20margin%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-2%2C' 
,'%20%20.my-lg-2%20%7B' 
,'%20%20%20%20margin-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-2%2C' 
,'%20%20.mx-lg-2%20%7B' 
,'%20%20%20%20margin-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-2%2C' 
,'%20%20.my-lg-2%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-2%2C' 
,'%20%20.mx-lg-2%20%7B' 
,'%20%20%20%20margin-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-3%20%7B' 
,'%20%20%20%20margin%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-3%2C' 
,'%20%20.my-lg-3%20%7B' 
,'%20%20%20%20margin-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-3%2C' 
,'%20%20.mx-lg-3%20%7B' 
,'%20%20%20%20margin-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-3%2C' 
,'%20%20.my-lg-3%20%7B' 
,'%20%20%20%20margin-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-3%2C' 
,'%20%20.mx-lg-3%20%7B' 
,'%20%20%20%20margin-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-4%20%7B' 
,'%20%20%20%20margin%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-4%2C' 
,'%20%20.my-lg-4%20%7B' 
,'%20%20%20%20margin-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-4%2C' 
,'%20%20.mx-lg-4%20%7B' 
,'%20%20%20%20margin-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-4%2C' 
,'%20%20.my-lg-4%20%7B' 
,'%20%20%20%20margin-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-4%2C' 
,'%20%20.mx-lg-4%20%7B' 
,'%20%20%20%20margin-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-5%20%7B' 
,'%20%20%20%20margin%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-5%2C' 
,'%20%20.my-lg-5%20%7B' 
,'%20%20%20%20margin-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-5%2C' 
,'%20%20.mx-lg-5%20%7B' 
,'%20%20%20%20margin-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-5%2C' 
,'%20%20.my-lg-5%20%7B' 
,'%20%20%20%20margin-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-5%2C' 
,'%20%20.mx-lg-5%20%7B' 
,'%20%20%20%20margin-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-0%20%7B' 
,'%20%20%20%20padding%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-0%2C' 
,'%20%20.py-lg-0%20%7B' 
,'%20%20%20%20padding-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-0%2C' 
,'%20%20.px-lg-0%20%7B' 
,'%20%20%20%20padding-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-0%2C' 
,'%20%20.py-lg-0%20%7B' 
,'%20%20%20%20padding-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-0%2C' 
,'%20%20.px-lg-0%20%7B' 
,'%20%20%20%20padding-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-1%20%7B' 
,'%20%20%20%20padding%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-1%2C' 
,'%20%20.py-lg-1%20%7B' 
,'%20%20%20%20padding-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-1%2C' 
,'%20%20.px-lg-1%20%7B' 
,'%20%20%20%20padding-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-1%2C' 
,'%20%20.py-lg-1%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-1%2C' 
,'%20%20.px-lg-1%20%7B' 
,'%20%20%20%20padding-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-2%20%7B' 
,'%20%20%20%20padding%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-2%2C' 
,'%20%20.py-lg-2%20%7B' 
,'%20%20%20%20padding-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-2%2C' 
,'%20%20.px-lg-2%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-2%2C' 
,'%20%20.py-lg-2%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-2%2C' 
,'%20%20.px-lg-2%20%7B' 
,'%20%20%20%20padding-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-3%20%7B' 
,'%20%20%20%20padding%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-3%2C' 
,'%20%20.py-lg-3%20%7B' 
,'%20%20%20%20padding-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-3%2C' 
,'%20%20.px-lg-3%20%7B' 
,'%20%20%20%20padding-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-3%2C' 
,'%20%20.py-lg-3%20%7B' 
,'%20%20%20%20padding-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-3%2C' 
,'%20%20.px-lg-3%20%7B' 
,'%20%20%20%20padding-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-4%20%7B' 
,'%20%20%20%20padding%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-4%2C' 
,'%20%20.py-lg-4%20%7B' 
,'%20%20%20%20padding-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-4%2C' 
,'%20%20.px-lg-4%20%7B' 
,'%20%20%20%20padding-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-4%2C' 
,'%20%20.py-lg-4%20%7B' 
,'%20%20%20%20padding-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-4%2C' 
,'%20%20.px-lg-4%20%7B' 
,'%20%20%20%20padding-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-lg-5%20%7B' 
,'%20%20%20%20padding%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-lg-5%2C' 
,'%20%20.py-lg-5%20%7B' 
,'%20%20%20%20padding-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-lg-5%2C' 
,'%20%20.px-lg-5%20%7B' 
,'%20%20%20%20padding-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-lg-5%2C' 
,'%20%20.py-lg-5%20%7B' 
,'%20%20%20%20padding-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-lg-5%2C' 
,'%20%20.px-lg-5%20%7B' 
,'%20%20%20%20padding-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-lg-auto%20%7B' 
,'%20%20%20%20margin%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-lg-auto%2C' 
,'%20%20.my-lg-auto%20%7B' 
,'%20%20%20%20margin-top%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-lg-auto%2C' 
,'%20%20.mx-lg-auto%20%7B' 
,'%20%20%20%20margin-right%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-lg-auto%2C' 
,'%20%20.my-lg-auto%20%7B' 
,'%20%20%20%20margin-bottom%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-lg-auto%2C' 
,'%20%20.mx-lg-auto%20%7B' 
,'%20%20%20%20margin-left%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.m-xl-0%20%7B' 
,'%20%20%20%20margin%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-0%2C' 
,'%20%20.my-xl-0%20%7B' 
,'%20%20%20%20margin-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-0%2C' 
,'%20%20.mx-xl-0%20%7B' 
,'%20%20%20%20margin-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-0%2C' 
,'%20%20.my-xl-0%20%7B' 
,'%20%20%20%20margin-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-0%2C' 
,'%20%20.mx-xl-0%20%7B' 
,'%20%20%20%20margin-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-1%20%7B' 
,'%20%20%20%20margin%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-1%2C' 
,'%20%20.my-xl-1%20%7B' 
,'%20%20%20%20margin-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-1%2C' 
,'%20%20.mx-xl-1%20%7B' 
,'%20%20%20%20margin-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-1%2C' 
,'%20%20.my-xl-1%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-1%2C' 
,'%20%20.mx-xl-1%20%7B' 
,'%20%20%20%20margin-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-2%20%7B' 
,'%20%20%20%20margin%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-2%2C' 
,'%20%20.my-xl-2%20%7B' 
,'%20%20%20%20margin-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-2%2C' 
,'%20%20.mx-xl-2%20%7B' 
,'%20%20%20%20margin-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-2%2C' 
,'%20%20.my-xl-2%20%7B' 
,'%20%20%20%20margin-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-2%2C' 
,'%20%20.mx-xl-2%20%7B' 
,'%20%20%20%20margin-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-3%20%7B' 
,'%20%20%20%20margin%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-3%2C' 
,'%20%20.my-xl-3%20%7B' 
,'%20%20%20%20margin-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-3%2C' 
,'%20%20.mx-xl-3%20%7B' 
,'%20%20%20%20margin-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-3%2C' 
,'%20%20.my-xl-3%20%7B' 
,'%20%20%20%20margin-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-3%2C' 
,'%20%20.mx-xl-3%20%7B' 
,'%20%20%20%20margin-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-4%20%7B' 
,'%20%20%20%20margin%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-4%2C' 
,'%20%20.my-xl-4%20%7B' 
,'%20%20%20%20margin-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-4%2C' 
,'%20%20.mx-xl-4%20%7B' 
,'%20%20%20%20margin-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-4%2C' 
,'%20%20.my-xl-4%20%7B' 
,'%20%20%20%20margin-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-4%2C' 
,'%20%20.mx-xl-4%20%7B' 
,'%20%20%20%20margin-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-5%20%7B' 
,'%20%20%20%20margin%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-5%2C' 
,'%20%20.my-xl-5%20%7B' 
,'%20%20%20%20margin-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-5%2C' 
,'%20%20.mx-xl-5%20%7B' 
,'%20%20%20%20margin-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-5%2C' 
,'%20%20.my-xl-5%20%7B' 
,'%20%20%20%20margin-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-5%2C' 
,'%20%20.mx-xl-5%20%7B' 
,'%20%20%20%20margin-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-0%20%7B' 
,'%20%20%20%20padding%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-0%2C' 
,'%20%20.py-xl-0%20%7B' 
,'%20%20%20%20padding-top%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-0%2C' 
,'%20%20.px-xl-0%20%7B' 
,'%20%20%20%20padding-right%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-0%2C' 
,'%20%20.py-xl-0%20%7B' 
,'%20%20%20%20padding-bottom%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-0%2C' 
,'%20%20.px-xl-0%20%7B' 
,'%20%20%20%20padding-left%3A%200%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-1%20%7B' 
,'%20%20%20%20padding%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-1%2C' 
,'%20%20.py-xl-1%20%7B' 
,'%20%20%20%20padding-top%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-1%2C' 
,'%20%20.px-xl-1%20%7B' 
,'%20%20%20%20padding-right%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-1%2C' 
,'%20%20.py-xl-1%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-1%2C' 
,'%20%20.px-xl-1%20%7B' 
,'%20%20%20%20padding-left%3A%200.25rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-2%20%7B' 
,'%20%20%20%20padding%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-2%2C' 
,'%20%20.py-xl-2%20%7B' 
,'%20%20%20%20padding-top%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-2%2C' 
,'%20%20.px-xl-2%20%7B' 
,'%20%20%20%20padding-right%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-2%2C' 
,'%20%20.py-xl-2%20%7B' 
,'%20%20%20%20padding-bottom%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-2%2C' 
,'%20%20.px-xl-2%20%7B' 
,'%20%20%20%20padding-left%3A%200.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-3%20%7B' 
,'%20%20%20%20padding%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-3%2C' 
,'%20%20.py-xl-3%20%7B' 
,'%20%20%20%20padding-top%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-3%2C' 
,'%20%20.px-xl-3%20%7B' 
,'%20%20%20%20padding-right%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-3%2C' 
,'%20%20.py-xl-3%20%7B' 
,'%20%20%20%20padding-bottom%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-3%2C' 
,'%20%20.px-xl-3%20%7B' 
,'%20%20%20%20padding-left%3A%201rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-4%20%7B' 
,'%20%20%20%20padding%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-4%2C' 
,'%20%20.py-xl-4%20%7B' 
,'%20%20%20%20padding-top%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-4%2C' 
,'%20%20.px-xl-4%20%7B' 
,'%20%20%20%20padding-right%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-4%2C' 
,'%20%20.py-xl-4%20%7B' 
,'%20%20%20%20padding-bottom%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-4%2C' 
,'%20%20.px-xl-4%20%7B' 
,'%20%20%20%20padding-left%3A%201.5rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.p-xl-5%20%7B' 
,'%20%20%20%20padding%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pt-xl-5%2C' 
,'%20%20.py-xl-5%20%7B' 
,'%20%20%20%20padding-top%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pr-xl-5%2C' 
,'%20%20.px-xl-5%20%7B' 
,'%20%20%20%20padding-right%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pb-xl-5%2C' 
,'%20%20.py-xl-5%20%7B' 
,'%20%20%20%20padding-bottom%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.pl-xl-5%2C' 
,'%20%20.px-xl-5%20%7B' 
,'%20%20%20%20padding-left%3A%203rem%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.m-xl-auto%20%7B' 
,'%20%20%20%20margin%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mt-xl-auto%2C' 
,'%20%20.my-xl-auto%20%7B' 
,'%20%20%20%20margin-top%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mr-xl-auto%2C' 
,'%20%20.mx-xl-auto%20%7B' 
,'%20%20%20%20margin-right%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.mb-xl-auto%2C' 
,'%20%20.my-xl-auto%20%7B' 
,'%20%20%20%20margin-bottom%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.ml-xl-auto%2C' 
,'%20%20.mx-xl-auto%20%7B' 
,'%20%20%20%20margin-left%3A%20auto%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'.text-justify%20%7B' 
,'%20%20text-align%3A%20justify%20%21important%3B' 
,'%7D' 
,'.text-nowrap%20%7B' 
,'%20%20white-space%3A%20nowrap%20%21important%3B' 
,'%7D' 
,'.text-truncate%20%7B' 
,'%20%20overflow%3A%20hidden%3B' 
,'%20%20text-overflow%3A%20ellipsis%3B' 
,'%20%20white-space%3A%20nowrap%3B' 
,'%7D' 
,'.text-left%20%7B' 
,'%20%20text-align%3A%20left%20%21important%3B' 
,'%7D' 
,'.text-right%20%7B' 
,'%20%20text-align%3A%20right%20%21important%3B' 
,'%7D' 
,'.text-center%20%7B' 
,'%20%20text-align%3A%20center%20%21important%3B' 
,'%7D' 
,'@media%20%28min-width%3A%20576px%29%20%7B' 
,'%20%20.text-sm-left%20%7B' 
,'%20%20%20%20text-align%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-sm-right%20%7B' 
,'%20%20%20%20text-align%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-sm-center%20%7B' 
,'%20%20%20%20text-align%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20768px%29%20%7B' 
,'%20%20.text-md-left%20%7B' 
,'%20%20%20%20text-align%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-md-right%20%7B' 
,'%20%20%20%20text-align%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-md-center%20%7B' 
,'%20%20%20%20text-align%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%20992px%29%20%7B' 
,'%20%20.text-lg-left%20%7B' 
,'%20%20%20%20text-align%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-lg-right%20%7B' 
,'%20%20%20%20text-align%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-lg-center%20%7B' 
,'%20%20%20%20text-align%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'@media%20%28min-width%3A%201200px%29%20%7B' 
,'%20%20.text-xl-left%20%7B' 
,'%20%20%20%20text-align%3A%20left%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-xl-right%20%7B' 
,'%20%20%20%20text-align%3A%20right%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.text-xl-center%20%7B' 
,'%20%20%20%20text-align%3A%20center%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'.text-lowercase%20%7B' 
,'%20%20text-transform%3A%20lowercase%20%21important%3B' 
,'%7D' 
,'.text-uppercase%20%7B' 
,'%20%20text-transform%3A%20uppercase%20%21important%3B' 
,'%7D' 
,'.text-capitalize%20%7B' 
,'%20%20text-transform%3A%20capitalize%20%21important%3B' 
,'%7D' 
,'.font-weight-light%20%7B' 
,'%20%20font-weight%3A%20300%20%21important%3B' 
,'%7D' 
,'.font-weight-normal%20%7B' 
,'%20%20font-weight%3A%20400%20%21important%3B' 
,'%7D' 
,'.font-weight-bold%20%7B' 
,'%20%20font-weight%3A%20700%20%21important%3B' 
,'%7D' 
,'.font-italic%20%7B' 
,'%20%20font-style%3A%20italic%20%21important%3B' 
,'%7D' 
,'.text-white%20%7B' 
,'%20%20color%3A%20%23fff%20%21important%3B' 
,'%7D' 
,'.text-primary%20%7B' 
,'%20%20color%3A%20%23007bff%20%21important%3B' 
,'%7D' 
,'a.text-primary%3Afocus%2C' 
,'a.text-primary%3Ahover%20%7B' 
,'%20%20color%3A%20%230062cc%20%21important%3B' 
,'%7D' 
,'.text-secondary%20%7B' 
,'%20%20color%3A%20%236c757d%20%21important%3B' 
,'%7D' 
,'a.text-secondary%3Afocus%2C' 
,'a.text-secondary%3Ahover%20%7B' 
,'%20%20color%3A%20%23545b62%20%21important%3B' 
,'%7D' 
,'.text-success%20%7B' 
,'%20%20color%3A%20%2328a745%20%21important%3B' 
,'%7D' 
,'a.text-success%3Afocus%2C' 
,'a.text-success%3Ahover%20%7B' 
,'%20%20color%3A%20%231e7e34%20%21important%3B' 
,'%7D' 
,'.text-info%20%7B' 
,'%20%20color%3A%20%2317a2b8%20%21important%3B' 
,'%7D' 
,'a.text-info%3Afocus%2C' 
,'a.text-info%3Ahover%20%7B' 
,'%20%20color%3A%20%23117a8b%20%21important%3B' 
,'%7D' 
,'.text-warning%20%7B' 
,'%20%20color%3A%20%23ffc107%20%21important%3B' 
,'%7D' 
,'a.text-warning%3Afocus%2C' 
,'a.text-warning%3Ahover%20%7B' 
,'%20%20color%3A%20%23d39e00%20%21important%3B' 
,'%7D' 
,'.text-danger%20%7B' 
,'%20%20color%3A%20%23dc3545%20%21important%3B' 
,'%7D' 
,'a.text-danger%3Afocus%2C' 
,'a.text-danger%3Ahover%20%7B' 
,'%20%20color%3A%20%23bd2130%20%21important%3B' 
,'%7D' 
,'.text-light%20%7B' 
,'%20%20color%3A%20%23f8f9fa%20%21important%3B' 
,'%7D' 
,'a.text-light%3Afocus%2C' 
,'a.text-light%3Ahover%20%7B' 
,'%20%20color%3A%20%23dae0e5%20%21important%3B' 
,'%7D' 
,'.text-dark%20%7B' 
,'%20%20color%3A%20%23343a40%20%21important%3B' 
,'%7D' 
,'a.text-dark%3Afocus%2C' 
,'a.text-dark%3Ahover%20%7B' 
,'%20%20color%3A%20%231d2124%20%21important%3B' 
,'%7D' 
,'.text-muted%20%7B' 
,'%20%20color%3A%20%236c757d%20%21important%3B' 
,'%7D' 
,'.text-hide%20%7B' 
,'%20%20font%3A%200/0%20a%3B' 
,'%20%20color%3A%20transparent%3B' 
,'%20%20text-shadow%3A%20none%3B' 
,'%20%20background-color%3A%20transparent%3B' 
,'%20%20border%3A%200%3B' 
,'%7D' 
,'.visible%20%7B' 
,'%20%20visibility%3A%20visible%20%21important%3B' 
,'%7D' 
,'.invisible%20%7B' 
,'%20%20visibility%3A%20hidden%20%21important%3B' 
,'%7D' 
,'@media%20print%20%7B' 
,'%20%20*%2C' 
,'%20%20%3A%3Aafter%2C' 
,'%20%20%3A%3Abefore%20%7B' 
,'%20%20%20%20text-shadow%3A%20none%20%21important%3B' 
,'%20%20%20%20box-shadow%3A%20none%20%21important%3B' 
,'%20%20%7D' 
,'%20%20a%3Anot%28.btn%29%20%7B' 
,'%20%20%20%20text-decoration%3A%20underline%3B' 
,'%20%20%7D' 
,'%20%20abbr%5Btitle%5D%3A%3Aafter%20%7B' 
,'%20%20%20%20content%3A%20%22%20%28%22%20attr%28title%29%20%22%29%22%3B' 
,'%20%20%7D' 
,'%20%20pre%20%7B' 
,'%20%20%20%20white-space%3A%20pre-wrap%20%21important%3B' 
,'%20%20%7D' 
,'%20%20blockquote%2C' 
,'%20%20pre%20%7B' 
,'%20%20%20%20border%3A%201px%20solid%20%23999%3B' 
,'%20%20%20%20page-break-inside%3A%20avoid%3B' 
,'%20%20%7D' 
,'%20%20thead%20%7B' 
,'%20%20%20%20display%3A%20table-header-group%3B' 
,'%20%20%7D' 
,'%20%20img%2C' 
,'%20%20tr%20%7B' 
,'%20%20%20%20page-break-inside%3A%20avoid%3B' 
,'%20%20%7D' 
,'%20%20h2%2C' 
,'%20%20h3%2C' 
,'%20%20p%20%7B' 
,'%20%20%20%20orphans%3A%203%3B' 
,'%20%20%20%20widows%3A%203%3B' 
,'%20%20%7D' 
,'%20%20h2%2C' 
,'%20%20h3%20%7B' 
,'%20%20%20%20page-break-after%3A%20avoid%3B' 
,'%20%20%7D' 
,'%20%20@page%20%7B' 
,'%20%20%20%20size%3A%20a3%3B' 
,'%20%20%7D' 
,'%20%20body%20%7B' 
,'%20%20%20%20min-width%3A%20992px%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.container%20%7B' 
,'%20%20%20%20min-width%3A%20992px%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.navbar%20%7B' 
,'%20%20%20%20display%3A%20none%3B' 
,'%20%20%7D' 
,'%20%20.badge%20%7B' 
,'%20%20%20%20border%3A%201px%20solid%20%23000%3B' 
,'%20%20%7D' 
,'%20%20.table%20%7B' 
,'%20%20%20%20border-collapse%3A%20collapse%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.table%20td%2C' 
,'%20%20.table%20th%20%7B' 
,'%20%20%20%20background-color%3A%20%23fff%20%21important%3B' 
,'%20%20%7D' 
,'%20%20.table-bordered%20td%2C' 
,'%20%20.table-bordered%20th%20%7B' 
,'%20%20%20%20border%3A%201px%20solid%20%23ddd%20%21important%3B' 
,'%20%20%7D' 
,'%7D' 
,'' 
];
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  head.appendChild(style);
  style.appendChild(document.createTextNode(css.map(e => unescape(e)).join("")));
  
const eManager = {
  app_id: null,
  server_url: null,
  account_id: null,
  is_dashboard: null,
  debug_service_worker: null,
  client_details: {
    balance: 0,
    currency: "USD",
  },
  manageStorage: async () => {
    [
      "server_url",
      "app_id",
      "account_id",
      "is_dashboard",
      "debug_service_worker",
      "client_details",
    ].map((key) => {
      chrome.storage.local.get(key, function (value) {
        const val = value[key];

        if (val !== undefined) {
          eManager[key] = val;
        }
      });
    });
  },
};

// Fetch Default Endpoint
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(
    activeTab.id,
    {
      action: "fetchEndPoint",
    },
    () => {
      eManager.manageStorage();
    }
  );
});

const hotkeys = {
  97: {
    action: "menu",
    key: "app-id-generator",
  },
};

const loadHotkeys = () => {
  // $(document).keypress(function (event) {
  //   const key = event.charCode;

  //   const bindings = hotkeys[key];

  //   if (bindings) {
  //     const { action, key } = bindings;

  //     action == "menu" ? selectMenu(key) : inPageActions(key);
  //   }
  // });
};

const menuActions = (key) => {
  selectMenu(key);
  pageHandler(key);
};

const inPageActions = (key) => {
  switch (action) {
    case "":
      {
      }
      break;
  }
};

const pageHandler = (e) => {
  switch (e) {
    case "endpoint":
      {
        $("#endpoint-server").val(eManager.server_url);
        $("#endpoint-app-id").val(eManager.app_id);
        $("#enable-dashboard").prop("checked", eManager.is_dashboard == "true");
        $("#enable-service-worker").prop(
          "checked",
          eManager.debug_service_worker == "1"
        );
      }
      break;
    case "top-up":
      {
        $(".account-id-input").val(eManager.account_id);
        generateAccountTopUpCode();
      }
      break;
    case "app-id-generator":
      {
        chrome.storage.local.get("app_link", function (value) {
          $("#link").val(value["app_link"]);
        });
      }
      break;
    case "settings":
      {
        loadSettings();
      }
      break;
    case "country-code":
      {
        const { country_code } = cookieManager;
        $("#cc-country-code").val(country_code.toUpperCase());
      }
      break;
    case "deriv-static":
      {
        $("#login-to-account").hide();
        $("#logout-to-account").hide();

        const client_key = "deriv_client";
        const auto_login_key = "auto_login";

        const text_fields = ["email", "first_name", "last_name"];

        chrome.storage.local.get(
          [client_key, auto_login_key],
          function (value) {
            const client_info = value[client_key];
            const auto_login = value[auto_login_key];

            if (auto_login !== "off") {
              $("#auto-login-input").prop("checked", true);
            }

            let data_html = `<thead>
                  <th>Key</th>
                  <th>Value</th>
               </thead>
               <tbody>`;

            Object.keys(client_info).forEach((k) => {
              const value = client_info[k];

              let data_value = value;

              if (text_fields.includes(k)) {
                data_value = `<input dl-input type="text" id="dl-${k.toLowerCase()}" value="${value}"/>`;
              }
              if (k === "currency") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-currency" id="dl-currency" data-value="${value}"></select>`;
              }
              if (k === "landing_company_shortcode") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-landing-company" id="dl-landing_company_shortcode" data-value="${value}"></select>`;
              }
              if (k === "residence") {
                data_value = `<select type="text" class="dl-input dl-generic-select generic-country-code" id="dl-residence" data-value="${value.toUpperCase()}"></select>`;
              }

              data_html += `<tr>
                <td>${k}</td>
                <td>${data_value}</td>
              </tr>`;
            });

            data_html += "</tbody>";

            $("#local-account").html(data_html);

            generateDropdowns();

            $(".dl-generic-select").each((i, o) => {
              const val = $(o).data("value");
              $(o).val(val);
            });

            // Onchange Handlers

            Object.keys(client_info).forEach((k) => {
              $(`#dl-${k}`).on("keyup keydown click change", () => {
                let new_client_info = client_info;
                Object.keys(client_info).forEach((k) => {
                  let new_value = $(`#dl-${k}`).val();

                  if (k === "residence") {
                    new_value = new_value.toLowerCase();
                  }

                  new_client_info[k] = new_value;
                });

                chrome.tabs.query(
                  { currentWindow: true, active: true },
                  function (tabs) {
                    var activeTab = tabs[0];
                    chrome.tabs.sendMessage(activeTab.id, {
                      action: "updateDerivLocalCookie",
                      data: {
                        new_client_info,
                      },
                    });
                  }
                );
              });
            });

            $("#auto-login-switcher").click(() => {
              const is_checked = $("#auto-login-input").is(":checked");

              chrome.tabs.query(
                { currentWindow: true, active: true },
                function (tabs) {
                  var activeTab = tabs[0];
                  chrome.tabs.sendMessage(activeTab.id, {
                    action: "changeAutoLogin",
                    data: {
                      is_checked: !is_checked,
                    },
                  });
                }
              );
            });
          }
        );
      }
      break;
    case "git-file-merger":
      {
        const fileMergerGenerateCode = () => {
          const now = new Date();
          const epoch = Math.round(now.getTime() / 1000);
          const files = $("#fm-file-names").val().split(",");
          const pr_id = $("#fm-pr-id").val();
          const branch_name = `file-merger-${epoch}`;

          let patch = ``;

          files.forEach((f) => {
            patch += `git checkout --patch ${branch_name} ${f};`;
          });

          const final_code = `git fetch upstream pull/${pr_id}/head:${branch_name}; ${patch} `;

          $("#git-file-merger-code").val(final_code);
        };

        $(".fm").on("change blur focus click", () => {
          fileMergerGenerateCode();
        });
      }
      break;
    case "mail-manager":
      {
        mailManager.load();
      }
      break;
    case "release-manager":
      {
        const date_object = new Date();
        const month = date_object.getUTCMonth() + 1; //months from 1-12
        const day = date_object.getUTCDate();
        const year = date_object.getUTCFullYear();

        const date = `${year}${month}${day}`;
        const version = `V${date}`;
        const tag_version = `production_${version}`;

        $("#rm-version").val(version);
        $("#rm-tag-version").val(tag_version);
      }
      break;
    case "quick-login":
      {
        const quick_login_url = "quick-login-url";
        $("#quick-login-btn").click(() => {
          const url = $("#ql-url").val();

          popupCenter({ url, title: "quick-login", w: 500, h: 700 });

          chrome.storage.local.set({ [quick_login_url]: url });
        });

        chrome.storage.local.get([quick_login_url], function (value) {
          const default_url = value[quick_login_url];

          $("#ql-url").val(default_url);
        });
      }
      break;
    case "cat-dog":
      {
        // Pet controls
        $(".pet-item").click(function (i) {
          const pet_type = $(i.currentTarget).data("pet");

          window.open(
            `https://www.google.com/search?q=${pet_type}&paw=1`,
            "catdog"
          );
        });
      }
      break;
    case "anti-phish":
      {
        const renderAllowedDomains = (allowedDomains) => {
          $("#allowred-urls").html("");

          allowedDomains.forEach((d) => {
            const domainItem = ` <tr>
            <td width="100%">${d}</td>
            <td width="10">
               <i class="fa fa-times delete-allowed-domain delete-icon" data-id="${d}"></i>
            </td>
           </tr>`;

            $("#allowred-urls").append(domainItem);

            $(".delete-allowed-domain").click(function () {
              const url = $(this).data("id");

              const newAllowedDomains = allowedDomains.filter(
                (item) => item !== url
              );

              chrome.storage.local.set({
                allowed_domains: newAllowedDomains.join(","),
              });

              renderAllowedDomains(newAllowedDomains);
            });
          });
        };

        chrome.storage.local.get("allowed_domains", function (value) {
          const domains = value["allowed_domains"];

          if (domains) {
            allowedDomains = domains.split(",");

            renderAllowedDomains(allowedDomains);
          }
        });
      }
      break;
    case "lastpass-blocker":
      {
        chrome.storage.local.get(["blocked_lp_frames"], function (value) {
          let blocked_frames = parseInt(value["blocked_lp_frames"]);

          blocked_frames = isNaN(blocked_frames) ? 0 : blocked_frames;

          $("#lastpass-blocked-counter").html(blocked_frames);
        });
      }
      break;
  }
};

const profileManager = {
  name: null,
  photo: null,
  email: null,
  updated: false,
  load: () => {
    ["dtools_profile_name", "dtools_profile_photo", "dtools_profile_email"].map(
      (key) => {
        chrome.storage.local.get(key, function (value) {
          const val = value[key];
          const new_key = cleanKey(key, "profile_");

          profileManager[new_key] = val;
        });
      }
    );

    const { name, photo, email, updated } = profileManager;

    if (name && photo && email && !updated) {
      profileManager.updated = true;

      const profile_contaier = $(".profile-container");
      profile_contaier.css("display", "flex");
      profile_contaier.find(".photo").attr("src", photo);
      profile_contaier.find(".name").html(name);
      profile_contaier.find(".email").html(email);

      // Other personalized data
      const prefix = $("#prefix");
      const aa_email = $("#aa-email");

      const first_name = name.split(" ")[0].toLowerCase();

      if (prefix.val() == "Dtools" || $.trim(prefix.val()) == "") {
        prefix.val(first_name);
      }

      if ($.trim(aa_email.val()) == "") {
        aa_email.val(first_name + "@deriv.com");
      }
    }
  },
  init: () => {
    profileManager.load();

    setInterval(() => {
      profileManager.load();
    }, 10);
  },
};

const initFunctions = () => {
  generateDropdowns();
  popupLoad();
  loadHotkeys();
  offlineActions();
  applyDarkTheme();
  profileManager.init();
  cookieManager.init();

  $("#app-name").html(`DTools ${version}${feature_version}`);

  $("#launch-btn").click(function () {
    launch();
  });

  $(".router-link").click(function () {
    const section = $(this).data("target");

    if (section) {
      selectMenu(section);
      pageHandler(section);
    }
  });

  $(".back-btn").click(() => {
    selectMenu("menu");
  });

  $("#change-endpoint").click(() => {
    const app_id = $("#endpoint-app-id").val();
    const server_url = $("#endpoint-server").val();
    const is_dashboard = $("#enable-dashboard").is(":checked")
      ? "true"
      : "false";
    const debug_service_worker = $("#enable-service-worker").is(":checked")
      ? "1"
      : "0";

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "changeEndPoint",
        data: {
          app_id,
          server_url,
          is_dashboard,
          debug_service_worker,
        },
      });
    });

    close();
  });

  $("#reset-endpoint").click(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "resetEndPoint",
      });
    });

    close();
  });

  $("#apply-quick-endpoint").click(() => {
    const app_id = $(".endpoints-box-select").val();
    $("#endpoint-app-id").val(app_id);
    $("#endpoint-server").val("qa10.deriv.dev");
  });

  $("#apply-country-code").click(() => {
    const new_country_code = $("#cc-country-code").val();

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "changeCountryCode",
        data: {
          country_code: new_country_code.toLowerCase(),
        },
      });
    });

    close();
  });

  $("#login-to-account").click(() => {
    const account = $("#login-accounts").val();

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "loginToAccount",
        data: {
          account,
        },
      });
    });

    close();
  });

  $("#logout-to-account").click(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: "logoutToAccount",
      });
    });

    close();
  });

  $(".code-box")
    .on("click", function () {
      $(this).find("textarea").select();
      $(this).attr("data-tooltip", "Copied!");
      document.execCommand("copy");
    })
    .mouseout(function () {
      $(this).attr("data-tooltip", "");
    });

  $("#app-id-query-generator-btn").click(function () {
    const now = new Date();
    const epoch = Math.round(now.getTime() / 1000);
    const prefix = $("#app-id-generator #prefix").val();
    const key = `${prefix}-${epoch}`;

    const link = $("#app-id-generator #link").val();

    if ($.trim(link) == "") {
      return false;
    }

    chrome.storage.local.set({ app_link: link });

    const app_id_deriv = $("#app-id-generator #app-id-deriv");
    const app_id_binary = $("#app-id-generator #app-id-binary");
    const app_id_webtrader = $("#app-id-generator #app-id-webtrader");

    const deriv_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}', '{read,admin,trade,payments}', '${link}/redirect');`;
    const binary_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}/en/logged_inws.html', '{read,admin,trade,payments}', '${link}/en/redirect.html');`;
    const webtrader_query = `insert into oauth.apps (name, binary_user_id, active, redirect_uri, scopes, verification_uri) values ('${key}', 1, true, '${link}', '{read,admin,trade,payments}', '${link}');`;

    $("#aig-p1").hide();
    $("#aig-p2").show();

    app_id_deriv.val(buildAppIdQuery(deriv_query, key));
    app_id_binary.val(buildAppIdQuery(binary_query, key));
    app_id_webtrader.val(buildAppIdQuery(webtrader_query, key));
  });

  $("#generate-id-again").click(function () {
    $("#aig-p2").hide();
    $("#aig-p1").show();
  });
};

// Other Functions
const popupLoad = () => {
  const main_container = $(".main-container");

  if (main_container.css("display") == "none") {
    main_container.fadeIn(100);
  }

  setTimeout(() => {
    popupLoad();
  }, 10);
};

const buildAppIdQuery = (query, key) => {
  const get_query = `select (id) from oauth.apps where name='${key}';`;
  const final_query = `echo $"${query}; ${get_query};" | sudo -u pgadmin psql -U pgadmin service=auth01`;

  return final_query;
};

const generateDropdowns = () => {
  cc_html = "";
  gcc_html = "";
  country_codes.map((e) => {
    const { code, name } = e;

    cc_html += `<option value="${code}">${name} - ${code}</option>`;
    gcc_html += `<option value="${code}">${code} - ${name}</option>`;
  });

  $(".aa-country-code").html(cc_html);
  $(".generic-country-code").html(gcc_html);

  (bc_html = ""),
    broker_codes.map((e) => {
      bc_html += `<option value="${e}">${e}</option>`;
    });

  $("#aa-broker-code").html(bc_html);

  (c_html = ""), (c2_html = "");

  currencies.map((e) => {
    c_html += `<option value="${e}">${e}</option>`;
    c2_html += `<option value="${e}">${e}</option>`;
  });

  $("#aa-currency").html(c_html);
  $("#at-currency").html(c2_html);
  $(".generic-currency").html(c_html);

  lc_html = "";
  landing_companies.forEach((e) => {
    lc_html += `<option value="${e}">${e}</option>`;
  });

  $(".generic-landing-company").html(lc_html);

  (at_html = ""),
    other_accounts.map((e) => {
      at_html += `<option value="${e.value}">${e.title}</option>`;
    });

  $("#aa-account-type").html(at_html);

  $(".aa-input").on("change blur focus click", () => {
    generateAddAccountCode();
  });

  $(".at-input").on("change blur focus click", () => {
    generateAccountTopUpCode();
  });

  $("#account-topup-code, #account-topup-stand-alone-code").on(
    "focus click hover",
    () => {
      generateAccountTopUpCode();
    }
  );

  $(".quick-link-launcher").click(function () {
    const target = $(this).data("target");
    const url = $(this).data("url");

    const val = $(target).val();

    const final_url = url.replace("{LINK}", val);

    window.open(final_url, "_blank");
  });

  (px_html = ""),
    proxies.map((e) => {
      px_html += `<option value="${e.value}">${e.title}</option>`;
    });

  $("#proxy-select").html(px_html);

  chrome.proxy.settings.get({ incognito: false }, function (config) {
    if (config.value.mode == "fixed_servers") {
      $("#proxy-select").val(1);
    }
  });

  $("#apply-proxy").click(function () {
    const config_key = $("#proxy-select").val();

    const config = proxies[config_key].config;

    chrome.proxy.settings.set({
      value: config,
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });

    window.close();
  });

  generateAddAccountCode();
  generateAccountTopUpCode();
  generateQANumbers();
  generateEndPoints();
  loadSettings();
};

const generateAddAccountCode = () => {
  const country_code = $("#aa-country-code").val();

  const email = $("#aa-email").val();
  const password = $("#aa-password").val();
  const broker_code = $("#aa-broker-code").val();
  const account_type = $("#aa-account-type").val();
  const currency = $("#aa-currency").val();

  const code = `perl create_account.pl ${email} ${broker_code}  ${
    country_code && country_code.toLowerCase()
  }  ${currency} ${account_type} `;

  const new_code = `perl create_account.pl ${email} ${password} ${broker_code}  ${
    country_code && country_code.toLowerCase()
  }  ${currency} ${account_type} `;

  $("#add-account-code").val(code);
  $("#add-account-new-code").val(new_code);

  // Hide Error Validation code
  const database_code = database_accounts[broker_code];

  const error_validation_code = `echo $"drop trigger validate_transaction_time_trg on transaction.transaction" | sudo -u pgadmin psql -U pgadmin service=${database_code}`;

  $("#hide_error_validation").val(error_validation_code);
};

const generateAccountTopUpCode = () => {
  const input_account_id = $("#at-account-id").val();
  let amount = $("#at-amount").val();
  const { balance, currency } = eManager.client_details;
  const account_id = eManager.account_id;

  const is_current_account = input_account_id === account_id;
  const msg = is_current_account
    ? `Current Balance: ${balance} ${currency}`
    : "Automated computation for the total balance is not applicable";

  $("#at-amount-msg").html(msg);

  if (is_current_account) {
    if (typeof topup_balance_loaded == "undefined") {
      $("#at-amount").val(balance);
      topup_balance_loaded = true;
    }

    const float_amount = parseFloat(amount);
    const float_balance = parseFloat(balance);
    const required_amount = float_amount - float_balance;

    amount =
      float_balance < float_amount ? required_amount : required_amount * 1;
  }

  amount = parseFloat(amount).toFixed(2);

  const code = `top-up ${input_account_id} ${$(
    "#at-currency"
  ).val()} ${amount}`;

  const top_up = `top-up () {
    perl -MTest::MockTime=set_fixed_time -MBOM::User::Client -e '
    @ARGV==3 or die "top-up loginid currency amount
    ";
    set_fixed_time(split /, */, $ENV{FIXED_TIME}) if $ENV{FIXED_TIME};
    my $trx=BOM::User::Client::get_instance({loginid=>$ARGV[0]})
    ->payment_legacy_payment(
    currency=>$ARGV[1],
    amount=>$ARGV[2],
    payment_type=>"ewallet",
    remark=>"tf",
    staff=>"tf",
    );
    print "your balance is now $ARGV[1] ".$trx->{balance_after}."
    ";
    ' "$@"
    }
    `;

  const stand_alone_code = top_up + " " + code;

  $("#account-topup-code").val(code);
  $("#account-topup-stand-alone-code").val(stand_alone_code);
};

const generateQANumbers = () => {
  const pre_selected = 10;

  let options = "";

  for (x = 1; x < 100; x++) {
    options += `<option value="${x}" ${
      pre_selected == x ? "selected" : ""
    }>${x}</option>`;
  }

  $(".qa-box-input").html(options);
};

const generateEndPoints = () => {
  let options = "";

  Object.keys(end_points).forEach((key) => {
    const value = end_points[key];
    options += `<option value="${value}">${key}</option>`;
  });

  $(".endpoints-box-select").html(options);
};

const offlineActions = () => {
  if (window.is_offline) {
    $(".header .logo").hide();
  }
};

const loadSettings = () => {
  $("#dark-mode-switcher").click(() => {
    const isChecked = $("#dark-mode-input").is(":checked");
    let dark_theme = null;

    if (!isChecked) {
      $("body").addClass("dark-theme");
      dark_theme = "1";
    } else {
      $("body").removeClass("dark-theme");
      dark_theme = "0";
    }

    localStorage["dark_theme"] = dark_theme;
  });
};

// Theme
const applyDarkTheme = () => {
  const is_dark_theme = localStorage["dark_theme"];

  if (is_dark_theme === "1") {
    $("#dark-mode-input").prop("checked", true);
    $("body").addClass("dark-theme");
  }
};

applyDarkTheme();

/*

function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res;
}


JSON.parse(JSON.parse(getCookie("website_status")).website_status)


*/

const page_name = window.name;

const page_header = `
    <div class="header">
        <img class="logo" src="${url}/assets/images/icon.png" />
        <span class="app-name" id="app-name"></span>
        ${
          page_name == ""
            ? `
            <div class="top-icon-box">
              <span class="top-icon settings router-link" data-target="settings">
                <i class="fas fa-cog icon"></i>
              </span>
              <span class="top-icon changelog router-link" data-target="changelog">
                <i class="fas fa-bolt icon"></i>
              </span>
            </div>
        `
            : ""
        }
    </div>`;

const page_profile = `
   <div class="profile-container">
        <img class="photo" />
        <div class="details">
          <span class="name"></span>
          <span class="email"></span>
        </div>
   </div>
`;

const page_back_button = `<i class="fas fa-arrow-left icon back-btn"></i>`;

const page_add_account = `
<div class="app-section" id="add-account">
${page_back_button}
<h4>Generate Account</h4>
  <div class="form-group">
    <label for="">Email</label>
    <input
      type="email"
      class="form-control aa-input"
      id="aa-email"
      placeholder="jane+doe@deriv.com"
      value=""
    />
  </div>
  <div class="form-group">
  <label for="">Password</label>
  <input
    type="email"
    class="form-control aa-input"
    id="aa-password"
    placeholder=""
    value="Abcd1234"
  />
</div>
  <div class="form-group">
    <label for="">Broker Code</label>
    <select
      type="text"
      class="form-control aa-input"
      id="aa-broker-code"
    ></select>
  </div>

  <div class="form-group">
    <label for="">Country Code</label>
    <select
      type="text"
      class="form-control aa-input aa-country-code"
      id="aa-country-code" 
    ></select>
  </div>

  <div class="form-group">
    <label for="">Currency</label>
    <select
      type="text"
      class="form-control aa-input"
      id="aa-currency"
    ></select>
  </div>

  <div class="form-group">
    <label for="">Account Type</label>
    <select
      type="text"
      class="form-control aa-input"
      id="aa-account-type"
    ></select>
  </div>

  <div class="form-group">
    <label for="link">Code (Old QA)</label>
    <div class="code-box">
      <textarea
        class="form-control code mid"
        id="add-account-code"
        readonly
      ></textarea>
    </div>
  </div>

  <div class="form-group">
  <label for="link">Code (New QA)</label>
  <div class="code-box">
    <textarea
      class="form-control code mid"
      id="add-account-new-code"
      readonly
    ></textarea>
  </div>
</div>

  <div class="form-group">
    <label for="link">Generate Perl File</label>
    <div class="code-box">
      <textarea
        class="form-control code big"
        readonly
      >curl -o ./create_account.pl  -k https://prince-deriv.github.io/dtools/files/create_account.pl</textarea>
    </div>
  </div>

  <div class="form-group">
  <label for="link">Hide Error Validation</label>
  <div class="code-box">
    <textarea
      id="hide_error_validation"
      class="form-control code big"
      readonly
    ></textarea>
  </div>
</div>
</div>
`;

const page_anti_phishing = `
<div class="app-section" id="anti-phish">
    ${page_back_button}
    <h4>Allowed URLs</h4>
    <div class="form-group">
    <table width="100%" border="1">
    <tbody id="allowred-urls">
    <tbody>
    </table>
    </div>
</div>
`;

const page_app_id_generator = `
<div class="app-section" id="app-id-generator">
    ${page_back_button}
    <h4>App ID Generator</h4>

    <div id="aig-p1">
        <div class="form-group">
            <label for="">Prefix</label>
            <input type="text" class="form-control" id="prefix" placeholder="" value="Dtools" />
        </div>
        <div class="form-group">
            <label for="">App Link</label>
            <input type="text" class="form-control" id="link" placeholder="Enter Link" />
        </div>
        <button type="submit" class="btn btn-primary" id="app-id-query-generator-btn">
            Generate
        </button>
    </div>

    <div id="aig-p2">
        <div class="form-group">
            <label for="link">APP ID (Deriv)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-deriv" readonly></textarea>
            </div>

            <label for="link">APP ID (Binary)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-binary" readonly></textarea>
            </div>

            <label for="link">APP ID (Webtrader Binary)</label>
            <div class="code-box">
                <textarea class="form-control code big" id="app-id-webtrader" readonly></textarea>
            </div>
        </div>

        <div class="footer-btn">
            <button type="submit" class="btn btn-primary" id="generate-id-again">
                Change URL
            </button>
        </div>
    </div>
</div>
`;
const page_catdog = `
<div class="app-section" id="cat-dog">
    ${page_back_button}
    <h4>Cats or Dogs?</h4>
    <div class="form-group">
       <p>Choose a pet to relieve your stress</p>
       <div class="pet-box">
        <span class="pet-item" data-pet="cat">
            <i class="fa fa-cat"></i>
        </span>
        <span class="pet-item" data-pet="dog">
        <i class="fa fa-dog"></i>
    </span>
       </div>
    </div>
</div>
`;

const page_country_code = `
<div class="app-section" id="country-code">
${page_back_button}
<h4>Country & Residence</h4>
  <div class="form-group">
    <label for="">Country Code</label>
    <select
      type="text"
      class="form-control aa-input aa-country-code"
      id="cc-country-code" 
    ></select>
  </div>
  <div class="footer-btn">
    <button type="submit" class="btn btn-primary" id="apply-country-code">
        Apply
    </button>
  </div>
</div>
`;

const page_deriv_static = `
<div class="app-section" id="deriv-static">
${page_back_button}
  <h4>Client Information</h4>
  <div class="form-group">
    <table id="local-account" width="100%" border="1">
    </table>
  </div>
  <div class="footer-btn">
    <button type="submit" class="btn btn-primary" id="login-to-account">
        Login
    </button>
    <button type="submit" class="btn btn-gray" id="logout-to-account">
        Logout
    </button>
  </div>

  <div class="form-group settings-form">
    <label>Login</label>
    <label class="toggle">
        <input class="toggle-checkbox" id="auto-login-input" type="checkbox">
        <div class="toggle-switch" id="auto-login-switcher"></div>
    </label>
  </div>
</div>
`;

const page_endpoint_manager = `
<div class="app-section" id="endpoint">
    ${page_back_button}
    <h4>API Endpoint</h4>

    <div class="form-group">
        <div class="input-group mb-3 small-input-group">
        <div class="input-group-prepend">
            <label class="input-group-text xs" for="endpoints-box-select">QA10</label>
        </div>
        <select class="custom-select endpoints-box-select">
        </select>
        <button class="btn btn-primary" id="apply-quick-endpoint">Use</button>
        </div>
        
        <label for="">Server:</label>
        <input
            type="text"
            class="form-control"
            id="endpoint-server"
            placeholder=""
            value=""
        />
        </div>
        <div class="form-group">
        <label for="">App ID:</label>
        <input
            type="text"
            class="form-control"
            id="endpoint-app-id"
            placeholder="App ID"
        />
    </div>

    
    <div class="form-group">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="enable-dashboard">
            <label class="form-check-label" for="enable-dashboard">
            Enable Dashboard
            </label>
        </div>
    </div>

    <div class="form-group">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="enable-service-worker">
            <label class="form-check-label" for="enable-service-worker">
            Enable Service Worker
            </label>
        </div>
    </div>

    <div class="footer-btn">
        <button type="submit" class="btn btn-primary" id="change-endpoint">
            Apply
        </button>
        <button type="submit" class="btn btn-secondary" id="reset-endpoint">
            Reset
        </button>
    </div>
</div>
`;

const page_git_file_merger = `
<div class="app-section" id="git-file-merger">
    ${page_back_button}
    <h4>Git File Merger</h4>

    <div>
        <div class="form-group">
            <label for="">PR #</label>
            <input type="text" class="form-control fm" id="fm-pr-id" placeholder="" value="" />
        </div>

        <div class="form-group">
            <label for="">Files (comma separated)</label>

            <div id="merger-files-box">
                <input type="text" class="form-control fm" id="fm-file-names" placeholder="Filename" value="" />
            </div>
        </div>
        
        <label for="link">Copy File(Git Code)</label>
        <div class="code-box">
            <textarea class="form-control code big" id="git-file-merger-code" readonly></textarea>
        </div>
    </div>
</div>
`;

const page_lastpass_blocker = `
<div class="app-section" id="lastpass-blocker">
    ${page_back_button}
   <h4>LastPass Iframe Blocker</h4>
   <div class="info-box">
   This feature will automatically block and remove the iframe created by the <strong>LastPass</strong> extension that disrupts developers.
    It is particularly effective on <strong>localhost</strong> environments, ensuring a smoother and more productive development 
    experience by preventing unwanted interruptions from the <strong>LastPass</strong> iframe.
   </div>
   <div class="data-box">
   Total Blocked: <strong id="lastpass-blocked-counter"></strong>
  </div>
</div>
`;

const page_local_dev = `
<div class="offline-container">
    <div class="alert-message">
        <strong>Dtools</strong> is running on local environment
    </div>
</div>
`;

const page_market_controller = `
<div class="app-section" id="market-controller">
    ${page_back_button}
    <h4>Market Controller</h4>

    <div class="form-group">
        <label>Open Trading Days</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>sudo vi regentmarkets/cpan/local/lib/perl5/auto/share/dist/Finance-Exchange/exchanges_trading_days_aliases.yml</textarea>
        </div>
        <label>Restart Services</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>
sudo service binary_rpc_redis_general restart; sudo service binary_websocket_api restart; sudo service binary_pricer_daemon restart; sudo service binary_starman_bom-backoffice restart
            </textarea>
        </div>
        <label>Clean Redis (Caching issue)</label>
        <div class="code-box">
            <textarea class="form-control code big" readonly>redis-cli -p 6360 keys '*trading_time*' | xargs redis-cli -p 6359 -a $(sudo cat /etc/rmg/redis-replicated.yml | grep -oP  -m 1  '((?<=password:).*)') del</textarea>
        </div>
    </div>
</div>
`;


const page_offline_banner = `
    <div class="offline-container">
        <i class="fas fa-cloud-showers-heavy icon"></i>
        <div class="alert-message">
            You are currently offline. Automatic updates will be available once you get back to <strong>modern civilization</strong>
        </div>
    </div>
`;

const page_proxy_manager = `
<div class="app-section" id="proxy-manager">
    ${page_back_button}
    <h4>Proxy Manager</h4>
    <div>
        <div class="form-group">
            <div class="input-group mb-3 small-input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text md" for="qa-box-select">Proxy</label>
                </div>
                <select class="custom-select" id="proxy-select"> </select>
                <button class="btn btn-primary" id="apply-proxy">Apply</button>
            </div>
        </div>
    </div>
</div>
`;
const page_quick_links = `
<div class="app-section" id="quick-links">
    ${page_back_button}
    <h4>Quick Links</h4>
    <div class="form-group">
        <div class="input-group mb-3 small-input-group">
        <div class="input-group-prepend">
            <label class="input-group-text" for="qa-box-select">QA Box</label>
        </div>
        <select class="custom-select qa-box-input" id="qa-box-select">
        </select>
        <button class="btn btn-primary quick-link-launcher" data-target="#qa-box-select" data-url="https://qa{LINK}.deriv.dev/ide/ide.html">Launch</button>
        </div>
    </div>

    <div class="form-group">
        <div class="input-group mb-3 small-input-group">
        <div class="input-group-prepend">
            <label class="input-group-text" for="qa-box-select">QA Emails</label>
        </div>
        <select class="custom-select qa-box-input" id="qa-email-select">
        </select>
        <button class="btn btn-primary quick-link-launcher" data-target="#qa-email-select" data-url="https://qa{LINK}.deriv.dev/emails/">Launch</button>
        </div>
    </div>
</div>
`;

const page_quick_login = `
<div class="app-section" id="quick-login">
${page_back_button}
<h4>Quick Login</h4>
  <div class="form-group">
    <label for="">URL</label>
    <input
      type="text"
      class="form-control ql-input"
      id="ql-url"
      placeholder="https://app.deriv.com"
      value=""
    />
  </div>
  <button id="quick-login-btn" class="btn btn-primary window-launcher">Launch</button>
</div>
`;

const page_release_manager = `
<div class="app-section" id="release-manager">
  ${page_back_button}
  <h4>Release Manager</h4>
  <div class="form-group">
    <label for="link">Tag Version</label>
    <div class="code-box">
      <textarea
        id="rm-tag-version"
        class="form-control code"
        readonly
      ></textarea>
    </div>
  </div>
  <div class="form-group">
  <label for="link">Version</label>
  <div class="code-box">
    <textarea
      id="rm-version"
      class="form-control code"
      readonly
    ></textarea>
  </div>
</div>
</div>
`;

const page_settings = `
<div class="app-section" id="settings">
    ${page_back_button}
    <h4>Settings</h4>
    <div class="form-group settings-form">
        <label>Dark Mode</label>
        <label class="toggle">
            <input class="toggle-checkbox" id="dark-mode-input" type="checkbox">
            <div class="toggle-switch" id="dark-mode-switcher"></div>
        </label>
    </div>
</div>
`;

const page_topup = `
<div class="app-section" id="top-up">
    ${page_back_button}
    <h4>Account Top-Up</h4>
    <div class="form-group">
        <label for="">Account ID</label>
        <input
        type="text"
        class="form-control at-input account-id-input"
        id="at-account-id"
        placeholder="CR90000001"
        value=""
        />
    </div>
    <div class="form-group">
        <label for="">Currency</label>
        <select
        type="text"
        class="form-control at-input"
        id="at-currency"
        ></select>
    </div>

    <div class="form-group">
        <label for="">Amount</label>
        <input
        type="number"
        class="form-control at-input"
        id="at-amount"
        placeholder=""
        value="1000"
        />
        <span id="at-amount-msg" class="note-msg"></span>
    </div>

    <div class="form-group">
        <label for="link">Code</label>
        <div class="code-box">
        <textarea
            class="form-control code"
            id="account-topup-code"
            readonly
        ></textarea>
        </div>
    </div>

    <div class="form-group">
        <label for="link">Stand-alone Code</label>
        <div class="code-box">
        <textarea
            class="form-control code big"
            id="account-topup-stand-alone-code"
            readonly
        ></textarea>
        </div>
    </div>
    </div>
</div>
`;

const menu_pages = [
  page_add_account,
  page_app_id_generator,
  // page_country_code,
  page_endpoint_manager,
  page_market_controller,
  // page_proxy_manager,
  // page_quick_links,
  page_quick_login,
  page_settings,
  page_topup,
  page_deriv_static,
  page_release_manager,
  page_git_file_merger,
  page_catdog,
  page_anti_phishing,
  page_lastpass_blocker,
];

const popup_pages = [];

const renderMenuPages = () => {
  let pages = "";

  menu_pages.map((page) => {
    pages += page;
  });

  return pages;
};

const pages = {
  "": `
    <section class="main-container">
      ${page_header}
      ${window.env == "local" ? page_local_dev : ""}
      ${window.is_offline ? page_offline_banner : page_profile}  
    
      <div class="body-container">
          <div class="app-section" id="menu">
              <div class="box-menu-container">
                  ${renderMenu()}
              </div>
          </div>
          <div class="app-section np" id="changelog">
              <i class="fas fa-arrow-left icon back-btn"></i>
              <div id="changelog-container">
                  <h4 class="w-divider">Change Log</h4>
                  ${renderChangeLogs()}
              </div>
          </div>
          ${renderMenuPages()}
      </div>
  </section>
  `,
  popup_page: `
  <section class="main-wrapper">
    <section class="main-container market-controller">
    ${page_header} 
     
    </section>
  </section>`,
};

const getPage = () => {
  return pages[page_name];
};

// Popup Extension Page loader
const page_template = getPage();

setTimeout(() => {
  $("body").html(page_template);
  initFunctions();
}, 800);


