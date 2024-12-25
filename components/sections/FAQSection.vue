<template>
  <section class="container mx-auto bg-white text-black py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- FAQ Heading -->
      <div class="mb-12 text-start">
        <h2 class="text-4xl font-semibold mb-2">frequently asked questions</h2>
        <p class="text-lg text-gray-500">All help topics</p>
      </div>
      <!-- Form Section -->
      <form class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div>
          <label class="block text-sm font-medium mb-2">
            Vorrei conoscervi per parlare di
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="text"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
            <span class="text-xl font-bold text-gray-400">+</span>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">
            Budget
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="text"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
            <span class="text-xl font-bold text-gray-400">+</span>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">
            Come ci hai conosciuto?
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="text"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
            <span class="text-xl font-bold text-gray-400">+</span>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">
            Nome e Cognome
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="text"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">
            Azienda (opzionale)
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="text"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">
            Scrivi la tua email
          </label>
          <div class="flex items-center border-b border-gray-300">
            <input
                type="email"
                placeholder=""
                class="bg-transparent w-full py-2 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup>
// No script logic needed for this static form
</script>
<style scoped>
/* Optional: Scoped styles for fine-tuning */
</style>