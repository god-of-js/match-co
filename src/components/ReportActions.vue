<script lang="ts">
import { gatewaysModule } from "@/store/modules/Gateways.store";
import { projectsModule } from "@/store/modules/Projects.store";
import { reportsModule } from "@/store/modules/Reports.store";
import { GateWay, Project } from "@/types/interfaces";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "ReportActions",
})
export default class ReportActions extends Vue {
  data = {
    projectId: "",
    gatewayId: "",
  };
  projectsTitle = "All Projects";
  gatewaysTitle = "All gateways";
  from = "From date";
  to = "To date";
  get projects(): Project[] {
    return projectsModule.projects as Project[];
  }

  get gateways(): GateWay[] {
    return gatewaysModule.gateways;
  }

  private setProjectsData(param: Project): void {
    this.data.projectId = param.projectId;
    this.projectsTitle = param.name;
    this.getProjectData();
    projectsModule.setIsFilteredByProject(true);
    projectsModule.setFilterProjectId(param.projectId);
  }

  private setGatewaysData(param: GateWay): void {
    this.data.gatewayId = param.gatewayId;
    this.gatewaysTitle = param.name;
    this.getProjectData();
    gatewaysModule.setIsFilteredByGateway(true);
    gatewaysModule.setFilterGateWayId(param.gatewayId);
  }
  private setFrom(e: string) {
    this.from = e;
    reportsModule.setFromFilter(e);
  }

  private setTo(e: string) {
    this.to = e;
    reportsModule.setToFilter(e);
  }
  private async getProjectData(): Promise<void> {
    await reportsModule.getReport(this.data);
  }
}
</script>

<template>
  <div class="c-report-actions u-flex u-justify-between u-items-center">
    <div>
      <h1 class="c-report-actions__title">Reports</h1>
      <legend class="c-report-actions__caption">
        Easily generate a report of your transactions
      </legend>
    </div>
    <div class="u-flex u-items-center">
      <base-drop-down :dropDownData="projects" @getData="setProjectsData"
        ><span>{{ projectsTitle }}</span>
        <img src="@/assets/caret-down.svg" alt="caret down" class="ml-6"
      /></base-drop-down>
      <base-drop-down
        class="ml-6"
        :dropDownData="gateways"
        @getData="setGatewaysData"
        ><span>{{ gatewaysTitle }}</span>
        <img src="@/assets/caret-down.svg" alt="caret down" class="ml-6"
      /></base-drop-down>
      <base-date-picker class="ml-6" @getData="setFrom"
        ><span>{{ from }}</span>
        <img src="@/assets/calendar.svg" alt="caret down" class="ml-6"
      /></base-date-picker>
      <base-date-picker class="ml-6" @getData="setTo"
        ><span>{{ to }}</span>
        <img src="@/assets/calendar.svg" alt="caret down" class="ml-6"
      /></base-date-picker>
      <base-button
        class="ml-6"
        variant="secondary"
        @click="$emit('generateReport')"
        >Generate report</base-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-report-actions {
  text-align: left;
  width: 100%;
  &__title {
    font-weight: 700;
    color: $black;
    font-size: 20px;
    margin-bottom: 4px;
  }
  &__caption {
    font-weight: 600;
    color: $dark-grey;
    font-size: 14px;
  }
}
</style>
