import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function ContactoPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Contacto
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Agenda una consulta gratuita y descubre cómo podemos automatizar tu negocio.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-6">
                Envíanos un mensaje
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[var(--color-fg)] mb-2">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-fg)] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-[var(--color-fg)] mb-2">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="proyecto" className="block text-sm font-medium text-[var(--color-fg)] mb-2">
                    Tipo de proyecto
                  </label>
                  <select id="proyecto" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                    <option>Selecciona una opción</option>
                    <option>Bot de WhatsApp/Instagram</option>
                    <option>Automatización de ventas</option>
                    <option>Integraciones con APIs</option>
                    <option>Proyecto personalizado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-[var(--color-fg)] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  ></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-4">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-[var(--color-fg)]">Email</div>
                    <div className="text-[var(--color-muted)]">hola@synko.dev</div>
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-fg)]">WhatsApp</div>
                    <div className="text-[var(--color-muted)]">+52 55 1234 5678</div>
                  </div>
                  <div>
                    <div className="font-medium text-[var(--color-fg)]">Horario</div>
                    <div className="text-[var(--color-muted)]">Lun - Vie: 9:00 - 18:00 (GMT-6)</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-4">
                  ¿Prefieres una videollamada?
                </h3>
                <p className="text-[var(--color-muted)] mb-4">
                  Agenda una consulta gratuita de 30 minutos para discutir tu proyecto en detalle.
                </p>
                <Button variant="outline" className="w-full">
                  Agendar llamada
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-display font-bold text-[var(--color-fg)] mb-4">
                  Tiempo de respuesta
                </h3>
                <p className="text-[var(--color-muted)]">
                  Respondemos todos los mensajes en menos de 24 horas. Para consultas urgentes, contáctanos por WhatsApp.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}