<template>
  <div class="FeatureContainer">
    <div v-for="(item, index) in featureData" :key="index" class="grid-item" :class="item.class"
      @click="item.src ? openModal(item.modalSrc || '') : null">
      <template v-if="item.src">
        <img :src="item.src" :alt="`Image for ${item.type}`">
      </template>
      <template v-else-if="item.contentBlock">
        <h2 class="title">
          {{ item.contentBlock.title }}
        </h2>
        <div class="rich-text" v-html="item.contentBlock.htmlContent"></div>
      </template>
    </div>
    <Modal ref="modalRef">
      <img :src="selectedImage" :alt="`Selected image`">
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Modal from "@/components/Modal/index.vue"; // Adjusted import path if needed
import heroData from "@/assets/data/hero.json";

interface FeatureItem {
  type?: string; // Added to represent the type of the item (e.g., portrait, landscape, richText)
  src?: string;
  class?: string;
  modalSrc?: string;
  contentBlock?: {
    title: string;
    htmlContent: string;
  };
}

// Assuming featureData is an array of FeatureItem
const featureData: Ref<Array<FeatureItem>> = ref(heroData);

const modalRef: Ref<{ open: () => void } | null> = ref(null);
const selectedImage: Ref<string> = ref('');

function openModal(modalSrc: string) {
  selectedImage.value = modalSrc;
  modalRef.value?.open();
}
</script>

<style scoped lang="scss">
.FeatureContainer {
  margin: 100px auto 150px;
  display: grid;
  gap: 25px;
  max-height: 600px;

  // Default grid layout
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .grid-item {
    cursor: pointer;
    display: flex;
    overflow: hidden;

    :deep(img) {
      width: 100%;
      object-fit: cover;
    }

    // Specific styles for portrait and landscape
    &.portrait {
      grid-row: span 2;
    }

    &.landscape {
      &:first-of-type {
        grid-column: 2 / span 1;
        grid-row: 1;
      }

      &:nth-of-type(2) {
        grid-column: 2 / span 1;
        grid-row: 2;
      }
    }

    // Styles for text blocks
    &.text-block {
      grid-column: 3 / span 1;
      grid-row: 1 / span 2;
      overflow-y: scroll;
      text-align: left;
      display: flex;
      flex-direction: column;
      cursor: unset;

      .title {
        text-transform: uppercase;
        text-underline-position: below;
        text-decoration: underline;
        text-underline-offset: 18px;
        line-height: 2em;
        font-size: 26px;
        margin-bottom: 38px;
        font-family: "OpenSans-Light";
        letter-spacing: 1px;
        color: #fff;
      }

      :deep(.rich-text p) {
        font-size: 17px;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      :deep(.rich-text p strong) {
        font-weight: bold;
        color: #fff;
      }

      :deep(.rich-text .accent),
      :deep(.rich-text p.accent strong) {
        color: var(--color-accent);
      }

      &::-webkit-scrollbar {
        width: 8px;
        background: transparent;
        border-radius: 6px;

        &:track {
          background: transparent;
        }

        &:thumb {
          background-color: #555;

          &:hover {
            background: #666;
          }
        }
      }
    }
  }

  // Responsive adjustments
  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-height: 100%;

    .grid-item {
      order: 3;

      &:first-of-type {
        order: 2;
      }

      &.portrait {
        order: 1;
        grid-row: span 1;
      }

      &.landscape {
        order: 2; // Adjusted for clarity
        grid-column: unset;
        grid-row: unset;
      }

      &.text-block {
        order: 4;
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        overflow: auto;
      }
    }
  }
}
</style>