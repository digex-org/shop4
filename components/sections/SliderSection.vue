<template>
  <swiper
      v-if="slides.length > 0"
      :slides-per-view="1"
      :space-between="0"
      :loop="slides.length > 1"
      :autoplay="{ delay: 5000 }"
      class="w-full"
      :class="[responsiveHeight]"
  >
    <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex items-center justify-start bg-cover bg-center"
        :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
    >
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const responsiveHeight = computed(() => 'h-[300px] md:h-[90vh] lg:h-screen');
</script>
