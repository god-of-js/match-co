import API from "@/api";
import { GateWay } from "@/types/interfaces";
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";

@Module
class GatewaysModule extends VuexModule {
  gateways: GateWay[] | null = null;
  @Mutation
  setGateways(param: GateWay[]) {
    this.gateways = param;
  }

  @Action
  async getGateways(): Promise<void> {
    const gateways = await API.getGateways();
    this.setGateways(gateways);
  }
}

import store from "../index";
export const gatewaysModule = new GatewaysModule({ store, name: "Gateways" });
