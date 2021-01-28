<template>
  <div class="our-team">
    <div class="section-title">
      Наша <br />
      команда
    </div>
    <swiper ref="team-slider" class="swiper" :options="swiperOptions">
      <swiper-slide v-for="item in 5" :key="item">
        <div class="our-team__content">
          <img src="~/assets/images/girl1.png" alt="" />
          <span class="our-team__overlay" v-html="SliderOverlay"></span>
          <div class="our-team__description">
            <h2>
              Ім'я <br />
              Фамілія
            </h2>
            <p>
              Посада, за що відповідає приклад
            </p>
          </div>
          <span
            class="our-team__overlay-right"
            alt=""
            v-html="SliderOverlayRight"
          ></span>
        </div>
      </swiper-slide>
      <div slot="pagination" class="our-team__pagination">
        <button class="swiper-button-prev" v-html="arrowRight"></button>
        <button class="swiper-button-next" v-html="arrowRight"></button>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import arrowRight from '~/assets/icons/arrow-right.svg?raw'
// import 'swiper/css/swiper.css'
import SliderOverlay from '~/assets/icons/slider-overlay.svg?raw'
import SliderOverlayRight from '~/assets/icons/slider-overlay-right.svg?raw'
export default {
  name: 'OurTeam',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    const currentInstance = this
    return {
      arrowRight,
      SliderOverlay,
      SliderOverlayRight,
      swiperOptions: {
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        breakpoints: {
          320: {
            slidesPerView: 1.5
          },
          992: {
            slidesPerView: 2.5
          },
          1366: {
            slidesPerView: 3.5
          }
        },
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
  },
  mounted() {
    const ctx = this
    window.addEventListener('resize', function(e) {
      const width = this.innerWidth
      if (width < 1100) {
        ctx.swiperOptions.slidesPerView = 1
      }
      console.log(this)
    })
  }
}
</script>
