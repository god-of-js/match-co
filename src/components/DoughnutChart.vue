<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    chartData: {
      required: true,
      type: Object,
    },
    // options: {
    //   required: true,
    //   type: Object,
    // },
  },
  mounted() {
    this.renderChart(this.chartData);
  },
};
</script>
