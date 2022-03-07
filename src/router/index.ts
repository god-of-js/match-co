import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Reports from "@/views/Reports.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    component: Reports,
    name: "Reports",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
