import { API } from "@/service/API/api";
import type { IMatch } from "@/types/market.model";
import { MATCH_LABELS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { TradeRows } from "./TradeRows";

export const MatchesTrade = ({ marketId }: { marketId: string }) => {
  const { data, isLoading } = useQuery<IMatch[]>({
    queryKey: [API.match(marketId)],
    refetchInterval: 3000,
  });

  return (
    <TradeRows<IMatch>
      data={data?.slice(0, 10)} 
      labels={MATCH_LABELS}
      getRowValue={(match, label) => match[label as keyof IMatch]}
      isLoading={isLoading}
    />
  );
};
