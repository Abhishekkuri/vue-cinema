export function fetchFeaturedFilms() {
  const response = Promise.all([
    fetchFilmById("tt0468569"),
    fetchFilmById("tt1160419"),
  ]);
  return response;
}

export async function fetchFilmsByTitle(title) {
  let response = await fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=6c3a2d45`
  )
    .then((success) => success.json())
    .catch((error) => {
      console.log(error);
    });
  return await response;
}

export async function fetchFilmById(id) {
  let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=6c3a2d45`)
    .then((success) => success.json())
    .catch((error) => {
      console.log(error);
    });
  return await response;
}
