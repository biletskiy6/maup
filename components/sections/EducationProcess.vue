<template>
  <div class="education-process">
    <div class="container">
      <div class="education-process__content">
        <div class="education-process__wrapper">
          <h2 class="section-title">Процес навчання</h2>
          <div class="education-process__inner">
            <div class="education-process__timeline">
              <span
                class="education-process__timeline-icon"
                v-html="timelineIcon"
              ></span>
              <ul>
                <li v-for="item in 6" :key="item">
                  <span class="round active"
                    ><span class="round-inner"></span
                  ></span>
                  <span>Видеоурок</span>
                </li>
              </ul>
            </div>
            <div class="education-process__description">
              <div class="education-process__info">
                <h3><span v-html="presentaionIcon"></span>Відеоурок</h3>
                <p>
                  Заняття проходять інтенсивно, з мінімальним часом біля екрану
                  і максимумом спілкування. Багато дебатів, проектів, дискусій,
                  конференцій, власноручних лабораторних робіт. Уроки живі з
                  кращими онлайн вчителями, а також відеоуроки.
                </p>
              </div>
            </div>
          </div>
        </div>
        <OurTeam />
      </div>
    </div>
  </div>
</template>

<script>
import timelineIcon from '@/assets/icons/timeline.svg?raw'
import presentaionIcon from '@/assets/icons/presentation.svg?raw'
import OurTeam from '@/components/sections/OurTeam'
export default {
  name: 'EducationProcess',
  components: { OurTeam },
  data() {
    return {
      timelineIcon,
      presentaionIcon
    }
  }
}
</script>
