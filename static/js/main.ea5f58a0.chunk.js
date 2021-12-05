(this.webpackJsonpmarvel_project=this.webpackJsonpmarvel_project||[]).push([[0],{227:function(e,n,t){"use strict";t.r(n);var r,o,i,c,a,s,l,d,u,m,h,b=t(0),f=t.n(b),j=t(33),g=t.n(j),p=t(6),x=t(2),O=function(e,n){var t=f.a.useState((function(){var t=localStorage.getItem(e);return t?JSON.parse(t):n})),r=Object(p.a)(t,2),o=r[0],i=r[1];return f.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,i]},v={title:"light",colors:{background:"#F5F5F5",text:"#000000",selected:"#94D2DD",sectionBackground:"#004D7C",headerColor:"#BB0A1E",error:"#DC143C"},weight:{normal:400,bold:700}},w={title:"dark",colors:{background:"#333333",text:"#FFFFFF",selected:"#17141E",sectionBackground:"#041E42",headerColor:"#AA2961",error:"#DC143C"},weight:{normal:400,bold:700}},C=t(3),k=Object(x.c)(r||(r=Object(C.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font: 400 0.8rem Outfit, sans-serif;\n    background: ",";\n    color: ",";\n    \n    overflow: scroll;\n    overflow-x: auto;\n    \n    ::-webkit-scrollbar {\n      width: 0.5rem;\n      max-height: 0.5rem;\n    }\n\n    ::-webkit-scrollbar-track-piece {\n      background-color: transparent;\n      -webkit-border-radius: 0.5rem;\n    }\n\n    ::-webkit-scrollbar-thumb:vertical {\n      background-color: ",";\n      -webkit-border-radius: 0.5rem;\n    }\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.sectionBackground})),y=Object(x.e)(o||(o=Object(C.a)(["\n  0% {\n      transform: scale(2);\n  }\n  50% {\n      transform: scale(1);\n  }\n  100% {\n      transform: scale(2);\n  }\n"]))),N=x.d.div(i||(i=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  margin-bottom: 1rem;\n  justify-content: center;\n  align-items: center;\n  animation: "," 1s infinite linear;\n\n  img {\n    width: 10rem;\n    height: 10rem;\n    margin-bottom: 0.2rem;\n    background: transparent;\n  }\n\n  span {\n   \n    font-size: 2rem;\n    font-weight: 700;\n  }\n"])),y),S=t(1),z=function(){return Object(S.jsxs)(N,{children:[Object(S.jsx)("img",{src:"assets/america_captain_logo.png",alt:"American Captain"}),Object(S.jsx)("span",{children:"Carregando..."})]})},B=function(e){var n=e.loading,t=e.children;return Object(S.jsxs)(S.Fragment,{children:[n?Object(S.jsx)(z,{}):t," "]})},D=x.d.div(c||(c=Object(C.a)(["\n  margin: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n    display: flex;\n\n    li {\n      margin: 0 0.4rem;\n      list-style: none;\n\n      button {\n        cursor: pointer;\n        background: ",";\n        color: #F9F9F9;\n        border: 1px solid ",";\n        padding: 0.5rem 0.7rem;\n        border-radius: 7px;\n        font-weight: 600;\n        transition: "," 0.2s;\n\n        &:hover {\n          background: ",";\n          color: ",";\n        }\n      }\n\n      .current-page {\n        background: ",";\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}));function F(e){var n=e.limit,t=e.totalPages,r=e.offset,o=e.setOffset,i=r?r/n+1:1,c=Math.max(i-4,1);return Object(S.jsx)(D,{children:Object(S.jsx)("ul",{children:Array.from({length:Math.min(9,t)}).map((function(e,n){return n+c})).map((function(e){return e<=t&&Object(S.jsx)("li",{children:Object(S.jsx)("button",{onClick:function(){return o((e-1)*n)},className:e===i?"current-page":"",children:e})},e)}))})})}var T=x.d.div(a||(a=Object(C.a)(["\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(215, 216, 228, 0.7);\n  transform-origin: left;\n"]))),A=x.d.div(s||(s=Object(C.a)(["\n  width: 70vw;\n  height: 85%;\n  background: ",";\n  border: 0.6rem solid ",";\n  border-radius: 2rem;\n  padding: 2rem;\n"])),(function(e){return e.theme.colors.sectionBackground}),(function(e){return e.theme.colors.headerColor})),E=x.d.div(l||(l=Object(C.a)(["\n  display: flex;\n  justify-content: flex-end;\n\n  .comicTitle {\n    font-size: 1rem;\n    font-weight: ",";\n  }\n\n  .closeButton {\n    display: flex;\n    border: none;\n    align-items: center;\n    gap: 0 1rem;\n    background-color: transparent;\n    cursor: url('http://www.rw-designer.com/cursor-extern.php?id=142520'), default;\n    font-size: 1rem;\n    font-weight: ",";\n    color: ",";\n\n    svg {\n      fill: ",";\n    }\n  }\n"])),(function(e){return e.theme.weight.bold}),(function(e){return e.theme.weight.bold}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),_=x.d.div(d||(d=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 2rem;\n\n  .blockImage {\n    border: 0.25rem solid ",";\n    height: 18rem;\n    box-shadow: 0 0.5rem 1.4rem ",";\n    \n    img {\n      height: 100%;\n    }\n  }\n\n  .infosContainer {\n    position: relative;\n    background: ",";\n\n    .title {\n      display: inline-flex;\n      position: absolute;\n      left: -1.5rem;\n      top: -1.2rem;\n      box-shadow: 0 0.5rem 1.4rem ",";\n      \n      h2 {\n        padding: 0.5rem 0.8rem;\n        background-color: ",";\n        border: 0.2rem solid ",";\n        font-size: 1rem;\n      }\n\n    }\n\n    .scrollBar {\n      width: 50rem;\n      height: 15rem;\n      overflow-y: auto;\n      border-top: 0.25rem solid ",";\n      border-right: 0.25rem solid ",";\n      border-bottom: 0.25rem solid ",";\n      box-shadow: 0 0.3rem 1.2rem  ",";\n      padding: 2.5rem;\n\n      &::-webkit-scrollbar-track {\n        border-radius: 0.6rem;\n        background-color: transparent;\n      }\n\n      &::-webkit-scrollbar {\n        width: 0.25rem;\n        border-radius: 1.2rem;\n        background-color: transparent;\n      }\n\n      &::-webkit-scrollbar-thumb {\n        border-radius: 1.2rem;\n        background-color: ",";\n      }\n    }\n\n    .description {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 1rem;\n    }\n  }\n"])),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.sectionBackground})),I=x.d.div(u||(u=Object(C.a)(["\n  display: grid;\n  grid-gap: 2rem 5rem;\n  grid-template-columns: repeat(3, 1fr);\n"]))),R=x.d.div(m||(m=Object(C.a)(["\n  border: 0.25rem solid ",";\n  background: ",";\n  padding: 2rem 0rem 2rem 5rem;\n  height: fit-content;\n  max-height: 50%;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar-track {\n    border-radius: 0.6rem;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    width: 0.25rem;\n    border-radius: 1.2rem;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 1.2rem;\n    background-color: ",";\n  }\n\n  .infosContainerTitle {\n    font-size: 1.2rem;\n    color: ",";\n    font-weight: ",";\n  }\n\n  .infosContainerSubTitle {\n    font-size: 1rem;\n    color: ",";\n  }\n\n\n"])),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.sectionBackground}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.weight.bold}),(function(e){return e.theme.colors.text})),P=x.d.div(h||(h=Object(C.a)(["\n  padding-top: 2rem;\n  word-wrap: break-word;\n\n\n  .infosContainerUrl {\n    font-size: 1rem;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.text})),q=t(23),M=t(35),W=t.n(M);function V(e){var n=e.comicDetail;return{handleReturnWriter:function(){var e=n.creators.items.filter((function(e){return"writer"===e.role}));return e.length>0?e.map((function(n,t){return t===e.length-1?"".concat(n.name,"."):"".concat(n.name,", ")})):"N\xe3o informado."},handleReturnPencillers:function(){var e=n.creators.items.filter((function(e){return"penciller"===e.role}));return e.length>0?e.map((function(n,t){return t===e.length-1?"".concat(n.name,"."):"".concat(n.name,", ")})):"N\xe3o informado."},handleReturnPencillerCovers:function(){var e=n.creators.items.filter((function(e){return"penciller (cover)"===e.role}));return e.length>0?e.map((function(n,t){return t===e.length-1?"".concat(n.name,"."):"".concat(n.name,", ")})):"N\xe3o informado."},handleReturnDate:function(){var e=n.dates.find((function(e){return"onsaleDate"===e.type}));return e?"".concat(W()(e.date).format("DD/MM/YYYY"),"."):"N\xe3o informado."},handleReturnUrl:function(){var e=n.urls.find((function(e){return"detail"===e.type}));if(e)return e.url},handleReturnPrice:function(){var e=n.prices.filter((function(e){return"printPrice"===e.type}));return e.length>0?e.map((function(e){return e.price>0?"$ ".concat(e.price):"N\xe3o informado."})):"N\xe3o informado."}}}var Y,U=function(e){var n=e.comicDetail,t=e.setShowComicDetail,r=V({comicDetail:n}),o=r.handleReturnWriter,i=r.handleReturnPencillers,c=r.handleReturnPencillerCovers,a=r.handleReturnDate,s=r.handleReturnUrl,l=r.handleReturnPrice;return Object(S.jsx)(T,{children:Object(S.jsxs)(A,{children:[Object(S.jsx)(E,{children:Object(S.jsxs)("button",{onClick:function(){return t(!1)},className:"closeButton",children:["Fechar ",Object(S.jsx)(q.a,{size:20})]})}),Object(S.jsxs)(_,{children:[Object(S.jsx)("div",{className:"blockImage",children:Object(S.jsx)("img",{src:"".concat(n.thumbnail.path,"/standard_fantastic.").concat(n.thumbnail.extension),alt:n.title})}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("div",{className:"title",children:Object(S.jsx)("h2",{children:n.title})}),Object(S.jsx)("div",{className:"scrollBar",children:Object(S.jsx)("div",{className:"description",children:Object(S.jsx)("p",{children:n.description?n.description:"Nenhuma descri\xe7\xe3o detalhada sobre esse quadrinho."})})})]})]}),Object(S.jsxs)(R,{children:[Object(S.jsxs)(I,{children:[Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Quantidade de p\xe1ginas"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:0!==(null===n||void 0===n?void 0:n.pageCount)?null===n||void 0===n?void 0:n.pageCount:"N\xe3o informado."})]}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Valor"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:l()})]}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Data de publica\xe7\xe3o"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:a()})]}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Escritores"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:o()})]}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Artistas"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:i()})]}),Object(S.jsxs)("div",{className:"infosContainer",children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Artistas  da Capa"}),Object(S.jsx)("p",{className:"infosContainerSubTitle",children:c()})]})]}),!!s()&&Object(S.jsxs)(P,{children:[Object(S.jsx)("p",{className:"infosContainerTitle",children:"Acesse mais informa\xe7\xf5es no link abaixo:"}),Object(S.jsx)("a",{className:"infosContainerUrl",target:"_blank",href:s(),rel:"noreferrer",children:s()})]})]})]})})},H=function(e){var n=e.selecteds,t=function(e){var n=e.prices.filter((function(e){return"printPrice"===e.type}));return n.length>0?n.map((function(e){return e.price>0&&"$ ".concat(e.price)})):"N\xe3o informado."},r=function(e){var n=e.creators.items.filter((function(e){return"writer"===e.role}));return n.length>0?n.map((function(e,t){return t===n.length-1?"".concat(e.name,"."):"".concat(e.name,", ")})):"N\xe3o informado."},o=function(e){var n=e.creators.items.filter((function(e){return"penciller"===e.role}));return n.length>0?n.map((function(e,t){return t===n.length-1?"".concat(e.name,"."):"".concat(e.name,", ")})):"N\xe3o informado."},i=function(e){var n=e.creators.items.filter((function(e){return"penciller (cover)"===e.role}));return n.length>0?n.map((function(e,t){return t===n.length-1?"".concat(e.name,"."):"".concat(e.name,", ")})):"N\xe3o informado."},c=function(e){var n=e.dates.find((function(e){return"onsaleDate"===e.type}));return n?"".concat(W()(n.date).format("DD/MM/YYYY"),"."):"N\xe3o informado."},a=function(e){var n=e.urls.find((function(e){return"detail"===e.type}));if(n)return n.url};return Object(S.jsx)("div",{children:n.map((function(e,n){return Object(S.jsxs)("div",{style:{width:"70vw",height:"85%",background:"#004D7C",border:"0.6rem solid #BB0A1E",borderRadius:"2rem",padding:"2rem",marginTop:"1.2rem"},children:[Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"2rem"},children:[Object(S.jsx)("div",{style:{border:"0.25rem solid #BB0A1E"},children:Object(S.jsx)("img",{style:{height:"100%"},src:"".concat(e.thumbnail.path,"/standard_fantastic.").concat(e.thumbnail.extension),alt:e.title})}),Object(S.jsxs)("div",{style:{position:"relative",background:"#F5F5F5",border:"0.25rem solid #BB0A1E"},children:[Object(S.jsx)("div",{style:{display:"inline-flex",position:"absolute"},children:Object(S.jsx)("h2",{style:{padding:"0.5rem 0.8rem",backgroundColor:"#F5F5F5",border:"0.2rem solid #BB0A1E",fontSize:"1rem"},children:e.title})}),Object(S.jsx)("div",{style:{width:"50rem",padding:"2.5rem"},children:Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1rem"},children:Object(S.jsx)("p",{children:e.description?e.description:"Nenhuma descri\xe7\xe3o detalhada sobre esse quadrinho."})})})]})]}),Object(S.jsxs)("div",{style:{border:"0.25rem solid #BB0A1E",background:"#F5F5F5",padding:"2rem 0rem 2rem 5rem"},children:[Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsxs)("div",{style:{marginRight:"20rem"},children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Quantidade de p\xe1ginas"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:0!==(null===e||void 0===e?void 0:e.pageCount)?null===e||void 0===e?void 0:e.pageCount:"N\xe3o informado."})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Valor"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:t(e)})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Data de publica\xe7\xe3o"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:c(e)})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{style:{width:"20rem"},children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Escritores"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:r(e)})]}),Object(S.jsxs)("div",{style:{width:"20rem"},children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Artistas"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:o(e)})]}),Object(S.jsxs)("div",{style:{width:"20rem"},children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Artistas  da Capa"}),Object(S.jsx)("p",{style:{fontSize:"1rem",color:"#000000"},children:i(e)})]})]})]}),!!a(e)&&Object(S.jsxs)("div",{style:{paddingTop:"2rem",wordWrap:"break-word"},children:[Object(S.jsx)("p",{style:{fontSize:"1.2rem",color:"#000000",fontWeight:700},children:"Acesse mais informa\xe7\xf5es no link abaixo:"}),Object(S.jsx)("a",{style:{fontSize:"1rem",color:"#000000"},target:"_blank",href:a(e),rel:"noreferrer",children:a(e)})]})]})]},n)}))})},J=t(18),L=Object(x.d)(J.a)(Y||(Y=Object(C.a)(["\n  .Toastify__toast--info {\n    background: #89CFF0;\n  }\n\n  .Toastify__toast--success {\n    background: #4BB543;\n  }\n\n  .Toastify__toast--error {\n    background: #FF9494;\n  }\n  \n  .Toastify__toast {\n    width: 24rem;\n    height: 6.5rem;\n    background: ",";\n    box-shadow: 0rem 0.3rem 0.45rem ",";\n    border: 0.3rem solid ",";\n    border-radius: 1.25rem;\n    right: 6em;\n    padding: 0 1.4rem;\n\n    button {\n      margin-top: 1rem;\n    }\n  }\n\n  .toastContainer {\n    width: 100%;\n    display: flex;\n    padding: 1.25rem 0rem;\n    flex-direction: column;\n\n    p {\n      color: ",";\n      font-size: 1rem;\n      font-weight: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.sectionBackground}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.weight.bold})),Q=(t(106),function(e){J.b.success(Object(S.jsx)("div",{className:"toastContainer",children:Object(S.jsx)("p",{children:e})}))}),$=function(e){J.b.error(Object(S.jsx)("div",{className:"toastContainer",children:Object(S.jsx)("p",{children:e})}))},G=function(e){J.b.info(Object(S.jsx)("div",{className:"toastContainer",children:Object(S.jsx)("p",{children:e})}))};function K(){return Object(S.jsx)(L,{toastClassName:"toastBody",position:"top-right",autoClose:5e3,hideProgressBar:!1,limit:1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})}var X,Z,ee,ne,te,re=t(97),oe=t(39),ie="Este campo \xe9 obrigat\xf3rio",ce="Insira um e-mail v\xe1lido",ae="Este campo s\xf3 aceita letras.",se=oe.a().shape({name:oe.b().matches(/^[a-zA-Z]/,ae).required(ie),email:oe.b().email(ce).required(ie)}),le=t(92),de=t(98);var ue=x.d.div(X||(X=Object(C.a)(["\n  width: 100%;\n  padding-top: 2rem;\n\n  h2 {\n    padding-bottom: 2rem;\n  }\n"]))),me=x.d.form(Z||(Z=Object(C.a)(["\n  display: flex;\n\n  justify-content: space-between;\n\n  .inputError {\n    border: 1px solid ",";\n    \n    ::placeholder {\n      color: ",";\n    }\n  }\n\n  .errorText {\n    color: ",";\n    font-size: 0.8rem;\n    font-weight: ",";\n    padding: 0.5rem 0.5rem;\n  }\n"])),(function(e){return e.theme.colors.error}),(function(e){return e.theme.colors.error}),(function(e){return e.theme.colors.error}),(function(e){return e.theme.weight.bold})),he=x.d.input(ee||(ee=Object(C.a)(["\n  width: 30rem;\n  height: 3rem;\n  padding: 1rem 2rem;\n  border-radius: 0.5rem;\n  border: 1px solid ",";\n  font-size: 1rem;\n\n"])),(function(e){return e.theme.colors.sectionBackground})),be=x.d.div(ne||(ne=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),fe=x.d.button(te||(te=Object(C.a)(["\n  width: 15rem;\n  height: 3rem;\n  cursor: pointer;\n  color: ",";\n  padding: 1rem 2rem;\n  border-radius: 1.5rem;\n  border: 1px solid ",";\n  background: ",";\n  font-size: 1rem;\n  font-weight: ",";\n\n  &:hover {\n\n    background: ",";\n    transition: transform 0.8s ease 0s;\n    transform: scale(1.05);\n    opacity: 0.8;\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.sectionBackground}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.weight.bold}),(function(e){return e.theme.colors.sectionBackground})),je=function(e){var n=function(e){var n=e.selectedComics,t=Object(re.a)({initialValues:{name:"",email:""},enableReinitialize:!0,validationSchema:se,onSubmit:function(e){return r(e)}}),r=function(e){if(0===n.length)return G("\xc9 necess\xe1rio escolher ao menos um quadrinho para enviar e-mail.");try{Object(de.a)("gmailMessage","template_7mzv00a",{subject:"Comics",name:e.name,email:e.email,message:Object(le.renderToStaticMarkup)(Object(S.jsx)(H,{selecteds:n}))},"user_wqnDKU563ImNexXowG5Q7"),Q("E-mail enviado com sucesso.")}catch(t){$("Houve uma falha ao enviar e-mail, tente novamente.")}};return{formik:t}}({selectedComics:e.selectedComics}).formik;return Object(S.jsxs)(ue,{children:[Object(S.jsx)("h2",{children:"Selecione os quadrinhos desejados e envie via e-mail."}),Object(S.jsxs)(me,{onSubmit:n.handleSubmit,children:[Object(S.jsxs)(be,{children:[Object(S.jsx)(he,{type:"text",placeholder:"Insira seu nome",name:"name",value:n.values.name,onChange:function(e){n.setFieldValue("name",e.target.value)},className:n.errors.name&&n.touched.name?"inputError":""}),n.errors.name&&n.touched.name&&Object(S.jsx)("p",{className:"errorText",children:n.errors.name})]}),Object(S.jsxs)(be,{children:[Object(S.jsx)(he,{type:"email",placeholder:"Insira seu email",name:"email",value:n.values.email,onChange:function(e){n.setFieldValue("email",e.target.value)},className:n.errors.email&&n.touched.email?"inputError":""}),n.errors.email&&n.touched.email&&Object(S.jsx)("p",{className:"errorText",children:n.errors.email})]}),Object(S.jsx)(fe,{type:"submit",children:"Enviar e-mail"})]})]})},ge=t(7),pe=t(50),xe=t.n(pe),Oe=t(99),ve=t(93),we=t(94),Ce=t.n(we),ke=t(95),ye=t.n(ke),Ne=Number(new Date),Se="aa5a981963fa6f57eeb88dc2be8fc61b",ze={ts:Ne,hash:ye()(Ne+"9102064c4c4d1d499e2340eeb02f41b065622583"+Se),apikey:Se},Be=Ce.a.create({baseURL:"https://gateway.marvel.com/v1/public/",params:ze}),De=function(e){return Be.get("".concat("/comics"),{params:e})};var Fe,Te,Ae,Ee,_e,Ie,Re,Pe,qe=function(){var e=Object(b.useState)(!0),n=Object(p.a)(e,2),t=n[0],r=n[1],o=Object(b.useState)(0),i=Object(p.a)(o,2),c=i[0],a=i[1],s=Object(b.useState)([]),l=Object(p.a)(s,2),d=l[0],u=l[1],m=Object(b.useState)(),h=Object(p.a)(m,2),f=h[0],j=h[1],g=Object(b.useState)(),x=Object(p.a)(g,2),O=x[0],v=x[1],w=Object(b.useState)(!1),C=Object(p.a)(w,2),k=C[0],y=C[1],N=Object(b.useState)([]),S=Object(p.a)(N,2),z=S[0],B=S[1],D=Object(b.useState)(),F=Object(p.a)(D,2),T=F[0],A=F[1],E=Object(b.useState)(""),_=Object(p.a)(E,2),I=_[0],R=_[1],P=Object(b.useCallback)(Object(ve.a)(xe.a.mark((function e(){var n;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),n={limit:20,offset:c},T&&(n={limit:20,offset:c,titleStartsWith:T}),De(Object(Oe.a)({},n)).then((function(e){u(e.data.data.results),j(Math.ceil(e.data.data.total/20))})).finally((function(){return r(!1)})).catch((function(){return $("Falha ao carregar, tente novamente!")}));case 4:case"end":return e.stop()}}),e)}))),[c,T]);Object(b.useEffect)((function(){P()}),[P]);var q=function(e,n){var t=Object(b.useRef)(0);return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t.current);var c=setTimeout((function(){e.apply(void 0,o)}),n);t.current=c}}((function(e){A(e),a(0)}),1e3);return{loading:t,limit:20,totalPages:f,setOffSet:a,offSet:c,comics:d,comicDetail:O,handleClassNameActives:function(e){return z.find((function(n){return n.id===e}))&&"selected"},handleSelectedComics:function(e){z.find((function(n){return n.id===e.id}))?B(z.filter((function(n){return n.id!==e.id}))):B((function(n){return[].concat(Object(ge.a)(n),[e])}))},handleComicDetail:function(e){v(e),y(!0)},showComicDetail:k,setShowComicDetail:y,inputValue:I,onChange:function(e){R(e),q(e)},handleCleanText:function(){R(""),A("")},selectedComics:z}},Me=(x.d.div(Fe||(Fe=Object(C.a)(["\n"]))),x.d.div(Te||(Te=Object(C.a)(["\n  h1 {\n    font-size: 2rem;\n    text-align: center;\n    padding-bottom: 2rem;\n    color: ",";\n  }\n\n  display: flex;\n  justify-content: space-between;\n"])),(function(e){return e.theme.colors.text}))),We=x.d.div(Ae||(Ae=Object(C.a)(["\n  width: 40%;\n  height: 3rem;\n  background: #fff; \n  border-radius: 2rem;\n  box-shadow: 0px 3px 6px #d7d8e4;\n  padding-left: 1.5rem;\n  display: flex;\n  align-items: center;\n\n  input {\n    flex: 1;\n    height: 3rem;\n    padding-left: 1rem;\n    border: none;\n    font-size: 0.8rem;\n    font-weight: ",";\n  }\n\n  button {\n    height: 46px;\n    margin: 0 1.5rem;\n    padding: 0;\n    background: transparent;\n    font-weight: normal;\n    font-style: italic;\n    border: none;\n    cursor: pointer;\n    color: #000;\n  }\n"])),(function(e){return e.theme.weight.bold})),Ve=x.d.div(Ee||(Ee=Object(C.a)(["\n  justify-items: center;\n  padding: 2rem 2rem 5rem 2rem;\n  background: ",";\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 7rem;\n  justify-content: center;\n  border-radius: 1rem;\n\n  .selected {\n    background: ",";\n    transform: scale(1.1);\n    transition: transform 0.8s ease 0s;\n\n    .cardInfo {\n      background: ",";\n    }\n  }\n"])),(function(e){return e.theme.colors.sectionBackground}),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.colors.selected})),Ye=x.d.div(_e||(_e=Object(C.a)(["\n  width: 15rem;\n  height: 16rem;\n  border-radius: 1rem;\n  background: ",";\n  position: relative;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  .cardInfo {\n    width: 15rem;\n    background: ",";\n    padding: 0.5rem;\n    border-bottom-left-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    color: ",";\n\n    .cardName {\n      text-align: center;\n      font-size: 1rem;\n      font-weight: ",";\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .cardDetail {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      z-index: 10;\n      font-size: 1rem;\n      padding: 0.2rem;\n      cursor: pointer;\n\n      svg {\n        margin-left: 0.5rem;\n      }\n    }\n  }\n\n  .cardImage {\n    width: 15rem;\n    height: 15rem;\n    border-top-left-radius: 1rem;\n    border-top-right-radius: 1rem;\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text}),(function(e){return e.theme.weight.bold})),Ue=x.d.div(Ie||(Ie=Object(C.a)(["\n  padding-top: 5rem;\n"]))),He=function(){var e=qe(),n=e.loading,t=e.limit,r=e.totalPages,o=e.setOffSet,i=e.offSet,c=e.comics,a=e.comicDetail,s=e.handleClassNameActives,l=e.handleSelectedComics,d=e.handleComicDetail,u=e.showComicDetail,m=e.setShowComicDetail,h=e.inputValue,b=e.onChange,f=e.handleCleanText,j=e.selectedComics;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(Me,{children:[Object(S.jsx)("h1",{children:"Busque os quadrinhos da Marvel"}),Object(S.jsxs)(We,{children:[Object(S.jsx)(q.b,{size:30,fill:"#000"}),Object(S.jsx)("input",{type:"text",placeholder:"Busque um quadrinho pelo nome",name:"inputValue",value:h,onChange:function(e){b(e.target.value)}}),Object(S.jsx)("button",{className:"btn clean",onClick:function(){f()},type:"button",children:"Limpar"})]})]}),Object(S.jsx)(B,{loading:n,children:c.length>0?Object(S.jsxs)(S.Fragment,{children:[r&&Object(S.jsx)(F,{limit:t,offset:i,setOffset:o,totalPages:r}),Object(S.jsx)(Ve,{children:c.map((function(e){return Object(S.jsxs)(Ye,{className:s(e.id),children:[Object(S.jsx)("img",{onClick:function(){return l(e)},className:"cardImage",src:"".concat(e.thumbnail.path,"/standard_fantastic.").concat(e.thumbnail.extension),alt:e.title}),Object(S.jsxs)("div",{className:"cardInfo",children:[Object(S.jsx)("p",{className:"cardName",children:e.title}),Object(S.jsxs)("p",{className:"cardDetail",onClick:function(){d(e)},children:["Ver detalhes",Object(S.jsx)(q.b,{})]})]})]},e.id)}))}),Object(S.jsx)(je,{selectedComics:j})]}):Object(S.jsx)(Ue,{children:Object(S.jsx)("h1",{children:"Nenhum quadrinho foi encontrado na busca."})})}),u&&Object(S.jsx)(U,{comicDetail:a,setShowComicDetail:m})]})},Je=t(96),Le=t.n(Je),Qe=x.d.div(Re||(Re=Object(C.a)(["\n  padding: 5rem 10rem 2rem 10rem;\n"]))),$e=x.d.div(Pe||(Pe=Object(C.a)(["\n  height: 10rem;\n  background: ",";\n \n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10rem;\n\n  .titleHeader {\n    font-size: 2rem;\n    font-weight: ",";\n    color: ",";\n  }\n  "])),(function(e){return e.theme.colors.headerColor}),(function(e){return e.theme.weight.bold}),(function(e){return e.theme.colors.text})),Ge=function(e){var n=e.children,t=e.handleSwitchTheme,r=Object(b.useContext)(x.a),o=r.title,i=r.colors;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)($e,{children:[Object(S.jsx)("p",{className:"titleHeader",children:"MARVEL"}),Object(S.jsx)(Le.a,{"data-testid":"switch",onChange:t,checked:"dark"===o,uncheckedIcon:!1,checkedIcon:!1,height:20,width:48,onColor:i.sectionBackground,offColor:i.sectionBackground})]}),Object(S.jsx)(Qe,{children:n})]})};var Ke=function(){var e=O("theme",v),n=Object(p.a)(e,2),t=n[0],r=n[1];return Object(S.jsxs)(x.b,{theme:t,children:[Object(S.jsx)(k,{}),Object(S.jsx)(K,{}),Object(S.jsx)(Ge,{handleSwitchTheme:function(){r("light"===t.title?w:v)},children:Object(S.jsx)(He,{})})]})};g.a.render(Object(S.jsx)(f.a.StrictMode,{children:Object(S.jsx)(Ke,{})}),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.ea5f58a0.chunk.js.map