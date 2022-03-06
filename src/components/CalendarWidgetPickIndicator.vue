<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "CalendarWidgetPickIndicator",
})
export default class CalendarWidgetPickIndicator extends Vue {
  @Prop({}) readonly label!: string;
  @Prop({}) readonly selectedDate!: string;
  @Prop({ default: false }) readonly isActive!: boolean;
}
</script>

<template>
  <button
    class="
      h-12
      outline-none
      px-3
      py-0
      text-xs
      rounded-lg
      border
      font-jost
      flex
      items-center
      relative
    "
    @click="$emit('select')"
    :class="{
      'border-primary': isActive,
    }"
  >
    <base-icon iconName="calendar" class="text-primary mr-3" />
    <div class="">
      <label
        class="
          text-dark
          uppercase
          text-3xs
          font-jost font-light
          text-dark text-left
          block
          p-0
        "
        for="date-picker"
        >{{ label }}</label
      >
      <input
        class="outline-none w-full cursor-pointer bg-white"
        placeholder=" "
        id="date-picker"
        :value="!!selectedDate ? selectedDate : 'Anytime'"
        v-on="$listeners"
        @input="$emit('update', $event.target.value)"
        v-bind="{ ...$attrs, ...$props }"
        disabled
      />
    </div>
  </button>
</template>
