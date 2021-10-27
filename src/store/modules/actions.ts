import { ActionTree } from "vuex";
import { mainStateType, rootStoreState, ActionTypes, MutationTypes } from './types';

export const actions: ActionTree<rootStoreState, mainStateType> = {
  [ActionTypes.SET_ACTION]({ commit }, payload: number) {
    commit(MutationTypes.SET_MUTATION, payload);
  }
};