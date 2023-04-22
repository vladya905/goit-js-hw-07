import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const addCreateElement = createItemsEl(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', addCreateElement);
galleryContainer.addEventListener('click', onHrefClick)
function onHrefClick(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
    } 
    instance.show()
}
function createItemsEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
}

const imageOriginal = imageOriginalEl(galleryItems)
function imageOriginalEl(galleryItems) {
    return galleryItems.map(({ original }) =>{
        return `<img src = '${original}'>`
    })
}
console.dir(imageOriginal)






const instance = basicLightbox.create(
   imageOriginal[3]
)


   
