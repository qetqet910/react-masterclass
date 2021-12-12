(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var c=t(0),o=t.n(c),i=t(26),r=t.n(i),a=t(8),s=t(18),l=t(6),d=t(7),b="https://api.coinpaprika.com/v1/";function h(){return fetch("".concat(b,"coins")).then((function(n){return n.json()}))}var j=t(15),p=t(41),x=t.n(p),u=t(1);var f=function(n){var e=n.coinId,t=Object(j.useQuery)(["CoinChart",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1192320;return fetch("".concat(b,"coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),c=t.isLoading,o=t.data;return Object(u.jsx)("div",{children:c?"Loading chart...":Object(u.jsx)(x.a,{type:"candlestick",series:[{name:"Price",data:null===o||void 0===o?void 0:o.map((function(n){return{x:n.time_close,y:[n.open.toFixed(4),n.high.toFixed(4),n.low.toFixed(4),n.close.toFixed(4)]}}))}],options:{chart:{type:"candlestick",height:600,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!0},stroke:{curve:"smooth",width:3},yaxis:{show:!0,labels:{show:!0,style:{colors:"white",fontSize:"12px"}}},xaxis:{axisBorder:{show:!0},axisTicks:{show:!0},labels:{show:!0,style:{colors:"white",fontSize:"12px"}},type:"datetime"},plotOptions:{candlestick:{colors:{upward:"#3C90EB",downward:"#DF7D46"}}}}})})};var m,O,g,v,w,y,k,C,I,S,q,z=function(){return Object(u.jsx)("h1",{children:"Price"})},L=t(27),P=d.c.h1(m||(m=Object(a.a)(["\n    display: inline;\n    color: ",";\n    font-weight: bold;\n    font-size: calc(1vw + 1.5em);\n"])),(function(n){return n.theme.accentrColor})),F=d.c.div(O||(O=Object(a.a)(["\n"]))),Q=d.c.header(g||(g=Object(a.a)(["\n    width: 100%;\n    height: calc(1vw + 2.6em);\n    display: flex;\n    justify-content: center;\n    align-item: center;\n    background: ",";\n    box-shadow: 0px -10px 30px ",";\n    color: black;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),D=d.c.main(v||(v=Object(a.a)(["\n    max-width: 600px;\n    margin 0 auto;\n    width: 100%;\n    padding: 20px 0px;\n    .apexcharts-tooltip {\n        background: #fff;\n        color: orange;\n    }\n"]))),M=d.c.div(w||(w=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 6px;\n  box-shadow: 0px 0px 4px ",";\n  margin: 20px;\n"])),(function(n){return n.theme.blockColor}),(function(n){return n.theme.textColor})),A=d.c.div(y||(y=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),B=d.c.div(k||(k=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto 0px;\n  span:first-child {\n    font-size: 32px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n  a{\n    color: white;\n    calc(1vw + 1em);\n    font-weight: bold;\n    transition: all .25s;\n    text-transform: uppercase;\n    &:hover{\n        color: ","\n    }\n  }\n"])),(function(n){return n.theme.accentrColor})),T=d.c.p(C||(C=Object(a.a)(["\n  display: block;\n  margin: 20px;\n  padding: 16px 20px;\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0px 0px 4px ",";\n  "])),(function(n){return n.theme.blockColor}),(function(n){return n.theme.textColor})),_=d.c.div(I||(I=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 20px;\n  gap: 10px;\n"]))),E=d.c.span(S||(S=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: calc(1vw + .5em);\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  font-weight: bold;\n  box-shadow: 0px 0px 4px ",";\n  a {\n    display: block;\n    color: ","\n}\n"])),(function(n){return n.theme.blockColor}),(function(n){return n.theme.textColor}),(function(n){return n.isActive?n.theme.accentrColor:n.theme.textColor})),H=d.c.div(q||(q=Object(a.a)(["\n  margin: 20px\n"])));var J,R,U,$,G,K,N,V,W=function(){var n=Object(l.g)().coinId,e=Object(l.f)().state,t=Object(l.h)("/:coinId/Chart"),c=Object(l.h)("/:coinId/Price"),o=Object(j.useQuery)(["CoinInfo",n],(function(){return e=n,fetch("".concat(b,"coins/").concat(e)).then((function(n){return n.json()}));var e})),i=o.isLoading,r=o.data,a=Object(j.useQuery)(["CoinPrice",n],(function(){return e=n,fetch("".concat(b,"tickers/").concat(e)).then((function(n){return n.json()}));var e}),{refetchInterval:1e3}),d=a.isLoading,h=a.data,p=i||d;return Object(u.jsxs)(F,{children:[Object(u.jsx)(L.b,{children:Object(u.jsx)("title",{children:null===r||void 0===r?void 0:r.name})}),Object(u.jsx)(Q,{children:Object(u.jsx)(P,{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===r||void 0===r?void 0:r.name})}),Object(u.jsxs)(D,{children:[Object(u.jsxs)(M,{children:[Object(u.jsx)(B,{children:Object(u.jsxs)("span",{children:[null===r||void 0===r?void 0:r.name," Information"]})}),Object(u.jsx)(B,{children:Object(u.jsx)(s.b,{to:"/",children:"Home"})})]}),Object(u.jsxs)(M,{children:[Object(u.jsxs)(A,{children:[Object(u.jsx)("span",{children:"Rank"}),Object(u.jsx)("span",{children:null===r||void 0===r?void 0:r.rank})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("span",{children:"Symbol"}),Object(u.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.symbol]})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("span",{children:"Price"}),Object(u.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price})]})]}),Object(u.jsx)(T,{children:null===r||void 0===r?void 0:r.description}),Object(u.jsxs)(M,{children:[Object(u.jsxs)(A,{children:[Object(u.jsx)("span",{children:"Total Suply"}),Object(u.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(u.jsxs)(A,{children:[Object(u.jsx)("span",{children:"Max Supply"}),Object(u.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(u.jsxs)(_,{children:[Object(u.jsx)(E,{isActive:null!==t,children:Object(u.jsx)(s.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(u.jsx)(E,{isActive:null!==c,children:Object(u.jsx)(s.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(u.jsx)(H,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:coinId/Chart",children:Object(u.jsx)(f,{coinId:n})}),Object(u.jsx)(l.a,{path:"/:coinId/Price",children:Object(u.jsx)(z,{})})]})})]})]})},X=d.c.h1(J||(J=Object(a.a)(["\n    display: inline;\n    color: ",";\n    font-weight: bold;\n    font-size: calc(1vw + 1.5em);\n"])),(function(n){return n.theme.accentrColor})),Y=d.c.div(R||(R=Object(a.a)(["\n\n"]))),Z=d.c.header(U||(U=Object(a.a)(["\n    width: 100%;\n    height: calc(1vw + 2.6em);\n    display: flex;\n    justify-content: center;\n    align-item: center;\n    background: ",";\n    box-shadow: 0px -10px 30px ",";\n    color: black;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),nn=d.c.main($||($=Object(a.a)(["\n    max-width: 600px;\n    margin 0 auto;\n    width: 100%;\n    padding: 20px 0px;\n"]))),en=d.c.ul(G||(G=Object(a.a)(["\n    width: 100%;\n"]))),tn=d.c.li(K||(K=Object(a.a)(["\n    display; blcok;\n    padding: 20px;\n    border-radius: 10px;\n    margin: 20px 20px;\n    background: white;\n    a{\n        display: flex;\n        align-items: center;\n        font-weight: bold;\n        font-size: calc(1vw + .75em);\n        transition: all .25s;\n        &:hover{\n            color: "," \n        }\n        img{\n            margin-right: 16px;\n        }\n    }\n"])),(function(n){return n.theme.accentrColor})),cn=d.c.img(N||(N=Object(a.a)(["\n    width: 34px;\n    height: 34px;\n"]))),on=d.c.div(V||(V=Object(a.a)(["\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-weight: bold;\n    font-size: calc(1vw + 4em);\n    text-align: center;\n"])));var rn=function(){var n=Object(j.useQuery)("FCoins",h),e=n.isLoading,t=n.data;return console.log(t),Object(u.jsxs)(Y,{children:[Object(u.jsx)(L.a,{children:Object(u.jsx)("title",{children:"\ub2e4\uc6b4\ube44\ud2b8"})}),Object(u.jsx)(Z,{children:Object(u.jsx)(X,{children:"\ub2e4\uc6b4\ube44\ud2b8"})}),Object(u.jsx)(nn,{children:e?Object(u.jsx)(on,{children:"Loading..."}):Object(u.jsx)(en,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(u.jsx)(tn,{children:Object(u.jsxs)(s.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(u.jsx)(cn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})})]})};var an,sn=function(){return Object(u.jsx)(s.a,{basename:"/react-masterclass",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:coinId",children:Object(u.jsx)(W,{})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(rn,{})})]})})},ln=t(48),dn=Object(d.b)(an||(an=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\npadding: 0;\nborder: 0;\nfont - size: 100 %;\nfont: inherit;\nvertical - align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line - height: 1;\n}\nol, ul {\n  list - style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote: before, blockquote: after,\n  q: before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border - collapse: collapse;\n  border - spacing: 0;\n}\n*{\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  text-decoration: none;\n  box-style: border;\n  ::-webkit-scrollbar{\n      display: none;\n  }\n}\nbody{\n  font-family: 'Source Sans Pro', sans-serif;\n  background: ",";\n  color: ",";\n  overflow-x: hidden;\n}\na{\n  color: black;\n}\n"])),(function(n){return n.theme.backgroundColor}),(function(n){return n.theme.textColor}));var bn=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(dn,{}),Object(u.jsx)(sn,{}),Object(u.jsx)(ln.ReactQueryDevtools,{initialIsOpen:!0})]})},hn=new j.QueryClient;r.a.render(Object(u.jsx)(d.a,{theme:{textColor:"#f5f6fa",backgroundColor:"#2f3640",accentrColor:"#487eb0",blockColor:"rgba(0, 0, 0, .5)"},children:Object(u.jsx)(j.QueryClientProvider,{client:hn,children:Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(bn,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.52180122.chunk.js.map