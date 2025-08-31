import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  bullets: string[];
};

export function FeatureCard({
  icon,
  title,
  bullets,
  className,
  ...props
}: Props) {
  return (
    <Card
      className={cn("p-6 transition-shadow hover:shadow-lg", className)}
      {...props}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-highlight)]/10 text-[var(--color-highlight)]">
        {icon}
      </div>
      <h3 className="font-display mb-4 text-xl font-bold text-[var(--color-fg)]">
        {title}
      </h3>
      <ul className="space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start text-[var(--color-muted)]"
          >
            <span className="mt-1 mr-2 text-[var(--color-highlight)]">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
