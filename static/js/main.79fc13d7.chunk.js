(this["webpackJsonptest-project-advox"]=this["webpackJsonptest-project-advox"]||[]).push([[0],{28:function(e,t,n){e.exports={listItem:"styles_listItem__1zGhe",idBlock:"styles_idBlock__2rxzn",listView:"styles_listView__27Oy7",gridView:"styles_gridView__34vRo",name:"styles_name__2RwqG",date:"styles_date__2vM0y"}},30:function(e,t,n){e.exports={wrapper:"styles_wrapper__130XB",langItem:"styles_langItem__25FFn",activeLang:"styles_activeLang__2V_Gz"}},43:function(e,t,n){e.exports={wrapper:"styles_wrapper__2x_oI",grid:"styles_grid__oGlph",list:"styles_list__ZNx60"}},51:function(e,t,n){e.exports={wrapper:"styles_wrapper__U5-sl",input:"styles_input__2dH71"}},54:function(e,t,n){e.exports={listItem:"styles_listItem__2oJ6M",idBlock:"styles_idBlock__J7ntp",viewButton:"styles_viewButton__3ld_j",controlsWrapper:"styles_controlsWrapper__2H2Ck"}},67:function(e,t,n){e.exports={wrapper:"styles_wrapper__2a57y"}},85:function(e,t,n){},86:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(56),c=n.n(i),s=n(42),o=n(34);s.a.use(o.e).init({resources:{en:{translation:{"Sort by name":"Sort by name","Sort by date":"Sort by date","Sort by id":"Sort by id","Type album title":"Type album title","Add to List":"Add to List"}},ua:{translation:{"Sort by name":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e","Sort by date":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e \u0434\u0430\u0442\u0456","Sort by id":"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043f\u043e id","Type album title":"\u0414\u043e\u0434\u0430\u0442\u0456 \u043d\u0430\u0437\u0432\u0443 \u0430\u043b\u044c\u0431\u043e\u043c\u0443","Add to List":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u043b\u044c\u0431\u043e\u043c"}}},lng:"en",interpolation:{escapeValue:!1}});s.a,n(85),n(86);var l=n(8),u=n(127),d=n(74),j=n.n(d),p=n(72),b=n.n(p),O=n(71),v=n.n(O),m=n(73),f=n.n(m),_=n(75),y=n.n(_),x=n(43),h=n.n(x),g=n(1),S=function(e){var t=e.items,n=void 0===t?[]:t,a=e.renderItem,r=e.isGrid?h.a.grid:h.a.list;return Object(g.jsx)("div",{className:"".concat(h.a.wrapper," ").concat(r),children:n.map(a)})},w=n(28),I=n.n(w),C=n(62),L=n.n(C),N=function(e){var t=e.name,n=e.id,a=e.date,r=e.children,i=e.isGridView,c=L()(a).format("YYYY/MM/DD hh:mm:ss"),s=i?I.a.gridView:I.a.listView;return Object(g.jsxs)("div",{className:"".concat(I.a.listItem," ").concat(s),children:[Object(g.jsx)("span",{className:I.a.name,children:t}),Object(g.jsx)("span",{className:I.a.date,children:c}),r,Object(g.jsxs)("span",{className:I.a.idBlock,children:["id: ",n]})]})},k=n(126),T=n(30),R=n.n(T),V=function(){var e=Object(k.a)().i18n,t=function(t){e.changeLanguage(t)};return Object(g.jsxs)("div",{className:R.a.wrapper,children:[Object(g.jsx)("div",{className:"".concat(R.a.langItem," ").concat("en"===e.language?R.a.activeLang:""),onClick:function(){return t("en")},children:"EN"}),Object(g.jsx)("div",{className:"".concat(R.a.langItem," ").concat("ua"===e.language?R.a.activeLang:""),onClick:function(){return t("ua")},children:"UA"})]})},E=n(121),F=n(125),A=n(51),M=n.n(A),B=function(e){var t=e.inputValue,n=e.onInputChange,a=e.onSubmit,r=Object(k.a)().t;return Object(g.jsxs)("div",{className:M.a.wrapper,children:[Object(g.jsx)(E.a,{value:t,onChange:n,placeholder:r("Type album title"),className:M.a.input}),Object(g.jsx)(F.a,{variant:"contained",onClick:a,children:r("Add to List")})]})},D=n(70),G=n.n(D),J=n(69),Y=n.n(J),z=n(68),W=n.n(z),H="ADD_ITEM",K="REMOVE_ITEM",P="ADD_FAVORITE_MARK",U="REMOVE_FAVORITE_MARK",q="id",X="name",Z="date",Q=n(67),$=n.n(Q),ee=function(e){var t=e.activeSortType,n=e.isReverseOrder,a=e.handleSort,r=Object(k.a)().t,i=function(e){return t!==e?Object(g.jsx)(W.a,{}):t===e&&n?Object(g.jsx)(Y.a,{}):Object(g.jsx)(G.a,{})};return Object(g.jsxs)("div",{className:$.a.wrapper,children:[Object(g.jsx)(F.a,{endIcon:i(X),variant:t===X||t===X&&n?"contained":"outlined",onClick:function(){return a(X)},children:r("Sort by name")}),Object(g.jsx)(F.a,{endIcon:i(Z),variant:t===Z||t===Z&&n?"contained":"outlined",onClick:function(){return a(Z)},children:r("Sort by date")}),Object(g.jsx)(F.a,{endIcon:i(q),variant:t===q||t===q&&n?"contained":"outlined",onClick:function(){return a(q)},children:r("Sort by id")})]})},te=n(123),ne=n(35),ae=n(11);function re(e,t){var n=t.type,a=t.payload;switch(n){case H:return[].concat(Object(ae.a)(e),[a]);case K:return e.filter((function(e){return e.id!==a}));case P:return e.map((function(e){return e.id===a?Object(ne.a)(Object(ne.a)({},e),{},{isFavorite:!0}):e}));case U:return e.map((function(e){return e.id===a?Object(ne.a)(Object(ne.a)({},e),{},{isFavorite:!1}):e}));default:throw new Error}}var ie=n(54),ce=n.n(ie),se=function(e,t){return Object(ae.a)(e).sort((function(e,n){var a,r,i,c,s,o,l;return(null===(a=e[t])||void 0===a||null===(r=a.toLowerCase)||void 0===r?void 0:r.call(a))<(null===(i=n[t])||void 0===i||null===(c=i.toLowerCase)||void 0===c?void 0:c.call(i))?-1:(null===(s=e[t])||void 0===s||null===(o=s.toLowerCase)||void 0===o?void 0:o.call(s))>(null===(l=n[t])||void 0===l?void 0:l.toLowerCase())?1:0}))},oe=function(e,t){var n=t;switch(t){case X:case q:return se(e,n);case Z:return function(e,t){return Object(ae.a)(e).sort((function(e,n){return e[t]-n[t]}))}(e,n);default:return e}},le=[],ue=function(){var e=Object(a.useReducer)(re,le,(function(){return JSON.parse(localStorage.getItem("albumsList"))||le})),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],o=c[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),O=p[0],m=p[1],_=function(e){var t=e.list,n=Object(a.useState)((function(){return localStorage.getItem("sortType")})),r=Object(l.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("isReverseOrder")||!1)})),o=Object(l.a)(s,2),u=o[0],d=o[1],j=Object(a.useMemo)((function(){var e=oe(t,i);return u?Object(ae.a)(e).reverse():e}),[t,i,u]);Object(a.useEffect)((function(){localStorage.setItem("sortType",i),localStorage.setItem("isReverseOrder",u)}),[i,u]);var p=function(){c(null)};return{sortedList:j,activeSortType:i,isReverseOrder:u,setReverseOrder:d,handleSort:function(e){if(i===e&&u)return d(!1),void p();i!==e||u?c(e):d(!0)},resetSort:p}}({list:n}),x=_.handleSort,h=_.sortedList,w=_.activeSortType,I=_.isReverseOrder;Object(a.useEffect)((function(){localStorage.setItem("albumsList",JSON.stringify(n))}),[n]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(V,{}),Object(g.jsx)(B,{inputValue:s,onInputChange:function(e){var t=e.target.value;o(t)},onSubmit:function(){if(s){var e={id:Object(te.a)(),name:s,date:(new Date).getTime(),isFavorite:null};r({type:H,payload:e}),o("")}}})]}),Object(g.jsxs)("div",{className:ce.a.controlsWrapper,children:[Object(g.jsx)(ee,{activeSortType:w,isReverseOrder:I,handleSort:x}),Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){m((function(e){return!e}))},className:ce.a.viewButton,children:O?Object(g.jsx)(v.a,{}):Object(g.jsx)(b.a,{})})]}),Object(g.jsx)(S,{isGrid:O,items:h,renderItem:function(e){var t=e.name,n=e.id,a=e.isFavorite,i=e.date;return Object(g.jsxs)(N,{id:n,name:t,isGridView:O,isFavorite:a,date:i,children:[a?Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:U,payload:e})}(n)},children:Object(g.jsx)(f.a,{})}):Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:P,payload:e})}(n)},children:Object(g.jsx)(j.a,{})}),Object(g.jsx)(u.a,{color:"primary",component:"span",onClick:function(){return function(e){r({type:K,payload:e})}(n)},children:Object(g.jsx)(y.a,{})})]},n)}})]})};var de=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(ue,{})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(de,{})}),document.getElementById("root")),je()}},[[98,1,2]]]);
//# sourceMappingURL=main.79fc13d7.chunk.js.map