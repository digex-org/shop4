<template>
  <section class="flex flex-col md:flex-row items-start md:items-center border p-4 mb-4">
    <!-- Product Image -->
    <div class="flex-shrink-0">
      <img :src="product.image" :alt="product.name" class="w-24 h-24 object-cover rounded-md mb-4 md:mb-0" loading="lazy"/>
    </div>

    <!-- Product Details -->
    <div class="flex-grow md:ml-6">
      <div class="flex justify-between items-start mb-2">
        <div>
          <span v-if="product.limitedTime" class="inline-block bg-red-100 text-red-600 px-2 py-1 text-xs rounded-full mb-1">Limited Time Only</span>
          <h2 class="text-lg font-semibold">{{ product.name }}</h2>
          <p class="text-sm text-gray-500">{{ product.sku }}</p>
        </div>
        <div class="text-right">
          <p class="text-red-600 font-bold">${{ product.price }} <span class="line-through text-gray-500">${{ product.originalPrice }}</span></p>
        </div>
      </div>
      <p class="text-sm text-gray-500 mb-2">Size: {{ product.size }}</p>
      <p class="text-sm text-gray-500 mb-4">Fixture Finish: {{ product.finish }}</p>
      <p class="text-sm text-gray-600">Arrives Tomorrow - Free 1-Day Delivery</p>

      <!-- Quantity and Actions -->
      <div class="flex items-center mt-4 space-x-4">
        <select v-model="product.quantity" class="border-gray-300 rounded p-2">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
        <a href="#" class="text-sm text-gray-500 hover:underline">Save for later</a>
        <button @click="handleRemoveItem(product.id)" class="text-sm text-gray-500 hover:underline">Remove</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import {useCart} from "~/composables/useCart.js";

const { removeItem } = useCart();


const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});

const handleRemoveItem = (id) => {
  removeItem(id);
}
</script>

<style scoped>
</style>
