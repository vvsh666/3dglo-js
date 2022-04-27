(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l;l=setInterval((()=>{let e=(()=>{let e=(new Date("25 april 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/3600),a=Math.floor(e/60%60),r=Math.floor(e%60);return e<=0&&(e=0,t=0,a=0,r=0),{timeRemaining:e,hours:t,minutes:a,seconds:r}})();t.textContent=e.hours<10?"0"+e.hours:e.hours,a.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining<=0&&clearInterval(l)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=(document.querySelector('main>a[href="#service-block"]'),()=>{e.classList.toggle("active-menu")}),a=(e,t)=>{t.preventDefault(),document.getElementById(e.getAttribute("href").substring(1)).scrollIntoView({behavior:"smooth"})};document.addEventListener("click",(r=>{!r.target.closest("menu")&&e.classList.contains("active-menu")&&t(),r.target.closest(".menu")&&t(),r.target.classList.contains("close-btn")&&(r.preventDefault(),t()),r.target.matches("ul>li>a")&&(a(r.target,r),t()),r.target.closest('main>a[href="#service-block"]')&&a(r.target.closest('main>a[href="#service-block"]'),r)}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");e.forEach((e=>{e.addEventListener("click",(()=>{if(document.documentElement.clientWidth>=768){let e,a=0;t.style.opacity=0,t.style.display="block";const r=()=>{a++,e=requestAnimationFrame(r),a<=50?t.style.opacity=.02*a:cancelAnimationFrame(e)};r()}else t.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item");for(let t=1;t<e.length;t++)e[t].addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelectorAll("input[name=user_name]"),t=document.querySelectorAll("input[name=user_phone]"),a=document.querySelectorAll("input[name=user_email]"),r=document.querySelector("input[name=user_message]"),l=e=>{e.target.value=e.target.value.replace(/\s{2,}/g," "),e.target.value=e.target.value.replace(/-{2,}/g,"-"),e.target.value=e.target.value.replace(/^[\s-]+|[\s-]+$/g,"")},n=e=>{if(""!=e.target.value){let t=e.target.value.split(" ").map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase()));e.target.value=t.join(" ")}};e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яё -]+/,"")})),e.addEventListener("blur",(e=>{l(e),n(e)}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)-]+/,"")})),e.addEventListener("blur",(e=>{l(e)}))})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@\-\_\.\!\~\*\']+|\^\\/,"")})),e.addEventListener("blur",(e=>{l(e)}))})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-яё -]+/,"")})),r.addEventListener("blur",(e=>{l(e),n(e)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),((e,t,a,r,l="portfolio-item-active",n="dot-active")=>{const s=document.querySelector("."+e),o=s.querySelectorAll("."+t),c=s.querySelector("."+a);let i,u,d=0;if(null===s||0===o.length||null===c)return;const m=(e,t,a)=>{e[t].classList.remove(a)},v=(e,t,a)=>{e[t].classList.add(a)},g=()=>{m(o,d,l),m(i,d,n),d++,d>=o.length&&(d=0),v(o,d,l),v(i,d,n)},p=(e=1500)=>{u=setInterval(g,e)};s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.dot, .${r}`)&&(m(o,d,l),m(i,d,n),e.target.matches("#arrow-right")?d++:e.target.matches("#arrow-left")?d--:e.target.classList.contains("dot")&&i.forEach(((t,a)=>{e.target===t&&(d=a)})),d>=o.length&&(d=0),d<0&&(d=o.length-1),v(o,d,l),v(i,d,n))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.dot, .${r}`)&&clearInterval(u)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.dot, .${r}`)&&p(2e3)}),!0),(()=>{for(let e=0;e<o.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add(n),c.append(t)}i=s.querySelectorAll(".dot")})(),p(2e3)})("portfolio-content","portfolio-item","portfolio-dots","portfolio-btn")})();