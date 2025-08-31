import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { CheckCircle, Building2, Target, TrendingUp } from "lucide-react";

// Función para generar rutas estáticas
export async function generateStaticParams() {
  const cases = getAllCaseStudies();
  return cases.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Función para generar metadata dinámicamente
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCaseStudyBySlug(slug);

  if (!caseData) {
    return {
      title: "Caso no encontrado",
      description: "El caso de éxito solicitado no existe.",
    };
  }

  return {
    title: `${caseData.title} | Synko`,
    description: `Caso de éxito de Synko: ${caseData.client} en el sector ${caseData.sector}`,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseData = getCaseStudyBySlug(slug);

  if (!caseData) {
    notFound();
  }

  // Compilar el contenido MDX
  const { content: compiledContent } = await compileMDX({
    source: caseData.content,
    options: { parseFrontmatter: false },
  });

  return (
    <main>
      {/* Hero Section */}
      <Section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <Badge variant="highlight" size="md" className="mb-6">
                Caso de éxito
              </Badge>
              <h1 className="font-display mb-6 text-4xl font-bold text-balance text-[rgb(var(--color-fg))] md:text-5xl lg:text-6xl">
                {caseData.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-lg text-[rgb(var(--color-muted))]">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-[rgb(var(--color-highlight))]" />
                  <span>{caseData.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[rgb(var(--color-highlight))]" />
                  <span>{caseData.sector}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-[rgb(var(--color-fg))] prose-p:text-[rgb(var(--color-muted))] prose-strong:text-[rgb(var(--color-fg))] prose-li:text-[rgb(var(--color-muted))] max-w-none">
                {compiledContent}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Card className="bg-gradient-to-br from-[rgb(var(--color-primary)/0.05)] to-[rgb(var(--color-highlight)/0.05)] p-8 md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-[rgb(var(--color-primary)/0.1)] p-3">
                  <TrendingUp className="h-8 w-8 text-[rgb(var(--color-primary))]" />
                </div>
              </div>
              <h2 className="font-display mb-6 text-3xl font-bold text-[rgb(var(--color-fg))] md:text-4xl">
                ¿Quieres resultados similares?
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-[rgb(var(--color-muted))]">
                Descubre cómo Synko puede transformar tu negocio con
                automatizaciones inteligentes.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contacto"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[rgb(var(--color-primary))] px-8 text-base font-medium text-white transition-colors hover:bg-[rgb(var(--color-primary)/0.9)] focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2 focus:outline-none sm:w-auto"
                >
                  Solicitar consulta gratuita
                </a>
                <p className="text-sm text-[rgb(var(--color-muted))]">
                  Respuesta en menos de 24h
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
