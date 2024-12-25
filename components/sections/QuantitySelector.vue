<template>
  <div class="flex flex-col items-start justify-start">
    <span class="mr-2 font-medium">Quantity:</span>
    <div class="flex items-center border rounded-md overflow-hidden">
      <!-- Decrease Button -->
      <button
          @click="decreaseQuantity"
          :disabled="quantity <= 1"
          class="px-4 py-2 text-lg font-semibold bg-transparent hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        -
      </button>

      <!-- Quantity Input -->
      <input
          type="number"
          v-model="quantity"
          class="w-12 text-center text-lg border-l border-r"
          min="1"
      />

      <!-- Increase Button -->
      <button
          @click="increaseQuantity"
          class="px-4 py-2 text-lg font-semibold bg-transparent hover:bg-gray-200"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  initialQuantity: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:quantity']);
const quantity = ref(props.initialQuantity);

watch(quantity, (newVal) => {
  emit('update:quantity', newVal);
});

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<style scoped>
/* Ensures consistent sizing and spacing */
input {
  appearance: textfield;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
