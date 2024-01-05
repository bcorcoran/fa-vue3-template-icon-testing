<template>
    <div><icon :icon="icon" /></div>
</template>
<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>