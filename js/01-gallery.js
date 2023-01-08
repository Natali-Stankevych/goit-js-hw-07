import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imegesContainer = document.querySelector(".gallery");
const imegesMarcup = createPictureGallary(galleryItems);
imegesContainer.insertAdjacentHTML("beforeend", imegesMarcup);


function createPictureGallary(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            `<div class="gallery__item">
        <a class="gallery__link" href="${original}" >
          <img class="gallery__image" 
          data-source ="${original}"
          src="${preview}" 
          alt="${description}">
        </a>
      </div>`
        })
        .join("");
};

imegesContainer.addEventListener('click', (eve) => {
    eve.preventDefault();
    if (eve.target.nodeName !== "IMG") {
        return
    }
    const urlLargeImg = eve.target.getAtribute('data-source');
    const instance = basicLightbox.create(`
    <img src="${urlLargeImg}" width = '800' height = '600'
          >`)
    instance.show();
});