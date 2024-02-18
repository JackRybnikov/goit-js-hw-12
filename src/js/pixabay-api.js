import axios from 'axios';

export const sendRequest = async (search, page, per_page = 15) => {
    axios.defaults.baseURL = `https://pixabay.com`;

    const response = await axios.get(`/api/?`, {
        params: {
            key: "42388767-1d9ccb99c091176bae08c2c78",
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page,
            page,
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => console.log(error));

    return response;
};

