<script setup lang="ts">
import Hero from "./components/Hero/index.vue"
import Cards from "./components/Cards/index.vue"
import Footer from "./components/Footer/index.vue"

</script>

<template>
  <!-- Accessibility -->
  <header hidden>
    <h1>Welcome to the code challenge</h1>
  </header>
  <main>
    <Hero />
    <Cards />
  </main>
  <Footer />
</template>


