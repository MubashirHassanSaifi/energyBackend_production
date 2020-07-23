(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[7],{1744:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(26),i=t(49),o=t(594),s=t(1177),u=t(368),m=t(1138),c=t(1170),d=t(1173),p=t(78),b=t(1183),h=t(1187),v=t(377),f=t(85),g=t(17),E=t.n(g),S=t(41),x=t(29),w=t(31),y=t(2),B=t(1237),k=t(1239),j=t(1150),O=t(158),q=Object(o.a)((function(){return{root:{}}}));function C(e){var a=e.className,t=e.onSubmitSuccess,r=Object(x.a)(e,["className","onSubmitSuccess"]),l=q(),i=Object(w.c)();return n.a.createElement(k.a,{initialValues:{username:"",userid:"",email:"",password:""},validationSchema:B.c().shape({username:B.e().max(255).required("User name is required"),userid:B.e().max(255).required("UserID is required"),email:B.e().email("Must be a valid email").max(255).required("Email is required"),password:B.e().min(7).max(255).required("Password is required")}),onSubmit:function(){var e=Object(S.a)(E.a.mark((function e(a,r){var n,l,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,l=r.setStatus,o=r.setSubmitting,e.prev=1,e.next=4,i(Object(O.d)(a));case 4:t(),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),l({success:!1}),n({submit:e.t0.message}),o(!1);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var t=e.errors,i=e.handleBlur,o=e.handleChange,s=e.handleSubmit,c=e.isSubmitting,d=e.touched,p=e.values;return n.a.createElement("form",Object.assign({className:Object(y.default)(l.root,a),onSubmit:s},r),n.a.createElement(j.a,{error:Boolean(d.username&&t.username),fullWidth:!0,helperText:d.username&&t.username,label:"User Name",margin:"normal",name:"username",onBlur:i,onChange:o,type:"username",value:p.username,variant:"outlined"}),n.a.createElement(j.a,{error:Boolean(d.userid&&t.userid),fullWidth:!0,helperText:d.userid&&t.userid,label:"UserID",margin:"normal",name:"userid",onBlur:i,onChange:o,type:"userid",value:p.userid,variant:"outlined"}),n.a.createElement(j.a,{error:Boolean(d.email&&t.email),fullWidth:!0,helperText:d.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:o,type:"email",value:p.email,variant:"outlined"}),n.a.createElement(j.a,{error:Boolean(d.password&&t.password),fullWidth:!0,helperText:d.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:i,onChange:o,type:"password",value:p.password,variant:"outlined"}),n.a.createElement(u.a,{mt:2},n.a.createElement(m.a,{color:"secondary",enabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create account")))}))}C.default={onSubmitSuccess:function(){}};var N=C,W=Object(o.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",height:"100%",minHeight:"100%",flexDirection:"column",paddingBottom:80,paddingTop:80}}}));a.default=function(){var e=W(),a=Object(i.g)();return n.a.createElement(v.a,{className:e.root,title:"Register"},n.a.createElement(s.a,{maxWidth:"sm"},n.a.createElement(u.a,{mb:5,display:"flex",alignItems:"center"},n.a.createElement(l.a,{to:"/"},n.a.createElement(f.a,null)),n.a.createElement(m.a,{component:l.a,to:"/",className:e.backButton},"Back to home")),n.a.createElement(c.a,null,n.a.createElement(d.a,null,n.a.createElement(p.a,{gutterBottom:!0,variant:"h2",color:"textPrimary"},"Sign up"),n.a.createElement(p.a,{variant:"subtitle1"},"Sign up on the internal platform"),n.a.createElement(u.a,{mt:3},n.a.createElement(N,{onSubmitSuccess:function(){a.push("/app")}})),n.a.createElement(u.a,{my:2},n.a.createElement(b.a,null)),n.a.createElement(h.a,{component:l.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=7.eb9ed631.chunk.js.map