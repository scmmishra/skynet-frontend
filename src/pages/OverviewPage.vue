<script lang="ts" setup>
import { formatDate } from '../utils/date';
import {
  PerformanceMetrics,
} from "../types/metrics";

import METRICS from '../utils/metrics'

function getTitle(shortcode: PerformanceMetrics): string {
  return METRICS[shortcode].title;
}

function formatValue(shortcode: PerformanceMetrics, value: number): string {
  return METRICS[shortcode].unitFormat(value);
}


const metricValues = [
  {
    shortcode: PerformanceMetrics.FCP,
    value: 1013,
  },
  {
    shortcode: PerformanceMetrics.LCP,
    value: 2050,
  },
  {
    shortcode: PerformanceMetrics.FP,
    value: 120,
  },
  {
    shortcode: PerformanceMetrics.FID,
    value: 6,
  },
  {
    shortcode: PerformanceMetrics.CLS,
    value: 0.4,
  },
  {
    shortcode: PerformanceMetrics.TBT,
    value: 300,
  },
]
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="space-y-2">
      <h1 class="font-normal text-[24px] leading-8 text-black-999">Welcome back, Vishnu</h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <section class="grid w-full grid-cols-4 gap-8 p-6 bg-white rounded-2xl card">
      <div v-for="metric in metricValues" class="space-y-1">
        <h5 class="text-sm font-normal leading-6 text-black-600">
          {{ getTitle(metric.shortcode) }}
        </h5>
        <h3 class="font-medium text-[24px] leading-8 text-black-999">
          {{ formatValue(metric.shortcode, metric.value) }}
        </h3>
      </div>
    </section>
  </main>
</template>
