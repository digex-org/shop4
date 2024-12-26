<template>
  <div class="flex items-center mb-4">
    <select
        id="sortBy"
        v-model="selectedSortOption"
        @change="onSortChange"
        class="p-2 border border-gray-300 rounded-md"
    >
      <option value="recommended">Recommended</option>
      <option value="newArrivals">New Arrivals</option>
      <option value="priceLowToHigh">Price Per Item: Low to High</option>
      <option value="priceHighToLow">Price Per Item: High to Low</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedSortOption = ref('recommended');
const emit = defineEmits(['update-sort']);
// Emit selected sort option to parent component when changed
const onSortChange = () => {
  emit('update-sort', selectedSortOption.value);
};
</script>
