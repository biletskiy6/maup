<template>
  <div class="education-cost">
    <div class="container">
      <div class="education-cost__content">
        <div class="education-cost__top">
          <h4 class="section-title">Вступ до школи</h4>
          <ul class="education-cost__classes">
            <li class="education-cost__class">9-11 class</li>
          </ul>
        </div>
        <ul class="school-plans">
          <li class="school-plan school-plan--proposal">
            <h4>Економія при оплаті</h4>
            <div class="timeline timeline--education-cost">
              <span class="timeline-icon" v-html="timelineIcon"></span>
              <div class="timeline__period">
                <div class="timeline__header">Ekonomiya</div>
                <ul>
                  <li v-for="item in 6" :key="item">
                    <div class="">
                      <span class="round active"
                        ><span class="round-inner"></span
                      ></span>
                      <span>1 місяць</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="timeline__economy">
                <div class="timeline__header">Project</div>
                <ul>
                  <li v-for="item in 6" :key="item">
                    <div class="">
                      <span class="round active"
                        ><span class="round-inner"></span
                      ></span>
                      <span>0%</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li v-for="item in 3" :key="item" class="school-plan">
            <h5 class="school-plan__header">«Державний стандарт»</h5>
            <h6 class="plan-price"><span>2 500 ₴</span> в місяць</h6>
            <div class="school-plan__items">
              <div v-for="item in 7" :key="item" class="school-plan__item">
                <div v-html="doneIcon" class="access available"></div>
                <span class="school-plan__item-text">Тестування</span>
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
import doneIcon from '@/assets/icons/done.svg?raw'
export default {
  name: 'EducationCost',
  components: {
    AppButton
  },
  data() {
    return {
      timelineIcon,
      doneIcon
    }
  }
}
</script>
