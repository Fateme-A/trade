import { Skeleton } from "@/components/core/Skeleton";
import { TabsWrapper } from "@/components/shared/TabsWrapper";
import { useFilteredMarkets } from "@/hooks/useFilteredMarkets";
import { useTabs } from "@/hooks/useTabs";
import { API } from "@/service/API/api";
import type { MarketResponse } from "@/types/market.model";
import { TABS_MARKET } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/market/Card";
import { Pagination } from "../components/shared/Pagination";

const ITEMS_PER_PAGE = 10;

export const MarketsPage = () => {
  const { selectedTab, currentPages, handleTabChange, handlePageChange } =
    useTabs("IRT");

  const { data, isLoading } = useQuery<MarketResponse>({
    queryKey: [API.market],
  });

  const markets = data?.results ?? [];

  const { paginatedMarkets, totalPages } = useFilteredMarkets(
    markets,
    selectedTab,
    currentPages,
    ITEMS_PER_PAGE
  );

  return (
    <TabsWrapper
      tabs={TABS_MARKET}
      initialActiveTab="IRT"
      onTabChange={handleTabChange}
    >
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        paginatedMarkets.map((market, index) => (
          <Card market={market} key={`card-${selectedTab}-${index}`} />
        ))
      )}

      <Pagination
        currentPage={currentPages[selectedTab]}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </TabsWrapper>
  );
};

const SkeletonLoader = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => (
      <Skeleton key={`skeleton-${index}`} className="w-full my-1" />
    ))}
  </>
);

