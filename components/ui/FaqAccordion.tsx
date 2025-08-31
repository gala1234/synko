"use client";

import { useState, ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface FaqAccordionProps {
  item: FaqItem;
}

export function FaqAccordion({ item }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        type="button"
        className="w-full p-6 text-left transition-colors duration-200 hover:bg-[rgb(var(--color-bg-subtle))]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display pr-4 text-xl font-bold text-[rgb(var(--color-fg))]">
            {item.question}
          </h3>
          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-[rgb(var(--color-muted))] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">{item.answer}</div>
      </div>
    </Card>
  );
}

export type { FaqItem };
