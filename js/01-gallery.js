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
  const instance = basicLightbox.create(
    `<img src="${source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
 
};

galleryContainer.addEventListener('click', onContainerClick);