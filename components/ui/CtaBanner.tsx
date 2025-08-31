"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { useRouter } from "next/navigation";

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CtaBanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  className,
  ...props
}: Props) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "rounded-2xl bg-[rgb(var(--color-primary))] p-8 text-center text-white md:p-12",
        className
      )}
      {...props}
    >
      <h2 className="font-display mb-4 text-3xl font-bold text-balance md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-balance text-white/90">
        {subtitle}
      </p>
      <Button size="lg" variant="outline" onClick={() => router.push(ctaHref)}>
        {ctaLabel}
      </Button>
    </div>
  );
}
