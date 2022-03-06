import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import store from "../index";
import { Transaction, ReportRequestData } from "@/types/interfaces";
import API from "@/api";

@Module
class ReportsModule extends VuexModule {
  report: Transaction[] = [];

  @Mutation
  private setReport(param: Transaction[]): void {
    this.report = param;
  }

  @Action
  async getReport(data: ReportRequestData): Promise<Transaction[]> {
    const report = await API.getReports(data);
    console.log(report);
    return report;
  }
}

export const reportsModule = new ReportsModule({ store, name: "Reports" });
