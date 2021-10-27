import { ActionContext } from "vuex";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
//actions
export enum ActionTypes {
  SET_ACTION_THEME = 'SET_ACTION_THEME'
}
export type AugmentedActionContext = {
  commit<K extends keyof coreMutationsTypes>(
    key: K,
    payload: Parameters<coreMutationsTypes[K]>[1]
  ): ReturnType<coreMutationsTypes[K]>;
} & Omit<ActionContext<coreRootStoreState, coreStateType>, "commit">;

export interface coreActionsTypes {
  [ActionTypes.SET_ACTION_THEME](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}
// mutations
export enum MutationTypes {
  SET_MUTATION_THEME = "SET_MUTATION_THEME"
}
export type coreMutationsTypes<S = coreStateType> = {
  [MutationTypes.SET_MUTATION_THEME](state: S, payload: 'dark' | 'light'): void;
};
// getters
export interface gettersTypes {
  selectedTheme(state: any): 'dark' | 'light';
}
//state
export interface coreStateType {
  theme: 'dark' | 'light';
}

export interface coreRootStoreState {
  theme: 'dark' | 'light';
}

export type coreStoreModuleTypes<S = coreStateType> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof coreMutationsTypes,
    P extends Parameters<coreMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<coreMutationsTypes[K]>;
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