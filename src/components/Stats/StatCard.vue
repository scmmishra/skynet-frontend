<script lang="ts" setup>
import { computed } from "vue";

import type { BadgeTone } from '../../types/ui';
import { Percentile, PerformanceMetrics } from "../../types/metrics";

import METRICS from '../../utils/metrics'

import { ArrowUpRight, ArrowDownRight } from "lucide-vue-next";
import BadgeVue from "../Base/Badge.vue";

const props = defineProps<{
  shortcode: PerformanceMetrics;
  value: number;
  change?: number;
}>()

const title = computed(() => METRICS[props.shortcode].title);
const formattedValue = computed(() => METRICS[props.shortcode].unitFormat(props.value));
const formattedChange = computed(() => {
  if (props.change) {
    return `${Math.abs(props.change).toFixed(0)}%`
  }

  return ''
});

function computedScore() {
  const threshold = METRICS[props.shortcode].threshold

  if (threshold) {
    const p75Thresholds = threshold[Percentile.p75]
    const isGood = p75Thresholds.good(props.value)
    const isPoor = p75Thresholds.poor(props.value)

    if (isGood) {
      return 'bg-green-500'
    }

    if (isPoor) {
      return 'bg-red-500'
    }

    return 'bg-orange-500'
  }

  return ''
}

function computedTone(): BadgeTone {
  if (props.change) {
    return props.change > 0 ? 'negative' : 'positive'
  }

  return 'neutral'
}

const scoreAnnotation = computed(computedScore)
const tagTone = computed(computedTone);

</script>
<template>
  <div class="space-y-1">
    <h5 class="text-sm font-normal leading-6 text-black-600">
      {{ title }}
    </h5>
    <div class="flex items-center gap-x-5">
      <div class="flex items-center gap-2">
        <div v-if="scoreAnnotation" class="h-2 w-2 rounded" :class="scoreAnnotation"></div>
        <h3 class="font-medium text-[24px] leading-8 text-black-999">
          {{ formattedValue }}
        </h3>
      </div>
      <BadgeVue v-if="formattedChange" :tone="tagTone">
        <ArrowUpRight class="w-4 h-4" v-if="tagTone === 'negative'" />
        <ArrowDownRight class="w-4 h-4" v-else-if="tagTone === 'positive'" />
        <span class="tabular-nums">{{ formattedChange }}</span>
      </BadgeVue>
    </div>
  </div>
</template>
