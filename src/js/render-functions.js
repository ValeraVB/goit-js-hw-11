import iziToast from 'izitoast'; // Підключаємо бібліотеку повідомлень
import 'izitoast/dist/css/iziToast.min.css'; // Додатковий імпорт стилів

export function clearGallery() {
  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = '';
}

export function displayErrorToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topCenter',
  });
}

export function displayNoResultsMessage() {
  iziToast.info({
    title: 'Info',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topCenter',
  });
}
