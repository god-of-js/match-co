import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import store from "../index";
import { Report, ReportRequestData } from "@/types/interfaces";
import API from "@/api";

@Module
class ReportsModule extends VuexModule {
  report: Report[] = [];

  @Mutation
  private setReport(param: Report[]): void {
    this.report = param;
  }

  @Action
  async getReport(data: ReportRequestData): Promise<Report> {
    const report = await API.getReports(data);
    return report;
  }
}

export const reportsModule = new ReportsModule({ store, name: "Reports" });
