import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js"; // This matches your new file name

const app = createApp(App);

app.use(router);
app.mount("#app");
