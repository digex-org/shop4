<template>
  <div class="group relative" :class="viewMode === 'list' ? 'flex w-full' : ''">
    <NuxtLink
        :to="{ name: 'product-product', params: { product: product.id } }"
        :class="viewMode === 'list' ? 'flex items-center gap-4 p-4 border rounded-lg hover:shadow-md w-full' : ''"
    >
      <!-- Product Image Slider -->
      <div class="overflow-hidden relative">
        <div class="relative w-full h-64">
          <img
              v-for="(image, index) in product.images"
              :key="index"
              :src="image"
              alt="Product Image"
              :class="[
              'absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300',
              currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0',
              viewMode === 'grid' ? 'w-full h-64 mb-4' : 'mr-5 h-32'
            ]"
              loading="lazy"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="text-start" :class="viewMode === 'list' ? 'flex-1' : ''">
        <h3
            class="mt-4 text-sm font-bold uppercase"
            :class="viewMode === 'list' ? 'mt-0' : ''"
        >
          {{ product.title }}
        </h3>
        <p class="text-sm font-bold">
          <span
              v-if="product.originalPrice"
              class="text-gray-400 ml-2 line-through"
          >
            {{ product.originalPrice }} USD
          </span>
          {{ product.price }} USD
        </p>
      </div>
    </NuxtLink>
    <button
        @click.stop="prevImage"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1"
    >
      <font-awesome-icon icon="chevron-left" />
    </button>
    <button
        @click.stop="nextImage"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1"
    >
      <font-awesome-icon icon="chevron-right" />
    </button>
    <!-- Action Buttons -->
    <div
        class="absolute bottom-16 left-2 flex items-center opacity-0 group-hover:opacity-100 transition-transform duration-300 flex-row"
    >
      <button
          @click.stop="addToWishlist(product)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'heart']" class="text-black"></font-awesome-icon>
      </button>

      <button
          @click.stop="addToBasket(product)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
      </button>

      <button
          @click.stop="openQuickView(product)"
          class="transparent p-2 rounded-full shadow-lg hover-icon"
      >
        <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
      </button>

        <button
            @click.stop="addToComparison(product)"
            class="transparent p-2 rounded-full shadow-lg hover-icon"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']" />
        </button>
      </div>
    </div>

    <QuickViewModal
        v-if="showQuickView"
        :item="selectedItem"
        @close="closeQuickView"
    />
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCart } from "~/composables/useCart.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  showDescription: {
    type: Boolean,
    default: true,
  },
  viewMode: {
    type: String,
    default: "grid",
  },
});
let showQuickView = ref(false);
let selectedItem = ref(null);

const openQuickView = (product) => {
  if (product) {
    selectedItem.value = product;
    showQuickView.value = true;
  } else {
    console.error("Attempted to open Quick View with an undefined product.");
  }
};
const closeQuickView = () => {
  showQuickView.value = false;
  selectedItem.value = null;
};

// Slider logic
const currentImageIndex = ref(0);

const nextImage = () => {
  if (props.product.images) {
    currentImageIndex.value =
        (currentImageIndex.value + 1) % props.product.images.length;
  }
};

const prevImage = () => {
  if (props.product.images) {
    currentImageIndex.value =
        (currentImageIndex.value - 1 + props.product.images.length) %
        props.product.images.length;
  }
};

// Wishlist and Basket Functions
const addToWishlist = (product) => {
  console.log("Added to wishlist:", product);
};

const addToComparison = (product) => {
  console.log("Added to comparison list:", product);
};

const { addItem } = useCart();
const addToBasket = (product) => {
  addItem({ ...product, image: product.image });
};
</script>

<style scoped>
.group:hover .group-hover {
  opacity: 1;
  z-index: 9;
}

.hover-icon:hover i.fa-heart {
  color: red;
}

.hover-icon:hover i.fa-shopping-cart {
  color: #226dfb;
}

.hover-icon:hover i.fa-eye {
  color: gray;
}

/* Zoom Effect */
.group img {
  transition: opacity 0.1s ease-in-out;
}

/* Navigation Buttons */
button {
  z-index: 10;
}
</style>
