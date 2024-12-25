<template>
  <div>
    <SliderSection :slides="slides" />
    <VideoSection :video="'/videos/video.mp4'" />
    <ShopSection />
    <VideoSection :video="'/videos/video.mp4'" />
    <BannerSection :banner="'/images/banners/gothBanner.png'" />
  </div>
</template>

<script setup>
import '@fortawesome/fontawesome-svg-core/styles.css';

const slides = [
  {
    backgroundImage: "/images/backgrounds/lissaBanner.png",
  },
];
</script>

