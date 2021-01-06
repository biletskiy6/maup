<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div v-html="logo" class="logo logo--white"></div>
        <div class="footer-items">
          <div class="footer-item">
            <h4>Телефони для довідок:</h4>
            <ul class="footer-item__phones">
              <li><a href="#">+38 044 490-95-05;</a></li>
              <li><a href="#">+38 093 490-490-0</a></li>
            </ul>
          </div>
          <div class="footer-item">
            <h4>Методи оплати:</h4>
            <ul class="footer-item__payments">
              <li>Оплата кредитною карткою</li>
              <li>Банківськи платежем</li>
              <li>Оплата готівкою</li>
              <li>PayPal</li>
            </ul>
          </div>
          <div class="footer-item">
            <h4>Дізнавайтесь новини першим:</h4>
            <div class="footer-item__news">
              <Subscription />
              <p>
                Ви будете отримувати регулярно новини та повідомлень електронною
                поштою
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscription from './Subscription'
import logo from '@/assets/icons/logo.svg?raw'
export default {
  name: 'Footer',
  components: { Subscription },
  data() {
    return {
      logo
    }
  }
}
</script>
