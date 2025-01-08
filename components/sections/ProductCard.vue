<template>
  <div class="group relative" :class="viewMode === 'list' ? 'flex w-full' : ''">
    <NuxtLink
        :to="{ name: 'product-product', params: { product: product.id } }"
        :class="viewMode === 'list' ? 'flex items-center gap-4 p-4 border rounded-lg hover:shadow-md w-full' : ''"
    >
      <!-- Product Image Slider -->
      <div class="overflow-hidden relative">
        <div
            class="relative w-full"
            :class="viewMode === 'list' ? 'h-32 w-32 mr-5' : 'h-[32rem]'"
        >
          <!-- Render only the current image -->
          <img
              v-if="product.images && product.images[currentImageIndex]"
              :src="product.images[currentImageIndex]"
              alt="Product Image"
              class="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
          />
        </div>
      </div>
    </NuxtLink>
    <!-- Navigation Buttons for Slider (only in grid view) -->
    <button
        v-if="viewMode === 'grid' && product.images.length > 1"
        @click.stop="prevImage"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1"
    >
      <font-awesome-icon icon="chevron-left" />
    </button>
    <button
        v-if="viewMode === 'grid' && product.images.length > 1"
        @click.stop="nextImage"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1"
    >
      <font-awesome-icon icon="chevron-right" />
    </button>
    <!-- Action Buttons -->
    <div
        class="absolute p-2 bottom-0 left-0 bg-white justify-between w-full z-10 flex items-center opacity-0 group-hover:opacity-100 transition-transform duration-300 flex-row"
    >
      <div class="text-start" :class="viewMode === 'list' ? 'flex-1' : ''">
        <h3 class="mt-4 text-sm font-bold uppercase" :class="viewMode === 'list' ? 'mt-0' : ''">
          {{ product.title }}
        </h3>
        <div v-if="product.sizes">
          <div class="flex gap-2">
            <p v-for="size in product.sizes" :key="size"> {{ size }} </p>
          </div>
        </div>
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
      <div>
        <button
            @click.stop="addToBasket(product)"
            class="transparent p-2 rounded-full hover-icon"
        >
          <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
        </button>
        <button
            @click.stop="addToWishlist(product)"
            class="transparent p-2 rounded-full hover-icon"
        >
          <font-awesome-icon :icon="['fas', 'heart']" class="text-black"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>

  <QuickViewModal
      v-if="showQuickView"
      :item="selectedItem"
      @close="closeQuickView"
  />
</template>

<script setup>
import { ref } from "vue";

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
  addItem({ ...product, image: product.image, quantity: 1 });
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
