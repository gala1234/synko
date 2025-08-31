import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "main" | "article";
  padding?: "sm" | "md" | "lg" | "xl";
};

export function Section({
  className,
  as: Component = "section",
  padding = "lg",
  ...props
}: Props) {
  const paddingClasses = {
    sm: "py-6 sm:py-[var(--space-8)]",
    md: "py-8 sm:py-[var(--space-12)]",
    lg: "py-10 sm:py-[var(--space-12)] md:py-20",
    xl: "py-12 sm:py-20 md:py-32",
  };

  return (
    <Component className={cn(paddingClasses[padding], className)} {...props} />
  );
}
