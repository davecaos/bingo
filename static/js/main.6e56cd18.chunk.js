(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{60:function(e,t,n){},76:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n(0),c=n.n(o),r=n(24),i=n.n(r),l=(n(76),n(8)),s=n(14),b=n(6),d=n(39),j=n(105),u=n(100),h=n(98),f=n(99),p=n(101),O=n(106),g=n(104),x=n(96),m=n(102);function w(e){var t=e.cards.map((function(e,t){return e?"".concat(t,"=").concat(e,"&"):""})).join(""),n=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname+"?"+t,o=Object(x.a)(n),c=(o._hasCopied,o.onCopy),r=Object(m.a)();return Object(a.jsx)(g.a,{bg:"#00917a",onClick:function(){r({title:"Copied to clipboard!",position:"bottom-right",description:n,duration:2e3,status:"success",isClosable:!0}),c()},children:"Share editable link"})}var v=n(65),C=n.n(v),k=n(103),y=(n(60),function(e){var t=e.text,n=e.onChange,o=e.index,c=e.isCenter,r=c?"#00917a":"#f7eada",i=c?"#f3e9de":"black.200";return Object(a.jsx)(k.a,{w:"150px",h:"150px",border:"2px",fontSize:14,borderColor:"black.200",borderRadius:"0",textAlign:["center"],style:{whiteSpace:"normal",fontWeight:"bold",wordWrap:"break-all",textJustify:"inter-word"},color:i,value:t,backgroundColor:r,name:o,onChange:n})});var S=function(){var e,t,n=window.location.href,r=new URL(n),i=new URLSearchParams(r.search),x=new Array(25).fill(""),m=Object(d.a)(i);try{for(m.s();!(t=m.n()).done;){var v=t.value,k=v[0],S=v[1];(function(e){return 0})&&(x[parseInt(k)]=S)}}catch(R){m.e(R)}finally{m.f()}var I=Object(o.useState)(x),B=Object(b.a)(I,2),E=B[0],L=B[1],A=function(e){var t=Object(s.a)(E);t[e.target.name]=e.target.value,L(t)},F=c.a.useState(!1),J=Object(b.a)(F,2),P=(J[0],J[1]);return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(h.a,{p:4,children:[Object(a.jsx)(f.a,{fontSize:"2.5em",style:{fontWeight:"bold"},children:"EDITABLE BINGO \u270f\ufe0f"}),Object(a.jsx)(u.a,{children:Object(a.jsx)(h.a,(e={bg:"tomato"},Object(l.a)(e,"bg","#00917a"),Object(l.a)(e,"p",1),Object(l.a)(e,"w","750px"),Object(l.a)(e,"color","white"),e))})]}),Object(a.jsx)(u.a,{children:Object(a.jsx)(p.a,{color:"black",children:Object(a.jsx)(O.a,{columns:5,children:E.map((function(e,t){var n=12===t;return Object(a.jsx)(y,{text:e,index:t,onChange:A,isCenter:n})}))})})}),Object(a.jsxs)(h.a,{p:1,children:[Object(a.jsx)(w,{cards:E}),Object(a.jsx)(g.a,{bg:"#00917a",onClick:function(){document.getElementById("root");C.a.toJpeg(document.getElementById("root"),{quality:.95}).then((function(e){var t=document.createElement("a");t.download="bingo.jpeg",t.href=e,t.click(),P(!1)}))},ml:3,children:"Save as Image"})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),I()}},[[85,1,2]]]);
//# sourceMappingURL=main.6e56cd18.chunk.js.map