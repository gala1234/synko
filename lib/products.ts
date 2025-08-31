import fs from "fs";
import path from "path";

export type Product = {
  sku: string;
  slug: string;
  title: string;
  tagline: string;
  priceHint: string;
  addons: string[];
};

export type ProductDetailed = {
  id: string;
  sku: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  price: string;
  deliveryTime: string;
};

export function getProducts(): Product[] {
  const p = path.join(process.cwd(), "content/products.json");
  return JSON.parse(fs.readFileSync(p, "utf-8")) as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}
