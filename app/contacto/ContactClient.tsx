import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useEffect, useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { submitContact } from "./actions";
import type {  Product } from "@/lib/products";

type Props = { products: Product[] };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" disabled={pending} aria-disabled={pending}>
      {pending ? "Enviando..." : "Solicitar este producto"}
    </Button>
  );
}

export default function ContactPageClient({ products }: Props) {
  const [state, action] = useFormState(submitContact as any, { ok:false } as any);
  const [selected, setSelected] = useState<string>("launch");
  const product = useMemo(() => products.find(p => p.slug === selected), [products, selected]);

  // Anti-spam (timestamp) + UTM
  const ts = Date.now();
  const [utm, setUtm] = useState({ source:"", campaign:"", medium:"" });
  useEffect(() => {
    const url = new URL(window.location.href);
    setUtm({
      source: url.searchParams.get("utm_source") || "",
      campaign: url.searchParams.get("utm_campaign") || "",
      medium: url.searchParams.get("utm_medium") || ""
    });
    const qp = url.searchParams.get("product");
    if (qp && products.some(p => p.slug === qp)) setSelected(qp);
  }, [products]);

  const eta = useMemo(() => {
    if (selected === "launch") return "≈ 2 semanas";
    if (selected === "scale") return "≈ 4–6 semanas";
    if (selected === "care") return "mensual (continuo)";
    return "1–2 semanas";
  }, [selected]);

  return (
    <Section className="py-[var(--space-12)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-5">
        {/* Formulario */}
        <div className="md:col-span-3">
          <h1 className="font-display text-3xl md:text-4xl mb-2">Solicita tu producto Synko</h1>
          <p className="text-muted mb-6">Selecciona el producto, añade add-ons y cuéntanos tu caso.</p>

          <Card className="p-6 md:p-8">
            <div aria-live="polite" className="mb-4 min-h-6 text-sm">
              {state?.ok && <p className="text-[var(--color-accent)]">¡Gracias! Te contactamos en &lt;24h laborables.</p>}
              {!state?.ok && state?.error && <p className="text-[var(--color-highlight)]">{state.error}</p>}
            </div>

            <form action={action} noValidate className="grid grid-cols-1 gap-4">
              {/* Hidden (anti-spam/utm) */}
              <input type="hidden" name="ts" value={ts} />
              <input type="hidden" name="utm_source" value={utm.source} />
              <input type="hidden" name="utm_campaign" value={utm.campaign} />
              <input type="hidden" name="utm_medium" value={utm.medium} />
              <input className="hidden" type="text" name="company" tabIndex={-1} autoComplete="off" />

              {/* Contacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" />
                  {state?.errors?.name && <p className="mt-1 text-xs text-[var(--color-highlight)]">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" />
                  {state?.errors?.email && <p className="mt-1 text-xs text-[var(--color-highlight)]">{state.errors.email[0]}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="websiteOrIg" className="block text-sm font-medium">Web o Instagram</label>
                <input id="websiteOrIg" name="websiteOrIg" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" placeholder="https:// o @tuusuario" />
              </div>

              {/* Producto */}
              <div>
                <label htmlFor="product" className="block text-sm font-medium">Producto Synko</label>
                <select id="product" name="product" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                  {products.map(p => <option key={p.slug} value={p.slug}>{p.title} — {p.tagline}</option>)}
                </select>
                {product?.priceHint && <p className="mt-1 text-xs text-[var(--color-muted)]">Precio orientativo: <span className="text-[var(--color-highlight)] font-medium">{product.priceHint}</span></p>}
                {state?.errors?.product && <p className="mt-1 text-xs text-[var(--color-highlight)]">{state.errors.product[0]}</p>}
              </div>

              {/* Add-ons dinámicos */}
              {product?.addons?.length ? (
                <div>
                  <p className="text-sm font-medium mb-1">Add-ons recomendados</p>
                  <div className="flex flex-wrap gap-3">
                    {product.addons.map(a => (
                      <label key={a} className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2">
                        <input type="checkbox" name="addons" value={a} />
                        <span className="text-sm">{a}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Stack / Canales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="platform" className="block text-sm font-medium">Plataforma principal</label>
                  <select id="platform" name="platform" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2">
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="custom">Custom</option>
                    <option value="none">Ninguna</option>
                  </select>
                </div>
                <div>
                  <p className="text-sm font-medium">Canales</p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {["instagram","whatsapp","web","email","otros"].map(c => (
                      <label key={c} className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2">
                        <input type="checkbox" name="channels" value={c} />
                        <span className="text-sm capitalize">{c}</span>
                      </label>
                    ))}
                  </div>
                  {state?.errors?.channels && <p className="mt-1 text-xs text-[var(--color-highlight)]">{state.errors.channels[0]}</p>}
                </div>
              </div>

              {/* Métricas opcionales para ROI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ordersPerDay" className="block text-sm font-medium">Pedidos/día (aprox.)</label>
                  <input id="ordersPerDay" name="ordersPerDay" type="number" min={0} className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="avgOrderValue" className="block text-sm font-medium">Ticket medio (€)</label>
                  <input id="avgOrderValue" name="avgOrderValue" type="number" min={0} step="0.01" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" />
                </div>
              </div>

              {/* Presupuesto y urgencia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budgetByProduct" className="block text-sm font-medium">Presupuesto</label>
                  <select id="budgetByProduct" name="budgetByProduct" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" defaultValue="">
                    <option value="" disabled>Selecciona…</option>
                    <option value="<1500">&lt; 1.500 €</option>
                    <option value="1500-3000">1.500–3.000 €</option>
                    <option value="3000-6000">3.000–6.000 €</option>
                    <option value="6000+">6.000 €+</option>
                    <option value="mensual-350-700">Mensual 350–700 € (Care)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium">Urgencia</label>
                  <select id="urgency" name="urgency" className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" defaultValue="este-mes">
                    <option value="esta-semana">Esta semana</option>
                    <option value="este-mes">Este mes</option>
                    <option value="proximo-mes">Próximo mes</option>
                    <option value="sin-fecha">Sin fecha</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-bg px-3 py-2" placeholder="Objetivos, contexto y lo imprescindible para arrancar." />
                {state?.errors?.message && <p className="mt-1 text-xs text-[var(--color-highlight)]">{state.errors.message[0]}</p>}
              </div>

              {/* GDPR */}
              <div className="flex items-start gap-3">
                <input id="gdpr" name="gdpr" required type="checkbox" className="mt-1" />
                <label htmlFor="gdpr" className="text-sm">
                  Acepto el tratamiento de mis datos conforme a la{" "}
                  <a className="underline text-[var(--color-primary)]" href="/legal/privacidad" target="_blank" rel="noreferrer">Política de privacidad</a>.
                </label>
              </div>

              <div className="mt-2"><SubmitButton /></div>
            </form>
          </Card>
        </div>

        {/* Resumen lateral */}
        <aside className="md:col-span-2">
          <Card className="p-6 md:p-8 sticky top-24">
            <h2 className="font-display text-xl mb-2">Tu selección</h2>
            <p className="text-sm text-muted mb-4">
              Producto: <span className="font-medium">{product?.title}</span><br />
              <span className="text-[var(--color-highlight)]">{product?.priceHint}</span>
            </p>
            <p className="text-sm">Tiempo estimado:</p>
            <ul className="text-sm text-muted list-disc pl-4"><li>{eta}</li></ul>
            <div className="mt-4 text-xs text-muted">Tras recibir tu solicitud, te enviaremos una propuesta con alcance y agenda de arranque.</div>
          </Card>
        </aside>
      </div>
    </Section>
  );
}