<template>
  <aside
      class="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-20 transform transition-transform"
      :class="{ 'translate-x-full': !isSidebarOpen }"
  >
    <!-- Close Button -->
    <div class="text-end p-4">
      <button
          class="text-gray-400 text-2xl border-2 rounded-full p-2 border-gray-400 font-bold leading-[0.5]"
          @click="$emit('close-sidebar')"
      >
        &times;
      </button>
    </div>
    <div class="px-6 flex flex-col justify-between">
      <!-- Sidebar Content -->
      <div>
        <div v-for="(menu, index) in menus" :key="menu.id" class="relative">
          <!-- Main Menu Item -->
          <button
              class="uppercase hover:text-gray-900 flex items-center w-full mb-4"
              @click="toggleSubMenu(index)"
          >
            {{ menu.name }}
            <span
                class="ml-2 text-gray-500"
                :class="{ 'rotate-180': activeMenu === index }"
            >
              <font-awesome-icon :icon="['fas', 'chevron-down']"/>
            </span>
          </button>

          <!-- Submenu -->
          <div
              v-if="menu.subMenu && menu.subMenu.length > 0 && activeMenu === index"
              class="pb-2"
          >
            <div v-for="sub in menu.subMenu" :key="sub.name" class="mb-4">
              <!-- Submenu Section Title -->
              <h4 class="font-semibold text-gray-700 text-sm">{{ sub.name }}</h4>
              <!-- Submenu Links -->
              <ul class="mt-2 space-y-1">
                <li
                    v-for="item in sub.subMenu"
                    :key="item.name"
                    class="text-gray-600 hover:text-gray-900"
                >
                  <a href="#">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8">
        <p class="text-lg mb-8">GIFT CARD</p>
        <div class="flex flex-col">
          <p class="mb-2">Contact Us</p>
          <p>+374 556 66</p>
        </div>
      </div>
    </div>

  </aside>
</template>

<script setup>
import { useMenus } from "~/composables/useMenus";

// Fetch menu data
const { menus } = useMenus();

// Props for controlling sidebar visibility
defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true,
  },
});

// State to track the active submenu
import { ref } from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const activeMenu = ref(null);

// Function to toggle the active submenu
const toggleSubMenu = (index) => {
  activeMenu.value = activeMenu.value === index ? null : index;
};
</script>

<style>
.translate-x-full {
  transform: translateX(100%);
}
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.2s ease-in-out;
}
</style>
