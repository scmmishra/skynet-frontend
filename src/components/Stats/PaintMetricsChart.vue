<script lang="ts" setup>
import { Chart } from "frappe-charts";
import { ref, onMounted, watch } from "vue";
import { metricsColorsMap, PerformanceMetrics } from "../../types/metrics";
import { countDaysBackwards } from "../../utils/date";

const props = defineProps<{
  lcpTrends: number[];
  fcpTrends: number[];
}>();

const chart = ref(null);
let chartObj: unknown = null;

watch(
  () => props.lcpTrends,
  () => {
    if (chartObj) {
      console.log("updating chart");
      // @ts-ignore
      chartObj.update({
        labels: countDaysBackwards(30),
        datasets: [
          {
            name: "First Contentful Paint",
            chartType: "line",
            values: props.fcpTrends,
          },
          {
            name: "Largest Contentful Paint",
            chartType: "line",
            values: props.lcpTrends,
          },
        ],
      });
    }
  }
);

onMounted(() => {
  chartObj = new Chart(chart.value, {
    data: {
      labels: countDaysBackwards(30),

      datasets: [
        {
          name: "First Contentful Paint",
          chartType: "line",
          values: props.fcpTrends,
        },
        {
          name: "Largest Contentful Paint",
          chartType: "line",
          values: props.lcpTrends,
        },
      ],
    },

    type: "axis-mixed",
    height: 300,
    lineOptions: {
      spline: true,
      trailingDot: true,
    },
    axisOptions: {
      xAxisMode: "tick",
      xIsSeries: true,
      shortenYAxisNumbers: true,
      yAxisRange: {
        min: 0,
      },
    },
    showLegend: false,
    colors: [
      metricsColorsMap[PerformanceMetrics.FCP],
      metricsColorsMap[PerformanceMetrics.LCP],
    ],
    tooltipOptions: {
      formatTooltipY: (d: number) => `${d.toFixed(2)} ms`,
    },
  });
});
</script>

<template>
  <div id="#chart" ref="chart" class="-ml-3"></div>
</template>
