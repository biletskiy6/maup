<template>
  <section class="study-with-us">
    <div class="container">
      <div class="study-with-us__content">
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
          scrub: true
        }
      })
      .to(this.$refs.title, {
        x: 400
      })
  },
  data() {
    return {
      icons: { clock }
    }
  }
}
</script>
