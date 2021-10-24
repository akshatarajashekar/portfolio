import { Module } from "vuex";
import { rootStoreState, mainStateType } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const rootStore: Module<rootStoreState, mainStateType> = {
  state,
  getters,
  mutations,
  actions
};

export default rootStore;