import AxiosInstance from "./axios.instance";
import {
  Project,
  User,
  ReportRequestData,
  Transaction,
  GateWay,
} from "@/types/interfaces";
export default class API {
  getUser(): Promise<User> {
    return AxiosInstance.get("/users").then(({ data }) => data.data[0]);
  }
  getProjects(): Promise<Project[]> {
    return AxiosInstance.get("/projects").then(({ data }) => data.data);
  }
  getGateways(): Promise<GateWay[]> {
    return AxiosInstance.get("/gateways").then(({ data }) => data.data);
  }
  getReports(data: ReportRequestData): Promise<Transaction[]> {
    return AxiosInstance.post("/report", data).then(({ data }) => data.data);
  }
}
