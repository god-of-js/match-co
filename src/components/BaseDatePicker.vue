<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixin as clickaway } from "vue-clickaway";

@Component({
  name: "BaseDatePicker",
  mixins: [clickaway],
  components: {
    CalendarWidget: () => import("./CalendarWidget.vue"),
  },
})
export default class BaseDatePicker extends Vue {
  private isDropDownVisible = false;

  private showDrowDown(): void {
    this.isDropDownVisible = true;
  }
  private hideDropDown(): void {
    this.isDropDownVisible = false;
  }
  private handleClick(data: unknown) {
    this.$emit("getData", data);
    this.hideDropDown();
  }
}
</script>

<template>
  <div class="c-base-date-picker" v-on-clickaway="hideDropDown">
    <base-button @click="showDrowDown"><slot /></base-button>
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
