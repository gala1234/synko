import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Términos y Condiciones | Synko",
  description: "Términos y condiciones de uso de los servicios de Synko.",
};

export default function TerminosPage() {
  return (
    <main>
      <Section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Términos y Condiciones
              </h1>
              <p className="text-muted-foreground text-xl">
                Última actualización: {new Date().toLocaleDateString("es-ES")}
              </p>
            </div>

            <Card className="prose prose-lg max-w-none p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    1. Aceptación de los términos
                  </h2>
                  <p>
                    Al acceder y utilizar los servicios de{" "}
                    <strong>Synko</strong>, usted acepta estar sujeto a estos
                    términos y condiciones. Si no está de acuerdo con alguna
                    parte de estos términos, no debe utilizar nuestros
                    servicios.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    2. Descripción de los servicios
                  </h2>
                  <p>Synko ofrece servicios de:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Automatización empresarial:</strong> desarrollo de
                      bots y sistemas automatizados para optimizar procesos de
                      negocio.
                    </li>
                    <li>
                      <strong>Inteligencia artificial:</strong> implementación
                      de soluciones de IA para mejorar la eficiencia operativa.
                    </li>
                    <li>
                      <strong>Desarrollo web:</strong> creación de sitios web y
                      aplicaciones personalizadas.
                    </li>
                    <li>
                      <strong>Consultoría tecnológica:</strong> asesoramiento en
                      transformación digital y optimización de procesos.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    3. Condiciones de uso
                  </h2>
                  <p>Al utilizar nuestros servicios, usted se compromete a:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Proporcionar información veraz y actualizada.</li>
                    <li>
                      No utilizar los servicios para actividades ilegales o no
                      autorizadas.
                    </li>
                    <li>
                      Respetar los derechos de propiedad intelectual de Synko y
                      terceros.
                    </li>
                    <li>
                      No intentar acceder de forma no autorizada a nuestros
                      sistemas.
                    </li>
                    <li>
                      Cumplir con todas las leyes y regulaciones aplicables.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    4. Propiedad intelectual
                  </h2>
                  <p>
                    Todos los derechos de propiedad intelectual sobre los
                    servicios, software, documentación y materiales
                    proporcionados por Synko permanecen como propiedad exclusiva
                    de Synko o sus licenciantes.
                  </p>
                  <p className="mt-4">
                    Los desarrollos personalizados realizados para el cliente
                    serán propiedad del cliente una vez completado el pago
                    total, salvo que se acuerde lo contrario por escrito.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    5. Precios y pagos
                  </h2>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Los precios se especifican en euros (EUR) y pueden estar
                      sujetos a IVA según la legislación aplicable.
                    </li>
                    <li>
                      Los pagos se realizarán según los términos acordados en
                      cada proyecto específico.
                    </li>
                    <li>
                      Nos reservamos el derecho de modificar nuestros precios
                      con previo aviso.
                    </li>
                    <li>
                      Los pagos atrasados pueden estar sujetos a intereses de
                      demora según la legislación vigente.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    6. Garantías y limitación de responsabilidad
                  </h2>
                  <p>
                    Synko se compromete a prestar los servicios con la
                    diligencia profesional exigible. Sin embargo:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      No garantizamos que los servicios estén libres de errores
                      o interrupciones.
                    </li>
                    <li>
                      Nuestra responsabilidad se limita al importe pagado por
                      los servicios específicos.
                    </li>
                    <li>
                      No seremos responsables de daños indirectos, lucro cesante
                      o pérdida de datos.
                    </li>
                    <li>
                      El cliente es responsable de mantener copias de seguridad
                      de su información.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    7. Confidencialidad
                  </h2>
                  <p>
                    Synko se compromete a mantener la confidencialidad de toda
                    la información proporcionada por el cliente durante la
                    prestación de los servicios. Esta obligación permanecerá
                    vigente incluso después de la finalización de la relación
                    contractual.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    8. Terminación
                  </h2>
                  <p>
                    Cualquiera de las partes puede terminar la relación
                    contractual con previo aviso por escrito. En caso de
                    terminación:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      El cliente deberá pagar todos los servicios prestados
                      hasta la fecha de terminación.
                    </li>
                    <li>
                      Synko entregará todos los trabajos completados hasta esa
                      fecha.
                    </li>
                    <li>
                      Las obligaciones de confidencialidad permanecerán
                      vigentes.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    9. Protección de datos
                  </h2>
                  <p>
                    El tratamiento de datos personales se rige por nuestra{" "}
                    <a
                      href="/legal/privacidad"
                      className="text-primary hover:underline"
                    >
                      Política de Privacidad
                    </a>
                    , que forma parte integral de estos términos y condiciones.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    10. Ley aplicable y jurisdicción
                  </h2>
                  <p>
                    Estos términos y condiciones se rigen por la legislación
                    española. Para la resolución de cualquier controversia, las
                    partes se someten a la jurisdicción de los tribunales de
                    España.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    11. Modificaciones
                  </h2>
                  <p>
                    Nos reservamos el derecho de modificar estos términos y
                    condiciones en cualquier momento. Las modificaciones
                    entrarán en vigor desde su publicación en esta página.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">12. Contacto</h2>
                  <p>
                    Para cualquier consulta sobre estos términos y condiciones,
                    puede contactarnos en:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:hola@synko.dev"
                        className="text-primary hover:underline"
                      >
                        hola@synko.dev
                      </a>
                    </li>
                    <li>
                      <strong>Asunto:</strong> &ldquo;Términos y
                      Condiciones&rdquo;
                    </li>
                  </ul>
                </section>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
