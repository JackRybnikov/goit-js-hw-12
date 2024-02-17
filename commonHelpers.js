import{i as y,S as b,a as u}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const d=document.querySelector(".gallery"),L=e=>{if(d.innerHTML="",e.length===0)y.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const r=e.map(l=>{const{webformatURL:t,largeImageURL:o,tags:a,likes:p,views:m,comments:f,downloads:h}=l;return`<li class="gallery-item">
                        <a class="gallery-link" href="${o}">
                            <img
                            class="gallery-image"
                            src="${t}"
                            alt="${a}"
                            />
                        </a>
                        <ul class="properties">
                                <li>
                                    <h5>Likes</h5>
                                    <p>${p}</p>
                                </li>
                                <li>
                                    <h5>Views</h5>
                                    <p>${m}</p>
                                </li>
                                <li>
                                    <h5>Comments</h5>
                                    <p>${f}</p>
                                </li>
                                <li>
                                    <h5>Downloads</h5>
                                    <p>${h}</p>
                                </li>
                            </ul>
                    </li>`}).join("");d.insertAdjacentHTML("beforeend",r),new b(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}},v=e=>{u.defaults.baseURL="https://pixabay.com",u.get("/api/?",{params:{key:"42388767-1d9ccb99c091176bae08c2c78",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}}).then(r=>{console.log(r.data),L(r.data.hits)}).catch(r=>console.log(r))},S=document.querySelector(".gallery"),n=document.querySelector("#photo-search"),s=document.querySelector(".search-btn"),w=document.querySelector(".search-form"),i="search-text";n.value=JSON.parse(localStorage.getItem(i));n.value===""&&s.setAttribute("disabled",!0);const g=()=>{S.innerHTML='<div class="loader"></div>';const e=localStorage.getItem(i);localStorage.removeItem(i),w.reset(),s.setAttribute("disabled",!0),v(e)},q=e=>{let r=e.target.value;localStorage.setItem(i,JSON.stringify(r)),r!==""?s.removeAttribute("disabled"):s.setAttribute("disabled",!0)};window.addEventListener("keydown",e=>{e.key=="Enter"&&e.target.nodeName=="INPUT"&&e.target.type=="text"&&(e.preventDefault(),n.value!==""&&g())},!0);n.addEventListener("input",e=>{e.stopPropagation(),e.preventDefault(),q(e)});s.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),g()});
//# sourceMappingURL=commonHelpers.js.map
