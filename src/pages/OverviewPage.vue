<script lang="ts" setup>
import { formatDate } from '../utils/date';
import { PerformanceMetrics } from "../types/metrics";
import StatCardVue from '../components/Stats/StatCard.vue';
import CardVue from '../components/Base/Card.vue';
import PaintMetricsChart from '../components/Stats/PaintMetricsChart.vue';
import BrowserStats from '../components/Stats/BrowserStats.vue';
import { Browsers } from '../types/browsers';

const metricValues = [
  {
    shortcode: PerformanceMetrics.FCP,
    value: 1013,
    change: 12.5,
  },
  {
    shortcode: PerformanceMetrics.LCP,
    value: 2050,
    change: -2,
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
    value: 0.15,
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

function getTestStat() {
  return [
    {
      shortcode: PerformanceMetrics.FCP,
      value: Math.round(1000 + (Math.random() * 100)),
    },
    {
      shortcode: PerformanceMetrics.LCP,
      value: Math.round(2000 + (Math.random() * 400)),
    },
    {
      shortcode: PerformanceMetrics.CLS,
      value: Math.random()
    },
  ]
}

const mobileBrowserStats = [
  { browser: Browsers.BRAVE, stats: getTestStat() },
  { browser: Browsers.CHROME, stats: getTestStat() },
  { browser: Browsers.EDGE, stats: getTestStat() },
  { browser: Browsers.FIREFOX, stats: getTestStat() },
]

const desktopBrowserStats = [
  { browser: Browsers.BRAVE, stats: getTestStat() },
  { browser: Browsers.SAFARI, stats: getTestStat() },
  { browser: Browsers.CHROME, stats: getTestStat() },
  { browser: Browsers.EDGE, stats: getTestStat() },
  { browser: Browsers.FIREFOX, stats: getTestStat() },
]
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">Welcome back, Vishnu</h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <CardVue>
      <div class="grid grid-cols-4 gap-8 p-6">
        <StatCardVue v-for="metric in metricValues" v-bind="metric" />
      </div>
    </CardVue>
    <CardVue title="Paint Metrics">
      <PaintMetricsChart class="p-6" />
    </CardVue>
    <div class="grid grid-cols-2 gap-6">
      <CardVue class="py-6">
        <div class="grid grid-cols-3 card-title mb-4 px-6">
          <div class="col-span-1">
            Browser
          </div>
          <div class="grid grid-cols-3 gap-2 col-span-2">
            <div>FCP</div>
            <div>LCP</div>
            <div>CLS</div>
          </div>
        </div>
        <BrowserStats v-for="stat in mobileBrowserStats" v-bind="stat" />
      </CardVue>
      <CardVue class="py-6">
        <div class="grid grid-cols-3 card-title mb-4 px-6">
          <div class="col-span-1">
            Browser
          </div>
          <div class="grid grid-cols-3 gap-2 col-span-2">
            <div>FCP</div>
            <div>LCP</div>
            <div>CLS</div>
          </div>
        </div>
        <BrowserStats v-for="stat in desktopBrowserStats" v-bind="stat" />
      </CardVue>
    </div>
  </main>
</template>
