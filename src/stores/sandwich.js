import { defineStore } from "pinia";

export const useSandwichStore = defineStore("sandwich", {
  state: () => ({
    selectedSandwich: null,
    location: "Mcallen TX",
    orderNumber: "",
  }),
  actions: {
    setOrder(sandwich) {
      this.selectedSandwich = sandwich;
      this.orderNumber = "#" + Math.floor(Math.random() * 9000 + 1000);
    },
    clearOrder() {
      this.selectedSandwich = null;
    },
  },
});
