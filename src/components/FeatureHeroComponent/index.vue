<template>
  <div class="FeatureContainer">
    <div v-for="(item, type) in featureData" :key="type" class="grid-item" :class="item.class"
      @click="item.src ? openModal(item.modalSrc || '') : null">
      <template v-if="item.src">
        <img :src="item.src" :alt="`Image for ${type}`">
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
import Modal from "./modal.vue";

interface FeatureItem {
  src?: string;
  class?: string;
  modalSrc?: string | undefined;
  contentBlock?: {
    title?: string;
    htmlContent?: string;
  }
}

interface FeatureData {
  [key: string]: FeatureItem;
}

const modalRef: Ref<{ open: () => void } | null> = ref(null);
const selectedImage: Ref<string> = ref('');

const featureData: Ref<FeatureData> = ref({
  portrait: { src: 'src/assets/component-01/image-01.jpg', class: 'portrait', modalSrc: 'src/assets/component-01/image-01@2x.jpg' },
  landscape1: { src: 'src/assets/component-01/image-03.jpg', class: 'landscape', modalSrc: 'src/assets/component-01/image-03@2x.jpg' },
  landscape2: { src: 'src/assets/component-01/image-02.jpg', class: 'landscape', modalSrc: 'src/assets/component-01/image-02@2x.jpg' },
  richText: {
    class: 'text-block', contentBlock: {
      title: "Answer you body's needs", htmlContent: "<p>Ullamco officia voluptate nulla veniam laborum dolor.Laborum qui elit anim aute cillum labore. Sunt do labore ex non deserunt reprehenderit voluptate nulla.Officia nisi et occaecat aute nostrud amet laboris adipisicing eu culpa.Voluptate pariatur est mollit adipisicing ex culpa ut ullamco esse sit culpa labore nostrud.Nostrud incididunt eu sint ea fugiat incididunt esse consequat id labore. Sunt deserunt quis labore ipsum dolore fugiat.</p><p class='accent'><strong>BE MINDFUL</strong></p><p><strong>Id Lorem nulla commodo ipsum qui laboris laboris est incididunt elit velit eiusmod elit enim. Sunt in fugiat exercitation et.</strong></p>"
    }
  }
});

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
  gap: 25px;
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

      :deep(.rich-text .accent),  :deep(.rich-text p.accent strong) {
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

  // Responsive adjustments
  @media (min-width: 320px) and (max-width:767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    max-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

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

    .grid-item.landscape:nth-of-type(2) {
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