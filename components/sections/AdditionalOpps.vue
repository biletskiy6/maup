<template>
  <div class="additional-opps">
    <div class="container">
      <div class="additional-opps__content">
        <h4 class="section-title">Додаткові можливості</h4>
        <ul class="additional-opps-list">
          <li v-for="item in 6" :key="item" class="additional-opps-list__item">
            <div class="additional-opps-list__top">
              <h4>Індивідуальна траєкторія навчання</h4>
              <img src="~/assets/images/girl1.png" alt="" />
            </div>
            <p class="additional-opps-list__text">
              Проводиться моніторинг успішності, за результатами якого
              формується індивідуальний план та зміст уроків
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdditionalOpps'
}
</script>
