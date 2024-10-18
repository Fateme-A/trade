import { create as zustandCreate, type StateCreator } from "zustand";
import { devtools, persist, type DevtoolsOptions } from "zustand/middleware";
import { createThemeSlice, type TThemeState } from "./slice/themeSlice";
import { createTradeSlice, type TTradeState } from "./slice/tradeSlice";

// Set to store reset functions for slices
const sliceResetFns = new Set<() => void>();

// Function to reset all slices
const resetAllStores = () => {
  sliceResetFns.forEach((resetFn) => {
    resetFn();
  });
};

// Custom create function to register reset functions
export const create = (<T>() =>
  (stateCreator: StateCreator<T>) => {
    const store = zustandCreate(stateCreator);
    const initialState = store.getState();
    // Register a reset function for the slice
    sliceResetFns.add(() => store.setState(initialState, true));
    return store;
  }) as typeof zustandCreate;

const devtoolsOpts: DevtoolsOptions = {
  enabled: process.env.NODE_ENV === "development",
};

const useThemeStore = create<TThemeState>()(
  persist(
    devtools((...props) => {
      const themeSlice = createThemeSlice(...props);
      sliceResetFns.add(() => useThemeStore.setState(themeSlice, true));
      return themeSlice;
    }, devtoolsOpts),
    {
      name: "theme-storage",
    }
  )
);

const useTradeStore = create<TTradeState>()(
  devtools((...props) => {
    const marketSlice = createTradeSlice(...props);
    sliceResetFns.add(() => useTradeStore.setState(marketSlice, true));
    return marketSlice;
  }, devtoolsOpts)
);

export { resetAllStores, useThemeStore, useTradeStore };

