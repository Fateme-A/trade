import { useTradeStore } from "@/store/zustandStore";
import type { IMarket } from "@/types/market.model";
import { cj } from "@/utils/classJoin";
import { ROUTES } from "@/utils/routes";
import { formatCurrency } from "@/utils/string";
import { useNavigate } from "react-router-dom";
import { Button } from "../core/Button";

type TCardProps = {
  market: IMarket;
  interactive?: boolean;
  className?: string;
};

export const Card = ({ market, interactive = true, className }: TCardProps) => {
  const { setSelectedTrade } = useTradeStore();
  const navigate = useNavigate();

  return (
    <div
      className={cj(
        "flex justify-between border-b-[1px] border-gray-300 py-3 px-2 duration-200 cursor-pointer items-center text-xs md:text-sm hover:bg-primary hover:bg-opacity-25 ",
        className
      )}
    >
      <img
        src={market.currency1.image}
        alt="currency-icon"
        className="w-7 h-7 ml-1 md:ml-2"
      />
      <div className="flex flex-col items-start ml-4 flex-1">
        <div className="mb-1">{market.title_fa}</div>
        <div className=" text-neutral-normal">{market.code}</div>
      </div>
      <div className="flex flex-col items-end ml-2 ">
        <div>{formatCurrency(market.price)}: قیمت </div>
        <div>
          <span
            dir="ltr"
            className={cj(
              market.price_info.change > 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {market.price_info.change}%
          </span>
          : تغییرات قیمت
        </div>
      </div>
      {interactive && (
        <Button
          label="خرید و فروش"
          onClick={() => {
            setSelectedTrade(market);
            navigate(ROUTES.trade(market.id));
          }}
        />
      )}
    </div>
  );
};

