import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/style/style.scss";
import axios from 'axios'

import icon from '@/components/icon'

// app.config.globalProperties.$axios = axios

let instance = createApp(App)

instance.config.globalProperties.$axios = axios

instance.component('icon', icon).use(store).use(router).mount("#app");
