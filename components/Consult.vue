<template>
  <section id="consult" class="consult">
    <div class="common-section">
      <div class="container">
        <div class="common-section__container">
          <h2 class="common-section__header section-title">
            Замовити консультацію
          </h2>
          <p class="common-section__description">
            Хочете отримати консультацію, звертайтесь! Ми завжди на зв'язку!
          </p>
          <form class="common-form" @submit.prevent>
            <div class="common-form__container">
              <div class="common-form__left">
                <AppInput
                  v-model="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  :icon="UserIcon"
                />
                <AppInput
                  v-model="phone"
                  name="phone"
                  type="text"
                  placeholder="Номер мобільного"
                  :icon="MobileIcon"
                />
                <AppInput
                  v-model="email"
                  name="email"
                  type="text"
                  placeholder="Електронна адреса"
                  :icon="EmailIcon"
                />
              </div>
              <div class="common-form__right">
                <no-ssr>
                  <v-select placeholder="№ Клас" :options="classes">
                    <template #footer>
                      <div class="app-input__icon" v-html="EmailIcon"></div>
                    </template>
                  </v-select>
                </no-ssr>
                <AppInput
                  v-model="message"
                  name="message"
                  type="textarea"
                  placeholder="Повідомлення"
                  :icon="CommentIcon"
                />
              </div>
            </div>
            <div class="common-form__footer">
              <div class="common-form__footer-agreed">
                <AppCheckbox v-model="agree" />
              </div>
              <div class="common-form__footer-submit">
                <AppButton type="submit" theme="primary" block>
                  Відправити
                </AppButton>
              </div>
            </div>
            <!--      <CloseButton />-->
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import UserIcon from '@/assets/icons/user.svg?raw'
import MobileIcon from '@/assets/icons/mobile-android.svg?raw'
import EmailIcon from '@/assets/icons/envelope-alt.svg?raw'
import CommentIcon from '@/assets/icons/comment-alt.svg?raw'
export default {
  name: 'Consult',
  components: {
    AppButton,
    AppInput,
    AppCheckbox
  },
  data() {
    return {
      UserIcon,
      MobileIcon,
      EmailIcon,
      CommentIcon,
      name: '',
      phone: '',
      email: '',
      message: '',
      agree: false,
      classes: [
        { label: '1-4', code: '1-4' },
        { label: '5-8', code: '5-8' },
        { label: '9-11', code: '9-11' }
      ]
    }
  }
}
</script>
