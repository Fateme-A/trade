import type { StateCreator } from 'zustand';

type TThemeState = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

type TThemeSliceCreator = StateCreator<TThemeState>;

const initialState: Pick<TThemeState, 'isDarkMode'> = {
  isDarkMode: false,
};

const createThemeSlice: TThemeSliceCreator = (set) => ({
  ...initialState,
  setIsDarkMode: (isDarkMode: boolean) => {    
    set({ isDarkMode });
  },
});

export { createThemeSlice, type TThemeState };
