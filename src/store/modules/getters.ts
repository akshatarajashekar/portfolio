import { GetterTree } from "vuex";
import { mainStateType, rootStoreState } from './types';

export type Getters = {
  selectedval(state: rootStoreState): number;
}
export const getters: GetterTree<rootStoreState, mainStateType> & Getters  = {
  selectedval: (state: rootStoreState): number => {
    return state.val;
  },
};
