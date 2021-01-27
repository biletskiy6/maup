<template>
  <div class="top-bar">
    <Socials layout="second" />
    <ul class="language-switcher">
      <li><a class="active" href="#">Укр</a></li>
      <li><a href="#">Eng</a></li>
    </ul>
  </div>
</template>

<script>
import Socials from '@/components/Socials'
export default {
  components: {
    Socials
  },
  name: 'TopBar'
}
</script>
