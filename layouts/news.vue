<template>
  <div class="news-layout">
    <Breadcrumbs />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  name: 'news',
  components: { Breadcrumbs, Footer }
}
</script>
