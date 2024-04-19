<template>
  <div class="Cards">
    <h2>All the latest from AEG</h2>
    <div class="cards-container-inner">
      <Card v-for="(item, index) in json" :key="index" :title="item.title" :description="item.description"
        :image="item.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import Card from "./card.vue"
import cardsData from "@/assets/data/cards.json";

// Example JSON data
const json = ref(cardsData);

// onMounted(async () => {
//   items.value = await fetchData();
// });

</script>

<style scoped lang="scss">
.Cards {
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