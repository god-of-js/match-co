import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import store from "../index";
import { Transaction, ReportRequestData } from "@/types/interfaces";
import API from "@/api";

@Module
class ReportsModule extends VuexModule {
  report: Transaction[] = [];
  toFilter: string | null = null;
  fromFilter: string | null = null;

  @Mutation
  setReport(param: Transaction[]): void {
    this.report = param;
  }

  @Mutation
  setFromFilter(param: string): void {
    this.fromFilter = param;
  }

  @Mutation
  setToFilter(param: string): void {
    this.toFilter = param;
  }

  @Action
  async getReport(data: ReportRequestData): Promise<Transaction[]> {
    const report = await API.getReports(data);
    return report;
  }
}

export const reportsModule = new ReportsModule({ store, name: "Reports" });
