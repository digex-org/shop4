<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
<!--    <ProductImageCarouselSection :images="product.images" class="w-full" />-->
    <ProductImagesGridSection  :product="product"/>

    <div class="p-4 space-y-3">
      <!-- Product Title and Price -->
      <div>
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <p class="text-sm text-gray-400 font-semibold">Sustainable materials</p>
        <p class="text-base text-gray-600">{{ product.subtitle }}</p>
        <div class="flex items-center mt-1">
          <div class="flex relative">
            <span
                v-for="n in 5"
                :key="n"
                class="relative inline-block text-lg"
            >
              <font-awesome-icon
                  :icon="['fas', 'star']"
                  class="text-gray-400 text-sm"
              />
              <span
                  v-if="n <= Math.ceil(product.rating)"
                  class="absolute inset-0 overflow-hidden text-yellow-400"
                  :style="{ width: getStarFill(n) }"
              >
                <font-awesome-icon :icon="['fas', 'star']" class="text-sm"/>
              </span>
            </span>
          </div>
          <span class="ml-2 text-sm text-gray-500">
            ({{ product.rating.toFixed(2) }})
          </span>
        </div>

        <p class="text-xl font-semibold mt-2">€{{ product.price }}</p>
        <p class="text-lg mt-2"><span class="font-semibold">Color:</span> {{ product.color }}</p>
      </div>
      <p class="text-red-600 font-bold my-2">40% OFF WITH CODE: PUMAFTFN</p>

      <!-- Product Description -->
      <div>
        <div class="overflow-hidden">
          <!-- Accordion Header -->
          <button
              @click="toggleAccordion"
              class="flex justify-between items-center w-32 py-3 bg-transparent"
          >
            <span class="text-lg font-bold">Description</span>
            <font-awesome-icon
                :icon="isOpen ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']"
                class="text-gray-600"
            />
          </button>

          <!-- Accordion Content -->
          <div
              v-show="isOpen"
              class="px-4 py-3 bg-white text-sm text-gray-700 leading-relaxed"
          >
            <p>{{ product.description }}</p>
            <ul class="list-disc pl-5 mt-2">
              <li>100% Cotton fabric</li>
              <li>Short sleeve crew neck T-shirt</li>
              <li>Screenprinted graphic on the front and back</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p><span class="font-bold">Status: </span> {{ upperFirst(product.status) }}</p>
      </div>
      <div class="mt-2" v-if="product.sizes">
        <h3 class="text-xl font-semibold mb-2 text-gray-400">Select Fit</h3>
        <div class="flex gap-2">
          <button
              v-for="(size, index) in product.sizes"
              :key="index"
              class="border border-gray-400 py-2 px-4 rounded-md text-sm font-bold hover:bg-gray-200"
          >
            {{ size }}
          </button>
        </div>
      </div>
      <div class="space-y-2 space-x-2 flex w-4/5 items-center">
        <QuantitySelector :initialQuantity="quantity" @update:quantity="updateQuantity" class="flex-1" />
        <AddToCartButton :product="product" :quantity="quantity" class="w-full !bg-black py-2 text-sm font-semibold hover:bg-gray-800 !mt-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {upperFirst} from "scule";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
const quantity = ref(1);
const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const updateQuantity = (newQuantity) => {
  quantity.value = newQuantity;
};

const getStarFill = (starIndex) => {
  if (props.product.rating >= starIndex) {
    return "100%"; // Full star
  }
  if (props.product.rating < starIndex - 1) {
    return "0%"; // Empty star
  }
  // Partially filled star
  return `${(props.product.rating - (starIndex - 1)) * 100}%`;
};
</script>
