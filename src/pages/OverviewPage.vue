<script lang="ts" setup>
import { formatDate } from '../utils/date';
</script>

<template>
  <main class="py-8 pr-4 grid space-y-6">
    <section class="space-y-2">
      <h1 class="font-normal text-[24px] leading-8 text-black-999">Welcome back, Vishnu</h1>
      <p class="text-black-600 text-sm">{{ formatDate() }}</p>
    </section>
    <section class="p-6 rounded-2xl w-full h-80 bg-white card">
    </section>
  </main>
</template>
