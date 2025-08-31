import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function CarePage() {
  return (
    <main>
      {/* Hero */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="highlight" size="md" className="mb-4">
                SKU-007
              </Badge>
              <h1 className="font-display mb-4 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
                Synko Care Plan
              </h1>
              <p className="text-xl font-medium text-[rgb(var(--color-primary))] mb-6">
                Optimización continua
              </p>
              <p className="text-lg text-[rgb(var(--color-muted))] max-w-2xl mx-auto">
                Plan de mantenimiento y mejora continua para tus productos Synko con roadmap personalizado.
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
                Los sistemas automatizados necesitan evolucionar con el negocio para mantener su efectividad. Sin mantenimiento continuo, el ROI se degrada con el tiempo.
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
              Qué incluye tu Synko Care Plan
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🔧 8-16 horas/mes de mejoras
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Tiempo dedicado exclusivamente a optimizar tus automatizaciones
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  📊 Informes mensuales de ROI
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Métricas detalladas del impacto en tu negocio
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🗺️ Roadmap personalizado
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Plan estratégico de evolución de tus automatizaciones
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  🚀 Soporte prioritario
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Respuesta en menos de 4 horas para cualquier incidencia
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg text-[rgb(var(--color-fg))] mb-3">
                  ✨ Nuevas funcionalidades
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Acceso prioritario a nuevos productos y features
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Planes disponibles */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-[rgb(var(--color-fg))] mb-8 text-center">
              Planes disponibles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-2 border-[rgb(var(--color-primary))]">
                <Badge variant="primary" size="sm" className="mb-4">
                  Care Básico
                </Badge>
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  350 €/mes
                </h3>
                <p className="text-[rgb(var(--color-muted))] mb-4">
                  8 horas/mes de optimización
                </p>
                <ul className="space-y-2 text-sm text-[rgb(var(--color-muted))]">
                  <li>• Informes mensuales básicos</li>
                  <li>• Soporte por email</li>
                  <li>• 1 mejora mensual</li>
                  <li>• Monitoreo básico</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-[rgb(var(--color-highlight))]">
                <Badge variant="highlight" size="sm" className="mb-4">
                  Care Premium
                </Badge>
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  700 €/mes
                </h3>
                <p className="text-[rgb(var(--color-muted))] mb-4">
                  16 horas/mes de optimización
                </p>
                <ul className="space-y-2 text-sm text-[rgb(var(--color-muted))]">
                  <li>• Informes detallados con ROI</li>
                  <li>• Soporte prioritario</li>
                  <li>• 2-3 mejoras mensuales</li>
                  <li>• Roadmap personalizado</li>
                  <li>• Acceso a nuevos productos</li>
                </ul>
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
                  ⏱️ Modalidad
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  Servicio continuo
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  💰 Precio
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  350–700 €/mes
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-[rgb(var(--color-fg))] mb-2">
                  🎯 Caso de uso
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Esencial para empresas que quieren maximizar el ROI a largo plazo
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
                Ve cómo el Care Plan aumentó el ROI de automatización en un 150% en 6 meses.
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
              ¿Listo para maximizar tu ROI?
            </h2>
            <p className="text-lg text-[rgb(var(--color-muted))] mb-8">
              Solicita Synko Care Plan y asegura el éxito continuo de tus automatizaciones.
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
  title: "Synko Care Plan | Optimización continua de IA",
  description: "Plan de mantenimiento y mejora continua para tus productos Synko. 8-16h/mes de optimización. Desde 350€/mes.",
};