(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{75:function(e,n,t){},84:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var c=t(7),a=t(0),o=t.n(a),r=t(25),i=t.n(r),s=(t(75),t(14)),l=t(6),d=t(39),b=t(104),j=t(96),u=t(98),h=t(105),f=t(99),x="#00917a";function p(){return Object(c.jsx)(j.a,{children:Object(c.jsxs)(u.a,{p:2,children:[Object(c.jsx)(f.a,{fontSize:"2.8em",children:"EDITABLE BINGO \u270f\ufe0f"}),Object(c.jsx)(u.a,{bg:x,p:1,w:"750px"})]})})}var g=t(100),O=t(101),v=t(103);function m(e){var n=e.cards.map((function(e,n){return e?"".concat(n,"=").concat(e,"&"):""})).join(""),t=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname+"?"+n,a=Object(g.a)(t),o=(a._hasCopied,a.onCopy),r=Object(O.a)();return Object(c.jsx)(v.a,{bg:x,onClick:function(){r({title:"Copied to clipboard!",position:"bottom-right",description:t,duration:2e3,status:"success",isClosable:!0}),o()},children:"Share editable link"})}var w=t(64),C=t.n(w);function k(){return Object(c.jsx)(v.a,{bg:x,onClick:function(){C.a.toJpeg(document.getElementById("bingo"),{quality:.95}).then((function(e){var n=document.createElement("a");n.download="bingo.jpeg",n.href=e,n.click()}))},ml:3,children:"Save as Image"})}function y(e){var n=e.cards;return Object(c.jsxs)(u.a,{p:2,children:[Object(c.jsx)(m,{cards:n}),Object(c.jsx)(k,{})]})}var S=t(102),I=function(e){var n=e.text,t=e.onChange,a=e.index,o=e.isCenter,r=o?x:"#f7eada",i=o?"#f3e9de":"black.200";return Object(c.jsx)(S.a,{w:"150px",h:"150px",border:"2px",fontSize:14,borderColor:"black.200",borderRadius:"0",textAlign:["center"],style:{whiteSpace:"normal",fontWeight:"bold",wordWrap:"break-all",textJustify:"inter-word"},color:i,value:n,backgroundColor:r,name:a,onChange:t})};t(84);var B=function(){var e,n=window.location.href,t=new URL(n),o=new URLSearchParams(t.search),r=new Array(25).fill(""),i=Object(d.a)(o);try{for(i.s();!(e=i.n()).done;){var f=e.value,x=f[0],g=f[1];(function(e){return 0})&&(r[parseInt(x)]=g)}}catch(k){i.e(k)}finally{i.f()}var O=Object(a.useState)(r),v=Object(l.a)(O,2),m=v[0],w=v[1],C=function(e){var n=Object(s.a)(m);n[e.target.name]=e.target.value,w(n)};return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{id:"bingo",className:"bingo",children:Object(c.jsxs)(u.a,{p:1,children:[Object(c.jsx)(p,{}),Object(c.jsx)(j.a,{children:Object(c.jsx)(h.a,{columns:5,children:m.map((function(e,n){var t=12===n;return Object(c.jsx)(I,{text:e,index:n,onChange:C,isCenter:t})}))})})]})}),Object(c.jsx)(y,{cards:m})]})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,106)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),E()}},[[85,1,2]]]);
//# sourceMappingURL=main.afb11a2a.chunk.js.map