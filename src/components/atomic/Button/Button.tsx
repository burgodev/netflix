import { cn } from "@/src/utils/cn";
import { memo } from "react";

type StackProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, className, ...props }: StackProps) => {
  return (
    <button
      className={cn(
        "cursor-pointer text-white outline-none border-none font-bold rounded-sm px-[3vw] py-[1.5vw] md:px-8 md:py-2 bg-gray-700 bg-opacity-50 hover:text-black hover:bg-gray-300 transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
