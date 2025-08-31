import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default async function BlogPage() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(source);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        summary: data.summary,
        date: data.date,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main>
      <Section padding="lg">
        <Container size="lg">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="highlight" size="md" className="mb-4">
              Blog
            </Badge>
            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
              Insights sobre automatización e IA
            </h1>
            <p className="mb-8 text-xl text-[rgb(var(--color-muted))]">
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
                key={post.slug}
                className="p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Badge key={tag} variant="accent" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-[rgb(var(--color-muted))]">
                    {formatDate(post.date)}
                  </p>
                </div>
                <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--color-fg))]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="leading-relaxed text-[rgb(var(--color-muted))]">
                  {post.summary}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-medium text-[rgb(var(--color-primary))] hover:underline"
                  >
                    Leer más →
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
