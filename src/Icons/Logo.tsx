import { cn } from "@Util/shadcn";
import Image from "next/image";

const Logo = ({ className = "", textClassName = "" }) => (
  <div
    className={cn(
      "flex items-center gap-3 w-fit font-black text-primary text-sm tracking-[0.5rem]",
      className
    )}
  >
    <Image
      src="/assets/logo.svg"
      alt="logo"
      width={100}
      height={100}
      className="w-8 h-8"
    />
    <span className={cn("text", textClassName)}>
      RAND
      <span className="text-textLight">ALMERE</span>
    </span>
  </div>
);

export default Logo;
