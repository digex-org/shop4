<template>
  <div class="relative w-full h-0 pb-[44.25%]">
    <video
        :src="video"
        autoplay
        muted
        loop
        class="absolute top-0 left-0 w-full h-full"
    ></video>
  </div>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
