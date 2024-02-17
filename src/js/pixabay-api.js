import { galleryCreation } from './render-functions.js';

import axios from 'axios';

export const sendRequest = (search) => {
    axios.defaults.baseURL = `https://pixabay.com`;

    axios.get(`/api/?`, {
        params: {
            key: "42388767-1d9ccb99c091176bae08c2c78",
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: 1,
        }
    })
    .then(response => {
        console.log(response.data);
        galleryCreation(response.data.hits);
    })
    .catch(error => console.log(error));
};

