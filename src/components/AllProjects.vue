<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projectsModule } from "@/store/modules/Projects.store";
import { Project } from "@/types/interfaces";
import { reportsModule } from "@/store/modules/Reports.store";

@Component({
  name: "AllProjects",
  components: {
    project: () => import("./Project.vue"),
  },
})
export default class AllProjects extends Vue {
  get unfilteredProjects(): Project[] {
    return projectsModule.projects;
  }
  get filteredProjects(): Project[] {
    const selectedProjectId = reportsModule.report[0].projectId;
    const projects = projectsModule.projects?.filter(
      (project) => project.projectId === selectedProjectId
    );
    return projects;
  }
  get projects(): Project[] {
    const projects = projectsModule.isFilteredByProduct
      ? this.filteredProjects
      : this.unfilteredProjects;
    return projects;
  }
  mounted(): void {
    projectsModule.getProjects();
  }
}
</script>

<template>
  <div class="c-all-projects">
    <h2 class="c-all-projects__title">All projects | All gateways</h2>
    <project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-all-projects {
  background: $light-blue;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  &__title {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }
}
</style>
