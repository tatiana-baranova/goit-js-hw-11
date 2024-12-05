import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){const t="47418994-53b3f5e850acd57effb8c0e9d",o="https://pixabay.com/api/",i=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}function f(s){return s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:p})=>`
    <a class="gallery-item" href="${o}">
    <div class="gallery-image">
    <img class="image" src="${t}" alt="${i}">
    <div class="description">
    <p>Likes: <span>"${e}"</span></p>
    <p>Views: <span>"${r}"</span></p>
    <p>Comments: <span>"${a}"</span></p>
    <p>Downloads: <span>"${p}"</span></p>
    </div>
    </div>
    </a>
    `).join("")}const d=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector("#loader");let h=new u(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});d.addEventListener("submit",g);function g(s){s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}c.innerHTML="",l.classList.remove("hidden"),m(t).then(o=>{if(o.hits.length===0){n.info({title:"No results",message:"Sorry, no images found!",position:"topRight"});return}const i=f(o.hits);c.innerHTML=i,h.refresh()}).catch(o=>{n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{l.classList.add("hidden"),s.target.reset()})}
//# sourceMappingURL=index.js.map
