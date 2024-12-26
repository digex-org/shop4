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
        <!-- FAQ Item -->
        <div v-for="(faq, index) in faqs" :key="index">
          <label class="block text-sm font-medium mb-2">
            {{ faq.question }}
          </label>
          <div class="flex items-center cursor-pointer justify-end border-b border-gray-300 w-full"
               @click="toggleAnswer(index)"
          >
            <button
                type="button"
                class="text-xl font-bold text-gray-400"
            >
              {{ faq.expanded ? '-' : '+' }}
            </button>
          </div>
          <div
              v-if="faq.expanded"
              class="mt-2 bg-gray-50 border border-gray-300 p-4 rounded-lg"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

// Reactive FAQ data with `expanded` state for each item
const faqs = reactive([
  {
    question: "Vorrei conoscervi per parlare di",
    answer: "Here you can explain what you wish to discuss with us.",
    expanded: false,
  },
  {
    question: "Budget",
    answer: "Specify your budget for better assistance.",
    expanded: false,
  },
  {
    question: "Come ci hai conosciuto?",
    answer: "Let us know how you heard about us.",
    expanded: false,
  },
  {
    question: "Nome e Cognome",
    answer: "Please provide your full name.",
    expanded: false,
  },
  {
    question: "Azienda (opzionale)",
    answer: "If applicable, share your company name.",
    expanded: false,
  },
  {
    question: "Scrivi la tua email",
    answer: "Enter your email address for us to reach you.",
    expanded: false,
  },
]);

// Toggles the `expanded` state of the selected FAQ item
const toggleAnswer = (index) => {
  faqs[index].expanded = !faqs[index].expanded;
};
</script>

<style scoped>
/* Optional: Scoped styles for styling the toggle button and answer section */
button {
  cursor: pointer;
  transition: color 0.2s;
}

button:hover {
  color: black;
}

.mt-2 {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
