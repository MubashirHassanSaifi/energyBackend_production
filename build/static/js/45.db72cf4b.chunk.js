(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[45],{1823:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(53),l=t(41),o=t(369),i=t(377),s=t(105),m=t(219),u=t.n(m),d=t(1212),p=t(92),f=t(29),b=t(30),E=t(2),h=t(81),g=t(368),v=t(654),y=t(274),O=t(1207),j=t(1793),x=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center",height:64,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}));var k=function(e){var a=e.className,t=Object(f.a)(e,["className"]),n=x();return r.a.createElement("div",Object.assign({className:Object(E.default)(n.root,a)},t),r.a.createElement(h.a,{variant:"h3",color:"textPrimary"},"Chats"),r.a.createElement(g.a,{flexGrow:1}),r.a.createElement(v.a,null,r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(O.a,null))),r.a.createElement(v.a,{component:b.a,to:"/app/chat/new"},r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(j.a,null))))},N=t(66),w=t(34),S=t(1120),I=t(593),C=t(1127),P=t(1128),R=t(1185),A=t(1215),L=t(1137),z=t(1206),T=t(1149);var W=Object(o.a)((function(e){return{active:{boxShadow:"inset 4px 0px 0px ".concat(e.palette.secondary.main),backgroundColor:e.palette.action.active},avatar:{height:40,width:40},unreadIndicator:{marginTop:2,padding:2,height:18,minWidth:18}}}));function D(e){var a=e.active,t=e.thread,n=e.className,c=Object(f.a)(e,["active","thread","className"]),o=W(),i=Object(l.d)((function(e){return e.account})).user,s=Object(l.d)((function(e){return function(e,a,t){var n=e.chat.contacts,r=a.participantIds.filter((function(e){return e!==t}))[0];return n.byId[r]}(e,t,i.id)})),m=t.messages[t.messages.length-1],u=m?"".concat(m.senderId===i.id?"Me:":""," ").concat("image"===m.contentType?"Sent a photo":m.body):"";return r.a.createElement(P.a,Object.assign({button:!0,className:Object(E.default)(Object(N.a)({},o.active,a),n),component:b.a,to:"/app/chat/".concat(t.key)},c),r.a.createElement(R.a,null,r.a.createElement(A.a,{alt:"Person",className:o.avatar,src:s.avatar})),r.a.createElement(L.a,{primary:s.name,primaryTypographyProps:{noWrap:!0,variant:"h6",color:"textPrimary"},secondary:u,secondaryTypographyProps:{noWrap:!0,variant:"body2",color:"textSecondary"}}),r.a.createElement(g.a,{ml:2,display:"flex",flexDirection:"column",alignItems:"flex-end"},t.unreadCount>0&&r.a.createElement(T.a,{className:o.unreadIndicator,color:"secondary",size:"small",label:t.unreadCount})))}D.defaultProps={active:!1,className:""};var M=D;var B=Object(o.a)((function(e){return{root:{},searchContainer:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},search:{display:"flex",alignItems:"center",height:44,borderRadius:22,paddingLeft:e.spacing(2),paddingRight:e.spacing(2),backgroundColor:e.palette.background.dark},searchInput:{flexGrow:1,marginLeft:e.spacing(1)},contactAvatar:{height:32,width:32},threadList:{},hideThreadList:{display:"none"}}}));var G=function(e){var a=e.className,t=Object(f.a)(e,["className"]),o=B(),i=Object(c.h)(),m=Object(l.c)(),u=Object(l.d)((function(e){return e.chat})),d=u.threads,p=u.contacts,v=Object(n.useState)(""),O=Object(w.a)(v,2),j=O[0],x=O[1],k=Object(n.useState)(!1),T=Object(w.a)(k,2),W=T[0],D=T[1];return Object(n.useEffect)((function(){m(Object(s.l)())}),[m]),Object(n.useEffect)((function(){W&&D(!1)}),[i.pathname]),r.a.createElement("div",Object.assign({className:Object(E.default)(o.root,a)},t),r.a.createElement(S.a,{onClickAway:function(){W&&(x(""),D(!1))}},r.a.createElement("div",{className:o.searchContainer},r.a.createElement("div",{className:o.search},r.a.createElement(y.a,{fontSize:"small",color:"action"},r.a.createElement(z.a,null)),r.a.createElement(I.a,{className:o.searchInput,disableUnderline:!0,onChange:function(e){e.persist(),x(e.target.value)},onFocus:function(e){e.persist(),D(!0)},placeholder:"Search contacts",value:j})),W&&r.a.createElement(g.a,{mt:2},r.a.createElement(h.a,{variant:"h6",color:"textSecondary"},"Contacts"),r.a.createElement(C.a,null,function(e,a){return a?e.allIds.filter((function(t){return e.byId[t].name.toLowerCase().includes(a.toLowerCase())})):e.allIds}(p,j).map((function(e){var a=p.byId[e];return r.a.createElement(P.a,{button:!0,component:b.a,key:a.id,to:"/app/chat/".concat(a.username)},r.a.createElement(R.a,null,r.a.createElement(A.a,{src:a.avatar,className:o.contactAvatar})),r.a.createElement(L.a,{primary:a.name,primaryTypographyProps:{noWrap:!0,variant:"h6",color:"textPrimary"}}))})))))),r.a.createElement(C.a,{className:Object(E.default)(o.threadList,Object(N.a)({},o.hideThreadList,W))},d.allKeys.map((function(e){return r.a.createElement(M,{key:e,thread:d.byKey[e]})}))))},U=Object(o.a)((function(){return{drawerDesktopRoot:{width:280,flexShrink:0},drawerDesktopPaper:{position:"relative"},drawerMobilePaper:{position:"relative",width:280},drawerMobileBackdrop:{position:"absolute"}}}));var K=function(e){var a=e.containerRef,t=U(),o=Object(l.c)(),i=Object(c.h)(),m=Object(l.d)((function(e){return e.chat})).sidebarOpen;Object(n.useEffect)((function(){m&&o(Object(s.i)())}),[i.pathname]);var f=r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(u.a,{options:{suppressScrollX:!0}},r.a.createElement(G,null)));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{smDown:!0},r.a.createElement(p.a,{variant:"permanent",classes:{root:t.drawerDesktopRoot,paper:t.drawerDesktopPaper}},f)),r.a.createElement(d.a,{mdUp:!0},r.a.createElement(p.a,{variant:"temporary",open:m,onClose:function(){o(Object(s.i)())},classes:{paper:t.drawerMobilePaper},style:{position:"absolute",zIndex:1200},BackdropProps:{classes:{root:t.drawerMobileBackdrop}},ModalProps:{container:function(){return a.current}}},f)))},F=t(1180),_=t(6),J=t.n(_),X=t(176),q=t(1147),H=t(617),Q=t(1138),V=t(1186),Y=t(1208),Z=t(1364),$=t(1794),ee=t(1363),ae=t(1493),te=t(1795),ne=t(611);var re=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:64,flexShrink:0,display:"flex",alignItems:"center",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},onlineIndicator:{marginRight:e.spacing(1)},searchInput:{marginLeft:e.spacing(2),flexGrow:1}}}));var ce=function(e){var a=e.className,t=e.thread,c=Object(f.a)(e,["className","thread"]),o=re(),i=Object(n.useRef)(null),m=Object(l.c)(),u=Object(n.useState)(!1),p=Object(w.a)(u,2),b=p[0],O=p[1],j=Object(l.d)((function(e){return function(e,a){var t=e.chat.contacts,n=e.account.user,r=a.filter((function(e){return e!==n.id}))[0];return t.byId[r]}(e,t.participantIds)}));return r.a.createElement("div",Object.assign({className:Object(E.default)(o.root,a)},c),r.a.createElement(d.a,{mdUp:!0},r.a.createElement(v.a,{className:o.menuButton,onClick:function(){m(Object(s.n)())}},r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(Y.a,null)))),j&&r.a.createElement(g.a,{display:"flex",alignItems:"center"},r.a.createElement(A.a,{src:j.avatar}),r.a.createElement(g.a,{ml:1},r.a.createElement(h.a,{variant:"h6",color:"textPrimary"},j.name),r.a.createElement(g.a,{display:"flex",alignItems:"center"},j.isActive?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{className:o.onlineIndicator,status:"online",size:"small"}),r.a.createElement(h.a,{color:"textSecondary",variant:"caption"},"Active now")):r.a.createElement(h.a,{color:"textSecondary",variant:"caption"},"Active"," ",J()(j.lastActivity).fromNow())))),r.a.createElement(g.a,{flexGrow:1}),r.a.createElement(d.a,{smDown:!0},r.a.createElement(X.a,{component:g.a,display:"flex",alignItems:"center",variant:"outlined",py:.5,px:1},r.a.createElement(y.a,{fontSize:"small",color:"action"},r.a.createElement(z.a,null)),r.a.createElement(I.a,{className:o.searchInput,disableUnderline:!0,placeholder:"Search message"}))),r.a.createElement(q.a,{title:"More options"},r.a.createElement(v.a,{onClick:function(){O(!0)},ref:i},r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(Z.a,null)))),r.a.createElement(H.a,{anchorEl:i.current,keepMounted:!0,elevation:1,onClose:function(){O(!1)},open:b},r.a.createElement(Q.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,{fontSize:"small"},r.a.createElement($.a,null))),r.a.createElement(L.a,{primary:"Block contact"})),r.a.createElement(Q.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(ee.a,null))),r.a.createElement(L.a,{primary:"Delete thread"})),r.a.createElement(Q.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(ae.a,null))),r.a.createElement(L.a,{primary:"Archive thread"})),r.a.createElement(Q.a,null,r.a.createElement(V.a,null,r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(te.a,null))),r.a.createElement(L.a,{primary:"Mute notifications"}))))},le=t(1292),oe=t(1184);var ie=Object(o.a)((function(e){return{root:{marginBottom:e.spacing(2),display:"flex"},avatar:{height:32,width:32},image:{cursor:"pointer",height:"auto",maxWidth:"100%",width:380}}}));var se=function(e){var a=e.className,t=e.message,c=Object(f.a)(e,["className","message"]),o=ie(),i=Object(n.useState)(null),s=Object(w.a)(i,2),m=s[0],u=s[1],d=Object(l.d)((function(e){return function(e,a){var t=e.account.user,n=e.chat.contacts;if(a!==t.id){var r=n.byId[a];return{avatar:r.avatar,name:r.name,type:"contact"}}return{avatar:t.avatar,name:"Me",type:"user"}}(e,t.senderId)}));return r.a.createElement("div",Object.assign({className:Object(E.default)(o.root,a)},c),r.a.createElement(g.a,{display:"flex",maxWidth:500,ml:"user"===d.type?"auto":0},r.a.createElement(A.a,{className:o.avatar,src:d.avatar}),r.a.createElement(g.a,{ml:2},r.a.createElement(g.a,{bgcolor:"user"===d.type?"secondary.main":"background.default",color:"user"===d.type?"secondary.contrastText":"text.primary",py:1,px:2,borderRadius:"borderRadius",boxShadow:1},r.a.createElement(oe.a,{color:"inherit",component:b.a,to:"#",variant:"h6"},d.name),r.a.createElement(g.a,{mt:1},"image"===t.contentType?r.a.createElement(g.a,{mt:2,onClick:function(){return u(t.body)}},r.a.createElement("img",{alt:"Attachment",className:o.image,src:t.body})):r.a.createElement(h.a,{color:"inherit",variant:"body1"},t.body))),r.a.createElement(g.a,{mt:1,display:"flex",justifyContent:"flex-end"},r.a.createElement(h.a,{noWrap:!0,color:"textSecondary",variant:"caption"},J()(t.createdAt).fromNow())))),m&&r.a.createElement(le.a,{large:m,onClose:function(){return u(null)}}))},me=t(26),ue=t.n(me),de=t(49),pe=t(117),fe=t(1239),be=t.n(fe),Ee=t(1242),he=t.n(Ee),ge=t(1796),ve=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.default,display:"flex",alignItems:"center",padding:e.spacing(1,2)},divider:{width:1,height:24},fileInput:{display:"none"}}}));function ye(e){var a=e.className,t=e.disabled,c=e.thread,o=e.onAdd,i=Object(f.a)(e,["className","disabled","thread","onAdd"]),m=ve(),u=Object(l.d)((function(e){return e.account})).user,d=Object(l.c)(),p=Object(pe.useSnackbar)().enqueueSnackbar,b=Object(n.useRef)(null),h=Object(n.useState)(""),O=Object(w.a)(h,2),j=O[0],x=O[1],k=[],N=function(){var e=Object(de.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,j&&c){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,d(Object(s.h)({userId:u.id,threadKey:c.key,body:j,attachments:k}));case 5:x(""),o(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("Ooops!",{variant:"error"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){b.current.click()};return r.a.createElement("div",Object.assign({className:Object(E.default)(m.root,a)},i),r.a.createElement(A.a,{alt:"Person",src:u.avatar}),r.a.createElement(X.a,{variant:"outlined",component:g.a,flexGrow:1,ml:2,p:1},r.a.createElement(I.a,{className:m.input,disableUnderline:!0,fullWidth:!0,value:j,onChange:function(e){e.persist(),x(e.target.value)},onKeyUp:function(e){13===e.keyCode&&N()},placeholder:"Leave a message"})),r.a.createElement(q.a,{title:"Send"},r.a.createElement("span",null,r.a.createElement(v.a,{color:"secondary",disabled:!j||t,onClick:N},r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(ge.a,null))))),r.a.createElement(F.a,{className:m.divider}),r.a.createElement(q.a,{title:"Attach photo"},r.a.createElement("span",null,r.a.createElement(v.a,{edge:"end",onClick:S,disabled:t},r.a.createElement(be.a,null)))),r.a.createElement(q.a,{title:"Attach file"},r.a.createElement("span",null,r.a.createElement(v.a,{edge:"end",onClick:S,disabled:t},r.a.createElement(he.a,null)))),r.a.createElement("input",{className:m.fileInput,ref:b,type:"file"}))}ye.defaultProps={className:"",disabled:!1,onAdd:function(){}};var Oe=ye;var je=Object(o.a)((function(e){return{root:{flexGrow:1,display:"flex",flexDirection:"column",backgroundColor:e.palette.background.dark}}}));var xe=function(){var e=je(),a=Object(l.c)(),t=Object(c.i)().threadKey,o=Object(c.g)(),i=Object(l.d)((function(e){return function(e,a,t){var n=e.chat,r=n.threads,c=n.contacts,l=e.account.user,o=r.byKey[a];if(!o){var i=c.allIds.filter((function(e){return c.byId[e].username===a}))[0];return i||t.push("/app/chat/new"),{key:a,type:"ONE_TO_ONE",participantIds:[i,l.id],messages:[]}}return o}(e,t,o)})),m=Object(n.useRef)(null);return Object(n.useEffect)((function(){a(Object(s.k)(t)),a(Object(s.m)(t))}),[a,t]),Object(n.useEffect)((function(){i&&m.current&&(m.current._container.scrollTop=m.current._container.scrollHeight)}),[i.messages]),i?r.a.createElement("div",{className:e.root},r.a.createElement(ce,{thread:i}),r.a.createElement(F.a,null),r.a.createElement(g.a,{flexGrow:1,p:2,ref:m,component:u.a,options:{suppressScrollX:!0}},i.messages.length>0&&i.messages.map((function(e){return r.a.createElement(se,{key:e.id,message:e})}))),r.a.createElement(F.a,null),r.a.createElement(Oe,{thread:i})):null},ke=t(1130);var Ne=Object(o.a)((function(e){return{root:{},input:{backgroundColor:e.palette.background.default,paddingLeft:e.spacing(2),paddingRight:e.spacing(2),height:32,borderRadius:16}}}));var we=function(e){var a=e.className,t=Object(f.a)(e,["className"]),c=Ne(),o=Object(l.d)((function(e){return e.chat})).contacts,i=Object(n.useRef)(null),s=Object(n.useState)(""),m=Object(w.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(!1),v=Object(w.a)(p,2),y=v[0],O=v[1];Object(n.useEffect)((function(){u&&!y&&O(!0)}),[u]);var j=function(e,a){return a?e.allIds.filter((function(t){return e.byId[t].name.toLowerCase().includes(a.toLowerCase())})):e.allIds}(o,u);return r.a.createElement("div",Object.assign({className:Object(E.default)(c.root,a)},t),r.a.createElement(I.a,{className:c.input,disableUnderline:!0,onChange:function(e){e.persist(),d(e.target.value)},placeholder:"Search contacts",value:u,ref:i,autoFocus:!0}),r.a.createElement(ke.a,{anchorEl:i.current,open:y,placement:"bottom-start"},r.a.createElement(S.a,{onClickAway:function(){O(!1)}},r.a.createElement(g.a,{component:X.a,width:320,maxWidth:"100%",mt:1},0===j.length?r.a.createElement(g.a,{px:2,pb:2,pt:2,textAlign:"center"},r.a.createElement(h.a,{variant:"h4",color:"textPrimary",gutterBottom:!0},"Nothing Found"),r.a.createElement(h.a,{variant:"body2",color:"textSecondary"},"We couldn't find any matches for \"",u,'". Try checking for typos or using complete words.')):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{px:2,pt:2},r.a.createElement(h.a,{variant:"h6",color:"textSecondary"},"Contacts")),r.a.createElement(C.a,null,j.map((function(e){var a=o.byId[e];return r.a.createElement(P.a,{button:!0,component:b.a,key:a.id,to:"/app/chat/".concat(a.username)},r.a.createElement(R.a,null,r.a.createElement(A.a,{src:a.avatar,className:c.contactAvatar})),r.a.createElement(L.a,{primary:a.name,primaryTypographyProps:{noWrap:!0,variant:"h6",color:"textPrimary"}}))}))))))))},Se=Object(o.a)((function(e){return{root:{flexGrow:1,display:"flex",flexDirection:"column",backgroundColor:e.palette.background.dark},search:{marginLeft:e.spacing(2)}}}));var Ie=function(){var e=Se(),a=Object(l.c)();return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{mdUp:!0},r.a.createElement(g.a,{px:2,py:1,bgcolor:"background.default"},r.a.createElement(v.a,{className:e.menuButton,edge:"start",onClick:function(){a(Object(s.n)())}},r.a.createElement(y.a,{fontSize:"small"},r.a.createElement(Y.a,null)))),r.a.createElement(F.a,null)),r.a.createElement(g.a,{display:"flex",alignItems:"center",p:2},r.a.createElement(h.a,{variant:"body1",color:"textSecondary"},"To:"),r.a.createElement(we,{className:e.search})),r.a.createElement(g.a,{flexGrow:1}),r.a.createElement(F.a,null),r.a.createElement(Oe,{disabled:!0}))},Ce=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,height:"100%",display:"flex",overflow:"hidden",position:"relative"}}}));a.default=function(){var e=Ce(),a=Object(l.c)(),t=Object(c.i)().threadKey,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){a(Object(s.j)())}),[a]),r.a.createElement(i.a,{className:e.root,title:"Chat",ref:o},r.a.createElement(K,{containerRef:o}),t?r.a.createElement(xe,null):r.a.createElement(Ie,null))}}}]);
//# sourceMappingURL=45.db72cf4b.chunk.js.map