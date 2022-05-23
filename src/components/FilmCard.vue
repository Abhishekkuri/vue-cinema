<template>
  <div class="card-container">
    <div class="card">
      <div class="poster">
        <img :src="film.Poster" alt="Poster Not Available" />
      </div>
      <div class="card-detail">
        <h4 class="card-detail-item">{{ film.Title }}</h4>
        <div class="card-detail-item">Type: {{ film.Type }}</div>
        <div class="card-detail-item">Rated: {{ film.Rated }}</div>
        <div card-detail-item>
          Genre:
          <span
            class="custom-span"
            v-for="genre in film.Genre.split(',')"
            :key="genre"
          >
            {{ genre }}
          </span>
        </div>
        <div class="card-detail-item">Year: {{ film.Year }}</div>
        <div class="card-detail-item">
          Actors:
          <span
            class="custom-span actor"
            v-for="actor in film.Actors.split(',')"
            :key="actor"
          >
            {{ actor }}
          </span>
        </div>
        <div class="card-detail-item">Directors: {{ film.Director }}</div>
        <div class="card-detail-item">Awards: {{ film.Awards }}</div>
        <p class="card-detail-item">
          Plot:
          <span>{{ filmPlot }}</span>
          <a
            class="read-more"
            v-if="readMoreActivated && film.Plot.length > 200"
            @click.prevent="toggleReadMore"
          >
            read more...
          </a>
          <a
            class="read-more"
            v-if="!readMoreActivated && film.Plot.length > 200"
            @click.prevent="toggleReadMore"
          >
            read less
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["film"],
  data() {
    return {
      readMoreActivated: this.film.Plot.length > 200,
    };
  },
  computed: {
    filmPlot() {
      return this.readMoreActivated
        ? this.film.Plot.slice(0, 200)
        : this.film.Plot;
    },
  },
  methods: {
    toggleReadMore() {
      this.readMoreActivated = !this.readMoreActivated;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: $color-secondary;
  &:hover {
    box-shadow: 0 8px 16px 0 $color-primary;
  }
  .poster {
    padding: 5px;
    height: 28rem;
    img {
      width: 100%;
      height: 28rem;
      border-radius: $color-grey-dark;
    }
  }
  .card-detail {
    padding: 5px;
    .card-detail-item {
      padding: 3px 0;
      .read-more {
        text-decoration: none;
        cursor: pointer;
        color: $color-secondary;
      }
    }
  }
  .custom-span {
    border: 1px solid $color-grey-dark;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 0 3px;
    border-radius: 5px;
  }
}

@media screen and (max-width: 820px) {
}
</style>
