<script lang="ts" setup>
import { computed } from 'vue';

export interface Props {
  tone?: 'danger' | 'neutral' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  tone: 'neutral',
});


const toneState = computed(() => {
  if (props.tone === 'primary') {
    return 'bg-green-100 text-green-600'
  }

  if (props.tone === 'danger') {
    return 'bg-red-100 text-red-600'
  }

  return 'bg-gray-100 text-gray-500'
})
</script>
<template>
  <span class="inline-flex items-center gap-1 px-2 py-1 text-xs leading-none rounded-md" :class="toneState">
    <slot />
  </span>
</template>
