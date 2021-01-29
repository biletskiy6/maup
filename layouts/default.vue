<template>
  <div>
    <TopBar />
    <TopHeader />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import TopHeader from '@/components/TopHeader'
export default {
  components: { TopHeader, TopBar, Footer },
  beforeMount() {
    this.setLayout('home')
  },
  head: {
    bodyAttrs: {
      class: 'home'
    }
  },
  methods: {
    ...mapMutations({
      setLayout: 'setLayout'
    })
  }
}
</script>
