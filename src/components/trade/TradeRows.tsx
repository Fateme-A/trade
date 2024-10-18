import type { ReactNode } from "react";
import { SkeletonLoader } from "./SkeletonLoader";

type TMarketRowsProps<T> = {
  data: T[] | undefined;
  labels: string[];
  getRowValue: (item: T, label: string) => ReactNode;
  isLoading: boolean;
};

export const TradeRows = <T,>({
  data,
  labels,
  getRowValue,
  isLoading,
}: TMarketRowsProps<T>) => (
    <div className="mt-4">
      {/* Header row */}
      <div className="flex w-full justify-around bg-primary rounded-t">
        {labels.map((label) => (
          <div key={label} className="w-1/3 font-semibold text-center py-2">
            {label}
          </div>
        ))}
      </div>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex w-full justify-around bg-opacity-25 bg-primary rounded border border-white"
            >
              {labels.map((label) => (
                <div key={label} className="w-1/3 text-center py-2 h-10">
                  {getRowValue(item, label)}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
