<template>
  <div>
<!--    <SliderSection :slides="slides" />-->
<!--    <div class="container m-auto max-w-7xl px-5">-->
<!--      <CategoriesSection />-->
<!--      <WelcomeSection />-->
<!--      <div class="flex justify-between flex-col lg:flex-row items-center lg:items-start">-->
<!--        <div class="flex flex-col w-1/4 pt-5 lg:items-start items-center mb-5">-->
<!--          <HeadingSection class="mb-8 lg:!mb-14 text-center lg:text-start" :header="'New In'" :description="'Shop the latest arrivals!'"/>-->
<!--          <a href="#" class="py-2.5 px-7 text-white bg-[#6070D5] w-fit rounded-full">View all</a>-->
<!--        </div>-->
<!--        <NewProducts class="max-w-4xl pt-0" :limit="4"/>-->
<!--      </div>-->
<!--      <GallerySection />-->
<!--    </div>-->
<!--    <SliderSection class="py-7" :items="videoSlides" :settings="videoSettings" />-->
<!--    <div class="container mx-auto px-4">-->
<!--      <h3 class="text-center font-bold text-xl mt-8">Shop by Department</h3>-->
<!--      <DepartmentsSection :categories="categories" class-name="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"/>-->
<!--      <SliderSection class="my-7 px-1" :items="videoSlides" :settings="videoSettings" />-->
<!--      <BannerSection banner="/images/banners/banner.webp" />-->
<!--      <SliderSection class="my-7" :items="products" :settings="imageSettings" />-->
<!--      <ShopBannerSection class="mb-7" background-image="images/banner1.webp" />-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { useCategory } from '~/composables/useCategory';
import {useProduct} from "~/composables/useProduct.js";
import '@fortawesome/fontawesome-svg-core/styles.css';

const { categories } = useCategory();

const { products } = useProduct();
const slides = [
  {
    backgroundImage: "/images/backgrounds/banner4.png",
  },
  {
    backgroundImage: "/images/backgrounds/banner2.png",
  },
  {
    backgroundImage: "/images/backgrounds/banner.png",
  },
];
const slideTypeImage = "image";
const slideTypeProduct = "product"

const productSettings = {
  slidesPerView: 1,
  breakpoints: {
    420: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 4 }
  },
  spaceBetween: 20,
  loop: true,
  pagination: { clickable: true },
};
</script>

