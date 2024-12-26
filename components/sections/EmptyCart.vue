<template>
  <section class="flex flex-col items-start justify-start min-h-screen text-center p-4">
    <h1 class="text-2xl font-semibold mb-2">Your Shopping Cart Is Empty</h1>
    <p class="text-gray-600 mb-4">Save big on our <NuxtLink to="/" class="underline">Featured Sales</NuxtLink>.</p>

    <!-- Continue Shopping Button -->
    <NuxtLink to="/" class="border border-gray-300 px-6 py-2 mb-8 text-lg font-medium hover:bg-gray-100">
      Continue Shopping
    </NuxtLink>

    <!-- 30-Day Returns Section -->
    <div class="w-full max-w-lg text-left mb-8">
      <h2 class="font-semibold text-lg mb-2">30-Day Returns</h2>
      <p class="text-gray-600">Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit.
        <NuxtLink to="/" class="underline">Learn More</NuxtLink>
      </p>
    </div>

    <!-- Featured Sales Section -->
    <div class="w-full max-w-lg text-left">
      <h2 class="font-semibold text-lg mb-2">Your Featured Sales</h2>
      <NuxtLink to="/" class="flex items-center space-x-1 text-gray-600 hover:underline">
        <span>Shop All Sales</span>
        <i class="fas fa-arrow-right"></i>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>
