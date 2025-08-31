import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Synko",
  description:
    "Conoce más sobre Synko, nuestro equipo y nuestra misión de transformar negocios a través de la automatización e inteligencia artificial.",
  openGraph: {
    title: "Sobre Nosotros — Synko",
    description:
      "Descubre la historia, misión y valores de Synko. Especialistas en automatización e IA para el crecimiento empresarial.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sobre-nosotros`,
    siteName: "Synko",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/sobre-nosotros`,
  },
};

export default function SobreNosotrosPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Sobre Nosotros
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-6xl">
              Transformamos negocios con{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))] bg-clip-text text-transparent">
                IA y automatización
              </span>
            </h1>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))] md:text-2xl">
              Somos especialistas en crear soluciones de automatización e
              inteligencia artificial que impulsan el crecimiento empresarial y
              optimizan procesos.
            </p>
          </div>
        </Container>
      </Section>

      {/* Nuestra Historia */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                Nuestra Historia
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                Desde nuestros inicios, hemos estado comprometidos con la
                innovación y la excelencia
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--color-primary)/0.1)]">
                  <Lightbulb className="h-6 w-6 text-[rgb(var(--color-primary))]" />
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-[rgb(var(--color-fg))]">
                  El Comienzo
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Synko nació de la necesidad de democratizar el acceso a
                  tecnologías avanzadas de automatización e IA para empresas de
                  todos los tamaños. Vimos que muchas organizaciones luchaban
                  con procesos manuales repetitivos que limitaban su
                  crecimiento.
                </p>
              </Card>

              <Card className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--color-accent)/0.1)]">
                  <TrendingUp className="h-6 w-6 text-[rgb(var(--color-accent))]" />
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-[rgb(var(--color-fg))]">
                  Nuestro Crecimiento
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Hoy, hemos ayudado a cientos de empresas a automatizar sus
                  procesos, aumentar sus ventas y mejorar la experiencia de sus
                  clientes. Nuestro enfoque en el ROI y resultados medibles nos
                  ha posicionado como líderes en el sector.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Misión, Visión y Valores */}
      <Section padding="lg" className="bg-[rgb(var(--color-bg-secondary))]">
        <Container size="lg">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                Nuestros Pilares
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                Los valores que guían cada decisión y proyecto que emprendemos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Misión */}
              <Card className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary)/0.1)]">
                    <Target className="h-8 w-8 text-[rgb(var(--color-primary))]" />
                  </div>
                </div>
                <h3 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                  Misión
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Empoderar a las empresas con soluciones de automatización e IA
                  que generen un impacto real y medible en su crecimiento,
                  eliminando tareas repetitivas y optimizando procesos.
                </p>
              </Card>

              {/* Visión */}
              <Card className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-accent)/0.1)]">
                    <Eye className="h-8 w-8 text-[rgb(var(--color-accent))]" />
                  </div>
                </div>
                <h3 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                  Visión
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Ser la empresa líder en automatización empresarial, reconocida
                  por transformar la manera en que las organizaciones operan y
                  crecen a través de la tecnología.
                </p>
              </Card>

              {/* Valores */}
              <Card className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-success)/0.1)]">
                    <Heart className="h-8 w-8 text-[rgb(var(--color-success))]" />
                  </div>
                </div>
                <h3 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                  Valores
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Innovación constante, transparencia en resultados, enfoque en
                  ROI, excelencia en el servicio y compromiso con el éxito de
                  nuestros clientes.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nuestro Enfoque */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                Nuestro Enfoque
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                Metodología probada que garantiza resultados exitosos
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-primary)/0.1)]">
                  <Zap className="h-6 w-6 text-[rgb(var(--color-primary))]" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                    Implementación Rápida
                  </h3>
                  <p className="text-[rgb(var(--color-muted))]">
                    Soluciones listas para usar que se implementan en 2-6
                    semanas, minimizando el tiempo de inactividad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-accent)/0.1)]">
                  <TrendingUp className="h-6 w-6 text-[rgb(var(--color-accent))]" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                    Enfoque en ROI
                  </h3>
                  <p className="text-[rgb(var(--color-muted))]">
                    Cada solución está diseñada para generar un retorno de
                    inversión medible y demostrable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-success)/0.1)]">
                  <Shield className="h-6 w-6 text-[rgb(var(--color-success))]" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                    Soporte Continuo
                  </h3>
                  <p className="text-[rgb(var(--color-muted))]">
                    Acompañamiento completo desde la implementación hasta la
                    optimización continua de resultados.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-warning)/0.1)]">
                  <Users className="h-6 w-6 text-[rgb(var(--color-warning))]" />
                </div>
                <div>
                  <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                    Equipo Especializado
                  </h3>
                  <p className="text-[rgb(var(--color-muted))]">
                    Profesionales expertos en automatización, IA y desarrollo de
                    software trabajando en tu proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Estadísticas */}
      <Section padding="lg" className="bg-[rgb(var(--color-bg-secondary))]">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-12 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
              Nuestro Impacto
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="font-display mb-2 text-4xl font-bold text-[rgb(var(--color-primary))] md:text-5xl">
                  200+
                </div>
                <p className="text-lg text-[rgb(var(--color-muted))]">
                  Proyectos completados
                </p>
              </div>

              <div className="text-center">
                <div className="font-display mb-2 text-4xl font-bold text-[rgb(var(--color-accent))] md:text-5xl">
                  95%
                </div>
                <p className="text-lg text-[rgb(var(--color-muted))]">
                  Clientes satisfechos
                </p>
              </div>

              <div className="text-center">
                <div className="font-display mb-2 text-4xl font-bold text-[rgb(var(--color-success))] md:text-5xl">
                  3x
                </div>
                <p className="text-lg text-[rgb(var(--color-muted))]">
                  Promedio de ROI obtenido
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))]">
              Descubre cómo nuestras soluciones de automatización e IA pueden
              impulsar el crecimiento de tu empresa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-lg bg-[rgb(var(--color-primary))] px-6 py-3 text-base font-semibold text-white shadow-md transition-[box-shadow,transform,background-color] duration-200 hover:bg-[rgb(var(--color-primary-600))]"
              >
                Hablar con un especialista
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center justify-center rounded-lg border border-[rgb(var(--color-primary))] px-6 py-3 text-base font-semibold text-[rgb(var(--color-primary))] transition-[box-shadow,transform,background-color] duration-200 hover:bg-[rgb(var(--color-primary))] hover:text-white"
              >
                Ver nuestros productos
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
