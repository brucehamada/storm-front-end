"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[672],{93198:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(50678),r=t(20625),s=t(38328),o=t(23712);function a(e){var n,t,a,c,l=e.children,d=e.type,h=void 0===d?"scale":d,u=e.direction,f=void 0===u?"right":u,v=e.offset,x=void 0===v?10:v,p=e.scale,m=void 0===p?{hover:1.05,tap:.954}:p;switch(f){case"up":case"left":a=x,c=0;break;default:a=0,c=x}var Z=(0,r.n)(a,c),g=(0,i.Z)(Z,2),j=g[0],w=g[1],y=(0,r.n)(a,c),b=(0,i.Z)(y,2),H=b[0],P=b[1];switch(h){case"rotate":return(0,o.jsx)(s.E.div,{animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:l});case"slide":return"up"===f||"down"===f?(0,o.jsx)(s.E.div,{animate:{y:void 0!==H?H:""},onHoverEnd:function(){return P()},onHoverStart:function(){return P()},children:l}):(0,o.jsx)(s.E.div,{animate:{x:void 0!==j?j:""},onHoverEnd:function(){return w()},onHoverStart:function(){return w()},children:l});default:return"number"===typeof m&&(m={hover:m,tap:m}),(0,o.jsx)(s.E.div,{whileHover:{scale:null===(n=m)||void 0===n?void 0:n.hover},whileTap:{scale:null===(t=m)||void 0===t?void 0:t.tap},children:l})}}},15274:function(e,n,t){t.r(n);var i=t(25536),r=t(83182),s=t(70562),o=t(12600),a=t(64391),c=t(95590),l=t(99498),d=t(81129),h=t(7521),u=t(93198),f=t(27216),v=t(23712);n.default=function(){var e=(0,r.Z)(),n=(0,s.Z)(e.breakpoints.down("sm")),t=(0,h.Z)().isLoggedIn;return(0,v.jsx)(f.Z,{children:(0,v.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(o.ZP,{item:!0,xs:12,children:(0,v.jsxs)(a.Z,{sx:{mb:{xs:-.5,sm:.5}},children:[(0,v.jsx)(c.Z,{variant:"h3",children:"Hi, Check Your Mail"}),(0,v.jsx)(c.Z,{color:"secondary",sx:{mb:.5,mt:1.25},children:"We have sent a password recover instructions to your email."})]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,children:(0,v.jsx)(u.Z,{children:(0,v.jsx)(l.Z,{component:i.rU,to:t?"/auth/signin":"/signin",disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Sign in"})})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,children:(0,v.jsx)(d.Z,{children:(0,v.jsx)(c.Z,{variant:n?"subtitle1":"h5",children:"Sign up with"})})})]})})}},27216:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(64391),r=t(12600),s=t(18489),o=t(83738),a=t(93265),c=t(23712),l=["children"],d=function(e){var n=e.children,t=(0,o.Z)(e,l);return(0,c.jsx)(a.Z,(0,s.Z)((0,s.Z)({sx:{minHeight:{xs:"100vh"},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,c.jsx)(i.Z,{sx:{p:{xs:5,sm:5,md:5,xl:5},marginRight:"10vw",marginLeft:"10vw"},children:n})}))},h=t.p+"static/media/first.170eb51d99adcc9799d8.png",u=function(e){var n=e.children;return(0,c.jsx)(i.Z,{style:{minHeight:"100vh"},children:(0,c.jsxs)(r.ZP,{container:!0,direction:"row",sx:{minHeight:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},children:[(0,c.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:7,lg:7,children:(0,c.jsx)(d,{children:n})}),(0,c.jsx)(r.ZP,{item:!0,md:5,lg:5,style:{width:"100 %",height:"100vh",display:"flex"},children:(0,c.jsx)("img",{style:{width:"100%"},src:h,alt:"landingImage"})})]})})}},44474:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(53538);function r(){return r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,i.Z)(e)););return e}(e,n);if(r){var s=Object.getOwnPropertyDescriptor(r,n);return s.get?s.get.call(arguments.length<3?e:t):s.value}},r.apply(this,arguments)}}}]);