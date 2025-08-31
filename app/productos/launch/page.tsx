import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function LaunchPage() {
  return (
    <main>
      {/* Hero */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="highlight" size="md" className="mb-4">
                SKU-001
              </Badge>
              <h1 className="font-display mb-4 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
                Synko Launch
              </h1>
              <p className="text-xl font-medium text-[rgb(var(--color-primary))] mb-6">
                Setup completo en 2 semanas
              </p>
              <p className="text-lg text-[rgb(var(--color-muted))] max-w-2xl mx-auto">
                Tu primer agente IA listo para funcionar. Incluye integración, tracking y dashboard para empezar a automatizar desde el día uno.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problema que resuelve */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 bg-[color-mix(in_srgb,_rgb(var(--color-accent))_5%,_transparent)]">
              <h2 className="font-display text-2xl font-bold text-[rgb(var(--color-fg))] mb-4">
                ¿Qué problema resuelve?
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                Las empresas pierden tiempo en tareas repetitivas que podrían automatizarse, pero no saben por dónde empezar o les parece muy complejo. Synko Launch es tu punto de entrada perfecto al mundo de la automatización IA.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Qué incluye */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-[rgb(var(--color-fg))] mb-8 text-center">
              Qué incluye tu Synko Launch
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🤖 1 agente IA personalizado
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Diseñado específicamente para tu proceso más crítico
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🔗 1 integración API principal
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Conectamos tu agente con tu herramienta más importante
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  📊 Sistema de tracking básico
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Métricas esenciales para medir el impacto desde el día uno
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  📈 Mini-dashboard de métricas
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Visualiza el ROI y rendimiento en tiempo real
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  📚 Documentación completa
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Guías paso a paso para tu equipo
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🛠️ 2 semanas de soporte incluido
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Acompañamiento completo durante la implementación
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Detalles del producto */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  ⏱️ Tiempo de entrega
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  2 semanas
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  💰 Precio
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  1.800–2.400 €
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  🎯 Caso de uso
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Perfecto para empresas que quieren automatizar su primer proceso sin riesgo
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Caso real */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 bg-[color-mix(in_srgb,_rgb(var(--color-primary))_5%,_transparent)]">
              <h2 className="font-display text-2xl font-bold text-[rgb(var(--color-fg))] mb-4">
                📈 Caso real vinculado
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))] mb-6">
                Ve cómo implementamos Synko Launch en un ecommerce real y los resultados obtenidos en las primeras 2 semanas.
              </p>
              <Link href="/casos/ecommerce">
                <Button variant="primary">
                  Ver caso de estudio
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-[rgb(var(--color-fg))] mb-6">
              ¿Listo para tu primer agente IA?
            </h2>
            <p className="text-lg text-[rgb(var(--color-muted))] mb-8">
              Solicita Synko Launch y empieza a automatizar en 2 semanas.
            </p>
            <Link href="/contacto">
              <Button variant="highlight" size="lg">
                Solicitar este producto
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export const metadata = {
  title: "Synko Launch | Tu primer agente IA en 2 semanas",
  description: "Setup completo de automatización IA en 2 semanas. Incluye agente personalizado, integración API y dashboard. Desde 1.800€.",
};