import { cn } from "@Util/shadcn";
import React, { ReactNode } from "react";

const ButtonPrimary = ({
  children,
  addClass,
}: {
  children?: ReactNode;
  addClass?: string;
}) => {
  return (
    <button
      className={cn(
        "py-3 lg:py-4 px-12 lg:px-16 whitespace-nowrap text-white font-semibold rounded-full bg-primary hover:shadow-md hover:shadow-primaryDisabled transition-all outline-none",
        addClass
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
