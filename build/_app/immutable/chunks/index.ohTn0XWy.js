import{b as i}from"./index.BlPo-5sI.js";const u=async(r,o,a,t,c,e=null)=>{let n=null;const l=await fetch(`${i}/documents/create`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({collection_name:o,filename:a,name:t,title:c,...e?{content:JSON.stringify(e)}:{}})}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(n=s.detail,console.log(s),null));if(n)throw n;return l},p=async(r="")=>{let o=null;const a=await fetch(`${i}/documents/`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return a},d=async(r,o,a)=>{let t=null;const c=new URLSearchParams;c.append("name",o);const e=await fetch(`${i}/documents/doc/update?${c.toString()}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({name:a.name,title:a.title})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(t=n.detail,console.log(n),null));if(t)throw t;return e},m=async(r,o,a)=>{let t=null;const c=new URLSearchParams;c.append("name",o);const e=await fetch(`${i}/documents/doc/tags?${c.toString()}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify({name:a.name,tags:a.tags})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(t=n.detail,console.log(n),null));if(t)throw t;return e},y=async(r,o)=>{let a=null;const t=new URLSearchParams;t.append("name",o);const c=await fetch(`${i}/documents/doc/delete?${t.toString()}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`}}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).then(e=>e).catch(e=>(a=e.detail,console.log(e),null));if(a)throw a;return c};export{u as c,y as d,p as g,m as t,d as u};
//# sourceMappingURL=index.ohTn0XWy.js.map
