(this.webpackJsonpproofreader=this.webpackJsonpproofreader||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(11),c=n.n(r),o=(n(85),n(86),n(63)),s=n(18),l=n(147),u=n(6),h=n(143),d=n(144),j=n(145),b=n(156),x=n(157),f=n(148),p=n(3),g=a.a.createContext(),O=function(e){var t=Object(i.useState)({version:"hk",dict:[]}),n=Object(s.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)(""),o=Object(s.a)(c,2),l=o[0],u=o[1],h=Object(i.useState)(""),d=Object(s.a)(h,2),j=d[0],b=d[1],x=Object(i.useState)([]),f=Object(s.a)(x,2),O=f[0],v=f[1],m=Object(i.useState)(-1),k=Object(s.a)(m,2),C=k[0],w=k[1];Object(i.useEffect)((function(){0===a.dict.length&&S(a.version)}),[a.version]);var y=function(e,t){b(e);var n=e.split("\n"),i=[];n.forEach((function(e){if(""!==e){var t=e.split("|"),n=Object(s.a)(t,3),a=n[0],r=n[1],c=n[2];i.push({find:a,replace:r,remark:c})}})),r({dict:i,version:t})},S=function(e){"self"===e&&e===a.version||("hk"!==e&&(e="hk"),fetch(e+"-list.txt").then((function(e){return e.text()})).then((function(t){y(t,e)})))};return Object(p.jsx)(g.Provider,{value:{dictionary:a,setVersion:S,text:l,setText:u,result:O,setResult:v,active:C,setActive:w,rawDict:j,setDict:y},children:e.children})},v=g,m=n(114),k=n(139),C=n(141),w=n(142),y=n(64),S=Object(m.a)((function(e){return{drawerContainer:{minWidth:"200px",width:"40vw",padding:"0 5%"},textarea:{width:"99%",height:"80vh"}}})),N=function(){var e=S(),t=Object(i.useContext)(v),n=t.rawDict,a=t.setDict,r=Object(y.useFilePicker)({accept:[".txt"],multiple:!1}),c=Object(s.a)(r,4),o=c[0],l=(c[1],c[2]),u=c[3];return Object(i.useEffect)((function(){o[0]&&a(o[0].content,"self")}),[o]),Object(p.jsxs)(k.a,{className:e.drawerContainer,children:[Object(p.jsx)("h3",{children:"\u5b57\u8868\uff1a"}),Object(p.jsxs)("div",{children:[u?Object(p.jsx)(C.a,{}):null,Object(p.jsx)("textarea",{value:n,onChange:function(e){return a(e.target.value,"self")},className:e.textarea,placeholder:"\u7528\u6cd5\uff1a\n\u4e00\u884c\u884c\u8f38\u5165\u8981\u7de8\u6821\u7684\u8a5e\u8a9e\u3001\u7f6e\u63db\u6210\u7684\u8a5e\u8a9e\u53ca\u7c21\u55ae\u5099\u8003\n\u5206\u5225\u4ee5\u300c|\u300d( Shift + \\ ) \u5206\u9694\n\n\u4f8b\u5b50\uff1a\n\u6ec4\u6d77\u4e00\u6817|\u6ec4\u6d77\u4e00\u7c9f|\u5927\u6d77\u88cf\u7684\u4e00\u7c92\u7a40\u5b50\u3002\u6bd4\u55bb\u975e\u5e38\u6e3a\u5c0f"})]}),Object(p.jsx)(w.a,{variant:"contained",onClick:l,children:"\u4e0a\u50b3\u6a94\u6848"})]})},D=Object(l.a)((function(e){return{root:{flexGrow:1,background:"#eee",color:"black"},toolbar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),J=Object(u.a)((function(e){return{root:{borderBottom:"none",minHeight:24},indicator:{backgroundColor:"transparent"}}}))(x.a),T=Object(u.a)((function(e){return{root:{textTransform:"none",minWidth:36,fontWeight:900,marginRight:e.spacing(0),fontSize:"15px",opacity:1,padding:"6px 6px"},selected:{"& > .MuiTab-wrapper":{color:"#3B3C45",backgroundColor:"#dedede"}},wrapper:{color:"#aaa",borderRadius:"30px",padding:"2px 10px 0px 10px"}}}))((function(e){return Object(p.jsx)(f.a,Object(o.a)({disableRipple:!0},e))})),F=function(){var e=D(),t=Object(i.useContext)(v),n=t.dictionary.version,a=t.setVersion,r=Object(i.useState)(!1),c=Object(s.a)(r,2),o=c[0],l=c[1],u=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(e)}};return Object(p.jsx)(h.a,{position:"sticky",className:e.root,children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{variant:"h6",className:e.title,children:"\u6821\u8b8e\u8db3\u4e0b"}),Object(p.jsxs)(J,{onChange:function(e,t){return a(t)},value:n,children:[Object(p.jsx)(T,{value:"hk",label:"\u6e2f"}),Object(p.jsx)(T,{value:"tw",label:"\u53f0"}),Object(p.jsx)(T,{value:"self",label:"\u81ea\u8a02",onClick:u(!0)})]}),Object(p.jsx)(b.a,{anchor:"right",open:o,onClose:u(!1),onOpen:u(!0),children:Object(p.jsx)(N,{})})]})})},z=n(23),A=n(153),R=Object(m.a)((function(e){return{textarea:Object(z.a)({width:"90%",height:"100%"},e.breakpoints.down("md"),{height:"400px"})}})),B=function(){var e=R(),t=Object(i.useContext)(v),n=t.text,a=t.setText;return Object(p.jsx)("textarea",{value:n,onChange:function(e){return a(e.target.value)},className:e.textarea})},E=n(74),I=n(159),W=n(150),P=n(158),H=n(151),M=n(152),G=function(){var e=Object(i.useContext)(v),t=e.dictionary.dict,n=e.text,a=e.result,r=e.setResult,c=Object(i.useState)(!1),o=Object(s.a)(c,2),l=o[0],u=o[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(I.a,{title:"\u6821\u5c0d","aria-label":"\u6821\u5c0d",children:Object(p.jsx)(W.a,{"aria-label":"\u6821",onClick:function(){var e=[];Object(E.a)(n).forEach((function(t){e.push({highlighted:null,value:t})})),t.forEach((function(t,n){for(var i=0;i<e.length;++i){for(var a=!0,r=0;a&&r<t.find.length;++r)a=a&&null!=e[i+r]&&t.find[r]===e[i+r].value;if(a){e.splice(i,t.find.length);for(var c=0;c<t.replace.length;++c)e.splice(i+c,0,{highlighted:n,value:t.replace[c]})}}}));var i=[],a=JSON.parse(JSON.stringify(e[0]||{}));e.slice(1).forEach((function(e){"\n"===e.value?(i.push(a),i.push({value:"\n",highlighted:null}),a=JSON.parse(JSON.stringify({}))):a.highlighted===e.highlighted?a.value+=e.value:(i.push(a),a=JSON.parse(JSON.stringify(e)))})),i.push(a),r(JSON.parse(JSON.stringify(i)))},children:Object(p.jsx)(H.a,{})})}),Object(p.jsx)(I.a,{title:"\u8907\u88fd\u6821\u672c","aria-label":"\u8907\u88fd\u6821\u672c",children:Object(p.jsx)(W.a,{"aria-label":"\u8907\u88fd\u6821\u672c",onClick:function(){navigator.clipboard.writeText(a.map((function(e){return e.value})).join("")),u(!0)},children:Object(p.jsx)(M.a,{})})}),Object(p.jsx)(P.a,{open:l,autoHideDuration:1e3,onClose:function(e){return u(!1)},message:"Copied"})]})},L=n(71),V=n.n(L),U=Object(m.a)((function(e){return{resultContainer:Object(z.a)({border:"1px solid black",width:"90%",height:"100%",textAlign:"left",padding:"2px",font:"400 13.3333px Arial","& span":{fontFamily:"monospace"},wordBreak:"break-word",appearance:"textarea"},e.breakpoints.down("md"),{height:"400px"}),highlighted:{backgroundColor:"yellow",cursor:"pointer"},active:{backgroundColor:"pink !important"}}})),q=function(){var e=Object(i.useContext)(v),t=e.result,n=e.active,a=e.setActive,r=U();return Object(p.jsx)("div",{className:r.resultContainer,children:t.map((function(e,i){return"\n"===e.value?Object(p.jsx)("br",{}):Object(p.jsx)("span",{className:V()(null!==e.highlighted?r.highlighted:null,n===i?r.active:null),onClick:function(){return function(e){null!==t[e].highlighted&&a(e===n?-1:e)}(i)},children:e.value},"span-"+i)}))})},K=Object(m.a)((function(e){var t;return{gridContainer:(t={height:"75vh"},Object(z.a)(t,e.breakpoints.down("md"),{marginBottom:"100px",height:"100%"}),Object(z.a)(t,"& .MuiGrid-item",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),t)}})),Q=function(){var e=K();return Object(p.jsxs)(A.a,{container:!0,className:e.gridContainer,children:[Object(p.jsxs)(A.a,{item:!0,xs:12,md:5,children:[Object(p.jsx)("h3",{children:"\u6587\u672c"}),Object(p.jsx)(B,{})]}),Object(p.jsx)(A.a,{item:!0,xs:12,md:2,children:Object(p.jsx)(G,{})}),Object(p.jsxs)(A.a,{item:!0,xs:12,md:5,children:[Object(p.jsx)("h3",{children:"\u6821\u672c"}),Object(p.jsx)(q,{})]})]})},X=n(73),Y=n.n(X),Z=n(72),$=n.n(Z),_=Object(m.a)((function(e){return{root:{position:"fixed",bottom:0,height:"15vh",width:"100%",backgroundColor:"#eee",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},remark:{color:"#444",marginTop:"10px",fontSize:"0.8em"},showcase:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:"1.5em"},changeIcon:{margin:"0 40px",padding:"6px 8px"}}})),ee=function(){var e=Object(i.useContext)(v),t=e.result,n=e.setResult,a=e.active,r=e.setActive,c=e.dictionary.dict,o=_(),s=-1===a?{find:"",replace:""}:c[t[a].highlighted],l=s.find,u=s.replace,h=s.remark,d=function(e){n(t.map((function(t,n){return{value:a===n?e:t.value,highlighted:t.highlighted}}))),r(-1)};return Object(p.jsxs)("div",{className:o.root,children:[-1===a?Object(p.jsx)(p.Fragment,{}):Object(p.jsxs)("div",{className:o.showcase,children:[Object(p.jsx)(w.a,{variant:"outlined",onClick:function(e){return d(l)},children:l}),Object(p.jsx)("div",{className:o.changeIcon,children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(w.a,{variant:"outlined",onClick:function(e){return d(u)},children:u})]}),Object(p.jsx)("div",{className:o.remark,children:-1===a?Object(p.jsx)(p.Fragment,{}):h}),Object(p.jsx)("div",{style:{position:"fixed",bottom:0},children:Object(p.jsx)($.a,{styles:te,message:"\u70ba\u4e86\u63d0\u5347\u670d\u52d9\u8cea\u7d20\uff0c\u6211\u5011\u6703\u4f7f\u7528Cookie\u6216\u5176\u4ed6\u985e\u4f3c\u6280\u8853\u4f86\u4e86\u89e3\u6211\u5011\u7684\u6d41\u91cf\u548c\u63d0\u5347\u3926\u7528\u8005\u9ad4\u9a57\u3002",buttonMessage:"\u6211\u660e\u767d",dismissOnScroll:!1})})]})},te={banner:{fontFamily:"Source Sans Pro",height:57,background:"rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat",backgroundSize:"30px 30px",backgroundColor:"",fontSize:"15px",fontWeight:600},button:{border:"1px solid white",borderRadius:4,width:66,height:32,lineHeight:"32px",background:"transparent",color:"white",fontSize:"14px",fontWeight:600,opacity:1,right:20,marginTop:-18},message:{display:"block",padding:"9px 9px",lineHeight:1.3,textAlign:"left",width:"70%",fontSize:"0.8em",color:"white"},link:{textDecoration:"none",fontWeight:"bold"}},ne=n(154),ie=n(155),ae=Object(ne.a)();var re=function(){return Object(p.jsx)(ie.a,{theme:ae,children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(F,{}),Object(p.jsx)(Q,{}),Object(p.jsx)(ee,{})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))},oe=n(55);oe.a.initialize("UA-76645629-1"),oe.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{children:Object(p.jsx)(re,{})})}),document.getElementById("root")),ce()},85:function(e,t,n){},86:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.19a08aae.chunk.js.map