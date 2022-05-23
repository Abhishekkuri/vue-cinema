<template>
  <div class="navigation-container">
    <nav>
      <router-link class="nav-link" to="/">Featured Films</router-link>
      <input
        type="text"
        v-model="title"
        placeholder="Search for a Movie"
        class="nav-input"
      />
      <button class="nav-button" @click="searchMovies">Search</button>
      <p class="error-message" v-if="searchedMovies.length === 0">
        Oops! try searching film with some other title.
      </p>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({ searchedMovies: "getSearchedFilms" }),
  },
  methods: {
    async searchMovies() {
      this.showErrorMessage = false;
      await this.$store.dispatch("fetchSearchedFilms", {
        title: this.title,
      });
      this.$router.replace(`/search/${this.title}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-container {
  background-color: $color-grey-light;
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.8rem;
    padding: 1rem;
    margin: 1rem;
    .nav-link {
      color: $color-black;
      border: 1px solid $color-white;
      text-decoration: none;
      padding: 1rem;
      margin-bottom: 4rem;
      border-radius: 10px;
      transition: 0.3s;
      &:hover {
        border: none;
        border: 1px solid $color-black;
        color: $color-grey-light;
        background-color: $color-primary;
        box-shadow: 0 8px 16px 0 $color-primary;
      }
    }
    .router-link-exact-active {
      color: $color-tirtiery;
      border-bottom: 1px solid $color-primary;
      border-radius: 0;
      border-top: none;
      border-left: 0;
      border-right: 0;
    }
    .nav-input {
      padding: 1rem;
      font-size: 1.5rem;
      border: 1px solid $color-tirtiery;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      &:hover {
        border: 1px solid $color-black;
        color: $color-grey-light;
        background-color: $color-primary;
        box-shadow: 0 8px 16px 0 $color-primary;
      }
    }
    .nav-button {
      padding: 1rem 2rem;
      font-size: 1.5rem;
      cursor: pointer;
      background-color: $color-grey-light;
      border: none;
      border-radius: 15px;
      margin-top: 1.5rem;
      transition: 0.3s;
      &:hover {
        border: 1px solid $color-black;
        color: $color-grey-light;
        background-color: $color-primary;
        box-shadow: 0 8px 16px 0 $color-primary;
      }
    }
  }
}

.error-message {
  color: red;
  font-size: 1rem;
  text-align: center;
}

@media screen and (max-width: 820px) {
  .navigation-container {
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      .nav-link {
        font-size: 1rem;
        padding: 1rem;
        margin: 0.5rem;
      }
      .nav-input {
        font-size: 1rem;
        padding: 1rem;
        margin: 0.5rem;
      }
      .nav-button {
        font-size: 1rem;
        padding: 0.5rem;
        margin: 0.5rem;
      }
    }
  }
}
</style>
