<template>
  <div class="wrapper">
    <FaTesting />
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import FaTesting from './components/FaTesting.vue'
</script>

<style scoped>
header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
