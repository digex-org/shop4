<template>
  <section class="container mx-auto px-4 py-8">
    <!-- Header with Back to Shopping Link -->
    <div class="text-sm mb-4">
      <a href="#" class="text-gray-600 hover:underline">← Back To Shopping</a>
    </div>
    <div v-if="totalItems === 0" class="flex justify-start">
      <EmptyCart />
    </div>
    <!-- Main Cart Layout -->
    <div v-else class="flex flex-col md:flex-row">
      <!-- Cart Items Section -->
      <div class="w-full lg:w-3/4 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 class="text-2xl font-semibold mb-6">My Cart</h1>

        <CartItem v-for="product in cartItems" :key="product.sku" :product="product" />
        <div class="mt-8">
          <h3 class="text-lg font-semibold mb-2">30-Day Returns</h3>
          <p class="text-sm text-gray-600">Not loving it? We offer returns for most items within 30 days of delivery for a refund or store credit. <a href="#" class="text-gray-500 hover:underline">Learn More</a></p>
        </div>
      </div>

      <div class="w-full lg:w-1/4">
        <SummarySection />

        <!-- Payment Options -->
        <div class="mt-6 p-4 border rounded-lg">
          <p class="text-sm text-gray-600">Pay in 4 interest-free payments of ${{ (total / 4).toFixed(2) }} with Klarna or Afterpay.</p>
          <img src="/images/products/product.png" alt="Payment Options" class="mt-4 w-1/2 mx-auto" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCart } from "~/composables/useCart";

const { cartItems, totalItems, total } = useCart();
</script>

<style scoped>
</style>
