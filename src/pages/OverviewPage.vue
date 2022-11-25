<script lang="ts" setup>
import { formatDate } from "../utils/date";
import {
  PerformanceMetrics,
  allowedBrowserMetrics,
  metricsOrder,
} from "../types/metrics";
import StatCardVue from "../components/Stats/StatCard.vue";
import CardVue from "../components/Base/Card.vue";
import PaintMetricsChart from "../components/Stats/PaintMetricsChart.vue";
import BrowserStats from "../components/Stats/BrowserStats.vue";
import { Browsers } from "../types/browsers";
import BrowserStatsTitleBar from "../components/Stats/BrowserStatsTitleBar.vue";

import { Smartphone, Monitor } from "lucide-vue-next";

import api from "../utils/api";
import { computed, ref } from "vue";
import { DistributionResponse } from "../types/api";
import { setIntervalAsync } from "../utils/request";

function marshallBrowserStats(stats: DistributionResponse) {
  const keys = Object.keys(stats) as Browsers[];

  return keys.map((key: Browsers) => {
    return {
      browser: key,
      stats: stats[key]
        .filter((stat) => allowedBrowserMetrics.includes(stat.name))
        .sort(
          (a, b) => metricsOrder.indexOf(a.name) - metricsOrder.indexOf(b.name)
        ),
    };
  });
}

let overview = ref(await api.overview());
let trends = ref(await api.trend());

setIntervalAsync(async () => {
  overview.value = await api.overview();
  trends.value = await api.trend();
}, 2000);

const [mobileStats, desktopStats] = await Promise.all([
  api.mobileDistrubution(),
  api.desktopDistrubution(),
]);

const fcpTrends = computed(() => {
  return trends.value[PerformanceMetrics.FCP] ?? [];
});

const lcpTrends = computed(() => {
  return trends.value[PerformanceMetrics.LCP] ?? [];
});

const mobileBrowserStats = computed(() => {
  return marshallBrowserStats(mobileStats);
});

const desktopBrowserStats = computed(() => {
  return marshallBrowserStats(desktopStats);
});

const overviewMetrics = computed(() => {
  return overview.value.metrics.sort(
    (a, b) => metricsOrder.indexOf(a.name) - metricsOrder.indexOf(b.name)
  );
});
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Overview, p75
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <CardVue>
      <div
        class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 p-6"
      >
        <StatCardVue v-for="metric in overviewMetrics" v-bind="metric" />
      </div>
    </CardVue>
    <CardVue title="Paint Metrics">
      <PaintMetricsChart
        :fcp-trends="fcpTrends"
        :lcp-trends="lcpTrends"
        class="p-6 pt-0"
      />
    </CardVue>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardVue class="pb-6" title="Mobile">
        <template #title-icon>
          <Smartphone class="h-4 w-4 text-black-700" />
        </template>
        <BrowserStatsTitleBar />
        <BrowserStats
          v-for="(mobileStat, index) in mobileBrowserStats"
          v-bind="mobileStat"
          :class="{
            'border-t border-black-200': index !== 0,
          }"
        />
      </CardVue>
      <CardVue class="pb-6" title="Desktop">
        <template #title-icon>
          <Monitor class="h-4 w-4 text-black-700" />
        </template>
        <BrowserStatsTitleBar />
        <BrowserStats
          v-for="(stat, index) in desktopBrowserStats"
          v-bind="stat"
          :class="{
            'border-t border-black-200': index !== 0,
          }"
        />
      </CardVue>
    </div>
  </main>
</template>
