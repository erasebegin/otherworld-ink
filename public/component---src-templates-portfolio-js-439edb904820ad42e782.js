(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3nLz":function(t,e,n){"use strict";n("t+fG")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},DM8k:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("vOnD");function c(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  background: var(--main1);\n"]);return c=function(){return t},t}function u(t){var e=t.title,n=t.styleClass;return a.a.createElement(o,{className:"row"},a.a.createElement("div",{className:"col text-center py-4"},a.a.createElement("h1",{className:n},e)))}u.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var o=i.a.div(c())},QC1b:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("Wbzz");function c(t){var e=t.data,n=t.current,r=t.type,c=e.map((function(t){return t.node.slug})),u=c.indexOf(n),o=c[u-1],l=c[u+1];return a.a.createElement("div",{className:"pagination-btn-container"},u>0?a.a.createElement(i.Link,{to:"/"+r+"/"+o},a.a.createElement("button",{className:"btn btn-purple uppercase"},"Previous")):"",a.a.createElement(i.Link,{to:"/"+r},a.a.createElement("button",{className:"btn btn-purple uppercase"},"Return to ",r)),u<c.length?a.a.createElement(i.Link,{to:"/"+r+"/"+l},a.a.createElement("button",{className:"btn btn-purple uppercase"},"Next")):"")}},SGlo:function(t,e,n){"use strict";var r=n("rj/q"),a=n("N+BI").getWeak,i=n("1a8y"),c=n("BjK0"),u=n("xa9o"),o=n("yde8"),l=n("Wadk"),s=n("qDzq"),f=n("O1i0"),p=l(5),d=l(6),m=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},b=function(t,e){return p(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=b(this,t);if(e)return e[1]},has:function(t){return!!b(this,t)},set:function(t,e){var n=b(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var l=t((function(t,r){u(t,l,e,"_i"),t._t=e,t._i=m++,t._l=void 0,null!=r&&o(r,n,t[i],t)}));return r(l.prototype,{delete:function(t){if(!c(t))return!1;var n=a(t);return!0===n?v(f(this,e)).delete(t):n&&s(n,this._i)&&delete n[this._i]},has:function(t){if(!c(t))return!1;var n=a(t);return!0===n?v(f(this,e)).has(t):n&&s(n,this._i)}}),l},def:function(t,e,n){var r=a(i(e),!0);return!0===r?v(t).set(e,n):r[t._i]=n,t},ufstore:v}},X8hv:function(t,e,n){function r(t,e,n){return(r=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&i(a,n.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("xtjI"),n("Dq+y"),n("Ggvi"),n("rzGZ"),n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("8npG"),n("nWfQ"),n("nWfQ"),n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("xtjI"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var f=n("q1tI"),p=n("7ljp").mdx,d=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["scope","children"]),i=d(e),u=f.useMemo((function(){if(!n)return null;var t=l({React:f,mdx:p},i),e=Object.keys(t),a=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(c(e),[""+n])).apply(void 0,[{}].concat(c(a)))}),[n,e]);return f.createElement(u,l({},a))}},eMsz:function(t,e,n){"use strict";var r,a=n("emib"),i=n("Wadk")(0),c=n("IYdN"),u=n("N+BI"),o=n("k5Iv"),l=n("SGlo"),s=n("BjK0"),f=n("O1i0"),p=n("O1i0"),d=!a.ActiveXObject&&"ActiveXObject"in a,m=u.getWeak,v=Object.isExtensible,y=l.ufstore,b=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},h={get:function(t){if(s(t)){var e=m(t);return!0===e?y(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return l.def(f(this,"WeakMap"),t,e)}},g=t.exports=n("94Pd")("WeakMap",b,h,l,!0,!0);p&&d&&(o((r=l.getConstructor(b,"WeakMap")).prototype,h),u.NEED=!0,i(["delete","has","get","set"],(function(t){var e=g.prototype,n=e[t];c(e,t,(function(e,a){if(s(e)&&!v(e)){this._f||(this._f=new r);var i=this._f[t](e,a);return"set"==t?this:i}return n.call(this,e,a)}))})))},j4nm:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return b}));var r=n("q1tI"),a=n.n(r),i=n("9eSz"),c=n.n(i),u=n("X8hv"),o=n.n(u),l=n("7ljp"),s=n("vOnD"),f=n("Bl7J"),p=n("DM8k"),d=n("QC1b"),m=n("vrFN");function v(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  article {\n    p {\n      margin: 2em 0;\n      font-size: 1.2rem;\n    }\n  }\n"]);return v=function(){return t},t}e.default=function(t){var e=t.data,n=e.contentfulPortfolioEntry,r=n.title,i=n.slug,u=n.description,s=n.image;return a.a.createElement(f.a,null,a.a.createElement(m.a,{title:r}),a.a.createElement(y,{className:"container"},a.a.createElement(p.a,{title:r,styleClass:"display-4 text-capitalize mt-4"}),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-11 col-sm-8 col-lg-6 mx-auto text-center"},a.a.createElement(c.a,{fluid:s.fluid,className:"img-fluid"}),u?a.a.createElement(l.MDXProvider,null,a.a.createElement("article",{className:"text-muted text-left"},a.a.createElement(o.a,null,u.childMdx.body))):a.a.createElement("article",null," "))),a.a.createElement(d.a,{current:i,data:e.allPosts.edges,type:"portfolio"})))};var y=s.a.div(v()),b="120733789"},nWfQ:function(t,e,n){var r=n("P8UN"),a=n("nsRs"),i=n("nONw"),c=n("1a8y"),u=n("BjK0"),o=n("96qb"),l=n("16Xr"),s=(n("emib").Reflect||{}).construct,f=o((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),p=!o((function(){s((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(t,e){i(t),c(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!f)return s(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var o=n.prototype,d=a(u(o)?o:Object.prototype),m=Function.apply.call(t,d,e);return u(m)?m:d}})},"t+fG":function(t,e,n){var r=n("P8UN"),a=n("96qb"),i=n("ap2Z"),c=/"/g,u=function(t,e,n,r){var a=String(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),u+">"+a+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(u),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},zTTH:function(t,e,n){"use strict";var r=n("P8UN"),a=n("Wadk")(6),i="findIndex",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-templates-portfolio-js-439edb904820ad42e782.js.map