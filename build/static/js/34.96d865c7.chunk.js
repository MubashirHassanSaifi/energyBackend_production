(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[34],{1774:function(e,t,n){"use strict";n.r(t),n.d(t,"readingTime",(function(){return a})),n.d(t,"default",(function(){return r})),n.d(t,"tableOfContents",(function(){return c})),n.d(t,"frontMatter",(function(){return u}));var o=n(29),i=(n(0),n(378)),a={text:"1 min read",minutes:.995,time:59700,words:199},s={};function r(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"To help our customer we implemented JWT Authentication method. You can read more about it ",Object(i.b)("a",{href:"https://jwt.io/"},"here"),". Once the user is logged in, each subsequent axios request should include the JWT, allowing the user to access routes, services, and resources that are permitted with that token."),Object(i.b)("p",null,"We plan to integrate solutions such as ",Object(i.b)("a",{href:"https://firebase.google.com/docs/auth"},"Firebase Authentication")," or ",Object(i.b)("a",{href:"https://auth0.com/"},"Auth0"),". If you want this feature to be inclunded, let us know and we\u2019ll try to release it sooner."),Object(i.b)("h2",{id:"how-authentication-works"},"How authentication works"),Object(i.b)("p",null,"Accessing dashboard pages is only possible for authenticated users. If this condition is not fullfield, the user is redirected to a login page. To sign a user into your app, you first get authentication credentials from the user. These credentials can be the user\u2019s email address and password. Once the backend services confirm the credentials, we store the login state and user profile in the global state manager, Redux, but it can be replaced with other solutions such as React Context."),Object(i.b)("p",null,"We are able check user\u2019s credentials before accesing a component / route. Once the application is reloaded we silently retrieve the stored access token then check and restore user\u2019s identity before rendering the application content."))}r.isMDXComponent=!0;var c=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"how-authentication-works",level:2,title:"How authentication works",children:[]}]},u={}}}]);
//# sourceMappingURL=34.96d865c7.chunk.js.map