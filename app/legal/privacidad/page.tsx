import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export default function PrivacidadPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Política de Privacidad
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
                  1. Información que recopilamos
                </h2>
                <p className="mb-4">
                  En Synko, recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Te registras en nuestros servicios</li>
                  <li>Nos contactas a través de formularios o email</li>
                  <li>Utilizas nuestros bots y servicios de automatización</li>
                  <li>Participas en encuestas o promociones</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  2. Cómo utilizamos tu información
                </h2>
                <p className="mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Personalizar tu experiencia</li>
                  <li>Comunicarnos contigo sobre actualizaciones y ofertas</li>
                  <li>Analizar el uso de nuestros servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  3. Compartir información
                </h2>
                <p className="mb-4">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Con tu consentimiento explícito</li>
                  <li>Para cumplir con la ley o procesos legales</li>
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  4. Seguridad de datos
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  5. Tus derechos
                </h2>
                <p className="mb-4">
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar la portabilidad de tus datos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  6. Cookies y tecnologías similares
                </h2>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-fg)] mb-4">
                  7. Contacto
                </h2>
                <p>
                  Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> privacidad@synko.dev<br />
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