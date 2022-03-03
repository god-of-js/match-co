<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import analytics from "@/assets/analytics.vue";
import LaptopIcon from "@/assets/laptop-icon.vue";
import dashboard from "@/assets/dashboard.vue";
import tiles from "@/assets/tiles.vue";
import LogOut from "@/assets/power.vue";
@Component({
  name: "AppSideBar",
  components: {
    analytics,
    LaptopIcon,
    LogOut,
    dashboard,
    tiles,
  },
})
export default class AppSideBar extends Vue {
  routes = [
    {
      route: "/",
      icon: "dashboard",
    },
    {
      route: "/",
      icon: "tiles",
    },
    {
      route: "/",
      icon: "LaptopIcon",
    },
    {
      route: "/",
      icon: "analytics",
    },
    {
      route: "/",
      icon: "LogOut",
    },
  ];
}
</script>

<template>
  <div class="c-app-side-bar">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.route">
          <component :is="route.icon" width="20" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.c-app-side-bar {
  height: 90vh;
  padding: 0px 0px 0px 35px;
}
ul {
  list-style-type: none;
  padding: 0px;
  li {
    margin: 20px 0px 0px 0px;
  }
}
</style>
