import { createRouter, createWebHistory } from "vue-router";
import LearnPage from "../pages/LearnPage.vue";
import MetricsPage from "../pages/MetricsPage.vue";
import OverviewPage from "../pages/OverviewPage.vue";
import HeatmapPage from "../pages/HeatmapPage.vue";
import RoutesPage from "../pages/RoutesPage.vue";

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
    {
      path: "/learn",
      name: "learn",
      component: LearnPage,
    },
    {
      path: "/heatmap",
      name: "heatmap",
      component: HeatmapPage,
    },
    {
      path: "/routes",
      name: "routes",
      component: RoutesPage,
    },
  ],
});

export default router;
