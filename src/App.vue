<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppTopNavigation from "./components/AppTopNavigation.vue";
import AppSideBar from "./components/AppSideBar.vue";
@Component({
  components: {
    AppTopNavigation,
    AppSideBar,
  },
  computed: {},
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <app-top-navigation />
    <div class="u-flex">
      <app-side-bar />
      <router-view class="router-view" />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles";
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
.router-view {
  margin: 0px 20px;
  width: 100%;
}
.ml-6 {
  margin-left: 20px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.u-flex {
  display: flex;
}
.u-items-center {
  align-items: center;
}
.u-justify-between {
  justify-content: space-between;
}
.u-justify-center {
  justify-content: center;
}
.u-flex-col {
  flex-direction: column;
}
</style>
