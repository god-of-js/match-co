<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Project, ReportRequestData, Transaction } from "@/types/interfaces";
import { reportsModule } from "@/store/modules/Reports.store";
import { gatewaysModule } from "@/store/modules/Gateways.store";
import { projectsModule } from "@/store/modules/Projects.store";
@Component({
  name: "Project",
})
export default class ProjectImp extends Vue {
  // Price is not available in the API response.
  @Prop({ default: "10,065 USD" }) price!: string;
  @Prop({}) project!: Project;
  report: Transaction[] = [];
  private showTable = false;

  get reportsWithGateway(): Transaction[] {
    let gateway;
    for (let i = 0; i < this.report.length; i++) {
      gateway = gatewaysModule.gateways.find(
        (gateway) => gateway.gatewayId === this.report[i].gatewayId
      );
      if (gateway) this.report[i].gatewayName = gateway.name;
    }
    return this.report;
  }

  get isFilteredByGateway(): boolean {
    return gatewaysModule.isFilteredByGateway;
  }

  get filterGatewayId(): string {
    return gatewaysModule.filterGatewayId as string;
  }

  get filterProjectId(): string {
    return projectsModule.filterProjectId as string;
  }

  get toFilter(): string {
    return reportsModule.toFilter as string;
  }

  get fromFilter(): string {
    return reportsModule.fromFilter as string;
  }

  @Watch("fromFilter")
  @Watch("toFilter")
  @Watch("filterGatewayId")
  @Watch("filterProjectId")
  triggerGetProjectReport(): void {
    this.getProjectReport();
  }

  private showDetails() {
    this.showTable = !this.showTable;
  }

  private async getProjectReport() {
    const data: ReportRequestData = {
      projectId: this.project.projectId,
    };
    if (this.isFilteredByGateway && this.filterGatewayId) {
      data.gatewayId = this.filterGatewayId;
    }
    if (this.fromFilter) data.from = this.fromFilter;
    if (this.toFilter) data.to = this.toFilter;
    this.report = await reportsModule.getReport(data);
  }

  private replaceHyphens(str: string): string {
    return str.replace(/-/g, "/");
  }

  mounted(): void {
    this.getProjectReport();
  }
}
</script>

<template>
  <div class="c-project">
    <button
      class="c-project__header u-flex u-justify-between"
      @click="showDetails"
    >
      <span>{{ project.name }}</span>
      <span>TOTAL: {{ price }}</span>
    </button>
    <table v-if="showTable" class="c-project__transaction-table">
      <tr>
        <th>Date</th>
        <th v-if="!isFilteredByGateway">Gateway</th>
        <th>Transaction ID</th>
        <th>Amount</th>
      </tr>
      <tr v-for="(transaction, index) in reportsWithGateway" :key="index">
        <td>{{ replaceHyphens(transaction.created) }}</td>
        <td v-if="!isFilteredByGateway">{{ transaction.gatewayName }}</td>
        <td>{{ transaction.paymentId }}</td>
        <td>{{ transaction.amount }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-project {
  width: 100%;
  display: block;
  border: transparent;
  outline: none;
  margin: 10px 0px;
  &__header {
    background: $white;
    border-radius: 10px;
    padding: 20px;
    color: $black;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    width: 100%;
    border: transparent;
    cursor: pointer;
  }
  &__transaction-table {
    width: 100%;

    tr:nth-child(odd) {
      background-color: $white;
    }
    td,
    th {
      padding: 10px 0px;
    }
    td:first-child {
      text-align: left;
      padding-left: 20px;
    }
    td:last-child {
      text-align: right;
      padding-right: 20px;
    }
    th:first-child {
      text-align: left;
      padding-left: 20px;
    }
    th:last-child {
      text-align: right;
      padding-right: 20px;
    }
  }
}
</style>
