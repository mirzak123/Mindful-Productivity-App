(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6653:function(e,t,n){Promise.resolve().then(n.bind(n,1193))},7095:function(e,t,n){"use strict";n.d(t,{I:function(){return u},db:function(){return o}});var i=n(5236),r=n(5186),a=n(9842);let s=(0,i.ZF)({apiKey:"AIzaSyAKLKV0IUT3B_uErFNJDXmpXTxzdRlWIw8",authDomain:"mindful-productivity-app.firebaseapp.com",projectId:"mindful-productivity-app",storageBucket:"mindful-productivity-app.appspot.com",messagingSenderId:"1023824603729",appId:"1:1023824603729:web:b6e385d1e1343fa24d2670"}),u=(0,r.v0)(s),o=(0,a.ad)(s)},1193:function(e,t,n){"use strict";n.r(t);var i=n(7437),r=n(2265),a=n(3608),s=n(1326),u=n(3983),o=n(6548),d=n(511),l=n(6463),c=n(818),p=n(7082);t.default=()=>{let{login:e}=(0,a.a)(),t=(0,l.useRouter)(),[n,h]=(0,r.useState)(""),[x,f]=(0,r.useState)(""),v=async i=>{i.preventDefault();try{await e(n,x),t.push("/tasks")}catch(e){console.error("Login failed:",e)}};return(0,i.jsxs)(s.Z,{sx:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:[(0,i.jsx)(p.Z,{}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h1",{children:"Login"}),(0,i.jsx)("form",{onSubmit:v,children:(0,i.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",gap:4},children:[(0,i.jsx)(u.Z,{label:"Email",value:n,onChange:e=>h(e.target.value)}),(0,i.jsx)(u.Z,{label:"Password",type:"password",value:x,onChange:e=>f(e.target.value)}),(0,i.jsx)(o.Z,{type:"submit",variant:"contained",children:"Login"}),(0,i.jsx)(s.Z,{children:(0,i.jsxs)(d.Z,{variant:"body2",children:["Don't have an account?"," ",(0,i.jsx)(o.Z,{href:"/signup",children:"Sign Up"})]})})]})})]})]})}},818:function(e,t,n){"use strict";var i=n(7437),r=n(1035);t.Z=e=>{let{children:t}=e;return(0,i.jsx)(r.E.div,{layout:!0,children:(0,i.jsx)(r.E.div,{style:{backgroundColor:"white",borderRadius:"16px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",padding:"24px",minWidth:"450px",maxWidth:"800px",textAlign:"center"},children:t})})}},7082:function(e,t,n){"use strict";var i=n(7437),r=n(4434),a=n(6548),s=n(6463);t.Z=()=>{let e=(0,s.useRouter)();return(0,i.jsx)(a.Z,{sx:{position:"absolute",top:0,left:0,borderRadius:"0 0 80px 0",width:"80px",height:"80px",paddingRight:4,paddingBottom:4,paddingTop:2},variant:"contained",onClick:()=>e.push("/"),children:(0,i.jsx)(r.Z,{})})}},3608:function(e,t,n){"use strict";n.d(t,{AuthProvider:function(){return d},a:function(){return o}});var i=n(7437),r=n(2265),a=n(7095),s=n(5186);let u=(0,r.createContext)(void 0),o=()=>{let e=(0,r.useContext)(u);if(!e)throw Error("useAuth must be used within an AuthProvider");return e},d=e=>{let{children:t}=e,[n,o]=(0,r.useState)(null),[d,l]=(0,r.useState)(!0);(0,r.useEffect)(()=>{let e=(0,s.Aj)(a.I,e=>{console.log("user logged in",e),o(e),l(!1)});return()=>e()},[]);let c=async(e,t)=>{await (0,s.Xb)(a.I,e,t)},p=async(e,t)=>{await (0,s.e5)(a.I,e,t)},h=async()=>{await (0,s.w7)(a.I)};return(0,i.jsx)(u.Provider,{value:{user:n,loading:d,signUp:c,login:p,logout:h},children:!d&&t})}}},function(e){e.O(0,[358,802,153,337,732,254,72,983,971,23,744],function(){return e(e.s=6653)}),_N_E=e.O()}]);