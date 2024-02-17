import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const galleryList = document.querySelector(".gallery");

export const galleryCreation = (images) => {
    galleryList.innerHTML = "";
    if(images.length === 0){
        iziToast.error({
            backgroundColor: '#FFBEBE',
            messageColor: '#fff',
            position: 'topRight',
            message: `Sorry, there are no images matching your search query. Please try again!`
        })
    }else{
        const markup = images.map(image => {
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

        galleryList.insertAdjacentHTML("beforeend", markup);

        const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt",});

        gallery.refresh();
    }
};
