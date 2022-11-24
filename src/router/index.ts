import { createRouter, createWebHistory } from "vue-router";
import MetricsPage from "../pages/MetricsPage.vue";
import OverviewPage from "../pages/OverviewPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: OverviewPage,
    },
    {
      path: "/metrics",
      name: "metrics",
      component: MetricsPage,
    },
  ],
});

export default router;
