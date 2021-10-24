import { ActionTree } from "vuex";
import { ActionTypes, MutationTypes, rootStoreState, coreStateType } from './types';

export const actions: ActionTree<rootStoreState, coreStateType> = {
  [ActionTypes.SET_ACTION_THEME]({ commit }, payload: number) {
    commit(MutationTypes.SET_MUTATION_THEME, payload);
  }
  
};