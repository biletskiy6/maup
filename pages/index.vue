<template>
  <div class="home-page">
    <Preloader />
    <header class="main-header">
      <AppHeader />
      <HeroSlider />
    </header>
    <StudyWithUs />
    <OnlineSchool />
    <EducationProcess />
    <Gallery />
    <EnterSchool />
    <AdditionalOpps />
    <Request />
    <Footer />
    <br v-for="item in 100" :key="item" />
  </div>
</template>

<script>
import Preloader from '@/components/Preloader'
import AppHeader from '@/components/AppHeader'
import HeroSlider from '@/components/HeroSlider'
import StudyWithUs from '@/components/sections/StudyWithUs'
import OnlineSchool from '@/components/sections/OnlineSchool'
import EducationProcess from '@/components/sections/EducationProcess'
import Footer from '@/components/Footer'
import Request from '@/components/sections/Request'
import AdditionalOpps from '@/components/sections/AdditionalOpps'
import Gallery from '@/components/sections/Gallery'
import EnterSchool from '@/components/sections/EnterSchool'

export default {
  components: {
    Preloader,
    EnterSchool,
    Gallery,
    AdditionalOpps,
    Request,
    Footer,
    EducationProcess,
    OnlineSchool,
    StudyWithUs,
    AppHeader,
    HeroSlider
  }
}
</script>
