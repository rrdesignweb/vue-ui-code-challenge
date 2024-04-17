<script setup lang="ts">
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>
  <main>
    <
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  .wrapper {
    @media (min-width: 1024px) {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    .logo {
      margin: 0 2rem 0 0;
    }
  }
}


</style>
