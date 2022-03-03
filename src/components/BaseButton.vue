<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseButton",
})
export default class BaseButton extends Vue {
  @Prop({
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  })
  variant!: string;
}
</script>

<template>
  <button
    v-on="$listeners"
    :class="[$style['c-base-button'], $style[`c-base-button--${variant}`]]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
@import "@/styles";
.c-base-button {
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  cursor: pointer;
  color: $white;
  &--primary {
    background: $primary;
    &:hover {
      background: $primary-a90;
    }
  }
  &--secondary {
    background: $secondary;
    &:hover {
      background: $secondary-a90;
    }
  }
}
</style>
