(this["webpackJsonptest-project-advox"]=this["webpackJsonptest-project-advox"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),c=n.n(i),s=n(59),o=n(37);s.a.use(o.e).init({resources:{en:{translation:{"Sort by name":"Sort by name","Sort by date":"Sort by date","Sort by id":"Sort by id","Type album title":"Type album title","Add to List":"Add to List"}},ua:{translation:{"Sort by name":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e","Sort by date":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e \u0434\u0430\u0442\u0456","Sort by id":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e id","Type album title":"\u0414\u043e\u0434\u0430\u0442\u0456 \u043d\u0430\u0437\u0432\u0443 \u0430\u043b\u044c\u0431\u043e\u043c\u0443","Add to List":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u043b\u044c\u0431\u043e\u043c"}}},lng:"en",interpolation:{escapeValue:!1}});s.a,n(95),n(96);var l=n(7),u=n(145),d=n(80),j=n.n(d),p=n(78),b=n.n(p),O=n(77),v=n.n(O),m=n(79),f=n.n(m),_=n(81),y=n.n(_),x=n(47),h=n.n(x),g=n(2),S=function(e){var t=e.items,n=void 0===t?[]:t,a=e.renderItem,r=e.isGrid?h.a.grid:h.a.list;return Object(g.jsx)("div",{className:"".concat(h.a.wrapper," ").concat(r),children:n.map(a)})},w=n(139),I=n(30),C=n.n(I),L=n(66),N=n.n(L),k=function(e){var t=e.name,n=e.id,a=e.date,r=e.children,i=e.isGridView,c=N()(a).format("YYYY/MM/DD hh:mm:ss"),s=i?C.a.gridView:C.a.listView;return Object(g.jsxs)("div",{className:"".concat(C.a.listItem," ").concat(s),children:[Object(g.jsx)("span",{className:C.a.name,children:t}),Object(g.jsx)("span",{className:C.a.date,children:c}),r,Object(g.jsx)(w.a,{title:n,placement:"top",children:Object(g.jsxs)("span",{className:C.a.idBlock,children:["id: ",n]})})]})},T=n(144),R=n(33),V=n.n(R),E="en",F="ua",A=function(){var e=Object(T.a)().i18n,t=function(t){e.changeLanguage(t)};return Object(g.jsxs)("div",{className:V.a.wrapper,children:[Object(g.jsx)("div",{className:"".concat(V.a.langItem," ").concat(e.language===E?V.a.activeLang:""),onClick:function(){return t(E)},children:"EN"}),Object(g.jsx)("div",{className:"".concat(V.a.langItem," ").concat(e.language===F?V.a.activeLang:""),onClick:function(){return t(F)},children:"UA"})]})},M=n(140),B=n(143),D=n(57),G=n.n(D),J=function(e){var t=e.inputValue,n=e.onInputChange,a=e.onSubmit,r=Object(T.a)().t;return Object(g.jsxs)("div",{className:G.a.wrapper,children:[Object(g.jsx)(M.a,{value:t,onChange:n,placeholder:r("Type album title"),className:G.a.input}),Object(g.jsx)(B.a,{variant:"contained",onClick:a,children:r("Add to List")})]})},Y=n(76),z=n.n(Y),W=n(75),H=n.n(W),K=n(74),P=n.n(K),U="ADD_ITEM",q="REMOVE_ITEM",X="ADD_FAVORITE_MARK",Z="REMOVE_FAVORITE_MARK",Q="id",$="name",ee="date",te=n(73),ne=n.n(te),ae=function(e){var t=e.activeSortType,n=e.isReverseOrder,a=e.handleSort,r=Object(T.a)().t,i=function(e){return t!==e?Object(g.jsx)(P.a,{}):t===e&&n?Object(g.jsx)(H.a,{}):Object(g.jsx)(z.a,{})};return Object(g.jsxs)("div",{className:ne.a.wrapper,children:[Object(g.jsx)(B.a,{endIcon:i($),variant:t===$||t===$&&n?"contained":"outlined",onClick:function(){return a($)},children:r("Sort by name")}),Object(g.jsx)(B.a,{endIcon:i(ee),variant:t===ee||t===ee&&n?"contained":"outlined",onClick:function(){return a(ee)},children:r("Sort by date")}),Object(g.jsx)(B.a,{endIcon:i(Q),variant:t===Q||t===Q&&n?"contained":"outlined",onClick:function(){return a(Q)},children:r("Sort by id")})]})},re=n(142),ie=n(38),ce=n(12);function se(e,t){var n=t.type,a=t.payload;switch(n){case U:return[].concat(Object(ce.a)(e),[a]);case q:return e.filter((function(e){return e.id!==a}));case X:return e.map((function(e){return e.id===a?Object(ie.a)(Object(ie.a)({},e),{},{isFavorite:!0}):e}));case Z:return e.map((function(e){return e.id===a?Object(ie.a)(Object(ie.a)({},e),{},{isFavorite:!1}):e}));default:throw new Error}}var oe=n(58),le=n.n(oe),ue=function(e,t){return Object(ce.a)(e).sort((function(e,n){var a,r,i,c,s,o,l;return(null===(a=e[t])||void 0===a||null===(r=a.toLowerCase)||void 0===r?void 0:r.call(a))<(null===(i=n[t])||void 0===i||null===(c=i.toLowerCase)||void 0===c?void 0:c.call(i))?-1:(null===(s=e[t])||void 0===s||null===(o=s.toLowerCase)||void 0===o?void 0:o.call(s))>(null===(l=n[t])||void 0===l?void 0:l.toLowerCase())?1:0}))},de=function(e,t){var n=t;switch(t){case $:case Q:return ue(e,n);case ee:return function(e,t){return Object(ce.a)(e).sort((function(e,n){return e[t]-n[t]}))}(e,n);default:return e}},je=[],pe=function(){var e=Object(a.useReducer)(se,je,(function(){return JSON.parse(localStorage.getItem("albumsList"))||je})),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],o=c[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),O=p[0],m=p[1],_=function(e){var t=e.list,n=Object(a.useState)((function(){return localStorage.getItem("sortType")})),r=Object(l.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("isReverseOrder")||!1)})),o=Object(l.a)(s,2),u=o[0],d=o[1],j=Object(a.useMemo)((function(){var e=de(t,i);return u?Object(ce.a)(e).reverse():e}),[t,i,u]);Object(a.useEffect)((function(){localStorage.setItem("sortType",i),localStorage.setItem("isReverseOrder",u)}),[i,u]);var p=function(){c(null)};return{sortedList:j,activeSortType:i,isReverseOrder:u,setReverseOrder:d,handleSort:function(e){if(i===e&&u)return d(!1),void p();i!==e||u?c(e):d(!0)},resetSort:p}}({list:n}),x=_.handleSort,h=_.sortedList,w=_.activeSortType,I=_.isReverseOrder;Object(a.useEffect)((function(){localStorage.setItem("albumsList",JSON.stringify(n))}),[n]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(A,{}),Object(g.jsx)(J,{inputValue:s,onInputChange:function(e){var t=e.target.value;o(t)},onSubmit:function(){if(s){var e={id:Object(re.a)(),name:s,date:(new Date).getTime(),isFavorite:null};r({type:U,payload:e}),o("")}}})]}),Object(g.jsxs)("div",{className:le.a.controlsWrapper,children:[Object(g.jsx)(ae,{activeSortType:w,isReverseOrder:I,handleSort:x}),Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){m((function(e){return!e}))},className:le.a.viewButton,children:O?Object(g.jsx)(v.a,{}):Object(g.jsx)(b.a,{})})]}),Object(g.jsx)(S,{isGrid:O,items:h,renderItem:function(e){var t=e.name,n=e.id,a=e.isFavorite,i=e.date;return Object(g.jsxs)(k,{id:n,name:t,isGridView:O,isFavorite:a,date:i,children:[a?Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:Z,payload:e})}(n)},children:Object(g.jsx)(f.a,{})}):Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:X,payload:e})}(n)},children:Object(g.jsx)(j.a,{})}),Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:q,payload:e})}(n)},children:Object(g.jsx)(y.a,{})})]},n)}})]})};var be=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(pe,{})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(be,{})}),document.getElementById("root")),Oe()},30:function(e,t,n){e.exports={listItem:"styles_listItem__1zGhe",idBlock:"styles_idBlock__2rxzn",listView:"styles_listView__27Oy7",gridView:"styles_gridView__34vRo",name:"styles_name__2RwqG",date:"styles_date__2vM0y"}},33:function(e,t,n){e.exports={wrapper:"styles_wrapper__130XB",langItem:"styles_langItem__25FFn",activeLang:"styles_activeLang__2V_Gz"}},47:function(e,t,n){e.exports={wrapper:"styles_wrapper__2x_oI",grid:"styles_grid__oGlph",list:"styles_list__ZNx60"}},57:function(e,t,n){e.exports={wrapper:"styles_wrapper__U5-sl",input:"styles_input__2dH71"}},58:function(e,t,n){e.exports={listItem:"styles_listItem__2oJ6M",idBlock:"styles_idBlock__J7ntp",viewButton:"styles_viewButton__3ld_j",controlsWrapper:"styles_controlsWrapper__2H2Ck"}},73:function(e,t,n){e.exports={wrapper:"styles_wrapper__2a57y"}},95:function(e,t,n){},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.12c590f0.chunk.js.map