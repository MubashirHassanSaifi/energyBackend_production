(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[24],{1226:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1253:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1719:function(e,a,t){"use strict";t.r(a);var n=t(33),r=t(0),c=t.n(r),l=t(594),o=t(1177),i=t(368),m=t(1214),s=t(1192),u=t(1183),d=t(98),E=t(1226),b=t(377),p=t(29),f=t(96),v=t(26),g=t(2),y=t(12),j=t(1138),h=t(1220),O=t(78),x=t(1217),N=t(1151),k=t(656),S=t(1304),P=t.n(S),w=t(1270),C=t.n(w),I=Object(l.a)((function(e){var a;return{root:{},cover:{position:"relative",height:460,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:before":{position:"absolute",content:'" "',top:0,left:0,height:"100%",width:"100%",backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)"},"&:hover":{"& $changeButton":{visibility:"visible"}}},changeButton:(a={visibility:"hidden",position:"absolute",bottom:e.spacing(3),right:e.spacing(3),backgroundColor:y.colors.blueGrey[900],color:e.palette.common.white},Object(f.a)(a,e.breakpoints.down("md"),{top:e.spacing(3),bottom:"auto"}),Object(f.a)(a,"&:hover",{backgroundColor:y.colors.blueGrey[900]}),a),addPhotoIcon:{marginRight:e.spacing(1)},avatar:{border:"2px solid ".concat(e.palette.common.white),height:120,width:120,top:-60,left:e.spacing(3),position:"absolute"},action:{marginLeft:e.spacing(1)}}}));var z=function(e){var a=e.className,t=e.user,l=Object(p.a)(e,["className","user"]),m=I(),s=Object(r.useState)(t.connectedStatus),u=Object(n.a)(s,2),d=u[0],E=u[1],b=function(){E((function(e){return"not_connected"===e?"pending":"not_connected"}))};return c.a.createElement("div",Object.assign({className:Object(g.default)(m.root,a)},l),c.a.createElement("div",{className:m.cover,style:{backgroundImage:"url(".concat(t.cover,")")}},c.a.createElement(j.a,{className:m.changeButton,variant:"contained"},c.a.createElement(P.a,{className:m.addPhotoIcon}),"Change Cover")),c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(i.a,{position:"relative",mt:1,display:"flex",alignItems:"center"},c.a.createElement(h.a,{alt:"Person",className:m.avatar,src:t.avatar}),c.a.createElement(i.a,{marginLeft:"160px"},c.a.createElement(O.a,{variant:"overline",color:"textSecondary"},t.bio),c.a.createElement(O.a,{variant:"h4",color:"textPrimary"},t.name)),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(x.a,{smDown:!0},"not_connected"===d&&c.a.createElement(j.a,{onClick:b,size:"small",variant:"outlined",className:m.action},"Connect"),"pending"===d&&c.a.createElement(j.a,{onClick:b,size:"small",variant:"outlined",className:m.action},"Pending"),c.a.createElement(j.a,{color:"secondary",component:v.a,size:"small",to:"/app/chat",variant:"contained",className:m.action},"Send message")),c.a.createElement(N.a,{title:"More options"},c.a.createElement(k.a,{className:m.action},c.a.createElement(C.a,null))))))},A=t(1184),G=t(31),L=t(1170),B=t(1173),R=t(173),T=t(595),W=t(1354),U=t.n(W),J=t(1355),_=t.n(J),q=Object(l.a)((function(){return{root:{},divider:{width:1,height:24},fileInput:{display:"none"}}}));var H=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=q(),o=Object(r.useRef)(null),m=Object(r.useState)(""),s=Object(n.a)(m,2),d=s[0],E=s[1],b=Object(G.d)((function(e){return e.account})),f=function(){o.current.click()};return c.a.createElement(L.a,Object.assign({className:Object(g.default)(l.root,a)},t),c.a.createElement(B.a,null,c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(R.a,{component:i.a,flexGrow:1,py:.5,px:2,variant:"outlined"},c.a.createElement(T.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),E(e.target.value)},placeholder:"What's on your mind, ".concat(b.user.firstName)})),c.a.createElement(N.a,{title:"Send"},c.a.createElement(k.a,{color:d.length>0?"primary":"default"},c.a.createElement(U.a,null))),c.a.createElement(u.a,{className:l.divider}),c.a.createElement(N.a,{title:"Attach image"},c.a.createElement(k.a,{edge:"end",onClick:f},c.a.createElement(P.a,null))),c.a.createElement(N.a,{title:"Attach file"},c.a.createElement(k.a,{edge:"end",onClick:f},c.a.createElement(_.a,null))),c.a.createElement("input",{className:l.fileInput,ref:o,type:"file"}))))},D=t(6),F=t.n(D),M=t(1699),$=t(1174),K=t(1187),Q=t(1171),V=t(1175),X=t(1481),Y=t.n(X),Z=t(1356),ee=t.n(Z),ae=t(1357),te=t.n(ae),ne=t(1480),re=t.n(ne),ce=Object(l.a)((function(){return{root:{display:"flex",alignItems:"center"},likedButton:{color:y.colors.red[600]}}}));var le=function(e){var a=e.post,t=e.className,l=Object(p.a)(e,["post","className"]),o=ce(),m=Object(r.useState)(a.liked),s=Object(n.a)(m,2),u=s[0],d=s[1],E=Object(r.useState)(a.likes),b=Object(n.a)(E,2),f=b[0],v=b[1];return c.a.createElement("div",Object.assign({className:Object(g.default)(o.root,t)},l),u?c.a.createElement(N.a,{title:"Unlike"},c.a.createElement(k.a,{className:o.likedButton,onClick:function(){d(!1),v((function(e){return e-1}))}},c.a.createElement(ee.a,{fontSize:"small"}))):c.a.createElement(N.a,{title:"Like"},c.a.createElement(k.a,{onClick:function(){d(!0),v((function(e){return e+1}))}},c.a.createElement(te.a,{fontSize:"small"}))),c.a.createElement(O.a,{color:"textSecondary",variant:"h6"},f),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(k.a,null,c.a.createElement(re.a,{fontSize:"small"})))},oe=Object(l.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},bubble:{borderRadius:e.shape.borderRadius}}}));var ie=function(e){var a=e.comment,t=e.className,n=Object(p.a)(e,["comment","className"]),r=oe();return c.a.createElement("div",Object.assign({className:Object(g.default)(r.root,t)},n),c.a.createElement(h.a,{alt:"Person",component:v.a,src:a.author.avatar,to:"#"}),c.a.createElement(i.a,{flexGrow:1,p:2,ml:2,bgcolor:"background.dark",className:r.bubble},c.a.createElement(i.a,{display:"flex",alignItems:"center",mb:1},c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h6"},a.author.name),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(O.a,{color:"textSecondary",variant:"caption"},F()(a.createdAt).fromNow())),c.a.createElement(O.a,{variant:"body1",color:"textPrimary"},a.message)))},me=Object(l.a)((function(){return{root:{display:"flex",alignItems:"center"},divider:{width:1,height:24},fileInput:{display:"none"}}}));var se=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=me(),o=Object(G.d)((function(e){return e.account})).user,m=Object(r.useRef)(null),s=Object(r.useState)(""),d=Object(n.a)(s,2),E=d[0],b=d[1],f=function(){m.current.click()};return c.a.createElement("div",Object.assign({className:Object(g.default)(l.root,a)},t),c.a.createElement(h.a,{alt:"Person",src:o.avatar}),c.a.createElement(R.a,{variant:"outlined",flexGrow:1,component:i.a,ml:2,py:.5,px:2},c.a.createElement(T.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),b(e.target.value)},placeholder:"Leave a message"})),c.a.createElement(N.a,{title:"Send"},c.a.createElement(k.a,{color:E.length>0?"primary":"default"},c.a.createElement(U.a,null))),c.a.createElement(u.a,{className:l.divider}),c.a.createElement(N.a,{title:"Attach image"},c.a.createElement(k.a,{edge:"end",onClick:f},c.a.createElement(P.a,null))),c.a.createElement(N.a,{title:"Attach file"},c.a.createElement(k.a,{edge:"end",onClick:f},c.a.createElement(_.a,null))),c.a.createElement("input",{className:l.fileInput,ref:m,type:"file"}))},ue=Object(l.a)((function(){return{root:{},date:{marginLeft:6},media:{height:500,backgroundPosition:"top"}}}));var de=function(e){var a=e.className,t=e.post,l=Object(p.a)(e,["className","post"]),o=ue(),m=Object(r.useState)(null),s=Object(n.a)(m,2),d=s[0],E=s[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,Object.assign({className:Object(g.default)(o.root,a)},l),c.a.createElement($.a,{avatar:c.a.createElement(h.a,{alt:"Person",className:o.avatar,component:v.a,src:t.author.avatar,to:"#"}),disableTypography:!0,subheader:c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(Y.a,{fontSize:"small"}),c.a.createElement(O.a,{variant:"caption",color:"textSecondary",className:o.date},F()(t.createdAt).fromNow())),title:c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h6"},t.author.name)}),c.a.createElement(i.a,{px:3,pb:2},c.a.createElement(O.a,{variant:"body1",color:"textPrimary"},t.message),t.media&&c.a.createElement(i.a,{mt:2},c.a.createElement(Q.a,{onClick:function(){return E(t.media)}},c.a.createElement(V.a,{className:o.media,image:t.media}))),c.a.createElement(i.a,{mt:2},c.a.createElement(le,{post:t})),c.a.createElement(i.a,{my:2},c.a.createElement(u.a,null)),t.comments.map((function(e){return c.a.createElement(ie,{comment:e,key:e.id})})),c.a.createElement(i.a,{my:2},c.a.createElement(u.a,null)),c.a.createElement(se,null))),d&&c.a.createElement(M.a,{large:d,onClose:function(){return E(null)}}))},Ee=t(1186),be=t(1131),pe=t(1132),fe=t(1188),ve=t(1141),ge=t(1707),ye=t(1708),je=t(1709),he=t(1710),Oe=Object(l.a)((function(e){return{root:{},jobAvatar:{backgroundColor:e.palette.secondary.main},cityAvatar:{backgroundColor:y.colors.red[600]}}}));var xe=function(e){var a=e.className,t=e.user,n=Object(p.a)(e,["className","user"]),r=Oe();return c.a.createElement("div",Object.assign({className:Object(g.default)(r.root,a)},n),c.a.createElement(L.a,null,c.a.createElement($.a,{title:"Profile Progress"}),c.a.createElement(u.a,null),c.a.createElement(B.a,null,c.a.createElement(Ee.a,{variant:"determinate",value:t.profileProgress}),c.a.createElement(i.a,{mt:2},c.a.createElement(O.a,{variant:"subtitle2",color:"textSecondary"},"50% Set Up Complete")))),c.a.createElement(i.a,{mt:3},c.a.createElement(L.a,null,c.a.createElement($.a,{title:"About"}),c.a.createElement(u.a,null),c.a.createElement(B.a,null,c.a.createElement(O.a,{variant:"subtitle2",color:"textSecondary"},'"',t.quote,'"'),c.a.createElement(be.a,null,c.a.createElement(pe.a,{disableGutters:!0,divider:!0},c.a.createElement(fe.a,null,c.a.createElement(h.a,{className:r.jobAvatar},c.a.createElement(ge.a,{size:"22"}))),c.a.createElement(ve.a,{disableTypography:!0,primary:c.a.createElement(O.a,{variant:"body2",color:"textPrimary"},t.currentJob.title," ","at"," ",c.a.createElement(K.a,{variant:"subtitle2",color:"textPrimary",href:"#"},t.currentJob.company)),secondary:c.a.createElement(O.a,{variant:"caption",color:"textSecondary"},"Past:",t.previousJob.title," ",c.a.createElement(K.a,{variant:"caption",color:"textSecondary",href:"#"},t.previousJob.company))})),c.a.createElement(pe.a,{disableGutters:!0,divider:!0},c.a.createElement(fe.a,null,c.a.createElement(h.a,{className:r.cityAvatar},c.a.createElement(ye.a,{size:"22"}))),c.a.createElement(ve.a,{primary:"Add school or collage",primaryTypographyProps:{variant:"body2",color:"textSecondary"}})),c.a.createElement(pe.a,{disableGutters:!0,divider:!0},c.a.createElement(fe.a,null,c.a.createElement(h.a,{className:r.cityAvatar},c.a.createElement(je.a,{size:"22"}))),c.a.createElement(ve.a,{disableTypography:!0,primary:c.a.createElement(O.a,{variant:"body2",color:"textPrimary"},"Lives in"," ",c.a.createElement(K.a,{variant:"subtitle2",color:"textPrimary",href:"#"},t.currentCity)),secondary:c.a.createElement(O.a,{variant:"caption",color:"textSecondary"},"Originally from"," ",c.a.createElement(K.a,{variant:"caption",color:"textSecondary",href:"#"},t.originCity))})),c.a.createElement(pe.a,{disableGutters:!0,divider:!0},c.a.createElement(fe.a,null,c.a.createElement(h.a,{className:r.cityAvatar},c.a.createElement(he.a,{size:"22"}))),c.a.createElement(ve.a,{primary:t.email,primaryTypographyProps:{variant:"body2",color:"textPrimary"}})))))))},Ne=Object(l.a)((function(){return{root:{}}}));var ke=function(e){var a=e.className,t=e.user,l=Object(p.a)(e,["className","user"]),o=Ne(),m=Object(E.a)(),s=Object(r.useState)(null),u=Object(n.a)(s,2),b=u[0],f=u[1],v=Object(r.useCallback)((function(){d.a.get("/api/social/users/1/posts").then((function(e){m.current&&f(e.data.posts)}))}),[m]);return Object(r.useEffect)((function(){v()}),[v]),c.a.createElement("div",Object.assign({className:Object(g.default)(o.root,a)},l),c.a.createElement(A.a,{container:!0,spacing:3},c.a.createElement(A.a,{item:!0,xs:12,md:6,lg:4},c.a.createElement(xe,{user:t})),c.a.createElement(A.a,{item:!0,xs:12,md:6,lg:8},c.a.createElement(H,null),b&&b.map((function(e){return c.a.createElement(i.a,{mt:3,key:e.id},c.a.createElement(de,{post:e}))})))))},Se=t(10),Pe=t(14),we=t.n(Pe),Ce=t(114),Ie=t(272),ze=t(1209),Ae=t(1711),Ge={not_connected:"Connect",pending:"Pending",connected:"Connected"},Le=Object(l.a)((function(e){return{root:{},searchInput:{marginLeft:e.spacing(2)},avatar:{height:60,width:60}}}));var Be=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=Le(),o=Object(E.a)(),m=Object(Ce.useSnackbar)().enqueueSnackbar,s=Object(r.useState)(null),b=Object(n.a)(s,2),f=b[0],y=b[1],x=Object(r.useState)(""),N=Object(n.a)(x,2),S=N[0],P=N[1],w=Object(r.useCallback)((function(){d.a.get("/api/social/users/1/connections").then((function(e){o.current&&y(e.data.connections)}))}),[o]);return Object(r.useEffect)((function(){w()}),[w]),f?c.a.createElement(L.a,Object.assign({className:Object(g.default)(l.root,a)},t),c.a.createElement($.a,{title:"Connections"}),c.a.createElement(u.a,null),c.a.createElement(i.a,{py:2,px:3,display:"flex",alignItems:"center"},c.a.createElement(Ie.a,{fontSize:"small",color:"action"},c.a.createElement(ze.a,null)),c.a.createElement(T.a,{className:l.searchInput,disableUnderline:!0,value:S,onChange:function(e){return P(e.target.value)},placeholder:"Search connections"})),c.a.createElement(u.a,null),c.a.createElement(i.a,{p:3},c.a.createElement(A.a,{container:!0,spacing:3},f.filter((function(e){return e.name.toLowerCase().includes(S)})).map((function(e){return c.a.createElement(A.a,{item:!0,key:e.id,xs:12,md:6},c.a.createElement(R.a,{variant:"outlined"},c.a.createElement(i.a,{p:2,display:"flex",alignItems:"center"},c.a.createElement(h.a,{alt:"Profile image",className:l.avatar,component:v.a,src:e.avatar,to:"#"}),c.a.createElement(i.a,{flexGrow:1,mx:2},c.a.createElement(K.a,{variant:"h5",color:"textPrimary",component:v.a,to:"#"},e.name),c.a.createElement(O.a,{variant:"body2",color:"textSecondary",gutterBottom:!0},e.common," ","connections in common"),"rejected"!==e.status&&c.a.createElement(j.a,{variant:"outlined",size:"small",onClick:function(){return a=e.id,void y((function(e){return we.a.map(e,we.a.clone).map((function(e){if(e.id===a){var t=Object(Se.a)({},e);return t.status="connected"===e.status||"pending"===e.status?"not_connected":"pending","pending"===t.status&&m("Connection request sent",{variant:"success"}),t}return e}))}));var a}},Ge[e.status])),c.a.createElement(k.a,null,c.a.createElement(Ie.a,{fontSize:"small"},c.a.createElement(Ae.a,null))))))}))))):null},Re=t(1747),Te=t(1212),We=t(1253),Ue=Object(l.a)((function(e){return{root:{},media:{height:200,backgroundColor:e.palette.background.dark},likedButton:{color:y.colors.red[600]},subscribersIcon:{marginLeft:e.spacing(2),marginRight:e.spacing(1)}}}));var Je=function(e){var a=e.project,t=e.className,l=Object(p.a)(e,["project","className"]),o=Ue(),m=Object(r.useState)(a.isLiked),s=Object(n.a)(m,2),d=s[0],E=s[1],b=Object(r.useState)(a.likes),f=Object(n.a)(b,2),y=f[0],j=f[1];return c.a.createElement(L.a,Object.assign({className:Object(g.default)(o.root,t)},l),c.a.createElement(i.a,{p:3},c.a.createElement(V.a,{className:o.media,image:a.media}),c.a.createElement(i.a,{display:"flex",alignItems:"center",mt:2},c.a.createElement(h.a,{alt:"Author",src:a.author.avatar},Object(We.a)(a.author.name)),c.a.createElement(i.a,{ml:2},c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h5"},a.title),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"by"," ",c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h6"},a.author.name)," ","| Updated"," ",F()(a.updatedAt).fromNow())))),c.a.createElement(i.a,{pb:2,px:3},c.a.createElement(O.a,{color:"textSecondary",variant:"body2"},a.description)),c.a.createElement(i.a,{py:2,px:3},c.a.createElement(A.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.location),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Location")),c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.type),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Type")),c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.technology),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Technology")))),c.a.createElement(u.a,null),c.a.createElement(i.a,{py:2,pl:2,pr:3,display:"flex",alignItems:"center"},d?c.a.createElement(N.a,{title:"Unlike"},c.a.createElement(k.a,{className:o.likedButton,onClick:function(){E(!1),j((function(e){return e-1}))}},c.a.createElement(ee.a,{fontSize:"small"}))):c.a.createElement(N.a,{title:"Like"},c.a.createElement(k.a,{onClick:function(){E(!0),j((function(e){return e+1}))}},c.a.createElement(te.a,{fontSize:"small"}))),c.a.createElement(O.a,{variant:"subtitle2",color:"textSecondary"},y),c.a.createElement(Ie.a,{fontSize:"small",color:"action",className:o.subscribersIcon},c.a.createElement(Te.a,null)),c.a.createElement(O.a,{variant:"subtitle2",color:"textSecondary"},a.subscribers),c.a.createElement(i.a,{flexGrow:1}),c.a.createElement(Re.a,{value:a.rating,size:"small",readOnly:!0})))},_e=Object(l.a)((function(){return{root:{}}}));var qe=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=_e(),o=Object(E.a)(),i=Object(r.useState)(null),m=Object(n.a)(i,2),s=m[0],u=m[1],b=Object(r.useCallback)((function(){o.current&&d.a.get("/api/social/users/1/projects").then((function(e){return u(e.data.projects)}))}),[o]);return Object(r.useEffect)((function(){b()}),[b]),s?c.a.createElement("div",Object.assign({className:Object(g.default)(l.root,a)},t),c.a.createElement(A.a,{container:!0,spacing:3},s.map((function(e){return c.a.createElement(A.a,{item:!0,key:e.id,lg:4,lx:4,md:6,xs:12},c.a.createElement(Je,{project:e}))})))):null},He=Object(l.a)((function(e){return{root:{},rating:{marginLeft:e.spacing(2),fontWeight:e.typography.fontWeightBold}}}));var De=function(e){var a=e.ratings,t=e.className,n=Object(p.a)(e,["ratings","className"]),r=He(),l=0;return a.length>0&&(l=a.reduce((function(e,a){return e+a}),0)/a.length),c.a.createElement(L.a,Object.assign({className:Object(g.default)(r.root,t)},n),c.a.createElement(B.a,null,c.a.createElement(A.a,{alignItems:"center",container:!0,spacing:3},c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},"Overall Reviews")),c.a.createElement(A.a,{item:!0},c.a.createElement(i.a,{display:"flex",alignItems:"center"},c.a.createElement(Re.a,{value:l}),c.a.createElement(O.a,{className:r.rating,variant:"h6",color:"textPrimary"},l))),c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{className:r.total,color:"textSecondary",variant:"body2"},a.length," ","reviews in total")))))},Fe=Object(l.a)((function(e){return{root:{},rating:{marginLeft:e.spacing(1),fontWeight:e.typography.fontWeightBold}}}));var Me=function(e){var a=e.review,t=e.className,n=Object(p.a)(e,["review","className"]),r=Fe();return c.a.createElement(L.a,Object.assign({className:Object(g.default)(r.root,t)},n),c.a.createElement($.a,{avatar:c.a.createElement(h.a,{alt:"Reviewer",className:r.avatar,src:a.reviewer.avatar},Object(We.a)(a.reviewer.name)),disableTypography:!0,subheader:c.a.createElement(i.a,{flexWrap:"wrap",display:"flex",alignItems:"center"},c.a.createElement(i.a,{display:"flex",alignItems:"center",mr:1},c.a.createElement(Re.a,{value:a.rating}),c.a.createElement(O.a,{className:r.rating,variant:"h6"},a.rating)),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"| Reviewd by"," ",c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h6"},a.reviewer.name)," ","|"," ",F()(a.createdAt).fromNow())),title:c.a.createElement(K.a,{color:"textPrimary",component:v.a,to:"#",variant:"h5"},a.project.title)}),c.a.createElement(i.a,{pb:2,px:3},c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},a.message)),c.a.createElement(u.a,null),c.a.createElement(i.a,{py:2,px:3},c.a.createElement(A.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.currency,a.project.price),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Project price")),c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.currency,a.pricePerHour),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Per project")),c.a.createElement(A.a,{item:!0},c.a.createElement(O.a,{variant:"h5",color:"textPrimary"},a.hours),c.a.createElement(O.a,{variant:"body2",color:"textSecondary"},"Hours")))))},$e=Object(l.a)((function(e){return{root:{},review:{marginTop:e.spacing(2)}}}));var Ke=function(e){var a=e.className,t=Object(p.a)(e,["className"]),l=$e(),o=Object(E.a)(),i=Object(r.useState)(null),m=Object(n.a)(i,2),s=m[0],u=m[1],b=Object(r.useCallback)((function(){o.current&&d.a.get("/api/social/users/1/reviews").then((function(e){return u(e.data.reviews)}))}),[o]);return Object(r.useEffect)((function(){b()}),[b]),s?c.a.createElement("div",Object.assign({className:Object(g.default)(l.root,a)},t),c.a.createElement(De,{ratings:s.map((function(e){return e.rating}))}),s.map((function(e){return c.a.createElement(Me,{className:l.review,key:e.id,review:e})}))):null},Qe=[{value:"timeline",label:"Timeline"},{value:"connections",label:"Connections"},{value:"projects",label:"Projects"},{value:"reviews",label:"Reviews"}],Ve=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%"}}}));a.default=function(){var e=Ve(),a=Object(E.a)(),t=Object(r.useState)("timeline"),l=Object(n.a)(t,2),p=l[0],f=l[1],v=Object(r.useState)(null),g=Object(n.a)(v,2),y=g[0],j=g[1],h=Object(r.useCallback)((function(){d.a.get("/api/social/profile").then((function(e){a.current&&j(e.data.user)}))}),[a]);return Object(r.useEffect)((function(){h()}),[h]),y?c.a.createElement(b.a,{className:e.root,title:"Profile"},c.a.createElement(z,{user:y}),c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(i.a,{mt:3},c.a.createElement(m.a,{onChange:function(e,a){f(a)},scrollButtons:"auto",value:p,textColor:"secondary",variant:"scrollable"},Qe.map((function(e){return c.a.createElement(s.a,{key:e.value,label:e.label,value:e.value})})))),c.a.createElement(u.a,null),c.a.createElement(i.a,{py:3,pb:6},"timeline"===p&&c.a.createElement(ke,{user:y}),"connections"===p&&c.a.createElement(Be,null),"projects"===p&&c.a.createElement(qe,null),"reviews"===p&&c.a.createElement(Ke,null)))):null}}}]);
//# sourceMappingURL=24.f8768654.chunk.js.map