import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import servicesData from "@/content/services.json";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  examples: string[];
  technical: string[];
};

export default function ServiciosPage() {
  const services = servicesData as Service[];

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Servicios
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[var(--color-fg)] md:text-5xl">
              Automatización e IA para tu negocio
            </h1>
            <p className="mb-8 text-xl text-[var(--color-muted)]">
              Transformamos procesos manuales en sistemas automatizados que
              generan resultados medibles.
            </p>
            <Button variant="primary" size="lg">
              Solicitar propuesta
            </Button>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-8 md:gap-12">
            {services.map((service) => (
              <Card key={service.id} className="p-8">
                <div className="mb-6">
                  <h2 className="font-display mb-2 text-2xl font-bold text-[var(--color-fg)]">
                    {service.title}
                  </h2>
                  <p className="mb-4 text-lg font-medium text-[var(--color-primary)]">
                    {service.subtitle}
                  </p>
                  <p className="mb-6 text-[var(--color-muted)]">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">
                      Características
                    </h3>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                      {service.bullets.map((bullet, index) => (
                        <li key={`${service.id}-bullet-${index}`}>
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">
                      Casos de uso
                    </h3>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                      {service.examples.map((example, index) => (
                        <li key={`${service.id}-example-${index}`}>
                          • {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">
                      Implementación
                    </h3>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                      {service.technical.map((tech, index) => (
                        <li key={`${service.id}-tech-${index}`}>• {tech}</li>
                      ))}
                    </ul>
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
