'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { submitContact } from './actions';
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" className="w-full" aria-disabled={pending} disabled={pending}>
      {pending ? "Enviando..." : "Enviar mensaje"}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContact, { ok: false });
  const [timestamp, setTimestamp] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    setTimestamp(Date.now());
  }, []);

  useEffect(() => {
    if (state?.ok === false) {
      setFeedback(state.error || 'Error al enviar el formulario');
    } else if (state?.ok === true && timestamp > 0) {
      setFeedback('¡Mensaje enviado correctamente! Te contactaremos pronto.');
    }
  }, [state, timestamp]);

  const handleSubmit = (payload: FormData) => {
    payload.append('ts', timestamp.toString());
    formAction(payload);
  };

  return (
    <main>
      <Section className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hablemos de tu proyecto
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cuéntanos qué necesitas y te ayudaremos a automatizar y optimizar tu negocio con IA.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                
                {/* Feedback region for screen readers */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                  {state?.error && `Error: ${state.error}`}
                  {state?.ok && "Mensaje enviado correctamente"}
                </div>

                {/* Success message */}
                {state?.ok && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">¡Mensaje enviado correctamente!</p>
                    <p className="text-green-700 text-sm mt-1">Te responderemos en las próximas 24-48 horas.</p>
                  </div>
                )}

                {/* Error message */}
                {state?.error && !state?.ok && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">{state.error}</p>
                  </div>
                )}

                <form action={formAction} className="space-y-6">
                  <input type="hidden" name="ts" value={timestamp} />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-describedby={state?.errors?.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        state?.errors?.name ? 'border-red-500 bg-red-50' : 'border-border'
                      }`}
                      placeholder="Tu nombre"
                    />
                    {state?.errors?.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-describedby={state?.errors?.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        state?.errors?.email ? 'border-red-500 bg-red-50' : 'border-border'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {state?.errors?.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="websiteOrIg" className="block text-sm font-medium mb-2">
                      Web o Instagram
                    </label>
                    <input
                      type="text"
                      id="websiteOrIg"
                      name="websiteOrIg"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://tuweb.com o @tuinstagram"
                    />
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium mb-2">
                      Sector *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      required
                      aria-describedby={state?.errors?.sector ? "sector-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        state?.errors?.sector ? 'border-red-500 bg-red-50' : 'border-border'
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
                      <p id="sector-error" className="mt-1 text-sm text-red-600" role="alert">
                        {state.errors.sector[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Presupuesto aproximado *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      aria-describedby={state?.errors?.budget ? "budget-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        state?.errors?.budget ? 'border-red-500 bg-red-50' : 'border-border'
                      }`}
                    >
                      <option value="">Selecciona tu presupuesto</option>
                      <option value="<1500">Menos de 1.500€</option>
                      <option value="1500-3000">1.500€ - 3.000€</option>
                      <option value="3000-6000">3.000€ - 6.000€</option>
                      <option value="6000+">Más de 6.000€</option>
                    </select>
                    {state?.errors?.budget && (
                      <p id="budget-error" className="mt-1 text-sm text-red-600" role="alert">
                        {state.errors.budget[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-describedby={state?.errors?.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
                        state?.errors?.message ? 'border-red-500 bg-red-50' : 'border-border'
                      }`}
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y necesidades específicas..."
                    />
                    {state?.errors?.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
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

                  <SubmitButton />
                </form>
              </Card>

              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                         <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                         </svg>
                       </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hola@synko.dev</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                         <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <h3 className="text-lg font-semibold mb-4">¿Qué incluye una consulta?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                         <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                      <span className="text-sm">Análisis de tu situación actual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Propuesta personalizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Estimación de tiempos y costes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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