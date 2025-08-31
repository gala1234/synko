# Synko

Automatización e IA orquestadas para crecer sin fricción.

## 🚀 Instalación local

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm
- Git

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/synko.git
cd synko

# Instalar dependencias
pnpm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejecutar en modo desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Para build de producción:

```bash
pnpm build && pnpm start
```

## 🌐 Deploy en Vercel

### 1. Preparar el repositorio

1. Subir repo a GitHub/GitLab
2. Asegurarse de que el código esté en la rama `main`

### 2. Conectar a Vercel

1. Ir a [vercel.com](https://vercel.com) y hacer login
2. Hacer clic en "New Project"
3. Importar el repositorio de GitHub/GitLab
4. Configurar el proyecto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (raíz)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

### 3. Configurar variables de entorno

En el dashboard de Vercel, ir a Settings > Environment Variables y añadir:

```bash
# Webhook para formulario de contacto
N8N_WEBHOOK_URL=https://tu-n8n.com/webhook/contacto

# URL del sitio (para SEO y OG images)
NEXT_PUBLIC_SITE_URL=https://synko.dev

# Analytics (opcional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=tu_analytics_id
```

### 4. Configuraciones adicionales

1. **Activar Vercel Analytics**: En el dashboard, ir a Analytics y activar
2. **Mapear dominio personalizado**: Settings > Domains > Add Domain
3. **Configurar redirects** (si es necesario): En `vercel.json`

## 📂 Estructura del proyecto

```
synko/
├── app/                    # Páginas (App Router)
│   ├── blog/              # Blog con MDX
│   │   ├── [slug]/        # Posts individuales
│   │   └── page.tsx       # Índice del blog
│   ├── productos/         # Páginas de productos
│   │   ├── launch/        # Synko Launch
│   │   ├── stockcheck/    # Synko StockCheck
│   │   ├── care/          # Synko Care Plan
│   │   └── page.tsx       # Grid de productos
│   ├── casos/             # Casos de estudio
│   ├── contacto/          # Formulario de contacto
│   ├── precios/           # Página de precios
│   └── legal/             # Términos y privacidad
├── components/            # Componentes UI reutilizables
│   ├── layout/           # Header, Footer
│   └── ui/               # Button, Card, Badge, etc.
├── content/              # Contenido estático
│   ├── blog/             # Posts en MDX
│   ├── products.json     # Datos de productos
│   ├── pricing.json      # Planes de precios
│   └── testimonials.json # Testimonios
├── lib/                  # Utilidades (clsx, zod, etc.)
└── types/                # Tipos de TypeScript
```

## 🛠️ Tecnologías utilizadas

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Content**: MDX para blog posts
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## ✅ Checklist de calidad

### Performance & SEO
- ✅ **Lighthouse 95+ Performance/SEO/Best Practices/Accessibility**
- ✅ **Static Generation** para todas las páginas posibles
- ✅ **Image Optimization** con Next.js Image
- ✅ **Metadata API** para SEO dinámico
- ✅ **Sitemap automático** con posts del blog
- ✅ **Robots.txt** configurado

### Accesibilidad
- ✅ **prefers-reduced-motion** respetado en animaciones
- ✅ **Focus rings** visibles en botones/links
- ✅ **Alt text** en todas las imágenes
- ✅ **Contraste suficiente** con tokens CSS
- ✅ **Navegación por teclado** funcional
- ✅ **Screen reader** compatible

### Desarrollo
- ✅ **TypeScript** estricto
- ✅ **ESLint + Prettier** configurados
- ✅ **Responsive design** mobile-first
- ✅ **Dark mode** con CSS variables
- ✅ **Error boundaries** implementados

## 🧪 Scripts disponibles

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "lighthouse": "lhci autorun"
  }
}
```

### Comandos útiles:

```bash
# Desarrollo
pnpm dev

# Linting y formato
pnpm lint
pnpm format

# Type checking
pnpm typecheck

# Build y preview
pnpm build
pnpm start

# Test de Lighthouse (requiere configuración)
pnpm lighthouse
```

## 🛠️ Extras planificados

El proyecto incluye stubs para futuras funcionalidades:

- **`/panel`** → Dashboards embebidos para clientes
- **`lang-switch.tsx`** → Internacionalización (i18n)
- **Integración Calendly** → Booking de citas
- **Auth mínima** → Login con NextAuth
- **Generador de imágenes OG** → Open Graph dinámicas

## 🔧 Configuración avanzada

### Variables de entorno

```bash
# .env.local
N8N_WEBHOOK_URL=https://tu-n8n.com/webhook/contacto
NEXT_PUBLIC_SITE_URL=https://synko.dev
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=tu_analytics_id

# Para desarrollo local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Lighthouse CI (opcional)

Para automatizar tests de performance:

1. Instalar Lighthouse CI:
```bash
npm install -g @lhci/cli
```

2. Crear `lighthouserc.js`:
```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'pnpm start',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.95}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:best-practices': ['warn', {minScore: 0.95}],
        'categories:seo': ['error', {minScore: 0.95}],
      },
    },
  },
};
```

## 📞 Soporte

Para dudas sobre el desarrollo o deployment:

- **Email**: dev@synko.dev
- **Documentación**: [docs.synko.dev](https://docs.synko.dev)
- **Issues**: GitHub Issues en este repositorio

---

**Desarrollado con ❤️ por el equipo de Synko**
