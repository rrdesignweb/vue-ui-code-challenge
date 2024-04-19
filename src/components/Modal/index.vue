<!-- Chose to create a custom modal rather that bringing in a UI library
as it would be overkill for this simple use case -->
<template>
  <div class="Dialog" v-if="isVisible" @click.self="close">
    <div role="dialog" class="dialog-content">
      <div role="button" @click="close" class="close-button" aria-label="Close Image Modal">
        <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);

function open() {
  isVisible.value = true;
}

function close() {
  isVisible.value = false;
}

defineExpose({ open, close });
</script>

<style scoped lang="scss">
.Dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease-out forwards;

  .dialog-content {
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeInScaleUp 0.5s ease-out forwards;

    :deep(img) {
      max-width: 85vw;
      max-height: 85vh;
    }

    .close-button {
      background: #fff;
      border-radius: 50%;
      position: absolute;
      top: -15px;
      right: -15px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);

      .close-icon {
        width: 24px;
        height: 24px;
        fill: var(--color-background-soft);
        transition: all 0.25s ease-in-out;
      }

      &:hover,
      &:focus {
        background: var(--color-background-soft);

        .close-icon {
          fill: #fff;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInScaleUp {
  from {
    opacity: 0;
    transform: scale(0.25);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>