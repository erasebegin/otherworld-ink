(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{DM8k:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("vOnD");function c(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  background: var(--main1);\n"]);return c=function(){return e},e}function i(e){var t=e.title,n=e.styleClass;return r.a.createElement(m,{className:"row"},r.a.createElement("div",{className:"col text-center py-4"},r.a.createElement("h1",{className:n},t)))}i.defaultProps={title:"default title",styleClass:"display-4 text-capitalize main-page-title"};var m=l.a.div(c())},G8Xr:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("q1tI"),r=n.n(a),l=n("LYQs"),c=n("v+x6"),i=n("Bl7J"),m=n("DM8k");function o(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 3em;\n\n    p {\n        margin: 1em 0;\n        font-size: 2rem;\n        /* color: var(--main2) */\n    }\n\n    .p2 {\n        font-size: 1.5rem;\n    }\n\n    .item-list {\n        margin: 3em 0;\n        min-width: 70vw;\n        padding: 1em 0;\n        background: var(--purple2);\n    }\n\n"]);return o=function(){return e},e}function s(){var e=Object(a.useContext)(l.a).cart;return r.a.createElement(i.a,null,r.a.createElement(u,null,r.a.createElement(m.a,{title:"Purchase Complete"}),r.a.createElement("div",{className:"item-list"},e.map((function(e){return r.a.createElement(c.a,{key:e.id,item:e})}))),r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-muted text-center"},"Thank you for your purchase"),r.a.createElement("p",{className:"text-muted text-center"},r.a.createElement("span",{role:"img","aria-label":"love emoji"},"🥰")),r.a.createElement("p",{className:"text-muted text-center p2"},"A confirmation email is on it's way."))))}var u=n("vOnD").a.div(o())},"v+x6":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),l=n("LYQs"),c=n("X13+");function i(e){var t=e.count,n=e.id,i=Object(a.useContext)(l.a),m=i.increment,o=i.decrement,s=i.removeItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0 "},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return o(n)}},"-"),r.a.createElement("button",{className:"btn btn-light mx-1"},t),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return m(n)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("button",{className:"remove-button",onClick:function(){return s(n)}},r.a.createElement(c.a,null))))}function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    color: var(--purple3);\n\n    .remove-button{\n        font-size: 1.3rem;\n    &:hover {\n        filter: brightness(0.9);\n        cursor: pointer;\n    }\n}\n\n@media(max-width: 900px){\n    .spaced {\n        margin: .5em 0;\n    }\n}\n\n"]);return m=function(){return e},e}function o(e){var t=e.item,n=t.id,c=t.total,m=t.image,o=t.price,u=t.title,d=t.count,v=Object(a.useContext)(l.a).purchaseComplete;return r.a.createElement(s,{className:"row my-1 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:m.fields.file.url,style:{width:"5rem",heigth:"5rem"},className:"img-fluid",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},r.a.createElement("span",{className:"d-lg-none"},"product :")," ",u),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},r.a.createElement("strong",null,r.a.createElement("span",{className:"d-lg-none"},"price :")," $",o)),v?"":r.a.createElement(i,{count:d,id:n}),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 spaced"},r.a.createElement("strong",null,"item total : $",c," ")))}var s=n("vOnD").a.div(m())}}]);
//# sourceMappingURL=component---src-pages-purchase-complete-js-d0637c1d43705acd39d5.js.map