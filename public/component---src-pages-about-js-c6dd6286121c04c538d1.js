(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3XHS":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",(function(){return v}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("9eSz"),c=n.n(i),l=n("X8hv"),u=n.n(l),s=n("7ljp"),f=n("vOnD"),d=n("Bl7J"),p=n("Jsqa"),h=n("DM8k"),m=n("vrFN"),y=f.a.div.withConfig({displayName:"about__Container",componentId:"cdoy03-0"})(["max-width:700px;margin:auto;display:flex;flex-direction:column;align-items:center;padding:2em;.main-image{width:100%;max-width:500px;}article{margin:2em 0;}"]),v="4025579251";t.default=function(t){var n=t.data,i=n.aboutInfo.edges[0].node,l=i.title,f=i.body,v=i.image,b=Object(r.useState)(!0),g=b[0],w=b[1];Object(r.useEffect)((function(){window.innerWidth<=800?w(!0):w(!1)})),"undefined"==typeof window&&(e.window={}),window.onresize=function(){window.innerWidth<=800?w(!0):w(!1)};var E=n.headerImage.edges[0].node,O=E.about.fluid,x=E.aboutSmall?E.aboutSmall.fluid:null;return a.a.createElement(d.a,null,a.a.createElement(m.a,{title:"About"}),a.a.createElement(p.a,{img:g&&x?x:O,title:" ",styleClass:"secondary-background"}),a.a.createElement(y,null,l?a.a.createElement(h.a,{title:l}):a.a.createElement(a.a.Fragment,null),a.a.createElement(c.a,{fluid:v.fluid,className:"main-image"}),f?a.a.createElement(s.MDXProvider,null,a.a.createElement("article",{className:"text-muted text-left"},a.a.createElement(u.a,null,f.childMdx.body))):a.a.createElement("article",null," "),a.a.createElement("div",{className:"about-btn-container"},a.a.createElement(o.Link,{to:"/contact"},a.a.createElement("button",{className:"btn text-uppercase btn-purple"},"contact me")))))}}.call(this,n("yLpj"))},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DM8k:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("vOnD");function i(e){var t=e.title,n=e.styleClass;return a.a.createElement(c,{className:"row"},a.a.createElement("div",{className:"col text-center py-4"},a.a.createElement("h1",{className:n},t)))}i.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var c=o.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1ofbjab-0"})(["background:var(--main1);"])},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Jsqa:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("q1tI"),a=n.n(r),o=n("13J2"),i=n.n(o);function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=n("dI71"),f=n("TOwV"),d=n("2mql"),p=n.n(d);function h(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var m=a.a.createContext();var y={initialChunks:{}};var v=function(e){return e};function b(e){var t=e.defaultResolveComponent,n=void 0===t?v:t,r=e.render,o=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),d={};function v(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):null}function b(e,r,a){var o=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(f.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return p()(a,o,{preload:!0}),o}var g,w=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:v(n)},h(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),u(r)):(!1!==t.ssr&&(i.isReady&&i.isReady(n)||i.chunkName&&y.initialChunks[i.chunkName(n)])&&r.loadSync(),r)}Object(s.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=v(e);return l({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var a=n.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return v(this.props)||JSON.stringify(this.props)},a.getCache=function(){return d[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=b(i.requireSync(this.props),this.props,O);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=b(t,e.props,{Loadable:O});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,c(t,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=i.requireAsync(n)).status="PENDING",this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e.props),chunkName:i.chunkName(e.props),error:t?t.message:t}),r.status="REJECTED"}))),r},a.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,c(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,u=i.error,s=i.loading,f=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(u)throw u;var d=a||t.fallback||null;return s?d:r({fallback:d,result:f,options:t,props:l({},o,{ref:n})})},n}(a.a.Component),E=(g=w,function(e){return a.a.createElement(m.Consumer,null,(function(t){return a.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),O=a.a.forwardRef((function(e,t){return a.a.createElement(E,Object.assign({forwardedRef:t},e))}));return O.preload=function(e){i.requireAsync(e)},O.load=function(e){return i.requireAsync(e)},O}return{loadable:i,lazy:function(e,t){return i(e,l({},t,{suspense:!0}))}}}var g=b({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),w=g.loadable,E=g.lazy,O=b({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),x=O.loadable,k=O.lazy;var C=w;C.lib=x,E.lib=k;var S=C((function(){return n.e(24).then(n.t.bind(null,"1eu9",7))}));function j(e){var t=e.img,n=e.styleClass,r=e.title,o=e.children;return a.a.createElement(S,{className:n,fluid:t},a.a.createElement("h1",{className:"title text-white text-uppercase text-center display-4 font-weight-bold"},r),a.a.createElement("img",{src:i.a,className:"main-logo",alt:"main logo"}),o)}j.defaultProps={title:"default title",styleClass:"default-background"}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),i=n("8OQS");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=i(e,["scope","children"]),c=f(t),d=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:s},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return u.createElement(d,l({},o))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function o(t,n,i){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-pages-about-js-c6dd6286121c04c538d1.js.map