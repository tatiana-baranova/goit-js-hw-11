export default reflectionImages;
function reflectionImages(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <a class="gallery-item" href="${largeImageURL}">
    <div class="gallery-image">
    <img class="image" src="${webformatURL}" alt="${tags}">
    <div class="description">
    <p>Likes: <span>"${likes}"</span></p>
    <p>Views: <span>"${views}"</span></p>
    <p>Comments: <span>"${comments}"</span></p>
    <p>Downloads: <span>"${downloads}"</span></p>
    </div>
    </div>
    </a>
    `).join("");
}
