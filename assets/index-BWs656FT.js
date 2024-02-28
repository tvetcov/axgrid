import{b as B,g as M,a5 as x,y as N,s as P,T as _,c as k,a,r as h,d as U,_ as w,a6 as z,u as W,j as c,e as E,f as H}from"./index-Y-5O-0jj.js";import{T as I}from"./Tooltip-BdZ92Pzw.js";import"./Toolbar-CloVGtDG.js";import"./Popper-CCV4zoc9.js";function O(o){return M("MuiLink",o)}const S=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),q=S,C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=o=>C[o]||o,J=({theme:o,ownerState:e})=>{const n=G(e.color),r=x(o,`palette.${n}`,!1)||e.color,s=x(o,`palette.${n}Channel`);return"vars"in o&&s?`rgba(${s} / 0.4)`:N(r,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=o=>{const{classes:e,component:n,focusVisible:r,underline:s}=o,t={root:["root",`underline${k(s)}`,n==="button"&&"button",r&&"focusVisible"]};return H(t,O,e)},X=P(_,{name:"MuiLink",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[`underline${k(n.underline)}`],n.component==="button"&&e.button]}})(({theme:o,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:J({theme:o,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.focusVisible}`]:{outline:"auto"}})),Y=h.forwardRef(function(e,n){const r=U({props:e,name:"MuiLink"}),{className:s,color:t="primary",component:u="a",onBlur:p,onFocus:d,TypographyClasses:g,underline:L="always",variant:f="inherit",sx:l}=r,T=w(r,K),{isFocusVisibleRef:m,onBlur:V,onFocus:v,ref:F}=z(),[R,b]=h.useState(!1),$=W(n,F),D=i=>{V(i),m.current===!1&&b(!1),p&&p(i)},j=i=>{v(i),m.current===!0&&b(!0),d&&d(i)},y=a({},r,{color:t,component:u,focusVisible:R,underline:L,variant:f}),A=Q(y);return c.jsx(X,a({color:t,className:E(A.root,s),classes:g,component:u,onBlur:D,onFocus:j,ref:$,ownerState:y,variant:f,sx:[...Object.keys(C).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},T))}),Z=Y,ee={color:"link.main"},oe=({href:o,label:e})=>{const n=r=>{r.stopPropagation()};return c.jsx(I,{title:"Open in New Tab",arrow:!0,disableInteractive:!0,children:c.jsx(Z,{href:o,onClick:n,underline:"always",target:"_blank",rel:"noopener",sx:ee,children:e})})},ie=oe;export{ie as default};
