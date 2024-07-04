import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  displayErrorToast,
  displayNoResultsMessage,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox'; // Імпорт SimpleLightbox

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const gallery = document.querySelector('#gallery');

// Ініціалізуємо SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    displayErrorToast('Please enter a search term');
    return;
  }

  clearGallery();

  try {
    const images = await fetchImages(searchTerm);

    if (images.length === 0) {
      displayNoResultsMessage();
      return;
    }

    images.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      galleryItem.innerHTML = `
                <a href="${image.largeImageURL}" data-lightbox="image">
                    <img src="${image.webformatURL}" alt="${image.tags}">
                    <div class="details">
                        <p>Likes: ${image.likes}</p>
                        <p>Views: ${image.views}</p>
                        <p>Comments: ${image.comments}</p>
                        <p>Downloads: ${image.downloads}</p>
                    </div>
                </a>
            `;
      gallery.appendChild(galleryItem);
    });

    // Оновлюємо SimpleLightbox після додавання нових елементів
    lightbox.refresh();
  } catch (error) {
    console.error('Error searching images:', error);
    displayErrorToast('Failed to fetch images. Please try again later.');
  }
});
