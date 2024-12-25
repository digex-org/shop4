<template>
  <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="close"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          @click="close"
      >
        <i class="fas fa-times"></i>
      </button>
      <img :src="item.image" alt="Product Image" class="w-full h-auto mb-4" />
      <h2 class="text-2xl font-bold">{{ item.title }}</h2>
      <p class="text-lg text-gray-700">{{ item.description }}</p>
      <p class="text-red-500 font-bold text-xl mt-4">${{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(['close'])

const close = () => {
  emit('close');
};
</script>
