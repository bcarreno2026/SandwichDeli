import { defineStore } from "pinia";

export const useSandwichStore = defineStore("sandwich", {
  state: () => ({
    customerName: "",
    ingredients: [],
  }),

  getters: {
    totalPrice: (state) => {
      const basePrice = 5.0;
      return (basePrice + state.ingredients.length * 0.75).toFixed(2);
    },
  },

  actions: {
    addIngredient(item) {
      this.ingredients.push(item);
    },
    clearSandwich() {
      this.ingredients = [];
    },
  },
});
