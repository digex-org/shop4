<template>
  <header class="bg-white shadow-sm">
    <div class="px-8 flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="font-bold text-xl">
        <img src="/images/logo.png" alt="header logo" class="w-32">
      </div>

      <div class="flex items-center justify-between">
        <!-- Search Bar -->
        <div class="hidden md:flex items-center mx-12">
          <input
              type="text"
              placeholder="Search for minimalist chair"
              class="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button class="bg-black text-white px-4 py-2 rounded-r-md">GO</button>
        </div>

        <!-- Action Links -->
        <div class="flex items-center space-x-6">
          <a href="#" class="text-gray-600 hover:text-black">LOG IN</a>
          <a href="#" class="text-gray-600 hover:text-black"><font-awesome-icon :icon="['far', 'heart']" /> SHOPPING BAG</a>
          <a href="#" class="text-gray-600 hover:text-black">HELP</a>
        </div>

        <!-- Hamburger Menu -->
        <button
          class="text-gray-600 ml-8 flex flex-col items-center hover:text-black leading-none focus:outline-none text-xs"
          @click="$emit('toggle-sidebar')"
      >
        MENU
        <font-awesome-icon :icon="['fas', 'bars']" class="text-3xl font-light"/>
      </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
