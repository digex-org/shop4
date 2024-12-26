<template>
  <div class="max-w-2xl justify-self-center flex flex-col items-center min-h-screen bg-white p-4 sm:p-8">
    <!-- Logo -->
    <img src="/images/logo.png" alt="Shop 4" class="mb-4 w-24 sm:w-40" loading="lazy"/>

    <!-- Title and Instructions -->
    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 text-center">Enter your email address to sign in or to create an account</h2>

    <!-- Email Input Field -->
    <form @submit.prevent="handleSubmit" class="w-full max-w-sm sm:max-w-md mt-6">
      <label for="email" class="sr-only">Email Address</label>
      <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email Address"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
      />
      <label for="password" class="sr-only">Email Address</label>
      <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          required
      />

      <!-- Continue Button -->
      <button
          type="submit"
          class="w-full py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Continue
      </button>
    </form>

    <!-- Secure Login Link -->
    <a href="#" class="mt-6 text-gray-500 hover:underline text-sm sm:text-base">Secure Login 🔒</a>
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

const email = ref('');
const password = ref('');

function handleSubmit() {
  console.log('Email submitted:', email.value);
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
