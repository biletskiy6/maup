<template>
  <div class="our-team">
    <div class="section-title">Our Team</div>
    <swiper ref="team-slider" class="swiper" :options="swiperOptions">
      <swiper-slide v-for="item in 5" :key="item">
        <div class="our-team__content">
          <img src="~/assets/images/girl1.png" alt="" />
          <span v-html="SliderOverlay" class="our-team__overlay"></span>
          <div class="our-team__description">
            <h2>Ім'я Фамілія</h2>
            <p>
              Посада, за що відповідає приклад
            </p>
          </div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="our-team__pagination">
        <span v-html="SliderOverlay" alt=""></span>
        <button class="swiper-button-prev"></button>
        <button class="swiper-button-next"></button>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import SliderOverlay from '~/assets/icons/slider-overlay.svg?raw'
export default {
  name: 'OurTeam',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    const currentInstance = this
    return {
      SliderOverlay,
      swiperOptions: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
          clickable: true
        },
        on: {
          slideChange() {
            console.log(this.realIndex)
            currentInstance.currentIndex = this.activeIndex + 1
          }
        },
        navigation: {
          nextEl: '.our-team__pagination .swiper-button-next',
          prevEl: '.our-team__pagination .swiper-button-prev'
        }
      }
    }
  }
}
</script>
