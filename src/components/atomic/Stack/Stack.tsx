import { cn } from "@/src/utils/cn";
import { memo } from "react";

type StackProps = {
  className?: string;
  children?: React.ReactNode;
};

const Stack = ({ children, className }: StackProps) => {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
};

export default memo(Stack);
