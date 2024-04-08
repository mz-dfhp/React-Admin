import{r as i,j as H,m as D,N as q,o as J,c as T,al as K,am as v}from"./index-jUBJRnYz.js";const Q=i.createContext({}),X=Q,U=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Y=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},Z=(e,t)=>{const{componentCls:s,gridColumns:n}=e,r={};for(let o=n;o>=0;o--)o===0?(r[`${s}${t}-${o}`]={display:"none"},r[`${s}-push-${o}`]={insetInlineStart:"auto"},r[`${s}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-push-${o}`]={insetInlineStart:"auto"},r[`${s}${t}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-offset-${o}`]={marginInlineStart:0},r[`${s}${t}-order-${o}`]={order:0}):(r[`${s}${t}-${o}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${o/n*100}%`,maxWidth:`${o/n*100}%`}],r[`${s}${t}-push-${o}`]={insetInlineStart:`${o/n*100}%`},r[`${s}${t}-pull-${o}`]={insetInlineEnd:`${o/n*100}%`},r[`${s}${t}-offset-${o}`]={marginInlineStart:`${o/n*100}%`},r[`${s}${t}-order-${o}`]={order:o});return r},P=(e,t)=>Z(e,t),z=(e,t,s)=>({[`@media (min-width: ${q(t)})`]:Object.assign({},P(e,s))}),ee=()=>({}),te=()=>({}),ne=H("Grid",U,ee),re=H("Grid",e=>{const t=D(e,{gridColumns:24}),s={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[Y(t),P(t,""),P(t,"-xs"),Object.keys(s).map(n=>z(t,s[n],n)).reduce((n,r)=>Object.assign(Object.assign({},n),r),{})]},te);var se=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function oe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const le=["xs","sm","md","lg","xl","xxl"],ae=i.forwardRef((e,t)=>{const{getPrefixCls:s,direction:n}=i.useContext(J),{gutter:r,wrap:o}=i.useContext(X),{prefixCls:y,span:d,order:$,offset:g,push:b,pull:h,className:G,children:I,flex:j,style:C}=e,O=se(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),a=s("col",y),[S,R]=re(a);let m={};le.forEach(f=>{let l={};const u=e[f];typeof u=="number"?l.span=u:typeof u=="object"&&(l=u||{}),delete O[f],m=Object.assign(Object.assign({},m),{[`${a}-${f}-${l.span}`]:l.span!==void 0,[`${a}-${f}-order-${l.order}`]:l.order||l.order===0,[`${a}-${f}-offset-${l.offset}`]:l.offset||l.offset===0,[`${a}-${f}-push-${l.push}`]:l.push||l.push===0,[`${a}-${f}-pull-${l.pull}`]:l.pull||l.pull===0,[`${a}-${f}-flex-${l.flex}`]:l.flex||l.flex==="auto",[`${a}-rtl`]:n==="rtl"})});const E=T(a,{[`${a}-${d}`]:d!==void 0,[`${a}-order-${$}`]:$,[`${a}-offset-${g}`]:g,[`${a}-push-${b}`]:b,[`${a}-pull-${h}`]:h},G,m,R),c={};if(r&&r[0]>0){const f=r[0]/2;c.paddingLeft=f,c.paddingRight=f}return j&&(c.flex=oe(j),o===!1&&!c.minWidth&&(c.minWidth=0)),S(i.createElement("div",Object.assign({},O,{style:Object.assign(Object.assign({},c),C),className:E,ref:t}),I))}),ue=ae;var ie=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function _(e,t){const[s,n]=i.useState(typeof e=="string"?e:""),r=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let o=0;o<v.length;o++){const y=v[o];if(!t[y])continue;const d=e[y];if(d!==void 0){n(d);return}}};return i.useEffect(()=>{r()},[JSON.stringify(e),t]),s}const ce=i.forwardRef((e,t)=>{const{prefixCls:s,justify:n,align:r,className:o,style:y,children:d,gutter:$=0,wrap:g}=e,b=ie(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:G}=i.useContext(J),[I,j]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,O]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),a=_(r,C),S=_(n,C),R=i.useRef($),m=K();i.useEffect(()=>{const x=m.subscribe(k=>{O(k);const p=R.current||0;(!Array.isArray(p)&&typeof p=="object"||Array.isArray(p)&&(typeof p[0]=="object"||typeof p[1]=="object"))&&j(k)});return()=>m.unsubscribe(x)},[]);const E=()=>{const x=[void 0,void 0];return(Array.isArray($)?$:[$,void 0]).forEach((p,V)=>{if(typeof p=="object")for(let A=0;A<v.length;A++){const N=v[A];if(I[N]&&p[N]!==void 0){x[V]=p[N];break}}else x[V]=p}),x},c=h("row",s),[f,l]=ne(c),u=E(),F=T(c,{[`${c}-no-wrap`]:g===!1,[`${c}-${S}`]:S,[`${c}-${a}`]:a,[`${c}-rtl`]:G==="rtl"},o,l),w={},M=u[0]!=null&&u[0]>0?u[0]/-2:void 0;M&&(w.marginLeft=M,w.marginRight=M),[,w.rowGap]=u;const[L,W]=u,B=i.useMemo(()=>({gutter:[L,W],wrap:g}),[L,W,g]);return f(i.createElement(X.Provider,{value:B},i.createElement("div",Object.assign({},b,{className:F,style:Object.assign(Object.assign({},w),y),ref:t}),d)))}),pe=ce;export{ue as C,pe as R};
