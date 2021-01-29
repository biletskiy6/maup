<template>
  <transition name="fade">
    <section v-if="embedYoutube" class="embed-youtube">
      <!--      <div v-if="readyState" class="embed-top-panel">-->
      <!--        <button @click="handleCloseEmbed" class="pick-movie-close static">-->
      <!--          <svg-->
      <!--            xmlns="http://www.w3.org/2000/svg"-->
      <!--            width="24"-->
      <!--            height="24"-->
      <!--            viewBox="0 0 24 24"-->
      <!--          >-->
      <!--            <path-->
      <!--              class="a"-->
      <!--              d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"-->
      <!--            />-->
      <!--            <path class="b" d="M0,0H24V24H0Z" />-->
      <!--          </svg>-->
      <!--        </button>-->
      <!--      </div>-->
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
export default {
  name: 'EmbedYoutube',
  props: ['embedYoutube', 'videoId', 'trailerName', 'readyState'],
  methods: {
    ready(event) {
      // this.player = event.target
      this.$emit('handleReadyVideoTrailer')
      // this.readyState = true;
    },
    handleCloseEmbed() {
      this.$emit('handleCloseVideoTrailer')
    }
  }
}
</script>
