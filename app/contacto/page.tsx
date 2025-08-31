import { getProducts } from "@/lib/products";
import ContactPageClient from "./ContactClient";

export default function ContactPage() {
  const products = getProducts();
  return <ContactPageClient products={products} />;
}
