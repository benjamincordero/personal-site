import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Contact from "../Pages/Contact.vue";
import Skills from "../Pages/Skills.vue";
import Portfolio from "../Pages/Portfolio.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
