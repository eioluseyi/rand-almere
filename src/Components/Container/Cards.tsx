import { cn } from "@Util/shadcn";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

type Props = {
  children?: ReactNode;
  className?: ClassNameValue;
  containerClassName?: ClassNameValue;
}; //& ComponentPropsWithoutRef<"div">;

export default function Container(props: Props) {
  return (
    <div
      className={cn(
        "w-full flex flex-row bg-bgWhite px-4 md:px-8",
        props.containerClassName
      )}
    >
      <div className={cn("w-full max-w-[1241px] mx-auto", props.className)}>
        {props.children}
      </div>
    </div>
  );
}
