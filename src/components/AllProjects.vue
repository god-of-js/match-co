<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { projectsModule } from "@/store/modules/Projects.store";
import { Project } from "@/types/interfaces";
import { gatewaysModule } from "@/store/modules/Gateways.store";

@Component({
  name: "AllProjects",
  components: {
    project: () => import("./Project.vue"),
  },
})
export default class AllProjects extends Vue {
  get projects(): Project[] {
    const projects = this.isFilteredByProject
      ? this.filteredProjects
      : projectsModule.projects;
    return projects;
  }
  get filteredProjects(): Project[] {
    return projectsModule.filteredProjects;
  }
  get isFilteredByProject(): boolean {
    return projectsModule.isFilteredByProject;
  }
  get isFilteredByGateway(): boolean {
    return gatewaysModule.isFilteredByGateway;
  }
  get gatewayName(): string | null {
    const name = gatewaysModule.gateway?.name;
    if (name) return name;
    else return null;
  }
}
</script>

<template>
  <div class="c-all-projects">
    <h2 class="c-all-projects__title">
      {{ isFilteredByProject ? filteredProjects[0].name : "All projects" }} |
      {{ isFilteredByGateway ? gatewayName : "All gateways" }}
    </h2>
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
