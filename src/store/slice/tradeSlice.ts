import type { IMarket } from '@/types/market.model';
import type { StateCreator } from 'zustand';

type TTradeState = {
  selectedTrade: IMarket | null;
  setSelectedTrade: (selectedMarket: IMarket) => void;
};

type TTradeSliceCreator = StateCreator<TTradeState>;

const initialState: Pick<TTradeState, 'selectedTrade'> = {
  selectedTrade: null,
};

const createTradeSlice: TTradeSliceCreator = (set) => ({
  ...initialState,
  setSelectedTrade: (selectedMarket: IMarket) => {    
    set({ selectedTrade: selectedMarket });
  },
});

export { createTradeSlice, type TTradeState };
