(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DM8k:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),o=n("vOnD");function i(e){var t=e.title,n=e.styleClass;return r.a.createElement(s,{className:"row"},r.a.createElement("div",{className:"col text-center py-4"},r.a.createElement("h1",{className:n},t)))}i.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var s=o.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1ofbjab-0"})(["background:var(--main1);"])},Jsqa:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),r=n.n(a);function o(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=n("dI71"),l=n("TOwV"),u=n("2mql"),d=n.n(u);function f(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var m=r.a.createContext();var h={initialChunks:{}};var p=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?p:t,a=e.render,u=e.onLoad;function v(e,t){void 0===t&&(t={});var p=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):p.resolve?p.resolve(e):null}function g(e,a,r){var o=t.resolveComponent?t.resolveComponent(e,a):n(e);if(t.resolveComponent&&!Object(l.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return d()(r,o,{preload:!0}),o}var E,w=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},f(!n.__chunkExtractor||p.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(p.requireAsync(n).catch((function(){return null})),a.loadSync(),n.__chunkExtractor.addChunk(p.chunkName(n))),s(a)):(!1!==t.ssr&&(p.isReady&&p.isReady(n)||p.chunkName&&h.initialChunks[p.chunkName(n)])&&a.loadSync(),a)}Object(c.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=y(e);return i({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return y(this.props)||JSON.stringify(this.props)},r.getCache=function(){return v[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=g(p.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:p.resolve(this.props),chunkName:p.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=g(t,e.props,{Loadable:k});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,o(t,["__chunkExtractor","forwardedRef"])),a=this.getCache();return a||((a=p.requireAsync(n)).status="PENDING",this.setCache(a),a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:p.resolve(e.props),chunkName:p.chunkName(e.props),error:t?t.message:t}),a.status="REJECTED"}))),a},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,s=(e.__chunkExtractor,o(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,l=c.error,u=c.loading,d=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var f=r||t.fallback||null;return u?f:a({fallback:f,result:d,options:t,props:i({},s,{ref:n})})},n}(r.a.Component),b=(E=w,function(e){return r.a.createElement(m.Consumer,null,(function(t){return r.a.createElement(E,Object.assign({__chunkExtractor:t},e))}))}),k=r.a.forwardRef((function(e,t){return r.a.createElement(b,Object.assign({forwardedRef:t},e))}));return k.preload=function(e){p.requireAsync(e)},k.load=function(e){return p.requireAsync(e)},k}return{loadable:v,lazy:function(e,t){return v(e,i({},t,{suspense:!0}))}}}var y=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.a.createElement(t,n)}}),g=y.loadable,E=y.lazy,w=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),b=w.loadable,k=w.lazy;var N=g;N.lib=b,E.lib=k;var C=N,x=n("Wbzz"),S=n("13J2"),R=n.n(S),_=C((function(){return n.e(25).then(n.t.bind(null,"1eu9",7))}));function O(e){var t=e.img,n=e.styleClass,a=e.title,o=e.children;return r.a.createElement(x.Link,{to:"/"},r.a.createElement(_,{className:n,fluid:t},r.a.createElement("h1",{className:"title text-white text-uppercase text-center display-4 font-weight-bold"},a),r.a.createElement("img",{src:R.a,className:"main-logo",alt:"main logo"}),o))}O.defaultProps={title:"default title",styleClass:"default-background"}},vx99:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",(function(){return f}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("9eSz"),s=n.n(i),c=n("DM8k"),l=n("Bl7J"),u=n("Jsqa"),d=n("vrFN"),f="2699933940";t.default=function(t){var n=t.data,i=Object(a.useState)(!0),f=i[0],m=i[1];Object(a.useEffect)((function(){window.innerWidth<=800?m(!0):m(!1)})),"undefined"==typeof window&&(e.window={}),window.onresize=function(){window.innerWidth<=800?m(!0):m(!1)};var h=n.headerImage.edges[0].node,p=h.news.fluid,v=h.newsSmall?h.newsSmall.fluid:null;return r.a.createElement(l.a,null,r.a.createElement(d.a,{title:"Blog"}),r.a.createElement(u.a,{img:f&&v?v:p,title:" ",styleClass:"secondary-background"}),r.a.createElement("section",{className:"portfolio-preview py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{title:"news"}),r.a.createElement("div",{className:"row"},n.blog.edges.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"col-11 my-3 d-flex mx-auto card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 col-sm-3 card-img img-responsive"},r.a.createElement(o.Link,{to:"/blog/"+t.slug},r.a.createElement(s.a,{fixed:t.image.fixed}))),r.a.createElement("div",{className:"col-md-8 col-sm-9 flex-grow-1"},r.a.createElement("div",{className:"card-body"},r.a.createElement(o.Link,{to:"/blog/"+t.slug,className:"card-title news-card-title gatsby-link"},r.a.createElement("h4",{className:"mb-0"},t.title)),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",{className:"mb-0 text-muted"},t.createdAt),r.a.createElement("p",{className:"text-muted"},t.description.description))))))}))))))}}.call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-blog-js-8a194cfc77e5d782e3cd.js.map