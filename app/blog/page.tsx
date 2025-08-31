import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Cómo automatizar tu atención al cliente con IA en 2024",
      excerpt:
        "Descubre las mejores prácticas para implementar chatbots inteligentes que mejoren la experiencia de tus clientes.",
      category: "Automatización",
      date: "15 Ene 2024",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "ROI de la automatización: casos reales de éxito",
      excerpt:
        "Análisis detallado de cómo nuestros clientes han aumentado sus ventas y reducido costos operativos.",
      category: "Casos de estudio",
      date: "12 Ene 2024",
      readTime: "8 min",
    },
    {
      id: 3,
      title: "Integraciones API: conectando tu stack tecnológico",
      excerpt:
        "Guía completa para integrar WhatsApp, Shopify, Stripe y otras plataformas en un flujo automatizado.",
      category: "Técnico",
      date: "10 Ene 2024",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "El futuro de las ventas conversacionales",
      excerpt:
        "Tendencias y predicciones sobre cómo evolucionará la venta a través de mensajería instantánea.",
      category: "Tendencias",
      date: "8 Ene 2024",
      readTime: "4 min",
    },
    {
      id: 5,
      title: "Métricas que importan en automatización de marketing",
      excerpt:
        "KPIs esenciales para medir el éxito de tus campañas automatizadas y optimizar resultados.",
      category: "Marketing",
      date: "5 Ene 2024",
      readTime: "7 min",
    },
    {
      id: 6,
      title: "Configuración avanzada de ManyChat para e-commerce",
      excerpt:
        "Tutorial paso a paso para crear flujos de venta automatizados que conviertan visitantes en clientes.",
      category: "Tutorial",
      date: "3 Ene 2024",
      readTime: "10 min",
    },
  ];

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Blog
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[var(--color-fg)] md:text-5xl">
              Insights sobre automatización e IA
            </h1>
            <p className="mb-8 text-xl text-[var(--color-muted)]">
              Aprende las mejores prácticas, casos de uso y tendencias en
              automatización de negocios.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4">
                  <Badge variant="accent" size="sm">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="font-display mb-3 line-clamp-2 text-xl font-bold text-[var(--color-fg)]">
                  {post.title}
                </h2>
                <p className="mb-4 line-clamp-3 text-[var(--color-muted)]">
                  {post.excerpt}
                </p>
                <div className="mb-4 flex items-center justify-between text-sm text-[var(--color-muted)]">
                  <span>{post.date}</span>
                  <span>{post.readTime} lectura</span>
                </div>
                <Button variant="outline" className="w-full">
                  Leer artículo
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <Card className="bg-[var(--color-primary)] p-8 text-center text-white">
            <h2 className="font-display mb-4 text-2xl font-bold">
              ¿Quieres recibir nuestros últimos artículos?
            </h2>
            <p className="mb-6 text-white/80">
              Suscríbete a nuestro newsletter y mantente al día con las últimas
              tendencias en automatización.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 rounded-lg border-0 px-4 py-3 text-[var(--color-fg)] focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button
                variant="ghost"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Suscribirse
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
