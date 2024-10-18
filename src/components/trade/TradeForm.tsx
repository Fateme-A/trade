import type { IOrder, TTransactionMarket } from "@/types/market.model";
import { calculateTransactionSummary } from "@/utils/calculation";
import { useState } from "react";
import { Input } from "../core/Input";

type TTradeFormProps = {
  type: TTransactionMarket;
  orders: IOrder[];
};

export const TradeForm = ({ type, orders }: TTradeFormProps) => {
  const [percentage, setPercentage] = useState(0);
  const result = calculateTransactionSummary(orders, percentage);
  return (
    <div className="mt-2 flex flex-col justify-center items-center">
      <Input
        className="w-56"
        label={type === "buy" ? "خرید" : "فروش"}
        onChange={(percentage) => setPercentage(+percentage)}
        placeholder="درصد را وارد کنید"
      />
      <div className="space-y-2">
        <div> حجم ارز قابل دریافت : {result.totalRemain}</div>
        <div> میانگین قیمت ارز : {result.averagePrice}</div>
        <div> مبلغ قابل پرداخت : {result.totalPayable}</div>
      </div>
    </div>
  );
};

