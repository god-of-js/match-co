<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
@Component({
  name: "CalendarWidgetMonthNavigator",
})
export default class CalendarWidgetMonthNavigator extends Vue {
  @Prop({ required: true }) private readonly selectedDate!: any;
  @Prop({ required: false }) private readonly isPrevAllowed!: boolean;
  @Prop({ required: false }) private readonly isNextAllowed!: boolean;
  get SelectedMonth(): string {
    return this.selectedDate.format("MMMM");
  }
  private previousMonth(): void {
    const newDate = dayjs(this.selectedDate).subtract(1, "month");
    this.$emit("dateSelected", newDate);
  }
  private nextMonth(): void {
    const newDate = dayjs(this.selectedDate).add(1, "month");
    this.$emit("dateSelected", newDate);
  }
}
</script>

<template>
  <div class="c-month-navigator">
    <div class="u-flex u-items-center u-justify-between">
      <base-button @click="previousMonth">Prev</base-button>
      <span class="font-jost font-medium text-base">{{ SelectedMonth }}</span>
      <base-button @click="nextMonth">Next</base-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-month-navigator {
  padding: 5px;
}
</style>
