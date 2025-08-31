import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "accent" | "highlight" | "outline";
  size?: "sm" | "md";
};

export function Badge({ className, variant = "default", size = "md", ...props }: Props) {
  const base = "inline-flex items-center rounded-full font-medium";
  
  const variants = {
    default: "bg-[color-mix(in_srgb,_var(--color-muted)_12%,_transparent)] text-[var(--color-muted)]",
    primary: "bg-[color-mix(in_srgb,_var(--color-primary)_12%,_transparent)] text-[var(--color-primary)]",
    accent: "bg-[color-mix(in_srgb,_var(--color-accent)_12%,_transparent)] text-[var(--color-accent)]",
    highlight: "bg-[color-mix(in_srgb,_var(--color-highlight)_12%,_transparent)] text-[var(--color-highlight)]",
    outline: "border border-[var(--color-border)] text-[var(--color-fg)]",
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