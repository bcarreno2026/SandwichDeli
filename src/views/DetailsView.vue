<script setup>
import { useSandwichStore } from "@/stores/sandwich";
import { useRouter } from "vue-router";

const store = useSandwichStore();
const router = useRouter();

const order = store.selectedSandwich;

if (!order) {
  router.push("/");
}
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center px-4 py-8 bg-gray-900 text-white overflow-x-hidden"
  >
    <div class="w-full max-w-md">
      <RouterLink
        to="/"
        class="mb-6 inline-block text-sm text-gray-400 hover:text-blue-400"
      >
        ⬅️ Back to Menu
      </RouterLink>

      <div
        class="w-full rounded-3xl border border-gray-700 bg-gray-800 p-6 shadow-2xl sm:p-8"
      >
        <div
          class="mb-8 flex flex-col items-center text-center border-b border-gray-700 pb-8"
        >
          <div
            style="
              width: 96px;
              height: 96px;
              overflow: hidden;
              border-radius: 50%;
              border: 4px solid #3b82f6;
              margin-bottom: 1rem;
            "
          >
            <img
              :src="order?.image"
              style="width: 100%; height: 100%; object-fit: cover"
              :alt="order?.title"
            />
          </div>

          <h1 class="text-3xl font-black text-white uppercase tracking-tighter">
            {{ order?.title }}
          </h1>

          <p
            class="text-xs text-blue-400 font-mono mt-2 tracking-widest uppercase opacity-80"
          >
            {{ store.location }} | {{ store.orderNumber }}
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
              v-for="item in order?.ingredients"
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
            >${{ order?.price }}</span
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
