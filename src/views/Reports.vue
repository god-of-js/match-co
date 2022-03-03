<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Reports",
  components: {
    ReportActions: () => import("@/components/ReportActions.vue"),
    NoReports: () => import("@/components/NoReports.vue"),
  },
})
export default class Reports extends Vue {
  reports = [];
}
</script>

<template>
  <div>
    <report-actions />
    <no-reports />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";
</style>
