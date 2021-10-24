import { createStore } from "vuex";
import { rootStoreState } from "./modules/types";
import { coreStoreModuleTypes } from "../components/coreStore/types";
import { RootStoreModuleTypes } from "./modules/types";

import rootStore from "./modules";

export const store = createStore<rootStoreState>(rootStore);

type StoreModules = {
  coreStore: coreStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = coreStoreModuleTypes<Pick<StoreModules, "coreStore">> &
  RootStoreModuleTypes<Pick<StoreModules, "root">>;