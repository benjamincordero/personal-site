import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/plugins/fontawesome/css/all.css";

createApp(App).use(router).mount("#app");
