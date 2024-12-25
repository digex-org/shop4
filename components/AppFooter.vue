<template>
  <div class="bg-black text-white">
    <!-- Hero Section -->
    <!-- Footer Section -->
    <footer class="py-12 px-6">
      <section class="flex flex-col justify-start px-6 mb-32 w-1/2">
        <div class="">
          <p class="text-4xl font-light mb-4">Find yourself with us...</p>
          <h1 class="text-6xl sm:text-9xl font-normal leading-tight mb-6">
            Be absolutely <span class="font-extrabold">unique.</span>
          </h1>
          <p class="text-3xl font-light w-[28%]">
            Put your network <span class="font-extrabold ">in safe hands</span>
          </p>
          <div class="mt-3">
            <button class="bg-red-500 text-black px-6 py-3 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8)] font-semibold  hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300">
              Get coolicons <span class="bg-white text-red-500 px-2 py-1 rounded text-xs ml-1">PRO</span>
            </button>
          </div>
        </div>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo and Social Links -->
        <div class="space-y-6">
          <img src="/images/Lissa.png" alt="footer logo">
          <div class="flex space-x-4 text-sm">
            <a href="#" class="hover:underline">INSTAGRAM</a>
            <a href="#" class="hover:underline">FACEBOOK</a>
            <a href="#" class="hover:underline">TIKTOK</a>
            <a href="#" class="hover:underline">YOUTUBE</a>
          </div>
        </div>
        <div class="flex flex-col justify-start w-7/12">
          <!-- Newsletter Subscription -->
          <div class="mb-8">
            <p class="font-semibold mb-4">Subscribe to our newsletter for daily industry insights.</p>
            <form class="flex items-center border border-white">
              <input
                  type="email"
                  placeholder="Email address*"
                  class="bg-transparent text-white placeholder-gray-400 py-2 px-3 flex-1 focus:outline-none"
              />
            </form>
          </div>
          <!-- Help Section -->
          <div class="flex justify-between items-baseline">
            <div class="space-y-2">
              <p class="text-sm font-semibold text-gray-600">HELP</p>
              <ul class="space-y-1">
                <li><a href="#" class="hover:underline">Contact Us</a></li>
                <li><a href="#" class="hover:underline">FAQs</a></li>
                <li><a href="#" class="hover:underline">Create Account</a></li>
                <li><a href="#" class="hover:underline">Wishlist</a></li>
                <li><a href="#" class="hover:underline">Registration</a></li>
              </ul>
            </div>
            <!-- Company Section -->
            <div class="space-y-2">
            <p class="text-sm font-semibold text-gray-600">THE COMPANY</p>
            <ul class="space-y-1">
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Login</a></li>
              <li><a href="#" class="hover:underline">My Account</a></li>
              <li><a href="#" class="hover:underline">Gift Card</a></li>
              <li><a href="#" class="hover:underline">News/Blog</a></li>
              <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          </div>
        </div>
        <div class="text-center md:text-left">
          <p class="font-semibold text-2xl">CALL US</p>
          <div class="mb-8">
            <p class="text-sm text-gray-600 mb-3">Phone:</p>
            <p> <a href="tel:+37455202020" class="hover:underline">+374 55 20 20 20</a></p>
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-3">Email:</p>
            <p> <a href="mailto:info@digexllc.org" class="hover:underline">info@digexllc.org</a></p>
          </div>
          <p class="text-sm text-gray-400">Search for minimalist chair</p>
        </div>
      </div>
      <!-- Contact Information -->
      <div class="mt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <!-- Copyright and Language Selector -->
        <div class="container !max-w-[82rem] flex w-full justify-between md:text-right">
          <p class="text-sm text-gray-400 text-start">
            Privacy Policy<br />
            Copyright © 2024 DIGEX LLC Inc. Yerevan, Armenia<br />
            All rights reserved.
          </p>
          <p class="text-sm mt-2">
            English (UK)
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
// No additional script logic required
</script>
<style scoped>
/* Optional: Scoped styles */
</style>