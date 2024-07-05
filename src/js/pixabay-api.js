const apiKey = '44778442-2a526b123707daef27dd3bad3'; // ключ доступу

export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data.hits; // Повертаємо масив знайдених зображень
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return []; // Повертаємо порожній масив у випадку помилки
    });
}
