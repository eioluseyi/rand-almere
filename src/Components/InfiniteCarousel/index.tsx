import { cn } from "@Util/shadcn";
import { ReactNode } from "react";

const InfiniteCarousel = ({
  duration,
  reverse,
  gap,
  children,
}: {
  duration?: number;
  reverse?: boolean;
  gap?: string;
  children?: ReactNode;
}) => {
  const OriginalChild = () => <div>{children}</div>;
  const CopyChild = () => <div aria-hidden>{children}</div>;

  if (!children) return <></>;

  return (
    <div
      className={cn("infinite-carousel", reverse && "carousel-reverse")}
      style={{ "--animation-duration": `${duration}s`, "--gap": `${gap}` }}
    >
      <OriginalChild />
      <CopyChild />
      <CopyChild />
    </div>
  );
};

export default InfiniteCarousel;
