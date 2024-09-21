import { cn } from "@/src/utils/cn";
import React, { ElementType, memo } from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p" | "body";

interface Props {
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  span: "span",
  p: "p",
  body: "p",
};

const sizes: Record<Variant, string> = {
  h1: "text-5xl font-bold sm:text-4xl",
  h2: "text-base md:text-[1.2vw] xl:text-[0.96vw]",
  h3: "text-3xl font-bold sm:text-2xl",
  h4: "text-2xl font-bold sm:text-1xl",
  h5: "text-xl font-bold sm:text-lg",
  span: "text-smallBase sm:text-base ",
  p: "text-4xl sm:text-2xl md:text-md lg:text-2xl xl:text-md xxl:text-sm",
  body: "text-smallBase md:text-[1.2vw] xl:text-[0.96vw]",
};

const Typography = ({ variant = "p", children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={cn(sizeClasses, className)}>{children}</Tag>;
};

export default memo(Typography);
