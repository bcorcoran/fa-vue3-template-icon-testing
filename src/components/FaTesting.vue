<template>
  <h3>Font Awesome Icon On Button</h3>
  <button
    @click="onClick"
    class="inline-flex items-center h-6 w-6 text-gray-400 hover:text-brand-blue-500 transition-all duration-200"
  >
    <!-- <font-awesome-icon :size="props.size" class="h-6 w-6 block" :icon="props.icon" fixed-width /> -->
    <icon :size="props.size" class="h-6 w-6 block" :icon="props.icon" fixed-width />
  </button>
</template>
<script setup>
import { defineProps } from 'vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  icon: { type: String, required: true, default: 'far fa-user' },
  size: { type: String, default: '10x' }
})

const onClick = () => {
  console.log('FA Icon Clicked')
}
</script>
