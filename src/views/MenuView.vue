<script setup>
import { ref } from "vue";
import LinkCard from "@/components/LinkCard.vue";

const store = ref({
  name: "SandwichDeli",
  slogan: "Fresh Tabletop Ordering Kiosk",
  sandwiches: [
    {
      id: 1,
      title: "Ham Sandwich",
      image: "/ham.jpg",
      description: "Classic Ham Sandwich",
      price: "6.35",
      ingredients: ["Fresh Bread", "Smoked Ham", "American Cheese", "Mayo"],
    },
    {
      id: 2,
      title: "Salami Sandwich",
      image: "/salami.jpg",
      description: "Salami Sandwich",
      price: "7.55",
      ingredients: ["French Bread", "Salami", "Pickes", "Union"],
    },
    {
      id: 3,
      title: "Classic Bologna",
      image: "/classicbologna.jpg",
      description: "Classic Bologna",
      price: "5.00",
      ingredients: ["White Bread", "Bologna", "Mustard", "Pickles"],
    },
    {
      id: 4,
      title: "Wheat Bread Bologna",
      image: "/wheatbologna.jpg",
      description: "Wheat bread and thick bologna",
      price: "5.50",
      ingredients: ["Wheat Bread", "Turkey Bologna", "Mustard", "Lettuce"],
    },
  ],
});
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8 bg-gray-900">
    <div class="mb-12 flex flex-col items-center text-center">
      <h1 class="text-4xl font-black text-white uppercase tracking-tighter">
        {{ store.name }}
      </h1>
      <div class="h-1 w-20 bg-blue-500 mt-2 rounded-full"></div>
      <p
        class="text-gray-400 mt-4 font-medium uppercase tracking-widest text-xs"
      >
        {{ store.slogan }}
      </p>
    </div>

    <div class="flex w-full max-w-md flex-col gap-4 mx-auto">
      <LinkCard
        v-for="sandwich in store.sandwiches"
        :key="sandwich.id"
        :title="sandwich.title"
        :description="sandwich.description"
        :image="sandwich.image"
        :price="sandwich.price"
        :ingredients="sandwich.ingredients"
      />
    </div>

    <RouterLink
      to="/Details"
      class="mt-12 text-sm text-gray-500 uppercase tracking-widest hover:text-blue-400 transition-colors"
    >
      View Cart ➡️
    </RouterLink>
  </main>
</template>
