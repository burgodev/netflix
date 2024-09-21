import { cn } from "@/src/utils/cn";
import { FC } from "react";

type OutlinedIconProps = {
  children: React.ReactNode;
  className?: string;
};

const OutlinedIcon: FC<OutlinedIconProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-[50%] border transition-all duration-300 border-[#2a2a2a] bg-[#FFFFFF1A] hover:border-white p-1.5",
        className
      )}
    >
      {children}
    </div>
  );
};
export default OutlinedIcon;
