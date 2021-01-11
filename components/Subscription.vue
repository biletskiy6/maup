<template>
  <div class="subscription">
    <div class="subscription__container">
      <form @submit.prevent class="subscription__form" action="">
        <span v-html="mail" class="subscription__icon"></span>
        <input
          type="text"
          placeholder="Електронна пошта"
          class="subscription__input"
        />
        <button class="subscription__submit" v-html="send"></button>
      </form>
    </div>
  </div>
</template>

<script>
import mail from '@/assets/icons/mail.svg?raw'
import send from '@/assets/icons/send.svg?raw'
export default {
  name: 'Subscription',
  data() {
    return {
      mail,
      send
    }
  }
}
</script>
