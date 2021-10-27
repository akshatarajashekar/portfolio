import { ActionTree } from "vuex";
import { ActionTypes, coreRootStoreState, coreStateType, MutationTypes } from './types';

export const actions: ActionTree<coreRootStoreState, coreStateType> = {
  [ActionTypes.SET_ACTION_THEME]({ commit }, payload: number) {
    commit(MutationTypes.SET_MUTATION_THEME, payload);
  }
};