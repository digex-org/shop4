<template>
  <section class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    <!-- Vertical Thumbnail Navigation -->
    <div class="relative flex md:flex-col space-x-2 md:space-y-2 md:space-x-0 overflow-auto">
      <swiper
          direction="vertical"
          slides-per-view="5"
          free-mode
          space-between="10"
          class="thumbnail-slider max-h-[400px] !hidden md:!block"
          @swiper="onThumbnailSwiper"
      >
        <swiper-slide
            v-for="(image, index) in images"
            :key="index"
            @click="onThumbnailClick(index)"
            class="cursor-pointer"
        >
          <img
              :src="image"
              :alt="'Thumbnail ' + index"
              class="rounded-lg object-cover w-16 h-16 border border-gray-200 hover:border-black"
              :class="index === activeIndex ? '!border-black border' : ''"
              loading="lazy"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Horizontal Thumbnail Navigation for smaller screens -->
    <div class="flex md:hidden space-x-2 overflow-x-auto">
      <div
          v-for="(image, index) in images"
          :key="index"
          @click="onThumbnailClick(index)"
          class="cursor-pointer"
      >
        <img
            :src="image"
            :alt="'Thumbnail ' + index"
            class="rounded-lg object-cover w-16 h-16 border border-gray-200 hover:border-black"
            :class="index === activeIndex ? 'border-black' : ''"
            loading="lazy"
        />
      </div>
    </div>

    <!-- Main Image Slider -->
    <div class="flex-grow w-full md:w-4/5">
      <swiper
          ref="mainSwiper"
          @swiper="onMainSwiper"
          @slideChange="onSlideChange"
          loop
          class="main-swiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
              :src="image"
              :alt="'Product Image ' + index"
              loading="lazy"
              class="rounded-lg w-full object-cover max-h-[500px] md:max-h-[700px]"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);
const mainSwiperInstance = ref(null);
const thumbnailSwiperInstance = ref(null);

const onMainSwiper = (swiper) => {
  mainSwiperInstance.value = swiper;
};

const onThumbnailSwiper = async (swiper) => {
  thumbnailSwiperInstance.value = swiper;

  // Wait for DOM to render the navigation buttons
  await nextTick();
};

const onSlideChange = () => {
  if (mainSwiperInstance.value) {
    activeIndex.value =
        mainSwiperInstance.value.activeIndex % props.images.length;
  }
};

const onThumbnailClick = (index) => {
  if (mainSwiperInstance.value) {
    activeIndex.value = index;
    mainSwiperInstance.value.slideTo(index);
  }
};
</script>

<style scoped>
.thumbnail-slider {
  width: 64px;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.main-swiper img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
}
</style>
