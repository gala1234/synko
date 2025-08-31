import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Función helper para generar URLs de OG images
export function generateOGImageUrl(params: {
  title?: string;
  description?: string;
  type?: "default" | "blog" | "product" | "case";
}): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const searchParams = new URLSearchParams();

  if (params.title) searchParams.set("title", params.title);
  if (params.description) searchParams.set("description", params.description);
  if (params.type) searchParams.set("type", params.type);

  return `${baseUrl}/api/og?${searchParams.toString()}`;
}
