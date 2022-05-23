<template>
  <div class="main-container">
    <page-header class="page-header"></page-header>
    <navigation-bar class="navigation-bar"> </navigation-bar>
    <transition name="fade" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <page-footer class="page-footer" />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
    NavigationBar,
  },
};
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  margin: 0px !important;
  padding: 0 !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.view-heading {
  display: block;
  text-align: center;
  font-size: 3rem;
  color: $color-primary;
  padding-top: 1rem;
  text-transform: uppercase;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.page-loader {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>

<style lang="scss" scoped>
.main-container {
  width: 100vw;
  min-height: 100vh;
  background-color: $color-white;
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  grid-template-rows: 10rem 4fr 5rem;
  .page-header {
    grid-column: 1/3;
  }
  .navigation-bar {
    grid-column: 1/2;
  }
  .router-view {
    grid-column: 2/3;
  }
  .page-footer {
    grid-column: 1/3;
  }
}

@media screen and (max-width: 820px) {
  .view-heading {
    font-size: 2rem;
    padding-top: 0.5rem;
  }

  .main-container {
    width: 100vw;
    min-height: 100vh;
    background-color: $color-white;
    display: grid;
    grid-template-rows: 10rem 10rem 4fr 5rem;
  }
  .page-header {
    grid-row: 1/2;
    grid-column: 1/3 !important;
  }
  .navigation-bar {
    grid-row: 2/3;
    grid-column: 1/3 !important;
  }
  .router-view {
    grid-row: 3/4;
    grid-column: 1/3 !important;
  }
  .page-footer {
    grid-row: 4/5;
    grid-column: 1/3 !important;
  }
}
</style>
