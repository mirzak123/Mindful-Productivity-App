(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{6218:function(e,t,a){Promise.resolve().then(a.bind(a,7179))},8525:function(e,t,a){"use strict";a.d(t,{V:function(){return r}});var n=a(4535),i=a(7542);function r(e){return(0,i.ZP)("MuiDivider",e)}let o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},2733:function(e,t,a){"use strict";a.d(t,{f:function(){return r}});var n=a(4535),i=a(7542);function r(e){return(0,i.ZP)("MuiListItemIcon",e)}let o=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=o},467:function(e,t,a){"use strict";a.d(t,{L:function(){return r}});var n=a(4535),i=a(7542);function r(e){return(0,i.ZP)("MuiListItemText",e)}let o=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=o},7179:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var n=a(7437),i=a(818),r=a(8549),o=a(6065),s=a(3172),c=a(3950),l=a(2988),d=a(2265),u=a(4839),p=a(6259),m=a(317),h=a(8024),g=a(1738),v=a(8510),f=a(1175),x=a(5388),b=a(8632),Z=a(909),y=a(8525),j=a(2733),C=a(467),I=a(4535),k=a(7542);function N(e){return(0,k.ZP)("MuiMenuItem",e)}let w=(0,I.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),O=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=e=>{let{disabled:t,dense:a,divider:n,disableGutters:i,selected:r,classes:o}=e,s=(0,p.Z)({root:["root",a&&"dense",t&&"disabled",!i&&"gutters",n&&"divider",r&&"selected"]},N,o);return(0,l.Z)({},o,s)},_=(0,h.ZP)(x.Z,{shouldForwardProp:e=>(0,g.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})(e=>{let{theme:t,ownerState:a}=e;return(0,l.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(w.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,m.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(w.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,m.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(w.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,m.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,m.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(w.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(w.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(y.Z.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(y.Z.inset)]:{marginLeft:52},["& .".concat(C.Z.root)]:{marginTop:0,marginBottom:0},["& .".concat(C.Z.inset)]:{paddingLeft:36},["& .".concat(j.Z.root)]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,l.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(j.Z.root," svg")]:{fontSize:"1.25rem"}}))}),S=d.forwardRef(function(e,t){let a;let i=(0,v.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:r=!1,component:o="li",dense:s=!1,divider:p=!1,disableGutters:m=!1,focusVisibleClassName:h,role:g="menuitem",tabIndex:x,className:y}=i,j=(0,c.Z)(i,O),C=d.useContext(f.Z),I=d.useMemo(()=>({dense:s||C.dense||!1,disableGutters:m}),[C.dense,s,m]),k=d.useRef(null);(0,b.Z)(()=>{r&&k.current&&k.current.focus()},[r]);let N=(0,l.Z)({},i,{dense:I.dense,divider:p,disableGutters:m}),w=M(i),S=(0,Z.Z)(k,t);return i.disabled||(a=void 0!==x?x:-1),(0,n.jsx)(f.Z.Provider,{value:I,children:(0,n.jsx)(_,(0,l.Z)({ref:S,role:g,tabIndex:a,component:o,focusVisibleClassName:(0,u.Z)(w.focusVisible,h),className:(0,u.Z)(w.root,y)},j,{ownerState:N,classes:w}))})});var F=a(1326),R=a(4946),T=a.n(R),L=a(6548),P=a(511),V=e=>{let{minutes:t}=e,[a,i]=(0,d.useState)(60*t),[r,o]=(0,d.useState)(!1),s=()=>{i(e=>e-1)},c=e=>e<10?"0".concat(e):"".concat(e);(0,d.useEffect)(()=>{i(60*t)},[t]),(0,d.useEffect)(()=>{let e=setInterval(s,1e3);return a<=0?(o(!1),clearInterval(e)):r||clearInterval(e),()=>clearInterval(e)},[r,a]);let{minutes:l,seconds:u}={minutes:c(Math.floor(a/60)),seconds:c(a%60)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(F.Z,{className:T().className,sx:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"6rem",marginTop:4,marginBottom:4},children:[l.split("").map((e,t)=>(0,n.jsx)(P.Z,{className:"".concat(T().className," timer-digit"),component:"span",color:"primary",children:e},"min-".concat(t))),(0,n.jsx)(P.Z,{className:"".concat(T().className," timer-digit"),component:"span",color:"primary",children:":"}),u.split("").map((e,t)=>(0,n.jsx)(P.Z,{className:"".concat(T().className," timer-digit"),component:"span",color:"primary",children:e},"sec-".concat(t)))]}),(0,n.jsxs)(F.Z,{sx:{display:"flex",justifyContent:"space-around"},children:[(0,n.jsx)(L.Z,{variant:"contained",onClick:()=>{o(!0)},disabled:r||a<=0,children:"Start"}),(0,n.jsx)(L.Z,{variant:"contained",onClick:()=>{o(!1)},disabled:!r,children:"Pause"}),(0,n.jsx)(L.Z,{variant:"contained",onClick:()=>{o(!1),i(60*t)},children:"Reset"})]})]})},B=()=>{let[e,t]=(0,d.useState)(10);(0,d.useEffect)(()=>{let e=localStorage.getItem("timerDefault");t(e?Number(e):10)},[]);let a=e=>{localStorage.setItem("timerDefault",e.toString())};return(0,n.jsxs)(F.Z,{children:[(0,n.jsxs)(r.Z,{sx:{m:1,minWidth:80},children:[(0,n.jsx)(o.Z,{id:"demo-simple-select-autowidth-label",children:"Time"}),(0,n.jsxs)(s.Z,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:e,onChange:e=>{let n=e.target.value;t(n),a(n)},autoWidth:!0,label:"Age",children:[(0,n.jsx)(S,{value:1/6,children:"10 seconds"}),(0,n.jsx)(S,{value:.5,children:"30 seconds"}),(0,n.jsx)(S,{value:10,children:"10 minutes"}),(0,n.jsx)(S,{value:20,children:"20 minutes"}),(0,n.jsx)(S,{value:30,children:"30 minues"}),(0,n.jsx)(S,{value:60,children:"1 hour"})]})]}),(0,n.jsx)(V,{minutes:e})]})},E=a(7082),W=()=>(0,n.jsxs)(F.Z,{sx:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[(0,n.jsx)(E.Z,{}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(P.Z,{variant:"h4",marginBottom:4,fontWeight:"bold",children:"Focus Timer"}),(0,n.jsx)(B,{})]})]})},818:function(e,t,a){"use strict";var n=a(7437),i=a(1035);t.Z=e=>{let{children:t}=e;return(0,n.jsx)(i.E.div,{layout:!0,children:(0,n.jsx)(i.E.div,{style:{backgroundColor:"white",borderRadius:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",padding:"24px",minWidth:"450px",maxWidth:"800px",textAlign:"center"},children:t})})}},7082:function(e,t,a){"use strict";var n=a(7437),i=a(4434),r=a(6548),o=a(6463);t.Z=()=>{let e=(0,o.useRouter)();return(0,n.jsx)(r.Z,{sx:{position:"absolute",top:0,left:0,borderRadius:"0 0 80px 0",width:"80px",height:"80px",paddingRight:4,paddingBottom:4,paddingTop:2},variant:"contained",onClick:()=>e.push("/"),children:(0,n.jsx)(i.Z,{})})}},4946:function(e){e.exports={style:{fontFamily:"'__Orbitron_f8a07c', '__Orbitron_Fallback_f8a07c'",fontStyle:"normal"},className:"__className_f8a07c"}}},function(e){e.O(0,[860,153,337,732,254,971,23,744],function(){return e(e.s=6218)}),_N_E=e.O()}]);