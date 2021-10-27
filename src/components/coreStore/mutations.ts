import { MutationTree } from "vuex";
import { MutationTypes, coreRootStoreState } from "./types";

export const mutations: MutationTree<coreRootStoreState> = {
  [MutationTypes.SET_MUTATION_THEME](state: any, payload: 'dark' | 'light') {
    state.theme = payload;
  },
}
