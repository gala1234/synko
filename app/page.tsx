import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Metrics } from "@/components/ui/Metrics";
import { Testimonial } from "@/components/ui/Testimonial";
import { CtaBanner } from "@/components/ui/CtaBanner";
import Link from "next/link";
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
  Clock
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] font-medium px-3 py-1 rounded-full text-sm">
                  E-commerce
                </Badge>
                <Badge className="bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] font-medium px-3 py-1 rounded-full text-sm">
                  Clínicas
                </Badge>
                <Badge className="bg-[var(--color-highlight)]/10 text-[var(--color-highlight)] font-medium px-3 py-1 rounded-full text-sm">
                  Gyms
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-fg)] mb-6 text-balance">
                Automatización e IA orquestadas para crecer sin fricción.
              </h1>
              <p className="text-xl text-[var(--color-muted)] mb-8 text-balance">
                Agentes, APIs y datos conectados para convertir procesos en resultados medibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary">
                  <Link href="/contacto">
                    Solicitar propuesta
                  </Link>
                </Button>
                <Button size="lg" variant="ghost">
                  <Link href="/servicios">
                    Ver servicios
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-highlight)]/20 rounded-2xl flex items-center justify-center">
                <div className="text-[var(--color-muted)] text-center">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-fg)] mb-4 text-balance">
              Qué hacemos en Synko
            </h2>
            <p className="text-xl text-[var(--color-muted)] text-balance">
              Automatización + IA aplicada a resultados reales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Bot size={24} />}
              title="Agentes IA con datos propios"
              bullets={[
                "Bots que entienden tu catálogo, FAQs y políticas.",
                "Responden en IG/WhatsApp/Web de forma contextual.",
                "Entrenamiento ligero con tus datos."
              ]}
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Integraciones avanzadas con APIs"
              bullets={[
                "Consulta stock en Shopify o Woo antes de vender.",
                "Reservas automáticas en Google Calendar.",
                "Pagos seguros vía Stripe."
              ]}
            />
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Automatización ventas & marketing"
              bullets={[
                "Leads desde ManyChat → CRM/email.",
                "Campañas automatizadas y alertas en Slack.",
                "Ahorra horas de seguimiento manual."
              ]}
            />
            <FeatureCard
              icon={<BarChart3 size={24} />}
              title="Analítica & métricas"
              bullets={[
                "Dashboards en Notion/Airtable/Looker Studio.",
                "Embudo de conversaciones → ventas.",
                "Exportable a CSV/JSON."
              ]}
            />
            <FeatureCard
              icon={<Settings size={24} />}
              title="Mantenimiento & optimización"
              bullets={[
                "Iteraciones mensuales con test A/B.",
                "Monitoreo de errores y latencia.",
                "Mejora continua del ROI."
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* Proceso */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-fg)] mb-4 text-balance">
              Nuestro proceso de entrega
            </h2>
            <p className="text-xl text-[var(--color-muted)] text-balance">
              Metodología clara, de diagnóstico a mejora continua.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white mx-auto mb-4">
                <Search size={24} />
              </div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">1</div>
              <h3 className="font-display font-bold text-[var(--color-fg)] mb-2">Diagnóstico</h3>
              <p className="text-[var(--color-muted)] text-sm">Análisis inicial de objetivos y stack.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white mx-auto mb-4">
                <PenTool size={24} />
              </div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">2</div>
              <h3 className="font-display font-bold text-[var(--color-fg)] mb-2">Diseño</h3>
              <p className="text-[var(--color-muted)] text-sm">Blueprint de flujos y datos.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white mx-auto mb-4">
                <Play size={24} />
              </div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">3</div>
              <h3 className="font-display font-bold text-[var(--color-fg)] mb-2">Implementación</h3>
              <p className="text-[var(--color-muted)] text-sm">ManyChat + n8n + APIs.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white mx-auto mb-4">
                <BarChart3 size={24} />
              </div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">4</div>
              <h3 className="font-display font-bold text-[var(--color-fg)] mb-2">Métricas</h3>
              <p className="text-[var(--color-muted)] text-sm">Dashboards y reporting.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white mx-auto mb-4">
                <RefreshCcw size={24} />
              </div>
              <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">5</div>
              <h3 className="font-display font-bold text-[var(--color-fg)] mb-2">Mejora continua</h3>
              <p className="text-[var(--color-muted)] text-sm">Iteraciones, optimización, soporte.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Resultados / ROI */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-fg)] mb-4 text-balance">
              Resultados que importan
            </h2>
            <p className="text-xl text-[var(--color-muted)] text-balance">
              Lo que medimos para demostrar impacto.
            </p>
          </div>
          <Metrics
            metrics={[
              {
                value: "+28",
                label: "ventas/mes",
                icon: <TrendingUp size={24} />
              },
              {
                value: "–35h",
                label: "de soporte ahorradas/mes",
                icon: <Clock size={24} />
              },
              {
                value: "2.5s",
                label: "P95 latencia de respuesta",
                icon: <Zap size={24} />
              }
            ]}
          />
        </Container>
      </Section>

      {/* Testimonios */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-fg)] mb-4 text-balance">
              Qué dicen nuestros clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="Con Synko automatizamos atención en IG, ahora el 60% de DMs son ventas directas."
              author="Laura G."
              role="Tienda online moda"
            />
            <Testimonial
              quote="El bot reserva y cobra citas en automático; redujimos no-shows 22%."
              author="Carlos P."
              role="Clínica dental"
            />
            <Testimonial
              quote="Nuestro equipo ya no responde lo mismo 50 veces; tenemos +17 altas/mes sin aumentar personal."
              author="Ana S."
              role="Gym boutique"
            />
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