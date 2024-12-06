import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(s){const r="47418994-53b3f5e850acd57effb8c0e9d",i="https://pixabay.com/api/",o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}function d(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:u})=>`
    <a class="gallery-item" href="${i}">
    <div class="gallery-image">
    <img class="image" src="${r}" alt="${o}">
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
    <p class="text-img">${n}</p>
    </li>
    <li class="list-info">
    <h3 class="info-img">Downloads</h3>
    <p class="text-img">${u}</p>
    </li>
    </ul>
    </div>
    </div>
    </a>
    `).join("")}const h=document.querySelector(".search-form"),c=document.querySelector(".gallery"),a=document.querySelector("#loader");let p=new f(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});h.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.target.elements.searchQuery.value.trim();if(!r){l.error({title:"Error",message:"Please enter a search query!",position:"topRight"}),s.target.reset();return}c.innerHTML="",a.classList.contains("hidden")?a.classList.replace("hidden","loader"):a.classList.add("loader"),m(r).then(i=>{if(i.hits.length===0){l.info({title:"No results",message:"Sorry, no images found!",position:"topRight"});return}const o=d(i.hits);c.innerHTML=o,p.refresh()}).catch(i=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{a.classList.contains("loader")?a.classList.replace("loader","hidden"):a.classList.add("hidden"),s.target.reset()})}
//# sourceMappingURL=index.js.map
