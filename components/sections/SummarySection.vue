<template>

  <section class="border p-6 rounded-lg">
    <h2 class="text-xl font-semibold mb-4">Order Summary ({{ totalItems }})</h2>
    <p v-if="deliveryFee === 0" class="text-sm text-green-600 mb-2">This order qualifies for Free Shipping!</p>
    <div class="flex justify-between text-gray-600 mb-2">
      <span>Item Subtotal ({{ totalItems }})</span>
      <span>${{ itemSubtotal.toFixed(2) }}</span>
    </div>
    <div class="flex justify-between text-gray-600 mb-2">
      <span>Deliver</span>
      <span>${{ deliveryFee.toFixed(2) }}</span>
    </div>
    <div class="flex justify-between text-gray-600 mb-4">
      <span>Estimated Tax</span>
      <span>${{ estimatedTax.toFixed(2) }}</span>
    </div>
    <hr class="mb-4" />
    <div class="flex justify-between font-semibold text-lg mb-4">
      <span>Total</span>
      <span>${{ total.toFixed(2) }}</span>
    </div>
    <p class="text-sm text-gray-500 mb-4">You Save ${{ savings }}</p>
    <NuxtLink to="/checkout">
      <button class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Proceed to Checkout</button>
    </NuxtLink>
  </section>
</template>

<script setup>
import { useCart } from "~/composables/useCart";

const { deliveryFee, totalItems, itemSubtotal, estimatedTax, total, savings } = useCart();

</script>
