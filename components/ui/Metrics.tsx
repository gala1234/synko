import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type Metric = {
  value: string;
  label: string;
  icon: ReactNode;
};

type Props = HTMLAttributes<HTMLDivElement> & {
  metrics: Metric[];
};

export function Metrics({ metrics, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 gap-6",
        className
      )}
      {...props}
    >
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="p-6 text-center hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] mx-auto mb-4">
            {metric.icon}
          </div>
          <div className="text-3xl font-bold text-[var(--color-highlight)] mb-2">
            {metric.value}
          </div>
          <div className="text-[var(--color-muted)] font-medium">
            {metric.label}
          </div>
        </Card>
      ))}
    </div>
  );
}