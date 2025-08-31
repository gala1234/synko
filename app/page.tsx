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
  title: "Synko — IA y Automatización para crecer sin fricción",
  description:
    "Orquestamos agentes, APIs y datos para convertir procesos en resultados medibles.",
  openGraph: {
    title: "Synko — IA y Automatización",
    description: "Agentes, APIs y datos conectados orientados a ROI.",
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
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  E-commerce
                </Badge>
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  Clínicas
                </Badge>
                <Badge className="rounded-full bg-[rgb(var(--color-highlight)/0.1)] px-3 py-1 text-sm font-medium text-[rgb(var(--color-highlight))]">
                  Gyms
                </Badge>
              </div>
              <h1 className="font-display mb-6 text-3xl font-bold text-balance text-[rgb(var(--color-fg))] sm:text-4xl md:text-5xl lg:text-6xl">
                Automatización e IA orquestadas para crecer sin fricción.
              </h1>
              <p className="mb-8 text-lg text-balance text-[rgb(var(--color-muted))] sm:text-xl">
                Agentes, APIs y datos conectados para convertir procesos en
                resultados medibles.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  <Link href="/contacto">Solicitar propuesta</Link>
                </Button>
                <Button size="lg" variant="ghost" className="w-full sm:w-auto">
                  <Link href="/productos">Ver productos</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-48 w-full max-w-sm items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(var(--color-primary)/0.2)] to-[rgb(var(--color-highlight)/0.2)] sm:h-64 sm:max-w-md">
                <div className="text-center text-[rgb(var(--color-muted))]">
                  <Bot size={48} className="mx-auto mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base">Ilustración placeholder</p>
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
              Productos Synko listos para instalar en tu negocio en 2–6 semanas.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Synko Launch */}
            <div className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <Play size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko Launch
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">SKU-001</p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Setup completo en 2 semanas.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• 1 agente IA personalizado</li>
                <li>• 1 integración API</li>
                <li>• Sistema de tracking</li>
                <li>• Mini-dashboard de métricas</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">1.800–2.400 €</p>
              </div>
              <Button className="w-full" variant="primary">
                <Link href="/productos/launch">Quiero este producto</Link>
              </Button>
            </div>

            {/* Synko StockCheck */}
            <div className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko StockCheck
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">SKU-003</p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Verifica stock y responde en tiempo real.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• Integración con Shopify/WooCommerce</li>
                <li>• Respuestas automáticas enriquecidas</li>
                <li>• Links de pago directo</li>
                <li>• Notificaciones de stock bajo</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">900–1.200 €</p>
              </div>
              <Button className="w-full" variant="primary">
                <Link href="/productos/stockcheck">Quiero este producto</Link>
              </Button>
            </div>

            {/* Synko Care Plan */}
            <div className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-primary))] text-white">
                  <RefreshCcw size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[rgb(var(--color-fg))]">
                    Synko Care Plan
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-muted))]">SKU-007</p>
                </div>
              </div>
              <p className="mb-4 text-[rgb(var(--color-muted))]">
                Optimización continua.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-[rgb(var(--color-muted))]">
                <li>• 8–16h/mes de mejoras</li>
                <li>• Informes de ROI mensuales</li>
                <li>• Roadmap de evolución</li>
                <li>• Soporte prioritario</li>
              </ul>
              <div className="mb-4">
                <p className="text-lg font-bold text-[rgb(var(--color-fg))]">350–700 €/mes</p>
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
              Metodología clara, de diagnóstico a mejora continua.
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
                Análisis inicial de objetivos y stack.
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
                Blueprint de flujos y datos.
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
                ManyChat + n8n + APIs.
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
                Métricas
              </h3>
              <p className="text-sm text-[rgb(var(--color-muted))]">
                Dashboards y reporting.
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
                Iteraciones, optimización, soporte.
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
            <p className="text-lg text-balance text-[rgb(var(--color-muted))] sm:text-xl">
              Lo que medimos para demostrar impacto.
            </p>
          </div>
          <Metrics
            metrics={[
              {
                value: "+28",
                label: "ventas/mes",
                icon: <TrendingUp size={24} />,
              },
              {
                value: "–35h",
                label: "de soporte ahorradas/mes",
                icon: <Clock size={24} />,
              },
              {
                value: "2.5s",
                label: "P95 latencia de respuesta",
                icon: <Zap size={24} />,
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
