<template>
  <section class="study-with-us">
    <div class="study-with-us__content">
      <div ref="reveal" class="reveal">
        <div ref="revealOverlay" class="reveal__overlay"></div>
        <img
          ref="revealImage"
          class="reveal__image"
          src="~@/assets/images/study-with-us.png"
          alt=""
        />
      </div>
      <h3 ref="title" class="section-title">Навчання з нами - це</h3>
      <div class="study-proposals">
        <div v-for="item in 4" :key="item" class="study-proposal">
          <div v-html="icons['clock']" class="study-icon"></div>
          <p class="study-text">
            Навчання за індивідуальним графіком на своїй швидкості сприйняття
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clock from '~/assets/icons/clock.svg?raw'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'StudyWithUs',
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const action = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: this.$refs.title,
          markers: true
        }
      })
      .fromTo(
        this.$refs.title,
        {
          x: -120,
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1
        },
        0
      )
      .fromTo(
        this.$refs.revealOverlay,
        {
          skewX: 30,
          scale: 1.5
        },
        {
          skewX: 0,
          xPercent: 190,
          transformOrigin: '0% 100%',
          ease: 'power4.easeOut'
        },
        0
      )
      .fromTo(
        this.$refs.revealImage,
        {
          scale: 1.6
        },
        {
          scale: 1
        },
        0
      )
  },
  data() {
    return {
      icons: { clock }
    }
  }
}
</script>
