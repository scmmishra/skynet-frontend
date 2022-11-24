<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="bg-white rounded-2xl card">
    <slot name="title">
      <div v-if="title || $slots.controls" class="grid grid-cols-4 p-6">
        <span class="col-span-1 uppercase text-xs font-semibold text-black-900/50 tracking-wider">
          {{ title }}
        </span>
        <div class="cols-span-3">
          <slot name="controls"></slot>
        </div>
      </div>
    </slot>
    <slot />
  </section>
</template>
