import { GetterTree } from "vuex";
import { state } from './state';
import { coreStateType, rootStoreState } from './types';

export type Getters = {
  selectedTheme(state: coreStateType): coreStateType
}
export const getters: GetterTree<rootStoreState, coreStateType> & Getters  = {
  selectedTheme: (state: any) => {
    return state.theme;
  },
};
