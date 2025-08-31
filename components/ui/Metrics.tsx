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
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)} {...props}>
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="p-6 text-center transition-shadow hover:shadow-lg"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-highlight)]/10 text-[var(--color-highlight)]">
            {metric.icon}
          </div>
          <div className="mb-2 text-3xl font-bold text-[var(--color-highlight)]">
            {metric.value}
          </div>
          <div className="font-medium text-[var(--color-muted)]">
            {metric.label}
          </div>
        </Card>
      ))}
    </div>
  );
}
