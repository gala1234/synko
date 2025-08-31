import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Post no encontrado",
    };
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);

  return {
    title: `${data.title} | Synko Blog`,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      type: "article",
      publishedTime: data.date,
      tags: data.tags,
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

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
        <Container size="md">
          <div className="mb-8">
            <Link
              href="/blog"
              className="mb-6 inline-block text-[rgb(var(--color-primary))] hover:underline"
            >
              ← Volver al blog
            </Link>

            <div className="mb-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {data.tags?.map((tag: string) => (
                  <Badge key={tag} variant="accent" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mb-4 text-sm text-[rgb(var(--color-muted))]">
                {formatDate(data.date)}
              </p>
            </div>

            <h1 className="font-display mb-6 text-4xl font-bold text-[rgb(var(--color-fg))] md:text-5xl">
              {data.title}
            </h1>

            <p className="text-xl leading-relaxed text-[rgb(var(--color-muted))]">
              {data.summary}
            </p>
          </div>

          <article className="prose prose-slate dark:prose-invert max-w-none">
            {/* @ts-ignore */}
            <MDXRemote source={content} />
          </article>

          <div className="mt-12 border-t border-[rgb(var(--color-border))] pt-8">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold text-[rgb(var(--color-fg))]">
                ¿Te gustó este artículo?
              </h3>
              <p className="mb-6 text-[rgb(var(--color-muted))]">
                Descubre cómo Synko puede ayudarte a implementar estas
                soluciones en tu negocio.
              </p>
              <Link
                href="/contacto"
                className="inline-block rounded-lg bg-[rgb(var(--color-primary))] px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                Hablar con un experto
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
