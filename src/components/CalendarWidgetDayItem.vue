<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
@Component({
  name: "CalendarWidgetDaysGridDayItem",
})
export default class CalendarWidgetDaysGridDayItem extends Vue {
  @Prop({ required: true }) day!: { date: Date; isCurrentMonth: boolean };

  get label(): string {
    return dayjs(this.day.date).format("D");
  }

  private getDate(): void {
    this.$emit("chooseDate", this.day.date);
  }
}
</script>

<template>
  <li
    class="c-day-item"
    @click="getDate"
    :class="`${day.isCurrentMonth ? '' : 'c-day-item--inactive'}`"
  >
    {{ label }}
  </li>
</template>

<style lang="scss" scoped>
@import "@/styles";
.c-day-item {
  padding: 3px;
  text-align: center;
  &:hover {
    background-color: $grey;
  }
  &--inactive {
    opacity: 0.1;
  }
  &--is-between {
    background-color: $grey;
  }
}
</style>
