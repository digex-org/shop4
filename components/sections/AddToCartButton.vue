<template>
  <button @click="addToCart" class="text-white px-4 py-2 rounded hover:bg-gray-800">
    Add to Cart
  </button>
</template>

<script setup>
import {useCart} from '~/composables/useCart';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
});

const {addItem} = useCart();

const addToCart = () => {
  addItem({...props.product, quantity: props.quantity, image: props.product.images[0]});
};
</script>
