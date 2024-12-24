<template>
  <div class="container m-auto">
    <ProductDetails class="my-7" :product="product" />
    <ProductDescriptionSection class="mb-7" />
    <HeadingSection :header="'We Think You’ll Love'" />
    <ProductGridSection :products="relatedProducts" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
  </div>
</template>

<script setup>
import { useProduct } from "~/composables/useProduct.js";

const { products } = useProduct();

const route = useRoute();
const product = computed(() => {
  try {
    return products.find((p) => p.id === parseInt(route.params.product));
  } catch (error) {
    console.error('Error parsing product:', error);
    return null;
  }
});

const relatedProducts = computed(() =>
    products.filter((p) => p.id !== (parseInt(route.params.product)))
);

</script>
