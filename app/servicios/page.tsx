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
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Servicios
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Automatización e IA para tu negocio
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Transformamos procesos manuales en sistemas automatizados que generan resultados medibles.
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
                  <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[var(--color-primary)] font-medium mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-[var(--color-muted)] mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-3">
                      Características
                    </h3>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                       {service.bullets.map((bullet, index) => (
                         <li key={`${service.id}-bullet-${index}`}>• {bullet}</li>
                       ))}
                     </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-3">
                      Casos de uso
                    </h3>
                    <ul className="space-y-2 text-[var(--color-muted)]">
                       {service.examples.map((example, index) => (
                         <li key={`${service.id}-example-${index}`}>• {example}</li>
                       ))}
                     </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-3">
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