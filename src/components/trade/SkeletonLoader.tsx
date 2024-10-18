import { Fragment } from "react/jsx-runtime";
import { Skeleton } from "../core/Skeleton";

export const SkeletonLoader = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="flex w-full justify-around py-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <Fragment key={i}>
            <Skeleton className="w-1/3 mx-1" />
          </Fragment>
        ))}
      </div>
    ))}
  </>
);
