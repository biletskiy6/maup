<template>
  <transition name="fade">
    <section v-if="embedYoutube" class="embed-youtube">
      <CloseButton @click.native="handleCloseEmbed" />
      <youtube
        class="video"
        @ready="ready"
        :video-id="videoId"
        player-width="100%"
        player-height="100%"
        :player-vars="{ autoplay: 0 }"
      ></youtube>
    </section>
  </transition>
</template>

<script>
import CloseButton from '@/components/CloseButton'
export default {
  name: 'EmbedYoutube',
  components: { CloseButton },
  props: ['embedYoutube', 'videoId', 'trailerName', 'readyState'],
  methods: {
    ready(event) {
      // this.player = event.target
      this.$emit('handleReadyVideoTrailer')
      // this.readyState = true;
    },
    handleCloseEmbed() {
      this.$emit('handleCloseVideoTrailer')
      this.$modal.hide('youtube')
    }
  }
}
</script>
