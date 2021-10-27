import { Module } from "vuex";
import { coreRootStoreState, coreStateType } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const coreStoreModule: Module<coreRootStoreState, coreStateType> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default coreStoreModule;