import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  bullets: string[];
};

export function FeatureCard({ icon, title, bullets, className, ...props }: Props) {
  return (
    <Card
      className={cn(
        "p-6 hover:shadow-lg transition-shadow",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-[var(--color-muted)] flex items-start">
            <span className="text-[var(--color-highlight)] mr-2 mt-1">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}