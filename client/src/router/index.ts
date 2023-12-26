import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
});

router.afterEach((to) => {
  const defaultDocumentTitle = "Vue 3 + Vite App";
  if (to.name) {
    document.title = `${String(to.name)} — ${defaultDocumentTitle}`;
  } else {
    document.title = defaultDocumentTitle;
  }
});

export default router;