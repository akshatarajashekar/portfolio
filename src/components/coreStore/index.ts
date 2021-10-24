import { Module } from "vuex";
import { rootStoreState, coreStateType } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const coreStore: Module<rootStoreState, coreStateType> = {
  state,
  getters,
  mutations,
  actions
};

export default coreStore;