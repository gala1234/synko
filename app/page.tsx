import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Metrics } from "@/components/ui/Metrics";
import { Testimonial } from "@/components/ui/Testimonial";
import { CtaBanner } from "@/components/ui/CtaBanner";
import Link from "next/link";
import servicesData from "@/content/services.json";
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge className="rounded-full bg-[var(--color-highlight)]/10 px-3 py-1 text-sm font-medium text-[var(--color-highlight)]">
                  E-commerce
                </Badge>
                <Badge className="rounded-full bg-[var(--color-highlight)]/10 px-3 py-1 text-sm font-medium text-[var(--color-highlight)]">
                  Clínicas
                </Badge>
                <Badge className="rounded-full bg-[var(--color-highlight)]/10 px-3 py-1 text-sm font-medium text-[var(--color-highlight)]">
                  Gyms
                </Badge>
              </div>
              <h1 className="font-display mb-6 text-4xl font-bold text-balance text-[var(--color-fg)] md:text-5xl lg:text-6xl">
                Automatización e IA orquestadas para crecer sin fricción.
              </h1>
              <p className="mb-8 text-xl text-balance text-[var(--color-muted)]">
                Agentes, APIs y datos conectados para convertir procesos en
                resultados medibles.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="primary">
                  <Link href="/contacto">Solicitar propuesta</Link>
                </Button>
                <Button size="lg" variant="ghost">
                  <Link href="/servicios">Ver servicios</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full max-w-md items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-highlight)]/20">
                <div className="text-center text-[var(--color-muted)]">
                  <Bot size={64} className="mx-auto mb-4" />
                  <p>Ilustración placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Servicios destacados */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-balance text-[var(--color-fg)] md:text-4xl">
              Qué hacemos en Synko
            </h2>
            <p className="text-xl text-balance text-[var(--color-muted)]">
              Automatización + IA aplicada a resultados reales.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.slice(0, 5).map((service) => {
              const getServiceIcon = (id: string) => {
                switch (id) {
                  case "agentes-ia":
                    return <Bot size={24} />;
                  case "integraciones-apis":
                    return <Zap size={24} />;
                  case "automatizacion-ventas":
                    return <TrendingUp size={24} />;
                  case "analitica-metricas":
                    return <BarChart3 size={24} />;
                  case "mantenimiento":
                    return <Settings size={24} />;
                  default:
                    return <Bot size={24} />;
                }
              };

              return (
                <FeatureCard
                  key={service.id}
                  icon={getServiceIcon(service.id)}
                  title={service.title}
                  bullets={service.bullets}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Proceso */}
      <Section padding="lg">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-3xl font-bold text-balance text-[var(--color-fg)] md:text-4xl">
              Nuestro proceso de entrega
            </h2>
            <p className="text-xl text-balance text-[var(--color-muted)]">
              Metodología clara, de diagnóstico a mejora continua.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                <Search size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                1
              </div>
              <h3 className="font-display mb-2 font-bold text-[var(--color-fg)]">
                Diagnóstico
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Análisis inicial de objetivos y stack.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                <PenTool size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                2
              </div>
              <h3 className="font-display mb-2 font-bold text-[var(--color-fg)]">
                Diseño
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Blueprint de flujos y datos.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                <Play size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                3
              </div>
              <h3 className="font-display mb-2 font-bold text-[var(--color-fg)]">
                Implementación
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                ManyChat + n8n + APIs.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                <BarChart3 size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                4
              </div>
              <h3 className="font-display mb-2 font-bold text-[var(--color-fg)]">
                Métricas
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Dashboards y reporting.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                <RefreshCcw size={24} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[var(--color-primary)]">
                5
              </div>
              <h3 className="font-display mb-2 font-bold text-[var(--color-fg)]">
                Mejora continua
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
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
            <h2 className="font-display mb-4 text-3xl font-bold text-balance text-[var(--color-fg)] md:text-4xl">
              Resultados que importan
            </h2>
            <p className="text-xl text-balance text-[var(--color-muted)]">
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
            <h2 className="font-display mb-4 text-3xl font-bold text-balance text-[var(--color-fg)] md:text-4xl">
              Qué dicen nuestros clientes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
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
