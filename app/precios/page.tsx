import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function PreciosPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Precios
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Planes que se adaptan a tu crecimiento
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Desde automatización básica hasta soluciones empresariales completas.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-highlight)]">$497</span>
                <span className="text-[var(--color-muted)]">/mes</span>
              </div>
              <ul className="space-y-3 text-[var(--color-muted)] mb-8">
                <li>• Bot básico WhatsApp/IG</li>
                <li>• Hasta 1,000 conversaciones/mes</li>
                <li>• Integración con 1 plataforma</li>
                <li>• Dashboard básico</li>
                <li>• Soporte por email</li>
              </ul>
              <Button variant="outline" className="w-full">
                Empezar ahora
              </Button>
            </Card>

            <Card className="p-8 text-center border-[var(--color-highlight)] relative">
              <Badge variant="highlight" size="sm" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Más popular
              </Badge>
              <h3 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Growth
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-highlight)]">$997</span>
                <span className="text-[var(--color-muted)]">/mes</span>
              </div>
              <ul className="space-y-3 text-[var(--color-muted)] mb-8">
                <li>• Bot avanzado multicanal</li>
                <li>• Hasta 5,000 conversaciones/mes</li>
                <li>• 3 integraciones incluidas</li>
                <li>• Analytics completo</li>
                <li>• Soporte prioritario</li>
                <li>• Optimización mensual</li>
              </ul>
              <Button variant="primary" className="w-full">
                Solicitar demo
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--color-highlight)]">Custom</span>
              </div>
              <ul className="space-y-3 text-[var(--color-muted)] mb-8">
                <li>• Solución completamente personalizada</li>
                <li>• Conversaciones ilimitadas</li>
                <li>• Integraciones ilimitadas</li>
                <li>• Dedicated account manager</li>
                <li>• SLA garantizado</li>
                <li>• Onboarding personalizado</li>
              </ul>
              <Button variant="outline" className="w-full">
                Contactar ventas
              </Button>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}