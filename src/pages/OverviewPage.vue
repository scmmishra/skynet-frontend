<script lang="ts" setup>
import { formatDate } from '../utils/date';
import { PerformanceMetrics } from "../types/metrics";
import StatCardVue from '../components/Stats/StatCard.vue';

const metricValues = [
  {
    shortcode: PerformanceMetrics.FCP,
    value: 1013,
    change: 12.5,
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
  {
    shortcode: PerformanceMetrics.TTFB,
    value: 1900,
  },
]
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[24px] leading-8 text-black-999">Welcome back, Vishnu</h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <section class="grid w-full grid-cols-4 gap-8 p-6 bg-white rounded-2xl card">
      <StatCardVue v-for="metric in metricValues" v-bind="metric" />
    </section>
  </main>
</template>
