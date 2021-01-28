<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__content-main">
          <div class="logo logo--white" v-html="logo"></div>
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
              <ul class="footer-item__lists">
                <li><span>Оплата кредитною карткою</span></li>
                <li><span>Банківськи платежем</span></li>
                <li><span>Оплата готівкою</span></li>
              </ul>
            </div>
            <div class="footer-item">
              <h4>Корисно знати:</h4>
              <ul class="footer-item__lists">
                <li>Новини</li>
                <li>Всі знижки</li>
                <li>Навчання з нами - це</li>
              </ul>
            </div>
            <div class="footer-item">
              <h4>Дізнавайтесь новини першим:</h4>
              <div class="footer-item__news">
                <Subscription />
                <p>
                  Ви будете отримувати регулярно новини та повідомлень
                  електронною поштою
                </p>
                <Socials label layout="first" />
              </div>
            </div>
          </div>
        </div>
        <div class="copyrights">
          <div class="copyrights__left">
            <p>© 2021 | Усі права захищено</p>
          </div>
          <div class="copyrights__right">
            <p>
              <span>By</span>
              <a href="#" v-html="TangramLogo"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscription from './Subscription'
import Socials from './Socials'
import logo from '@/assets/icons/logo.svg?raw'
import TangramLogo from '@/assets/icons/tangram.svg?raw'
export default {
  name: 'Footer',
  components: { Socials, Subscription },
  data() {
    return {
      logo,
      TangramLogo
    }
  }
}
</script>
