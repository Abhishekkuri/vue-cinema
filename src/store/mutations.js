export default {
  resetFilms: (state) => {
    state.films = [];
  },
  addFilms: (state, { film }) => {
    if (!state.films.some((storedFilm) => storedFilm.imdbID === film.imdbID)) {
      state.films.push(film);
    }
  },
  setFeaturedFilms: (state, { featuredFilms }) => {
    state.featuredFilms = featuredFilms;
  },
};
