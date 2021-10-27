import { GetterTree,  } from "vuex";
import { coreStateType, coreRootStoreState } from './types';

export type Getters = {
  selectedTheme(state: coreStateType): 'dark' | 'light'
}
export const getters: GetterTree<coreRootStoreState, coreStateType> & Getters  = {
  selectedTheme: (state: coreStateType): 'dark' | 'light' => {
    return state.theme;
  },
};
