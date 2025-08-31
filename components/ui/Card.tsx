import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  shadow?: "sm" | "md" | "lg";
};

export function Card({ className, hover = false, padding = "md", shadow = "sm", ...props }: Props) {
  const base = "rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]";
  
  const hoverEffect = hover ? "transition-shadow duration-200 hover:shadow-md" : "";
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      className={cn(
        base,
        hoverEffect,
        paddingClasses[padding],
        shadowClasses[shadow],
        className
      )}
      {...props}
    />
  );
}