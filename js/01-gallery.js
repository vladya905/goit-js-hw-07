import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const addCreateElement = createItemsEl(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', addCreateElement);

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

const onContainerClick = (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery')) {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}" width="1280">
  `);

  instance.show();

    const onGalleryClickEsc = (event) => {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onGalleryClickEsc);
    }
  };

  document.addEventListener('keydown', onGalleryClickEsc);
};

galleryContainer.addEventListener('click', onContainerClick);