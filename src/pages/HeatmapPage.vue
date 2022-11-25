<script setup lang="ts">
import { formatDate } from "../utils/date";
import Card from "../components/Base/Card.vue";
import DottedMap from "dotted-map";
import mapJson from "../utils/map";
import api from "../utils/api";
import { metricsOrder, PerformanceMetrics } from "../types/metrics";
import METRICS, { formatUnit, metricStatus } from "../utils/metrics";
import SidebarItem from "../components/Sidebar/SidebarItem.vue";
import { onMounted, ref, Ref } from "vue";
import { setIntervalAsync } from "../utils/request";

import CountryFlag from "vue-country-flag-next";
import data from "../content/data";
const testData = Object.values(data).flat();

const geoDataMapped: Record<
  string,
  {
    values: {
      name: PerformanceMetrics;
      value: number;
    }[];
    country: string;
  }
> = {};

testData.forEach((point) => {
  if (!geoDataMapped[point.country_code]) {
    geoDataMapped[point.country_code] = {
      values: [],
      country: point.country,
    };
  }

  geoDataMapped[point.country_code].values.push({
    name: point.metric,
    value: point.value,
  });
});

let countryStats = ref(await api.heatmap());
let svgMap = ref("");

setIntervalAsync(async () => {
  countryStats.value = await api.heatmap();
  svgMap.value = buildMap();
}, 3000);

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

const metricsLabel = ["FCP", "LCP", "CLS", "TTFB", "TBT", "FID", "FP"];

function buildMap() {
  const map = new DottedMap({
    // @ts-ignore
    map: mapJson,
    height: 60,
    grid: "diagonal",
  });

  const dataSource = countryStats.value[selectedMetric.value];

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

function getval(
  metric: PerformanceMetrics,
  stat: {
    name: PerformanceMetrics;
    value: number;
  }[]
) {
  return stat.filter((v) => v.name === metric)[0].value;
}

function computedScore(name: PerformanceMetrics, value: number) {
  const status = metricStatus(name, value);

  if (status === "negative") {
    return "bg-red-500";
  }

  if (status === "warning") {
    return "bg-orange-500";
  }

  if (status === "positive") {
    return "bg-green-500";
  }
}

function textColor(name: PerformanceMetrics, value: number) {
  const status = metricStatus(name, value);

  if (status === "negative") {
    return "font-medium";
  }

  if (status === "warning") {
    return "font-medium";
  }
}

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
      <div class="grid grid-cols-4 xl:grid-cols-5 gap-8">
        <div class="col-span-1 space-y-2">
          <SidebarItem
            v-for="metric in sortedMetrics"
            :active="selectedMetric === metric.name"
            :key="metric.name"
            :title="metric.title"
            @click="toggleMetric(metric.name)"
          ></SidebarItem>
        </div>
        <div class="col-span-3 xl:grid-cols-4" v-html="svgMap"></div>
      </div>
    </Card>

    <Card title="Distribution">
      <div class="gap-6 pb-6">
        <div class="grid grid-cols-9 gap-4 px-6 pb-2">
          <span class="col-span-2 card-title"></span>
          <span
            class="col-span card-title text-right"
            v-for="name in metricsLabel"
            >{{ name }}</span
          >
        </div>
        <div
          v-for="(stat, country) in geoDataMapped"
          class="grid grid-cols-9 gap-4 px-6 pb-3"
        >
          <div class="flex items-center gap-3 col-span-2">
            <CountryFlag
              :country="country"
              class="rounded shadow-md border-black-100"
            ></CountryFlag>
            <div class="mt-[10px] text-black-700 text-sm">
              {{ stat.country }}
            </div>
          </div>
          <div
            v-for="metric in metricsOrder"
            class="text-xs mt-[13px] text-right tabular-nums inline-flex gap-2 justify-end"
            :class="textColor(metric, getval(metric, stat.values))"
          >
            <div
              v-if="computedScore(metric, getval(metric, stat.values))"
              :class="computedScore(metric, getval(metric, stat.values))"
              class="w-1.5 h-1.5 rounded-full mt-[5px]"
            />
            {{ formatUnit(metric, getval(metric, stat.values)) }}
          </div>
        </div>
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
