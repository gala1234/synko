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
      excerpt: "Descubre las mejores prácticas para implementar chatbots inteligentes que mejoren la experiencia de tus clientes.",
      category: "Automatización",
      date: "15 Ene 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "ROI de la automatización: casos reales de éxito",
      excerpt: "Análisis detallado de cómo nuestros clientes han aumentado sus ventas y reducido costos operativos.",
      category: "Casos de estudio",
      date: "12 Ene 2024",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Integraciones API: conectando tu stack tecnológico",
      excerpt: "Guía completa para integrar WhatsApp, Shopify, Stripe y otras plataformas en un flujo automatizado.",
      category: "Técnico",
      date: "10 Ene 2024",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "El futuro de las ventas conversacionales",
      excerpt: "Tendencias y predicciones sobre cómo evolucionará la venta a través de mensajería instantánea.",
      category: "Tendencias",
      date: "8 Ene 2024",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Métricas que importan en automatización de marketing",
      excerpt: "KPIs esenciales para medir el éxito de tus campañas automatizadas y optimizar resultados.",
      category: "Marketing",
      date: "5 Ene 2024",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Configuración avanzada de ManyChat para e-commerce",
      excerpt: "Tutorial paso a paso para crear flujos de venta automatizados que conviertan visitantes en clientes.",
      category: "Tutorial",
      date: "3 Ene 2024",
      readTime: "10 min"
    }
  ];

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="highlight" size="md" className="mb-4">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-fg)] mb-6">
              Insights sobre automatización e IA
            </h1>
            <p className="text-xl text-[var(--color-muted)] mb-8">
              Aprende las mejores prácticas, casos de uso y tendencias en automatización de negocios.
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Badge variant="accent" size="sm">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="text-xl font-display font-bold text-[var(--color-fg)] mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-[var(--color-muted)] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-[var(--color-muted)] mb-4">
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
          <Card className="p-8 text-center bg-[var(--color-primary)] text-white">
            <h2 className="text-2xl font-display font-bold mb-4">
              ¿Quieres recibir nuestros últimos artículos?
            </h2>
            <p className="text-white/80 mb-6">
              Suscríbete a nuestro newsletter y mantente al día con las últimas tendencias en automatización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-[var(--color-fg)] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="ghost" className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                Suscribirse
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}