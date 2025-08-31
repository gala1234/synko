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
      {/* Hero Section */}
      <Section
        padding="lg"
        className="bg-gradient-to-b from-[rgb(var(--color-bg-subtle))] to-[rgb(var(--color-bg))]"
      >
        <Container size="md">
          <div className="text-center">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-[rgb(var(--color-primary))] transition-colors hover:underline"
            >
              ← Volver al blog
            </Link>

            <div className="mb-8">
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {data.tags?.map((tag: string) => (
                  <Badge key={tag} variant="accent" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mb-6 text-sm font-medium tracking-wider text-[rgb(var(--color-muted))] uppercase">
                {formatDate(data.date)}
              </p>
            </div>

            <h1 className="font-display mb-8 text-4xl leading-tight font-bold text-[rgb(var(--color-fg))] md:text-6xl lg:text-7xl">
              {data.title}
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[rgb(var(--color-muted))] md:text-2xl">
              {data.summary}
            </p>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section padding="lg">
        <Container size="md">
          <article className="max-w-none">
            <div className="blog-content">
              {/* @ts-ignore */}
              <MDXRemote source={content} />
            </div>
          </article>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-accent))] p-8 md:p-12">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative text-center text-white">
                <h3 className="font-display mb-4 text-2xl font-bold md:text-3xl">
                  ¿Te gustó este artículo?
                </h3>
                <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 md:text-xl">
                  Descubre cómo Synko puede ayudarte a implementar estas
                  soluciones en tu negocio y transformar tu operación.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-[rgb(var(--color-primary))] shadow-lg transition-all hover:scale-105 hover:bg-white/90"
                  >
                    Hablar con un experto
                  </Link>
                  <Link
                    href="/casos"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Ver más casos de éxito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
