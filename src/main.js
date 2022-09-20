import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/style/style.scss";

import icon from '@/components/icon'


createApp(App).component('icon', icon).use(store).use(router).mount("#app");
