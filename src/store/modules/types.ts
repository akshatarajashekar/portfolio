import { ActionContext } from "vuex";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

//actions
export enum ActionTypes {
}
export type AugmentedActionContext = {
  commit<K extends keyof mainMutationsTypes>(
    key: K,
    payload: Parameters<mainMutationsTypes[K]>[1]
  ): ReturnType<mainMutationsTypes[K]>;
} & Omit<ActionContext<rootStoreState, mainStateType>, "commit">;

export interface coreActionsTypes {

}
// mutations
export enum MutationTypes {
}
export type mainMutationsTypes<S = mainStateType> = {
};
// getters
export interface gettersTypes {
}
//state
export interface mainStateType {
}

export interface rootStoreState {
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
