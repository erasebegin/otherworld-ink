(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+ar0":function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperties:n("YmeT")})},DM8k:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r);function u(e){var t=e.title,n=e.styleClass;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col text-center my-4"},o.a.createElement("h1",{className:n},t)))}u.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"}},QC1b:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),u=n("Wbzz");function i(e){var t=e.data,n=e.current,r=e.type,i=t.map((function(e){return e.node.slug})),c=i.indexOf(n),a=i[c-1],l=i[c+1];return o.a.createElement("div",{className:"pagination-btn-container"},c>0?o.a.createElement(u.Link,{to:"/"+r+"/"+a},o.a.createElement("button",{className:"btn btn-purple uppercase"},"Previous")):"",o.a.createElement(u.Link,{to:"/"+r},o.a.createElement("button",{className:"btn btn-purple uppercase"},"Return to ",r)),c<i.length?o.a.createElement(u.Link,{to:"/"+r+"/"+l},o.a.createElement("button",{className:"btn btn-purple uppercase"},"Next")):"")}function c(e){var t=e.data.map((function(e){return e.node.slug})),n=t.indexOf(e.current),r=t[n+1],i=t[0];return t[n]===t[t.length-1]?o.a.createElement(u.Link,{to:"/"+e.type+"/"+i},e.children):o.a.createElement(u.Link,{to:"/"+e.type+"/"+r},e.children)}},R8uD:function(e,t,n){"use strict";(function(e){n("U6Bt"),n("AqHK"),n("DrhF"),n("cxuS"),n("gu/5"),n("eoYm"),n("pS08"),n("+ar0"),n("m210"),n("rzGZ"),n("Dq+y"),n("Ggvi"),n("sC2a"),n("4DPX"),n("sc67"),n("HQhv"),n("q8oJ"),n("C9fy"),n("8npG"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var a,l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,u,i,a="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==a&&globalThis)||l(typeof window==a&&window)||l(typeof self==a&&self)||l(typeof n==a&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,h="".split,g=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,b=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},I=f.document,D=T(I)&&T(I.createElement),N=function(e){return D?I.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,P={f:p?A:function(e,t){if(e=b(e),t=O(t,!0),L)try{return A(e,t)}catch(n){}if(_(e,t))return v(!y.f.call(e,t),e[t])}},w=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,R={f:p?j:function(e,t,n){if(w(e),t=O(t,!0),w(n),L)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},H=function(e,t){try{M(f,e,t)}catch(n){f[e]=t}return t},G=r((function(e){var t=f["__core-js_shared__"]||H("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=G("native-function-to-string",Function.toString),x=f.WeakMap,C="function"==typeof x&&/native code/.test(k.call(x)),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},U=G("keys"),F=function(e){return U[e]||(U[e]=K(e))},Q={},q=f.WeakMap;if(C){var z=new q,V=z.get,W=z.has,J=z.set;o=function(e,t){return J.call(z,e,t),t},u=function(e){return V.call(z,e)||{}},i=function(e){return W.call(z,e)}}else{var X=F("state");Q[X]=!0,o=function(e,t){return M(e,X,t),t},u=function(e){return _(e,X)?e[X]:{}},i=function(e){return _(e,X)}}var Z={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(k).split("toString");G("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,t,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:H(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,ae=Math.min,le=function(e){return function(t,n,r){var o,u,i=b(t),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,u=[];for(n in r)!_(Q,n)&&_(r,n)&&u.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~se(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ve={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ye.f(w(e)),n=ve.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=me(t),r=R.f,o=P.f,u=0;u<n.length;u++){var i=n[u];_(e,i)||r(e,i,o(t,i))}},ge=/#|\.prototype\./,be=function(e,t){var n=Oe[Te(e)];return n==_e||n!=Se&&("function"==typeof t?s(t):!!t)},Te=be.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Oe=be.data={},Se=be.NATIVE="N",_e=be.POLYFILL="P",Ie=be,De=P.f,Ne=function(e,t){var n,r,o,u,i,c=e.target,a=e.global,l=e.stat;if(n=a?f:l?f[c]||H(c,{}):(f[c]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(i=De(n,r))&&i.value:n[r],!Ie(a?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;he(u,o)}(e.sham||o&&o.sham)&&M(u,"sham",!0),$(n,r,u,e)}},Le=Object.keys||function(e){return pe(e,de)},Ae=y.f,Pe=function(e){return function(t){for(var n,r=b(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],p&&!Ae.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},we={entries:Pe(!0),values:Pe(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return we(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=f.Symbol,Me=G("wks"),He=p?Object.defineProperties:function(e,t){w(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)R.f(e,n=r[u++],t[n]);return e},Ge=ne("document","documentElement"),ke=F("IE_PROTO"),xe=function(){},Ce=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;n--;)delete Ce.prototype[de[n]];return Ce()},Be=Object.create||function(e,t){var n;return null!==e?(xe.prototype=w(e),n=new xe,xe.prototype=null,n[ke]=e):n=Ce(),void 0===t?n:He(n,t)};Q[ke]=!0;var Ye,Ke=Me[Ye="unscopables"]||(Me[Ye]=je&&Re[Ye]||(je?Re:K)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[Ke]&&M(Ue,Ke,Be(null));var Fe,Qe=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return Qe(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ke][Fe]=!0;var qe,ze,Ve,We=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",We(Je,f["Array"].prototype[qe],ze);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Ve||(Ve={}));var Xe,Ze=Ve;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(a=l)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var f,s,p=l.BLOCKS,d=(l.CONTAINERS,l.INLINES),E=l.MARKS,y=(l.TOP_LEVEL_BLOCKS,l.VOID_BLOCKS,l.helpers);function v(e,t){return e.map((function(e,n){return r=m(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function m(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=v(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var h=((f={})[p.DOCUMENT]=function(e,t){return t},f[p.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},f[p.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},f[p.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},f[p.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},f[p.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},f[p.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},f[p.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},f[p.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},f[p.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},f[p.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},f[p.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},f[p.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},f[p.HR]=function(){return u.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return b(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return b(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return b(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},f),g=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function b(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?m(e,{renderNode:i({},h,t.renderNode),renderMark:i({},g,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},bMDA:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),o=n.n(r),u=n("R8uD"),i=n("vbKG"),c=n("Bl7J"),a=n("DM8k"),l=n("QC1b"),f=n("vrFN");function s(e){var t,n=e.data,r=n.contentfulBlogPost,s=r.createdAt,p=r.title,d=r.slug,E=r.body,y={renderNode:{"embedded-asset-block":function(e){var t=e.data.target.fields.title["en-US"],n=e.data.target.fields.file["en-US"].url;return o.a.createElement("img",{alt:t,src:n})}},renderMark:(t={},t[i.MARKS.CODE]=function(e){return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})},t)};return o.a.createElement(c.a,null,o.a.createElement(f.a,{title:p}),o.a.createElement("div",{className:"container"},o.a.createElement(a.a,{title:p,styleClass:"display-4 text-capitalize mt-5"}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-11 col-sm-8 col-lg-10 mx-auto text-center"},o.a.createElement("div",{className:"mb-4 p-3"},o.a.createElement("p",{className:"lead text-muted text-center"},s)),o.a.createElement("div",{className:"text-muted article-body"},Object(u.documentToReactComponents)(E.json,y)))),o.a.createElement(l.b,{current:d,data:n.allPosts.edges,type:"blog"})))}var p="3274481286"},cxuS:function(e,t,n){var r=n("P8UN"),o=n("ys0W")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},vbKG:function(e,t,n){"use strict";(function(e){n("DrhF"),n("cxuS"),n("gu/5"),n("eoYm"),n("pS08"),n("+ar0"),n("m210"),n("rzGZ"),n("Dq+y"),n("Ggvi"),n("sC2a"),n("4DPX"),n("sc67"),n("HQhv"),n("q8oJ"),n("C9fy"),n("8npG"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var u,i,c,a="object",l=function(e){return e&&e.Math==Math&&e},f=l(typeof globalThis==a&&globalThis)||l(typeof window==a&&window)||l(typeof self==a&&self)||l(typeof r==a&&r)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,h="".split,g=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,b=function(e){return g(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},O=function(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},I=f.document,D=T(I)&&T(I.createElement),N=function(e){return D?I.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,P={f:p?A:function(e,t){if(e=b(e),t=O(t,!0),L)try{return A(e,t)}catch(n){}if(_(e,t))return v(!y.f.call(e,t),e[t])}},w=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},j=Object.defineProperty,R={f:p?j:function(e,t,n){if(w(e),t=O(t,!0),w(n),L)try{return j(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,v(1,n))}:function(e,t,n){return e[t]=n,e},H=function(e,t){try{M(f,e,t)}catch(n){f[e]=t}return t},G=o((function(e){var t=f["__core-js_shared__"]||H("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=G("native-function-to-string",Function.toString),x=f.WeakMap,C="function"==typeof x&&/native code/.test(k.call(x)),B=0,Y=Math.random(),K=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+Y).toString(36)},U=G("keys"),F=function(e){return U[e]||(U[e]=K(e))},Q={},q=f.WeakMap;if(C){var z=new q,V=z.get,W=z.has,J=z.set;u=function(e,t){return J.call(z,e,t),t},i=function(e){return V.call(z,e)||{}},c=function(e){return W.call(z,e)}}else{var X=F("state");Q[X]=!0,u=function(e,t){return M(e,X,t),t},i=function(e){return _(e,X)?e[X]:{}},c=function(e){return _(e,X)}}var Z={set:u,get:i,has:c,enforce:function(e){return c(e)?i(e):u(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=o((function(e){var t=Z.get,n=Z.enforce,r=String(k).split("toString");G("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,t,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:H(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,ae=Math.min,le=function(e){return function(t,n,r){var o,u,i=b(t),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},fe={includes:le(!0),indexOf:le(!1)},se=fe.indexOf,pe=function(e,t){var n,r=b(e),o=0,u=[];for(n in r)!_(Q,n)&&_(r,n)&&u.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~se(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},ve={f:Object.getOwnPropertySymbols},me=ne("Reflect","ownKeys")||function(e){var t=ye.f(w(e)),n=ve.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=me(t),r=R.f,o=P.f,u=0;u<n.length;u++){var i=n[u];_(e,i)||r(e,i,o(t,i))}},ge=/#|\.prototype\./,be=function(e,t){var n=Oe[Te(e)];return n==_e||n!=Se&&("function"==typeof t?s(t):!!t)},Te=be.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Oe=be.data={},Se=be.NATIVE="N",_e=be.POLYFILL="P",Ie=be,De=P.f,Ne=function(e,t){var n,r,o,u,i,c=e.target,a=e.global,l=e.stat;if(n=a?f:l?f[c]||H(c,{}):(f[c]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(i=De(n,r))&&i.value:n[r],!Ie(a?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;he(u,o)}(e.sham||o&&o.sham)&&M(u,"sham",!0),$(n,r,u,e)}},Le=Object.keys||function(e){return pe(e,de)},Ae=y.f,Pe=function(e){return function(t){for(var n,r=b(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],p&&!Ae.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},we={entries:Pe(!0),values:Pe(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return we(e)}});ee.Object.values;var je=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=f.Symbol,Me=G("wks"),He=p?Object.defineProperties:function(e,t){w(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)R.f(e,n=r[u++],t[n]);return e},Ge=ne("document","documentElement"),ke=F("IE_PROTO"),xe=function(){},Ce=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;n--;)delete Ce.prototype[de[n]];return Ce()},Be=Object.create||function(e,t){var n;return null!==e?(xe.prototype=w(e),n=new xe,xe.prototype=null,n[ke]=e):n=Ce(),void 0===t?n:He(n,t)};Q[ke]=!0;var Ye,Ke=Me[Ye="unscopables"]||(Me[Ye]=je&&Re[Ye]||(je?Re:K)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[Ke]&&M(Ue,Ke,Be(null));var Fe,Qe=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return Qe(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ke][Fe]=!0;var qe,ze,Ve,We=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",We(Je,f["Array"].prototype[qe],ze);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Ve||(Ve={}));var Xe,Ze=Ve;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}).call(this,n("yLpj"))},ys0W:function(e,t,n){var r=n("QPJK"),o=n("2mBY"),u=n("5SQf"),i=n("BnbX").f;e.exports=function(e){return function(t){for(var n,c=u(t),a=o(c),l=a.length,f=0,s=[];l>f;)n=a[f++],r&&!i.call(c,n)||s.push(e?[n,c[n]]:c[n]);return s}}}}]);
//# sourceMappingURL=component---src-templates-blog-entry-js-999984144482691cce06.js.map