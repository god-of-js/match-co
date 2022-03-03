import AxiosInstance from "./axios.instance";
import {
  Project,
  User,
  ReportRequestData,
  Report,
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
    return AxiosInstance.get("/projects").then(({ data }) => data.data);
  }
  getReports(data: ReportRequestData): Promise<Report> {
    return AxiosInstance.post("/report", data).then(({ data }) => data.data);
  }
}
