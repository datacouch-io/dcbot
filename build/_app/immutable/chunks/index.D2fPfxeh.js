import{A as s}from"./index.BlPo-5sI.js";const l=async a=>{let o=null;const n=await fetch(`${s}/config`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return n},h=async(a,o)=>{let n=null;const t=await fetch(`${s}/config/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),n=e.detail,null));if(n)throw n;return t},u=async(a,o)=>{const n=new FormData;n.append("file",o);let t=null;const e=await fetch(`${s}/transcriptions`,{method:"POST",headers:{Accept:"application/json",authorization:`Bearer ${a}`},body:n}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(t=r.detail,console.log(r),null));if(t)throw t;return e},d=async(a="",o="alloy",n="",t)=>{let e=null;const r=await fetch(`${s}/speech`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({input:n,voice:o,...t})}).then(async i=>{if(!i.ok)throw await i.json();return i}).catch(i=>(e=i.detail,console.log(i),null));if(e)throw e;return r},p=async(a="")=>{let o=null;const n=await fetch(`${s}/models`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n},f=async(a="")=>{let o=null;const n=await fetch(`${s}/voices`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return n};export{p as a,f as b,l as g,d as s,u as t,h as u};
//# sourceMappingURL=index.D2fPfxeh.js.map
