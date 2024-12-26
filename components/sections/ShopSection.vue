<template>
  <section class="relative flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-gray-100">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
          src="/images/banners/shoppingBanner.png"
          alt="New Collection"
          class="object-cover w-full h-full"
      />
    </div>

    <!-- Overlay Content -->
    <div class="relative z-10 text-center text-white">
      <p class="text-sm uppercase tracking-wide mb-2">Women's Leather Collection</p>
      <h1 class="text-[22rem] font-bold leading-[0.7] mb-4 font-[Playfair]">NEW</h1>
      <h2 class="text-9xl font-semibold mb-6 font-[Playfair]">COLLECTION</h2>
      <div class="flex items-end justify-end">
        <a
            href="/category/men"
            class="inline-block mr-4 px-4 text-xl font-medium text-black bg-white rounded-full hover:bg-gray-200 font-[Playfair]"
        >
          Go to SHOP
        </a>
        <p class="text-7xl mb-0 leading-[0.7] font-[Playfair]">New in</p>
      </div>
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
  </section>
</template>

<script setup>
// No additional logic is required for static content
</script>

<style>
/* Optional: Adjust the image path and responsiveness if necessary */
</style>
