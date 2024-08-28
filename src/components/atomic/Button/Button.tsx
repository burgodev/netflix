import { cn } from "@/src/utils/cn";
import { memo } from "react";

type StackProps = {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ children, className }: StackProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 py-2 bg-gray-700 bg-opacity-50 hover:text-black hover:bg-gray-300 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Button);
