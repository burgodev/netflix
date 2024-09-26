import { cn } from "@/src/utils/cn";
import { memo } from "react";

type StackProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Stack = ({ children, className, ...props }: StackProps) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
};

export default memo(Stack);
