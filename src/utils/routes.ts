const BASE_ROUTE = '/';

export const ROUTES = {
  root: `${BASE_ROUTE}`,
  trade: (tradeId: number) =>  `/trade/${tradeId}`,
};

