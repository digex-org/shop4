<template>
  <section class="p-4">
    <!-- No Products Message -->
    <div v-if="paginatedProducts.length === 0" class="text-center text-gray-500">
      No products match your filters.
    </div>

    <!-- Product Grid/List -->
    <div v-else>
      <div :class="viewMode === 'list' ? 'flex flex-col items-center gap-4 p-4 border rounded-lg hover:shadow-md' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'">
        <ProductCard
            v-for="product in paginatedProducts"
            :key="product.id"
            :product="product"
            :viewMode="viewMode"
        />
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex justify-center mt-8 gap-2">
        <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            :class="[
            'px-4 py-2 rounded border',
            currentPage === page
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-gray-300'
          ]"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Props: All Products and View Mode
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 4,
  },
  viewMode: {
    type: String,
    default: "grid",
  },
});

// Pagination State
const currentPage = ref(1);

// Total Pages Calculation
const totalPages = computed(() => {
  return Math.ceil(props.products.length / props.itemsPerPage);
});

// Paginated Products Calculation
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage;
  const end = start + props.itemsPerPage;
  return props.products.slice(start, end);
});

// Change Page
const changePage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
