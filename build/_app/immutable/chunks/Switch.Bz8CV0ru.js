import{a0 as me,p as be,s as O,T as p,e as z,c as F,a1 as v,i as q,W as re,n as N,d as y,S as E,j as A,U as G,B as U,k as ke,l as M,o as ge,r as H,a as ue,u as x,v as L,w as V,x as X,F as pe,E as Ce,G as ye,N as Se}from"./scheduler.zIJcXxfw.js";import{S as w,i as R,g as D,a as g,c as W,t as k,b as J,d as K,m as Q,e as Y,f as Ae}from"./index.AJ44Rmxa.js";import{o as ve,a as $,d as B,e as qe,b as ee,k as te,s as Ee,c as Ne}from"./create.BkENi-Q3.js";import{g as j,a as Pe}from"./spread.CgU5AtxT.js";import{t as Te,o as Ie,a as Me,r as Oe,g as Ue,c as we}from"./updater.C94odJM1.js";import{w as Re}from"./index.CPPrZiJ5.js";const je={defaultChecked:!1,disabled:!1,required:!1,name:"",value:""},{name:ne}=Ne("switch");function Be(n){const e={...je,...n},t=Te(ve(e,"checked")),{disabled:s,required:i,name:l,value:a}=t,o=e.checked??Re(e.defaultChecked),c=Ie(o,e==null?void 0:e.onCheckedChange);function r(){s.get()||c.update(_=>!_)}const u=$(ne(),{stores:[c,s,i],returned:([_,b,f])=>({"data-disabled":B(b),disabled:B(b),"data-state":_?"checked":"unchecked",type:"button",role:"switch","aria-checked":_?"true":"false","aria-required":f?"true":void 0}),action(_){return{destroy:qe(ee(_,"click",()=>{r()}),ee(_,"keydown",f=>{f.key!==te.ENTER&&f.key!==te.SPACE||(f.preventDefault(),r())}))}}}),h=$(ne("input"),{stores:[c,l,i,s,a],returned:([_,b,f,S,C])=>({type:"checkbox","aria-hidden":!0,hidden:!0,tabindex:-1,name:b,value:C,checked:_,required:f,disabled:B(S),style:Ee({position:"absolute",opacity:0,"pointer-events":"none",margin:0,transform:"translateX(-100%)"})})});return{elements:{root:u,input:h},states:{checked:c},options:t}}function oe(){return{NAME:"switch",PARTS:["root","input","thumb"]}}function De(n){const{NAME:e,PARTS:t}=oe(),s=Me(e,t),i={...Be(Oe(n)),getAttrs:s};return me(e,i),{...i,updateOption:Ue(i.options)}}function ce(){const{NAME:n}=oe();return be(n)}function We(n){let e,t,s,i=[n[2],{name:n[3]},{disabled:n[4]},{required:n[5]},{value:n[1]},n[11]],l={};for(let a=0;a<i.length;a+=1)l=p(l,i[a]);return{c(){e=z("input"),this.h()},l(a){e=F(a,"INPUT",{name:!0}),this.h()},h(){v(e,l)},m(a,o){q(a,e,o),"value"in l&&(e.value=l.value),e.autofocus&&e.focus(),n[13](e),t||(s=re(n[2].action(e)),t=!0)},p(a,[o]){v(e,l=j(i,[o&4&&a[2],o&8&&{name:a[3]},o&16&&{disabled:a[4]},o&32&&{required:a[5]},o&2&&e.value!==a[1]&&{value:a[1]},o&2048&&a[11]])),"value"in l&&(e.value=l.value)},i:N,o:N,d(a){a&&y(e),n[13](null),t=!1,s()}}}function ze(n,e,t){let s;const i=["el"];let l=E(e,i),a,o,c,r,u,{el:h=void 0}=e;const{elements:{input:_},options:{value:b,name:f,disabled:S,required:C}}=ce();A(n,_,m=>t(2,o=m)),A(n,b,m=>t(12,a=m)),A(n,f,m=>t(3,c=m)),A(n,S,m=>t(4,r=m)),A(n,C,m=>t(5,u=m));function P(m){U[m?"unshift":"push"](()=>{h=m,t(0,h)})}return n.$$set=m=>{e=p(p({},e),G(m)),t(11,l=E(e,i)),"el"in m&&t(0,h=m.el)},n.$$.update=()=>{n.$$.dirty&4096&&t(1,s=a===void 0||a===""?"on":a)},[h,s,o,c,r,u,_,b,f,S,C,l,a,P]}class Fe extends w{constructor(e){super(),R(this,e,ze,We,O,{el:0})}}const Ge=n=>({builder:n&16}),se=n=>({builder:n[4]}),He=n=>({builder:n&16}),ie=n=>({builder:n[4]});function Le(n){let e,t,s,i;const l=n[17].default,a=H(l,n,n[16],se);let o=[n[4],{type:"button"},n[7]],c={};for(let r=0;r<o.length;r+=1)c=p(c,o[r]);return{c(){e=z("button"),a&&a.c(),this.h()},l(r){e=F(r,"BUTTON",{type:!0});var u=ue(e);a&&a.l(u),u.forEach(y),this.h()},h(){v(e,c)},m(r,u){q(r,e,u),a&&a.m(e,null),e.autofocus&&e.focus(),n[18](e),t=!0,s||(i=[re(n[4].action(e)),x(e,"m-click",n[6]),x(e,"m-keydown",n[6])],s=!0)},p(r,u){a&&a.p&&(!t||u&65552)&&L(a,l,r,r[16],t?X(l,r[16],u,Ge):V(r[16]),se),v(e,c=j(o,[u&16&&r[4],{type:"button"},u&128&&r[7]]))},i(r){t||(k(a,r),t=!0)},o(r){g(a,r),t=!1},d(r){r&&y(e),a&&a.d(r),n[18](null),s=!1,pe(i)}}}function Ve(n){let e;const t=n[17].default,s=H(t,n,n[16],ie);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,l){s&&s.p&&(!e||l&65552)&&L(s,t,i,i[16],e?X(t,i[16],l,He):V(i[16]),ie)},i(i){e||(k(s,i),e=!0)},o(i){g(s,i),e=!1},d(i){s&&s.d(i)}}}function ae(n){let e,t;const s=[n[3]];let i={};for(let l=0;l<s.length;l+=1)i=p(i,s[l]);return e=new Fe({props:i}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,a){Q(e,l,a),t=!0},p(l,a){const o=a&8?j(s,[Pe(l[3])]):{};e.$set(o)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){g(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function Xe(n){let e,t,s,i,l;const a=[Ve,Le],o=[];function c(u,h){return u[2]?0:1}e=c(n),t=o[e]=a[e](n);let r=n[1]&&ae(n);return{c(){t.c(),s=ke(),r&&r.c(),i=M()},l(u){t.l(u),s=ge(u),r&&r.l(u),i=M()},m(u,h){o[e].m(u,h),q(u,s,h),r&&r.m(u,h),q(u,i,h),l=!0},p(u,[h]){let _=e;e=c(u),e===_?o[e].p(u,h):(D(),g(o[_],1,1,()=>{o[_]=null}),W(),t=o[e],t?t.p(u,h):(t=o[e]=a[e](u),t.c()),k(t,1),t.m(s.parentNode,s)),u[1]?r?(r.p(u,h),h&2&&k(r,1)):(r=ae(u),r.c(),k(r,1),r.m(i.parentNode,i)):r&&(D(),g(r,1,1,()=>{r=null}),W())},i(u){l||(k(t),k(r),l=!0)},o(u){g(t),g(r),l=!1},d(u){u&&(y(s),y(i)),o[e].d(u),r&&r.d(u)}}}function Je(n,e,t){let s,i;const l=["checked","onCheckedChange","disabled","name","value","includeInput","required","asChild","inputAttrs","el"];let a=E(e,l),o,{$$slots:c={},$$scope:r}=e,{checked:u=void 0}=e,{onCheckedChange:h=void 0}=e,{disabled:_=void 0}=e,{name:b=void 0}=e,{value:f=void 0}=e,{includeInput:S=!0}=e,{required:C=void 0}=e,{asChild:P=!1}=e,{inputAttrs:m=void 0}=e,{el:T=void 0}=e;const{elements:{root:Z},states:{checked:de},updateOption:I,getAttrs:fe}=De({disabled:_,name:b,value:f,required:C,defaultChecked:u,onCheckedChange:({next:d})=>(u!==d&&(h==null||h(d),t(8,u=d)),d)});A(n,Z,d=>t(15,o=d));const he=we();function _e(d){U[d?"unshift":"push"](()=>{T=d,t(0,T)})}return n.$$set=d=>{e=p(p({},e),G(d)),t(7,a=E(e,l)),"checked"in d&&t(8,u=d.checked),"onCheckedChange"in d&&t(9,h=d.onCheckedChange),"disabled"in d&&t(10,_=d.disabled),"name"in d&&t(11,b=d.name),"value"in d&&t(12,f=d.value),"includeInput"in d&&t(1,S=d.includeInput),"required"in d&&t(13,C=d.required),"asChild"in d&&t(2,P=d.asChild),"inputAttrs"in d&&t(3,m=d.inputAttrs),"el"in d&&t(0,T=d.el),"$$scope"in d&&t(16,r=d.$$scope)},n.$$.update=()=>{n.$$.dirty&256&&u!==void 0&&de.set(u),n.$$.dirty&1024&&I("disabled",_),n.$$.dirty&2048&&I("name",b),n.$$.dirty&4096&&I("value",f),n.$$.dirty&8192&&I("required",C),n.$$.dirty&32768&&t(4,s=o),n.$$.dirty&256&&t(14,i={...fe("root"),"data-checked":u?"":void 0}),n.$$.dirty&16400&&Object.assign(s,i)},[T,S,P,m,s,Z,he,a,u,h,_,b,f,C,i,o,r,c,_e]}class Ke extends w{constructor(e){super(),R(this,e,Je,Xe,O,{checked:8,onCheckedChange:9,disabled:10,name:11,value:12,includeInput:1,required:13,asChild:2,inputAttrs:3,el:0})}}const Qe=n=>({attrs:n&8,checked:n&4}),le=n=>({attrs:n[3],checked:n[2]});function Ye(n){let e,t=[n[5],n[3]],s={};for(let i=0;i<t.length;i+=1)s=p(s,t[i]);return{c(){e=z("span"),this.h()},l(i){e=F(i,"SPAN",{}),ue(e).forEach(y),this.h()},h(){v(e,s)},m(i,l){q(i,e,l),n[8](e)},p(i,l){v(e,s=j(t,[l&32&&i[5],l&8&&i[3]]))},i:N,o:N,d(i){i&&y(e),n[8](null)}}}function Ze(n){let e;const t=n[7].default,s=H(t,n,n[6],le);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,l){s&&s.m(i,l),e=!0},p(i,l){s&&s.p&&(!e||l&76)&&L(s,t,i,i[6],e?X(t,i[6],l,Qe):V(i[6]),le)},i(i){e||(k(s,i),e=!0)},o(i){g(s,i),e=!1},d(i){s&&s.d(i)}}}function xe(n){let e,t,s,i;const l=[Ze,Ye],a=[];function o(c,r){return c[1]?0:1}return e=o(n),t=a[e]=l[e](n),{c(){t.c(),s=M()},l(c){t.l(c),s=M()},m(c,r){a[e].m(c,r),q(c,s,r),i=!0},p(c,[r]){let u=e;e=o(c),e===u?a[e].p(c,r):(D(),g(a[u],1,1,()=>{a[u]=null}),W(),t=a[e],t?t.p(c,r):(t=a[e]=l[e](c),t.c()),k(t,1),t.m(s.parentNode,s))},i(c){i||(k(t),i=!0)},o(c){g(t),i=!1},d(c){c&&y(s),a[e].d(c)}}}function $e(n,e,t){let s;const i=["asChild","el"];let l=E(e,i),a,{$$slots:o={},$$scope:c}=e,{asChild:r=!1}=e,{el:u=void 0}=e;const{states:{checked:h},getAttrs:_}=ce();A(n,h,f=>t(2,a=f));function b(f){U[f?"unshift":"push"](()=>{u=f,t(0,u)})}return n.$$set=f=>{e=p(p({},e),G(f)),t(5,l=E(e,i)),"asChild"in f&&t(1,r=f.asChild),"el"in f&&t(0,u=f.el),"$$scope"in f&&t(6,c=f.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&t(3,s={..._("thumb"),"data-state":a?"checked":"unchecked","data-checked":a?"":void 0})},[u,r,a,s,h,l,c,o,b]}class et extends w{constructor(e){super(),R(this,e,$e,xe,O,{asChild:1,el:0})}}function tt(n){let e,t;return e=new et({props:{class:"pointer-events-none block size-4 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "}}),{c(){J(e.$$.fragment)},l(s){K(e.$$.fragment,s)},m(s,i){Q(e,s,i),t=!0},p:N,i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){g(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function nt(n){let e,t,s;function i(a){n[3](a)}let l={onCheckedChange:n[2],class:"flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] transition  "+(n[0]?" bg-emerald-600":"bg-gray-200 dark:bg-transparent")+" outline outline-1 outline-gray-100 dark:outline-gray-800",$$slots:{default:[tt]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.checked=n[0]),e=new Ke({props:l}),U.push(()=>Ae(e,"checked",i)),{c(){J(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,o){Q(e,a,o),s=!0},p(a,[o]){const c={};o&1&&(c.class="flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] transition  "+(a[0]?" bg-emerald-600":"bg-gray-200 dark:bg-transparent")+" outline outline-1 outline-gray-100 dark:outline-gray-800"),o&16&&(c.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,c.checked=a[0],Ce(()=>t=!1)),e.$set(c)},i(a){s||(k(e.$$.fragment,a),s=!0)},o(a){g(e.$$.fragment,a),s=!1},d(a){Y(e,a)}}}function st(n,e,t){let{state:s=!0}=e;const i=ye(),l=async o=>{await Se(),i("change",o)};function a(o){s=o,t(0,s)}return n.$$set=o=>{"state"in o&&t(0,s=o.state)},[s,i,l,a]}class ct extends w{constructor(e){super(),R(this,e,st,nt,O,{state:0})}}export{ct as S};
//# sourceMappingURL=Switch.Bz8CV0ru.js.map
