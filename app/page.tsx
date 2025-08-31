import type { Metadata } from "next";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Metrics } from "@/components/ui/Metrics";
import { Testimonial } from "@/components/ui/Testimonial";
import { CtaBanner } from "@/components/ui/CtaBanner";
import Link from "next/link";
import productsData from "@/content/products.json";
import testimonialsData from "@/content/testimonials.json";
import {
  Bot,
  Zap,
  TrendingUp,
  BarChart3,
  Settings,
  Search,
  PenTool,
  Play,
  RefreshCcw,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Synko — Automatización e IA que venden y ahorran tiempo",
  description:
    "Instalamos automatizaciones listas para usar (e-commerce, reservas y soporte) que eliminan tareas repetitivas y aumentan ventas en 2–6 semanas.",
  openGraph: {
    title: "Synko — Automatización e IA con foco en ROI",
    description:
      "Productos Synko: Launch, StockCheck, Book&Pay, RAG Lite, ROI Board, Scale y Care Plan.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://synko.dev",
    siteName: "Synko",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://synko.dev",
  },
};

export default function HomeWrapper() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://synko.dev";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synko",
    url: site,
    logo: `${site}/og-image.png`,
    sameAs: [
      "https://www.linkedin.com/company/synko",
      "https://www.instagram.com/synko.ai",
    ],
  };

  return (
    <>
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
      <HomePage />
    </>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="animate-on-scroll">
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  E-commerce
                </Badge>
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  Reservas & Servicios
                </Badge>
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  Soporte / Atención
                </Badge>
              </div>
              <h1 className="font-display mb-6 text-3xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-4xl md:text-5xl lg:text-6xl">
                Automatización e IA que venden y ahorran tiempo.
              </h1>
              <p className="mb-8 text-lg text-balance text-[rgb(var(--color-muted))] sm:text-xl">
                Instalamos módulos Synko listos para usar que eliminan tareas
                repetitivas, reducen errores y convierten procesos en resultados
                medibles en 2–6 semanas.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  <Link href="/contacto">Solicitar propuesta</Link>
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                  <Link href="/productos">Ver productos</Link>
                </Button>
              </div>
            </div>
            <div className="animate-on-scroll flex items-center justify-center delay-300">
              <div className="hover-scale flex h-48 w-full max-w-sm items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.2)] to-[rgb(var(--color-highlight)/0.2)] sm:h-64 sm:max-w-md">
                <div className="text-center text-[rgb(var(--color-muted))]">
                  <Bot size={48} className="mx-auto mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base">Automatizaciones Synko</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Productos estrella */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-2xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-3xl md:text-4xl">
              Nuestros productos estrella
            </h2>
            <p className="text-lg text-balance text-[rgb(var(--color-muted))] sm:text-xl">
              Implementaciones enfocadas a ROI para e-commerce, reservas y
              soporte.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Synko Launch */}
            <div className="animate-on-scroll hover-lift rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6 delay-100">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <Play size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko Launch
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">
                    Setup completo en 2 semanas
                  </p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Ordena tus procesos y empieza a escalar sin apagar fuegos.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• Análisis de procesos y oportunidades</li>
                <li>• Automatizaciones clave implementadas</li>
                <li>• Integración con tus plataformas</li>
                <li>• Formación al equipo + soporte 3 meses</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">
                  1.800–2.400 €
                </p>
              </div>
              <Button className="w-full" variant="primary">
                <Link href="/productos/launch">Quiero este producto</Link>
              </Button>
            </div>

            {/* Synko StockCheck */}
            <div className="animate-on-scroll hover-lift rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6 delay-200">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko StockCheck
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">
                    Control de inventario en tiempo real
                  </p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Evita ventas erróneas y roturas de stock que dañan tu marca.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• Monitoreo 24/7 del inventario</li>
                <li>• Alertas de stock bajo y desincronizaciones</li>
                <li>• Integración con proveedores y tu ecommerce</li>
                <li>• Dashboard de control para el equipo</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">
                  900–1.200 €
                </p>
              </div>
              <Button className="w-full" variant="primary">
                <Link href="/productos/stockcheck">Quiero este producto</Link>
              </Button>
            </div>

            {/* Synko Care Plan */}
            <div className="animate-on-scroll hover-lift rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6 delay-300">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <RefreshCcw size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko Care Plan
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">
                    Optimización mensual continua
                  </p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Mantenemos tus automatizaciones en su mejor versión.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• 8–16 h/mes de mejoras y nuevas features</li>
                <li>• Monitoreo y soporte prioritario</li>
                <li>• Actualizaciones y hardening de procesos</li>
                <li>• Reportes mensuales accionables</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">
                  350–700 €/mes
                </p>
              </div>
              <Button className="w-full" variant="primary">
                <Link href="/productos/care">Quiero este producto</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Proceso */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-2xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-3xl md:text-4xl">
              Nuestro proceso de entrega
            </h2>
            <p className="text-lg text-balance text-[rgb(var(--color-muted))] sm:text-xl">
              De diagnóstico a mejora continua, con objetivos y métricas claras.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] text-white">
                <Search size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[rgb(var(--color-primary))]">
                1
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                Diagnóstico
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Objetivos de negocio, procesos y datos actuales.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] text-white">
                <PenTool size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[rgb(var(--color-primary))]">
                2
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                Diseño
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Blueprint de flujos, integraciones y tracking.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] text-white">
                <Play size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[rgb(var(--color-primary))]">
                3
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                Implementación
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Integraciones, bots y automatizaciones listas para producir.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] text-white">
                <BarChart3 size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[rgb(var(--color-primary))]">
                4
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                Métricas y ROI
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Dashboards y reporting orientados a decisión.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))] text-white">
                <RefreshCcw size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[rgb(var(--color-primary))]">
                5
              </div>
              <h3 className="font-display mb-2 text-lg font-bold text-[rgb(var(--color-fg))]">
                Mejora continua
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Iteración mensual, optimización y soporte.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Resultados / ROI */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-2xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-3xl md:text-4xl">
              Resultados que importan
            </h2>
          </div>
          <Metrics
            metrics={[
              {
                value: "+18%",
                label: "conversión en checkout",
                icon: <TrendingUp size={24} />,
              },
              {
                value: "–35h",
                label: "de soporte ahorradas/mes",
                icon: <Clock size={24} />,
              },
              {
                value: "–92%",
                label: "errores de stock",
                icon: <BarChart3 size={24} />,
              },
            ]}
          />
        </Container>
      </Section>

      {/* Testimonios */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-2xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-3xl md:text-4xl">
              Qué dicen nuestros clientes
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                quote={testimonial.quote}
                author={testimonial.name}
                role={testimonial.company}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section padding="lg">
        <Container>
          <CtaBanner
            title="Hablemos de tu caso"
            subtitle="Agenda tu propuesta y empieza a ganar tiempo y ventas desde la primera semana."
            ctaLabel="Solicitar propuesta"
            ctaHref="/contacto"
          />
        </Container>
      </Section>
    </>
  );
}
