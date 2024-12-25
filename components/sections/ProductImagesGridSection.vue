<template>
  <div>
    <!-- Image Grid -->
    <div class="grid grid-cols-2 gap-2">
      <div
          v-for="(image, index) in product.images.slice(0, 4)"
          :key="index"
          class="aspect-square cursor-pointer"
          @click="openZoom(index)"
      >
        <img :src="image" alt="product image" class="w-full h-full object-cover">
      </div>
    </div>

    <!-- Modal for Zoomed Image -->
    <div
        v-if="zoomVisible"
        class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        @click="closeZoom"
    >
      <div
          class="relative"
          @click.stop
      >
        <!-- Close Button -->
        <button
            class="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
            @click="closeZoom"
        >
          ✕
        </button>
        <!-- Zoomed Image -->
        <img
            :src="product.images[zoomIndex]"
            alt="Zoomed product image"
            class="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const zoomVisible = ref(false); // Controls the visibility of the zoom modal
    const zoomIndex = ref(0); // Tracks the index of the currently zoomed image

    const openZoom = (index: number) => {
      zoomIndex.value = index; // Set the image index
      zoomVisible.value = true; // Show the modal
    };

    const closeZoom = () => {
      zoomVisible.value = false; // Hide the modal
    };

    return {
      zoomVisible,
      zoomIndex,
      openZoom,
      closeZoom,
    };
  },
});
</script>
