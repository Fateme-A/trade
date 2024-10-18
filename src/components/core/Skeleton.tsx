import { cj } from "@/utils/classJoin";

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cj(
      "animate-pulse rounded-md bg-neutral-light dark:bg-neutral-dark h-10",
      className
    )}
    {...props}
  />
);
