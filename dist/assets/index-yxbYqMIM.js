var Rt=Object.defineProperty;var Mt=(t,e,n)=>e in t?Rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Se=(t,e,n)=>(Mt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function w(){}const ct=t=>t;function pe(t,e){for(const n in e)t[n]=e[n];return t}function Nt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ut(t){return t()}function Be(){return Object.create(null)}function z(t){t.forEach(ut)}function _e(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ct(t){return Object.keys(t).length===0}function at(t,...e){if(t==null){for(const s of e)s(void 0);return w}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fe(t,e,n){t.$$.on_destroy.push(at(e,n))}function Pe(t,e,n,s){if(t){const o=ft(t,e,n,s);return t[0](o)}}function ft(t,e,n,s){return t[1]&&s?pe(n.ctx.slice(),t[1](s(e))):n.ctx}function Ie(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const r=[],l=Math.max(e.dirty.length,o.length);for(let u=0;u<l;u+=1)r[u]=e.dirty[u]|o[u];return r}return e.dirty|o}return e.dirty}function je(t,e,n,s,o,r){if(o){const l=ft(e,n,s,r);t.p(l,o)}}function He(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function De(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const pt=typeof window<"u";let dt=pt?()=>window.performance.now():()=>Date.now(),Ue=pt?t=>requestAnimationFrame(t):w;const oe=new Set;function mt(t){oe.forEach(e=>{e.c(t)||(oe.delete(e),e.f())}),oe.size!==0&&Ue(mt)}function _t(t){let e;return oe.size===0&&Ue(mt),{promise:new Promise(n=>{oe.add(e={c:t,f:n})}),abort(){oe.delete(e)}}}function _(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=y("style");return e.textContent="/* empty */",Ot(gt(t),e),e.sheet}function Ot(t,e){return _(t.head||t,e),e.sheet}function C(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function N(){return Y(" ")}function ue(){return Y("")}function j(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ht(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function J(t,e){t.value=e??""}function K(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Pt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function Fe(t,e){return new t(e)}const ye=new Map;let ke=0;function It(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return ye.set(t,n),n}function bt(t,e,n,s,o,r,l,u=0){const i=16.666/s;let c=`{
`;for(let v=0;v<=1;v+=i){const $=e+(n-e)*r(v);c+=v*100+`%{${l($,1-$)}}
`}const f=c+`100% {${l(n,1-n)}}
}`,a=`__svelte_${It(f)}_${u}`,d=gt(t),{stylesheet:m,rules:p}=ye.get(d)||jt(d,t);p[a]||(p[a]=!0,m.insertRule(`@keyframes ${a} ${f}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${a} ${s}ms linear ${o}ms 1 both`,ke+=1,a}function Ne(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),ke-=o,ke||Ht())}function Ht(){Ue(()=>{ke||(ye.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),ye.clear())})}let de;function q(t){de=t}function ge(){if(!de)throw new Error("Function called outside component initialization");return de}function yt(t){ge().$$.on_mount.push(t)}function $e(t){ge().$$.on_destroy.push(t)}function Le(t,e){return ge().$$.context.set(t,e),e}function Ce(t){return ge().$$.context.get(t)}const se=[],qe=[];let re=[];const Ye=[],Ut=Promise.resolve();let Ee=!1;function zt(){Ee||(Ee=!0,Ut.then(ze))}function ie(t){re.push(t)}const Te=new Set;let te=0;function ze(){if(te!==0)return;const t=de;do{try{for(;te<se.length;){const e=se[te];te++,q(e),Bt(e.$$)}}catch(e){throw se.length=0,te=0,e}for(q(null),se.length=0,te=0;qe.length;)qe.pop()();for(let e=0;e<re.length;e+=1){const n=re[e];Te.has(n)||(Te.add(n),n())}re.length=0}while(se.length);for(;Ye.length;)Ye.pop()();Ee=!1,Te.clear(),q(t)}function Bt(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}function Dt(t){const e=[],n=[];re.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),re=e}let ae;function kt(){return ae||(ae=Promise.resolve(),ae.then(()=>{ae=null})),ae}function ve(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const be=new Set;let W;function x(){W={r:0,c:[],p:W}}function ee(){W.r||z(W.c),W=W.p}function T(t,e){t&&t.i&&(be.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(be.has(t))return;be.add(t),W.c.push(()=>{be.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const vt={duration:0};function Ft(t,e,n){const s={direction:"in"};let o=e(t,n,s),r=!1,l,u,i=0;function c(){l&&Ne(t,l)}function f(){const{delay:d=0,duration:m=300,easing:p=ct,tick:h=w,css:v}=o||vt;v&&(l=bt(t,0,1,m,d,p,v,i++)),h(0,1);const $=dt()+d,S=$+m;u&&u.abort(),r=!0,ie(()=>ve(t,!0,"start")),u=_t(k=>{if(r){if(k>=S)return h(1,0),ve(t,!0,"end"),c(),r=!1;if(k>=$){const L=p((k-$)/m);h(L,1-L)}}return r})}let a=!1;return{start(){a||(a=!0,Ne(t),_e(o)?(o=o(s),kt().then(f)):f())},invalidate(){a=!1},end(){r&&(c(),r=!1)}}}function qt(t,e,n){const s={direction:"out"};let o=e(t,n,s),r=!0,l;const u=W;u.r+=1;let i;function c(){const{delay:f=0,duration:a=300,easing:d=ct,tick:m=w,css:p}=o||vt;p&&(l=bt(t,1,0,a,f,d,p));const h=dt()+f,v=h+a;ie(()=>ve(t,!1,"start")),"inert"in t&&(i=t.inert,t.inert=!0),_t($=>{if(r){if($>=v)return m(0,1),ve(t,!1,"end"),--u.r||z(u.c),!1;if($>=h){const S=d(($-h)/a);m(1-S,S)}}return r})}return _e(o)?kt().then(()=>{o=o(s),c()}):c(),{end(f){f&&"inert"in t&&(t.inert=i),f&&o.tick&&o.tick(1,0),r&&(l&&Ne(t,l),r=!1)}}}function Ge(t,e){const n=e.token={};function s(o,r,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const c=o&&(e.current=o)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==r&&a&&(x(),R(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),ee())}):e.block.d(1),c.c(),T(c,1),c.m(e.mount(),e.anchor),f=!0),e.block=c,e.blocks&&(e.blocks[r]=c),f&&ze()}if(Nt(t)){const o=ge();if(t.then(r=>{q(o),s(e.then,1,e.value,r),q(null)},r=>{if(q(o),s(e.catch,2,e.error,r),q(null),!e.hasCatch)throw r}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function Yt(t,e,n){const s=e.slice(),{resolved:o}=t;t.current===t.then&&(s[t.value]=o),t.current===t.catch&&(s[t.error]=o),t.block.p(s,n)}function Je(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Gt(t,e){t.d(1),e.delete(t.key)}function Jt(t,e,n,s,o,r,l,u,i,c,f,a){let d=t.length,m=r.length,p=d;const h={};for(;p--;)h[t[p].key]=p;const v=[],$=new Map,S=new Map,k=[];for(p=m;p--;){const E=a(o,r,p),P=n(E);let g=l.get(P);g?s&&k.push(()=>g.p(E,e)):(g=c(P,E),g.c()),$.set(P,v[p]=g),P in h&&S.set(P,Math.abs(p-h[P]))}const L=new Set,O=new Set;function H(E){T(E,1),E.m(u,f),l.set(E.key,E),f=E.first,m--}for(;d&&m;){const E=v[m-1],P=t[d-1],g=E.key,A=P.key;E===P?(f=E.first,d--,m--):$.has(A)?!l.has(g)||L.has(g)?H(E):O.has(A)?d--:S.get(g)>S.get(A)?(O.add(g),H(E)):(L.add(A),d--):(i(P,l),d--)}for(;d--;){const E=t[d];$.has(E.key)||i(E,l)}for(;m;)H(v[m-1]);return z(k),v}function We(t,e){const n={},s={},o={$$scope:1};let r=t.length;for(;r--;){const l=t[r],u=e[r];if(u){for(const i in l)i in u||(s[i]=1);for(const i in u)o[i]||(n[i]=u[i],o[i]=1);t[r]=u}else for(const i in l)o[i]=1}for(const l in s)l in n||(n[l]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function G(t){t&&t.c()}function B(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),ie(()=>{const r=t.$$.on_mount.map(ut).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...r):z(r),t.$$.on_mount=[]}),o.forEach(ie)}function D(t,e){const n=t.$$;n.fragment!==null&&(Dt(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(se.push(t),zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,n,s,o,r,l=null,u=[-1]){const i=de;q(t);const c=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:o,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:Be(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,d,...m)=>{const p=m.length?m[0]:d;return c.ctx&&o(c.ctx[a],c.ctx[a]=p)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](p),f&&Wt(t,a)),d}):[],c.update(),f=!0,z(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const a=At(e.target);c.fragment&&c.fragment.l(a),a.forEach(M)}else c.fragment&&c.fragment.c();e.intro&&T(t.$$.fragment),B(t,e.target,e.anchor),ze()}q(i)}class Q{constructor(){Se(this,"$$");Se(this,"$$set")}$destroy(){D(this,1),this.$destroy=w}$on(e,n){if(!_e(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kt);const Ke={},Oe={},Vt={},wt=/^:(.+)/,Ve=4,Qt=3,Xt=2,Zt=1,xt=1,Ae=t=>t.replace(/(^\/+|\/+$)/g,"").split("/"),Re=t=>t.replace(/(^\/+|\/+$)/g,""),en=(t,e)=>{const n=t.default?0:Ae(t.path).reduce((s,o)=>(s+=Ve,o===""?s+=xt:wt.test(o)?s+=Xt:o[0]==="*"?s-=Ve+Zt:s+=Qt,s),0);return{route:t,score:n,index:e}},tn=t=>t.map(en).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index),Qe=(t,e)=>{let n,s;const[o]=e.split("?"),r=Ae(o),l=r[0]==="",u=tn(t);for(let i=0,c=u.length;i<c;i++){const f=u[i].route;let a=!1;if(f.default){s={route:f,params:{},uri:e};continue}const d=Ae(f.path),m={},p=Math.max(r.length,d.length);let h=0;for(;h<p;h++){const v=d[h],$=r[h];if(v&&v[0]==="*"){const k=v==="*"?"*":v.slice(1);m[k]=r.slice(h).map(decodeURIComponent).join("/");break}if(typeof $>"u"){a=!0;break}const S=wt.exec(v);if(S&&!l){const k=decodeURIComponent($);m[S[1]]=k}else if(v!==$){a=!0;break}}if(!a){n={route:f,params:m,uri:"/"+r.slice(0,h).join("/")};break}}return n||s||null},Xe=(t,e)=>`${Re(e==="/"?t:`${Re(t)}/${Re(e)}`)}/`,$t=()=>typeof window<"u"&&"document"in window&&"location"in window,nn=t=>({params:t&4}),Ze=t=>({params:t[2]});function xe(t){let e,n,s,o;const r=[on,sn],l=[];function u(i,c){return i[0]?0:1}return e=u(t),n=l[e]=r[e](t),{c(){n.c(),s=ue()},m(i,c){l[e].m(i,c),C(i,s,c),o=!0},p(i,c){let f=e;e=u(i),e===f?l[e].p(i,c):(x(),R(l[f],1,1,()=>{l[f]=null}),ee(),n=l[e],n?n.p(i,c):(n=l[e]=r[e](i),n.c()),T(n,1),n.m(s.parentNode,s))},i(i){o||(T(n),o=!0)},o(i){R(n),o=!1},d(i){i&&M(s),l[e].d(i)}}}function sn(t){let e;const n=t[8].default,s=Pe(n,t,t[7],Ze);return{c(){s&&s.c()},m(o,r){s&&s.m(o,r),e=!0},p(o,r){s&&s.p&&(!e||r&132)&&je(s,n,o,o[7],e?Ie(n,o[7],r,nn):He(o[7]),Ze)},i(o){e||(T(s,o),e=!0)},o(o){R(s,o),e=!1},d(o){s&&s.d(o)}}}function on(t){let e,n,s,o={ctx:t,current:null,token:null,hasCatch:!1,pending:cn,then:ln,catch:rn,value:12,blocks:[,,,]};return Ge(n=t[0],o),{c(){e=ue(),o.block.c()},m(r,l){C(r,e,l),o.block.m(r,o.anchor=l),o.mount=()=>e.parentNode,o.anchor=e,s=!0},p(r,l){t=r,o.ctx=t,l&1&&n!==(n=t[0])&&Ge(n,o)||Yt(o,t,l)},i(r){s||(T(o.block),s=!0)},o(r){for(let l=0;l<3;l+=1){const u=o.blocks[l];R(u)}s=!1},d(r){r&&M(e),o.block.d(r),o.token=null,o=null}}}function rn(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function ln(t){var u;let e,n,s;const o=[t[2],t[3]];var r=((u=t[12])==null?void 0:u.default)||t[12];function l(i,c){let f={};for(let a=0;a<o.length;a+=1)f=pe(f,o[a]);return c!==void 0&&c&12&&(f=pe(f,We(o,[c&4&&he(i[2]),c&8&&he(i[3])]))),{props:f}}return r&&(e=Fe(r,l(t))),{c(){e&&G(e.$$.fragment),n=ue()},m(i,c){e&&B(e,i,c),C(i,n,c),s=!0},p(i,c){var f;if(c&1&&r!==(r=((f=i[12])==null?void 0:f.default)||i[12])){if(e){x();const a=e;R(a.$$.fragment,1,0,()=>{D(a,1)}),ee()}r?(e=Fe(r,l(i,c)),G(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else if(r){const a=c&12?We(o,[c&4&&he(i[2]),c&8&&he(i[3])]):{};e.$set(a)}},i(i){s||(e&&T(e.$$.fragment,i),s=!0)},o(i){e&&R(e.$$.fragment,i),s=!1},d(i){i&&M(n),e&&D(e,i)}}}function cn(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function un(t){let e,n,s=t[1]&&t[1].route===t[5]&&xe(t);return{c(){s&&s.c(),e=ue()},m(o,r){s&&s.m(o,r),C(o,e,r),n=!0},p(o,[r]){o[1]&&o[1].route===o[5]?s?(s.p(o,r),r&2&&T(s,1)):(s=xe(o),s.c(),T(s,1),s.m(e.parentNode,e)):s&&(x(),R(s,1,1,()=>{s=null}),ee())},i(o){n||(T(s),n=!0)},o(o){R(s),n=!1},d(o){o&&M(e),s&&s.d(o)}}}function an(t,e,n){let s,{$$slots:o={},$$scope:r}=e,{path:l=""}=e,{component:u=null}=e,i={},c={};const{registerRoute:f,unregisterRoute:a,activeRoute:d}=Ce(Oe);fe(t,d,p=>n(1,s=p));const m={path:l,default:l===""};return f(m),$e(()=>{a(m)}),t.$$set=p=>{n(11,e=pe(pe({},e),De(p))),"path"in p&&n(6,l=p.path),"component"in p&&n(0,u=p.component),"$$scope"in p&&n(7,r=p.$$scope)},t.$$.update=()=>{if(s&&s.route===m){n(2,i=s.params);const{component:p,path:h,...v}=e;n(3,c=v),p&&(p.toString().startsWith("class ")?n(0,u=p):n(0,u=p())),$t()&&!s.preserveScroll&&(window==null||window.scrollTo(0,0))}},e=De(e),[u,s,i,c,d,m,l,r,o]}class we extends Q{constructor(e){super(),V(this,e,an,un,F,{path:6,component:0})}}const ne=[];function fn(t,e){return{subscribe:X(t,e).subscribe}}function X(t,e=w){let n;const s=new Set;function o(u){if(F(t,u)&&(t=u,n)){const i=!ne.length;for(const c of s)c[1](),ne.push(c,t);if(i){for(let c=0;c<ne.length;c+=2)ne[c][0](ne[c+1]);ne.length=0}}}function r(u){o(u(t))}function l(u,i=w){const c=[u,i];return s.add(c),s.size===1&&(n=e(o,r)||w),u(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:l}}function pn(t,e,n){const s=!Array.isArray(t),o=s?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return fn(n,(l,u)=>{let i=!1;const c=[];let f=0,a=w;const d=()=>{if(f)return;a();const p=e(s?c[0]:c,l,u);r?l(p):a=_e(p)?p:w},m=o.map((p,h)=>at(p,v=>{c[h]=v,f&=~(1<<h),i&&d()},()=>{f|=1<<h}));return i=!0,d(),function(){z(m),a(),i=!1}})}const Me=t=>({...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}),dn=t=>{const e=[];let n=Me(t);return{get location(){return n},listen(s){e.push(s);const o=()=>{n=Me(t),s({location:n,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=e.indexOf(s);e.splice(r,1)}},navigate(s,{state:o,replace:r=!1,preserveScroll:l=!1,blurActiveElement:u=!0}={}){o={...o,key:Date.now()+""};try{r?t.history.replaceState(o,"",s):t.history.pushState(o,"",s)}catch{t.location[r?"replace":"assign"](s)}n=Me(t),e.forEach(i=>i({location:n,action:"PUSH",preserveScroll:l})),u&&document.activeElement.blur()}}},mn=(t="/")=>{let e=0;const n=[{pathname:t,search:""}],s=[];return{get location(){return n[e]},addEventListener(o,r){},removeEventListener(o,r){},history:{get entries(){return n},get index(){return e},get state(){return s[e]},pushState(o,r,l){const[u,i=""]=l.split("?");e++,n.push({pathname:u,search:i}),s.push(o)},replaceState(o,r,l){const[u,i=""]=l.split("?");n[e]={pathname:u,search:i},s[e]=o}}}},St=dn($t()?window:mn()),{navigate:Z}=St,_n=t=>({route:t&4,location:t&2}),et=t=>({route:t[2]&&t[2].uri,location:t[1]}),gn=t=>({route:t&4,location:t&2}),tt=t=>({route:t[2]&&t[2].uri,location:t[1]});function hn(t){let e;const n=t[15].default,s=Pe(n,t,t[14],et);return{c(){s&&s.c()},m(o,r){s&&s.m(o,r),e=!0},p(o,r){s&&s.p&&(!e||r&16390)&&je(s,n,o,o[14],e?Ie(n,o[14],r,_n):He(o[14]),et)},i(o){e||(T(s,o),e=!0)},o(o){R(s,o),e=!1},d(o){s&&s.d(o)}}}function bn(t){let e=t[1].pathname,n,s,o=nt(t);return{c(){o.c(),n=ue()},m(r,l){o.m(r,l),C(r,n,l),s=!0},p(r,l){l&2&&F(e,e=r[1].pathname)?(x(),R(o,1,1,w),ee(),o=nt(r),o.c(),T(o,1),o.m(n.parentNode,n)):o.p(r,l)},i(r){s||(T(o),s=!0)},o(r){R(o),s=!1},d(r){r&&M(n),o.d(r)}}}function nt(t){let e,n,s,o;const r=t[15].default,l=Pe(r,t,t[14],tt);return{c(){e=y("div"),l&&l.c()},m(u,i){C(u,e,i),l&&l.m(e,null),o=!0},p(u,i){l&&l.p&&(!o||i&16390)&&je(l,r,u,u[14],o?Ie(r,u[14],i,gn):He(u[14]),tt)},i(u){o||(T(l,u),u&&ie(()=>{o&&(s&&s.end(1),n=Ft(e,t[3],{}),n.start())}),o=!0)},o(u){R(l,u),n&&n.invalidate(),u&&(s=qt(e,t[3],{})),o=!1},d(u){u&&M(e),l&&l.d(u),u&&s&&s.end()}}}function yn(t){let e,n,s,o;const r=[bn,hn],l=[];function u(i,c){return i[0]?0:1}return e=u(t),n=l[e]=r[e](t),{c(){n.c(),s=ue()},m(i,c){l[e].m(i,c),C(i,s,c),o=!0},p(i,[c]){let f=e;e=u(i),e===f?l[e].p(i,c):(x(),R(l[f],1,1,()=>{l[f]=null}),ee(),n=l[e],n?n.p(i,c):(n=l[e]=r[e](i),n.c()),T(n,1),n.m(s.parentNode,s))},i(i){o||(T(n),o=!0)},o(i){R(n),o=!1},d(i){i&&M(s),l[e].d(i)}}}function kn(t,e,n){let s,o,r,l,{$$slots:u={},$$scope:i}=e,{basepath:c="/"}=e,{url:f=null}=e,{viewtransition:a=null}=e,{history:d=St}=e;const m=(g,A,U)=>{const I=a(U);return typeof(I==null?void 0:I.fn)=="function"?I.fn(g,I):I};Le(Vt,d);const p=Ce(Ke),h=Ce(Oe),v=X([]);fe(t,v,g=>n(12,o=g));const $=X(null);fe(t,$,g=>n(2,l=g));let S=!1;const k=p||X(f?{pathname:f}:d.location);fe(t,k,g=>n(1,s=g));const L=h?h.routerBase:X({path:c,uri:c});fe(t,L,g=>n(13,r=g));const O=pn([L,$],([g,A])=>{if(!A)return g;const{path:U}=g,{route:I,uri:Tt}=A;return{path:I.default?U:I.path.replace(/\*.*$/,""),uri:Tt}}),H=g=>{const{path:A}=r;let{path:U}=g;if(g._path=U,g.path=Xe(A,U),typeof window>"u"){if(S)return;const I=Qe([g],s.pathname);I&&($.set(I),S=!0)}else v.update(I=>[...I,g])},E=g=>{v.update(A=>A.filter(U=>U!==g))};let P=!1;return p||(yt(()=>d.listen(A=>{n(11,P=A.preserveScroll||!1),k.set(A.location)})),Le(Ke,k)),Le(Oe,{activeRoute:$,base:L,routerBase:O,registerRoute:H,unregisterRoute:E}),t.$$set=g=>{"basepath"in g&&n(8,c=g.basepath),"url"in g&&n(9,f=g.url),"viewtransition"in g&&n(0,a=g.viewtransition),"history"in g&&n(10,d=g.history),"$$scope"in g&&n(14,i=g.$$scope)},t.$$.update=()=>{if(t.$$.dirty&8192){const{path:g}=r;v.update(A=>A.map(U=>Object.assign(U,{path:Xe(g,U._path)})))}if(t.$$.dirty&6146){const g=Qe(o,s.pathname);$.set(g&&{...g,preserveScroll:P})}},[a,s,l,m,v,$,k,L,c,f,d,P,o,r,i,u]}class vn extends Q{constructor(e){super(),V(this,e,kn,yn,F,{basepath:8,url:9,viewtransition:0,history:10})}}const ce=X(!1),me=X("");function wn(t){let e,n,s,o,r,l,u,i;return{c(){e=y("ul"),n=y("li"),s=y("a"),s.textContent="Login",o=N(),r=y("li"),l=y("a"),l.textContent="Register",b(s,"class","svelte-1epigty"),b(n,"class","svelte-1epigty"),b(l,"class","svelte-1epigty"),b(r,"class","svelte-1epigty"),K(e,"padding-right","20px"),b(e,"class","svelte-1epigty")},m(c,f){C(c,e,f),_(e,n),_(n,s),_(e,o),_(e,r),_(r,l),u||(i=[j(s,"click",t[3]),j(l,"click",t[4])],u=!0)},p:w,d(c){c&&M(e),u=!1,z(i)}}}function $n(t){let e,n,s,o,r;return{c(){e=y("ul"),n=y("li"),s=y("a"),s.textContent="Logout",b(s,"class","logout-link svelte-1epigty"),b(n,"class","svelte-1epigty"),b(e,"class","svelte-1epigty")},m(l,u){C(l,e,u),_(e,n),_(n,s),o||(r=j(s,"click",t[1]),o=!0)},p:w,d(l){l&&M(e),o=!1,r()}}}function Sn(t){let e,n,s,o,r,l,u;function i(a,d){return a[0]?$n:wn}let c=i(t),f=c(t);return{c(){e=y("nav"),n=y("ul"),s=y("li"),o=y("a"),o.textContent="Home",r=N(),f.c(),b(o,"class","svelte-1epigty"),b(s,"class","svelte-1epigty"),b(n,"class","svelte-1epigty"),b(e,"class","svelte-1epigty")},m(a,d){C(a,e,d),_(e,n),_(n,s),_(s,o),_(e,r),f.m(e,null),l||(u=j(o,"click",t[2]),l=!0)},p(a,[d]){c===(c=i(a))&&f?f.p(a,d):(f.d(1),f=c(a),f&&(f.c(),f.m(e,null)))},i:w,o:w,d(a){a&&M(e),f.d(),l=!1,u()}}}function Ln(t,e,n){let s=!1,o="";const r=ce.subscribe(a=>{n(0,s=a),console.log("Top Nav Bar Auth "+s)}),l=me.subscribe(a=>{o=a,console.log("Top Nav Bar Token "+o)});function u(){console.log("Logging out..."),sessionStorage.removeItem("username"),ce.set(!1),me.set(""),Z("/login")}return $e(()=>{r(),l()}),[s,u,()=>Z("/"),()=>Z("/login"),()=>Z("/register")]}class Tn extends Q{constructor(e){super(),V(this,e,Ln,Sn,F,{})}}function Rn(t){let e;return{c(){e=y("nav"),e.innerHTML='<ul class="svelte-1vnnzyn"><li class="svelte-1vnnzyn">@copyright 2024</li></ul>',b(e,"class","svelte-1vnnzyn")},m(n,s){C(n,e,s)},p:w,i:w,o:w,d(n){n&&M(e)}}}function Mn(t){let e=!1,n="";const s=ce.subscribe(r=>{e=r,console.log("Top Nav Bar Auth "+e)}),o=me.subscribe(r=>{n=r,console.log("Top Nav Bar Token "+n)});return $e(()=>{s(),o()}),[]}class Nn extends Q{constructor(e){super(),V(this,e,Mn,Rn,F,{})}}function st(t,e,n){const s=t.slice();return s[8]=e[n],s}function ot(t,e){let n,s=e[8].username+"",o,r,l=e[8].password+"",u;return{key:t,first:null,c(){n=y("li"),o=Y(s),r=Y(" - "),u=Y(l),this.first=n},m(i,c){C(i,n,c),_(n,o),_(n,r),_(n,u)},p(i,c){e=i,c&1&&s!==(s=e[8].username+"")&&le(o,s),c&1&&l!==(l=e[8].password+"")&&le(u,l)},d(i){i&&M(n)}}}function Cn(t){let e,n,s,o,r,l,u,i,c=[],f=new Map,a=Je(t[0]);const d=m=>m[8].username;for(let m=0;m<a.length;m+=1){let p=st(t,a,m),h=d(p);f.set(h,c[m]=ot(h,p))}return{c(){e=y("main"),n=y("div"),s=y("h1"),o=Y(t[1]),r=N(),l=y("h3"),l.textContent="List of Registered Users",u=N(),i=y("ul");for(let m=0;m<c.length;m+=1)c[m].c();K(s,"color","#616981"),b(n,"class","welcome-container svelte-12k9e0y"),b(e,"class","svelte-12k9e0y")},m(m,p){C(m,e,p),_(e,n),_(n,s),_(s,o),_(n,r),_(n,l),_(n,u),_(n,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null)},p(m,[p]){p&2&&le(o,m[1]),p&1&&(a=Je(m[0]),c=Jt(c,p,d,1,m,a,f,i,Gt,ot,null,st))},i:w,o:w,d(m){m&&M(e);for(let p=0;p<c.length;p+=1)c[p].d()}}}function En(t,e,n){let s,o=!1,r="",l=[];const u=ce.subscribe(f=>{o=f,console.log("Home Auth "+o)}),i=me.subscribe(f=>{r=f,console.log("Home Token "+r)});sessionStorage.username?s=sessionStorage.username:(sessionStorage.setItem("errMsg","You are not authorized. Please Login"),Z("/login"));let c="";return c="Welcome, "+s+"!,",yt(async()=>{try{const a=await(await fetch("http://localhost:5000/api/registered-users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();a.success?n(0,l=a.users):console.error(a.message)}catch(f){console.error("An error occurred: "+f)}}),$e(()=>{u(),i()}),[l,c]}class On extends Q{constructor(e){super(),V(this,e,En,Cn,F,{})}}function rt(t){let e,n;return{c(){e=y("p"),n=Y(t[3]),b(e,"class","reg-message svelte-1t5val")},m(s,o){C(s,e,o),_(e,n)},p(s,o){o&8&&le(n,s[3])},d(s){s&&M(e)}}}function lt(t){let e,n;return{c(){e=y("p"),n=Y(t[2]),b(e,"class","error-message svelte-1t5val")},m(s,o){C(s,e,o),_(e,n)},p(s,o){o&4&&le(n,s[2])},d(s){s&&M(e)}}}function An(t){let e,n,s,o,r,l,u,i,c,f,a,d,m,p,h,v,$,S,k=t[3]!=""&&rt(t),L=t[2]!=""&&lt(t);return{c(){e=y("main"),n=y("div"),s=y("div"),s.innerHTML='<img src="./assets/images/login-user.png" alt="Login" style="width: 50px; height: 50px; margin-top: 36px; padding-right:20px"/> <h1 style="color: #616981;">Login</h1>',o=N(),k&&k.c(),r=N(),L&&L.c(),l=N(),u=y("form"),i=y("label"),i.textContent="Username :",c=N(),f=y("input"),a=N(),d=y("label"),d.textContent="Password :",m=N(),p=y("input"),h=N(),v=y("button"),v.textContent="Login",K(s,"display","inline-flex"),K(i,"color","#616981"),b(i,"for","username"),b(i,"class","svelte-1t5val"),b(f,"type","text"),b(f,"id","username"),b(f,"class","svelte-1t5val"),K(d,"color","#616981"),b(d,"for","password"),b(d,"class","svelte-1t5val"),b(p,"type","password"),b(p,"id","password"),b(p,"class","svelte-1t5val"),b(v,"type","submit"),b(v,"class","svelte-1t5val"),b(n,"class","login-container svelte-1t5val")},m(O,H){C(O,e,H),_(e,n),_(n,s),_(n,o),k&&k.m(n,null),_(n,r),L&&L.m(n,null),_(n,l),_(n,u),_(u,i),_(u,c),_(u,f),J(f,t[0]),_(u,a),_(u,d),_(u,m),_(u,p),J(p,t[1]),_(u,h),_(u,v),$||(S=[j(f,"input",t[6]),j(f,"input",t[5]),j(p,"input",t[7]),j(p,"input",t[5]),j(u,"submit",ht(t[4]))],$=!0)},p(O,[H]){O[3]!=""?k?k.p(O,H):(k=rt(O),k.c(),k.m(n,r)):k&&(k.d(1),k=null),O[2]!=""?L?L.p(O,H):(L=lt(O),L.c(),L.m(n,l)):L&&(L.d(1),L=null),H&1&&f.value!==O[0]&&J(f,O[0]),H&2&&p.value!==O[1]&&J(p,O[1])},i:w,o:w,d(O){O&&M(e),k&&k.d(),L&&L.d(),$=!1,z(S)}}}function Pn(t,e,n){let s="",o="",r="",l="";sessionStorage.regMsg&&(l=sessionStorage.regMsg,sessionStorage.removeItem("regMsg")),sessionStorage.errMsg&&(r=sessionStorage.errMsg,sessionStorage.removeItem("errMsg"));const u=async()=>{if(s.trim()===""||o.trim()==="")n(2,r="Username and password cannot be empty.");else{console.log("Logging in ...",{username:s,password:o});try{const d=await(await fetch("http://localhost:5000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:o})})).json();d.success?(console.log(d.message),console.log("username: ",s),ce.set(!0),me.set(d.token),sessionStorage.setItem("username",s),Z("/")):(n(2,r=d.message),console.error(d.message))}catch(a){n(2,r="An error occurred: "+a),console.error("An error occurred: ",a)}}};function i(){n(2,r="")}function c(){s=this.value,n(0,s)}function f(){o=this.value,n(1,o)}return[s,o,r,l,u,i,c,f]}class Lt extends Q{constructor(e){super(),V(this,e,Pn,An,F,{})}}function it(t){let e,n;return{c(){e=y("p"),n=Y(t[2]),b(e,"class","error-message svelte-3gvgdf")},m(s,o){C(s,e,o),_(e,n)},p(s,o){o&4&&le(n,s[2])},d(s){s&&M(e)}}}function In(t){let e,n,s,o,r,l,u,i,c,f,a,d,m,p,h,v,$,S=t[2]!=""&&it(t);return{c(){e=y("main"),n=y("div"),s=y("div"),s.innerHTML='<img src="./assets/images/register-user.png" alt="Register" style="width: 50px; height: 50px; margin-top: 36px; padding-right:20px"/> <h1 style="color: #616981;">Register</h1>',o=N(),S&&S.c(),r=N(),l=y("form"),u=y("label"),u.textContent="Username :",i=N(),c=y("input"),f=N(),a=y("label"),a.textContent="Password :",d=N(),m=y("input"),p=N(),h=y("button"),h.textContent="Register",K(s,"display","inline-flex"),K(u,"color","#616981"),b(u,"for","username"),b(u,"class","svelte-3gvgdf"),K(c,"color","#616981"),b(c,"type","text"),b(c,"id","username"),b(c,"class","svelte-3gvgdf"),b(a,"for","password"),b(a,"class","svelte-3gvgdf"),b(m,"type","password"),b(m,"id","password"),b(m,"class","svelte-3gvgdf"),b(h,"type","submit"),b(h,"class","svelte-3gvgdf"),b(n,"class","login-container svelte-3gvgdf")},m(k,L){C(k,e,L),_(e,n),_(n,s),_(n,o),S&&S.m(n,null),_(n,r),_(n,l),_(l,u),_(l,i),_(l,c),J(c,t[0]),_(l,f),_(l,a),_(l,d),_(l,m),J(m,t[1]),_(l,p),_(l,h),v||($=[j(c,"input",t[5]),j(c,"input",t[4]),j(m,"input",t[6]),j(m,"input",t[4]),j(l,"submit",ht(t[3]))],v=!0)},p(k,[L]){k[2]!=""?S?S.p(k,L):(S=it(k),S.c(),S.m(n,r)):S&&(S.d(1),S=null),L&1&&c.value!==k[0]&&J(c,k[0]),L&2&&m.value!==k[1]&&J(m,k[1])},i:w,o:w,d(k){k&&M(e),S&&S.d(),v=!1,z($)}}}function jn(t,e,n){let s="",o="",r="";const l=async()=>{if(s.trim()===""||o.trim()==="")n(2,r="Username and password cannot be empty.");else{console.log("Registering ...",{username:s,password:o});try{const f=await fetch("http://localhost:5000/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:o})});console.log("1");const a=await f.json();console.log("2"),a.success?(console.log(a.message),console.log("username: ",s),sessionStorage.regMsg="Registration successful. Please Login.",Z("/login")):(n(2,r=a.message),console.error(a.message))}catch(f){n(2,r="An error occurred: "+f),console.error("An error occurred: ",f)}}};function u(){n(2,r="")}function i(){s=this.value,n(0,s)}function c(){o=this.value,n(1,o)}return[s,o,r,l,u,i,c]}class Hn extends Q{constructor(e){super(),V(this,e,jn,In,F,{})}}function Un(t){let e,n;return e=new we({props:{path:"/",component:Lt}}),{c(){G(e.$$.fragment)},m(s,o){B(e,s,o),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){D(e,s)}}}function zn(t){let e,n;return e=new we({props:{path:"/",component:On}}),{c(){G(e.$$.fragment)},m(s,o){B(e,s,o),n=!0},i(s){n||(T(e.$$.fragment,s),n=!0)},o(s){R(e.$$.fragment,s),n=!1},d(s){D(e,s)}}}function Bn(t){let e,n,s,o,r,l,u;const i=[zn,Un],c=[];function f(a,d){return a[0]?0:1}return e=f(t),n=c[e]=i[e](t),o=new we({props:{path:"/login",component:Lt}}),l=new we({props:{path:"/register",component:Hn}}),{c(){n.c(),s=N(),G(o.$$.fragment),r=N(),G(l.$$.fragment)},m(a,d){c[e].m(a,d),C(a,s,d),B(o,a,d),C(a,r,d),B(l,a,d),u=!0},p(a,d){let m=e;e=f(a),e!==m&&(x(),R(c[m],1,1,()=>{c[m]=null}),ee(),n=c[e],n||(n=c[e]=i[e](a),n.c()),T(n,1),n.m(s.parentNode,s))},i(a){u||(T(n),T(o.$$.fragment,a),T(l.$$.fragment,a),u=!0)},o(a){R(n),R(o.$$.fragment,a),R(l.$$.fragment,a),u=!1},d(a){a&&(M(s),M(r)),c[e].d(a),D(o,a),D(l,a)}}}function Dn(t){let e,n,s,o,r,l,u;return n=new Tn({}),o=new vn({props:{$$slots:{default:[Bn]},$$scope:{ctx:t}}}),l=new Nn({}),{c(){e=y("main"),G(n.$$.fragment),s=N(),G(o.$$.fragment),r=N(),G(l.$$.fragment)},m(i,c){C(i,e,c),B(n,e,null),_(e,s),B(o,e,null),_(e,r),B(l,e,null),u=!0},p(i,[c]){const f={};c&5&&(f.$$scope={dirty:c,ctx:i}),o.$set(f)},i(i){u||(T(n.$$.fragment,i),T(o.$$.fragment,i),T(l.$$.fragment,i),u=!0)},o(i){R(n.$$.fragment,i),R(o.$$.fragment,i),R(l.$$.fragment,i),u=!1},d(i){i&&M(e),D(n),D(o),D(l)}}}function Fn(t,e,n){let s=!1;return ce.subscribe(o=>{n(0,s=o),console.log("Home Auth "+s)}),[s]}class qn extends Q{constructor(e){super(),V(this,e,Fn,Dn,F,{})}}new qn({target:document.getElementById("app")});