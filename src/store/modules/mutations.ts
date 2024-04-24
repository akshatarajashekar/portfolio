import { MutationTree } from "vuex";
import { rootStoreState, MutationTypes, mainStateType } from "./types";

export const mutations: MutationTree<rootStoreState> = {
  [MutationTypes.SET_MUTATION](state: mainStateType, payload: number) {
    state.val = payload;
  },
}
