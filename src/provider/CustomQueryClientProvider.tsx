import { queryFn } from "@/service/API/fetchApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";

const CustomQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
        queryFn,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  );
};
export { CustomQueryClientProvider };
