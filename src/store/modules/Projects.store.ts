import API from "@/api";
import { Project } from "@/types/interfaces";
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class ProjectsModule extends VuexModule {
  projects: Project[] = [];
  isFilteredByProject = false;
  filterProjectId: string | null = null;

  get filteredProjects(): Project[] {
    const projects = projectsModule.projects?.filter(
      (project) => project.projectId === this.filterProjectId
    );
    return projects;
  }

  @Mutation
  setIsFilteredByProject(param: boolean) {
    this.isFilteredByProject = param;
  }

  @Mutation
  setFilterProjectId(param: string) {
    this.filterProjectId = param;
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
