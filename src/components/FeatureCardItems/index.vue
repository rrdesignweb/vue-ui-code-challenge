<template>
  <div class="CardsContainer">
    <h2>All the latest from AEG</h2>
    <div class="cards-container-inner">
      <CardComponent v-for="(item, index) in items" :key="index" :title="item.title" :description="item.description"
        :image="item.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import CardComponent from './card.vue';

// Example JSON data
const items = ref([
  { title: 'Laboris incididunt consequat excepteur amet ipsum in', description: 'Ipsum enim Lorem incididunt eiusmod ex. Eu duis id laboris qui nostrud sit Lorem fugiat minim ea consectetur est tempor. ', image: 'src/assets/component-02/image-01.jpg' },
  { title: 'Ex aliquip eiusmod sint nisi eu et qui in enim aliquip fugiat', description: 'Ipsum enim Lorem incididunt eiusmod ex. Eu duis id laboris qui nostrud sit Lorem fugiat minim ea consectetur est tempor.', image: 'src/assets/component-02/image-02.jpg' },
  { title: 'Esse ea Lorem eiusmod nulla', description: 'Ipsum enim Lorem incididunt eiusmod ex. Eu duis id laboris qui nostrud sit Lorem fugiat minim ea consectetur est tempor.', image: 'src/assets/component-02/image-03.jpg' },
]);

// onMounted(async () => {
//   items.value = await fetchData();
// });
</script>

<style scoped lang="scss">
.CardsContainer {
  display: block;
  margin-bottom: 100px;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 44px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .cards-container-inner {
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media(min-width:767px) {
      flex-direction: row;
      gap: 25px;
    }

    .card {
      width: 100%;

      @media(min-width:767px) {
        width: calc(100% / 3);
      }
    }
  }
}
</style>