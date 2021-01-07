<template>
  <div class="app-header">
    <div class="top-line">
      <div class="top-line__left">
        <Logo />
        <ul class="main-menu">
          <li><a href="#">Навчання з нами - це</a></li>
          <li><a href="#">Демо доступ</a></li>
          <li><a href="#">Вступ до школи</a></li>
          <li><a href="#">Вартість навчання</a></li>
        </ul>
      </div>

      <div class="top-line__right">
        <AppButton theme="white" size="small">Вхід</AppButton>
        <ul class="language-switcher">
          <li><a class="active" href="#">Ukr</a></li>
          <li><a href="#">Eng</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AppButton from './AppButton'
import Logo from '@/components/Logo'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'AppHeader',
  components: {
    AppButton,
    Logo
  },
  mounted() {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {
        className: 'app-header--scrolled',
        targets: '.app-header'
      }
    })
  }
}
</script>
