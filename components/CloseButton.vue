<template>
  <button class="close-button">
    <span v-html="CloseIcon" class="close-button__icon"></span>
  </button>
</template>

<script>
import CloseIcon from '@/assets/icons/close.svg?raw'
export default {
  name: 'CloseButton',
  data() {
    return {
      CloseIcon
    }
  }
}
</script>
