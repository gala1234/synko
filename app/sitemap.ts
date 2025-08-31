import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const baseUrl = "https://synko.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  // Get blog posts
  const blogDir = path.join(process.cwd(), "content/blog");
  const blogFiles = fs.readdirSync(blogDir);
  const blogPosts = blogFiles
    .filter(file => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data } = matter(source);
      return {
        url: `${baseUrl}/blog/${file.replace(/\.mdx$/, "")}`,
        lastModified: new Date(data.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/productos/launch`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/productos/stockcheck`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/productos/care`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/casos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
