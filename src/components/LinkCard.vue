<script setup>
defineProps({
  title: String,
  description: String,
  price: String,
  image: String,
});
</script>

<template>
  <button
    @click="
      $router.push({
        path: '/Details',
        query: { name: title, price: price, img: image },
      })
    "
    class="relative group flex flex-row items-center gap-4 w-full rounded-2xl border border-gray-700 bg-gray-800 p-4 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 text-left"
  >
    <div
      style="width: 80px; height: 80px; min-width: 80px"
      class="shrink-0 overflow-hidden rounded-full border-2 border-gray-700 bg-gray-900"
    >
      <img
        v-if="image"
        :src="image"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        "
        class="group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div class="flex-1 min-w-0">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-white text-lg truncate">{{ title }}</h3>
        <span class="text-blue-400 font-bold ml-2">${{ price }}</span>
      </div>
      <p class="text-sm text-gray-400 mt-1 italic">{{ description }}</p>
    </div>
  </button>
</template>
