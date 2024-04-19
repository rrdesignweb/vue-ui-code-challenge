<template>
  <div class="Card">
    <picture>
      <source :srcset="image" type="image/avif">
      <img :src="image" alt="Card Image" class="card-image" loading="lazy" />
    </picture>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a href="#" class="read-more" @click="logEvent">READ MORE</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
  image: string; // Fallback image format 
  imageAvif?: string; // AVIF format image, not directly used but here for reference
}>();

const logEvent = (event: MouseEvent) => {
  console.log('Read more clicked', event);
  event.preventDefault(); // Prevents the default action of the anchor tag
};


</script>

<style scoped lang="scss">
.Card {
  .card-image {
    width: 100%;
    object-fit: cover;
    border-bottom: 5px solid var(--color-accent);
  }

  .card-content {

    h3,
    p {
      margin: 12px 0;
    }

    h3 {
      color: #fff;
      font-family: "OpenSans-Regular";
    }

    .read-more {
      color: #fff;
      text-decoration: underline;
      text-transform: uppercase;
      text-underline-offset: 10px;
      text-decoration-color: var(--color-accent);
      font-size: 16px;
      font-family: "OpenSans-Regular";

      &:hover,
      &:focus {
        color: var(--color-accent);
      }
    }
  }
}
</style>