import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { CheckCircle, Clock, Euro, Target, Zap, Bot } from "lucide-react";
import { notFound } from "next/navigation";
import productsData from "@/content/products.json";

// Función para cargar datos del producto dinámicamente
async function getProductData(slug: string) {
  try {
    const productData = await import(`@/content/products/${slug}.json`);
    return productData.default;
  } catch (error) {
    return null;
  }
}

// Función para generar rutas estáticas
export async function generateStaticParams() {
  return productsData.map((product) => ({
    item: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const productData = await getProductData(item);

  if (!productData) {
    notFound();
  }
  return (
    <main>
      {/* Hero */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <Badge variant="highlight" size="md" className="mb-6">
                {productData.badge}
              </Badge>
              <h1 className="font-display mb-6 text-4xl font-bold text-balance text-[rgb(var(--color-fg))] md:text-5xl lg:text-6xl">
                {productData.title}
              </h1>
              <p className="mb-8 text-xl text-balance text-[rgb(var(--color-muted))] md:text-2xl">
                {productData.tagline}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-[rgb(var(--color-muted))]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[rgb(var(--color-highlight))]" />
                  <span>{productData.hero.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-[rgb(var(--color-highlight))]" />
                  <span>{productData.hero.price}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sección Problema */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-[rgb(var(--color-accent))] bg-[color-mix(in_srgb,_rgb(var(--color-accent))_3%,_transparent)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-accent)/0.1)] text-[rgb(var(--color-accent))]">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                    {productData.sections.problem.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[rgb(var(--color-muted))]">
                    {productData.sections.problem.content}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sección Solución */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-[rgb(var(--color-primary))] bg-[color-mix(in_srgb,_rgb(var(--color-primary))_3%,_transparent)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))]">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))]">
                    {productData.sections.solution.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[rgb(var(--color-muted))]">
                    {productData.sections.solution.content}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Sección Beneficios */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                {productData.sections.benefits.title}
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                {productData.sections.benefits.subtitle}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {productData.sections.benefits.items.map(
                (benefit: string, index: number) => (
                  <Card
                    key={benefit}
                    className="p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-highlight)/0.1)] text-[rgb(var(--color-highlight))]">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-lg leading-relaxed text-[rgb(var(--color-fg))]">
                        {benefit}
                      </p>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sección Qué incluye */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                {productData.sections.includes.title}
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                {productData.sections.includes.subtitle}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {productData.sections.includes.items.map(
                (item: string, index: number) => (
                  <Card
                    key={item}
                    className="p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))]">
                        <Bot className="h-5 w-5" />
                      </div>
                      <p className="text-lg leading-relaxed text-[rgb(var(--color-fg))]">
                        {item}
                      </p>
                    </div>
                  </Card>
                )
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Sección Precio y tiempo */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="font-display mb-4 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                {productData.sections.pricing.title}
              </h2>
              <p className="text-lg text-[rgb(var(--color-muted))]">
                {productData.sections.pricing.subtitle}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-[rgb(var(--color-highlight))] p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-highlight)/0.1)] text-[rgb(var(--color-highlight))]">
                    <Euro className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-[rgb(var(--color-fg))]">
                  Precio
                </h3>
                <p className="mb-3 text-4xl font-bold text-[rgb(var(--color-highlight))]">
                  {productData.sections.pricing.price}
                </p>
                <p className="text-sm text-[rgb(var(--color-muted))]">
                  {productData.sections.pricing.priceNote}
                </p>
              </Card>
              <Card className="p-8 text-center transition-shadow hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))]">
                    <Clock className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="font-display mb-3 text-xl font-bold text-[rgb(var(--color-fg))]">
                  Tiempo de entrega
                </h3>
                <p className="text-4xl font-bold text-[rgb(var(--color-primary))]">
                  {productData.sections.pricing.deliveryTime}
                </p>
                <p className="mt-3 text-sm text-[rgb(var(--color-muted))]">
                  {productData.sections.pricing.deliveryNote}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sección Para quién es */}
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-[rgb(var(--color-highlight))] bg-[color-mix(in_srgb,_rgb(var(--color-highlight))_3%,_transparent)] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-highlight)/0.1)] text-[rgb(var(--color-highlight))]">
                  <Target className="h-6 w-6" />
                </div>
                <div className="flex-1 text-center">
                  <h2 className="font-display mb-4 text-2xl font-bold text-[rgb(var(--color-fg))] md:text-3xl">
                    {productData.sections.target.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[rgb(var(--color-muted))]">
                    {productData.sections.target.content}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Cierre CTA */}
      <Section padding="xl">
        <Container size="lg">
          <div className="mx-auto max-w-3xl">
            <Card className="bg-gradient-to-br from-[rgb(var(--color-primary)/0.05)] to-[rgb(var(--color-highlight)/0.05)] p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgb(var(--color-highlight)/0.1)] text-[rgb(var(--color-highlight))]">
                  <Zap className="h-10 w-10" />
                </div>
              </div>
              <h2 className="font-display mb-6 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                {productData.sections.cta.title}
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-[rgb(var(--color-muted))]">
                {productData.sections.cta.content}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contacto">
                  <Button
                    variant="highlight"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {productData.sections.cta.buttonText}
                  </Button>
                </Link>
                <p className="text-sm text-[rgb(var(--color-muted))]">
                  {productData.sections.cta.responseTime}
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}

// Función para generar metadata dinámicamente
export async function generateMetadata({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const productData = await getProductData(item);

  if (!productData) {
    return {
      title: "Producto no encontrado",
      description: "El producto solicitado no existe.",
    };
  }

  return {
    title: productData.metadata.title,
    description: productData.metadata.description,
  };
}
