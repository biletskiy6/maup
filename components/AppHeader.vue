<template>
  <div class="app-header">
    <div class="top-line">
      <div class="top-line__left">
        <Logo />
        <ul class="main-menu">
          <li><a href="#">Навчання з нами - це</a></li>
          <li><a href="#">Демо доступ</a></li>
          <li><a href="#">Вступ до школи</a></li>
          <li><a href="#">Вартість навчання</a></li>
          <li><a href="#">Вартість навчання</a></li>
        </ul>
      </div>

      <div class="top-line__right">
        <AppButton theme="white" size="small">Вхід</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import Logo from '@/components/Logo'
export default {
  name: 'AppHeader',
  components: {
    AppButton,
    Logo
  }
}
</script>
