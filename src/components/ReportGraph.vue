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
  <div class="c-report-graph u-flex u-justify-center u-items-center u-flex-col">
    <doughnut-chart :chartData="chartData" />
    <div class="c-report-graph__price">GATEWAY TOTAL: 14,065 USD</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-report-graph {
  &__price {
    background: $light-blue;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
    font-size: 16px;
    text-align: left;
    font-weight: 700;
    width: 100%;
  }
}
</style>
