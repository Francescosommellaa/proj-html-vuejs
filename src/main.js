import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"; // questo serve? 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).mount("#app");
