<template>
  <section class="p-4 bg-gray-50 lg:block">
    <div v-for="(filter, filterIndex) in filters" :key="filterIndex" class="mb-6">
      <h4 class="font-semibold mb-4 py-4 border-b">{{ filter.label }}</h4>
      <ul>
        <li v-for="(option, optionIndex) in filter.options" :key="optionIndex" class="mb-2">
          <!-- Checkbox Filter -->
          <div v-if="filter.type === 'checkbox'">
            <input
                type="checkbox"
                :id="`${filter.key}-${option.value}`"
                :value="option.value"
                v-model="selectedFilters[filter.key]"
                class="mr-2"
            />
            <label :for="`${filter.key}-${option.value}`" class="text-sm lg:text-base">
              {{ option.label }}
            </label>
          </div>

          <!-- Toggle Filter -->
          <div v-else-if="filter.type === 'toggle'" class="flex items-center">
            <label class="flex items-center cursor-pointer" :for="`${filter.key}-${option.value}`">
              <span
                  class="relative w-12 h-[30px] bg-gray-300 rounded-full shadow-inner border mr-3"
                  :class="selectedFilters[filter.key].includes(option.value) ? '!bg-gray-950' : '!bg-white'"
              >
                <span
                    class="absolute w-6 h-6 bg-gray-700 rounded-full shadow transform transition-transform top-0.5 left-0.5"
                    :class="selectedFilters[filter.key].includes(option.value) ? '!translate-x-4 !bg-white' : '!translate-x-0'"
                ></span>
              </span>
              <span class="mr-3 text-sm lg:text-base">
                {{ option.label }}
              </span>
              <input
                  type="checkbox"
                  class="sr-only"
                  :id="`${filter.key}-${option.value}`"
                  v-model="selectedFilters[filter.key]"
                  :value="option.value"
              />
            </label>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useFilters } from "~/composables/useFilters";

const { filters } = useFilters(); // Fetch dynamic filters

const selectedFilters = ref({});
filters.forEach(filter => {
  selectedFilters.value[filter.key] = [];
});

const emit = defineEmits(["update-filters"]);

watch(
    () => selectedFilters.value,
    (newSelectedFilters) => {
      emit("update-filters", newSelectedFilters);
    },
    { deep: true }
);
</script>

<style scoped>
/* Slide-in animation for Filters Section */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
