import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./main.css";

createApp(App).use(router).mount("#app");
