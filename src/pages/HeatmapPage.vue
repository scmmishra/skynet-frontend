<script lang="ts" setup>
import { formatDate } from "../utils/date";
import Card from "../components/Base/Card.vue";
import MapTrends from "../components/Stats/MapTrends.vue";
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Global Heatmap, p99
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>

    <Card class="p-6">
      <MapTrends class="mx-auto" />
    </Card>
  </main>
</template>

<style>
:root {
  --map-dot-negative: #ec5962;
  --map-dot-warning: #ff921b;
  --map-dot-positive: #68c132;
  --map-default-dot: #c0c0c0;
}

.india {
  --map-default-dot: var(--map-dot-positive);
  stroke-width: 10px;
}
</style>
