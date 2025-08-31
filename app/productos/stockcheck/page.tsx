import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function StockCheckPage() {
  return (
    <main>
      {/* Hero */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <Badge variant="highlight" size="md" className="mb-4">
                SKU-003
              </Badge>
              <h1 className="font-display mb-4 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
                Synko StockCheck
              </h1>
              <p className="mb-6 text-xl font-medium text-[rgb(var(--color-primary))]">
                Verifica stock y responde en tiempo real
              </p>
              <p className="mx-auto max-w-2xl text-lg text-[rgb(var(--color-muted))]">
                Agente que consulta tu inventario en tiempo real y responde a
                clientes con disponibilidad y links de pago directos.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problema que resuelve */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-[color-mix(in_srgb,_rgb(var(--color-accent))_5%,_transparent)] p-8">
              <h2 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                ¿Qué problema resuelve?
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                Los clientes abandonan porque no saben si hay stock disponible o
                el proceso de compra es lento. StockCheck elimina la fricción
                entre la consulta y la compra.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Qué incluye */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display mb-8 text-center text-3xl font-bold text-[rgb(var(--color-fg))]">
              Qué incluye tu Synko StockCheck
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">
                  🛒 Integración con Shopify/WooCommerce
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Conexión directa con tu plataforma de ecommerce
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">
                  ⚡ Consultas de stock en tiempo real
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Información actualizada al segundo sobre disponibilidad
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">
                  🖼️ Respuestas enriquecidas con imágenes
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Muestra productos con fotos y detalles atractivos
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">
                  💳 Links de pago directo
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Del chat a la compra en un solo clic
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-[rgb(var(--color-fg))]">
                  🔔 Notificaciones de stock bajo
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Alertas automáticas para reposición de inventario
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Detalles del producto */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 text-center">
                <h3 className="font-display mb-2 text-xl font-bold text-[rgb(var(--color-fg))]">
                  ⏱️ Tiempo de entrega
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  2-3 semanas
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display mb-2 text-xl font-bold text-[rgb(var(--color-fg))]">
                  💰 Precio
                </h3>
                <p className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                  900–1.200 €
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="font-display mb-2 text-xl font-bold text-[rgb(var(--color-fg))]">
                  🎯 Caso de uso
                </h3>
                <p className="text-[rgb(var(--color-muted))]">
                  Perfecto para ecommerce que quieren reducir abandono de
                  carrito
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Caso real */}
      <Section padding="md">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-[color-mix(in_srgb,_rgb(var(--color-primary))_5%,_transparent)] p-8">
              <h2 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                📈 Caso real vinculado
              </h2>
              <p className="mb-6 text-lg text-[rgb(var(--color-muted))]">
                Ve cómo StockCheck redujo el abandono de carrito en un 35% en un
                ecommerce de moda.
              </p>
              <Link href="/casos/ecommerce">
                <Button variant="primary">Ver caso de estudio</Button>
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold text-[rgb(var(--color-fg))]">
              ¿Listo para reducir el abandono de carrito?
            </h2>
            <p className="mb-8 text-lg text-[rgb(var(--color-muted))]">
              Solicita Synko StockCheck y convierte más visitantes en ventas.
            </p>
            <Link href="/contacto">
              <Button variant="highlight" size="lg">
                Solicitar este producto
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export const metadata = {
  title: "Synko StockCheck | Verifica stock en tiempo real",
  description:
    "Agente IA que consulta inventario y responde con disponibilidad y links de pago. Reduce abandono de carrito. Desde 900€.",
};
