import { cn } from "@Util/shadcn";
import React from "react";
import { ClassNameValue } from "tailwind-merge";

const CheckOutline = ({ className }: { className?: ClassNameValue }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_10962_10971)">
        <path
          d="M5.11067 6.90975L9.196 2.82397L9.82489 3.45242L5.11067 8.16664L2.28223 5.3382L2.91067 4.70975L5.11067 6.90975Z"
          fill="#120207"
        />
      </g>
      <defs>
        <clipPath id="clip0_10962_10971">
          <rect
            width="10.6667"
            height="10.6667"
            fill="white"
            transform="translate(0.666016 0.166748)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckOutline;
