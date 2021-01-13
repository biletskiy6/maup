<template>
  <div class="app-header">
    <div class="top-line">
      <div class="top-line__left">
        <Logo />
        <ul v-if="false" class="main-menu">
          <li><a href="#study-with-us">Навчання з нами - це</a></li>
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
        <MenuBurger @handleBurgerClick="handleBurgerClick" />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import AppButton from './AppButton'
import MenuBurger from './MenuBurger'
import Logo from '@/components/Logo'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)
export default {
  name: 'AppHeader',
  components: {
    MenuBurger,
    AppButton,
    Logo
  },
  mounted() {
    this.pinHeader()
    this.scrollToSection()
  },
  methods: {
    handleBurgerClick() {
      const tl = gsap.timeline()
      tl.to('.burger__open span', {
        x: '-105%',
        stagger: {
          each: 0.05
        }
      }).to('.burger__close span', {
        x: 0,
        y: 0,
        stagger: {
          each: 0.05
        }
      })
    },
    pinHeader() {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'app-header--scrolled',
          targets: '.app-header'
        }
      })
    },
    scrollToSection() {
      gsap.utils.toArray('.main-menu a').forEach(function(a) {
        a.addEventListener('click', function(e) {
          e.preventDefault()
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: e.target.getAttribute('href'),
              offsetY: 100
            }
          })
        })
      })
    }
  }
}
</script>
