import iziToast from "izitoast";

export default getImages;

function getImages(query) {
const API_KEY = "47418994-53b3f5e850acd57effb8c0e9d";
    const BASE_URL = 'https://pixabay.com/api/';
    
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
                color: '#ef4040',
                close: false,
                position: 'topRight',
        })
    })
}
