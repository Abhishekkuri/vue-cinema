<template>
  <div>
    <h1 class="view-heading">Your Top 5 Films</h1>
    <div class="search-container">
      <film-card
        v-for="film in $store.getters.getSearchedFilms"
        :key="film.imdbID"
        :film="film"
      />
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard.vue";
export default {
  name: "SearchPage",
  components: { FilmCard },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  justify-content: center;
  padding: 1rem 4rem 4rem;
}

@media screen and (max-width: 820px) {
  .search-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: stretch;
    justify-content: center;
    padding: 0rem 2rem 2rem;
  }
}
</style>
