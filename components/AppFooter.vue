<template>
  <footer class="bg-[#EFEAFF] text-gray-800 py-8">
    <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
      <!-- Brand Section -->
      <div>
        <img src="/logo.png" alt="footer logo">
        <p class="mt-4 text-sm">
          Exquisite and contemporary girlswear since 2007. Designed with love in
          England, worn across the world.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-gray-500 hover:text-gray-800 text-xl">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-800 text-xl">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-800 text-xl">
            <font-awesome-icon :icon="['fab', 'pinterest']" />
          </a>
        </div>
      </div>

      <!-- Shopping with Us -->
      <div>
        <h3 class="font-semibold text-sm mb-4">Shopping with Us</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Contact</a></li>
          <li><a href="#" class="hover:underline">Delivery & Returns</a></li>
          <li><a href="#" class="hover:underline">FAQ's</a></li>
          <li><a href="#" class="hover:underline">Refer A Friend</a></li>
        </ul>
      </div>

      <!-- About Us -->
      <div>
        <h3 class="font-semibold text-sm mb-4">About Us</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Our Story</a></li>
          <li><a href="#" class="hover:underline">Reviews</a></li>
          <li><a href="#" class="hover:underline">Fan Gallery</a></li>
        </ul>
      </div>

      <!-- More -->
      <div>
        <h3 class="font-semibold text-sm mb-4">More</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Gift Cards</a></li>
          <li><a href="#" class="hover:underline">Refund Policy</a></li>
          <li><a href="#" class="hover:underline">Rewards</a></li>
          <li><a href="#" class="hover:underline">Terms of Service</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-semibold text-sm mb-4">Join the Family</h3>
        <p class="text-sm mb-4">
          Sign up to our newsletter for exclusive offers.
        </p>
        <div class="flex items-center justify-center">
          <form class="flex rounded-full bg-white shadow-lg overflow-hidden">
            <input
                type="email"
                placeholder="Email Address"
                class="flex-grow px-4 py-3 text-sm text-gray-600 placeholder-gray-500 focus:outline-none w-1/2"
            />
            <button
                type="submit"
                class="bg-gray-800 text-white px-2 py-3 text-sm font-semibold focus:outline-none"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>

    <div
        class="border-t border-[#D9D4FF] mt-8 pt-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl m-auto md:px-8 px-4"
    >
      <p class="mb-4 md:mb-0">
        © 2024 Sweet Pin. All Rights Reserved.
        <a href="#" class="hover:underline">Cookie Policy</a> /
        <a href="#" class="hover:underline">Privacy Policy</a> /
        <a href="#" class="hover:underline">Terms of Service</a>
      </p>
      <div class="flex justify-center space-x-4 text-lg">
        <font-awesome-icon class="bg-white px-1" :icon="['fab', 'apple-pay']" />
        <font-awesome-icon class="bg-white px-1" :icon="['fab', 'google-pay']" />
        <font-awesome-icon class="bg-white" :icon="['fab', 'cc-visa']" />
        <font-awesome-icon class="bg-white" :icon="['fab', 'cc-amex']" />
        <font-awesome-icon class="bg-white" :icon="['fab', 'shopify']" />
        <font-awesome-icon class="bg-white" :icon="['fab', 'cc-paypal']" />
      </div>
    </div>
  </footer>
</template>

<script setup>
// Ensure you have the Font Awesome library added to your project
</script>

<style>
/* Additional styles for customization */
</style>
