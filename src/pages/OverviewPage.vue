<script lang="ts" setup>
import { formatDate } from '../utils/date';
import { PerformanceMetrics } from "../types/metrics";
import StatCardVue from '../components/Stats/StatCard.vue';
import CardVue from '../components/Base/Card.vue';
import PaintMetricsChart from '../components/Stats/PaintMetricsChart.vue';
import BrowserStats from '../components/Stats/BrowserStats.vue';
import { Browsers } from '../types/browsers';
import BrowserStatsTitleBar from '../components/Stats/BrowserStatsTitleBar.vue';

import { Smartphone, Monitor } from 'lucide-vue-next';

import api from '../utils/api';
import { computed } from 'vue';
import { DistributionResponse } from '../types/api';


const allowedBrowserMetrics = [PerformanceMetrics.FCP, PerformanceMetrics.LCP, PerformanceMetrics.CLS];

function marshallBrowserStats(stats: DistributionResponse) {
  const keys = Object.keys(stats) as Browsers[]

  return keys.map((key: Browsers) => {
    return {
      browser: key,
      stats: mobileStats[key].filter((stat) => allowedBrowserMetrics.includes(stat.name))
    }
  })
}

const overview = await api.overview()
const trends = await api.trend()
const mobileStats = await api.mobileDistrubution()
const desktopStats = await api.mobileDistrubution()

const fcpTrends = computed(() => {
  return trends[PerformanceMetrics.FCP] ?? []
})

const lcpTrends = computed(() => {
  return trends[PerformanceMetrics.LCP] ?? []
})

const mobileBrowserStats = computed(() => {
  return marshallBrowserStats(mobileStats)
});

const desktopBrowserStats = computed(() => {
  return marshallBrowserStats(desktopStats)
});
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">Welcome back, Vishnu</h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <CardVue>
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-6">
        <StatCardVue v-for="metric in overview.metrics" v-bind="metric" />
      </div>
    </CardVue>
    <CardVue title="Paint Metrics">
      <PaintMetricsChart :fcp-trends="fcpTrends" :lcp-trends="lcpTrends" class="p-6 pt-0" />
    </CardVue>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardVue class="pb-6" title="Mobile">
        <template #title-icon>
          <Smartphone class="h-4 w-4 text-black-700" />
        </template>
        <BrowserStatsTitleBar />
        <BrowserStats v-for="(stat, index) in mobileBrowserStats" v-bind="stat" :class="{
          'border-t border-black-200': index !== 0,
        }" />
      </CardVue>
      <CardVue class="pb-6" title="Desktop">
        <template #title-icon>
          <Monitor class="h-4 w-4 text-black-700" />
        </template>
        <BrowserStatsTitleBar />
        <BrowserStats v-for="(stat, index) in desktopBrowserStats" v-bind="stat" :class="{
          'border-t border-black-200': index !== 0,
        }" />
      </CardVue>
    </div>
  </main>
</template>
