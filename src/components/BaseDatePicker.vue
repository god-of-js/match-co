<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseDatePicker",
  components: {
    CalendarWidget: () => import("./CalendarWidget.vue"),
  },
})
export default class BaseDatePicker extends Vue {
  private isDropDownVisible = false;
  private toggleDropDown(): void {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
  private handleClick(data: unknown) {
    this.$emit("getData", data);
    this.toggleDropDown();
  }
}
</script>

<template>
  <div class="c-base-date-picker">
    <base-button @click="toggleDropDown"><slot /></base-button>
    <!-- Chose this instead of  -->
    <calendar-widget v-if="isDropDownVisible" @getDate="handleClick" />
  </div>
</template>

<style lang="scss" module>
@import "@/styles";
.c-base-date-picker {
  position: relative;
  display: inline-block;
}
</style>
