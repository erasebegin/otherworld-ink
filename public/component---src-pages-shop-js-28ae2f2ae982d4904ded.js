(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Jsqa:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),r=n.n(a);function i(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=n("dI71"),s=n("TOwV"),u=n("2mql"),d=n.n(u);function p(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var m=r.a.createContext();var f={initialChunks:{}};var h=function(e){return e};function g(e){var t=e.defaultResolveComponent,n=void 0===t?h:t,a=e.render,u=e.onLoad;function g(e,t){void 0===t&&(t={});var h=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function v(e){return t.cacheKey?t.cacheKey(e):h.resolve?h.resolve(e):null}function b(e,a,r){var i=t.resolveComponent?t.resolveComponent(e,a):n(e);if(t.resolveComponent&&!Object(s.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return d()(r,i,{preload:!0}),i}var w,x=function(e){function n(n){var a;return(a=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:v(n)},p(!n.__chunkExtractor||h.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(h.requireAsync(n).catch((function(){return null})),a.loadSync(),n.__chunkExtractor.addChunk(h.chunkName(n))),c(a)):(!1!==t.ssr&&(h.isReady&&h.isReady(n)||h.chunkName&&f.initialChunks[h.chunkName(n)])&&a.loadSync(),a)}Object(l.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=v(e);return o({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return v(this.props)||JSON.stringify(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=b(h.requireSync(this.props),this.props,E);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:h.resolve(this.props),chunkName:h.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=b(t,e.props,{Loadable:E});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,i(t,["__chunkExtractor","forwardedRef"])),a=this.getCache();return a||((a=h.requireAsync(n)).status="PENDING",this.setCache(a),a.then((function(){a.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:h.resolve(e.props),chunkName:h.chunkName(e.props),error:t?t.message:t}),a.status="REJECTED"}))),a},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,c=(e.__chunkExtractor,i(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,s=l.error,u=l.loading,d=l.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(s)throw s;var p=r||t.fallback||null;return u?p:a({fallback:p,result:d,options:t,props:o({},c,{ref:n})})},n}(r.a.Component),y=(w=x,function(e){return r.a.createElement(m.Consumer,null,(function(t){return r.a.createElement(w,Object.assign({__chunkExtractor:t},e))}))}),E=r.a.forwardRef((function(e,t){return r.a.createElement(y,Object.assign({forwardedRef:t},e))}));return E.preload=function(e){h.requireAsync(e)},E.load=function(e){return h.requireAsync(e)},E}return{loadable:g,lazy:function(e,t){return g(e,o({},t,{suspense:!0}))}}}var v=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.a.createElement(t,n)}}),b=v.loadable,w=v.lazy,x=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),y=x.loadable,E=x.lazy;var k=b;k.lib=y,w.lib=E;var N=k,C=n("Wbzz"),_=n("13J2"),z=n.n(_),S=N((function(){return n.e(24).then(n.t.bind(null,"1eu9",7))}));function O(e){var t=e.img,n=e.styleClass,a=e.title,i=e.children;return r.a.createElement(C.Link,{to:"/"},r.a.createElement(S,{className:n,fluid:t},r.a.createElement("h1",{className:"title text-white text-uppercase text-center display-4 font-weight-bold"},a),r.a.createElement("img",{src:z.a,className:"main-logo",alt:"main logo"}),i))}O.defaultProps={title:"default title",styleClass:"default-background"}},OXhd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("ma3e");function o(e){var t=e.id,n=e.title,a=(e.image,e.price),o=e.description,l=e.slug;return e.alt?r.a.createElement(c,{className:"snipcart-add-item is-size-3 is-size-4-mobile","data-item-id":t,"data-item-price":a,"data-item-url":"/"+l,"data-item-description":o,"data-item-name":n,alt:!0},"ADD TO CART ",r.a.createElement(i.b,null)):r.a.createElement(c,{className:"snipcart-add-item is-size-3 is-size-4-mobile","data-item-id":t,"data-item-price":a,"data-item-url":"/"+l,"data-item-description":o,"data-item-name":n,alt:!1},r.a.createElement(i.b,{size:".75em"}))}var c=n("vOnD").a.button.withConfig({displayName:"AddToCartButton__Button",componentId:"sc-1aee6yh-0"})(["padding:",";transition:200ms ease-in-out;background:",";color:",";border:none;font-size:1.5rem;&:hover{background:",";color:",";}"],(function(e){return e.alt?"0 .5em":"0 0.5em 0.2em 0.5em"}),(function(e){return e.alt?"var(--purple1)":"var(--pink)"}),(function(e){return e.alt,"var(--purple3)"}),(function(e){return e.alt,"var(--pink)"}),(function(e){return e.alt?"var(--purple3)":"var(--purple4)"}))},skbk:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("9eSz"),c=n.n(o),l=n("vOnD"),s=n("OXhd");function u(e){var t=e.data.node,n=t.id,a=t.title,o=t.price,l=t.images,u=t.slug;return r.a.createElement(d,{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/shop/"+u},r.a.createElement(c.a,{fluid:l[0].fluid,className:"product-image",alt:"a random image"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"title-container"},r.a.createElement(i.Link,{to:"/"+u},r.a.createElement("p",{className:"card-title"},a))),r.a.createElement("div",{className:"content"})),r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"price"},"$",o),r.a.createElement(s.a,{id:n,title:a,slug:u,price:o}))))}var d=l.a.div.withConfig({displayName:"ProductCard__Card",componentId:"sc-9uzvij-0"})([".card{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);min-width:80vw;display:flex;flex-direction:column;height:100%;margin-bottom:2em;background:rgb(35,35,35) !important;}.footer{display:flex;justify-content:space-between;align-items:center;margin-top:auto;width:100%;padding:1em 2em;border-top:2px solid var(--purple1);background:rgb(40,40,40);p{width:100%;font-weight:400;font-size:1.3rem;color:#8d8d8d;}}.title-container{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1em;margin:1em 0;.card-title{font-size:1.6rem;color:var(--purple3);&:hover{text-decoration:underline;text-decoration-color:var(--purple1) !important;}}}.product-image{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 30px 0 rgba(0,0,0,0.19);max-width:92%;height:300px;margin:0 auto;margin-top:-3.5%;margin-bottom:0.5em;object-fit:cover;}"]);function p(e){var t=e.data;console.log("card data: ",t);var n=t.node,a=n.title,o=n.price,l=n.images,u=n.slug,d=n.id,p=n.caption;return r.a.createElement(m,null,r.a.createElement("div",{className:"product-image-container"},p?r.a.createElement("p",{className:"image-caption"},p):"",r.a.createElement(i.Link,{to:"/shop/"+u},r.a.createElement(c.a,{fluid:l[0].fluid,className:"product-image"}))),r.a.createElement("div",{className:"product-info"},r.a.createElement("div",{className:"top-wrapper"},r.a.createElement(i.Link,{to:"/shop/"+u},r.a.createElement("h1",null,a)),r.a.createElement("hr",null)),r.a.createElement("div",{className:"price-button-container"},r.a.createElement("p",{className:"price"},"$",o," "),r.a.createElement(s.a,{id:d,title:a,slug:u,price:o}))))}var m=l.a.div.withConfig({displayName:"ProductCardLarge__Card",componentId:"p3h6ke-0"})(["display:flex;margin:auto;margin:2em 0;width:500px;height:400px;-webkit-box-shadow:0px 14px 32px 0px rgba(0,0,0,0.15);-moz-box-shadow:0px 14px 32px 0px rgba(0,0,0,0.15);box-shadow:0px 14px 32px 0px rgba(0,0,0,0.15);background:rgb(35,35,35);transition:ease-in-out 200ms;&:hover{transform:translate(2px,1px);box-shadow:0px 7px 16px 0px rgba(0,0,0,0.15);filter:brightness(110%);transition:ease-in-out 200ms;}.product-image-container{padding:0;max-width:50%;button{position:absolute;z-index:1;}.product-image{width:250px;height:100%;margin:auto;}.image-caption{position:absolute;background:var(--purple1);width:auto;z-index:100;padding:0.5em;color:var(--purple3);text-transform:uppercase;}}.product-info{padding:1.5em;padding-top:1em;border-top:2px solid var(--purple1);display:flex;flex-direction:column;justify-content:space-between;h1{font-size:1.5rem;&:hover{text-decoration:underline;text-decoration-color:var(--purple1) !important;}}hr{margin-top:1em;}p{color:#8d8d8d;font-size:15px;font-weight:lighter;overflow:hidden;}}.price-button-container{display:flex;align-items:center;width:100%;margin-top:1em;margin-left:0;.price{font-weight:400;font-size:1.3rem;margin:auto;width:100%;}}"]);function f(e){var t=e.items,n=e.isMobile,a=e.limit;if(t){var i=t.slice(0,a);return r.a.createElement(h,null,r.a.createElement("div",{className:"card-container"},i.map((function(e,t){return!0===n?r.a.createElement(u,{data:e,key:t}):r.a.createElement("div",null,r.a.createElement(p,{data:e,key:t}))}))))}return r.a.createElement(r.a.Fragment,null)}var h=l.a.section.withConfig({displayName:"ProductList__Container",componentId:"sc-8corh4-0"})(["min-height:100vh;.card-container{display:flex;flex-direction:column;align-items:center;justify-content:space-between;max-width:1200px;margin:2em auto;padding:3em;@media (min-width:800px){flex-flow:row wrap;align-content:left;}}"]);f.defaultProps={limit:5,cardClass:"columns is-desktop is-multiline",columnSize:"is-half"}},vg2q:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return l})),n.d(t,"query",(function(){return s}));var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("Jsqa"),c=n("skbk");function l(t){var n=t.data,l=Object(a.useState)(!0),s=l[0],u=l[1];Object(a.useEffect)((function(){window.innerWidth<=800?u(!0):u(!1)})),"undefined"==typeof window&&(e.window={}),window.onresize=function(){window.innerWidth<=800?u(!0):u(!1)};var d=n.headerImage.edges[0].node,p=d.shop.fluid,m=d.shopSmall?d.shopSmall.fluid:null;return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(o.a,{img:s&&m?m:p,title:" ",styleClass:"secondary-background"}),r.a.createElement(c.a,{items:n.products.edges,isMobile:s,limit:20})))}var s="593488266"}.call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-shop-js-28ae2f2ae982d4904ded.js.map