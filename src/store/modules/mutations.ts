import { MutationTree } from "vuex";
import { rootStoreState, MutationTypes } from "./types";

export const mutations: MutationTree<rootStoreState> = {
  [MutationTypes.SET_MUTATION](state: any, payload: number) {
    state.val = payload;
  },
}
