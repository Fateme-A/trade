import { Card } from "@/components/market/Card";
import { TabsWrapper } from "@/components/shared/TabsWrapper";
import { MatchesTrade } from "@/components/trade/MatchesTrade";
import { useTabs } from "@/hooks/useTabs";
import { useTradeStore } from "@/store/zustandStore";
import { TABS_SINGLE_MARKET } from "@/utils/constants";
import { useParams } from "react-router-dom";
import { TransactionTrade } from "../components/trade/TransactionTrade";

export const TradePage = () => {
  const { tradeId } = useParams();
  const { selectedTab, handleTabChange } = useTabs("buy");
  const { selectedTrade } = useTradeStore();

  const renderRows = (marketId: string, selectedTab: string) => {
    if (selectedTab === "match") {
      return <MatchesTrade marketId={marketId} />;
    }
    return (
      <TransactionTrade
        marketId={marketId}
        type={selectedTab as "buy" | "sell"}
      />
    );
  };

  return (
    <>
      {selectedTrade && (
        <Card
          market={selectedTrade}
          interactive={false}
          className="my-4 border border-primary rounded"
        />
      )}
      <TabsWrapper
        tabs={TABS_SINGLE_MARKET}
        initialActiveTab="buy"
        onTabChange={handleTabChange}
      >
        {tradeId && renderRows(tradeId, selectedTab)}
      </TabsWrapper>
    </>
  );
};
