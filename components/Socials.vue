<template>
  <div class="socials-container">
    <label for="socials">Соціальні мережі:</label>
    <ul id="socials" class="socials">
      <li><a v-html="InstagramIcon" href="#"></a></li>
      <li><a v-html="YoutubeIcon" href="#"></a></li>
      <li><a v-html="FacebookIcon" href="#"></a></li>
    </ul>
  </div>
</template>

<script>
import InstagramIcon from '@/assets/icons/instagram.svg?raw'
import YoutubeIcon from '@/assets/icons/youtube.svg?raw'
import FacebookIcon from '@/assets/icons/facebook.svg?raw'
export default {
  name: 'Socials',
  data() {
    return {
      InstagramIcon,
      YoutubeIcon,
      FacebookIcon
    }
  }
}
</script>
