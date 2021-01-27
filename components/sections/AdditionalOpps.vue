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
            <div class="additional-opps-list__middle">
              <p class="additional-opps-list__text">
                Проводиться моніторинг успішності, за результатами якого
                формується індивідуальний план та зміст уроків
              </p>
            </div>
            <div class="additional-opps-list__bottom">
              <h6 class="plan-price plan-price--sm">
                <span>2 500 ₴</span> в місяць
              </h6>
              <button class="simple-btn">
                Замовити
              </button>
            </div>
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
