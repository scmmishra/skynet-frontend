<script lang="ts" setup>
import { computed } from 'vue';

export interface Props {
  title: string;
  link?: string;
  active?: boolean
  disabled?: boolean;
  badgeText?: string | number | null;
  tone?: 'danger' | 'neutral' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  active: false,
  hint: null,
  badgeText: null,
  tone: 'neutral',
});

const state = computed(() => {
  if (props.disabled) {
    return 'text-gray-500 pointer-events-none'
  }
  if (props.active) {
    return 'text-gray-900 bg-gray-100'
  }
  return 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
});

const toneState = computed(() => {
  if (props.disabled) {
    return 'bg-gray-100 text-gray-300'
  }

  if (props.tone === 'neutral') {
    return 'bg-gray-100 text-gray-500'
  }
  if (props.tone === 'primary') {
    return 'bg-green-100 text-green-600'
  }
  if (props.tone === 'danger') {
    return 'bg-red-100 text-red-600'
  }
})
</script>

<template>
  <component :is="link ? 'a' : 'button'" :href="link"
    class="flex items-center gap-x-3 px-4 py-2 rounded-lg w-full text-sm" :class="state">
    <slot></slot>
    <span class="leading-none flex-grow text-left py-1">{{ title }}</span>
    <span v-if="badgeText" class="rounded-md text-xs px-2 py-1 leading-none" :class="toneState">
      {{ badgeText }}
    </span>
  </component>
</template>
