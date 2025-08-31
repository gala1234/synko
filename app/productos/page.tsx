import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import productsData from "@/content/products-detailed.json";
import { ProductDetailed } from "@/lib/products";

export default function ProductosPage() {
  const products = productsData as ProductDetailed[];

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Productos Synko
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
              Productos IA listos para instalar
            </h1>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))]">
              Entregamos productos Synko listos para instalar en tu negocio en
              2–6 semanas. Alcance definido, ROI medible.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar propuesta
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline" size="sm">
                      {product.sku}
                    </Badge>
                    <span className="text-sm font-medium text-[rgb(var(--color-primary))]">
                      {product.deliveryTime}
                    </span>
                  </div>
                  <h2 className="font-display mb-2 text-xl font-bold text-[rgb(var(--color-fg))]">
                    {product.title}
                  </h2>
                  <p className="mb-3 text-sm font-medium text-[rgb(var(--color-primary))]">
                    {product.tagline}
                  </p>
                  <p className="mb-4 text-sm text-[rgb(var(--color-muted))]">
                    {product.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold text-[rgb(var(--color-fg))]">
                    Qué incluye:
                  </h3>
                  <ul className="space-y-1 text-sm text-[rgb(var(--color-muted))]">
                    {product.includes.slice(0, 4).map((item, index) => (
                      <li key={`${product.id}-include-${index}`}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[rgb(var(--color-fg))]">
                    {product.price}
                  </span>
                  <Link href={`/productos/${product.id}`}>
                    <Button variant="primary" size="sm">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

export const metadata = {
  title: "Productos Synko | Automatización IA para tu negocio",
  description:
    "Productos IA listos para instalar en tu negocio. Alcance definido, ROI medible. Desde 900€.",
};
