<template>
  <div class="FeatureContainer">
    <!-- TODO: ":class="item.type" can be conditional - if type="xyz" then class="whatever" -->
    <div v-for="(item, index) in featureData" :key="index" class="grid-item" :class="item.type"
      @click="item.src ? openModal(item.modalSrc || '') : null">
      <template v-if="item.src">
        <picture>
          <source :srcset="item.src" type="image/avif">
          <img :src="item.src" :alt="`Image for ${item.type}`">
        </picture>
      </template>
      <template v-else-if="item.contentBlock">
        <h2 class="title">
          {{ item.contentBlock.title }}
        </h2>
        <div class="richtext" v-html="item.contentBlock.htmlContent"></div>
      </template>
    </div>
    <Modal ref="modalRef">
      <picture>
        <source :srcset="selectedImage" type="image/avif">
        <img :src="selectedImage" :alt="`Selected image`" loading="lazy">
      </picture>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Modal from "@/components/Modal/index.vue";
import heroData from "@/assets/data/hero.json";

const featureData: FeatureItem[] = heroData as FeatureItem[];

const modalRef: Ref<{ open: () => void } | null> = ref(null);
const selectedImage: Ref<string> = ref('');

type TFeaturedItem = "landscape" | "portrait" | "richtext";

interface FeatureItem {
  type: TFeaturedItem;
  src?: string;
  modalSrc?: string;
  contentBlock?: {
    title: string;
    htmlContent: string;
  };
}

function openModal(modalSrc: string) {
  selectedImage.value = modalSrc;
  modalRef.value?.open();
}
</script>

<style scoped lang="scss">
.FeatureContainer {
  margin: 100px auto 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  max-height: 600px;

  .grid-item {
    cursor: pointer;
    display: flex;
    overflow: hidden;

    :deep(img) {
      width: 100%;
      object-fit: cover;
    }

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

    &.richtext {
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
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #555;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #666;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-height: 100%;

    .grid-item {
      order: 3;
    }

    .grid-item.portrait {
      order: 1;
      grid-row: span 1;
    }

    .grid-item.landscape:first-of-type {
      order: 2;
    }

    .grid-item.landscape:nth-of-type(2),
    .grid-item.landscape:first-of-type {
      order: 3;
      grid-column: unset;
      grid-row: unset;
    }

    .grid-item.text-block {
      order: 4;
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
      overflow: auto;
    }
  }
}
</style>