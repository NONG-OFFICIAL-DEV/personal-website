import { createRouter, createWebHistory } from "vue-router";
import Website from "../views/Website.vue";
import ContentManager from "../views/admin/ContentManager.vue";

const routes = [
  { path: "/:hash?", name: "Website", component: Website },
  {
    path: "/content-manager",
    name: "ContentManager",
    component: ContentManager,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Scroll to the element with the ID
      const el = document.querySelector(to.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return { left: 0, top: 0 }; // fallback
    }
    // Default scroll to top
    return { top: 0 };
  },
});

export default router;
