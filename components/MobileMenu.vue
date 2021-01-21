<template>
  <div class="mobile-menu">
    <div class="mobile-menu__top">
      <Socials layout="second" color="grey" />
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script>
import Socials from '@/components/Socials'
import LanguageSwitcher from '@/components/LanguageSwitcher'
export default {
  name: 'MobileMenu',
  components: { LanguageSwitcher, Socials },
  data() {
    return {
      isMenuOpened: false
    }
  },
  methods: {
    handleBurgerClick() {}
  }
}
</script>
