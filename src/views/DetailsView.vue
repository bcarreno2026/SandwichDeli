<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const order = computed(() => ({
  name: route.query.name || "Order Summary",
  price: route.query.price || "0.00",
  image:
    route.query.img ||
    "https://images.pexels.com/photos/16533148/pexels-photo-16533148.jpeg",
  description: `Your ${route.query.name || "sandwich"} is being prepared with fresh ingredients. This kiosk order is sent directly to the kitchen for immediate preparation.`,
  ingredients: [
    "Fresh Bread",
    "Premium Sliced Meat",
    "Organic Lettuce",
    "House Dressing",
    "Touch of Salt",
  ],
  orderNumber: "#" + Math.floor(Math.random() * 9000 + 1000),
  location: "Kiosk #01 - Harlingen",
}));
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center px-4 py-8 bg-gray-900 text-white overflow-x-hidden"
  >
    <div class="w-full max-w-md">
      <RouterLink
        to="/"
        class="mb-6 inline-block text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-blue-400 hover:underline"
      >
        ⬅️ Back to Menu
      </RouterLink>

      <div
        class="w-full rounded-3xl border border-gray-700 bg-gray-800 p-6 shadow-2xl shadow-gray-900/50 sm:p-8"
      >
        <div
          class="mb-8 flex flex-col items-center text-center border-b border-gray-700 pb-8"
        >
          <div
            style="
              width: 96px;
              height: 96px;
              min-width: 96px;
              overflow: hidden;
              border-radius: 50%;
              border: 4px solid #3b82f6;
              margin-bottom: 1rem;
            "
            class="shadow-lg shadow-blue-500/20"
          >
            <img
              :src="order.image"
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              "
              :alt="order.name"
            />
          </div>

          <h1
            class="text-3xl font-black text-white uppercase tracking-tighter leading-none"
          >
            {{ order.name }}
          </h1>
          <p
            class="text-xs text-blue-400 font-mono mt-2 tracking-widest uppercase opacity-80"
          >
            {{ order.location }} | {{ order.orderNumber }}
          </p>
        </div>

        <div class="mb-8 px-2 text-left">
          <h2
            class="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest"
          >
            Kitchen Notes
          </h2>
          <p class="leading-relaxed text-gray-400 italic text-sm">
            {{ order.description }}
          </p>
        </div>

        <div class="mb-10 px-2 text-left">
          <h2
            class="mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest"
          >
            Included Ingredients
          </h2>

          <div class="flex flex-col gap-3">
            <span
              v-for="item in order.ingredients"
              :key="item"
              class="w-full rounded-lg bg-blue-900/30 px-4 py-3 text-sm font-bold text-blue-300 border border-blue-500/20"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div class="flex justify-between items-center mb-8 px-2">
          <span
            class="text-xs font-bold text-gray-500 uppercase tracking-widest"
            >Total:</span
          >
          <span class="text-2xl font-black text-blue-400"
            >${{ order.price }}</span
          >
        </div>

        <button
          @click="$router.push('/receipt')"
          class="w-full bg-blue-600 py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
        >
          Complete Payment
        </button>
      </div>
    </div>
  </main>
</template>
