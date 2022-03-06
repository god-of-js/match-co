<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);

@Component({
  name: "CalendarWidget",
  components: {
    CalendarWidgetWeekDays: () => import("./CalendarWidgetWeekDays.vue"),
    CalendarWidgetMonthNavigator: () =>
      import("./CalendarWidgetMonthNavigator.vue"),
    CalendarWidgetDayItem: () => import("./CalendarWidgetDayItem.vue"),
  },
})
export default class CalendarWidget extends Vue {
  @Prop({ default: false }) readonly isNextAllowed!: boolean;
  @Prop({ default: false }) readonly isPrevAllowed!: boolean;
  @Prop({ default: false }) readonly isNextMonth!: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private selectedDate: any = dayjs();

  get today(): string {
    return dayjs().format("YYYY-MM-DD");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get days(): any[] {
    return [
      ...this.previousMonthDays,
      ...this.currentMonthDays,
      ...this.nextMonthDays,
    ];
  }

  get month(): number {
    return Number(this.selectedDate.format("M"));
  }

  get year(): number {
    return Number(this.selectedDate.format("YYYY"));
  }

  get numberOfDaysInMonth(): number {
    return dayjs(this.selectedDate).daysInMonth();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get currentMonthDays(): any[] {
    return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
      return {
        date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
          "YYYY-MM-DD"
        ),
        isCurrentMonth: true,
      };
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get previousMonthDays(): any[] {
    const firstDayOfTheMonthWeekday = this.getWeekday(
      this.currentMonthDays[0].date
    );
    const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
      1,
      "month"
    );

    // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
      ? firstDayOfTheMonthWeekday - 1
      : 6;

    const previousMonthLastMondayDayOfMonth = dayjs(
      this.currentMonthDays[0].date
    )
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
      (day, index) => {
        return {
          date: dayjs(
            `${previousMonth.year()}-${previousMonth.month() + 1}-${
              previousMonthLastMondayDayOfMonth + index
            }`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false,
        };
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get nextMonthDays(): any[] {
    const lastDayOfTheMonthWeekday = this.getWeekday(
      `${this.year}-${this.month}-${this.currentMonthDays.length}`
    );

    const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
      ? 7 - lastDayOfTheMonthWeekday
      : lastDayOfTheMonthWeekday;

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
      return {
        date: dayjs(
          `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
        ).format("YYYY-MM-DD"),
        isCurrentMonth: false,
      };
    });
  }

  private getWeekday(date: string) {
    return dayjs(date).weekday();
  }

  private dateSelected(selectedDate: Date): void {
    this.selectedDate = selectedDate;
  }

  private chooseDate(e: Date): void {
    this.$emit("getDate", e);
  }

  mounted(): void {
    if (this.isNextMonth) {
      this.selectedDate = dayjs(this.selectedDate).add(1, "month");
    }
  }
}
</script>

<template>
  <div class="c-calendar-widget">
    <calendar-widget-month-navigator
      :selectedDate="selectedDate"
      v-on="{
        dateSelected: dateSelected,
      }"
    />
    <calendar-widget-week-days />
    <ol class="c-calendar-widget__day-item-container">
      <calendar-widget-day-item
        v-for="day in days"
        v-bind="{ day: day }"
        :key="day.date"
        @chooseDate="chooseDate"
      />
    </ol>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";
.c-calendar-widget {
  position: absolute;
  background-color: $white;
  min-width: 200px;
  max-width: 450px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 0px;
  z-index: 1;
  cursor: pointer;
  &__item {
    padding: 12px 16px;
    &:hover {
      background: $grey;
    }
  }
  &__day-item-container {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(7, 1fr);
    padding: 0px;
    gap: 5px;
  }
}
</style>
