<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "CalendarWidgetDayGrid",
})
export default class CalendarWidgetDayGrid extends Vue {
  private weekdays = ["M", "T", "W", "T", "F", "S", "S"];
}
</script>

<template>
  <ol class="c-week-day">
    <li v-for="(day, index) in weekdays" :key="index" class="c-week-day__day">
      {{ day }}
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.c-week-day {
  display: grid;
  list-style: none;
  grid-template-columns: repeat(7, 1fr);
  padding: 0px;
  column-gap: 5px;
  &__day {
    text-align: center;
  }
}
</style>
