(()=>{"use strict";var e,t,n,o,c,d,a,r={853:(e,t,n)=>{e.exports=n.p+"ff7a424eeb45f09606e2.jpg"},451:(e,t,n)=>{e.exports=n.p+"3fb6563cbcfdc572200e.jpg"},549:(e,t,n)=>{e.exports=n.p+"0728481d1fe773a6cb9c.png"},49:(e,t,n)=>{e.exports=n.p+"2e7a13a38d8fef861168.svg"},987:(e,t,n)=>{e.exports=n.p+"f7ab8ebfe69161d1d42a.svg"},311:(e,t,n)=>{e.exports=n.p+"44073b033a19e9a7edc3.svg"},745:(e,t,n)=>{e.exports=n.p+"9507a17a5de960b0706e.svg"}},i={};function m(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,m),n.exports}m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var t=m.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),e=m(311),t=m(745),n=m(49),o=m(987),c=m(451),d=m(549),a=m(853),window.onload=function(){const c=document.getElementById("content"),d=document.createElement("header"),a=document.createElement("h1");a.textContent="Korean Street";const r=document.createElement("ul");r.setAttribute("id","nav-menu");const i=document.createElement("li"),m=document.createElement("a");m.textContent="Home",m.setAttribute("id","home"),m.setAttribute("href","#"),i.appendChild(m);const l=document.createElement("li"),s=document.createElement("a");s.textContent="Menu",s.setAttribute("id","menu"),s.setAttribute("href","#"),l.appendChild(s);const u=document.createElement("li"),p=document.createElement("a");p.textContent="Contact",p.setAttribute("id","contact"),p.setAttribute("href","#"),u.appendChild(p),[m,s,p].forEach((e=>e.addEventListener("click",(e=>{if("home"===e.target.id){const e=document.getElementById("home"),t=document.getElementById("main-container"),n=document.getElementById("background-img");e.style.borderBottom="4px solid #2ECBE9",t.remove(),n.remove()}else if("menu"===e.target.id){const e=document.getElementById("menu"),t=document.getElementById("main-container"),n=document.getElementById("background-img");e.style.borderBottom="4px solid #2ECBE9",t.remove(),n.remove()}else if("contact"===e.target.id){const e=document.getElementById("contact"),t=document.getElementById("main-container"),n=document.getElementById("background-img");e.style.borderBottom="4px solid #2ECBE9",t.remove(),n.remove()}}))));const E=document.createElement("ul");E.setAttribute("id","social-links");const h=document.createElement("li"),g=document.createElement("a"),f=new Image;f.src=e,g.setAttribute("href","#"),h.appendChild(g),g.appendChild(f);const C=document.createElement("li"),b=document.createElement("a"),x=new Image;x.src=t,b.setAttribute("href","#"),C.appendChild(b),b.appendChild(x);const v=document.createElement("li"),A=document.createElement("a"),y=new Image;y.src=n,A.setAttribute("href","#"),v.appendChild(A),A.appendChild(y);const w=document.createElement("li"),I=document.createElement("a"),B=new Image;B.src=o,I.setAttribute("href","#"),w.appendChild(I),I.appendChild(B),c.appendChild(d),d.append(a,r,E),r.append(i,l,u),E.append(h,C,v,w)}(),function(){const e=document.getElementById("content"),t=document.createElement("main"),n=new Image;n.src=a,n.setAttribute("id","background-img");const o=document.createElement("div");o.setAttribute("id","main-container");const r=document.createElement("div");r.classList.add("info-card");const i=document.createElement("div");i.classList.add("card-div");const m=document.createElement("h2");m.classList.add("card-headings"),m.textContent="About";const l=document.createElement("p");l.textContent="Korean Street makes the best korean street food in k-town, with a variety of options like tteok-bokki, gimbap, bibimbap, corn dogs, and delicious seafood pajeon, all delivered with a smile and fast service.",i.append(m,l);const s=document.createElement("div");s.classList.add("card-div");const u=document.createElement("h2");u.classList.add("card-headings"),u.textContent="Hours";const p=document.createElement("p");p.textContent="M-F: 8pm to 3am";const E=document.createElement("p");E.textContent="Sat: 6pm to 12am";const h=document.createElement("p");h.textContent="Sunday: closed",s.append(u,p,E,h);const g=document.createElement("div");g.classList.add("card-div");const f=document.createElement("h2");f.classList.add("card-headings"),f.textContent="Find Us";const C=document.createElement("p");C.textContent="1223 fake st SE, fake city, 54321, state, USA",g.append(f,C);const b=new Image;b.src=c;const x=new Image;x.src=d,x.setAttribute("id","squid-logo"),e.appendChild(t),t.append(n,o,x),o.append(r,b),r.append(i,s,g)}(),function(){const e=document.getElementById("content"),t=document.createElement("footer"),n=document.createElement("div");n.setAttribute("id","footer-info");const o=document.createElement("ul"),c=document.createElement("li"),d=document.createElement("h3");o.setAttribute("id","explore"),d.textContent="Explore",d.classList.add("footer-headings"),o.appendChild(c),c.appendChild(d);let a=["Home","About","Careers","Menu"];for(let e=0;e<a.length;e++){const t=document.createElement("li"),n=document.createElement("a");n.textContent=a[e],n.setAttribute("href","#"),t.appendChild(n),o.appendChild(t)}const r=document.createElement("ul");r.setAttribute("id","visit");const i=document.createElement("li"),m=document.createElement("h3");m.classList.add("footer-headings"),m.textContent="Visit",i.appendChild(m);const l=document.createElement("li"),s=document.createElement("p");s.textContent="1223 fake st SE, fake city, 54321, state, USA",l.appendChild(s),r.append(i,l);const u=document.createElement("ul");u.setAttribute("id","follow");const p=document.createElement("li"),E=document.createElement("h3");E.classList.add("footer-headings"),E.textContent="Follow",u.appendChild(p),p.appendChild(E);let h=["Instagram","Twitter","Yelp"];for(let e=0;e<h.length;e++){const t=document.createElement("li"),n=document.createElement("a");n.textContent=h[e],n.setAttribute("href","#"),t.appendChild(n),u.appendChild(t)}const g=document.createElement("ul"),f=document.createElement("li"),C=document.createElement("h3"),b=document.createElement("li"),x=document.createElement("a"),v=document.createElement("li");g.setAttribute("id","contact"),C.classList.add("footer-headings"),C.textContent="Contact / hours",b.textContent="Phone: ",x.textContent="435-207-8679",v.textContent="Dine-in/take-out/delivery 2-6 AM friday-saturday",b.appendChild(x),g.append(f,b,v),f.appendChild(C);const A=document.createElement("div"),y=document.createElement("p");A.setAttribute("id","copyright-info"),A.appendChild(y),y.textContent="2021 Korean Street. All Rights Reserved.",e.appendChild(t),t.append(n,A),n.append(o,r,u,g)}()})();