import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  content: string;
}

const casesDirectory = path.join(process.cwd(), "content/cases");

export function getAllCaseStudies(): CaseStudy[] {
  const fileNames = fs.readdirSync(casesDirectory);
  const allCases = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => {
      const slug = name.replace(/\.mdx$/, "");
      const fullPath = path.join(casesDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        client: data.client,
        sector: data.sector,
        content,
      };
    });

  return allCases;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(casesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      client: data.client,
      sector: data.sector,
      content,
    };
  } catch (error) {
    return null;
  }
}
