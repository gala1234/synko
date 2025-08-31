import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function CasosPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Casos de estudio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Resultados reales de nuestros clientes
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Descubre cómo hemos ayudado a empresas como la tuya a automatizar y crecer.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-12">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="accent" size="sm" className="mb-4">
                    E-commerce
                  </Badge>
                  <h2 className="text-3xl font-display font-bold text-[var(--color-fg)] mb-4">
                    Tienda de moda aumentó ventas 60%
                  </h2>
                  <p className="text-[var(--color-muted)] mb-6">
                    Una tienda online de moda implementó nuestro bot de Instagram que responde consultas sobre tallas, disponibilidad y procesa pedidos automáticamente.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">+60%</div>
                      <div className="text-sm text-[var(--color-muted)]">Ventas por DM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">-40%</div>
                      <div className="text-sm text-[var(--color-muted)]">Tiempo respuesta</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">24/7</div>
                      <div className="text-sm text-[var(--color-muted)]">Disponibilidad</div>
                    </div>
                  </div>
                  <Button variant="outline">
                    Ver caso completo
                  </Button>
                </div>
                <div className="bg-[var(--color-muted)]/10 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-[var(--color-muted)]">Imagen del caso</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-[var(--color-muted)]/10 rounded-2xl h-64 flex items-center justify-center md:order-first">
                  <span className="text-[var(--color-muted)]">Imagen del caso</span>
                </div>
                <div>
                  <Badge variant="primary" size="sm" className="mb-4">
                    Clínica dental
                  </Badge>
                  <h2 className="text-3xl font-display font-bold text-[var(--color-fg)] mb-4">
                    Clínica redujo no-shows 22%
                  </h2>
                  <p className="text-[var(--color-muted)] mb-6">
                    Automatizamos el sistema de reservas y recordatorios de una clínica dental, integrando WhatsApp con su agenda y sistema de pagos.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">-22%</div>
                      <div className="text-sm text-[var(--color-muted)]">No-shows</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">+35%</div>
                      <div className="text-sm text-[var(--color-muted)]">Reservas online</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">15h</div>
                      <div className="text-sm text-[var(--color-muted)]">Ahorradas/semana</div>
                    </div>
                  </div>
                  <Button variant="outline">
                    Ver caso completo
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="highlight" size="sm" className="mb-4">
                    Gym boutique
                  </Badge>
                  <h2 className="text-3xl font-display font-bold text-[var(--color-fg)] mb-4">
                    Gym aumentó membresías 45%
                  </h2>
                  <p className="text-[var(--color-muted)] mb-6">
                    Un gym boutique implementó nuestro sistema de leads automático que captura interesados desde redes sociales y los convierte en miembros.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">+45%</div>
                      <div className="text-sm text-[var(--color-muted)]">Nuevas membresías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">3x</div>
                      <div className="text-sm text-[var(--color-muted)]">Conversión leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--color-highlight)]">20h</div>
                      <div className="text-sm text-[var(--color-muted)]">Ahorradas/mes</div>
                    </div>
                  </div>
                  <Button variant="outline">
                    Ver caso completo
                  </Button>
                </div>
                <div className="bg-[var(--color-muted)]/10 rounded-2xl h-64 flex items-center justify-center">
                  <span className="text-[var(--color-muted)]">Imagen del caso</span>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}