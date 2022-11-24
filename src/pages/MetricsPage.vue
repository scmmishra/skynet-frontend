<script lang="ts" setup>
import { formatDate } from "../utils/date";
import {
  PerformanceMetrics,
  metricsOrder,
  metricsColorsMap,
} from "../types/metrics";

import api from "../utils/api";
import { computed } from "vue";
import Card from "../components/Base/Card.vue";
import MetricsTrendChart from "../components/Stats/MetricsTrendChart.vue";
import METRICS from "../utils/metrics";

const trendsFromApi = await api.trend();

function createTrend(name: PerformanceMetrics, trend: number[]) {
  return {
    ...METRICS[name],
    trend: trendsFromApi[name],
    color: metricsColorsMap[name] ?? "#1252F7",
  };
}

const trends = computed(() => {
  return metricsOrder.map((name) => {
    return createTrend(name, []);
  });
});
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Metrics, p75
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>

    <Card class="p-6">
      <div
        class="grid grid-cols-metrics-row gap-8 border-b last:border-b-0 first:pt-0 last:pb-0 py-6"
        v-for="trend in trends"
      >
        <div class="space-y-2">
          <h2 class="text-lg">{{ trend.title }}</h2>
          <p class="text-black-600 text-sm">{{ trend.description }}</p>
        </div>
        <div class="h-[300px]">
          <MetricsTrendChart v-bind="trend" />
        </div>
      </div>
    </Card>
  </main>
</template>
