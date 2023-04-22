import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const addCreateElement = createItemsEl(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', addCreateElement);

function createItemsEl(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" 
      src=${preview}
      alt=${description}/>
   </a>
</li>`;
  }).join('');
}
const ligthBox = new SimpleLightbox('.gallery__link', {
  captionsData: "alt",
  captionDelay: 250,

});