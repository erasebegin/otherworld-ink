(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3XHS":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return v}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),c=n("9eSz"),i=n.n(c),l=n("X8hv"),u=n.n(l),s=n("7ljp"),p=n("vOnD"),f=n("Bl7J"),m=n("Jsqa"),d=n("DM8k"),y=n("vrFN"),b=p.a.div.withConfig({displayName:"about__Container",componentId:"sc-190nmfb-0"})(["max-width:700px;margin:auto;display:flex;flex-direction:column;align-items:center;padding:2em;.main-image{width:100%;max-width:500px;}article{margin:2em 0;}"]),v="4025579251";e.default=function(t){var e=t.data.aboutInfo.edges[0].node,n=e.title,r=e.body,c=e.image;return a.a.createElement(f.a,null,a.a.createElement(y.a,{title:"About"}),a.a.createElement(m.a,{img:smallImage||largeImage,title:" ",styleClass:"secondary-background"}),a.a.createElement(b,null,n?a.a.createElement(d.a,{title:n}):a.a.createElement(a.a.Fragment,null),a.a.createElement(i.a,{fluid:c.fluid,className:"main-image"}),r?a.a.createElement(s.MDXProvider,null,a.a.createElement("article",{className:"text-muted text-left"},a.a.createElement(u.a,null,r.childMdx.body))):a.a.createElement("article",null," "),a.a.createElement("div",{className:"about-btn-container"},a.a.createElement(o.Link,{to:"/contact"},a.a.createElement("button",{className:"btn text-uppercase btn-purple"},"contact me")))))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DM8k:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("vOnD");function c(t){var e=t.title,n=t.styleClass;return a.a.createElement(i,{className:"row"},a.a.createElement("div",{className:"col text-center py-4"},a.a.createElement("h1",{className:n},e)))}c.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var i=o.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"x73k2l-0"})(["background:var(--main1);"])},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||c()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),c=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("q1tI"),s=n("7ljp").mdx,p=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,o=c(t,["scope","children"]),i=p(e),f=u.useMemo((function(){if(!n)return null;var t=l({React:u,mdx:s},i),e=Object.keys(t),o=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,e]);return u.createElement(f,l({},o))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),a=n("b48C");function o(e,n,c){return a()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o}}]);
//# sourceMappingURL=component---src-pages-about-js-b36c086a3102bed9ff97.js.map