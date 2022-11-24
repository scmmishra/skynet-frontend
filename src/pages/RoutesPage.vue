<script setup lang="ts">
import { formatDate } from "../utils/date";
import Card from "../components/Base/Card.vue";
import api from "../utils/api";
import METRICS, { formatUnit, metricStatus } from "../utils/metrics";
import { computed } from "vue";
import { metricsOrder, PerformanceMetrics } from "../types/metrics";

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

const routeMetrics = await api.routeMetrics();

const metrics = computed(() => {
  return metricsOrder
    .filter((metric) => Object.keys(routeMetrics).includes(metric))
    .map((key) => {
      return {
        ...METRICS[key],
        stats: routeMetrics[key],
      };
    });
});
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Route Metrics, p99
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <section class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card v-for="metric in metrics" class="pb-6" :title="metric.title">
        <div class="grid grid-cols-2 card-title mb-4 px-6">
          <div class="col-span-1">Route</div>
          <div class="col-span-1 text-right">
            <div>{{ metric.shortcode }}</div>
          </div>
        </div>
        <div
          v-for="(stat, index) in metric.stats"
          class="grid grid-cols-2 px-6 py-1 hover:bg-black-100/50 pre-bar"
          :class="{
            'border-t border-black-200': index !== 0,
          }"
        >
          <div class="flex items-center text-sm text-black-700">
            {{ stat.route }}
          </div>
          <div
            class="text-black-700 inline-flex text-right items-center gap-2 justify-end px-2 py-1 rounded-md tabular-nums"
          >
            <div
              v-if="computedScore(metric.name, stat.value)"
              :class="computedScore(metric.name, stat.value)"
              class="w-2 h-2 rounded-full"
            />
            {{ formatUnit(metric.name, Number(stat.value)) }}
          </div>
        </div>
      </Card>
    </section>
  </main>
</template>
