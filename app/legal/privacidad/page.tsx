import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Política de Privacidad | Synko",
  description:
    "Política de privacidad y protección de datos de Synko, conforme al RGPD.",
};

export default function PrivacidadPage() {
  return (
    <main>
      <Section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Política de Privacidad
              </h1>
              <p className="text-muted-foreground text-xl">
                Última actualización: {new Date().toLocaleDateString("es-ES")}
              </p>
            </div>

            <Card className="prose prose-lg max-w-none p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    1. Responsable del tratamiento
                  </h2>
                  <p>
                    El responsable del tratamiento de sus datos personales es{" "}
                    <strong>Synko</strong>, con domicilio en España y dirección
                    de contacto electrónico:{" "}
                    <a
                      href="mailto:hola@synko.dev"
                      className="hover:underline"
                      style={{ color: "rgb(var(--color-primary))" }}
                    >
                      hola@synko.dev
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    2. Datos que recopilamos
                  </h2>
                  <p>Recopilamos los siguientes tipos de datos personales:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Datos de contacto:</strong> nombre, dirección de
                      correo electrónico, sitio web o perfil de Instagram.
                    </li>
                    <li>
                      <strong>Datos profesionales:</strong> sector de actividad,
                      presupuesto aproximado, información sobre su proyecto.
                    </li>
                    <li>
                      <strong>Datos técnicos:</strong> dirección IP, tipo de
                      navegador, páginas visitadas, tiempo de permanencia.
                    </li>
                    <li>
                      <strong>Cookies:</strong> utilizamos cookies técnicas
                      necesarias para el funcionamiento del sitio web.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    3. Finalidades del tratamiento
                  </h2>
                  <p>
                    Tratamos sus datos personales para las siguientes
                    finalidades:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Gestión de consultas:</strong> responder a sus
                      solicitudes de información y proporcionar presupuestos
                      personalizados.
                    </li>
                    <li>
                      <strong>Entrega de productos:</strong> desarrollar y
                      entregar los productos Synko de automatización e IA
                      contratados.
                    </li>
                    <li>
                      <strong>Comunicación comercial:</strong> enviarle
                      información sobre nuestros productos Synko (solo con su
                      consentimiento).
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> cumplir con las
                      obligaciones legales aplicables.
                    </li>
                    <li>
                      <strong>Mejora del sitio web:</strong> analizar el uso del
                      sitio para mejorar la experiencia del usuario.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">4. Base legal</h2>
                  <p>El tratamiento de sus datos se basa en:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Ejecución de un contrato:</strong> para la entrega
                      de nuestros productos.
                    </li>
                    <li>
                      <strong>Interés legítimo:</strong> para responder a sus
                      consultas y mejorar nuestros productos.
                    </li>
                    <li>
                      <strong>Consentimiento:</strong> para el envío de
                      comunicaciones comerciales.
                    </li>
                    <li>
                      <strong>Cumplimiento legal:</strong> para cumplir con
                      obligaciones legales.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    5. Conservación de datos
                  </h2>
                  <p>
                    Conservamos sus datos personales durante el tiempo necesario
                    para cumplir con las finalidades para las que fueron
                    recopilados:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Datos de contacto:</strong> hasta 3 años desde el
                      último contacto.
                    </li>
                    <li>
                      <strong>Datos contractuales:</strong> durante la vigencia
                      del contrato y 6 años adicionales por obligaciones
                      fiscales.
                    </li>
                    <li>
                      <strong>Datos de marketing:</strong> hasta que retire su
                      consentimiento.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    6. Destinatarios de los datos
                  </h2>
                  <p>Sus datos personales pueden ser comunicados a:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Proveedores de servicios:</strong> empresas que
                      nos ayudan a entregar nuestros productos (hosting, email,
                      análisis).
                    </li>
                    <li>
                      <strong>Autoridades públicas:</strong> cuando sea
                      requerido por ley.
                    </li>
                    <li>
                      <strong>Terceros:</strong> solo con su consentimiento
                      expreso.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Todos nuestros proveedores están ubicados en la UE o en
                    países con decisión de adecuación, o cuentan con las
                    garantías adecuadas para la transferencia internacional de
                    datos.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    7. Sus derechos
                  </h2>
                  <p>Conforme al RGPD, usted tiene los siguientes derechos:</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Acceso:</strong> obtener información sobre el
                      tratamiento de sus datos.
                    </li>
                    <li>
                      <strong>Rectificación:</strong> corregir datos inexactos o
                      incompletos.
                    </li>
                    <li>
                      <strong>Supresión:</strong> solicitar la eliminación de
                      sus datos.
                    </li>
                    <li>
                      <strong>Limitación:</strong> restringir el tratamiento en
                      determinadas circunstancias.
                    </li>
                    <li>
                      <strong>Portabilidad:</strong> recibir sus datos en
                      formato estructurado.
                    </li>
                    <li>
                      <strong>Oposición:</strong> oponerse al tratamiento basado
                      en interés legítimo.
                    </li>
                    <li>
                      <strong>Retirada del consentimiento:</strong> retirar el
                      consentimiento en cualquier momento.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Para ejercer estos derechos, puede contactarnos en{" "}
                    <a
                      href="mailto:hola@synko.dev"
                      className="hover:underline"
                      style={{ color: "rgb(var(--color-primary))" }}
                    >
                      hola@synko.dev
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">8. Cookies</h2>
                  <p>
                    Utilizamos cookies técnicas estrictamente necesarias para el
                    funcionamiento del sitio web. No utilizamos cookies de
                    seguimiento o publicitarias sin su consentimiento.
                  </p>
                  <p className="mt-4">
                    Puede configurar su navegador para rechazar las cookies,
                    aunque esto puede afectar al funcionamiento del sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">9. Seguridad</h2>
                  <p>
                    Implementamos medidas técnicas y organizativas apropiadas
                    para proteger sus datos personales contra el acceso no
                    autorizado, la alteración, divulgación o destrucción.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    10. Reclamaciones
                  </h2>
                  <p>
                    Si considera que el tratamiento de sus datos personales no
                    se ajusta a la normativa, puede presentar una reclamación
                    ante la Agencia Española de Protección de Datos (AEPD) en{" "}
                    <a
                      href="https://www.aepd.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: "rgb(var(--color-primary))" }}
                    >
                      www.aepd.es
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">
                    11. Modificaciones
                  </h2>
                  <p>
                    Nos reservamos el derecho a modificar esta política de
                    privacidad. Las modificaciones se publicarán en esta página
                    con la fecha de actualización correspondiente.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold">12. Contacto</h2>
                  <p>
                    Para cualquier consulta sobre esta política de privacidad o
                    el tratamiento de sus datos personales, puede contactarnos
                    en:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:hola@synko.dev"
                        className="hover:underline"
                        style={{ color: "rgb(var(--color-primary))" }}
                      >
                        hola@synko.dev
                      </a>
                    </li>
                    <li>
                      <strong>Asunto:</strong> &ldquo;Protección de Datos&rdquo;
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
