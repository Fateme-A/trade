import type { IMatch, IOrder } from "@/types/market.model";
import type { TypeOptions } from "react-toastify";

  export const TABS_MARKET = [
    {
      label: "تومان",
      id: "IRT",
    },
    {
      label: "تتر",
      id: "USDT",
    },
  ];

  export const TABS_SINGLE_MARKET = [
  {
    label: "خرید",
    id: "buy",
  },
  {
    label: "فروش",
    id: "sell",
  },
  {
    label: "معامله",
    id: "match",
  },
];

export const TRANSACTION_LABELS: (keyof IOrder)[] = ["remain", "value", "price"];

export const MATCH_LABELS: (keyof IMatch)[] = ["match_amount", "price", "time"];

export const DEFAULT_ERROR_MESSAGE = 'مشکلی پیش آماده است';
export const DEFAULT_SUCCESS_MESSAGE = 'با موفقیت انجام شد';
export const DEFAULT_INFO_MESSAGE = 'نیاز به توجه!';
export const DEFAULT_WARNING_MESSAGE = 'اخطار!'; 

export const TOAST_VARIANTS: Record<TypeOptions, { iconColor: string; borderColor: string; defaultMessage: string }> = {
  error: {
    iconColor: 'text-error-normal',
    borderColor: 'border-error-normal',
    defaultMessage: DEFAULT_ERROR_MESSAGE,
  },
  success: {
    iconColor: 'text-success-normal',
    borderColor: 'border-success-normal',
    defaultMessage: DEFAULT_SUCCESS_MESSAGE,
  },
  warning: {
    iconColor: 'text-caution-normal',
    borderColor: 'border-caution-normal',
    defaultMessage: DEFAULT_WARNING_MESSAGE,
  },
};




  
