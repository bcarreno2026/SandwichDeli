<script setup>
import { useSandwichStore } from "../stores/sandwich";
import { useRouter } from "vue-router";

const store = useSandwichStore();
const router = useRouter();

const finalizeOrder = () => {
  store.clearOrder();
  router.push("/");
};
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center px-4 bg-gray-900 text-white"
  >
    <div
      class="w-full max-w-md text-center bg-gray-800 p-10 rounded-3xl border border-blue-500/30 shadow-2xl"
    >
      <div class="text-6xl mb-6">✅</div>

      <h1 class="text-3xl font-black mb-2 uppercase italic">
        Order Confirmed!
      </h1>

      <div
        class="my-6 p-4 bg-gray-900/50 rounded-xl border border-gray-700 text-left"
      >
        <h2 class="text-xl font-bold text-blue-400">
          {{ store.selectedSandwich?.title }}
        </h2>
        <div
          class="border-t border-gray-700 mt-2 pt-2 flex justify-between font-bold"
        >
          <span>Amount Paid:</span>
          <span class="text-green-400"
            >${{ store.selectedSandwich?.price }}</span
          >
        </div>
      </div>

      <p class="text-gray-400 mb-8 italic">"Your order is ready."</p>

      <button
        @click="finalizeOrder"
        class="w-full bg-blue-600 py-4 rounded-xl font-bold text-white hover:bg-blue-700 shadow-lg transition-all"
      >
        Finish & New Order
      </button>
    </div>
  </main>
</template>
