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
  private isReportGraphVisible = true;
  get projects(): Project[] {
    return projectsModule.projects as Project[];
  }
  private generateReport(): void {
    this.isReportGraphVisible = true;
  }
  mounted(): void {
    projectsModule.getProjects();
    gatewaysModule.getGateways();
  }
}
</script>

<template>
  <div>
    <report-actions @generateReport="generateReport" />
    <no-reports v-if="!projects || projects.length === 0" />
    <all-projects v-else />
    <report-graph v-if="isReportGraphVisible" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";
</style>
