(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let r=performance.now();requestAnimationFrame((function n(o){let l=(o-r)/a;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(n)}))},t=({idForm:e,someElem:t=[]})=>{const a=document.getElementById(e),r=document.createElement("div"),n=()=>{setTimeout((()=>r.remove()),3e3)};try{if(!a)throw new Error("Верните на место форму, пожалуйста!");a.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=a.querySelectorAll("input"),o=(a.querySelector("button"),new FormData(a)),l={};var c;r.style.color="#fff",a.append(r),o.forEach(((e,t)=>{l[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?l[e.id]=t.textContent:"input"===e.type&&(l[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{"user_name"===e.name&&/[^А-Яа-яё -]+/g.test(e.value)&&(t=!1),"user_message"===e.name&&/[^0-9А-Яа-яё -\.\,\:\?\!]+/g.test(e.value)&&(t=!1),"user_phone"===e.name&&(/[^0-9\(\)\-\+]+/g.test(e.value)||e.value.length<10||e.value.length>17)&&(t=!1)})),t})(e)?(r.innerHTML='<img src="./images/preload.gif">',(c=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{r.textContent="Спасибо! Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""})),n()})).catch((e=>{r.textContent="Ошибка...",n()}))):alert("Данные не валидны!!!")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n;n=setInterval((()=>{let e=(()=>{let e=(new Date("12 may 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),a=Math.floor(e/60%60),r=Math.floor(e%60);return e<=0&&(e=0,t=0,a=0,r=0),{timeRemaining:e,hours:t,minutes:a,seconds:r}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,a.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&clearInterval(n)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=(document.querySelector('main>a[href="#service-block"]'),()=>{e.classList.toggle("active-menu")}),a=(e,t)=>{t.preventDefault(),document.getElementById(e.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"})};document.addEventListener("click",(r=>{!r.target.closest("menu")&&e.classList.contains("active-menu")&&t(),r.target.closest(".menu")&&t(),r.target.classList.contains("close-btn")&&(r.preventDefault(),t()),r.target.matches("ul>li>a")&&(a(r.target,r),t()),r.target.closest('main>a[href="#service-block"]')&&a(r.target.closest('main>a[href="#service-block"]'),r)}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),a=document.querySelector(".popup"),r=a.querySelector(".popup-content");r.style.left="50%",r.style.transform="translateX(-50%)",t.forEach((t=>{t.addEventListener("click",(()=>{document.documentElement.clientWidth>=768?(a.style.opacity=0,a.style.display="block",e({duration:500,timing:e=>e,draw(e){a.style.opacity=e}})):a.style.display="block"}))})),a.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(a.style.display="none")}))})(),((t=100)=>{const a=document.querySelector(".calc-block"),r=document.querySelectorAll(".calc-item"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),s=document.getElementById("total");for(let e=1;e<r.length;e++)r[e].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}));a.addEventListener("input",(a=>{const r=!/\D+/.test(a.data)||null===a.data;(a.target===n||a.target===o&&r||a.target===l&&r||a.target===c&&r)&&(()=>{const a=+n.options[n.selectedIndex].value,r=o.value;let u=0,i=1,d=1;l.value>1&&(i+=+l.value/10),c.value&&c.value<5?d=2:c.value&&c.value<10&&(d=1.5),u=a&&r?Math.ceil(t*a*r*i*d):0,0===u?s.textContent=u:e({duration:400,timing:e=>e,draw(e){s.textContent=Math.floor(u*e)}})})()}))})(100),(()=>{const e=document.querySelectorAll("input[name=user_name]"),t=document.querySelectorAll("input[name=user_phone]"),a=document.querySelectorAll("input[name=user_email]"),r=document.querySelector("input[name=user_message]");t.forEach((e=>{e.setAttribute("minlength",10),e.setAttribute("maxlength",17)}));const n=e=>{e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/-{2,}/g,"-"),e.target.value=e.target.value.replace(/^[\s-]+|[\s-]+$/g,"")},o=e=>{if(""!=e.target.value){let t=e.target.value.split(" ").map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase()));e.target.value=t.join(" ")}};e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яё -]+/,"")})),e.addEventListener("blur",(e=>{n(e),o(e)}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-\+]+/,"")})),e.addEventListener("blur",(e=>{n(e)}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@\-\_\.\!\~\*\']+|\^\\/,"")})),e.addEventListener("blur",(e=>{n(e)}))})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9А-Яа-яё -\.\,\:\?\!]+/,"")})),r.addEventListener("blur",(e=>{n(e),o(e)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),((e,t,a,r,n="portfolio-item-active",o="dot-active")=>{const l=document.querySelector("."+e),c=l.querySelectorAll("."+t),s=l.querySelector("."+a);let u,i,d=0;if(null===l||0===c.length||null===s)return;const m=(e,t,a)=>{e[t].classList.remove(a)},g=(e,t,a)=>{e[t].classList.add(a)},v=()=>{m(c,d,n),m(u,d,o),d++,d>=c.length&&(d=0),g(c,d,n),g(u,d,o)},p=(e=1500)=>{i=setInterval(v,e)};l.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.dot, .${r}`)&&(m(c,d,n),m(u,d,o),e.target.matches("#arrow-right")?d++:e.target.matches("#arrow-left")?d--:e.target.classList.contains("dot")&&u.forEach(((t,a)=>{e.target===t&&(d=a)})),d>=c.length&&(d=0),d<0&&(d=c.length-1),g(c,d,n),g(u,d,o))})),l.addEventListener("mouseenter",(e=>{e.target.matches(`.dot, .${r}`)&&clearInterval(i)}),!0),l.addEventListener("mouseleave",(e=>{e.target.matches(`.dot, .${r}`)&&p(2e3)}),!0),(()=>{for(let e=0;e<c.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add(o),s.append(t)}u=l.querySelectorAll(".dot")})(),p(2e3)})("portfolio-content","portfolio-item","portfolio-dots","portfolio-btn"),t({idForm:"form1",someElem:[{type:"block",id:"total"}]}),t({idForm:"form2",someElem:[{type:"block",id:"total"}]}),t({idForm:"form3",someElem:[{type:"block",id:"total"}]})})();