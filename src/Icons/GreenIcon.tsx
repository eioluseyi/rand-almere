import { cn } from "@Util/shadcn";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

type Props = {
  className?: ClassNameValue;
};

const GreenIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      className={cn(props.className)}
    >
      <rect width="39" height="36" rx="13" fill="#8EDCC5" />
      <g style={{ mixBlendMode: "multiply" }}>
        <circle cx="16" cy="21" r="7" fill="#3DC29A" />
      </g>
      <g style={{ mixBlendMode: "multiply" }}>
        <circle cx="23" cy="15" r="7" fill="#34A684" />
      </g>
    </svg>
  );
};

export default GreenIcon;
