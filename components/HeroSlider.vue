<template>
  <div class="hero-slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header">
            Онлайн школа <span class="accent">для 9-11 класів!</span>
          </h2>
          <h3 class="slider-title">
            Ми навчаємо дистанційно!
          </h3>
          <p class="slider-subtitle">
            Ви отримаєте свідоцтва про повну загальну середню освіту
          </p>
          <div class="slide-controls">
            <AppButton>
              <span class="icon"
                ><i class="material-icons">arrow_forward</i></span
              >
              Розпочати навчання
            </AppButton>
            <AppButton theme="white">Матеріали для батьків</AppButton>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <button class="swiper-button-prev"></button>
    <button class="swiper-button-next"></button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import AppButton from './AppButton'
export default {
  name: 'HeroSlider',
  title: '3D Cube effect',
  components: {
    AppButton,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'cube',
        grabCursor: true,
        direction: 'horizontal',
        paginationClickable: true,
        mousewheel: false,
        speed: 600,
        autoHeight: true,
        cubeEffect: {
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.hero-slider .swiper-button-next',
          prevEl: '.hero-slider .swiper-button-prev'
        }
      }
    }
  }
}
</script>
