import { MarketsPage } from "@/pages/MarketsPage";
import { TradePage } from "@/pages/TradePage";
import { ROUTES } from "@/utils/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouteProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.root} element={<MarketsPage />} />
      <Route path={'/trade/:tradeId'} element={<TradePage />} />
    </Routes>
  </BrowserRouter>
);

export { RouteProvider };
