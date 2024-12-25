<template>
  <div class="mb-5">
    <h2 class="text-3xl font-bold">{{ header }}</h2>
    <h4>{{ description }}</h4>
  </div>
</template>

<script setup>
  defineProps({
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  });
</script>

<style scoped>

</style>