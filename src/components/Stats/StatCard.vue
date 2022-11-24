
<script lang="ts" setup>
import { computed } from "vue";
import { PerformanceMetrics } from "../../types/metrics";

import METRICS from '../../utils/metrics'

const props = defineProps<{
  shortcode: PerformanceMetrics;
  value: number;
}>()

function getTitle(): string {
  return METRICS[props.shortcode].title;
}

function formatValue(): string {
  return METRICS[props.shortcode].unitFormat(props.value);
}

const title = computed(getTitle);
const formattedValue = computed(formatValue);

</script>
<template>
  <div class="space-y-1">
    <h5 class="text-sm font-normal leading-6 text-black-600">
      {{ title }}
    </h5>
    <h3 class="font-medium text-[24px] leading-8 text-black-999">
      {{ formattedValue }}
    </h3>
  </div>
</template>
