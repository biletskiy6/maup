<template>
  <nuxt-link
    class="v-btn"
    :class="[themes[theme], sizes[size]]"
    :to="to"
    @click.native="handleClick"
  >
    <span><slot /></span>
    <div class="liquid"></div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    theme: {
      required: false,
      type: String,
      default: 'primary'
    },
    size: {
      required: false,
      type: String,
      default: 'default'
    },
    to: {
      required: false,
      type: Object,
      default: () => ({
        name: 'index'
      })
    }
  },
  data: () => ({
    themes: {
      primary: 'primary',
      white: 'white',
      outlineWhite: 'outline-white',
      error: 'error'
    },
    sizes: {
      default: 'v-size--default',
      small: 'v-size--small',
      large: 'v-size--large'
    }
  }),
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
