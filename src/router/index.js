import { createRouter, createWebHistory } from "vue-router";



import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Works from "@/views/Works.vue";
import Contact from "@/views/Contact.vue";

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
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
