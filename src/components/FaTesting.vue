<template>
  <h3>Font Awesome Icon On Button</h3>
  <button
    @click="onClick"
    class="inline-flex items-center h-6 w-6 text-gray-400 hover:text-brand-blue-500 transition-all duration-200"
  >
    <!-- <font-awesome-icon :size="props.size" class="h-6 w-6 block" :icon="props.icon" fixed-width /> -->
    <!-- <icon :size="props.size" class="h-6 w-6 block" :icon="props.icon" fixed-width /> -->
    <parent-component icon="far fa-user" />
  </button>
</template>
<script setup>
import ParentComponent from './ParentComponent.vue';

const onClick = () => {
  console.log('FA Icon Clicked')
}
</script>
