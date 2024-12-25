<template>
  <section class="p-4">
    <HeadingSection :header="'About this item'" />

    <!-- Description Section -->
    <div class="mt-4 space-y-8">
      <!-- Description Content -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Description</h3>
        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
          {{ tabs[0].content }}
        </p>
      </div>

      <!-- Details & Dimensions Content -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Details & Dimensions</h3>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <!-- Features -->
          <div>
            <h4 class="text-md font-semibold mb-2">Features</h4>
            <ul class="space-y-1">
              <li
                  v-for="(feature, index) in tabs[1].features"
                  :key="index"
                  class="text-gray-700 text-sm sm:text-base"
              >
                <span class="font-semibold">{{ feature.label }}:</span>
                {{ feature.value }}
              </li>
            </ul>
          </div>

          <!-- Dimensions -->
          <div>
            <h4 class="text-md font-semibold mb-2">Dimensions</h4>
            <ul class="space-y-1">
              <li
                  v-for="(dimension, index) in tabs[1].dimensions"
                  :key="index"
                  class="text-gray-700 text-sm sm:text-base"
              >
                <span class="font-semibold">{{ dimension.label }}:</span>
                {{ dimension.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Shipping & Returns Content -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Shipping & Returns</h3>
        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">
          {{ tabs[2].content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const tabs = [
  {
    name: "Description",
    content:
        "The best part about this sleek, minimalist wall clock? It's easy to pair with almost any decor. " +
        "It has a wooden center and a dark rustic metal hoop with matching black hands, which keep a numberless account " +
        "of the time. It includes a metal keyhole hanger to attach easily and securely to your wall, and it arrives fully" +
        " assembled. It can also be propped up against a wall, too. This clock requires a single AA battery, which is" +
        " not included.",
  },
  {
    name: "Details & Dimensions",
    features: [
      { label: "Product Type", value: "Analog" },
      { label: "Overall Shape", value: "Round" },
      { label: "Frame Material", value: "Metal" },
      { label: "Operating Mechanism", value: "Mechanical" },
      { label: "Clock Face Material", value: "Wood" },
      { label: "Clock Hand Material", value: "Metal" },
      { label: "Backing Material", value: "Wood" },
      { label: "Natural Variation Type", value: "Natural Wood Grain Color Variation; Weathered Steel" },
      { label: "Time Display Type", value: "No Time Display Type" },
      { label: "Time Format", value: "Standard" },
      { label: "Exposed Clock Hands", value: "Yes" },
      { label: "Imported", value: "Yes" },
      { label: "Battery Powered", value: "Yes" },
      { label: "Battery Size", value: "AA" },
      { label: "Number of Batteries Needed", value: "1" },
    ],
    dimensions: [
      { label: "Overall", value: '24" W X 24" H X 1.2" D' },
      { label: "Diameter", value: '24" W' },
      { label: "Overall Product Weight", value: "3.11 lb." },
    ],
  },
  {
    name: "Shipping & Returns",
    content:
        "Ships within 3-5 business days. Returns accepted within 30 days of delivery." +
        " Customer is responsible for return shipping costs.",
  },
];
</script>

<style scoped>
.space-y-8 > * + * {
  margin-top: 2rem;
}
</style>
