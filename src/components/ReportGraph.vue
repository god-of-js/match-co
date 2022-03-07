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
    labels: ["Project 1", "Project 2"],
    datasets: [
      {
        label: "My First Dataset",
        data: [60, 40],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };
}
</script>

<template>
  <div class="c-report-graph u-flex u-justify-center u-items-center">
    <doughnut-chart :chartData="chartData" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-report-graph {
}
</style>
