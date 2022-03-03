<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "NoReport",
})
export default class NoReport extends Vue {}
</script>

<template>
  <div class="c-no-report u-flex u-justify-between u-items-center">
    <div>
      <h1 class="c-no-report__title">No Reports</h1>
      <p class="c-no-report__text">
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </p>
      <img src="@/assets/no-reports.svg" alt="no reports" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-no-report {
  height: 100%;
  &__title {
    font-weight: 700;
    color: $black;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__text {
    font-weight: 600;
    width: 40%;
    color: $dark-grey;
    font-size: 14px;
    margin: auto;
    margin-bottom: 20px;
  }
}
</style>
