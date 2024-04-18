<script setup lang="ts">
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bleed-bg">
    <p>&copy;{{ currentYear }} Code Challenge Enterprises</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: #fff;
  background-color: var(--vt-c-black-mute);
}

.bleed-bg {
  box-shadow: 0 100vmax 0 100vmax var(--vt-c-black-mute);
  clip-path: inset(0 -100vmax 0 -100vmax);
}
</style>
