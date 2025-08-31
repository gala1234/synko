import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function FaqPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Preguntas frecuentes
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Resolvemos las dudas más comunes sobre nuestros servicios de automatización e IA.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Cuánto tiempo toma implementar un bot?
              </h3>
              <p className="text-[var(--color-muted)]">
                El tiempo de implementación varía según la complejidad. Un bot básico puede estar listo en 1-2 semanas, mientras que soluciones más avanzadas con múltiples integraciones pueden tomar 4-6 semanas.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Qué plataformas soportan?
              </h3>
              <p className="text-[var(--color-muted)]">
                Trabajamos principalmente con WhatsApp, Instagram, Facebook Messenger y sitios web. También integramos con Shopify, WooCommerce, Google Calendar, Stripe, y muchas otras plataformas según tus necesidades.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Necesito conocimientos técnicos para usar el bot?
              </h3>
              <p className="text-[var(--color-muted)]">
                No. Nos encargamos de toda la configuración técnica y te proporcionamos un dashboard intuitivo para monitorear y ajustar el bot. También incluimos capacitación para tu equipo.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Qué sucede si el bot no puede responder una pregunta?
              </h3>
              <p className="text-[var(--color-muted)]">
                El bot está programado para derivar conversaciones complejas a tu equipo humano de forma inteligente. También aprendemos de estas interacciones para mejorar continuamente las respuestas automáticas.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Ofrecen soporte técnico?
              </h3>
              <p className="text-[var(--color-muted)]">
                Sí, todos nuestros planes incluyen soporte técnico. El plan Starter incluye soporte por email, mientras que Growth y Enterprise tienen soporte prioritario y dedicado.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Puedo cancelar mi suscripción en cualquier momento?
              </h3>
              <p className="text-[var(--color-muted)]">
                Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Te ayudamos con la migración de datos si decides cambiar de proveedor.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Cómo miden el ROI de la automatización?
              </h3>
              <p className="text-[var(--color-muted)]">
                Proporcionamos dashboards detallados que muestran métricas como tiempo ahorrado, conversiones generadas, reducción en tiempo de respuesta, y otros KPIs específicos de tu industria.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3">
                ¿Trabajan con empresas de cualquier tamaño?
              </h3>
              <p className="text-[var(--color-muted)]">
                Sí, desde startups hasta empresas grandes. Nuestros planes Starter y Growth son ideales para pequeñas y medianas empresas, mientras que Enterprise está diseñado para organizaciones más grandes con necesidades complejas.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}