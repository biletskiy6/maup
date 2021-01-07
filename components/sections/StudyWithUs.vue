<template>
  <section ref="studyWithUs" class="study-with-us">
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
      <h3 ref="title" class="section-title">
        Навчання <br />
        з нами - це
      </h3>
      <ul ref="studyProposals" class="study-proposals">
        <li
          ref="studyProposal"
          v-for="item in 4"
          :key="item"
          class="study-proposal"
        >
          <div v-html="icons['clock']" class="study-icon"></div>
          <p class="study-text">
            Навчання за індивідуальним графіком на своїй швидкості сприйняття
          </p>
        </li>
      </ul>
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
    const {
      studyWithUs,
      title,
      revealOverlay,
      revealImage,
      studyProposals,
      studyProposal
    } = this.$refs
    console.log(this.$refs)
    // eslint-disable-next-line no-unused-vars
    const action = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: studyWithUs,
          start: 500,
          markers: true
        }
      })
      .fromTo(title, { x: -120, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, 0)
      .fromTo(
        studyProposals,
        { scale: 0.95, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1 },
        0
      )
      .addLabel('studyProposals')
      .fromTo(
        studyProposal,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, stagger: { each: 0.1 } },
        'studyProposals-=0.9'
      )
      .fromTo(
        revealOverlay,
        { skewX: 30, scale: 1.5 },
        {
          skewX: 0,
          xPercent: 190,
          duration: 2,
          transformOrigin: '0% 100%',
          ease: 'power4.easeOut'
        },
        0
      )
      .fromTo(revealImage, { scale: 1.6 }, { scale: 1 }, 0)
  },
  data() {
    return {
      icons: { clock }
    }
  }
}
</script>
