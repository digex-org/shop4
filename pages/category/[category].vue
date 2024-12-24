<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-between align-baseline">
      <!-- Selected Categories -->
      <div class="flex flex-col">
        <h1 v-if="selectedCategoryNames.length" class="text-sm text-gray-600 mb-5 ml-2">
          Selected Categories: <span class="font-semibold">{{ selectedCategoryNames }}</span>
        </h1>

        <button
            @click="toggleFilters"
            class="flex items-center justify-center gap-2 mb-4 p-2 border border-gray-300 rounded-md hover:bg-gray-100 ml-2"
        >
          <i class="fa-solid fa-sliders"></i>
          {{ showFilters ? "Hide Filters" : "Show Filters" }}
        </button>
      </div>

      <!-- Sort By and View Toggle -->
      <div class="flex items-center gap-4">
        <SortByDropdown @update-sort="onSortUpdate" />

        <!-- View Mode Toggle Buttons -->
        <div class="flex gap-2 mb-4">
          <button
              class="leading-none"
              @click="setViewMode('grid')"
              :class="[
              'border rounded-md ',
              viewMode === 'grid' ? 'bg-black text-white' : 'hover:bg-gray-200'
            ]"
          >
            <font-awesome-icon :icon="['fas', 'table-cells']" class="p-2.5"/>
          </button>
          <button
              class="leading-none"
              @click="setViewMode('list')"
              :class="[
              'border rounded-md',
              viewMode === 'list' ? 'bg-black text-white' : 'hover:bg-gray-200'
            ]"
          >
            <font-awesome-icon :icon="['fas', 'list']" class="p-2.5" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row relative">
      <transition name="slide">
        <FiltersSection
            v-if="showFilters"
            @update-filters="onFilterUpdate"
            class="absolute z-10 bg-white shadow-lg p-4 w-full lg:relative lg:shadow-none lg:w-1/4 lg:block"
        />
      </transition>

      <!-- Product Grid Section -->
      <div :class="{ 'w-full': !showFilters, 'lg:w-3/4': showFilters }" class="p-4">
        <ProductGridSection :products="sortedProducts" :view-mode="viewMode" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const showFilters = ref(false); // Toggle filter visibility
const selectedSortOption = ref("recommended"); // Default sorting
const viewMode = ref("grid"); // Default view mode: grid

const appliedFilters = ref({
  categories: [],
  colors: [],
  priceRanges: [],
  delivery: [],
});

const { products } = useProduct();

// Compute filtered products based on active filters
const filteredProducts = computed(() => {
  return products.filter((product) => {
    let passesFilter = true;

    if (appliedFilters.value.categories.length > 0) {
      passesFilter =
          passesFilter &&
          appliedFilters.value.categories.includes(product.category);
    }

    if (appliedFilters.value.colors.length > 0) {
      passesFilter =
          passesFilter &&
          appliedFilters.value.colors.some((color) => {
            return (
                color.trim().toLowerCase() ===
                (product.color || "").trim().toLowerCase()
            );
          });
    }

    if (appliedFilters.value.priceRanges.length > 0) {
      passesFilter =
          passesFilter &&
          appliedFilters.value.priceRanges.some((range) => {
            if (range === "under-50") return product.price < 50;
            if (range === "50-100") return product.price >= 50 && product.price <= 100;
            if (range === "above-100") return product.price > 100;
            return false;
          });
    }

    if (appliedFilters.value.delivery.length > 0) {
      passesFilter =
          passesFilter &&
          appliedFilters.value.delivery.includes("fast-delivery")
              ? product.isLimitedTime
              : true;
    }

    return passesFilter;
  });
});

// Compute sorted products
const sortedProducts = computed(() => {
  let sorted = [...filteredProducts.value];

  switch (selectedSortOption.value) {
    case "recommended":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "newArrivals":
      sorted.sort((a, b) => b.id - a.id);
      break;
    case "priceLowToHigh":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      sorted.sort((a, b) => b.price - a.price);
      break;
  }

  return sorted;
});

const toggleFilters = () => {
  showFilters.value = !showFilters.value;
};

const onFilterUpdate = (updatedFilters) => {
  appliedFilters.value = updatedFilters;
};

const onSortUpdate = (newSortOption) => {
  selectedSortOption.value = newSortOption;
};

const selectedCategoryNames = computed(() => {
  return appliedFilters.value.categories.length > 0
      ? appliedFilters.value.categories.join(", ")
      : "None";
});

// Set View Mode
const setViewMode = (mode) => {
  viewMode.value = mode;
};
</script>

<style scoped>
/* Slide-in animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>
