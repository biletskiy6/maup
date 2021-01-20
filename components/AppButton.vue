<template>
  <button
    class="v-btn hover"
    :class="[themes[theme], sizes[size]]"
    @click="handleClick"
  >
    <span><slot /></span>
    <span class="ripple"></span>
  </button>
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
  mounted() {
    // const animatedClassName = 'animated'
    // const elements = document.querySelectorAll('.hover')
    // const elementsSpan = []
    // elements.forEach((element, index) => {
    //   // let addAnimation = false
    //   if (!elementsSpan[index]) {
    //     elementsSpan[index] = element.querySelector('.ripple')
    //     element.addEventListener('mouseover', (e) => {
    //       elementsSpan[index].style.left = e.pageX - element.offsetLeft + 'px'
    //       elementsSpan[index].style.top = e.pageY - element.offsetTop + 'px'
    //     })
    //     element.addEventListener('mouseout', (e) => {
    //       elementsSpan[index].style.left = e.pageX - element.offsetLeft + 'px'
    //       elementsSpan[index].style.top = e.pageY - element.offsetTop + 'px'
    //     })
    //   }
    // })
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
