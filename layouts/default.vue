<template>
  <div>
    <!-- Header Component -->
    <AppHeader @toggle-sidebar="toggleSidebar" />

    <!-- Sidebar Component -->
    <SidebarSection :isSidebarOpen="isSidebarOpen" @close-sidebar="toggleSidebar" />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
