var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l;function c(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}const s="undefined"!=typeof window;let u=s?()=>window.performance.now():()=>Date.now(),d=s?e=>requestAnimationFrame(e):e;const f=new Set;function m(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(m)}function p(e,t){e.appendChild(t)}function g(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function h(e){const t=$("style");return function(e,t){p(e.head||e,t)}(g(e),t),t}function y(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function x(){return v("")}function k(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function E(e,t,n){e.classList[n?"add":"remove"](t)}const S=new Set;let D,T=0;function R(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-o.length;r&&(e.style.animation=o.join(", "),T-=r,T||d((()=>{T||(S.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),S.clear())})))}function A(e){D=e}function z(e){(function(){if(!D)throw new Error("Function called outside component initialization");return D})().$$.on_mount.push(e)}const M=[],N=[],L=[],I=[],P=Promise.resolve();let U=!1;function V(e){L.push(e)}let j=!1;const O=new Set;function q(){if(!j){j=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];A(t),F(t.$$)}for(A(null),M.length=0;N.length;)N.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];O.has(t)||(O.add(t),t())}L.length=0}while(M.length);for(;I.length;)I.pop()();U=!1,j=!1,O.clear()}}function F(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}let G;function H(e,t,n){e.dispatchEvent(function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(`${t?"intro":"outro"}${n}`))}const B=new Set;let X;function J(e,t){e&&e.i&&(B.delete(e),e.i(t))}function K(e,t,n,o){if(e&&e.o){if(B.has(e))return;B.add(e),X.c.push((()=>{B.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const Q={duration:0};function W(n,o,r){let a,l,c=o(n,r),s=!1,p=0;function y(){a&&R(n,a)}function b(){const{delay:o=0,duration:r=300,easing:i=t,tick:b=e,css:$}=c||Q;$&&(a=function(e,t,n,o,r,i,a,l=0){const c=16.666/o;let s="{\n";for(let e=0;e<=1;e+=c){const o=t+(n-t)*i(e);s+=100*e+`%{${a(o,1-o)}}\n`}const u=s+`100% {${a(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${l}`,f=g(e);S.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=h(e).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${d} ${o}ms linear ${r}ms 1 both`,T+=1,d}(n,0,1,r,o,i,$,p++)),b(0,1);const v=u()+o,w=v+r;l&&l.abort(),s=!0,V((()=>H(n,!0,"start"))),l=function(e){let t;return 0===f.size&&d(m),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}((e=>{if(s){if(e>=w)return b(1,0),H(n,!0,"end"),y(),s=!1;if(e>=v){const t=i((e-v)/r);b(t,1-t)}}return s}))}let $=!1;return{start(){$||($=!0,R(n),i(c)?(c=c(),(G||(G=Promise.resolve(),G.then((()=>{G=null}))),G).then(b)):b())},invalidate(){$=!1},end(){s&&(y(),s=!1)}}}const Y="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Z(e,t){e.d(1),t.delete(e.key)}function ee(e){e&&e.c()}function te(e,t,o,a){const{fragment:l,on_mount:c,on_destroy:s,after_update:u}=e.$$;l&&l.m(t,o),a||V((()=>{const t=c.map(n).filter(i);s?s.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(V)}function ne(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(M.push(e),U||(U=!0,P.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(t,n,i,a,l,c,s,u=[-1]){const d=D;A(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};s&&s(f.root);let m=!1;if(f.ctx=i?i(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&oe(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&J(t.$$.fragment),te(t,n.target,n.anchor,n.customElement),q()}A(d)}class ie{$destroy(){ne(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ae={fpsLimit:60,particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ff0000",animation:{enable:!0,speed:10,sync:!0}},shape:{type:["circle","square"]},opacity:{value:.3},size:{value:20,random:{enable:!0,minimumValue:10}},rotate:{value:0,direction:"clockwise",animation:{speed:5,enable:!0}},move:{enable:!0,speed:3,direction:"none",out_mode:"out"}},detectRetina:!0,background:{color:"#17163e"}},le={fpsLimit:60,backgroundMode:{enable:!0},particles:{color:{value:["#000","#555","#888"]},links:{color:"#AAA",enable:!0},move:{enable:!0,speed:1},size:{value:5,random:{enable:!0,minimumValue:2},animation:{enable:!0,speed:4,minimumValue:1}},opacity:{value:.8,random:{enable:!0,minimumValue:.4}}}},ce={detectRetina:!0,background:{color:"#000"},fpsLimit:60,emitters:{direction:"top",life:{count:0,duration:.1,delay:.1},rate:{delay:.5,quantity:1},size:{width:100,height:0},position:{y:100,x:50}},particles:{number:{value:0},destroy:{mode:"split",split:{count:1,factor:{value:1/3},rate:{value:100},particles:{stroke:{color:{value:["#5bc0eb","#fde74c","#9bc53d","#e55934","#fa7921"]},width:1},number:{value:0},collisions:{enable:!1},opacity:{value:1,animation:{enable:!0,speed:.6,minimumValue:.1,sync:!1,startValue:"max",destroy:"min"}},shape:{type:"circle"},size:{value:1,animation:{enable:!1}},life:{count:1,duration:{value:{min:1,max:2}}},move:{enable:!0,gravity:{enable:!1},speed:2,direction:"none",random:!0,straight:!1,outMode:"destroy"}}}},life:{count:1},shape:{type:"line"},size:{value:{min:.1,max:50},animation:{enable:!0,sync:!0,speed:150,startValue:"max",destroy:"min"}},stroke:{color:{value:"#ffffff"},width:1},rotate:{path:!0},move:{enable:!0,gravity:{acceleration:15,enable:!0,inverse:!0,maxSpeed:100},speed:{min:10,max:20},outModes:{default:"destroy",top:"none"},trail:{fillColor:"#000",enable:!0,length:10}}}};function se(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function ue(e){const t=e-1;return t*t*t+1}function de(e,{delay:t=0,duration:n=400,easing:o=se,amount:r=5,opacity:i=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.filter?"":a.filter,s=l*(1-i);return{delay:t,duration:n,easing:o,css:(e,t)=>`opacity: ${l-s*t}; filter: ${c} blur(${t*r}px);`}}function fe(e,{delay:t=0,duration:n=400,easing:o=ue,start:r=0,opacity:i=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,s=1-r,u=l*(1-i);return{delay:t,duration:n,easing:o,css:(e,t)=>`\n\t\t\ttransform: ${c} scale(${1-s*t});\n\t\t\topacity: ${l-u*t}\n\t\t`}}const me=[];const pe=function(t,n=e){let o;const r=new Set;function i(e){if(a(t,e)&&(t=e,o)){const e=!me.length;for(const e of r)e[1](),me.push(e,t);if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(a,l=e){const c=[a,l];return r.add(c),1===r.size&&(o=n(i)||e),a(t),()=>{r.delete(c),0===r.size&&(o(),o=null)}}}}(!1),{Map:ge}=Y;function he(e,t,n){const o=e.slice();return o[10]=t[n],o[12]=n,o}function ye(t){let n,o,r,i,a,l=[],c=new ge,s=t[1];const u=e=>e[10];for(let e=0;e<s.length;e+=1){let n=he(t,s,e),o=u(n);c.set(o,l[e]=be(o,n))}return{c(){n=$("h1"),o=v(t[0]),i=w();for(let e=0;e<l.length;e+=1)l[e].c();a=x()},m(e,t){y(e,n,t),p(n,o),y(e,i,t);for(let n=0;n<l.length;n+=1)l[n].m(e,t);y(e,a,t)},p(e,t){1&t&&C(o,e[0]),2&t&&(s=e[1],l=function(e,t,n,o,r,i,a,l,c,s,u,d){let f=e.length,m=i.length,p=f;const g={};for(;p--;)g[e[p].key]=p;const h=[],y=new Map,b=new Map;for(p=m;p--;){const e=d(r,i,p),l=n(e);let c=a.get(l);c?o&&c.p(e,t):(c=s(l,e),c.c()),y.set(l,h[p]=c),l in g&&b.set(l,Math.abs(p-g[l]))}const $=new Set,v=new Set;function w(e){J(e,1),e.m(l,u),a.set(e.key,e),u=e.first,m--}for(;f&&m;){const t=h[m-1],n=e[f-1],o=t.key,r=n.key;t===n?(u=t.first,f--,m--):y.has(r)?!a.has(o)||$.has(o)?w(t):v.has(r)?f--:b.get(o)>b.get(r)?(v.add(o),w(t)):($.add(r),f--):(c(n,a),f--)}for(;f--;){const t=e[f];y.has(t.key)||c(t,a)}for(;m;)w(h[m-1]);return h}(l,t,u,1,e,s,c,a.parentNode,Z,be,a,he))},i(e){r||V((()=>{r=W(n,de,{}),r.start()}));for(let e=0;e<s.length;e+=1)J(l[e])},o:e,d(e){e&&b(n),e&&b(i);for(let t=0;t<l.length;t+=1)l[t].d(e);e&&b(a)}}}function be(t,n){let o,r,i,a=n[10]+"";return{key:t,first:null,c(){o=$("h4"),r=v(a),this.first=o},m(e,t){y(e,o,t),p(o,r)},p(e,t){n=e,2&t&&a!==(a=n[10]+"")&&C(r,a)},i(e){i||V((()=>{i=W(o,de,{delay:200*(n[12]+1)}),i.start()}))},o:e,d(e){e&&b(o)}}}function $e(e){let t,n,o,r,i,a,l,c,s,u,d;return{c(){t=$("h3"),n=v("Email: "),o=v(e[2]),r=w(),i=$("h3"),a=v("LinkedIn: "),l=v(e[3]),c=w(),s=$("h3"),u=v("GitHub: "),d=v(e[4])},m(e,f){y(e,t,f),p(t,n),p(t,o),y(e,r,f),y(e,i,f),p(i,a),p(i,l),y(e,c,f),y(e,s,f),p(s,u),p(s,d)},p(e,t){4&t&&C(o,e[2]),8&t&&C(l,e[3]),16&t&&C(d,e[4])},d(e){e&&b(t),e&&b(r),e&&b(i),e&&b(c),e&&b(s)}}}function ve(t){let n,o,r,i=t[5]&&ye(t),a=t[6]&&$e(t);return{c(){n=$("div"),o=$("div"),i&&i.c(),r=w(),a&&a.c(),_(o,"class","header-text"),_(n,"class","header")},m(e,t){y(e,n,t),p(n,o),i&&i.m(o,null),p(o,r),a&&a.m(o,null)},p(e,[t]){e[5]?i?(i.p(e,t),32&t&&J(i,1)):(i=ye(e),i.c(),J(i,1),i.m(o,r)):i&&(i.d(1),i=null),e[6]?a?a.p(e,t):(a=$e(e),a.c(),a.m(o,null)):a&&(a.d(1),a=null)},i(e){J(i)},o:e,d(e){e&&b(n),i&&i.d(),a&&a.d()}}}function we(e,t,n){let o=!1;z((()=>n(5,o=!0)));let r,{name:i,titles:a,email:l,linkedin:c,github:s}=t;return pe.subscribe((e=>n(6,r=e))),e.$$set=e=>{"name"in e&&n(0,i=e.name),"titles"in e&&n(1,a=e.titles),"email"in e&&n(2,l=e.email),"linkedin"in e&&n(3,c=e.linkedin),"github"in e&&n(4,s=e.github)},[i,a,l,c,s,o,r]}class xe extends ie{constructor(e){super(),re(this,e,we,ve,a,{name:0,titles:1,email:2,linkedin:3,github:4})}}function ke(e){let t,n,o,r;return{c(){t=$("a"),n=$("img"),_(n,"class","footer-img bright"),_(n,"alt",o=e[2]?e[2]:""),c(n.src,r=e[1])||_(n,"src",r),_(t,"rel","noopener noreferrer"),_(t,"target","_blank"),_(t,"href",e[0])},m(e,o){y(e,t,o),p(t,n)},p(e,i){4&i&&o!==(o=e[2]?e[2]:"")&&_(n,"alt",o),2&i&&!c(n.src,r=e[1])&&_(n,"src",r),1&i&&_(t,"href",e[0])},d(e){e&&b(t)}}}function _e(t){let n,o=t[0]&&t[1]&&ke(t);return{c(){n=$("h4"),o&&o.c(),_(n,"class","footer-item")},m(e,t){y(e,n,t),o&&o.m(n,null)},p(e,[t]){e[0]&&e[1]?o?o.p(e,t):(o=ke(e),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:e,o:e,d(e){e&&b(n),o&&o.d()}}}function Ce(e,t,n){let{url:o,imageSource:r,altText:i}=t;return e.$$set=e=>{"url"in e&&n(0,o=e.url),"imageSource"in e&&n(1,r=e.imageSource),"altText"in e&&n(2,i=e.altText)},[o,r,i]}class Ee extends ie{constructor(e){super(),re(this,e,Ce,_e,a,{url:0,imageSource:1,altText:2})}}var Se={"text/plain":"Text","text/html":"Url",default:"Text"};var De=function(e,t){var n,o,r,i,a,l,c=!1;t||(t={}),n=t.debug||!1;try{if(r=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}(),i=document.createRange(),a=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=Se[t.format]||Se.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),a.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");c=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(i):a.removeAllRanges()),l&&document.body.removeChild(l),r()}return c};function Te(t){let n,o,r,i;return{c(){n=$("div"),n.innerHTML="<h4>email copied to clipboard!</h4>",_(n,"class","footer-container")},m(e,o){y(e,n,o),r||(i=k(n,"click",t[3]),r=!0)},p:e,i(e){o||V((()=>{o=W(n,fe,{duration:200}),o.start()}))},o:e,d(e){e&&b(n),r=!1,i()}}}function Re(t){let n,o,r,i,a,l,s,u,d;return{c(){n=$("div"),o=$("h4"),o.textContent="copy email",i=w(),a=$("img"),_(a,"class","footer-img tiny-img scale-up"),_(a,"alt",""),c(a.src,l=Ne)||_(a,"src",l),_(n,"class","footer-container cursor")},m(e,r){y(e,n,r),p(n,o),p(n,i),p(n,a),u||(d=k(n,"click",t[3]),u=!0)},p:e,i(e){r||V((()=>{r=W(o,fe,{}),r.start()})),s||V((()=>{s=W(n,fe,{duration:200}),s.start()}))},o:e,d(e){e&&b(n),u=!1,d()}}}function Ae(e){let t,n,o,r,i,a,l;function c(e,t){return e[2]?Re:Te}let s=c(e),u=s(e);return r=new Ee({props:{url:`https://linkedin.com/in/${e[0]}`,imageSource:ze,altText:"linkedin"}}),a=new Ee({props:{url:`https://github.com/${e[1]}`,imageSource:Me,altText:"github"}}),{c(){t=$("div"),u.c(),n=w(),o=$("div"),ee(r.$$.fragment),i=w(),ee(a.$$.fragment),_(o,"class","footer-container"),_(t,"class","footer")},m(e,c){y(e,t,c),u.m(t,null),p(t,n),p(t,o),te(r,o,null),p(o,i),te(a,o,null),l=!0},p(e,[o]){s===(s=c(e))&&u?u.p(e,o):(u.d(1),u=s(e),u&&(u.c(),J(u,1),u.m(t,n)));const i={};1&o&&(i.url=`https://linkedin.com/in/${e[0]}`),r.$set(i);const l={};2&o&&(l.url=`https://github.com/${e[1]}`),a.$set(l)},i(e){l||(J(u),J(r.$$.fragment,e),J(a.$$.fragment,e),l=!0)},o(e){K(r.$$.fragment,e),K(a.$$.fragment,e),l=!1},d(e){e&&b(t),u.d(),ne(r),ne(a)}}}let ze="./Images/LI.png",Me="./Images/Github.png",Ne="./Images/cursor.png";function Le(e,t,n){let{email:o,linkedin:r,github:i}=t,a=!0;return e.$$set=e=>{"email"in e&&n(4,o=e.email),"linkedin"in e&&n(0,r=e.linkedin),"github"in e&&n(1,i=e.github)},[r,i,a,()=>{De(o),n(2,a=!1),setTimeout((()=>{n(2,a=!0)}),2e3)},o]}class Ie extends ie{constructor(e){super(),re(this,e,Le,Ae,a,{email:4,linkedin:0,github:1})}}function Pe(t){let n,o;return n=new Ie({props:{email:Ve,linkedin:je,github:Oe}}),{c(){ee(n.$$.fragment)},m(e,t){te(n,e,t),o=!0},p:e,i(e){o||(J(n.$$.fragment,e),o=!0)},o(e){K(n.$$.fragment,e),o=!1},d(e){ne(n,e)}}}function Ue(e){let t,n,o,i,a,l,c,s,u,d;n=new xe({props:{name:"tollef jørgensen",email:Ve,linkedin:je,github:Oe,titles:["PhD Candidate, Language Technology, NTNU, DART group","Computer scientist (MSc)"]}});let f=!e[0]&&Pe();return{c(){t=$("div"),ee(n.$$.fragment),o=w(),i=$("div"),a=$("button"),a.textContent="change style :)",l=w(),f&&f.c(),c=x(),_(a,"class","btn-dark btn-sm m-1"),_(i,"class","buttons"),_(t,"class","container"),E(t,"printing",e[0])},m(r,m){y(r,t,m),te(n,t,null),p(t,o),p(t,i),p(i,a),y(r,l,m),f&&f.m(r,m),y(r,c,m),s=!0,u||(d=k(a,"click",e[1]),u=!0)},p(e,[n]){1&n&&E(t,"printing",e[0]),e[0]?f&&(X={r:0,c:[],p:X},K(f,1,1,(()=>{f=null})),X.r||r(X.c),X=X.p):f?(f.p(e,n),1&n&&J(f,1)):(f=Pe(),f.c(),J(f,1),f.m(c.parentNode,c))},i(e){s||(J(n.$$.fragment,e),J(f),s=!0)},o(e){K(n.$$.fragment,e),K(f),s=!1},d(e){e&&b(t),ne(n),e&&b(l),f&&f.d(e),e&&b(c),u=!1,d()}}}const Ve="t@tollef.xyz",je="tollefj",Oe="ph10m";function qe(e,t,n){const o=[ae,le,ce];let r=0;function i(){return tsParticles.load("tsparticles",o[r]),tsParticles.domItem(0)}let a,l=i();console.log(l),console.log(l),pe.subscribe((e=>n(0,a=e)));const c=()=>pe.update((e=>!e));return window.onbeforeprint=()=>c(),window.onafterprint=()=>c(),[a,function(){const e=r+=1;r=e%o.length,console.log(r),l=i()}]}return new class extends ie{constructor(e){super(),re(this,e,qe,Ue,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
