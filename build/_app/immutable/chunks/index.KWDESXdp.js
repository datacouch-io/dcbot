import{b as s}from"./index.BlPo-5sI.js";import{b as c,d as i}from"./index.1jiXGYy7.js";const p=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${e}`},body:JSON.stringify({chat:o})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},d=async(e="",o=null)=>{let a=null;const n=new URLSearchParams;o!==null&&n.append("page",`${o}`);const t=await fetch(`${s}/chats/?${n.toString()}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(a=r,console.log(r),null));if(a)throw a;return t.map(r=>({...r,time_range:c(r.updated_at)}))},w=async(e="",o)=>{let a=null;const n=await fetch(`${s}/chats/list/user/${o}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n.map(t=>({...t,time_range:c(t.updated_at)}))},y=async(e="")=>{let o=null;const a=await fetch(`${s}/chats/archived`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return a},j=async e=>{let o=null;const a=await fetch(`${s}/chats/all`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return a},f=async e=>{let o=null;const a=await fetch(`${s}/chats/all/archived`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return a},g=async e=>{let o=null;const a=await fetch(`${s}/chats/all/db`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return a},$=async e=>{let o=null;const a=await fetch(`${s}/chats/tags/all`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return a},T=async(e="",o)=>{let a=null;const n=await fetch(`${s}/chats/tags`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({name:o})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n.map(t=>({...t,time_range:c(t.updated_at)}))},m=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},C=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/share/${o}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},B=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}/clone`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,"detail"in t?a=t.detail:a=t,console.log(t),null));if(a)throw a;return n},A=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}/share`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},E=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}/archive`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},z=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}/share`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},S=async(e,o,a)=>{let n=null;const t=await fetch(`${s}/chats/${o}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({chat:a})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r,console.log(r),null));if(n)throw n;return t},O=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t.detail,console.log(t),null));if(a)throw a;return n},I=async(e,o)=>{let a=null;const n=await fetch(`${s}/chats/${o}/tags`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(a=t,console.log(t),null));if(a)throw a;return n},U=async(e,o,a)=>{let n=null;const t=await fetch(`${s}/chats/${o}/tags`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({tag_name:a,chat_id:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r,console.log(r),null));if(n)throw n;return t},G=async(e,o,a)=>{let n=null;const t=await fetch(`${s}/chats/${o}/tags`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({tag_name:a,chat_id:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).then(r=>r).catch(r=>(n=r,console.log(r),null));if(n)throw n;return t},P=async e=>{let o=null;const a=await fetch(`${s}/chats/`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n.detail,console.log(n),null));if(o)throw o;return a},_=async e=>{let o=null;const a=await fetch(`${s}/chats/archive/all`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n.detail,console.log(n),null));if(o)throw o;return a},b=async e=>{let o=null;const a=await fetch(`${s}/users/permissions/user`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),o=n.detail,null));if(o)throw o;return a},k=async(e,o)=>{let a=null;const n=await fetch(`${s}/users/permissions/user`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({...o})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),a=t.detail,null));if(a)throw a;return n},L=async(e,o,a)=>{let n=null;const t=await fetch(`${s}/users/update/role`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({id:o,role:a})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),n=r.detail,null));if(n)throw n;return t},N=async e=>{let o=null;const a=await fetch(`${s}/users/`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),o=n.detail,null));if(o)throw o;return a||[]},v=async e=>{let o=null;const a=await fetch(`${s}/users/user/settings`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),o=n.detail,null));if(o)throw o;return a},J=async(e,o)=>{let a=null;const n=await fetch(`${s}/users/user/settings/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({...o})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),a=t.detail,null));if(a)throw a;return n},D=async(e,o)=>{let a=null;const n=await fetch(`${s}/users/${o}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),a=t.detail,null));if(a)throw a;return n},l=async(e,o)=>{let a=null;const n=await fetch(`${s}/users/user/info/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({...o})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),a=t.detail,null));if(a)throw a;return n},R=async e=>{const o=await i().catch(a=>{throw a});if(o)return await l(e,{location:o}),o;throw new Error("Failed to get user location")},x=async(e,o)=>{let a=null;const n=await fetch(`${s}/users/${o}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),a=t.detail,null));if(a)throw a;return n},F=async(e,o,a)=>{let n=null;const t=await fetch(`${s}/users/${o}/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({profile_image_url:a.profile_image_url,email:a.email,name:a.name,password:a.password!==""?a.password:void 0})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),n=r.detail,null));if(n)throw n;return t};export{J as A,y as B,E as C,f as D,B as E,v as F,R as G,D as a,I as b,U as c,$ as d,T as e,G as f,C as g,d as h,m as i,z as j,g as k,b as l,k as m,F as n,w as o,O as p,L as q,N as r,A as s,x as t,S as u,l as v,j as w,_ as x,P as y,p as z};
//# sourceMappingURL=index.KWDESXdp.js.map
