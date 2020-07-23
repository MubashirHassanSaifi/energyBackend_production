(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[28],{1227:function(e,a,t){"use strict";var r=t(96),n=t(29),l=t(0),c=t.n(l),o=t(2),i=t(594),s=t(9),m=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.d)(e.palette.warning.main,.08)}}}));function u(e){var a=e.className,t=e.color,l=e.children,i=(e.style,Object(n.a)(e,["className","color","children","style"])),s=m();return c.a.createElement("span",Object.assign({className:Object(o.default)(s.root,Object(r.a)({},s[t],t),a)},i),l)}u.defaultProps={className:"",color:"secondary"},a.a=u},1718:function(e,a,t){"use strict";t.r(a);var r=t(96),n=t(0),l=t.n(n),c=t(31),o=t(594),i=t(1138),s=t(1177),m=t(1184),u=t(114),g=t(377),d=t(382),p=t(29),f=t(26),h=t(2),v=t(1216),b=t(1187),E=t(78),y=t(1225),x=t.n(y),j=Object(o.a)((function(e){return{root:{},actionIcon:{marginRight:e.spacing(1)}}}));var O=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=j();return l.a.createElement(m.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(h.default)(r.root,a)},t),l.a.createElement(m.a,{item:!0},l.a.createElement(v.a,{separator:l.a.createElement(x.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(b.a,{variant:"body1",color:"inherit",to:"/app",component:f.a},"Dashboard"),l.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Reports")),l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"Here's what's happening")))},w=t(1170),N=t(368),C=t(1220),S=t(1227),k=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var L=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=k(),n={value:Object(c.d)((function(e){return e.energy.energy})).Vc,unit:"volt"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-C VOLTAGES"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/voltmeter.png",height:"30px",width:"29px",alt:"voltages"})))},F=Object(o.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var P=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=F(),n={value:Object(c.d)((function(e){return e.energy.energy})).Pf,currency:""};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"POWER FACTOR"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{color:"inherit",variant:"h3"},n.currency,n.value))),l.a.createElement(C.a,{className:r.avatar,color:"inherit"},l.a.createElement("img",{src:"/static/energy_monitor_icons/car-parking.png",height:"30px",width:"29px",alt:"voltages"})))},_=Object(o.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.warning.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var T=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=_(),n={value:Object(c.d)((function(e){return e.energy.energy})).PA,currency:"V-A"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"APPARENT POWER"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{color:"inherit",variant:"h3"},n.value,"  ",n.currency))),l.a.createElement(C.a,{className:r.avatar,color:"inherit"},l.a.createElement("img",{src:"/static/energy_monitor_icons/plug.png",height:"30px",width:"29px",alt:"voltages"})))},I=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var A=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=I(),n={value:Object(c.d)((function(e){return e.energy.energy})).Vb,unit:"volt"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-B VOLTAGES"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/voltmeter.png",height:"30px",width:"29px",alt:"voltages"})))},V=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var R=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=V(),n={value:Object(c.d)((function(e){return e.energy.energy})).Va,unit:"volt"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-A VOLTAGES"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/voltmeter.png",height:"30px",width:"29px",alt:"voltages"})))},B=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var W=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=B(),n={value:Object(c.d)((function(e){return e.energy.energy})).Ia,unit:"Amp"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-A CURRENT"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h4",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/bolt.png",height:"30px",width:"29px",alt:"voltages"})))},G=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var H=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=G(),n={value:Object(c.d)((function(e){return e.energy.energy})).Ib,unit:"Amp"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-B CURRENT"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/bolt.png",height:"30px",width:"29px",alt:"voltages"})))},z=Object(o.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.success.main,color:e.palette.secondary.contrastText,height:48,width:48}}}));var U=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=z(),n={value:Object(c.d)((function(e){return e.energy.energy})).Ic,unit:"Amp"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PHASE-C CURRENT"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},n.value),l.a.createElement(S.a,{className:r.label,color:"error"},n.unit))),l.a.createElement(C.a,{className:r.avatar},l.a.createElement("img",{src:"/static/energy_monitor_icons/bolt.png",height:"30px",width:"29px",alt:"voltages"})))},D=t(1174),J=t(1183),$=t(1229),q=t.n($),K=t(1230),X=t.n(K),Y=t(1231),M=t.n(Y),Q=t(1232),Z=t.n(Q);q.a.fcRoot(X.a,M.a,Z.a);var ee=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var ae=function(e){var a,t,r,n,o=e.className,i=Object(p.a)(e,["className"]),s=ee(),m=Object(c.d)((function(e){return e.energy.energy})),u=m.Va,g=m.V_lowerLmt,d=m.V_upperLmt;u<g?(a=g,t=d,r="#B22222",n=" Below from his lowerlimit"):u>d?(a=g,t=d,r="#FF8C00",n="Exceeding above from his upperlimit"):u<=d&&u>=g&&(a=g,t=d,r="#FFC533",n="Status : OK");var f={chart:{caption:"".concat(n),captionfontsize:12,captionontop:"0",origw:"400",origh:"200",gaugestartangle:"135",gaugeendangle:"45",gaugeoriginx:"200",gaugeoriginy:"240",gaugeouterradius:"190",theme:"candy",showvalue:"1",numbersuffix:"V",valuefontsize:"15"},colorrange:{color:[{minvalue:a,maxvalue:t,code:r}]},dials:{dial:[{value:u,tooltext:"Voltages phase-A"}]}};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(s.root,o)},i),l.a.createElement(D.a,{title:"VOLTAGES  (Phase-A)"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:f})),l.a.createElement(J.a,null))};q.a.fcRoot(X.a,M.a,Z.a);var te=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var re=function(e){var a,t,r,n,o=e.className,i=Object(p.a)(e,["className"]),s=te(),m=Object(c.d)((function(e){return e.energy.energy})),u=m.Vb,g=m.V_lowerLmt,d=m.V_upperLmt;u<g?(a=g,t=d,r="#B22222",n="Below from his lowerlimit"):u>d?(a=g,t=d,r="#FF8C00",n="Exceeding above from his upperlimit"):u<=d&&u>=g&&(a=g,t=d,r="#FFC533",n="Status : OK");var f={chart:{caption:" ".concat(n," "),captionfontsize:12,captionontop:"0",origw:"400",origh:"200",gaugestartangle:"135",gaugeendangle:"45",gaugeoriginx:"200",gaugeoriginy:"240",gaugeouterradius:"190",theme:"candy",showvalue:"1",numbersuffix:"V",valuefontsize:"15"},colorrange:{color:[{minvalue:a,maxvalue:t,code:r}]},dials:{dial:[{value:u,tooltext:"Voltages phase-B"}]}};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(s.root,o)},i),l.a.createElement(D.a,{title:"VOLTAGES  (Phase-B)"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:f})),l.a.createElement(J.a,null))};q.a.fcRoot(X.a,M.a,Z.a);var ne=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var le=function(e){var a,t,r,n,o=e.className,i=Object(p.a)(e,["className"]),s=ne(),m=Object(c.d)((function(e){return e.energy.energy})),u=m.Vc,g=m.V_lowerLmt,d=m.V_upperLmt;console.log(g,d,u),u<g?(a=g,t=d,r="#B22222",n="Below from his lowerlimit"):u>d?(a=g,t=d,r="#FF8C00",n="Exceeding above from his upperlimit"):u<=d&&u>=g&&(a=g,t=d,r="#FFC533",n="Status : OK");var f={chart:{caption:" ".concat(n," "),captionfontsize:12,captionontop:"0",origw:"400",origh:"200",gaugestartangle:"135",gaugeendangle:"45",gaugeoriginx:"200",gaugeoriginy:"240",gaugeouterradius:"190",theme:"candy",showvalue:"1",numbersuffix:"V",valuefontsize:"20"},colorrange:{color:[{minvalue:a,maxvalue:t,code:r}]},dials:{dial:[{value:u,tooltext:"Voltages phase-C"}]}};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(s.root,o)},i),l.a.createElement(D.a,{title:"VOLTAGES  (Phase-C)"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:f})),l.a.createElement(J.a,null))};q.a.fcRoot(X.a,M.a,Z.a);var ce=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var oe=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=ce(),n=Object(c.d)((function(e){return e.energy.energy})),o=n.Ia,i=(n.I_lowerLmt,{chart:{captionpadding:"0",origw:"320",origh:"300",gaugeouterradius:"115",gaugestartangle:"270",gaugeendangle:"-25",showvalue:"1",valuefontsize:"30",majortmnumber:"13",majortmthickness:"2",majortmheight:"13",minortmheight:"7",minortmthickness:"1",minortmnumber:"1",showgaugeborder:"0",theme:"candy"},colorrange:{color:[{minvalue:0,maxvalue:o,code:"#999999"},{minvalue:0,maxvalue:n.I_upperLmt,code:"#F6F6F6"}]},dials:{dial:[{value:o,bgcolor:"#F20F2F",basewidth:"30"}]},annotations:{groups:[{items:[{type:"text",id:"text",text:"Ampere",x:"$gaugeCenterX",y:"$gaugeCenterY + 55",fontsize:"15",color:"#555555"}]}]}});return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(D.a,{title:"Current  Phase-A"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:i})),l.a.createElement(J.a,null))};q.a.fcRoot(X.a,M.a,Z.a);var ie=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var se=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=ie(),n=Object(c.d)((function(e){return e.energy.energy})),o=n.Ib,i=(n.I_lowerLmt,{chart:{captionpadding:"0",origw:"320",origh:"300",gaugeouterradius:"115",gaugestartangle:"270",gaugeendangle:"-25",showvalue:"1",valuefontsize:"30",majortmnumber:"13",majortmthickness:"2",majortmheight:"13",minortmheight:"7",minortmthickness:"1",minortmnumber:"1",showgaugeborder:"0",theme:"candy"},colorrange:{color:[{minvalue:0,maxvalue:o,code:"#999999"},{minvalue:0,maxvalue:n.I_upperLmt,code:"#F6F6F6"}]},dials:{dial:[{value:o,bgcolor:"#F20F2F",basewidth:"30"}]},annotations:{groups:[{items:[{type:"text",id:"text",text:"Ampere",x:"$gaugeCenterX",y:"$gaugeCenterY + 55",fontsize:"15",color:"#555555"}]}]}});return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(D.a,{title:"Current  Phase-B"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:i})),l.a.createElement(J.a,null))};q.a.fcRoot(X.a,M.a,Z.a);var me=Object(o.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}}));var ue=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=me(),n=Object(c.d)((function(e){return e.energy.energy})),o=n.Ic,i=(n.I_lowerLmt,{chart:{captionpadding:"0",origw:"320",origh:"300",gaugeouterradius:"115",gaugestartangle:"270",gaugeendangle:"-25",showvalue:"1",valuefontsize:"30",majortmnumber:"13",majortmthickness:"2",majortmheight:"13",minortmheight:"7",minortmthickness:"1",minortmnumber:"1",showgaugeborder:"0",theme:"candy"},colorrange:{color:[{minvalue:0,maxvalue:o,code:"#999999"},{minvalue:0,maxvalue:n.I_upperLmt,code:"#F6F6F6"}]},dials:{dial:[{value:o,bgcolor:"#F20F2F",basewidth:"30"}]},annotations:{groups:[{items:[{type:"text",id:"text",text:"Ampere",x:"$gaugeCenterX",y:"$gaugeCenterY + 55",fontsize:"15",color:"#555555"}]}]}});return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(D.a,{title:"Current  Phase-C"}),l.a.createElement(J.a,null),l.a.createElement(N.a,{p:1,position:"relative",minHeight:320},l.a.createElement(q.a,{type:"angulargauge",width:"100%",height:"100%",dataFormat:"JSON",dataSource:i})),l.a.createElement(J.a,null))},ge=Object(o.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.success.dark,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var de=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=ge(),n={value:Object(c.d)((function(e){return e.energy.energy})).PR,currency:""};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"REAL POWER"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{color:"inherit",variant:"h3"},n.currency,n.value))),l.a.createElement(C.a,{className:r.avatar,color:"inherit"},l.a.createElement("img",{src:"/static/energy_monitor_icons/power-tower.png",height:"30px",width:"29px",alt:"voltages"})))},pe=Object(o.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.error.dark,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}}));var fe=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=pe(),n={value:Object(c.d)((function(e){return e.energy.energy})).U,currency:"KWH"};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(N.a,{flexGrow:1},l.a.createElement(E.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"UNITS"),l.a.createElement(N.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},l.a.createElement(E.a,{color:"inherit",variant:"h3"},n.value,"  ",n.currency))),l.a.createElement(C.a,{className:r.avatar,color:"inherit"},l.a.createElement("img",{src:"/static/energy_monitor_icons/units.png",height:"30px",width:"29px",alt:"voltages"})))},he=t(33),ve=t(1150),be=t(1178),Ee=t(1179),ye=t(1180),xe=t(1181),je=t(1182);function Oe(){var e=Object(c.d)((function(e){return e.energy.energy}))._id,a=l.a.useState(!1),t=Object(he.a)(a,2),r=t[0],n=t[1],o=l.a.useState(null),s=Object(he.a)(o,2),m=s[0],g=s[1],p=l.a.useState(null),f=Object(he.a)(p,2),h=f[0],v=f[1],b=Object(c.c)(),E=Object(u.useSnackbar)().enqueueSnackbar,y=function(){n(!1)};return l.a.createElement("div",null,l.a.createElement(i.a,{color:"primary",onClick:function(){n(!0)},size:"small"},"Set Threshole"),l.a.createElement(be.a,{open:r,onClose:y,"aria-labelledby":"form-dialog-title"},l.a.createElement(je.a,{id:"form-dialog-title"},"Voltage Threshole"),l.a.createElement(ye.a,null,l.a.createElement(xe.a,null,"Enter Values to set threshold"),l.a.createElement(ve.a,{autoFocus:!0,margin:"dense",id:"lowerlmt",label:"Lower Limit",type:"number",onChange:function(e){g(e.target.value)},fullWidth:!0}),l.a.createElement(ve.a,{margin:"dense",id:"upperlmt",label:"Upper Limit",type:"number",onChange:function(e){v(e.target.value)},fullWidth:!0})),l.a.createElement(Ee.a,null,l.a.createElement(i.a,{onClick:y,color:"primary"},"Cancel"),l.a.createElement(i.a,{onClick:function(){null===m&&null===h?E("Please enter limits",{variant:"error"}):null===m||void 0===m?E("Please enter lower limit",{variant:"error"}):null===h||void 0===h?E("Please enter upper limit",{variant:"error"}):null!==m&&null!==h&&(b(Object(d.g)(m,h,e[0])),E("Threshole is set successfully",{variant:"success"}),n(!1))},color:"primary"},"Set Threshole"))))}function we(){var e=Object(c.d)((function(e){return e.energy.energy}))._id,a=l.a.useState(!1),t=Object(he.a)(a,2),r=t[0],n=t[1],o=l.a.useState(null),s=Object(he.a)(o,2),m=s[0],g=s[1],p=Object(c.c)(),f=Object(u.useSnackbar)().enqueueSnackbar,h=function(){n(!1)};return l.a.createElement("div",null,l.a.createElement(i.a,{color:"primary",onClick:function(){n(!0)},size:"small"},"Set Threshole"),l.a.createElement(be.a,{open:r,onClose:h,"aria-labelledby":"form-dialog-title"},l.a.createElement(je.a,{id:"form-dialog-title"},"Current Threshole"),l.a.createElement(ye.a,null,l.a.createElement(xe.a,null,"Enter Values to set threshold"),l.a.createElement(ve.a,{autoFocus:!0,margin:"dense",id:"upperlmt",label:"Upper Limit",type:"number",fullWidth:!0,onChange:function(e){g(e.target.value)}})),l.a.createElement(Ee.a,null,l.a.createElement(i.a,{onClick:h,color:"primary"},"Cancel"),l.a.createElement(i.a,{onClick:function(){null===m||void 0===m?f("Please enter the limit",{variant:"error"}):(p(Object(d.d)(m,e[0])),f("Threshole is set successfully",{variant:"success"}),n(!1))},color:"primary"},"Set"))))}function Ne(){var e=l.a.useState(!1),a=Object(he.a)(e,2),t=a[0],r=a[1],n=l.a.useState(null),o=Object(he.a)(n,2),s=o[0],m=o[1],g=Object(c.c)(),p=Object(u.useSnackbar)().enqueueSnackbar,f=Object(c.d)((function(e){return e.energy.energy}))._id;console.log("id",f);var h=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(i.a,{color:"primary",onClick:function(){r(!0)},size:"small"},"Set Threshole"),l.a.createElement(be.a,{open:t,onClose:h,"aria-labelledby":"form-dialog-title"},l.a.createElement(je.a,{id:"form-dialog-title"},"Power Threshole"),l.a.createElement(ye.a,null,l.a.createElement(xe.a,null,"Enter Values to set threshold"),l.a.createElement(ve.a,{autoFocus:!0,margin:"dense",id:"lowerlmt",label:"Lower Limit",type:"number",onChange:function(e){m(e.target.value)},fullWidth:!0})),l.a.createElement(Ee.a,null,l.a.createElement(i.a,{onClick:h,color:"primary"},"Cancel"),l.a.createElement(i.a,{onClick:function(){null==s||void 0===s?p("Please enter the limit",{variant:"error"}):(console.log("value",s),g(Object(d.e)(s,f[0])),p("Threshole is set successfully",{variant:"success"}),r(!1))},color:"primary"},"Set"))))}var Ce=t(17),Se=t.n(Ce),ke=t(41);function Le(){var e=Object(c.d)((function(e){return e.energy.energy}))._id,a=l.a.useState(!1),t=Object(he.a)(a,2),r=t[0],n=t[1],o=l.a.useState(null),s=Object(he.a)(o,2),m=s[0],g=s[1],p=Object(c.c)(),f=Object(u.useSnackbar)().enqueueSnackbar,h=function(){n(!1)},v=function(){var a=Object(ke.a)(Se.a.mark((function a(){return Se.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:null==m||void 0===m?f("Please enter the limit",{variant:"error"}):(p(Object(d.f)(m,e[0])),f("Threshole is set successfully",{variant:"success"}),n(!1));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(i.a,{color:"primary",onClick:function(){n(!0)},size:"small"},"Set Threshole"),l.a.createElement(be.a,{open:r,onClose:h,"aria-labelledby":"form-dialog-title"},l.a.createElement(je.a,{id:"form-dialog-title"},"Unit Threshole"),l.a.createElement(ye.a,null,l.a.createElement(xe.a,null,"Enter Values to set threshold"),l.a.createElement(ve.a,{autoFocus:!0,margin:"dense",id:"upperlmt",label:"Upper Limit",type:"number",onChange:function(e){g(e.target.value)},fullWidth:!0})),l.a.createElement(Ee.a,null,l.a.createElement(i.a,{onClick:h,color:"primary"},"Cancel"),l.a.createElement(i.a,{onClick:v,color:"primary"},"Set"))))}var Fe=Object(o.a)((function(e){var a;return{root:{},item:(a={padding:e.spacing(3),textAlign:"center"},Object(r.a)(a,e.breakpoints.up("md"),{"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}),Object(r.a)(a,e.breakpoints.down("sm"),{"&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.palette.divider)}}),a),valueContainer:{display:"flex",alignItems:"center",justifyContent:"center"},label:{marginLeft:e.spacing(1)}}}));var Pe=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=Fe(),n=Object(c.d)((function(e){return e.energy.energy})),o=n.I_upperLmt,i=n.V_upperLmt,s=n.V_lowerLmt,u=n.Pf_lowerLmt,g=n.U_upperLmt,d=n._id,f={Vupperlmt:i,Vlowerlmt:s,Iupperlmt:o,Pflowerlmt:u,Uupperlmt:g};return l.a.createElement(w.a,Object.assign({className:Object(h.default)(r.root,a)},t),l.a.createElement(m.a,{alignItems:"center",container:!0,justify:"space-between"},l.a.createElement(m.a,{className:r.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Lower | High voltage Limit"),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(E.a,{variant:"h4",color:"textPrimary"},f.Vlowerlmt," ","|"," ",f.Vupperlmt,l.a.createElement(S.a,{className:r.label,color:"warning"},"volt")),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(Oe,{id:d})))),l.a.createElement(m.a,{className:r.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Current Upper Limit"),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(E.a,{variant:"h4",color:"textPrimary"},f.Iupperlmt,l.a.createElement(S.a,{className:r.label,color:"warning"},"Ampere")),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(we,{id:d})))),l.a.createElement(m.a,{className:r.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"PowerFactor Lower Limt"),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},f.Pflowerlmt),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(Ne,{id:d})))),l.a.createElement(m.a,{className:r.item,item:!0,md:3,sm:6,xs:12},l.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Units Upper Limit"),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},f.Uupperlmt,l.a.createElement(S.a,{className:r.label,color:"warning"},"KWH")),l.a.createElement("div",{className:r.valueContainer},l.a.createElement(Le,{id:d}))))))},_e=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},container:Object(r.a)({},e.breakpoints.up("lg"),{paddingLeft:64,paddingRight:64})}}));a.default=function(){var e=_e(),a=Object(c.c)(),t=Object(c.d)((function(e){return e.account.user})),r=Object(c.d)((function(e){return e.energy.energy})),o=Object(u.useSnackbar)(),p=o.enqueueSnackbar,f=o.closeSnackbar,h=r.U_upperLmt,v=r.U/h*100,b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{onClick:function(){f(e)}},"Dismiss"))};25===v?p("25% units reached ",{variant:"warning",autoHideDuration:"3000",action:b}):50===v?p("50% units reached ",{variant:"warning",autoHideDuration:"3000",action:b}):75===v?p("75% units reached ",{variant:"warning",autoHideDuration:"3000",action:b}):v>=80&&v<=99&&p("Units are closed to his upperLmt ",{variant:"warning",persist:!0,action:b});var E=t.userid;return Object(n.useEffect)((function(){a(Object(d.c)(E))}),[]),l.a.createElement(g.a,{className:e.root,title:"Dashboard"},l.a.createElement(s.a,{maxWidth:!1,className:e.container},l.a.createElement(O,null),l.a.createElement(m.a,{container:!0,spacing:4},l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(R,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(A,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(L,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(W,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(H,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(U,null)),l.a.createElement(m.a,{item:!0,lg:6,sm:6,xs:12},l.a.createElement(P,null)),l.a.createElement(m.a,{item:!0,lg:6,sm:6,xs:12},l.a.createElement(T,null)),l.a.createElement(m.a,{item:!0,lg:6,sm:12,xs:12},l.a.createElement(de,null)),l.a.createElement(m.a,{item:!0,lg:6,sm:12,xs:12},l.a.createElement(fe,null)),l.a.createElement(m.a,{item:!0,lg:12,sm:12},l.a.createElement(Pe,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(ae,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(re,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(le,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(oe,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(se,null)),l.a.createElement(m.a,{item:!0,lg:4,sm:6,xs:12},l.a.createElement(ue,null)))))}}}]);
//# sourceMappingURL=28.d125abee.chunk.js.map