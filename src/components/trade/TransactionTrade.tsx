import { API } from "@/service/API/api";
import type { IOrder, MarketTransactionResponse } from "@/types/market.model";
import { getOrderSums } from "@/utils/calculation";
import { TRANSACTION_LABELS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import { TradeForm } from "./TradeForm";
import { TradeRows } from "./TradeRows";

type TTransactionTradeProps = {
  type: "buy" | "sell";
  marketId: string;
};

export const TransactionTrade = ({
  type,
  marketId,
}: TTransactionTradeProps) => {
  const { data, isLoading } = useQuery<MarketTransactionResponse>({
    queryKey: [API.transaction(marketId, type)],
    refetchInterval: 3000,
  });

  const displayedOrders = data?.orders?.slice(0, 10) ?? [];
  const orderSums = getOrderSums(displayedOrders);

  return (
    <>
      <TradeRows
        data={displayedOrders}
        labels={TRANSACTION_LABELS}
        getRowValue={(order, label) => order[label as keyof IOrder]}
        isLoading={isLoading}
      />

      {displayedOrders.length === 0 ? (
        <p>در حال حاضر سفارش {type === "buy" ? "خرید" : "فروش"} وجود ندارد.</p>
      ) : (
        <div className="flex">
          {TRANSACTION_LABELS.map((label) => (
            <div key={label} className="w-1/3 font-bold text-center">
              {orderSums[label]}
            </div>
          ))}
        </div>
      )}
      <TradeForm type={type} orders={displayedOrders} key={type} />
    </>
  );
};
