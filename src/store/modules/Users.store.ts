import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import API from "@/api";
import { User } from "@/types/interfaces";

@Module
class UserModule extends VuexModule {
  user: User | null = null;

  @Mutation
  private setUser(param: User): void {
    this.user = param;
  }

  @Action
  async getUser() {
    const user = await API.getUser();
    this.setUser(user);
  }
}

import store from "../index";
export const userModule = new UserModule({ store, name: "User" });
