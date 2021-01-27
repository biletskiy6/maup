<template>
  <div class="education-process">
    <div class="container">
      <div class="education-process__content">
        <div class="education-process__wrapper">
          <h2 class="section-title">
            Процес <br />
            навчання
          </h2>
          <div class="education-process__inner">
            <div class="timeline">
              <span class="timeline-icon" v-html="timelineIcon"></span>
              <ul>
                <li v-for="item in educationItems" :key="item.id">
                  <span class="round" :class="{ active: item.isActive }"
                    ><span class="round-inner"></span
                  ></span>
                  <span @click="handleSetProcess(item.id)">{{
                    item.name
                  }}</span>
                </li>
              </ul>
            </div>
            <div class="education-process__description">
              <div
                v-for="item in educationItems"
                :key="item.name"
                class="education-process__info"
                :class="{ active: item.isActive }"
              >
                <h3><span v-html="presentaionIcon"></span>{{ item.name }}</h3>
                <p>
                  {{ item.content }}
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import timelineIcon from '@/assets/icons/timeline.svg?raw'
import presentaionIcon from '@/assets/icons/presentation.svg?raw'
import OurTeam from '@/components/sections/OurTeam'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'EducationProcess',
  components: { OurTeam },
  data() {
    return {
      timelineIcon,
      presentaionIcon,
      educationItems: [
        {
          id: 'video',
          name: 'Відеоурок',
          isActive: true,
          content:
            'Заняття проходять інтенсивно, з мінімальним часом біля екрану і максимумом спілкування. Багато дебатів, проектів, дискусій, конференцій, власноручних лабораторних робіт. Уроки живі з кращими онлайн вчителями, а також відеоуроки.'
        },
        {
          id: 'e-book',
          name: 'Електронний підручник',
          isActive: false,
          content:
            'З232аняття проходять інтенсивно, з мінімальним часом біля екрану і максимумом спілкування. Багато дебатів'
        },
        { id: 'consulting', name: 'Консультації', isActive: false },
        { id: 'homework', name: 'Домашнє завдання', isActive: false },
        { id: 'exam', name: 'Контрольна робота', isActive: false },
        { id: 'video-checking', name: 'Відеоразбор робіт', isActive: false }
      ]
    }
  },
  mounted() {
    // gsap.defaults({ overwrite: 'auto' })
    // gsap.set('.education-process__description > *', {
    //   xPercent: -50,
    //   yPercent: -50
    // })
    // ScrollTrigger.create({
    //   trigger: '.education-process__inner',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   onUpdate: this.getCurrentSection,
    //   pin: '.education-process__description'
    // })
  },
  methods: {
    getCurrentSection() {},
    handleSetProcess(id) {
      this.educationItems.forEach((i) => (i.isActive = false))
      const item = this.educationItems.find((i) => i.id === id)
      item.isActive = true
    }
  }
}
</script>
