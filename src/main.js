import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import "./js/pixabay-api.js";
import getImages from "./js/pixabay-api.js";

import "./js/render-function.js";
import reflectionImages from "./js/render-function.js";

const formSearch = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loader");

let lightbox = new SimpleLightbox(".gallery-item", {
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionDelay: 250,
});

formSearch.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query!",
            position: "topRight",
        });
        event.target.reset();
        return;
    }
    gallery.innerHTML = "";
    // console.log("Before showing loader:", loader.classList);
    if (loader.classList.contains("hidden")) {
        loader.classList.replace("hidden", "loader");
    } else {
        loader.classList.add("loader");
    }
    // console.log("After showing loader:", loader.classList);

    getImages(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.info({
                    title: "No results",
                    message: "Sorry, no images found!",
                    position: "topRight",
                });
                return;
            }
            const markup = reflectionImages(data.hits);
            gallery.innerHTML = markup;
            lightbox.refresh();
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
            });
        })
        .finally(() => {
            // console.log("Before hiding loader:", loader.classList);
            if (loader.classList.contains("loader")) {
                loader.classList.replace("loader", "hidden");
            } else {
                loader.classList.add("hidden");
            }
            // console.log("After hiding loader:", loader.classList);

            event.target.reset();
        });
}
