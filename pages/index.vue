<template>
  <div class="home-page">
    <header class="main-header">
      <AppHeader />
      <HeroSlider />
    </header>
    <StudyWithUs />
    <OnlineSchool />
    <EducationProcess />
    <br v-for="item in 100" :key="item" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import HeroSlider from '@/components/HeroSlider'
import StudyWithUs from '@/components/sections/StudyWithUs'
import OnlineSchool from '@/components/sections/OnlineSchool'
import EducationProcess from '@/components/sections/EducationProcess'

export default {
  components: {
    EducationProcess,
    OnlineSchool,
    StudyWithUs,
    AppHeader,
    HeroSlider
  }
}
</script>
