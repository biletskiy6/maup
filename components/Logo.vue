<template>
  <div class="logo" v-html="logo"></div>
</template>

<script>
import logo from '~/assets/icons/logo.svg?raw'
export default {
  data() {
    return {
      logo
    }
  }
}
</script>
