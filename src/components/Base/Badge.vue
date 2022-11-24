<script lang="ts" setup>
import { computed } from 'vue';
import type { BadgeTone } from '../../types/ui';

export interface Props {
  tone?: BadgeTone
}

const props = withDefaults(defineProps<Props>(), {
  tone: 'neutral',
});


const toneState = computed(() => {
  if (props.tone === 'positive') {
    return 'bg-green-100 text-green-700'
  }

  if (props.tone === 'negative') {
    return 'bg-red-100 text-red-700'
  }

  if (props.tone === 'warning') {
    return 'bg-orange-100 text-orange-700'
  }

  return 'bg-black-100 text-black-500'
})
</script>
<template>
  <span class="inline-flex items-center gap-1 px-1.5 py-1 text-xs leading-none rounded-md font-medium"
    :class="toneState">
    <slot />
  </span>
</template>
