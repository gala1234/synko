import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAllCaseStudies } from "@/lib/mdx";

export default function CasosPage() {
  const caseStudies = getAllCaseStudies();

  const getBadgeVariant = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "e-commerce":
        return "accent";
      case "salud":
        return "primary";
      default:
        return "highlight";
    }
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown to JSX conversion for basic formatting
    const lines = content.split("\n");
    const elements: React.ReactElement[] = [];
    let currentList: string[] = [];

    const renderTextWithBold = (text: string) => {
      const parts = text.split(/\*\*(.*?)\*\*/);
      return parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={`bold-${part.slice(0, 10)}-${i}`}>{part}</strong>
        ) : (
          part
        )
      );
    };

    lines.forEach((line, index) => {
      if (line.startsWith("## ")) {
        if (currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${line.slice(0, 20)}`}
              className="mb-6 space-y-2 text-[rgb(var(--color-muted))]"
            >
              {currentList.map((item) => {
                const cleanItem = item.replace("- ", "• ");
                return (
                  <li key={`item-${item.slice(0, 20)}`}>
                    {renderTextWithBold(cleanItem)}
                  </li>
                );
              })}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <h3
            key={`heading-${line.slice(0, 30)}`}
            className="font-display mb-4 text-xl font-bold text-[rgb(var(--color-fg))]"
          >
            {line.replace("## ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        currentList.push(line);
      } else if (line.trim() && !line.startsWith("---")) {
        if (currentList.length > 0) {
          elements.push(
            <ul
              key={`list-${line.slice(0, 20)}`}
              className="mb-6 space-y-2 text-[rgb(var(--color-muted))]"
            >
              {currentList.map((item) => {
                const cleanItem = item.replace("- ", "• ");
                return (
                  <li key={`item-mid-${item.slice(0, 20)}`}>
                    {renderTextWithBold(cleanItem)}
                  </li>
                );
              })}
            </ul>
          );
          currentList = [];
        }
        elements.push(
          <p
            key={`paragraph-${line.slice(0, 30)}`}
            className="mb-4 text-[rgb(var(--color-muted))]"
          >
            {renderTextWithBold(line)}
          </p>
        );
      }
    });

    if (currentList.length > 0) {
      elements.push(
        <ul
          key="final-list"
          className="mb-6 space-y-2 text-[rgb(var(--color-muted))]"
        >
          {currentList.map((item) => {
            const cleanItem = item.replace("- ", "• ");
            return (
              <li key={`final-${item.slice(0, 20)}`}>
                {renderTextWithBold(cleanItem)}
              </li>
            );
          })}
        </ul>
      );
    }

    return elements;
  };

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Casos de estudio
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
              Resultados reales de nuestros clientes
            </h1>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))]">
              Descubre cómo hemos ayudado a empresas como la tuya a automatizar
              y crecer.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-12">
            {caseStudies.map((caseStudy, index) => (
              <Card key={caseStudy.slug} className="p-8">
                <div className="grid items-start gap-8 md:grid-cols-2">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <Badge
                      variant={getBadgeVariant(caseStudy.sector)}
                      size="sm"
                      className="mb-4"
                    >
                      {caseStudy.sector}
                    </Badge>
                    <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))]">
                      {caseStudy.title}
                    </h2>
                    <p className="mb-6 text-[rgb(var(--color-muted))]">
                      {caseStudy.client}
                    </p>
                    <div className="prose prose-sm max-w-none">
                      {renderMarkdownContent(caseStudy.content)}
                    </div>
                    <Button variant="outline" className="mt-6">
                      Ver caso completo
                    </Button>
                  </div>
                  <div
                    className={`flex h-64 items-center justify-center rounded-2xl bg-[rgb(var(--color-muted))]/10 ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <span className="text-[rgb(var(--color-muted))]">
                      Imagen del caso
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
