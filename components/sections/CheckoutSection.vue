<template>
  <div class="container m-auto p-6">
    <div class="grid grid-cols-2 gap-8 w-full m-auto">
      <div class="w-full">
        <!-- Attached Cards Dropdown -->
        <div class="mb-6">
          <label for="attached-cards" class="block text-gray-700 font-medium mb-2">Attached Cards</label>
          <select
              id="attached-cards"
              class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="" disabled selected>Select a saved card</option>
            <option value="card1">Visa •••• 1234</option>
            <option value="card2">Mastercard •••• 5678</option>
          </select>
        </div>

        <!-- Card Entry Form -->
        <form @submit.prevent="submitCheckout" class="bg-white shadow-md rounded-lg p-6 space-y-4">
          <!-- Cardholder Name -->
          <div>
            <label for="cardholder-name" class="block text-gray-700 font-medium mb-1">Cardholder Name</label>
            <input
                type="text"
                id="cardholder-name"
                v-model="form.cardholderName"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2"
                :class="{'ring-teal-500': valid.cardholderName, 'ring-red-500': !valid.cardholderName && submitAttempted}"
                placeholder="John Doe"
                @input="validateField('cardholderName')"
            />
            <p v-if="!valid.cardholderName && submitAttempted" class="text-red-500 text-sm mt-1">Cardholder name is required.</p>
          </div>

          <!-- Card Number -->
          <div>
            <label for="card-number" class="block text-gray-700 font-medium mb-1">Card Number</label>
            <input
                type="text"
                id="card-number"
                v-model="form.cardNumber"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2"
                :class="{'ring-teal-500': valid.cardNumber, 'ring-red-500': !valid.cardNumber && submitAttempted}"
                placeholder="1234 5678 9012 3456"
                @input="validateField('cardNumber')"
            />
            <p v-if="!valid.cardNumber && submitAttempted" class="text-red-500 text-sm mt-1">Valid card number is required.</p>
          </div>

          <!-- Expiry Date -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="expiry-date" class="block text-gray-700 font-medium mb-1">Expiry Date</label>
              <input
                  type="text"
                  id="expiry-date"
                  v-model="form.expiryDate"
                  class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2"
                  :class="{'ring-teal-500': valid.expiryDate, 'ring-red-500': !valid.expiryDate && submitAttempted}"
                  placeholder="MM/YY"
                  @input="validateField('expiryDate')"
              />
              <p v-if="!valid.expiryDate && submitAttempted" class="text-red-500 text-sm mt-1">Expiry date is required (MM/YY).</p>
            </div>

            <!-- CVV -->
            <div>
              <label for="cvv" class="block text-gray-700 font-medium mb-1">CVV</label>
              <input
                  type="password"
                  id="cvv"
                  v-model="form.cvv"
                  class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2"
                  :class="{'ring-teal-500': valid.cvv, 'ring-red-500': !valid.cvv && submitAttempted}"
                  placeholder="123"
                  @input="validateField('cvv')"
              />
              <p v-if="!valid.cvv && submitAttempted" class="text-red-500 text-sm mt-1">Valid CVV is required.</p>
            </div>
          </div>

          <!-- Country Selection -->
          <div>
            <label class="block text-sm">Select Country</label>
            <select
                class="w-full border p-2 rounded"
                v-model="form.country"
                :class="{'ring-red-500': !form.country && submitAttempted}"
            >
              <option value="" disabled>Select a country</option>
              <option>United States</option>
              <!-- Add more countries as needed -->
            </select>
            <p v-if="!form.country && submitAttempted" class="text-red-500 text-sm mt-1">Country selection is required.</p>
          </div>

          <!-- ZIP Code -->
          <div>
            <label class="block text-sm">ZIP Code</label>
            <input
                type="text"
                class="w-full border p-2 rounded"
                placeholder="ZIP Code"
                v-model="form.zipCode"
                :class="{'ring-red-500': !form.zipCode && submitAttempted}"
            />
            <p v-if="!form.zipCode && submitAttempted" class="text-red-500 text-sm mt-1">ZIP code is required.</p>
          </div>

          <!-- Save Card Checkbox -->
          <div class="flex items-center">
            <input
                type="checkbox"
                id="save-card"
                v-model="form.saveCard"
                class="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                :disabled="!isCardFieldsValid"
            />
            <label for="save-card" class="ml-2 text-gray-700">Save this card for future purchases</label>
          </div>

          <!-- Submit Button -->
          <button
              type="submit"
              class="w-full bg-teal-500 text-white font-medium p-3 rounded-lg hover:bg-teal-600 transition"
          >
            Submit Checkout
          </button>

          <!-- Success Message -->
          <p v-if="submitSuccess" class="text-green-500 mt-4">Successfully submitted!</p>
        </form>
      </div>
      <img src="/images/checkout.png" alt="checkout">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  country: "",
  zipCode: "",
  saveCard: false,
});

const valid = ref({
  cardholderName: false,
  cardNumber: false,
  expiryDate: false,
  cvv: false,
  country: false,
  zipCode: false,
});

const submitAttempted = ref(false);
const submitSuccess = ref(false);

const isCardFieldsValid = computed(() => {
  return valid.value.cardholderName && valid.value.cardNumber && valid.value.expiryDate && valid.value.cvv;
});

const isFormValid = computed(() => {
  return isCardFieldsValid.value && form.value.country && form.value.zipCode;
});

const validateField = (field) => {
  if (field === "cardholderName") {
    valid.value.cardholderName = form.value.cardholderName.length >= 3;
  } else if (field === "cardNumber") {
    const cardNumberRegex = /^[0-9]{16}$/;
    valid.value.cardNumber = cardNumberRegex.test(form.value.cardNumber.replace(/\s+/g, ""));
  } else if (field === "expiryDate") {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    valid.value.expiryDate = expiryDateRegex.test(form.value.expiryDate);
  } else if (field === "cvv") {
    const cvvRegex = /^[0-9]{3,4}$/;
    valid.value.cvv = cvvRegex.test(form.value.cvv);
  }
};

const submitCheckout = () => {
  submitAttempted.value = !!isFormValid;
  submitSuccess.value = !!isFormValid.value;
};
</script>

<style scoped>
/* Custom styles */
.text-gradient {
  background: linear-gradient(160deg, #29B6F4 30%, #E1C9DF 41%, #ee00ff 87%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-2 {
  background: linear-gradient(160deg, #40DB5C, #03C7FD, #40DB5C);
  -webkit-text-fill-color: white;
}
</style>
