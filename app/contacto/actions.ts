"use server";

import { z } from "zod";
import { getProducts } from "@/lib/products";

const products = getProducts();
const productSlugs = products.map((p) => p.slug);

const ContactSchema = z.object({
  name: z.string().min(2, "Escribe tu nombre"),
  email: z.string().email("Email no válido"),
  websiteOrIg: z.string().optional().default(""),
  product: z.enum(productSlugs as [string, ...string[]], {
    message: "Selecciona un producto",
  }),
  addons: z.array(z.string()).optional().default([]),
  platform: z.enum(["shopify", "woocommerce", "custom", "none"]).or(z.string()),
  channels: z
    .array(
      z.enum(["instagram", "whatsapp", "web", "email", "otros"]).or(z.string())
    )
    .min(1, "Selecciona al menos un canal"),
  ordersPerDay: z.coerce.number().min(0).optional(),
  avgOrderValue: z.coerce.number().min(0).optional(),
  budgetByProduct: z
    .enum(["<1500", "1500-3000", "3000-6000", "6000+", "mensual-350-700"])
    .or(z.string()),
  urgency: z.enum(["esta-semana", "este-mes", "proximo-mes", "sin-fecha"]),
  message: z.string().min(10, "Cuéntame un poco más"),
  gdpr: z.literal("on").refine((val) => val === "on", {
    message: "Debes aceptar la política de privacidad",
  }),
  utm_source: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  company: z.string().max(0, "Campo inválido"),
  t: z.string().optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export async function submitContact(_prev: any, formData: FormData) {
  const payload: any = {
    name: formData.get("name"),
    email: formData.get("email"),
    websiteOrIg: formData.get("websiteOrIg"),
    product: formData.get("product"),
    addons: formData.getAll("addons"),
    platform: formData.get("platform"),
    channels: formData.getAll("channels"),
    ordersPerDay: formData.get("ordersPerDay"),
    avgOrderValue: formData.get("avgOrderValue"),
    budgetByProduct: formData.get("budgetByProduct"),
    urgency: formData.get("urgency"),
    message: formData.get("message"),
    gdpr: formData.get("gdpr"),
    utm_source: formData.get("utm_source"),
    utm_campaign: formData.get("utm_campaign"),
    utm_medium: formData.get("utm_medium"),
    company: formData.get("company"),
    t: formData.get("t"),
  };

  // Anti-spam por tiempo
  const start = Number(formData.get("ts") || "0");
  if (Date.now() - start < 1200) {
    return {
      ok: false,
      error: "Envío demasiado rápido. Inténtalo de nuevo.",
    };
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
      error: "Revisa los campos marcados.",
    };
  }

  const prod = products.find((p) => p.slug === parsed.data.product)!;

  // Estimación simple de GMV mensual potencial si hay datos
  let roiHint: null | { estMonthlyGMV?: number } = null;
  if (parsed.data.ordersPerDay && parsed.data.avgOrderValue) {
    roiHint = {
      estMonthlyGMV: parsed.data.ordersPerDay * parsed.data.avgOrderValue * 30,
    };
  }

  try {
    const res = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        _product: prod,
        _roiHint: roiHint,
        _meta: {
          site: process.env.NEXT_PUBLIC_SITE_URL,
          ts: new Date().toISOString(),
          ua: "synko-web",
        },
      }),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Webhook error ${res.status}`);
    return { ok: true, product: prod.slug };
  } catch {
    return {
      ok: false,
      error: "No se pudo enviar ahora. Escríbenos a hola@synko.dev.",
    };
  }
}
