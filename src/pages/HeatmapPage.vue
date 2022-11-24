<script setup>
import { formatDate } from "../utils/date";
import Card from "../components/Base/Card.vue";
import DottedMap from "dotted-map";
import mapJson from "../utils/map";

const map = new DottedMap({
  map: mapJson,
  height: 60,
  grid: "diagonal",
});

map.addPin({
  lat: 28.6,
  lng: 78.962883,
  svgOptions: {
    color: "#ff921b",
    radius: 0.8,
  },
});

map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  svgOptions: { color: "#ec5962", radius: 0.8 },
});

const svgMap = map.getSVG({
  radius: 0.22,
  color: "#c0c0c0",
  shape: "circle",
  backgroundColor: "white",
});
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
      <div v-html="svgMap"></div>
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

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

circle[fill="#ff921b"],
circle[fill="#ec5962"] {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
