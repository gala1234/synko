"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { submitContact } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

function SubmitButton({ isSuccess }: { isSuccess: boolean }) {
  const { pending } = useFormStatus();
  const isDisabled = pending || isSuccess;

  return (
    <Button
      type="submit"
      variant="primary"
      className="w-full focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:outline-none"
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {pending
        ? "Enviando..."
        : isSuccess
          ? "Mensaje enviado"
          : "Enviar mensaje"}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContact, { ok: false });
  const [timestamp, setTimestamp] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  useEffect(() => {
    if (state?.ok === false) {
      setFeedback(state.error || "Error al enviar el formulario");
    } else if (state?.ok === true && timestamp > 0) {
      setFeedback("¡Mensaje enviado correctamente! Te contactaremos pronto.");
    }
  }, [state, timestamp]);

  const handleSubmit = (payload: FormData) => {
    payload.append("ts", timestamp.toString());
    formAction(payload);
  };

  return (
    <main>
      <Section className="py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Hablemos de tu proyecto
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                Cuéntanos qué necesitas y te ayudaremos a automatizar y
                optimizar tu negocio con IA.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="p-8">
                <h2 className="mb-6 text-2xl font-semibold">
                  Envíanos un mensaje
                </h2>

                {/* Feedback region for screen readers */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                  {state?.error && `Error: ${state.error}`}
                  {state?.ok && "Mensaje enviado correctamente"}
                </div>

                {/* Success message */}
                {state?.ok && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="font-medium text-green-800">
                      ¡Mensaje enviado correctamente!
                    </p>
                    <p className="mt-1 text-sm text-green-700">
                      Te responderemos en las próximas 24-48 horas.
                    </p>
                    <div className="mt-4">
                      <p className="mb-2 text-sm text-green-700">
                        ¿Necesitas una respuesta más rápida?
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-300 text-green-700 hover:bg-green-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        onClick={() =>
                          window.open(
                            "mailto:hola@synko.dev?subject=Consulta urgente",
                            "_blank"
                          )
                        }
                      >
                        Contacto directo
                      </Button>
                    </div>
                  </div>
                )}

                {/* Error message */}
                {state?.error && !state?.ok && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="font-medium text-red-800">{state.error}</p>
                  </div>
                )}

                <form action={formAction} className="space-y-6">
                  <input type="hidden" name="ts" value={timestamp} />

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={state?.ok}
                      aria-describedby={
                        state?.errors?.name ? "name-error" : undefined
                      }
                      aria-errormessage={
                        state?.errors?.name ? "name-error" : undefined
                      }
                      className={`w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                        state?.errors?.name
                          ? "border-red-500 bg-red-50"
                          : "border-border"
                      }`}
                      placeholder="Tu nombre"
                    />
                    {state?.errors?.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={state?.ok}
                      aria-describedby={
                        state?.errors?.email ? "email-error" : undefined
                      }
                      aria-errormessage={
                        state?.errors?.email ? "email-error" : undefined
                      }
                      className={`w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                        state?.errors?.email
                          ? "border-red-500 bg-red-50"
                          : "border-border"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {state?.errors?.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="websiteOrIg"
                      className="mb-2 block text-sm font-medium"
                    >
                      Web o Instagram
                    </label>
                    <input
                      type="text"
                      id="websiteOrIg"
                      name="websiteOrIg"
                      disabled={state?.ok}
                      className="border-border w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="https://tuweb.com o @tuinstagram"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sector"
                      className="mb-2 block text-sm font-medium"
                    >
                      Sector *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      disabled={state?.ok}
                      aria-describedby={
                        state?.errors?.sector ? "sector-error" : undefined
                      }
                      aria-errormessage={
                        state?.errors?.sector ? "sector-error" : undefined
                      }
                      className={`w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                        state?.errors?.sector
                          ? "border-red-500 bg-red-50"
                          : "border-border"
                      }`}
                    >
                      <option value="">Selecciona tu sector</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="clinica">Clínica/Salud</option>
                      <option value="gym">Gimnasio/Fitness</option>
                      <option value="restauracion">Restauración</option>
                      <option value="otros">Otros</option>
                    </select>
                    {state?.errors?.sector && (
                      <p
                        id="sector-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {state.errors.sector[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium"
                    >
                      Presupuesto aproximado *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      disabled={state?.ok}
                      aria-describedby={
                        state?.errors?.budget ? "budget-error" : undefined
                      }
                      aria-errormessage={
                        state?.errors?.budget ? "budget-error" : undefined
                      }
                      className={`w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                        state?.errors?.budget
                          ? "border-red-500 bg-red-50"
                          : "border-border"
                      }`}
                    >
                      <option value="">Selecciona tu presupuesto</option>
                      <option value="<1500">Menos de 1.500€</option>
                      <option value="1500-3000">1.500€ - 3.000€</option>
                      <option value="3000-6000">3.000€ - 6.000€</option>
                      <option value="6000+">Más de 6.000€</option>
                    </select>
                    {state?.errors?.budget && (
                      <p
                        id="budget-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {state.errors.budget[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={state?.ok}
                      aria-describedby={
                        state?.errors?.message ? "message-error" : undefined
                      }
                      aria-errormessage={
                        state?.errors?.message ? "message-error" : undefined
                      }
                      className={`w-full resize-none rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
                        state?.errors?.message
                          ? "border-red-500 bg-red-50"
                          : "border-border"
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y necesidades específicas..."
                    />
                    {state?.errors?.message && (
                      <p
                        id="message-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {state.errors.message[0]}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company (leave empty)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <SubmitButton isSuccess={state?.ok || false} />
                </form>
              </Card>

              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                        <svg
                          className="text-primary h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hola@synko.dev</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                        <svg
                          className="text-primary h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Tiempo de respuesta</p>
                        <p className="text-muted-foreground">24-48 horas</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    ¿Qué incluye una consulta?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-accent mt-0.5 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">
                        Análisis de tu situación actual
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-accent mt-0.5 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Propuesta personalizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-accent mt-0.5 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">
                        Estimación de tiempos y costes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-accent mt-0.5 flex h-5 w-5 items-center justify-center rounded-full">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Hoja de ruta detallada</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
