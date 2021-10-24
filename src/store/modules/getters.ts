import { GetterTree } from "vuex";
import { state } from './state';
import { mainStateType, rootStoreState } from './types';

export type Getters = {
}
export const getters: GetterTree<rootStoreState, mainStateType> & Getters  = {
};
