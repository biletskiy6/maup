<template>
  <div class="online-school">
    <div class="online-school__content">
      <div class="online-school__left">
        <h2 class="section-title inverse">
          Онлайн школа Libera School
        </h2>
        <p>
          Libera School – це повноцінна школа у вас вдома. З приходом інтернету
          відстані перестають бути перешкодою, а межі між онлайн та реальним
          життям поступово стираються.
        </p>
        <p>
          Ми руйнуємо стереотипи відносин вчителів та учнів. Діти не бояться
          звернутись за допомогою або поясненням до Вчителя.
        </p>
        <p>
          У сучасному світі навчання вже не вимагає від нас обов'язкової
          присутності в шкільному класі, адже тепер займатися в школі можна
          онлайн.
        </p>
        <div class="controls">
          <AppButton theme="white">
            Замовити консультацію
          </AppButton>
        </div>
      </div>
      <div class="online-school__right">
        <img src="~@/assets/images/online-school.png" alt="" />
        <div class="play">
          <div class="pulse pulse-1"></div>
          <div class="pulse pulse-2"></div>
          <button class="play-btn">
            <span v-html="play" class="play-btn__icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppButton from '../AppButton'
import play from '@/assets/icons/play.svg?raw'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'OnlineSchool',
  components: { AppButton },
  data() {
    return {
      play
    }
  },
  mounted() {
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: '.online-school',
          start: 200,
          end: 'bottom 100%',
          scrub: 1
        }
      })
      .fromTo(
        '.online-school .section-title',
        { x: -120, autoAlpha: 0 },
        { x: 0, autoAlpha: 1 },
        0
      )
  }
}
</script>
