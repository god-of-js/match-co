import API from "@/api";
import { Project } from "@/types/interfaces";
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class ProjectsModule extends VuexModule {
  projects: Project[] | null = null;
  @Mutation
  setProjects(param: Project[]) {
    this.projects = param;
  }

  @Action
  async getProjects() {
    const projects = await API.getProjects();
    this.setProjects(projects);
  }
}

import store from "../index";
export const projectsModule = new ProjectsModule({ store, name: "Projects" });
