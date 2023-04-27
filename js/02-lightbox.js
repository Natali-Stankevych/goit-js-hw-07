import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
const imegesContainer = document.querySelector(".gallery");

const marcup = galleryItems.map(({ preview, original, description }) =>
  ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`)
  .join(" ");

imegesContainer.insertAdjacentHTML("beforeend", marcup);


    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    })

