<template>
  <div class="app-header">
    <div class="top-line">
      <div class="top-line__content">
        <div class="top-line__left">
          <Logo />
          <ul class="main-menu">
            <li
              v-for="item in menuItems"
              :id="`menu__${item.anchor}`"
              :key="item.id"
            >
              <a class="link-style" :href="`#${item.anchor}`">{{
                item.name
              }}</a>
            </li>
          </ul>
        </div>
        <div class="top-line__right">
          <div id="menu__consult">
            <a class="link-style" href="#consult">Зв'язатися з нами</a>
          </div>

          <AppButton theme="white" size="small">Вхід</AppButton>
          <MenuBurger />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import AppButton from './AppButton'
import MenuBurger from './MenuBurger'
import Logo from '@/components/Logo'
import { menuItems } from '@/setup'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(CSSRulePlugin)
export default {
  name: 'AppHeader',
  components: {
    MenuBurger,
    AppButton,
    Logo
  },
  data() {
    return {
      menuItems,
      isOpen: false
    }
  },
  mounted() {
    console.log('mounted')
    this.handleDetectActiveNav()
    this.pinHeader()
    this.scrollToSection()
  },
  methods: {
    handleDetectActiveNav() {
      gsap.utils.toArray('section').forEach((section) => {
        const activeSection = section.id

        console.log(activeSection)
        const menuitem = 'menu__'.concat(activeSection)
        const menulink = document.getElementById(menuitem).querySelector('a')
        gsap.timeline({
          id: 'Nav Animation',
          defaults: { duration: 0.5 },
          scrollTrigger: {
            // markers: true,
            trigger: section,
            start: 'top 200px',
            end: 'bottom 0%',
            toggleActions: 'play reverse play reverse',
            onToggle: (self) =>
              self.isActive
                ? menulink.classList.add('highlighted')
                : menulink.classList.remove('highlighted')
          }
        })
        // const menuitem = 'menu__'.concat(activeSection);
      })
    },
    handleBurgerClick() {
      // const tl = gsap.timeline()
      // tl.to('.burger__open span', {
      //   x: '-105%',
      //   stagger: {
      //     each: 0.05
      //   }
      // }).to('.burger__close span', {
      //   x: 0,
      //   y: 0,
      //   stagger: {
      //     each: 0.05
      //   }
      // })
      // this.$modal.show('auth')
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
      gsap.utils.toArray('.link-style').forEach(function(a) {
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
