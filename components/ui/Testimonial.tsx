import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({ quote, author, role, className, ...props }: Props) {
  return (
    <Card
      className={cn(
        "p-6 hover:shadow-lg transition-shadow",
        className
      )}
      {...props}
    >
      <div className="mb-4">
      <span className="text-4xl text-[var(--color-highlight)] font-bold leading-none">
          "
        </span>
        <p className="text-[var(--color-fg)] text-lg leading-relaxed mt-2">
          {quote}
        </p>
      </div>
      <div className="border-t border-[var(--color-border)] pt-4">
        <div className="font-semibold text-[var(--color-fg)]">
          {author}
        </div>
        <div className="text-[var(--color-muted)] text-sm">
          {role}
        </div>
      </div>
    </Card>
  );
}