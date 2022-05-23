<template>
  <div class="loader hypnotic"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hypnotic {
  width: 56px;
  height: 56px;
  border: 2.2px solid $color-primary;
  display: grid;
  animation: hypnotic-q3fddx 4s infinite linear;
}

.hypnotic::before,
.hypnotic::after {
  content: "";
  grid-area: 1/1;
  margin: auto;
  width: 70.7%;
  height: 70.7%;
  border: 2.2px solid $color-primary;
  animation: inherit;
}

.hypnotic::after {
  width: 50%;
  height: 50%;
  border: 2.2px solid $color-primary;
  animation-duration: 2s;
}

@keyframes hypnotic-q3fddx {
  100% {
    transform: rotate(1turn);
  }
}
</style>
