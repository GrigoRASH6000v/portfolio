import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Works from "@/views/Works.vue";
import Contacts from "@/views/Works.vue";

const routes = [
  {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/сontacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
