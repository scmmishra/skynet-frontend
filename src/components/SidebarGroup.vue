<script lang="ts" setup>
export interface Props {
  title?: string | null;
}

withDefaults(defineProps<Props>(), {
  title: null,
});

</script>

<template>
  <nav class="space-y-1">
    <div v-if="title" class="text-gray-500 px-4 pb-2.5 text-sm">{{ title }}</div>
    <slot></slot>
  </nav>
</template>
