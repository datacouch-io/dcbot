import{a as r}from"./index.BlPo-5sI.js";const s=async(a="")=>{let e=null;const o=await fetch(`${r}/config`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?e=t.detail:e="Server connection failed",null));if(e)throw e;return o},h=async(a="",e)=>{let o=null;const t=await fetch(`${r}/config/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({enable_ollama_api:e})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),"detail"in n?o=n.detail:o="Server connection failed",null));if(o)throw o;return t},p=async(a="")=>{let e=null;const o=await fetch(`${r}/urls`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?e=t.detail:e="Server connection failed",null));if(e)throw e;return o.OLLAMA_BASE_URLS},u=async(a="",e)=>{let o=null;const t=await fetch(`${r}/urls/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({urls:e})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),"detail"in n?o=n.detail:o="Server connection failed",null));if(o)throw o;return t.OLLAMA_BASE_URLS},d=async(a,e)=>{let o=null;const t=await fetch(`${r}/api/version${e?`/${e}`:""}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),"detail"in n?o=n.detail:o="Server connection failed",null));if(o)throw o;return(t==null?void 0:t.version)??!1},f=async(a="",e)=>{let o=new AbortController,t=null;const n=await fetch(`${r}/api/chat`,{signal:o.signal,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(e)}).catch(l=>(t=l,null));if(t)throw t;return[n,o]},y=async(a,e,o,t=null)=>{let n=null;const l=await fetch(`${r}/api/create${t!==null?`/${t}`:""}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:e,modelfile:o})}).catch(i=>(n=i,null));if(n)throw n;return l},w=async(a,e,o=null)=>{let t=null;const n=await fetch(`${r}/api/delete${o!==null?`/${o}`:""}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:e})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).then(l=>(console.log(l),!0)).catch(l=>(console.log(l),t=l,"detail"in l&&(t=l.detail),null));if(t)throw t;return n},$=async(a,e,o=null)=>{let t=null;const n=new AbortController,l=await fetch(`${r}/api/pull${o!==null?`/${o}`:""}`,{signal:n.signal,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:e})}).catch(i=>(console.log(i),t=i,"detail"in i&&(t=i.detail),null));if(t)throw t;return[l,n]},j=async(a,e,o=null)=>{let t=null;const n=await fetch(`${r}/models/download${o!==null?`/${o}`:""}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({url:e})}).catch(l=>(console.log(l),t=l,"detail"in l&&(t=l.detail),null));if(t)throw t;return n},g=async(a,e,o=null)=>{let t=null;const n=new FormData;n.append("file",e);const l=await fetch(`${r}/models/upload${o!==null?`/${o}`:""}`,{method:"POST",headers:{Authorization:`Bearer ${a}`},body:n}).catch(i=>(console.log(i),t=i,"detail"in i&&(t=i.detail),null));if(t)throw t;return l};export{s as a,p as b,y as c,w as d,j as e,u as f,d as g,h,f as i,$ as p,g as u};
//# sourceMappingURL=index.BuGb5Ku-.js.map
