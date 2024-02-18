import { sendRequest } from "./js/pixabay-api.js"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const galleryList = document.querySelector(".gallery");
const searchText = document.querySelector("#photo-search");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");

const moreBtn = document.createElement("button");

moreBtn.classList.add("more-search-btn", "btn");
moreBtn.textContent = "Load more";
moreBtn.type = "button";

const loader = document.createElement("div");

loader.classList.add("loader", "loader2");

searchBtn.setAttribute('disabled', true);

let page;
let per_page = 15;
let maxPages;
let search;

const handleClick = async () => {
    galleryList.after(loader);
    searchForm.reset();
    searchBtn.setAttribute('disabled', true);

    const data = await sendRequest(search, page, per_page);
    galleryCreation(data);
};

moreBtn.addEventListener("click", (e) =>{
    e.stopPropagation();
    e.preventDefault();
    removeBtn();

    handleClick();
});

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    removeBtn();
    if (searchText.value.trim() !== ""){
        search = searchText.value.trim();
        page = 1;
        handleClick();
    }
});

const check = (e) =>{
    let text = e.target.value;
    
    if(text.trim() !== ''){
        searchBtn.removeAttribute('disabled');
    } else {
        searchBtn.setAttribute('disabled', true);
    }
}
  
searchText.addEventListener("input", (e) =>{
    e.stopPropagation();
    e.preventDefault();
    
    check(e);
});


function galleryFiller(images){
    return images.map(image => {
        const {webformatURL: small, largeImageURL: big, tags: alt, likes, views, comments, downloads } = image;
        return `<li class="gallery-item">
                    <a class="gallery-link" href="${big}">
                        <img
                        class="gallery-image"
                        src="${small}"
                        alt="${alt}"
                        />
                    </a>
                    <ul class="properties">
                            <li>
                                <h5>Likes</h5>
                                <p>${likes}</p>
                            </li>
                            <li>
                                <h5>Views</h5>
                                <p>${views}</p>
                            </li>
                            <li>
                                <h5>Comments</h5>
                                <p>${comments}</p>
                            </li>
                            <li>
                                <h5>Downloads</h5>
                                <p>${downloads}</p>
                            </li>
                        </ul>
                </li>`;
    })
    .join("");
}

function addButn(){
    galleryList.after(moreBtn);
}

const scrollPage = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
}

function removeBtn(){
    moreBtn.remove();
}

function clearGallery() {
    galleryList.innerHTML = "";
}

function warningPopUp() {
    iziToast.warning({
        backgroundColor: '#FFBEBE',
        messageColor: '#fff',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results."
    })
}

export const galleryCreation = (data) => {
    const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt",});
    maxPages = Math.ceil(data.totalHits / per_page);
    loader.remove();
    const images = data.hits;
    if (images.length === 0){
        clearGallery();
        iziToast.error({
            backgroundColor: '#FFBEBE',
            messageColor: '#fff',
            position: 'topRight',
            message: `Sorry, there are no images matching your search query. Please try again!`
        });
    } else if (page === 1) {
        clearGallery();
        page += 1;
        const markup = galleryFiller(images);
        galleryList.innerHTML += markup;
        
        if (maxPages === 1){
            warningPopUp();
        } else {
            addButn();
        };
        gallery.refresh();
    } else if (page < maxPages) {
        page += 1;
        const markup = galleryFiller(images);
        galleryList.innerHTML += markup;
        addButn();
        scrollPage();

        gallery.refresh();
    } else if (page === maxPages){
        page += 1;
        const markup = galleryFiller(images);
        galleryList.innerHTML += markup;
        gallery.refresh();
        scrollPage();
        warningPopUp();
    }
};
