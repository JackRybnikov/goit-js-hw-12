import{i as h,S as y}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery"),b=e=>{if(u.innerHTML="",e.length===0)h.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=e.map(i=>{const{webformatURL:t,largeImageURL:r,tags:s,likes:g,views:p,comments:f,downloads:m}=i;return`<li class="gallery-item">
                        <a class="gallery-link" href="${r}">
                            <img
                            class="gallery-image"
                            src="${t}"
                            alt="${s}"
                            />
                        </a>
                        <ul class="properties">
                                <li>
                                    <h5>Likes</h5>
                                    <p>${g}</p>
                                </li>
                                <li>
                                    <h5>Views</h5>
                                    <p>${p}</p>
                                </li>
                                <li>
                                    <h5>Comments</h5>
                                    <p>${f}</p>
                                </li>
                                <li>
                                    <h5>Downloads</h5>
                                    <p>${m}</p>
                                </li>
                            </ul>
                    </li>`}).join("");u.insertAdjacentHTML("beforeend",o),new y(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}},L=e=>{let o=new URLSearchParams({key:"42388767-1d9ccb99c091176bae08c2c78",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:198});fetch(`https://pixabay.com/api/?${o}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).then(a=>{b(a.hits)}).catch(a=>console.log(a))},S=document.querySelector(".gallery"),c=document.querySelector("#photo-search"),l=document.querySelector(".search-btn"),v=document.querySelector(".search-form"),n="search-text";c.value=JSON.parse(localStorage.getItem(n));c.value===""&&l.setAttribute("disabled",!0);const d=()=>{S.innerHTML='<div class="loader"></div>';const e=localStorage.getItem(n);localStorage.removeItem(n),v.reset(),l.setAttribute("disabled",!0),L(e)},w=e=>{let o=e.target.value;localStorage.setItem(n,JSON.stringify(o)),o!==""?l.removeAttribute("disabled"):l.setAttribute("disabled",!0)};window.addEventListener("keydown",e=>{e.key=="Enter"&&e.target.nodeName=="INPUT"&&e.target.type=="text"&&(e.preventDefault(),c.value!==""&&d())},!0);c.addEventListener("input",e=>{e.stopPropagation(),e.preventDefault(),w(e)});l.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),d()});
//# sourceMappingURL=commonHelpers.js.map
