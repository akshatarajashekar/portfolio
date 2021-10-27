import { createStore } from "vuex";
import { coreStoreModuleTypes } from "../components/coreStore/types";
import coreStoreModule from "@/components/coreStore";
import rootStore from "./modules";
import { RootStoreModuleTypes, rootStoreState } from "./modules/types";
export function useStore() {
  return store;
}
export const store = createStore<any>({
  modules: { rootStore, coreStoreModule,
  },
});

type StoreModules = {
  coreStore: coreStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = coreStoreModuleTypes<Pick<StoreModules, "coreStore">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;