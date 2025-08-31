import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "accent" | "highlight" | "outline";
  size?: "sm" | "md";
};

export function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: Props) {
  const base = "inline-flex items-center rounded-full font-medium";

  const variants = {
    default: "bg-[rgb(var(--color-muted)/0.12)] text-[rgb(var(--color-muted))]",
    primary:
      "bg-[rgb(var(--color-primary)/0.12)] text-[rgb(var(--color-primary))]",
    accent:
      "bg-[rgb(var(--color-accent)/0.12)] text-[rgb(var(--color-accent))]",
    highlight:
      "bg-[rgb(var(--color-highlight)/0.12)] text-[rgb(var(--color-highlight))]",
    outline:
      "border border-[rgb(var(--color-border))] text-[rgb(var(--color-fg))]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
