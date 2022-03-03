<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "ReportActions",
})
export default class ReportActions extends Vue {}
</script>

<template>
  <div class="c-report-actions u-flex u-justify-between u-items-center">
    <div>
      <h1 class="c-report-actions__title">Reports</h1>
      <legend class="c-report-actions__caption">
        Easily generate a report of your transactions
      </legend>
    </div>
    <div class="u-flex u-items-center">
      <base-button
        ><span>All projects</span>
        <img src="@/assets/caret-down.svg" alt="caret down" class="ml-6"
      /></base-button>
      <base-button class="ml-6"
        ><span>All gateways</span>
        <img src="@/assets/caret-down.svg" alt="caret down" class="ml-6"
      /></base-button>
      <base-button class="ml-6"
        ><span>From date</span>
        <img src="@/assets/calendar.svg" alt="caret down" class="ml-6"
      /></base-button>
      <base-button class="ml-6"
        ><span>To date</span>
        <img src="@/assets/calendar.svg" alt="caret down" class="ml-6"
      /></base-button>
      <base-button class="ml-6" variant="secondary"
        >Generate report</base-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-report-actions {
  text-align: left;
  width: 100%;
  &__title {
    font-weight: 700;
    color: $black;
    font-size: 20px;
    margin-bottom: 4px;
  }
  &__caption {
    font-weight: 600;
    color: $dark-grey;
    font-size: 14px;
  }
}
</style>
