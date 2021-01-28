<template>
  <div class="single-news">
    <div class="news-inner-container">
      <div class="single-news__top">
        <div class="single-news__top-left">
          <div class="views">
            <span v-html="EyeIcon" class="views__icon"></span>
            <span class="views__text">240</span>
          </div>
          <div class="date">
            <span v-html="CalendarIcon" class="date__icon"></span>
            <span class="date__text">25 січня</span>
          </div>
        </div>
        <div class="single-news__top-right">
          <div class="share">
            <div class="share-action">
              <div v-html="ShareIcon" class="share-action__shape"></div>
              <div class="share-action__text">Поділитись:</div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="section-title">Створи свій перший Telegram-бот Заголовок</h4>
    </div>
    <div class="news-container">
      <div class="single-news__image">
        <img src="~/assets/images/slide-3.png" alt="" />
      </div>
    </div>
    <div class="news-inner-container">
      <p>
        Кількість передплатників у найбільш популярних Telegram-каналів, в тому
        числі і тих, які ведуть боти для чатів Telegram, обчислюється вже
        сотнями тисяч.
      </p>
    </div>
  </div>
</template>

<script>
import EyeIcon from '@/assets/icons/eye.svg?raw'
import CalendarIcon from '@/assets/icons/calender.svg?raw'
import ShareIcon from '@/assets/icons/share.svg?raw'
export default {
  name: 'index',
  layout: 'news',
  data() {
    return {
      EyeIcon,
      CalendarIcon,
      ShareIcon
    }
  }
}
</script>
