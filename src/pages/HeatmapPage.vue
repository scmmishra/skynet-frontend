<script setup lang="ts">
import { formatDate } from "../utils/date";
import Card from "../components/Base/Card.vue";
import DottedMap from "dotted-map";
import mapJson from "../utils/map";
import api from "../utils/api";
import { metricsOrder, PerformanceMetrics } from "../types/metrics";
import METRICS, { metricStatus } from "../utils/metrics";
import SidebarItem from "../components/Sidebar/SidebarItem.vue";
import { onMounted, ref, Ref } from "vue";

let countryStats = await api.heatmap();
let svgMap = ref("");

const setIntervalAsync = (fn: () => Promise<void>, ms: number) => {
  fn().then(() => {
    setTimeout(() => setIntervalAsync(fn, ms), ms);
  });
};

setIntervalAsync(async () => {
  countryStats = await api.heatmap();
  svgMap.value = buildMap();
}, 5000);

const sortedMetrics = Object.values(METRICS).sort(
  (a, b) => metricsOrder.indexOf(a.name) - metricsOrder.indexOf(b.name)
);

const selectedMetric: Ref<PerformanceMetrics> = ref(PerformanceMetrics.FCP);

function getColor(name: PerformanceMetrics, value: number) {
  const status = metricStatus(name, value);

  if (status === "negative") return "#ec5962";
  if (status === "positive") return "#68c132";
  if (status === "warning") return "#ff921b";
}

function buildMap() {
  const map = new DottedMap({
    // @ts-ignore
    map: mapJson,
    height: 60,
    grid: "diagonal",
  });

  const dataSource = countryStats[selectedMetric.value];

  dataSource.forEach((item) => {
    map.addPin({
      lat: item.lat,
      lng: item.long,
      svgOptions: {
        color: getColor(PerformanceMetrics.FCP, item.value),
        radius: 1.2,
      },
    });
  });

  return map.getSVG({
    radius: 0.22,
    color: "#c0c0c0",
    shape: "circle",
    backgroundColor: "white",
  });
}

onMounted(() => {
  svgMap.value = buildMap();
});

function toggleMetric(metric: PerformanceMetrics) {
  selectedMetric.value = metric;
  svgMap.value = buildMap();
}
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Global Heatmap, p99
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <Card class="p-6">
      <div class="grid grid-cols-5 gap-8">
        <div class="col-span-1 space-y-2">
          <SidebarItem
            v-for="metric in sortedMetrics"
            :active="selectedMetric === metric.name"
            :key="metric.name"
            :title="metric.title"
            @click="toggleMetric(metric.name)"
          ></SidebarItem>
        </div>
        <div class="col-span-4" v-html="svgMap"></div>
      </div>
    </Card>
  </main>
</template>

<style>
/* :root {
  --map-dot-negative: #ec5962;
  --map-dot-warning: #ff921b;
  --map-dot-positive: #68c132;
  --map-default-dot: #c0c0c0;
} */

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

circle[fill="#ff921b"],
circle[fill="#ec5962"] {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
