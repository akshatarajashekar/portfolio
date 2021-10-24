import { MutationTree } from "vuex";
import { MutationTypes, rootStoreState } from "./types";

export const mutations: MutationTree<rootStoreState> = {
  [MutationTypes.SET_MUTATION_THEME](state: any, payload: 'dark' | 'light') {
    state.theme = payload;
  },
}
