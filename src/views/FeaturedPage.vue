<template>
  <div v-if="!loading">
    <h1 class="view-heading">Featured Films</h1>
    <div class="featured-container">
      <film-card
        v-for="film in $store.getters.getFeaturedFilms"
        :key="film.imdbID"
        :film="film"
      />
    </div>
  </div>

  <div v-else class="page-loader">
    <page-loader />
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard.vue";
import PageLoader from "@/components/PageLoader.vue";
export default {
  components: { FilmCard, PageLoader },
  data() {
    return {
      loading: true,
    };
  },
  beforeMount() {
    this.$store.dispatch("fetchFeaturedFilms");
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.featured-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;
  justify-content: center;
  padding: 1rem 4rem 4rem;
}
@media screen and (max-width: 820px) {
  .featured-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: stretch;
    justify-content: center;
    padding: 0rem 2rem 2rem;
  }
}
</style>
