import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Dashboards",
  description: "Panel de control con dashboards embebidos para clientes de Synko.",
};

export default function PanelStub() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-fg mb-6">
          Panel de Dashboards
        </h1>
        <p className="text-lg text-muted mb-8">
          Próximamente: dashboards embebidos para monitorear tus automatizaciones
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Dashboard Cards Stubs */}
        <div className="p-6 border border-dashed border-[rgb(var(--color-border))] rounded-lg">
          <h3 className="font-semibold text-fg mb-2">Analytics de Conversión</h3>
          <p className="text-sm text-muted">Métricas de rendimiento de tus flujos automatizados</p>
        </div>
        
        <div className="p-6 border border-dashed border-[rgb(var(--color-border))] rounded-lg">
          <h3 className="font-semibold text-fg mb-2">Estado de Integraciones</h3>
          <p className="text-sm text-muted">Monitoreo en tiempo real de tus conexiones</p>
        </div>
        
        <div className="p-6 border border-dashed border-[rgb(var(--color-border))] rounded-lg">
          <h3 className="font-semibold text-fg mb-2">Reportes Personalizados</h3>
          <p className="text-sm text-muted">Dashboards adaptados a tu negocio</p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--color-primary))] text-white rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Funcionalidad en desarrollo
        </div>
      </div>
    </div>
  );
}