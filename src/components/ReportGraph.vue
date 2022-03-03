<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "ReportGraph",
  components: {
    DoughnutChart: () => import("./DoughnutChart.vue"),
  },
})
export default class ReportGraph extends Vue {
  chartData = {
    labels: [1, 5],
    datasets: [
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [60, 90],
      },
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [100, 50],
      },
    ],
  };
}
</script>

<template>
  <div class="c-report-graph u-flex u-justify-between u-items-center">
    <doughnut-chart :chartData="chartData" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-report-graph {
}
</style>
