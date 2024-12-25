<template>
<section>
  <img class="w-full h-full" :src="banner" alt="banner" loading="lazy">
</section>
</template>

<script>
  export default {
    props: {
      banner: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>