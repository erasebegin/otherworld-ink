(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{DM8k:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),l=a.n(n),c=a("vOnD");function r(e){var t=e.title,a=e.styleClass;return l.a.createElement(m,{className:"row"},l.a.createElement("div",{className:"col text-center py-4"},l.a.createElement("h1",{className:a},t)))}r.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var m=c.a.div.withConfig({displayName:"Title__TitleContainer",componentId:"sc-1ofbjab-0"})(["background:var(--main1);"])},G8Xr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),l=a.n(n),c=a("LYQs"),r=a("v+x6"),m=a("Bl7J"),i=a("DM8k");function s(){var e=Object(n.useContext)(c.a).cart;return l.a.createElement(m.a,null,l.a.createElement(o,null,l.a.createElement(i.a,{title:"Purchase Complete"}),l.a.createElement("div",{className:"item-list"},e.map((function(e){return l.a.createElement(r.a,{key:e.id,item:e})}))),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"text-muted text-center"},"Thank you for your purchase"),l.a.createElement("p",{className:"text-muted text-center"},l.a.createElement("span",{role:"img","aria-label":"love emoji"},"🥰")),l.a.createElement("p",{className:"text-muted text-center p2"},"A confirmation email is on it's way."))))}var o=a("vOnD").a.div.withConfig({displayName:"purchase-complete__MessageContainer",componentId:"qdmcl2-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:3em;p{margin:1em 0;font-size:2rem;}.p2{font-size:1.5rem;}.item-list{margin:3em 0;min-width:70vw;padding:1em 0;background:var(--purple2);}"])},"v+x6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),c=a("LYQs"),r=a("X13+");function m(e){var t=e.count,a=e.id,m=Object(n.useContext)(c.a),i=m.increment,s=m.decrement,o=m.removeItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0 "},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return s(a)}},"-"),l.a.createElement("button",{className:"btn btn-light mx-1"},t),l.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return i(a)}},"+")))),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},l.a.createElement("button",{className:"remove-button",onClick:function(){return o(a)}},l.a.createElement(r.a,null))))}function i(e){var t=e.item,a=t.id,r=t.total,i=t.image,o=t.price,u=t.title,d=t.count,p=Object(n.useContext)(c.a).purchaseComplete;return l.a.createElement(s,{className:"row my-1 text-capitalize text-center"},l.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},l.a.createElement("img",{src:i.fields.file.url,style:{width:"5rem",heigth:"5rem"},className:"img-fluid",alt:""})),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},l.a.createElement("span",{className:"d-lg-none"},"product :")," ",u),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},l.a.createElement("strong",null,l.a.createElement("span",{className:"d-lg-none"},"price :")," $",o)),p?"":l.a.createElement(m,{count:d,id:a}),l.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},l.a.createElement("strong",null,"item total : $",r," ")))}var s=a("vOnD").a.div.withConfig({displayName:"CartItem__List",componentId:"sc-1cq7vrx-0"})(["color:var(--purple3);.remove-button{font-size:1.3rem;&:hover{filter:brightness(0.9);cursor:pointer;}}@media(max-width:900px){.spaced{margin:.5em 0;}}"])}}]);
//# sourceMappingURL=component---src-pages-purchase-complete-js-0c589b508a483c955e21.js.map