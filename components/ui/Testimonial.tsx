import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  quote: string;
  author: string;
  role: string;
};

export function Testimonial({
  quote,
  author,
  role,
  className,
  ...props
}: Props) {
  return (
    <Card
      className={cn("p-6 transition-shadow hover:shadow-lg", className)}
      {...props}
    >
      <div className="mb-4">
        <span className="text-4xl leading-none font-bold text-[rgb(var(--color-highlight))]">
          &ldquo;
        </span>
        <p className="mt-2 text-lg leading-relaxed text-[rgb(var(--color-fg))]">
          {quote}
        </p>
      </div>
      <div className="border-t border-[rgb(var(--color-border))] pt-4">
        <div className="font-semibold text-[rgb(var(--color-fg))]">
          {author}
        </div>
        <div className="text-sm text-[rgb(var(--color-muted))]">{role}</div>
      </div>
    </Card>
  );
}
