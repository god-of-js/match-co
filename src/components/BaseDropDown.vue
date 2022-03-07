<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mixin as clickaway } from "vue-clickaway";
import { GateWay, Project } from "@/types/interfaces";
@Component({
  name: "BaseDropDown",
  mixins: [clickaway],
})
export default class BaseDropDown extends Vue {
  @Prop({ required: true }) dropDownData!: Project | GateWay[];
  private isDropDownVisible = false;
  private showDropDown(): void {
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
  <div class="c-base-drop-down" v-on-clickaway="hideDropDown">
    <base-button @click="showDropDown"><slot /></base-button>
    <ul v-if="isDropDownVisible" class="c-base-drop-down__content">
      <li
        class="c-base-drop-down__content__item"
        v-for="(data, index) in dropDownData"
        :key="index"
        @click="handleClick(data)"
      >
        {{ data.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles";

.c-base-drop-down {
  position: relative;
  display: inline-block;
  &__content {
    position: absolute;
    background-color: $white;
    min-width: 160px;
    max-width: 360px;
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
  }
}
</style>
