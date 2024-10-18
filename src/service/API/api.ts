import type { TTransactionMarket } from "@/types/market.model";

const BASE_URL = "https://api.bitpin.ir";

export const API = {
  market: `${BASE_URL}/v1/mkt/markets/`,
  match: (marketId: string) => `${BASE_URL}/v1/mth/matches/${marketId}/`,
  transaction: (marketId: string, type: TTransactionMarket ) => `${BASE_URL}/v2/mth/actives/${marketId}/?type=${type}`,
};


