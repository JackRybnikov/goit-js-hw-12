import{a as g,S as C,i as y}from"./assets/vendor-da186403.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S=async(t,o,a=15)=>(g.defaults.baseURL="https://pixabay.com",await g.get("/api/?",{params:{key:"42388767-1d9ccb99c091176bae08c2c78",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:o}}).then(e=>e.data).catch(e=>console.log(e))),i=document.querySelector(".gallery"),p=document.querySelector("#photo-search"),u=document.querySelector(".search-btn"),w=document.querySelector(".search-form"),l=document.createElement("button");l.classList.add("more-search-btn","btn");l.textContent="Load more";l.type="button";const h=document.createElement("div");h.classList.add("loader");u.setAttribute("disabled",!0);let n,E=15,d,B;const P=async()=>{i.after(h),w.reset(),u.setAttribute("disabled",!0);const t=await S(B,n,E);F(t)};l.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),P()});w.addEventListener("submit",t=>{t.preventDefault(),f(),p.value.trim()!==""&&(B=p.value.trim(),n=1,P())});const k=t=>{t.target.value.trim()!==""?u.removeAttribute("disabled"):u.setAttribute("disabled",!0)};p.addEventListener("input",t=>{t.stopPropagation(),t.preventDefault(),k(t)});function m(t){return t.map(o=>{const{webformatURL:a,largeImageURL:s,tags:e,likes:r,views:c,comments:q,downloads:x}=o;return`<li class="gallery-item">
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
                                <p>${q}</p>
                            </li>
                            <li>
                                <h5>Downloads</h5>
                                <p>${x}</p>
                            </li>
                        </ul>
                </li>`}).join("")}function b(){i.after(l)}const L=()=>{window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"})};function f(){l.remove()}function v(){i.innerHTML=""}const F=t=>{const o=new C(".gallery a",{captionDelay:250,captionsData:"alt"});h.remove();const a=t.hits;if(a.length===0)v(),y.error({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else if(n===1){d=Math.ceil(t.totalHits/E),v(),n+=1;const s=m(a);i.innerHTML+=s,b(),o.refresh()}else if(n<d){n+=1,f();const s=m(a);i.innerHTML+=s,b(),L(),o.refresh()}else if(n===d){n+=1,f();const s=m(a);i.innerHTML+=s,o.refresh(),L(),y.warning({backgroundColor:"#FFBEBE",messageColor:"#fff",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}};
//# sourceMappingURL=commonHelpers.js.map
