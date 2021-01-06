<template>
  <div class="enter-school">
    <div class="container">
      <div class="enter-school__content">
        <div class="enter-school__top">
          <h4 class="section-title">Вступ до школи</h4>
          <ul class="enter-school__classes">
            <li class="enter-school__class">9-11 class</li>
          </ul>
        </div>
        <ul class="school-plans">
          <li class="school-plan school-plan--proposal">
            <h4>Економія при оплаті</h4>
            <div class="timeline">
              <span class="timeline-icon" v-html="timelineIcon"></span>
              <ul>
                <li v-for="item in 6" :key="item">
                  <span class="round active"
                    ><span class="round-inner"></span
                  ></span>
                  <span>Видеоурок</span>
                </li>
              </ul>
            </div>
          </li>
          <li v-for="item in 3" :key="item" class="school-plan">
            <h5 class="school-plan__header">«Державний стандарт»</h5>
            <h6 class="school-plan__price"><span>2 500 ₴</span> в місяць</h6>
            <div class="school-plan__items">
              <div v-for="item in 7" :key="item" class="school-plan__item">
                <span>Тестування</span>
              </div>
              <AppButton>
                Обрати
              </AppButton>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import timelineIcon from '@/assets/icons/timeline.svg?raw'
import AppButton from '@/components/AppButton'
export default {
  name: 'EnterSchool',
  data() {
    return {
      timelineIcon
    }
  },
  components: {
    AppButton
  }
}
</script>
