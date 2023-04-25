import { galleryItems } from './gallery-items.js';


 //console.log(galleryItems);
const imegesContainer = document.querySelector(".gallery");

const marcup = galleryItems.map(({ preview, original, description }) =>
  `<div class="gallery__item">
          <a class="gallery__link" href="${original}" >
         <img class="gallery__image" 
         data-source ="${original}"
          src="${preview}" 
          alt="${description}">
        </a>
       </div>`)
  .join(" ");

imegesContainer.insertAdjacentHTML("beforeend", marcup);


imegesContainer.addEventListener('click', (eve) => {
    eve.preventDefault();
    if (eve.target.nodeName !== "IMG") {
        return
    }  
  
    const instance = basicLightbox.create(`
    <img src="${eve.target.dataset.source}" width = '800' height = '600'
          >`)
  instance.show();

  imegesContainer.addEventListener('keydown', (event) => {
  if ( event.code === "Escape") {
     instance.close()
  }
}
)
  
});





