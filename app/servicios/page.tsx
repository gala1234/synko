import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function ServiciosPage() {
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
            <Card className="p-8">
              <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Agentes IA con datos propios
              </h2>
              <p className="text-[var(--color-muted)] mb-6">
                Desarrollamos bots inteligentes que comprenden tu catálogo, políticas y FAQs para responder de forma contextual en Instagram, WhatsApp y tu sitio web.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Entrenamiento con tus datos específicos</li>
                <li>• Respuestas contextuales y precisas</li>
                <li>• Integración multicanal</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Integraciones avanzadas
              </h2>
              <p className="text-[var(--color-muted)] mb-6">
                Conectamos tus sistemas existentes para automatizar consultas de stock, reservas y pagos de forma segura y eficiente.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Consulta stock en tiempo real (Shopify, WooCommerce)</li>
                <li>• Reservas automáticas en Google Calendar</li>
                <li>• Pagos seguros vía Stripe</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Automatización de ventas
              </h2>
              <p className="text-[var(--color-muted)] mb-6">
                Optimizamos tu embudo de ventas desde la captación hasta la conversión, ahorrando horas de seguimiento manual.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Leads automáticos desde ManyChat a CRM</li>
                <li>• Campañas automatizadas y alertas</li>
                <li>• Seguimiento inteligente de prospectos</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}