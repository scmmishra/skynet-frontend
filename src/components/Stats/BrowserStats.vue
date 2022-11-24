<script lang="ts" setup>
import { computed } from 'vue';
import { Browsers } from '../../types/browsers';
import { PerformanceMetrics } from '../../types/metrics';
import BROWSERS from '../../utils/browsers';
import { formatUnit, metricStatus } from '../../utils/metrics';

const props = defineProps<{
  browser: Browsers;
  stats: {
    name: PerformanceMetrics;
    value: number;
  }[];
}>();

function computedScore(name: PerformanceMetrics, value: number) {
  const status = metricStatus(name, value);

  if (status === 'negative') {
    return 'bg-red-500';
  }

  if (status === 'warning') {
    return 'bg-orange-500';
  }

  if (status === 'positive') {
    return 'bg-green-500';
  }
}

function textColor(name: PerformanceMetrics, value: number) {
  const status = metricStatus(name, value);

  if (status === 'negative') {
    return 'text-red-500';
  }
}

const currentBrowser = computed(() => {
  return BROWSERS[props.browser];
});

</script>

<template>
  <div class="grid grid-cols-3 py-5 hover:bg-black-100/50 px-6">
    <div class="flex items-center gap-2 cols-span-1 text-black-600">
      <img :src="currentBrowser.image" class="w-6 h-6" />
      {{ currentBrowser.name }}
    </div>
    <div class="grid grid-cols-3 gap-2 col-span-2">
      <div v-for="stat in stats" class="flex justify-end text-base">
        <div class="text-black-700 inline-flex text-right items-center gap-2 justify-end px-2 py-1 rounded-md"
          :class="textColor(stat.name, stat.value)">
          <div v-if="computedScore(stat.name, stat.value)" :class="computedScore(stat.name, stat.value)"
            class="w-2 h-2 rounded-full" />
          {{ formatUnit(stat.name, stat.value) }}
        </div>
      </div>
    </div>
  </div>
</template>
