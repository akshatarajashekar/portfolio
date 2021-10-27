import { ActionContext } from "vuex";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
import { ActionTypes as coreActionType } from "../../components/coreStore/types";
//actions
export enum ActionTypes {
  'SET_ACTION' = 'SET_ACTION'
}
export type AugmentedActionContext = {
  commit<K extends keyof mainMutationsTypes>(
    key: K,
    payload: Parameters<mainMutationsTypes[K]>[1]
  ): ReturnType<mainMutationsTypes[K]>;
} & Omit<ActionContext<rootStoreState, mainStateType>, "commit">;

// mutations
export enum MutationTypes {
  SET_MUTATION = "SET_MUTATION"
}
export type mainMutationsTypes<S = mainStateType> = {
  [MutationTypes.SET_MUTATION](state: S, payload: number): void;
};
// getters
export interface gettersTypes {
  selectedval(state: rootStoreState): number;
}
//state
export interface mainStateType {
  val: number;
}

export interface rootStoreState {
  val: number;
}

export type RootStoreModuleTypes<S = mainStateType> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof mainMutationsTypes,
    P extends Parameters<mainMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<mainMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof gettersTypes]: ReturnType<gettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof AugmentedActionContext>(
    key: K,
    payload?: Parameters<AugmentedActionContext[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AugmentedActionContext[K]>;
};



export const AllActionTypes = { ...coreActionType, ...ActionTypes };

// store/mutation-types.ts
import { MutationTypes as coreMutationTypes } from "../../components/coreStore/types";

export const AllMutationTypes = {...coreMutationTypes,...MutationTypes };
