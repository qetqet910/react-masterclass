(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var c,a,r,o,i=t(0),s=t.n(i),l=t(19),d=t.n(l),b=t(4),p=t(12),u=t(2),h=t(7),j=t.n(h),f=t(10),m=t(8),x=t(3),O=t(1),g=x.c.h1(c||(c=Object(b.a)(["\n    display: inline;\n    color: ",";\n    font-weight: bold;\n    font-size: calc(1vw + 1.5em);\n"])),(function(n){return n.theme.accentrColor})),v=x.c.div(a||(a=Object(b.a)(["\n"]))),w=x.c.header(r||(r=Object(b.a)(["\n    width: 100%;\n    height: calc(1vw + 2.6em);\n    display: flex;\n    justify-content: center;\n    alignitem-: center;\n    background-color: white;\n    color: black;\n"]))),k=x.c.main(o||(o=Object(b.a)(["\n    width: 100%;\n    padding: 20px 0px\n"])));var y,C,q,S,z,L,E,I,J=function(){var n=Object(u.g)().coinId,e=Object(u.f)().state,t=Object(i.useState)(),c=Object(m.a)(t,2),a=c[0],r=c[1],o=Object(i.useState)(),s=Object(m.a)(o,2),l=s[0],d=s[1];return Object(i.useEffect)((function(){Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinpaprika.com/v1/coins/".concat(n));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,r(t),console.log(t);case 7:case"end":return e.stop()}}),e)})))(),Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinpaprika.com/v1/tickers/".concat(n));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,d(t);case 6:case"end":return e.stop()}}),e)})))()}),[n]),console.log(a,l),Object(O.jsxs)(v,{children:[Object(O.jsx)(w,{children:Object(O.jsx)(g,{children:(null===e||void 0===e?void 0:e.name)||"Loading..."})}),Object(O.jsx)(k,{})]})},M=x.c.h1(y||(y=Object(b.a)(["\n    display: inline;\n    color: ",";\n    font-weight: bold;\n    font-size: calc(1vw + 1.5em);\n"])),(function(n){return n.theme.accentrColor})),P=x.c.div(C||(C=Object(b.a)(["\n\n"]))),B=x.c.header(q||(q=Object(b.a)(["\n    width: 100%;\n    height: calc(1vw + 2.6em);\n    display: flex;\n    justify-content: center;\n    alignitem-: center;\n    background-color: white;\n    color: black;\n"]))),F=x.c.main(S||(S=Object(b.a)(["\n    max-width: 600px;\n    margin 0 auto;\n    width: 100%;\n    padding: 20px 0px\n"]))),H=x.c.ul(z||(z=Object(b.a)(["\n    width: 100%;\n"]))),T=x.c.li(L||(L=Object(b.a)(["\n    display; blcok;\n    padding: 20px;\n    border-radius: 10px;\n    margin: 20px 20px;\n    background: white;\n    a{\n        display: flex;\n        item-align: center;\n        font-weight: bold;\n        font-size: calc(1vw + .75em);\n        &:hover{\n            color: "," \n        }\n        img{\n            margin-right: 16px;\n        }\n    }\n"])),(function(n){return n.theme.accentrColor})),A=x.c.img(E||(E=Object(b.a)(["\n    width: 25px;\n    height: 25px;\n"]))),D=x.c.div(I||(I=Object(b.a)(["\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-weight: bold;\n    font-size: calc(1vw + 4em);\n    text-align: center;\n"])));var G=function(){var n=Object(i.useState)([]),e=Object(m.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(!1),r=Object(m.a)(a,2),o=r[0],s=r[1];return Object(i.useEffect)((function(){Object(f.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.coinpaprika.com/v1/coins");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,c(t.slice(0,10)),s(!0);case 8:case"end":return n.stop()}}),n)})))()}),[]),Object(O.jsxs)(P,{children:[Object(O.jsx)(B,{children:Object(O.jsx)(M,{children:"Coins"})}),Object(O.jsx)(F,{children:o?Object(O.jsx)(H,{children:t.map((function(n){return Object(O.jsx)(T,{children:Object(O.jsxs)(p.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(A,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))}):Object(O.jsx)(D,{children:"Loading..."})})]})};var K,N=function(){return Object(O.jsx)(p.a,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/:coinId",children:Object(O.jsx)(J,{})}),Object(O.jsx)(u.a,{path:"/",children:Object(O.jsx)(G,{})})]})})},Q=Object(x.b)(K||(K=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\npadding: 0;\nborder: 0;\nfont - size: 100 %;\nfont: inherit;\nvertical - align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line - height: 1;\n}\nol, ul {\n  list - style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote: before, blockquote: after,\n  q: before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border - collapse: collapse;\n  border - spacing: 0;\n}\n*{\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  text-decoration: none;\n  box-style: border;\n}\nbody{\n  font-family: 'Source Sans Pro', sans-serif;\n  background: ",";\n  color: ",";\n  overflow-x: hidden;\n}\na{\n  color: black;\n}\n"])),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.textColor}));var R=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Q,{}),Object(O.jsx)(N,{})]})};d.a.render(Object(O.jsx)(x.a,{theme:{textColor:"#f5f6fa",backgroundColor:"#2f3640",accentrColor:"#487eb0"},children:Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(R,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.747c27aa.chunk.js.map