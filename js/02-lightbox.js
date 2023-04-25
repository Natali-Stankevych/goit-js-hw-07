import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
const imegesContainer = document.querySelector(".gallery");

const marcup = galleryItems.map(({ preview, original, description }) =>
  ` <a class="gallery__item" 
  href="${original}">
  <img class="${original}" 
  src="${preview}" 
  alt="${description}" />
</a>`)
  .join(" ");

imegesContainer.insertAdjacentHTML("beforeend", marcup);

imegesContainer.addEventListener('click', (eve) => {
    eve.preventDefault();
    if (eve.target.nodeName !== "IMG") {
        return
    }
    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    })

})
