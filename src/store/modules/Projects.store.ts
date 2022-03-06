import API from "@/api";
import { Project } from "@/types/interfaces";
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class ProjectsModule extends VuexModule {
  projects: Project[] = [];
  isFilteredByProduct = false;
  filterProductId: string | null = null;

  get filteredProjects(): Project[] {
    const projects = projectsModule.projects?.filter(
      (project) => project.projectId === this.filterProductId
    );
    return projects;
  }

  @Mutation
  setIsFilteredByProduct(param: boolean) {
    this.isFilteredByProduct = param;
  }

  @Mutation
  setFilterProductId(param: string) {
    this.filterProductId = param;
  }

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
