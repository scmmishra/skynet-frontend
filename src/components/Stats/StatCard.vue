<script lang="ts" setup>
import { computed } from "vue";

import type { BadgeTone } from '../../types/ui';
import { PerformanceMetrics } from "../../types/metrics";

import METRICS, { percentageFromChange, formatUnit, metricStatus } from '../../utils/metrics'

import { ArrowUpRight, ArrowDownRight } from "lucide-vue-next";
import BadgeVue from "../Base/Badge.vue";

const props = defineProps<{
  shortcode: PerformanceMetrics;
  value: number;
  change?: number;
}>()

const title = computed(() => METRICS[props.shortcode].title);
const formattedValue = computed(() => formatUnit(props.shortcode, props.value));
const formattedChange = computed(() => percentageFromChange(props.change));

function computedScore() {
  const status = metricStatus(props.shortcode, props.value);

  if (status === 'positive') {
    return 'bg-green-500';
  }

  if (status === 'negative') {
    return 'bg-red-500';
  }

  if (status === 'warning') {
    return 'bg-orange-500';
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
        <div v-if="scoreAnnotation" class="h-[10px] w-[10px] rounded grid place-content-center"
          :class="scoreAnnotation">
        </div>
        <h3 class="font-medium text-[20px] leading-8 text-black-999">
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
