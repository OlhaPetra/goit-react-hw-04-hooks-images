(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1d35k",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__ZCc-3"}},11:function(e,t,a){e.exports={Section:"Button_Section__2UdvG",Button:"Button_Button__1JpSc"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1-zBU",Modal:"Modal_Modal__3c6kz"}},13:function(e,t,a){e.exports={App:"App_App__1P0Tc",Loader:"App_Loader__2-Sn6"}},17:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__22CJg"}},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(23),a(14)),u=a(3),s=a(5),i=a(16),m=a.n(i),j=(a(44),a(15),a(18)),b=a(6),h=a.n(b),g=a(1);function d(e){var t=e.onSubmit,a=e.onClick,c=Object(n.useState)(""),r=Object(u.a)(c,2),o=r[0],l=r[1];return Object(g.jsx)("header",{className:h.a.Searchbar,children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),l("")):s.b.error("Enter your request!")},className:h.a.SearchForm,children:[Object(g.jsxs)("button",{type:"submit",onClick:a,className:h.a.SearchFormButton,children:[Object(g.jsx)(j.a,{}),Object(g.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})]}),Object(g.jsx)("input",{name:"query",value:o,onChange:function(e){l(e.currentTarget.value.toLowerCase())},className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var f=a.p+"static/media/default.2e01288c.jpg",O=a(10),p=a.n(O),_=function(e){var t=e.alt,a=e.prevImg,n=e.largeImg,c=e.onClick;return Object(g.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(g.jsx)("img",{className:p.a.ImageGalleryItemImage,src:null!==a&&void 0!==a?a:f,alt:t,onClick:function(){return c(n,t)}})})},S=a(17),I=a.n(S);var v=function(e){var t=e.images,a=e.onClick;return Object(g.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(_,{alt:e.tags,prevImg:e.webformatURL,largeImg:e.largeImageURL,onClick:a},e.id)}))})},x="23556027-7518a6338651e19ee58531f7f",y="https://pixabay.com/api/";var k={ImagesFetch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(y,"?q=").concat(e,"&page=").concat(t,"&key=").concat(x,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.json()})).then((function(e){return e.hits}))}},C=k,F=a(11),w=a.n(F);var B=function(e){var t=e.onClickButton;return Object(g.jsx)("div",{className:w.a.Section,children:Object(g.jsx)("button",{type:"submit",onClick:t,className:w.a.Button,children:"Load more"})})},N=a(12),G=a.n(N),L=document.querySelector("#modal-root");function E(e){var t=e.onClose,a=e.largeImage,c=e.alt;Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(g.jsx)("div",{className:G.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(g.jsx)("div",{className:G.a.Modal,children:Object(g.jsx)("img",{src:a,alt:c})})}),L)}var M=a(13),T=a.n(M);function q(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],j=o[1],b=Object(n.useState)(1),h=Object(u.a)(b,2),f=h[0],O=h[1],p=Object(n.useState)(!1),_=Object(u.a)(p,2),S=_[0],I=_[1],x=Object(n.useState)(null),y=Object(u.a)(x,2),k=y[0],F=y[1],w=Object(n.useState)(null),N=Object(u.a)(w,2),G=N[0],L=N[1],M=Object(n.useState)(null),q=Object(u.a)(M,2),A=q[0],J=q[1];Object(n.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:T.a.App,children:[Object(g.jsx)(d,{onSubmit:function(e){c(e)},onClick:function(e){I(!0),j([]),O(1),setTimeout((function(){C.ImagesFetch(a,f).then((function(e){0!==e.length?(j(e),O(f+1)):s.b.error('No results were found for your query - "'.concat(a,'"!'))})).catch((function(e){return F(e)})).finally(I(!1))}),500)}}),k&&Object(g.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"}),S&&Object(g.jsx)(m.a,{type:"Oval",color:"#3f51b5",height:80,width:80,className:T.a.Loader}),i.length>0&&Object(g.jsx)(v,{images:i,onClick:function(e,t){L(e),J(t)}}),i.length>11&&!S&&Object(g.jsx)(B,{onClickButton:function(e){O(f+1),C.ImagesFetch(a,f).then((function(e){return j((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))}))})).catch((function(e){return F(e)})).finally(I(!1))}}),G&&Object(g.jsx)(E,{onClose:function(e){L(null)},largeImage:G,alt:A}),Object(g.jsx)(s.a,{})]})})}a(46);o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__m_s2R",SearchForm:"Searchbar_SearchForm__3reky",SearchFormButton:"Searchbar_SearchFormButton__1heve",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1TSRW",SearchFormInput:"Searchbar_SearchFormInput__1B519"}}},[[47,1,2]]]);
//# sourceMappingURL=main.241dbede.chunk.js.map