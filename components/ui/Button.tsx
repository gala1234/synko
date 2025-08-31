import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "highlight" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-[box-shadow,transform,background-color] duration-200";

  const variants = {
    primary:
      "bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary-600))] shadow-md",
    ghost:
      "border border-[rgb(var(--color-border))] text-[rgb(var(--color-fg))] hover:bg-black/5 dark:hover:bg-white/10",
    highlight:
      "bg-[rgb(var(--color-highlight))] text-white hover:bg-[rgb(var(--color-highlight-600))] shadow-md",
    outline:
      "border border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
