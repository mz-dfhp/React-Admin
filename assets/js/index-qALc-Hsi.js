import{r,a4 as e}from"./index-_WNEWx46.js";import{R as g,C as p}from"./row-2lIBIkud.js";import{C as x}from"./index-b_PceevE.js";const b=({value:n})=>{const[t,i]=r.useState(0);return r.useEffect(()=>{const d=performance.now(),o=a=>{const u=a-d,s=Math.min(1,u/4e3),c=1-(1-s)**3,l=Math.ceil(c*n);i(l),s<1&&requestAnimationFrame(m=>o(m))};requestAnimationFrame(a=>o(a))},[n]),e.jsx("span",{children:t})},_=b,h={create_video_num:99,publish_video_num:159853,upload_material_num:4456,auth_account_num:5655},f=[{key:"create_video_num",title:"访问量",style:{backgroundImage:"linear-gradient(25deg, #46345d, #505679, #567995, #599db3)"}},{key:"publish_video_num",title:"点赞量",style:{backgroundImage:"linear-gradient(25deg, #56489a, #8976b6, #baa8d2, #ebdcee)"}},{key:"upload_material_num",title:"下载量",style:{backgroundImage:"linear-gradient(25deg, #004547, #66554b, #ac604e, #f26650)"}},{key:"auth_account_num",title:"成交量",style:{backgroundImage:"linear-gradient(25deg, #2d2151, #65446a, #9c6a83, #d6939d)"}}];function v(){const[n]=r.useState(h);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"top-card",children:e.jsx(g,{gutter:[16,16],children:f.map(t=>e.jsx(p,{xs:24,sm:12,md:12,lg:6,xl:6,children:e.jsx(x,{title:t.title,bordered:!1,hoverable:!0,style:t.style,children:e.jsx("div",{className:"p-[15px] text-[36px] text-white font-bold",children:e.jsx(_,{value:n[t.key]})})})},t.key))})})})}export{v as default};
