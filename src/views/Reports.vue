<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projectsModule } from "@/store/modules/Projects.store";
import { gatewaysModule } from "@/store/modules/Gateways.store";
import { Project } from "@/types/interfaces";
@Component({
  name: "Reports",
  components: {
    ReportActions: () => import("@/components/ReportActions.vue"),
    NoReports: () => import("@/components/NoReports.vue"),
    AllProjects: () => import("@/components/AllProjects.vue"),
    ReportGraph: () => import("@/components/ReportGraph.vue"),
  },
})
export default class Reports extends Vue {
  private isReportGraphVisible = false;
  private loading = true;

  get projects(): Project[] {
    return projectsModule.projects;
  }
  get hasProjects(): boolean {
    return !this.loading && this.projects && this.projects.length > 0;
  }
  private generateReport(): void {
    this.isReportGraphVisible = !this.isReportGraphVisible;
  }
  mounted(): void {
    Promise.all([
      projectsModule.getProjects(),
      gatewaysModule.getGateways(),
    ]).then(() => {
      this.loading = false;
    });
  }
}
</script>

<template>
  <div>
    <report-actions @generateReport="generateReport" />
    <div class="u-flex">
      <div class="reports__content">
        <all-projects v-if="hasProjects" />
        <div v-else-if="loading">Loading....</div>
        <no-reports v-else />
      </div>
      <report-graph v-if="isReportGraphVisible" class="reports__graph" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";
.reports {
  &__content {
    width: 100%;
  }
  &__graph {
    width: 100%;
  }
}
</style>
