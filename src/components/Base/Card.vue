<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="bg-white rounded-2xl card">
    <div v-if="title || $slots.controls" class="grid grid-cols-4 p-6">
      <span
        class="col-span-full text-base font-medium text-black-900 flex items-center gap-2"
      >
        <slot name="title-icon"></slot>
        {{ title }}
      </span>
    </div>
    <slot />
  </section>
</template>
