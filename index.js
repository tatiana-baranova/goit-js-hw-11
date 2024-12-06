import{S as d,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(o){const s="47418994-53b3f5e850acd57effb8c0e9d",i="https://pixabay.com/api/",a=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}function u(o){return o.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:l,downloads:f})=>`
    <a class="gallery-item" href="${i}">
    <div class="gallery-image">
    <img class="image" src="${s}" alt="${a}">
    <div>
    <ul class="description">
    <li class="list-info">
    <h3 class="info-img">Likes</h3>
    <p class="text-img">${e}</p>
    </li>
    <li class="list-info">
    <h3 class="info-img">Views</h3>
    <p class="text-img">${t}</p>
    </li>
    <li class="list-info">
    <h3 class="info-img">Comments</h3>
    <p class="text-img">${l}</p>
    </li>
    <li class="list-info">
    <h3 class="info-img">Downloads</h3>
    <p class="text-img">${f}</p>
    </li>
    </ul>
    </div>
    </div>
    </a>
    `).join("")}const h=document.querySelector(".search-form"),c=document.querySelector(".gallery"),r=document.querySelector("#loader");console.log(r);console.log("Before:",r.classList);let m=new d(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});h.addEventListener("submit",p);function p(o){o.preventDefault();const s=o.target.elements.searchQuery.value.trim();if(!s){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"}),o.target.reset();return}c.innerHTML="",console.log("Before showing loader:",r.classList),r.classList.contains("hidden")?r.classList.replace("hidden","loader"):r.classList.add("loader"),console.log("After showing loader:",r.classList),g(s).then(i=>{if(i.hits.length===0){n.info({title:"No results",message:"Sorry, no images found!",position:"topRight"});return}const a=u(i.hits);c.innerHTML=a,m.refresh()}).catch(i=>{n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{console.log("Before hiding loader:",r.classList),r.classList.contains("loader")?r.classList.replace("loader","hidden"):r.classList.add("hidden"),console.log("After hiding loader:",r.classList),o.target.reset()})}
//# sourceMappingURL=index.js.map
