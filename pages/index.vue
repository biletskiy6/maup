<template>
  <div class="home-page">
    <header class="main-header">
      <AppHeader />
      <HeroSlider />
    </header>
    <StudyWithUs />
    <OnlineSchool />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import HeroSlider from '@/components/HeroSlider'
import StudyWithUs from '@/components/sections/StudyWithUs'
import OnlineSchool from '@/components/sections/OnlineSchool'

export default {
  components: {
    OnlineSchool,
    StudyWithUs,
    AppHeader,
    HeroSlider
  }
}
</script>
