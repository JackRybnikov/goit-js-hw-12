import { sendRequest } from "./js/pixabay-api.js"

const galleryList = document.querySelector(".gallery");
const searchText = document.querySelector("#photo-search");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");

// getting search value
const localStorageKey = "search-text";

searchText.value = JSON.parse(localStorage.getItem(localStorageKey));

if(searchText.value === ''){
    searchBtn.setAttribute('disabled', true);
}

const handleClick = () => {
    galleryList.innerHTML = `<div class="loader"></div>`;

    const search = localStorage.getItem(localStorageKey);
    localStorage.removeItem(localStorageKey);
    searchForm.reset();
    searchBtn.setAttribute('disabled', true);

    sendRequest(search);
};

const check = (e) =>{
    let text = e.target.value;

    localStorage.setItem(localStorageKey,JSON.stringify(text));
    
    if(text !== ''){
        searchBtn.removeAttribute('disabled');
    } else {
        searchBtn.setAttribute('disabled', true);
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key=='Enter') {
        if (e.target.nodeName=='INPUT' && e.target.type=='text') {
            e.preventDefault();
            if (searchText.value !== ""){
                handleClick();
            }
        }
    }
}, true);
  
searchText.addEventListener("input", e =>{
    e.stopPropagation();
    e.preventDefault();
    
    check(e);
});

searchBtn.addEventListener("click", e =>{
    e.stopPropagation();
    e.preventDefault();

    handleClick();
});


/*const markup = images.map(image => {
    const {preview: small, original: big, description: alt} = image;
    return `<li class="gallery-item">
  <a class="gallery-link" href="${big}">
    <img
      class="gallery-image"
      src="${small}"
      alt="${alt}"
    />
  </a>
</li>`;
})
.join("");



const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt",});*/
