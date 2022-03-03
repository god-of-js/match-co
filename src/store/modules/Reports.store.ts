import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import API from "@/api";

@Module
class ReportsModule extends VuexModule {
  report: ReportRequestData | null = null;

  @Mutation
  private setReport(param: ReportRequestData): void {
    this.report = param;
  }

  @Action
  async getReport(data: ReportRequestData): Promise<Report> {
    const report = await API.getReports(data);
    console.log(report, "report");
    return report;
  }
}

import store from "../index";
import { Report, ReportRequestData } from "@/types/interfaces";
export const reportsModule = new ReportsModule({ store, name: "Reports" });
