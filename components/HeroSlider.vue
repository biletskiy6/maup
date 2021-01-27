<template>
  <div class="hero-slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header js-splitme">
            <span class="word">Всеукраїнська онлайн <br /></span>
            <span class="word">школа Libera School</span>
            <!--            <span class="accent">-->
            <!--              <span class="word">для</span>-->
            <!--              <span class="word">9-11</span>-->
            <!--              <span class="word">класів!</span>-->
            <!--            </span>-->
          </h2>
          <h3 class="slider-title">
            Вступи та отримай знижку на навчання
          </h3>
          <div class="controls">
            <AppButton theme="primary">
              <span class="icon"
                ><i class="material-icons">arrow_forward</i></span
              >
              Розпочати навчання
            </AppButton>
            <!--            <AppButton theme="white">Матеріали для батьків</AppButton>-->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header">
            Триває набір <span class="accent">для 9-11 класів!</span>
          </h2>
          <h3 class="slider-title">
            Вступи та отримай знижку на навчання
          </h3>
          <div class="controls">
            <AppButton>
              <span class="icon"
                ><i class="material-icons">arrow_forward</i></span
              >
              Замовити консультацію
            </AppButton>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <h2 class="slider-header">
            <span class="word">Створи</span>
            <span class="word">свій</span>
            <span class="word">перший <br /></span>
            <span class="word">Telegram-бот</span>
          </h2>
          <div class="controls">
            <AppButton>
              <span v-html="arrowRight" class="icon"></span>
              Розпочати навчання
            </AppButton>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
    </swiper>
    <button v-html="arrowRight" class="swiper-button-prev"></button>
    <button class="swiper-button-next"></button>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import AppButton from './AppButton'
import arrowRight from '@/assets/icons/arrow-right.svg?raw'
export default {
  name: 'HeroSlider',
  title: '3D Cube effect',
  components: {
    AppButton
  },
  data() {
    return {
      arrowRight,
      swiperOption: {
        effect: 'cube',
        grabCursor: false,
        touchRatio: 0,
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
        on: {
          slideChange() {
            console.log(this)
            return this.realIndex === 1
              ? document.querySelector('.main-header').classList.add('dark')
              : document.querySelector('.main-header').classList.remove('dark')
          }
        },
        pagination: {
          el: '.hero-slider .swiper-pagination1',
          clickable: true
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
