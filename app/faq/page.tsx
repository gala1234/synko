import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";

const faqData: FaqItem[] = [
  {
    id: "alcance",
    question: "¿Qué producto Synko me conviene según mi negocio?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        <strong>Launch</strong> para ordenar procesos y automatizar lo esencial
        en 2 semanas. <strong>StockCheck</strong> si vendes online y sufres
        roturas o errores de stock. <strong>Book&Pay</strong> si tu negocio vive
        de reservas y cobros por sesión. <strong>RAG Lite</strong> si tu soporte
        responde preguntas repetidas. <strong>ROI Board</strong> si quieres ver
        el retorno real de tus automatizaciones y campañas.{" "}
        <strong>Scale</strong> cuando ya automatizaste lo básico y necesitas
        integraciones/reporting a nivel empresa. <strong>Care Plan</strong> para
        mantener y mejorar cada mes lo que ya está en producción.
      </p>
    ),
  },
  {
    id: "tiempos",
    question: "¿Cuánto tiempo tarda cada implementación y qué se entrega?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        <strong>Launch:</strong> 2 semanas (análisis, automatizaciones clave,
        integraciones, formación y 3 meses de soporte).
        <br />
        <strong>StockCheck / Book&Pay / ROI Board:</strong> 1 semana.
        <br />
        <strong>RAG Lite:</strong> 2 semanas (base de conocimiento +
        chat/respuestas).
        <br />
        <strong>Scale:</strong> 3 semanas (integraciones avanzadas y reporting
        empresarial).
        <br />
        <strong>Care Plan:</strong> continuo (8–16 h/mes, mejoras, monitoreo y
        reportes).
      </p>
    ),
  },
  {
    id: "integraciones",
    question: "¿Con qué plataformas integran?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        E-commerce (<strong>Shopify, WooCommerce</strong>), pagos (
        <strong>Stripe</strong>), agenda (<strong>Google Calendar</strong>),
        CRM/Helpdesk, mensajería (web chat, email/SMS; WhatsApp/IG bajo
        políticas del proveedor), y APIs propias. Si ya tienes stack, nos
        integramos; si no, te recomendamos el mínimo viable que funcione.
      </p>
    ),
  },
  {
    id: "rag-contenidos",
    question: "Para RAG Lite, ¿qué contenidos necesito preparar?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        FAQs, manuales, políticas, artículos de ayuda, PDFs o enlaces. Nosotros
        limpiamos, estructuramos y versionamos el conocimiento. Puedes empezar
        con lo que tengas; ampliamos en Care Plan con un ciclo de mejora
        continua.
      </p>
    ),
  },
  {
    id: "stockcheck",
    question: "¿Cómo evita errores de stock Synko StockCheck?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Sincroniza inventario en tiempo real entre tu e-commerce y proveedores,
        dispara alertas por umbrales bajos y bloquea la venta de productos
        agotados. También puede actualizar fichas de producto y emitir reportes
        de discrepancias para tu equipo.
      </p>
    ),
  },
  {
    id: "bookpay",
    question: "¿Qué resuelve Synko Book&Pay en el día a día?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Reservas online, recordatorios, confirmaciones y cancelaciones
        automáticas, y cobro en el mismo flujo. Reduce ausencias, evita
        perseguir pagos y mantiene tu agenda organizada.
      </p>
    ),
  },
  {
    id: "roi",
    question: "¿Cómo medimos el ROI?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Con <strong>ROI Board</strong> y los KPIs de cada producto:
        ventas/conversión, horas ahorradas, errores evitados, tiempo de
        respuesta, NPS y más. Entregamos dashboards y reportes automáticos; en
        Scale/Care incluimos atribución y modelos de datos a medida.
      </p>
    ),
  },
  {
    id: "costes",
    question: "¿El precio incluye licencias de terceros?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Los precios de Synko cubren análisis, implementación y soporte según el
        producto. Las licencias de terceros (ej. Shopify, Stripe, mensajería) se
        facturan aparte por cada proveedor. Te indicamos el coste estimado antes
        de empezar.
      </p>
    ),
  },
  {
    id: "requisitos",
    question: "¿Qué necesitamos de tu parte para empezar?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Accesos a tus plataformas (o creación de cuentas), un owner del proyecto
        y 1–2 horas para la sesión de diagnóstico. En RAG Lite, los documentos
        base. Del resto nos encargamos nosotros.
      </p>
    ),
  },
  {
    id: "propiedad",
    question: "¿El sistema final es mío? ¿Puedo migrar?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Sí. Entregamos configuraciones, conectores y documentación. Si algún día
        quieres migrar, exportamos datos y dejamos todo listo. Con{" "}
        <strong>Care Plan</strong> mantenemos y mejoramos mes a mes.
      </p>
    ),
  },
  {
    id: "soporte",
    question: "¿Qué soporte incluyen y qué SLAs ofrecen?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Todos los productos incluyen soporte de lanzamiento.{" "}
        <strong>Care Plan</strong> añade monitoreo, mejoras 8–16 h/mes y
        prioridad. En <strong>Scale</strong> podemos acordar SLAs y ventanas de
        mantenimiento según criticidad.
      </p>
    ),
  },
  {
    id: "privacidad",
    question: "¿Cómo gestionan la privacidad y el cumplimiento?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Aplicamos mínimos de datos, cifrado en tránsito y en reposo cuando
        aplica y controles de acceso basados en roles. Trabajamos con
        proveedores que cumplen estándares (ej. GDPR). Si necesitas DPA, lo
        facilitamos.
      </p>
    ),
  },
  {
    id: "multidioma",
    question: "¿Funciona en varios idiomas o países?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Sí. RAG Lite y los flujos de reservas/pagos pueden operar multidioma y
        adaptarse a moneda, impuestos y pasarelas locales.
      </p>
    ),
  },
  {
    id: "escalado",
    question: "Si empiezo con Launch, ¿luego puedo escalar?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Esa es la idea. <strong>Launch</strong> sienta la base y luego añadimos{" "}
        <strong>StockCheck</strong>, <strong>Book&Pay</strong>,{" "}
        <strong>RAG Lite</strong> o <strong>ROI Board</strong>. Cuando el
        volumen lo pide, pasamos a <strong>Scale</strong> con integraciones
        avanzadas y reporting empresarial.
      </p>
    ),
  },
  {
    id: "contratar",
    question: "¿Cómo solicito una propuesta?",
    answer: (
      <p className="text-[rgb(var(--color-muted))]">
        Completa el formulario en{" "}
        <Link href="/contacto" className="underline">
          /contacto
        </Link>{" "}
        indicando el producto que te interesa. Te enviamos una propuesta con
        alcance, tiempos, costes y KPIs de éxito. Si encaja, arrancamos con la
        sesión de diagnóstico.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              FAQ
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
              Preguntas frecuentes
            </h1>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))]">
              Todo lo que necesitas saber para instalar los productos Synko con
              foco en resultados: Launch, StockCheck, Book&Pay, RAG Lite, ROI
              Board, Scale y Care Plan.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl space-y-4">
            {faqData.map((item) => (
              <FaqAccordion key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
