<template>
  <div @click="$emit('handleBurgerClick')" class="menu__burger">
    <div class="burger__open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="burger__close">
      <span></span>
      <span></span>
    </div>
    <div class="burger__shape"></div>
    <div class="burger__outline"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuBurger'
}
</script>
