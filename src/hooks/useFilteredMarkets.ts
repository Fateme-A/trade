import type { IMarket } from "@/types/market.model";
import { useMemo } from "react";

export const useFilteredMarkets = (
  markets: IMarket[],
  selectedTab: string,
  currentPages: { [key: string]: number },
  itemsPerPage: number
) => {
  const filteredMarkets = useMemo(
    () => markets.filter((market) => market.currency2.code === selectedTab),
    [markets, selectedTab]
  );

  const paginatedMarkets = useMemo(() => {
    const startIndex = (currentPages[selectedTab] - 1) * itemsPerPage;
    return filteredMarkets.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredMarkets, currentPages, selectedTab, itemsPerPage]);

  const totalPages = Math.ceil(filteredMarkets.length / itemsPerPage);

  return { filteredMarkets, paginatedMarkets, totalPages };
};
