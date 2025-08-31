import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export default function TerminosPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Última actualización: 15 de enero de 2024
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-[var(--color-muted)]">
              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  1. Aceptación de términos
                </h2>
                <p>
                  Al acceder y utilizar los servicios de Synko, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  2. Descripción del servicio
                </h2>
                <p className="mb-4">
                  Synko proporciona servicios de automatización e inteligencia artificial, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Desarrollo de chatbots y agentes conversacionales</li>
                  <li>Integraciones con APIs y plataformas de terceros</li>
                  <li>Automatización de procesos de ventas y marketing</li>
                  <li>Análisis y reportes de métricas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  3. Responsabilidades del usuario
                </h2>
                <p className="mb-4">
                  Como usuario de nuestros servicios, te comprometes a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Utilizar los servicios de manera legal y ética</li>
                  <li>No interferir con el funcionamiento de nuestros sistemas</li>
                  <li>Mantener la confidencialidad de tus credenciales de acceso</li>
                  <li>Cumplir con las políticas de las plataformas integradas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  4. Facturación y pagos
                </h2>
                <p className="mb-4">
                  Los términos de facturación incluyen:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los pagos se procesan mensualmente por adelantado</li>
                  <li>Los precios pueden cambiar con 30 días de aviso</li>
                  <li>Los reembolsos se evalúan caso por caso</li>
                  <li>El servicio puede suspenderse por falta de pago</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  5. Propiedad intelectual
                </h2>
                <p>
                  Synko retiene todos los derechos sobre su tecnología, software y metodologías. Los clientes mantienen la propiedad de sus datos y contenido, otorgando a Synko una licencia para procesarlos según sea necesario para proporcionar los servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  6. Limitación de responsabilidad
                </h2>
                <p>
                  Synko no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por los servicios en los últimos 12 meses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  7. Terminación
                </h2>
                <p>
                  Cualquiera de las partes puede terminar el acuerdo con 30 días de aviso. Synko se reserva el derecho de suspender o terminar servicios inmediatamente en caso de violación de estos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  8. Ley aplicable
                </h2>
                <p>
                  Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de Ciudad de México.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  9. Contacto
                </h2>
                <p>
                  Para preguntas sobre estos términos, contacta:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> legal@synko.dev<br />
                  <strong>Dirección:</strong> Ciudad de México, México
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}