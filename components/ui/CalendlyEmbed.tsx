"use client";

import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  height?: number;
  className?: string;
}

export function CalendlyEmbed({
  url = "https://calendly.com/synko-team/consultation",
  height = 600,
  className = "",
}: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showStub, setShowStub] = useState(true);

  useEffect(() => {
    // TODO: Cargar el script de Calendly cuando esté configurado
    // const script = document.createElement('script');
    // script.src = 'https://assets.calendly.com/assets/external/widget.js';
    // script.async = true;
    // document.body.appendChild(script);

    // Simular carga para el stub
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showStub) {
    return (
      <div
        className={`rounded-lg border border-dashed border-[rgb(var(--color-border))] p-8 text-center ${className}`}
        style={{ height }}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary))]">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-fg mb-2 font-semibold">
              Integración con Calendly
            </h3>
            <p className="text-muted mb-4 text-sm">
              Aquí se mostrará el widget de reserva de citas
            </p>

            <div className="text-muted space-y-2 text-xs">
              <p>• Reserva automática de consultas</p>
              <p>• Sincronización con Google Calendar</p>
              <p>• Recordatorios automáticos</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowStub(false)}
            className="rounded-lg bg-[rgb(var(--color-primary))] px-4 py-2 text-sm text-white transition-colors hover:bg-[rgb(var(--color-primary-600))]"
          >
            Simular carga
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg bg-[rgb(var(--color-border))] p-4 ${className}`}
      style={{ height }}
    >
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[rgb(var(--color-primary))] border-t-transparent"></div>
        <p className="text-muted text-sm">Cargando Calendly...</p>
        <p className="text-muted mt-2 text-xs">URL: {url}</p>
      </div>
    </div>
  );
}

// Hook para usar Calendly de forma programática
export function useCalendly() {
  const openPopup = (url: string) => {
    // TODO: Implementar apertura de popup de Calendly
    console.log(`Abrir popup de Calendly: ${url}`);
    alert("Funcionalidad de Calendly en desarrollo");
  };

  const prefillData = (data: Record<string, string>) => {
    // TODO: Implementar prefill de datos
    console.log("Datos para prefill:", data);
  };

  return {
    openPopup,
    prefillData,
    isAvailable: false, // TODO: Detectar si Calendly está cargado
  };
}
