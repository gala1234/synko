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

export function CtaBanner({ title, subtitle, ctaLabel, ctaHref, className, ...props }: Props) {
  const router = useRouter();
  
  return (
    <div
      className={cn(
        "bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-12 text-center",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-balance">
        {title}
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
        {subtitle}
      </p>
      <Button 
        size="lg" 
        variant="outline"
        onClick={() => router.push(ctaHref)}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}