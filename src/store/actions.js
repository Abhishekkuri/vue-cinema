import {
  fetchFilmsByTitle,
  fetchFeaturedFilms,
  fetchFilmById,
} from "@/api/api";

export default {
  fetchFeaturedFilms: async ({ commit }) => {
    const featuredFilms = await fetchFeaturedFilms();
    return commit("setFeaturedFilms", { featuredFilms });
  },
  fetchSearchedFilms: async ({ commit, getters }, { title }) => {
    const searchedFilms = await fetchFilmsByTitle(title);
    if (getters.getSearchedFilms.length !== 0) commit("resetFilms");
    if (searchedFilms.Response === "True") {
      if (searchedFilms.Search.length >= 5) {
        searchedFilms.Search = searchedFilms.Search.slice(5);
      }
      await searchedFilms.Search.forEach(async (film) => {
        let f = await fetchFilmById(film.imdbID);
        commit("addFilms", { film: f });
      });
    } else {
      commit("resetFilms");
    }
  },
};
