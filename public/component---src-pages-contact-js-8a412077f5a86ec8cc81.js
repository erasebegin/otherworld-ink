(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Cuy+":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("Bl7J"),i=n("Jsqa"),c=n("uX36"),l=n("vrFN"),s="1478523322";t.default=function(t){var n=t.data,s=Object(a.useState)(!0),u=s[0],d=s[1];Object(a.useEffect)((function(){window.innerWidth<=800?d(!0):d(!1)})),"undefined"==typeof window&&(e.window={}),window.onresize=function(){window.innerWidth<=800?d(!0):d(!1)};var f=n.headerImage.edges[0].node,m=f.contact.fluid,h=f.contactSmall?f.contactSmall.fluid:null;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Contact"}),r.a.createElement(i.a,{img:u&&h?h:m,title:" ",styleClass:"secondary-background"}),r.a.createElement(c.a,null))}}.call(this,n("yLpj"))},DM8k:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("vOnD");function i(e){var t=e.title,n=e.styleClass;return r.a.createElement(c,{className:"row"},r.a.createElement("div",{className:"col text-center py-4"},r.a.createElement("h1",{className:n},t)))}i.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var c=o.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"x73k2l-0"})(["background:var(--main1);"])},Jsqa:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n("q1tI"),r=n.n(a),o=n("13J2"),i=n.n(o);function c(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=n("dI71"),d=n("TOwV"),f=n("2mql"),m=n.n(f);function h(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var p=r.a.createContext();var v={initialChunks:{}};var y=function(e){return e};function g(e){var t=e.defaultResolveComponent,n=void 0===t?y:t,a=e.render,o=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),f={};function y(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):null}function g(e,a,r){var o=t.resolveComponent?t.resolveComponent(e,a):n(e);if(t.resolveComponent&&!Object(d.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return m()(r,o,{preload:!0}),o}var E,w=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},h(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){return null})),a.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),s(a)):(!1!==t.ssr&&(i.isReady&&i.isReady(n)||i.chunkName&&v.initialChunks[i.chunkName(n)])&&a.loadSync(),a)}Object(u.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=y(e);return l({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return y(this.props)||JSON.stringify(this.props)},r.getCache=function(){return f[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),f[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=g(i.requireSync(this.props),this.props,C);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=g(t,e.props,{Loadable:C});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,c(t,["__chunkExtractor","forwardedRef"])),a=this.getCache();return a||((a=i.requireAsync(n)).status="PENDING",this.setCache(a),a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e.props),chunkName:i.chunkName(e.props),error:t?t.message:t}),a.status="REJECTED"}))),a},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,o=(e.__chunkExtractor,c(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,s=i.error,u=i.loading,d=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(s)throw s;var f=r||t.fallback||null;return u?f:a({fallback:f,result:d,options:t,props:l({},o,{ref:n})})},n}(r.a.Component),b=(E=w,function(e){return r.a.createElement(p.Consumer,null,(function(t){return r.a.createElement(E,Object.assign({__chunkExtractor:t},e))}))}),C=r.a.forwardRef((function(e,t){return r.a.createElement(b,Object.assign({forwardedRef:t},e))}));return C.preload=function(e){i.requireAsync(e)},C.load=function(e){return i.requireAsync(e)},C}return{loadable:i,lazy:function(e,t){return i(e,l({},t,{suspense:!0}))}}}var E=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.a.createElement(t,n)}}),w=E.loadable,b=E.lazy,C=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),N=C.loadable,k=C.lazy;var x=w;x.lib=N,b.lib=k;var S=x((function(){return n.e(24).then(n.t.bind(null,"1eu9",7))}));function _(e){var t=e.img,n=e.styleClass,a=e.title,o=e.children;return r.a.createElement(S,{className:n,fluid:t},r.a.createElement("h1",{className:"title text-white text-uppercase text-center display-4 font-weight-bold"},a),r.a.createElement("img",{src:i.a,className:"main-logo",alt:"main logo"}),o)}_.defaultProps={title:"default title",styleClass:"default-background"}},uX36:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("DM8k");function i(){return r.a.createElement("section",{className:"contact py-5"},r.a.createElement(o.a,{title:"Contact me"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 col-sm-8 col-md-6 mx-auto"},r.a.createElement("form",{action:"https://formspree.io/mknrpjpl",method:"POST"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"name",placeholder:"Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Email"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",id:"email",placeholder:"Email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",rows:"5",placeholder:"Message",className:"form-control"})),r.a.createElement(c,{type:"submit",className:"btn btn-purple btn-block text-capitalize my-5"},"Submit")))))}var c=n("vOnD").a.button.withConfig({displayName:"Contact__Button",componentId:"sc-1vtqp3h-0"})(["max-width:80%;margin:auto;@media(min-width:700px){max-width:50%;}"])}}]);
//# sourceMappingURL=component---src-pages-contact-js-8a412077f5a86ec8cc81.js.map