<script lang="ts" setup>
import { Chart } from "frappe-charts";
import { ref, onMounted } from "vue";
import { countDaysBackwards } from "../../utils/date";

const props = defineProps<{
  trend: number[];
  name: string;
  color: string;
}>();

const chart = ref(null);

onMounted(() => {
  new Chart(chart.value, {
    data: {
      labels: countDaysBackwards(30),

      datasets: [
        {
          name: props.name,
          values: props.trend,
        },
      ],
    },
    type: "bar",
    height: 300,
    axisOptions: {
      xAxisMode: "tick",
      xIsSeries: true,
      shortenYAxisNumbers: true,
    },
    showLegend: false,
    colors: [props.color],
    tooltipOptions: {
      formatTooltipY: (d: number) => `${d.toFixed(2)} ms`,
    },
  });
});
</script>

<template>
  <div id="#chart" ref="chart" class="-ml-3"></div>
</template>
