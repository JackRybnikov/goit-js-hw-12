import { galleryCreation } from "./render-functions.js";

export const sendRequest = (search) => {

    let addToSearch = new URLSearchParams({
        key: "42388767-1d9ccb99c091176bae08c2c78",
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 198,
    });

    fetch(`https://pixabay.com/api/?${addToSearch}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
    })
    .then(value => {
        galleryCreation(value.hits);
    })
    .catch(error => console.log(error));
}

