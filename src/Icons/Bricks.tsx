import { cn } from "@Util/shadcn";
import React from "react";

const Bricks = (props: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="126"
      height="79"
      viewBox="0 0 126 79"
      fill="none"
      className={cn(props.className)}
    >
      <rect
        x="27"
        y="4"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect
        x="51"
        y="28"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect
        x="75"
        y="52"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect x="54" width="24" height="24" fill="white" fillOpacity="0.1" />
      <rect
        x="78"
        y="24"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect
        x="102"
        y="48"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect y="7" width="24" height="24" fill="white" fillOpacity="0.1" />
      <rect
        x="24"
        y="31"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
      <rect
        x="48"
        y="55"
        width="24"
        height="24"
        fill="white"
        fillOpacity="0.1"
      />
    </svg>
  );
};

export default Bricks;
