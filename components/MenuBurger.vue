<template>
  <div @click="toggle" class="menu__burger" :class="{ active: toggled }">
    <div class="burger__open">
      <span></span>
      <span></span>
      <!--      <span></span>-->
    </div>
    <div class="burger__close">
      <span></span>
      <span></span>
    </div>
    <div class="burger__shape"></div>
    <div class="burger__outline"></div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'MenuBurger',
  model: {
    prop: 'toggled',
    event: 'toggle'
  },
  props: ['toggled'],
  data() {
    return {
      burgerOpenAnimation: false,
      burgerCloseAnimation: false
    }
  },
  methods: {
    toggle() {
      this.toggled ? this.animateIn() : this.animateOut()
      // this.$emit('toggle', !this.toggled)
    },
    animateIn() {
      if (!this.burgerCloseAnimation) {
        this.burgerCloseAnimation = true
        const tl = gsap.timeline()
        const span1 = '.burger__close span:first-child'
        const span2 = '.burger__close span:nth-child(2)'
        tl.to(
          '.mobile-menu',
          {
            y: '-100%',
            ease: 'Expo.easeInOut',
            duration: 2
          },
          0
        )
          .to(
            span1,
            {
              x: '-105%',
              y: 0,
              stagger: {
                each: 0.05
              }
            },
            0
          )
          .to(
            span2,
            {
              x: 0,
              y: '-105%',
              stagger: {
                each: 0.05
              }
            },
            0
          )
          .to(
            '.burger__open span',
            {
              x: 0,
              stagger: {
                each: 0.05
              }
            },
            0.3
          )
          .eventCallback('onComplete', () => {
            this.$emit('toggle', false)
            this.burgerOpenAnimation = false
            this.burgerCloseAnimation = false
          })
      }
    },
    animateOut() {
      if (!this.burgerOpenAnimation) {
        this.burgerOpenAnimation = true
        const tl = gsap.timeline()
        tl.to(
          '.mobile-menu',
          {
            y: 0,
            ease: 'Expo.easeInOut',
            duration: 2
          },
          0
        )
          .to(
            '.burger__open span',
            {
              x: '-105%',
              stagger: { each: 0.05 }
            },
            0
          )
          .to(
            '.burger__close span',
            {
              x: 0,
              y: 0,
              stagger: {
                each: 0.05
              }
            },
            0.3
          )
          .eventCallback('onComplete', () => {
            this.$emit('toggle', true)
          })
      }
    }
  }
}
</script>
