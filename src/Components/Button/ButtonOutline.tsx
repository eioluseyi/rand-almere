import { cn } from "@Util/shadcn";
import React, { ReactNode } from "react";

const ButtonOutline = ({
  children,
  className,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <button
      className={cn(
        "border-primary whitespace-nowrap bg-white hover:bg-primary hover:shadow-md hover:shadow-primaryDisabled px-5 sm:px-8 py-2 border rounded-full font-medium text-primary hover:text-white tracking-wide transition-all outline-none",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
