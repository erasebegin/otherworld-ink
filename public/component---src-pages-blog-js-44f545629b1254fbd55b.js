(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DM8k:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),c=a("vOnD");function i(e){var t=e.title,a=e.styleClass;return l.a.createElement(s,{className:"row"},l.a.createElement("div",{className:"col text-center py-4"},l.a.createElement("h1",{className:a},t)))}i.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var s=c.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"x73k2l-0"})(["background:var(--main1);"])},vx99:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"query",(function(){return u}));var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("9eSz"),s=a.n(i),r=a("DM8k"),m=a("Bl7J"),d=a("Jsqa"),o=a("vrFN"),u="2699933940";t.default=function(t){var a=t.data,i=Object(n.useState)(!0),u=i[0],w=i[1];Object(n.useEffect)((function(){window.innerWidth<=800?w(!0):w(!1)})),"undefined"==typeof window&&(e.window={}),window.onresize=function(){window.innerWidth<=800?w(!0):w(!1)};var f=a.headerImage.edges[0].node,p=f.news.fluid,v=f.newsSmall?f.newsSmall.fluid:null;return l.a.createElement(m.a,null,l.a.createElement(o.a,{title:"Blog"}),l.a.createElement(d.a,{img:u&&v?v:p,title:" ",styleClass:"secondary-background"}),l.a.createElement("section",{className:"portfolio-preview py-5"},l.a.createElement("div",{className:"container"},l.a.createElement(r.a,{title:"news"}),l.a.createElement("div",{className:"row"},a.blog.edges.map((function(e){var t=e.node;return l.a.createElement("div",{key:t.id,className:"col-11 my-3 d-flex mx-auto card"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4 col-sm-3 card-img img-responsive"},l.a.createElement(c.Link,{to:"/blog/"+t.slug},l.a.createElement(s.a,{fixed:t.image.fixed}))),l.a.createElement("div",{className:"col-md-8 col-sm-9 flex-grow-1"},l.a.createElement("div",{className:"card-body"},l.a.createElement(c.Link,{to:"/blog/"+t.slug,className:"card-title news-card-title gatsby-link"},l.a.createElement("h4",{className:"mb-0"},t.title)),l.a.createElement("div",{className:"card-text"},l.a.createElement("p",{className:"mb-0 text-muted"},t.createdAt),l.a.createElement("p",{className:"text-muted"},t.description.description))))))}))))))}}.call(this,a("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-blog-js-44f545629b1254fbd55b.js.map