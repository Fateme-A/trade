import "./App.css";
import { Header } from "./components/core/Header";
import { CustomQueryClientProvider, ToastProvider } from "./provider";
import { RouteProvider } from "./provider/RouteProvider";

function App() {
  return (
    <div className="fa-num bg-white dark:bg-black text-neutral-dark dark:text-white px-2 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <CustomQueryClientProvider>
          <Header />
          <RouteProvider />
        </CustomQueryClientProvider>
        <ToastProvider />
      </div>
    </div>
  );
}

export default App;
