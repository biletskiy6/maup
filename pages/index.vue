<template>
  <div class="home-page">
    <Preloader v-if="false" />
    <AppModal name="loyalty">
      <LoyaltyModal />
    </AppModal>
    <header class="main-header">
      <TopBar />
      <AppHeader />
      <client-only><HeroSlider /></client-only>
      <MobileMenu />
      <MenuBurger v-if="false" v-model="isMenuOpened" />
    </header>
    <div v-if="false" class="common-section">
      <h2 class="common-section__header section-title">
        Замовити консультацію
      </h2>
      <p class="common-section__description">
        Хочете отримати консультацію, звертайтесь! Ми завжди на зв'язку!
      </p>
      <form @submit.prevent>
        <AppInput
          v-model="name"
          name="name"
          type="text"
          placeholder="Name"
          :icon="UserIcon"
        />
        <CloseButton />
        <AppCheckbox v-model="agree" />
        <AppButton
          @click="$modal.show('loyalty')"
          type="submit"
          theme="primary"
        >
          Відправити
        </AppButton>
      </form>
    </div>
    <StudyWithUs />
    <!--    <OnlineSchool />-->
    <!--    <DemoAccess />-->
    <!--    <Gallery />-->
    <!--    <EducationProcess />-->
    <!--    <EnterSchool v-if="false" />-->
    <!--    <AdditionalOpps />-->
    <!--    <Request />-->
    <Footer />
  </div>
</template>

<script>
import gsap from 'gsap'
import Splitter from 'split-html-to-chars'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import Preloader from '@/components/Preloader'
import AppHeader from '@/components/AppHeader'
import HeroSlider from '@/components/HeroSlider'
import UserIcon from '@/assets/icons/user.svg?raw'
import AppButton from '@/components/AppButton'
import StudyWithUs from '@/components/sections/StudyWithUs'
// import OnlineSchool from '@/components/sections/OnlineSchool'
// import Request from '@/components/sections/Request'
// import AdditionalOpps from '@/components/sections/AdditionalOpps'
// import Gallery from '@/components/sections/Gallery'
// import EnterSchool from '@/components/sections/EnterSchool'
// import DemoAccess from '@/components/sections/DemoAccess'
// import EducationProcess from '@/components/sections/EducationProcess'
import AppModal from '@/components/AppModal'
import Footer from '@/components/Footer'
import AppInput from '@/components/AppInput'
import CloseButton from '@/components/CloseButton'
import AppCheckbox from '@/components/AppCheckbox'
import LoyaltyModal from '@/components/modals/LoyaltyModal'
import MobileMenu from '@/components/MobileMenu'
import MenuBurger from '@/components/MenuBurger'
import TopBar from '@/components/TopBar'
gsap.registerPlugin(CSSRulePlugin)
export default {
  components: {
    TopBar,
    MobileMenu,
    MenuBurger,
    LoyaltyModal,
    AppCheckbox,
    CloseButton,
    AppInput,
    AppModal,
    AppButton,
    // EducationProcess,
    // DemoAccess,
    Preloader,
    // EnterSchool,
    // Gallery,
    // AdditionalOpps,
    // Request,
    Footer,
    // OnlineSchool,
    StudyWithUs,
    AppHeader,
    HeroSlider
  },
  data() {
    return {
      name: '',
      UserIcon,
      agree: false,
      isMenuOpened: false
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    // this.splitText()
    // const tl = gsap.timeline({ delay: 1, paused: false })
    // tl.add(this.animatePreloader())
    // tl.add(this.animateTopLine())
    // tl.add(this.animateSlider())
  },
  methods: {
    splitText() {
      const heroTitle = document.querySelectorAll('.js-splitme')
      ;[].forEach.call(heroTitle, function(el) {
        // outerHTML, thats *important*, no direct text nodes should be in parsed HTML
        el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>')
      })
      return heroTitle
    },
    animatePreloader() {
      const tl = gsap.timeline({ delay: 1, paused: false })
      const cont = { val: 0 }
      const newVal = 100
      const firstOverlayAfter = CSSRulePlugin.getRule(
        '.preloader .overlay.first:after'
      )
      const secondOverlayAfter = CSSRulePlugin.getRule(
        '.preloader .overlay.second:after'
      )
      tl.to(cont, {
        val: newVal,
        roundProps: 'val',
        duration: 2,
        onUpdate() {
          document.querySelector('.counter__number').innerHTML = cont.val
        }
      })
        .addLabel('counterFinished')
        // eslint-disable-next-line no-unreachable
        .to(
          [firstOverlayAfter, secondOverlayAfter],
          {
            height: '0%',
            duration: 1
          },
          'counterFinished'
        )
        .fromTo(
          '.preloader .counter',
          {
            y: 0,
            autoAlpha: 1
          },
          {
            y: -20,
            autoAlpha: 0
          },
          'counterFinished+=0.5'
        )
        .fromTo(
          '.preloader .first',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.5 },
          'counterFinished'
        )
        .fromTo(
          '.preloader .second',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.7 },
          'counterFinished'
        )
        .fromTo(
          '.preloader .third',
          { y: 0 },
          { y: '-100%', ease: 'expo.easeInOut', delay: 0.9 },
          'counterFinished'
        )
      // .to('.preloader', {
      //   autoAlpha: 0
      // })
      // return tl
    },
    animateTopLine() {
      const tl = gsap.timeline()
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
          '.top-line__right',
          {
            autoAlpha: 0,
            x: 20
          },
          {
            autoAlpha: 1,
            x: 0
          },
          0
        )
      return tl
    },
    animateSlider() {
      const tl = gsap.timeline()
      tl.fromTo(
        '.hero-slider .letter',
        {
          autoAlpha: 0,
          y: -20
        },
        { autoAlpha: 1, y: 0, stagger: { each: 0.03 } },
        0
      )
        .fromTo(
          '.slider-title',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          '.slider-subtitle',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
        .fromTo(
          '.hero-slider .controls',
          {
            autoAlpha: 0,
            y: -20
          },
          { autoAlpha: 1, y: 0 },
          0
        )
      return tl
    }
  }
}
</script>
