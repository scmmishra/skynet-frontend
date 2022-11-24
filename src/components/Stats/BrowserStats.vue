<script lang="ts" setup>
import { computed } from 'vue';
import { Browsers } from '../../types/browsers';
import { PerformanceMetrics } from '../../types/metrics';
import BROWSERS from '../../utils/browsers';
import { formatUnit } from '../../utils/metrics';

const props = defineProps<{
  browser: Browsers;
  stats: {
    shortcode: PerformanceMetrics;
    value: number;
  }[];
}>();

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
      <div v-for="stat in stats" class="text-black-700">
        {{ formatUnit(stat.shortcode, stat.value) }}
      </div>
    </div>
  </div>
</template>
