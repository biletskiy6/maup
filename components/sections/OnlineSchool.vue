<template>
  <div class="online-school">
    <div class="online-school__content">
      <div class="online-school__left">
        <h2 class="section-title inverse">
          Онлайн школа МАУП
        </h2>
        <p>
          Онлайн-школа «МАУП» – це повноцінна школа у вас вдома. З приходом
          інтернету відстані перестають бути перешкодою, а межі між онлайн та
          реальним життям поступово стираються.
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
          <AppButton>
            <span class="icon"
              ><i class="material-icons">arrow_forward</i></span
            >
            Демо доступ
          </AppButton>
          <AppButton theme="outlineWhite">Вартість навчання</AppButton>
        </div>
      </div>
      <div class="online-school__right">
        <img src="~@/assets/images/online-school.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton'
export default {
  name: 'OnlineSchool',
  components: { AppButton }
}
</script>
