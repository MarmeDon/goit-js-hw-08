import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
   gallery: document.querySelector('.gallery'),
}

const createGalleryItemsMarkUp = galleryItems.reduce((acc, { description, original, preview }) => {
   return acc + `<a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`;
}, "")


refs.gallery.innerHTML = createGalleryItemsMarkUp;

let gallery = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250
});
gallery.on('show.simplelightbox');