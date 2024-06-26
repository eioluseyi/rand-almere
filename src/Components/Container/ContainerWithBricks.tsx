import Bricks from "@Icon/Bricks";
import { cn } from "@Util/shadcn";
import React, { ReactNode } from "react";

const ContainerWithBricks = (props: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("relative", props.className)}>
      <Bricks className="absolute top-3 right-3" />
      {props.children}
      <Bricks className="absolute bottom-3 left-3" />
    </div>
  );
};

export default ContainerWithBricks;
