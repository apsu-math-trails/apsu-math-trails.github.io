"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{7108:function(e,t,r){r.d(t,{zx:function(){return T}});var a=r(4942),n=r(4925),i=r(9439),o=r(7294),l=r(8078),s=r(971),c=r(5200),u=r(3971),d=r.n(u),m=r(7684),p=r(1587),f=r(8746),g=["children","className"],h=["label","placement","spacing","children","className","__css"],v=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],y=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],b=["icon","children","isRound","aria-label"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),_=(0,i.Z)(x,2),k=_[0],N=_[1];function C(e){var t=e.children,r=e.className,a=(0,n.Z)(e,g),i=(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,m.cx)("chakra-button__icon",r);return o.createElement(s.m$.span,E(E({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:l}),i)}function S(e){var t=e.label,r=e.placement,i=e.spacing,l=void 0===i?"0.5rem":i,c=e.children,u=void 0===c?o.createElement(f.$,{color:"currentColor",width:"1em",height:"1em"}):c,d=e.className,p=e.__css,g=(0,n.Z)(e,h),v=(0,m.cx)("chakra-button__spinner",d),y="start"===r?"marginEnd":"marginStart",b=(0,o.useMemo)((function(){var e;return E((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"},(0,a.Z)(e,y,t?l:0),(0,a.Z)(e,"fontSize","1em"),(0,a.Z)(e,"lineHeight","normal"),e),p)}),[p,t,y,l]);return o.createElement(s.m$.div,E(E({className:v},g),{},{__css:b}),u)}m.Ts&&(C.displayName="ButtonIcon"),m.Ts&&(S.displayName="ButtonSpinner");var T=(0,s.Gp)((function(e,t){var r,a,u,p,f,g=N(),h=(0,s.mq)("Button",E(E({},g),e)),y=(0,c.Lr)(e),b=y.isDisabled,w=void 0===b?null==g?void 0:g.isDisabled:b,x=y.isLoading,_=y.isActive,k=y.children,C=y.leftIcon,T=y.rightIcon,L=y.loadingText,A=y.iconSpacing,W=void 0===A?"0.5rem":A,j=y.type,G=y.spinner,I=y.spinnerPlacement,Z=void 0===I?"start":I,P=y.className,z=y.as,R=(0,n.Z)(y,v),q=(0,o.useMemo)((function(){var e,t=d()({},null!==(e=null==h?void 0:h._focus)&&void 0!==e?e:{},{zIndex:1});return E(E({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},h),!!g&&{_focus:t})}),[h,g]),B=(r=z,a=(0,o.useState)(!r),u=(0,i.Z)(a,2),p=u[0],f=u[1],{ref:(0,o.useCallback)((function(e){e&&f("BUTTON"===e.tagName)}),[]),type:p?"button":void 0}),D=B.ref,M=B.type,$={rightIcon:T,leftIcon:C,iconSpacing:W,children:k};return o.createElement(s.m$.button,E({disabled:w||x,ref:(0,l.qq)(t,D),as:z,type:null!=j?j:M,"data-active":(0,m.PB)(_),"data-loading":(0,m.PB)(x),__css:q,className:(0,m.cx)("chakra-button",P)},R),x&&"start"===Z&&o.createElement(S,{className:"chakra-button__spinner--start",label:L,placement:"start",spacing:W},G),x?L||o.createElement(s.m$.span,{opacity:0},o.createElement(O,E({},$))):o.createElement(O,E({},$)),x&&"end"===Z&&o.createElement(S,{className:"chakra-button__spinner--end",label:L,placement:"end",spacing:W},G))}));function O(e){var t=e.leftIcon,r=e.rightIcon,a=e.children,n=e.iconSpacing;return o.createElement(o.Fragment,null,t&&o.createElement(C,{marginEnd:n},t),a,r&&o.createElement(C,{marginStart:n},r))}m.Ts&&(T.displayName="Button");var L=(0,s.Gp)((function(e,t){var r=e.size,a=e.colorScheme,i=e.variant,l=e.className,c=e.spacing,u=void 0===c?"0.5rem":c,d=e.isAttached,p=e.isDisabled,f=(0,n.Z)(e,y),g=(0,m.cx)("chakra-button__group",l),h=(0,o.useMemo)((function(){return{size:r,colorScheme:a,variant:i,isDisabled:p}}),[r,a,i,p]),v={display:"inline-flex"};return v=E(E({},v),{},d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),o.createElement(k,{value:h},o.createElement(s.m$.div,E({ref:t,role:"group",__css:v,className:g,"data-attached":d?"":void 0},f)))}));m.Ts&&(L.displayName="ButtonGroup");var A=(0,s.Gp)((function(e,t){var r=e.icon,a=e.children,i=e.isRound,l=e["aria-label"],s=(0,n.Z)(e,b),c=r||a,u=(0,o.isValidElement)(c)?(0,o.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(T,E({padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":l},s),u)}));m.Ts&&(A.displayName="IconButton")},8809:function(e,t,r){r.d(t,{Ct:function(){return q},DE:function(){return ue},HC:function(){return ce},Kq:function(){return he},MI:function(){return de},P4:function(){return V},QI:function(){return se},Ug:function(){return ve},W2:function(){return U},X6:function(){return Y},cX:function(){return fe},gC:function(){return ye},iz:function(){return X},kC:function(){return J},rj:function(){return Q},xu:function(){return B},xv:function(){return be}});var a=r(9439),n=r(4942),i=r(4925),o=r(7294),l=r(971),s=r(7684),c=r(5200),u=r(3953),d=r(1587),m=["ratio","children","className"],p=["className"],f=["size","centerContent"],g=["size"],h=["axis"],v=["className"],y=["className","centerContent"],b=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],w=["className","orientation","__css"],E=["direction","align","justify","wrap","basis","grow","shrink"],x=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],_=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"],k=["className"],N=["className"],C=["className","isExternal"],S=["isExternal","target","rel","className"],T=["className"],O=["children","styleType","stylePosition","spacing"],L=["as"],A=["as"],W=["columns","spacingX","spacingY","spacing","minChildWidth"],j=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],G=["className","align","decoration","casing"],I=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],Z=["className"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=(0,l.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,n=e.children,c=e.className,u=(0,i.Z)(e,m),d=o.Children.only(n),p=(0,s.cx)("chakra-aspect-ratio",c);return o.createElement(l.m$.div,z({ref:t,position:"relative",className:p,_before:{height:0,content:'""',display:"block",paddingBottom:(0,s.XQ)(a,(function(e){return"".concat(1/e*100,"%")}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},u),d)}));s.Ts&&(R.displayName="AspectRatio");var q=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Badge",e),a=(0,c.Lr)(e),n=(a.className,(0,i.Z)(a,p));return o.createElement(l.m$.span,z(z({ref:t,className:(0,s.cx)("chakra-badge",e.className)},n),{},{__css:z({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));s.Ts&&(q.displayName="Badge");var B=(0,l.m$)("div");s.Ts&&(B.displayName="Box");var D=(0,l.Gp)((function(e,t){var r=e.size,a=e.centerContent,n=void 0===a||a,l=(0,i.Z)(e,f),s=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(B,z({ref:t,boxSize:r,__css:z(z({},s),{},{flexShrink:0,flexGrow:0})},l))}));s.Ts&&(D.displayName="Square");var M=(0,l.Gp)((function(e,t){var r=e.size,a=(0,i.Z)(e,g);return o.createElement(D,z({size:r,ref:t,borderRadius:"9999px"},a))}));s.Ts&&(M.displayName="Circle");var $=(0,l.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});s.Ts&&($.displayName="Center");var F={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},H=((0,l.Gp)((function(e,t){var r=e.axis,a=void 0===r?"both":r,n=(0,i.Z)(e,h);return o.createElement(l.m$.div,z(z({ref:t,__css:F[a]},n),{},{position:"absolute"}))})),(0,l.Gp)((function(e,t){var r=(0,l.mq)("Code",e),a=(0,c.Lr)(e),n=(a.className,(0,i.Z)(a,v));return o.createElement(l.m$.code,z(z({ref:t,className:(0,s.cx)("chakra-code",e.className)},n),{},{__css:z({display:"inline-block"},r)}))})));s.Ts&&(H.displayName="Code");var U=(0,l.Gp)((function(e,t){var r=(0,c.Lr)(e),a=r.className,n=r.centerContent,u=(0,i.Z)(r,y),d=(0,l.mq)("Container",e);return o.createElement(l.m$.div,z(z({ref:t,className:(0,s.cx)("chakra-container",a)},u),{},{__css:z(z({},d),n&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));s.Ts&&(U.displayName="Container");var X=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Divider",e),a=r.borderLeftWidth,n=r.borderBottomWidth,u=r.borderTopWidth,d=r.borderRightWidth,m=r.borderWidth,p=r.borderStyle,f=r.borderColor,g=(0,i.Z)(r,b),h=(0,c.Lr)(e),v=h.className,y=h.orientation,E=void 0===y?"horizontal":y,x=h.__css,_=(0,i.Z)(h,w),k={vertical:{borderLeftWidth:a||d||m||"1px",height:"100%"},horizontal:{borderBottomWidth:n||u||m||"1px",width:"100%"}};return o.createElement(l.m$.hr,z(z({ref:t,"aria-orientation":E},_),{},{__css:z(z(z({},g),{},{border:"0",borderColor:f,borderStyle:p},k[E]),x),className:(0,s.cx)("chakra-divider",v)}))}));s.Ts&&(X.displayName="Divider");var J=(0,l.Gp)((function(e,t){var r=e.direction,a=e.align,n=e.justify,s=e.wrap,c=e.basis,u=e.grow,d=e.shrink,m=(0,i.Z)(e,E),p={display:"flex",flexDirection:r,alignItems:a,justifyContent:n,flexWrap:s,flexBasis:c,flexGrow:u,flexShrink:d};return o.createElement(l.m$.div,z({ref:t,__css:p},m))}));s.Ts&&(J.displayName="Flex");var Q=(0,l.Gp)((function(e,t){var r=e.templateAreas,a=e.gap,n=e.rowGap,s=e.columnGap,c=e.column,u=e.row,d=e.autoFlow,m=e.autoRows,p=e.templateRows,f=e.autoColumns,g=e.templateColumns,h=(0,i.Z)(e,x),v={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:n,gridColumnGap:s,gridAutoColumns:f,gridColumn:c,gridRow:u,gridAutoFlow:d,gridAutoRows:m,gridTemplateRows:p,gridTemplateColumns:g};return o.createElement(l.m$.div,z({ref:t,__css:v},h))}));function K(e){return(0,s.XQ)(e,(function(e){return"auto"===e?"auto":"span ".concat(e,"/span ").concat(e)}))}s.Ts&&(Q.displayName="Grid");var V=(0,l.Gp)((function(e,t){var r=e.area,a=e.colSpan,n=e.colStart,c=e.colEnd,u=e.rowEnd,d=e.rowSpan,m=e.rowStart,p=(0,i.Z)(e,_),f=(0,s.YU)({gridArea:r,gridColumn:K(a),gridRow:K(d),gridColumnStart:n,gridColumnEnd:c,gridRowStart:m,gridRowEnd:u});return o.createElement(l.m$.div,z({ref:t,__css:f},p))})),Y=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Heading",e),a=(0,c.Lr)(e),n=(a.className,(0,i.Z)(a,k));return o.createElement(l.m$.h2,z(z({ref:t,className:(0,s.cx)("chakra-heading",e.className)},n),{},{__css:r}))}));s.Ts&&(Y.displayName="Heading");(0,l.Gp)((function(e,t){var r=(0,l.mq)("Mark",e),a=(0,c.Lr)(e);return o.createElement(B,z(z({ref:t},a),{},{as:"mark",__css:z({bg:"transparent",whiteSpace:"nowrap"},r)}))}));var ee=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Kbd",e),a=(0,c.Lr)(e),n=a.className,u=(0,i.Z)(a,N);return o.createElement(l.m$.kbd,z(z({ref:t,className:(0,s.cx)("chakra-kbd",n)},u),{},{__css:z({fontFamily:"mono"},r)}))}));s.Ts&&(ee.displayName="Kbd");var te=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Link",e),a=(0,c.Lr)(e),n=a.className,u=a.isExternal,d=(0,i.Z)(a,C);return o.createElement(l.m$.a,z(z({target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,s.cx)("chakra-link",n)},d),{},{__css:r}))}));s.Ts&&(te.displayName="Link");(0,l.Gp)((function(e,t){var r=e.isExternal,a=e.target,n=e.rel,c=e.className,u=(0,i.Z)(e,S);return o.createElement(l.m$.a,z(z({},u),{},{ref:t,className:(0,s.cx)("chakra-linkbox__overlay",c),rel:r?"noopener noreferrer":n,target:r?"_blank":a,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),(0,l.Gp)((function(e,t){var r=e.className,a=(0,i.Z)(e,T);return o.createElement(l.m$.div,z(z({ref:t,position:"relative"},a),{},{className:(0,s.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))}));var re=(0,d.kr)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),ae=(0,a.Z)(re,2),ne=ae[0],ie=ae[1],oe=(0,l.Gp)((function(e,t){var r=(0,l.jC)("List",e),a=(0,c.Lr)(e),s=a.children,u=a.styleType,m=void 0===u?"none":u,p=a.stylePosition,f=a.spacing,g=(0,i.Z)(a,O),h=(0,d.WR)(s),v=f?(0,n.Z)({},"& > *:not(style) ~ *:not(style)",{mt:f}):{};return o.createElement(ne,{value:r},o.createElement(l.m$.ul,z({ref:t,listStyleType:m,listStylePosition:p,role:"list",__css:z(z({},r.container),v)},g),h))}));s.Ts&&(oe.displayName="List");var le=(0,l.Gp)((function(e,t){e.as;var r=(0,i.Z)(e,L);return o.createElement(oe,z({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));s.Ts&&(le.displayName="OrderedList");var se=(0,l.Gp)((function(e,t){e.as;var r=(0,i.Z)(e,A);return o.createElement(oe,z({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));s.Ts&&(se.displayName="UnorderedList");var ce=(0,l.Gp)((function(e,t){var r=ie();return o.createElement(l.m$.li,z(z({ref:t},e),{},{__css:r.item}))}));s.Ts&&(ce.displayName="ListItem");var ue=(0,l.Gp)((function(e,t){var r=ie();return o.createElement(u.JO,z(z({ref:t,role:"presentation"},e),{},{__css:r.icon}))}));s.Ts&&(ue.displayName="ListIcon");var de=(0,l.Gp)((function(e,t){var r,a=e.columns,n=e.spacingX,c=e.spacingY,u=e.spacing,d=e.minChildWidth,m=(0,i.Z)(e,W),p=(0,l.Fg)(),f=d?function(e,t){return(0,s.XQ)(e,(function(e){var r,a=(0,l.LP)("sizes",e,(r=e,(0,s.hj)(r)?"".concat(r,"px"):r))(t);return(0,s.Ft)(e)?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(d,p):(r=a,(0,s.XQ)(r,(function(e){return(0,s.Ft)(e)?null:"repeat(".concat(e,", minmax(0, 1fr))")})));return o.createElement(Q,z({ref:t,gap:u,columnGap:n,rowGap:c,templateColumns:f},m))}));s.Ts&&(de.displayName="SimpleGrid");var me=(0,l.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});s.Ts&&(me.displayName="Spacer");var pe="& > *:not(style) ~ *:not(style)";var fe=function(e){return o.createElement(l.m$.div,z(z({className:"chakra-stack__divider"},e),{},{__css:z(z({},e.__css),{},{borderWidth:0,alignSelf:"stretch",borderColor:"inherit",width:"auto",height:"auto"})}))},ge=function(e){return o.createElement(l.m$.div,z(z({className:"chakra-stack__item"},e),{},{__css:z({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},he=(0,l.Gp)((function(e,t){var r=e.isInline,a=e.direction,c=e.align,u=e.justify,m=e.spacing,p=void 0===m?"0.5rem":m,f=e.wrap,g=e.children,h=e.divider,v=e.className,y=e.shouldWrapChildren,b=(0,i.Z)(e,j),w=r?"row":null!=a?a:"column",E=(0,o.useMemo)((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(0,n.Z)({flexDirection:r},pe,(0,s.XQ)(r,(function(e){return a[e]})))}({direction:w,spacing:p})}),[w,p]),x=(0,o.useMemo)((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,s.XQ)(r,(function(e){return a[e]}))}}({spacing:p,direction:w})}),[p,w]),_=!!h,k=!y&&!_,N=(0,d.WR)(g),C=k?N:N.map((function(e,t){var r=void 0!==e.key?e.key:t,a=t+1===N.length,n=y?o.createElement(ge,{key:r},e):e;if(!_)return n;var i=(0,o.cloneElement)(h,{__css:x}),l=a?null:i;return o.createElement(o.Fragment,{key:r},n,l)})),S=(0,s.cx)("chakra-stack",v);return o.createElement(l.m$.div,z({ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:E.flexDirection,flexWrap:f,className:S,__css:_?{}:(0,n.Z)({},pe,E[pe])},b),C)}));s.Ts&&(he.displayName="Stack");var ve=(0,l.Gp)((function(e,t){return o.createElement(he,z(z({align:"center"},e),{},{direction:"row",ref:t}))}));s.Ts&&(ve.displayName="HStack");var ye=(0,l.Gp)((function(e,t){return o.createElement(he,z(z({align:"center"},e),{},{direction:"column",ref:t}))}));s.Ts&&(ye.displayName="VStack");var be=(0,l.Gp)((function(e,t){var r=(0,l.mq)("Text",e),a=(0,c.Lr)(e),n=(a.className,a.align,a.decoration,a.casing,(0,i.Z)(a,G)),u=(0,s.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(l.m$.p,z(z(z({ref:t,className:(0,s.cx)("chakra-text",e.className)},u),n),{},{__css:r}))}));function we(e){return"number"==typeof e?"".concat(e,"px"):e}s.Ts&&(be.displayName="Text");var Ee=(0,l.Gp)((function(e,t){var r=e.spacing,a=void 0===r?"0.5rem":r,n=e.spacingX,u=e.spacingY,d=e.children,m=e.justify,p=e.direction,f=e.align,g=e.className,h=e.shouldWrapChildren,v=(0,i.Z)(e,I),y=(0,o.useMemo)((function(){var e={spacingX:n,spacingY:u},t=e.spacingX,r=void 0===t?a:t,i=e.spacingY,o=void 0===i?a:i;return{"--chakra-wrap-x-spacing":function(e){return(0,s.XQ)(r,(function(t){return we((0,c.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,s.XQ)(o,(function(t){return we((0,c.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:m,alignItems:f,flexDirection:p,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[a,n,u,m,f,p]),b=h?o.Children.map(d,(function(e,t){return o.createElement(xe,{key:t},e)})):d;return o.createElement(l.m$.div,z({ref:t,className:(0,s.cx)("chakra-wrap",g),overflow:"hidden"},v),o.createElement(l.m$.ul,{className:"chakra-wrap__list",__css:y},b))}));s.Ts&&(Ee.displayName="Wrap");var xe=(0,l.Gp)((function(e,t){var r=e.className,a=(0,i.Z)(e,Z);return o.createElement(l.m$.li,z({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,s.cx)("chakra-wrap__listitem",r)},a))}));s.Ts&&(xe.displayName="WrapItem")},4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},1046:function(e,t,r){r.d(t,{w_:function(){return c}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,n=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},6296:function(e,t,r){r.d(t,{L:function(){return f},M:function(){return E},P:function(){return w},S:function(){return Z},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],p=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,o({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,g);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},y=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=l(e,b);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,_,k=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],T=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=l(e,C),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,k=w.className,N=l(w,S),O=(0,a.useRef)(),L=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var A=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(989)]).then(r.bind(r,5989)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return _=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=O.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(L)):_&&T.has(L)?void 0:(x.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;O.current&&(O.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(L),image:i},h)),T.has(L)||(e=requestAnimationFrame((function(){O.current&&(t=n(O.current,L,T,c,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){T.has(L)&&_&&(O.current.innerHTML=_(o({isLoading:T.has(L),isLoaded:T.has(L),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},N,{style:o({},E,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},L=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));L.propTypes=N,L.displayName="GatsbyImage";var A,W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),I={src:i().string.isRequired,alt:k,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Z=(A=L,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=l(e,W);return n&&console.warn(n),r?a.createElement(A,o({image:r},i)):(console.warn("Image not loaded",t),null)});Z.displayName="StaticImage",Z.propTypes=I},3851:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(7294),n=r(1597),i=r(6296),o=r(8809),l=function(){return a.createElement(o.xu,{bgColor:"black"},a.createElement(o.W2,{maxW:"7xl",color:"white",py:8},a.createElement(o.kC,{align:"center"},a.createElement(o.xu,null,a.createElement(i.S,{src:"../../assets/logos/ap-logo-full-white.png",alt:"Official Austin Peay Logo. Full Horizontal White Text",placeholder:"blurred",height:60,__imageData:r(2831)})),a.createElement(o.QI,{w:"full",textTransform:"uppercase",listStyleType:"none",fontSize:"lg"},a.createElement(o.kC,{justify:"space-evenly"},a.createElement(o.HC,{_hover:{fontWeight:"bold"}},a.createElement(n.Link,{to:"/"},"App Overview")),a.createElement(o.HC,{_hover:{fontWeight:"bold"}},a.createElement(n.Link,{to:"/download"},"Download Guide")),a.createElement(o.HC,{_hover:{fontWeight:"bold"}},a.createElement(n.Link,{to:"/team"},"Our Team")),a.createElement(o.HC,{_hover:{fontWeight:"bold"}},a.createElement(n.Link,{to:"/"},"Get Connected")))))))},s=function(){return a.createElement("div",null,"AppStoreBadge")},c=function(){return a.createElement("div",null,"PlayStoreBadge")},u=r(7108),d=r(933),m=r(1853),p=function(e){var t=e.children,r=e.label,n=e.href,i=e.rounded;return a.createElement(u.zx,{bg:(0,d.ff)("white","black"),color:(0,d.ff)("black","white"),rounded:i,w:10,h:10,cursor:"pointer",as:"a",href:n,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",target:"_blank",fontSize:22,_hover:{bg:(0,d.ff)("#C41E3A","whiteAlpha.200"),color:(0,d.ff)("white","white")}},a.createElement(m.TX,null,r),a.createElement(o.xv,null,t))},f=r(658),g=r(3201),h=function(){return a.createElement(o.xu,{bg:(0,d.ff)("black","gray.50"),color:(0,d.ff)("white","gray.700")},a.createElement(o.W2,{as:o.Kq,maxW:"7xl",py:10},a.createElement(o.MI,{columns:{base:1,sm:2,md:4},spacing:8},a.createElement(o.Kq,{align:"flex-start"},a.createElement(f.Z,{weight:"bold"},"APSU"),a.createElement("a",{target:"_blank",href:"https://www.apsu.edu/"},"Official Webite"),a.createElement("a",{target:"_blank",href:"https://twitter.com/austinpeay?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},"Official Twitter"),a.createElement("a",{target:"_blank",href:"https://www.instagram.com/austinpeay/?hl=en"},"Official Instagram"),a.createElement("a",{target:"_blank",href:"https://www.facebook.com/austinpeay/"},"Official Facebook"),a.createElement("a",{target:"_blank",href:"https://www.apsu.edu/costem"},"COSTEM Website"),a.createElement("a",{target:"_blank",href:"https://twitter.com/apsucostem"},"COSTEM Twitter"),a.createElement("a",{target:"_blank",href:"https://www.instagram.com/apsucostem/?hl=en"},"COSTEM Instagram"),a.createElement("a",{target:"_blank",href:"https://www.facebook.com/APSUCoSTEM/"},"COSTEM Facebook")),a.createElement(o.Kq,{align:"flex-start"},a.createElement(f.Z,{weight:"bold"},"App Overview"),a.createElement(n.Link,{to:"/"},"History"),a.createElement(n.Link,{to:"/"},"Features"),a.createElement(n.Link,{to:"/"},"Benefits"),a.createElement("a",{target:"_blank",href:"https://github.com/apsu-math-trails"},"GitHub Repo")),a.createElement(o.Kq,{align:"flex-start"},a.createElement(f.Z,{weight:"bold"},"Our Team"),a.createElement(n.Link,{to:"/sponsors"},"Project Sponsors"),a.createElement(n.Link,{to:"/developers"},"Devs & Designers")),a.createElement(o.Kq,{align:"flex-start",justifySelf:"end"},a.createElement(f.Z,{weight:"bold"},"Install App On"),a.createElement(s,null),a.createElement(c,null)))),a.createElement(o.xu,{borderTopWidth:1,borderStyle:"solid",borderColor:(0,d.ff)("gray.200","gray.700")},a.createElement(o.W2,{as:o.Kq,maxW:"7xl",py:4,direction:{base:"column",md:"row"},spacing:4,justify:{md:"space-between"},align:{md:"center"}},a.createElement(o.xv,null,"© ",(new Date).getFullYear()," APSU - College of STEM - All rights reserved."),a.createElement(o.Kq,{direction:"row",spacing:6},a.createElement(p,{label:"Github",href:"https://github.com/apsu-math-trails",rounded:"full"},a.createElement(g.hJX,null)),a.createElement(p,{label:"Twitter",href:"https://twitter.com/apsucostem",rounded:"full"},a.createElement(g.fWC,null)),a.createElement(p,{label:"Instagram",href:"https://www.instagram.com/apsucostem/?hl=en",rounded:"full"},a.createElement(g.Zf_,null)),a.createElement(p,{label:"Facebook",href:"https://www.facebook.com/APSUCoSTEM/",rounded:"full"},a.createElement(g.Am9,null))))))},v=function(e){var t=e.children;return a.createElement(a.Fragment,null,a.createElement(l,null),t,a.createElement(h,null))}},658:function(e,t,r){var a=r(7294),n=r(8809);t.Z=function(e){var t=e.weight,r=e.size,i=e.children;return a.createElement(n.xv,{fontWeight:t,fontSize:r,mb:2},i)}},1334:function(e,t,r){r.d(t,{Z:function(){return o}});var a=r(7294),n=r(1597),i=function(){return(0,n.useStaticQuery)("530515892").site.siteMetadata},o=function(e){var t=e.title,r=(e.desc,e.pathname,e.children),n=i(),o=n.subTitle,l={title:t+" "+o||"Journey Together "+o,description:n.description};return a.createElement(a.Fragment,null,a.createElement("title",null,l.title),a.createElement("meta",{name:"description",content:l.description}),r)}},2831:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAC4jAAAuIwF4pT92AAABMElEQVQozy3Rv0sWUBTG8TfSpSKN3qGG6AdF6av9kLJ4EwxpyIbEqR+LGCHhUC22GI1NEvQfhFPNodgQNDUmDSG0FE5O/gnPJy6c4XLvOfec73meezvo4A428AG/a1/CGh4lWcFbrOMlVnEDn/AOr7CM150Cfk+yj028bxB8TLKX5Cd2Ww0+4w92krzAV3xJ8jfJNn412H18w1bt92rILBbwHE/xAI+TPMM8JjCOLhZLxJtOkn9l6UfZnUvSgHdxEZdxHedwDGcqPl/3tzCCHm62xib9Ah6WgtOl8FKt6VIzVsAG6SU5leRq5VvdNYy2xgEcxCAOYzjJSRxJcggH2hnHq3G4bLb4aJJuDRrCiQbsJ2lv0a/f7peNZuFKksmyOJHkCc7idqtNMoUZTFVu+j9PB8+1YMQecwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/d05bd944752f97ecfea918637411b108/73473/ap-logo-full-white.png","srcSet":"/static/d05bd944752f97ecfea918637411b108/0e0b6/ap-logo-full-white.png 45w,\\n/static/d05bd944752f97ecfea918637411b108/6b578/ap-logo-full-white.png 90w,\\n/static/d05bd944752f97ecfea918637411b108/73473/ap-logo-full-white.png 180w,\\n/static/d05bd944752f97ecfea918637411b108/6ac6f/ap-logo-full-white.png 360w","sizes":"(min-width: 180px) 180px, 100vw"},"sources":[{"srcSet":"/static/d05bd944752f97ecfea918637411b108/5e07a/ap-logo-full-white.webp 45w,\\n/static/d05bd944752f97ecfea918637411b108/fe46c/ap-logo-full-white.webp 90w,\\n/static/d05bd944752f97ecfea918637411b108/3706f/ap-logo-full-white.webp 180w,\\n/static/d05bd944752f97ecfea918637411b108/ffed4/ap-logo-full-white.webp 360w","type":"image/webp","sizes":"(min-width: 180px) 180px, 100vw"}]},"width":180,"height":60}')}}]);
//# sourceMappingURL=commons-5cc7808cd9e5747f0afd.js.map