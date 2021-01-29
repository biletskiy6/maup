<template>
  <div class="news">
    <div class="container">
      <div class="news__content">
        <h4 class="section-title">Новини</h4>
        <div class="news-items">
          <nuxt-link
            v-for="item in 10"
            :key="item"
            to="/news/single"
            class="news-item"
          >
            <div class="news-item__overlay"></div>
            <img
              src="~/assets/images/slide-2.png"
              alt=""
              class="news-item__image"
            />
            <div class="news-item__top">
              <div class="views">
                <span v-html="EyeIcon" class="views__icon"></span>
                <span class="views__text">240</span>
              </div>
              <div class="date">
                <span v-html="EyeIcon" class="date__icon"></span>
                <span class="date__text">25 січня</span>
              </div>
            </div>
            <h2 class="section-subtitle">
              Всеукраїнська онлайн школа Libera School
            </h2>
            <div class="news-item__more">
              <div v-html="ArrowRight" class="news-item__more-shape"></div>
              <div class="news-item__more-text">Дізнатися більше</div>
            </div>
          </nuxt-link>
        </div>
        <paginate
          :page-count="20"
          :page-range="3"
          :margin-pages="2"
          :prev-text="prevText"
          :next-text="nextText"
          :click-handler="clickCallback"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>
    </div>
  </div>
</template>

<script>
import EyeIcon from '@/assets/icons/eye.svg?raw'
import CalendarIcon from '@/assets/icons/calender.svg?raw'
import ArrowRight from '@/assets/icons/arrow-right.svg?raw'
// import Paginate from '@/components/Paginate'
export default {
  name: 'news',
  layout: 'news',
  components: {
    // Paginate
  },
  computed: {
    prevText() {
      return `<p>Попередня сторінка</p>`
    },
    nextText() {
      return `<p>Наступна сторінка</p>`
    }
  },
  data() {
    return {
      EyeIcon,
      CalendarIcon,
      ArrowRight
    }
  },
  methods: {
    clickCallback: (pageNum) => {
      console.log(pageNum)
    }
  }
}
</script>
