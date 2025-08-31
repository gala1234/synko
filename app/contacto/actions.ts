"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Escribe tu nombre"),
  email: z.string().email("Email no válido"),
  websiteOrIg: z.string().optional().default(""),
  sector: z
    .enum(["ecommerce", "clinica", "gym", "restauracion", "otros"], { invalid_type_error: "Selecciona un sector" })
    .or(z.string().min(1, "Selecciona un sector")),
  budget: z.enum(["<1500", "1500-3000", "3000-6000", "6000+"], { invalid_type_error: "Selecciona presupuesto" }),
  message: z.string().min(10, "Cuéntame un poco más"),
  // honeypot
  company: z.string().max(0, "Campo inválido"),
  // timing token (anti-bot básico)
  t: z.string().optional()
});

type ContactInput = z.infer<typeof ContactSchema>;

export async function submitContact(prevState: any, formData: FormData) {
  const payload: ContactInput = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    websiteOrIg: String(formData.get("websiteOrIg") || ""),
    sector: String(formData.get("sector") || ""),
    budget: String(formData.get("budget") || "") as any,
    message: String(formData.get("message") || ""),
    company: String(formData.get("company") || ""),
    t: String(formData.get("t") || "")
  };

  const start = Number(formData.get("ts") || "0");
  const elapsed = Date.now() - start;
  // Simple anti-spam: si envía en < 1200ms, consideramos bot
  if (elapsed < 1200) {
    return { ok: false, error: "Envio demasiado rápido. Inténtalo de nuevo en unos segundos." };
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return { ok: false, errors: fieldErrors, error: "Revisa los campos marcados en rojo." };
  }

  try {
    const res = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Envía payload + metadata útil
      body: JSON.stringify({
        ...parsed.data,
        _meta: {
          site: process.env.NEXT_PUBLIC_SITE_URL,
          ts: new Date().toISOString(),
          ua: "synko-web",
        },
      }),
      // Pequeño timeout
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Webhook error ${res.status}`);
    }

    return { ok: true };
  } catch (e: any) {
    return {
      ok: false,
      error:
        "No se pudo enviar el formulario en este momento. Si persiste, escríbenos a hola@synko.dev.",
    };
  }
}