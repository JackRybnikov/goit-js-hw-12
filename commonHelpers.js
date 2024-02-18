import{a as h,S,i as v}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const k=async(t,o,a=15)=>(h.defaults.baseURL="https://pixabay.com",await h.get("/api/?",{params:{key:"42388767-1d9ccb99c091176bae08c2c78",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:o}}).then(e=>e.data).catch(e=>console.log(e))),i=document.querySelector(".gallery"),p=document.querySelector("#photo-search"),d=document.querySelector(".search-btn"),w=document.querySelector(".search-form"),l=document.createElement("button");l.classList.add("more-search-btn","btn");l.textContent="Load more";l.type="button";const f=document.createElement("div");f.classList.add("loader","loader2");d.setAttribute("disabled",!0);let n,E=15,u,P;const B=async()=>{i.after(f),w.reset(),d.setAttribute("disabled",!0);const t=await k(P,n,E);$(t)};l.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),q(),B()});w.addEventListener("submit",t=>{t.preventDefault(),q(),p.value.trim()!==""&&(P=p.value.trim(),n=1,B())});const F=t=>{t.target.value.trim()!==""?d.removeAttribute("disabled"):d.setAttribute("disabled",!0)};p.addEventListener("input",t=>{t.stopPropagation(),t.preventDefault(),F(t)});function m(t){return t.map(o=>{const{webformatURL:a,largeImageURL:s,tags:e,likes:r,views:c,comments:x,downloads:C}=o;return`<li class="gallery-item">
                    <a class="gallery-link" href="${s}">
                        <img
                        class="gallery-image"
                        src="${a}"
                        alt="${e}"
                        />
                    </a>
                    <ul class="properties">
                            <li>
                                <h5>Likes</h5>
                                <p>${r}</p>
                            </li>
                            <li>
                                <h5>Views</h5>
                                <p>${c}</p>
                            </li>
                            <li>
                                <h5>Comments</h5>
                                <p>${x}</p>
                            </li>
                            <li>
                                <h5>Downloads</h5>
                                <p>${C}</p>
                            </li>
                        </ul>
                </li>`}).join("")}function g(){i.after(l)}const y=()=>{window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})};function q(){l.remove()}function b(){i.innerHTML=""}function L(){v.warning({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const $=t=>{const o=new S(".gallery a",{captionDelay:250,captionsData:"alt"});u=Math.ceil(t.totalHits/E),f.remove();const a=t.hits;if(a.length===0)b(),v.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else if(n===1){b(),n+=1;const s=m(a);i.innerHTML+=s,u===1?L():g(),o.refresh()}else if(n<u){n+=1;const s=m(a);i.innerHTML+=s,g(),y(),o.refresh()}else if(n===u){n+=1;const s=m(a);i.innerHTML+=s,o.refresh(),y(),L()}};
//# sourceMappingURL=commonHelpers.js.map
