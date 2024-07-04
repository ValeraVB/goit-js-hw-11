const apiKey = '44778442-2a526b123707daef27dd3bad3'; // Замініть на свій ключ доступу

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits; // Повертаємо масив знайдених зображень
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Повертаємо порожній масив у випадку помилки
  }
}
