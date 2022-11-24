<script lang="ts" setup>
import { formatDate } from "../utils/date";
import {
  PerformanceMetrics,
  metricsOrder,
  metricsColorsMap,
} from "../types/metrics";

// import api from "../utils/api";
import { computed } from "vue";
import Card from "../components/Base/Card.vue";
import MetricsTrendChart from "../components/Stats/MetricsTrendChart.vue";
import METRICS from "../utils/metrics";
import { ArrowUpRight } from "lucide-vue-next";
// const trendsFromApi = await api.trend();

function createTrend(name: PerformanceMetrics) {
  const trend = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 30)
  );
  return {
    ...METRICS[name],
    trend,
    // trend: trendsFromApi[name],
    lastValue: trend[trend.length - 1],
    color: metricsColorsMap[name] ?? "#1252F7",
  };
}

const trends = computed(() => {
  return metricsOrder.map((name) => {
    return createTrend(name);
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
        class="grid grid-cols-metrics-row gap-8 border-b last:border-b-0 first:pt-0 last:pb-0 py-6 group"
        v-for="trend in trends"
      >
        <div class="flex flex-col h-full justify-between">
          <div class="space-y-2">
            <h2 class="text-base">{{ trend.title }}</h2>
            <h2 class="text-2xl">{{ trend.unitFormat(trend.lastValue) }}</h2>
          </div>
          <div class="space-y-2 text-black-300">
            <div class="flex items-center justify-between">
              <p
                class="group-hover:text-black-999 font-medium text-sm transition-colors duration-500"
              >
                {{ trend.shortcode }}
              </p>
              <a
                v-if="trend.learnMore"
                :href="trend.learnMore"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm group-hover:text-black-600 hover:bg-black-100 rounded-md px-2 py-1 cursor-pointer -mr-2 inline-flex items-center leading-none gap-2 transition-colors duration-500"
              >
                Learn more
                <ArrowUpRight class="w-4 h-4" />
              </a>
            </div>
            <p
              class="group-hover:text-black-600 text-sm transition-colors duration-500"
            >
              {{ trend.description }}
            </p>
          </div>
        </div>
        <div class="h-[300px]">
          <MetricsTrendChart v-bind="trend" />
        </div>
      </div>
    </Card>
  </main>
</template>
