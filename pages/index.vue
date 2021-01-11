<template>
  <div class="home-page">
    <Preloader />
    <header class="main-header">
      <AppHeader />
      <HeroSlider />
    </header>
    <StudyWithUs />
    <OnlineSchool />
    <DemoAccess />
    <Gallery />
    <EducationProcess />
    <EnterSchool />
    <AdditionalOpps />
    <Request />
    <Footer />
  </div>
</template>

<script>
import gsap from 'gsap'
import Preloader from '@/components/Preloader'
import AppHeader from '@/components/AppHeader'
import HeroSlider from '@/components/HeroSlider'
import StudyWithUs from '@/components/sections/StudyWithUs'
import OnlineSchool from '@/components/sections/OnlineSchool'
import Footer from '@/components/Footer'
import Request from '@/components/sections/Request'
import AdditionalOpps from '@/components/sections/AdditionalOpps'
import Gallery from '@/components/sections/Gallery'
import EnterSchool from '@/components/sections/EnterSchool'
import DemoAccess from '@/components/sections/DemoAccess'
import EducationProcess from '@/components/sections/EducationProcess'
export default {
  components: {
    EducationProcess,
    DemoAccess,
    Preloader,
    EnterSchool,
    Gallery,
    AdditionalOpps,
    Request,
    Footer,
    OnlineSchool,
    StudyWithUs,
    AppHeader,
    HeroSlider
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const tl = gsap.timeline({ delay: 2 })
      tl.fromTo(
        '.app-header .logo',
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0 },
        0
      )
        .fromTo(
          '.main-menu a',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0, stagger: { each: 0.05 } },
          0
        )
        .fromTo(
          '.slider-header',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
    }
  }
}
</script>
