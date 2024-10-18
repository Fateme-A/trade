export interface MarketResponse {
  count: number;
  next?: number;
  previous?: number;
  results: IMarket[];
}
export interface IMarket {
  id: number;
  currency1: Currency1;
  currency2: Currency2;
  tradable: boolean;
  otc_tradable: boolean;
  coming_soon: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: OrderBookInfo;
  internal_price_info: InternalPriceInfo;
  price_info: PriceInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
  price_increment: number;
}

export interface Currency1 {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: Tag[];
  etf: boolean;
  for_binvest: boolean;
  for_loan: boolean;
  for_stake: boolean;
  recommend_for_deposit_weight: number;
}

export interface Tag {
  id: number;
  name: string;
  name_en: string;
  has_chart: boolean;
}

export interface Currency2 {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: string[];
  etf: boolean;
  for_binvest: boolean;
  for_loan: boolean;
  for_stake: boolean;
  recommend_for_deposit_weight: number;
}

export interface OrderBookInfo {
  created_at: string;
  price: string;
  change: number;
  min: string;
  max: string;
  time: string;
  mean: string;
  value: string;
  amount: string;
}

export interface InternalPriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time: string;
  mean: number;
  value: number;
  amount: number;
}

export interface PriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time: string;
  mean: number;
  value: number;
  amount: number;
}


export interface MarketTransactionResponse {
  orders: IOrder[]
  volume: string
}

export interface IOrder {
  amount?: string
  remain: string
  price: string
  value: string
}

export interface IMatch {
  time: number
  price: string
  value: string
  match_amount: string
  type: string
  match_id: string
}

export type TTransactionMarket = "buy" | "sell";
