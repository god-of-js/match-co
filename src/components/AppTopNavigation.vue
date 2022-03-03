<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userModule } from "@/store/modules/Users.store";
import { User } from "@/types/interfaces";
@Component
export default class AppTopNavigation extends Vue {
  get user(): User {
    return userModule.user as User;
  }
  get userInitials(): string {
    return `${this.user?.firstName[0] + this.user?.lastName[0]}`;
  }
  get userName(): string {
    return `${this.user?.firstName + " " + this.user?.lastName}`;
  }
  mounted(): void {
    userModule.getUser();
  }
}
</script>

<template>
  <nav class="c-app-top-nav u-flex u-items-center u-justify-between">
    <div class="u-flex u-items-center">
      <img src="@/assets/logo.svg" alt="logo" width="20" />
      <button class="c-app-top-nav__menu-button">
        <img src="@/assets/ham-burger.svg" alt="open sidebar" width="25" />
      </button>
    </div>
    <div class="u-flex u-items-center">
      <div class="c-app-top-nav__avatar u-flex u-items-center u-justify-center">
        {{ userInitials }}
      </div>
      <div class="c-app-top-nav__name">{{ userName }}</div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles";
.c-app-top-nav {
  padding: 10px 35px;
  border-bottom: 1px solid $grey;
  &__menu-button {
    background: transparent;
    outline: none;
    margin: 0px 20px;
    border: transparent;
    padding: 0px;
  }
  &__avatar {
    background: $warning;
    color: $white;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin: 0px 10px;
  }
  &__name {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
