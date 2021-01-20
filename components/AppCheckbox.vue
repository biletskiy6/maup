<template>
  <label class="app-checkbox">
    <input type="checkbox" @change="$emit('input', $event.target.checked)" />
    <i class="material-icons">done</i>
    <span class="checkbox-view"></span>
  </label>
</template>

<script>
export default {
  name: 'AppCheckbox'
}
</script>

<style lang="scss"></style>
