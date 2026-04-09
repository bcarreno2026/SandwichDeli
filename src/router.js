import { createRouter, createWebHistory } from "vue-router";
import MenuView from "./views/MenuView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MenuView,
  },
  {
    path: "/Details",
    name: "details",
    component: () => import("./views/DetailsView.vue"),
  },
  {
    path: "/receipt",
    name: "receipt",
    component: () => import("./views/ReceiptView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
