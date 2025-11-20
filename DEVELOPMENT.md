# Instrucciones de Desarrollo - La Marshalada

## Estructura del Proyecto

Este es un proyecto Next.js 16 con:
- **TypeScript** - Tipado estático en todo el proyecto
- **Tailwind CSS** - Estilos utilitarios
- **Prismic CMS** - Integración con Prismic para contenido
- **PWA Manual** - Service Worker manual para funcionalidad offline
- **React 19** - Última versión de React

## Arquitectura

```
src/
├── app/              # App Router de Next.js
│   ├── layout.tsx    # Layout principal con PWA config
│   ├── page.tsx      # Página de inicio
│   └── globals.css   # Estilos globales
├── components/       # Componentes reutilizables
│   ├── Header.tsx    # Encabezado
│   ├── About.tsx     # Sección sobre Marshall
│   ├── TwitchLive.tsx # Integración Twitch
│   ├── BettingSites.tsx # Casas de apuestas
│   └── Footer.tsx    # Pie de página
└── lib/              # Utilidades y clientes
    └── prismic.ts    # Cliente Prismic
```

## Convenciones de Código

### Componentes
- Usar `"use client"` para componentes interactivos
- Nombrar archivos con PascalCase
- Usar TypeScript para type safety
- Props tipadas con interfaces

### Estilos
- Usar clases de Tailwind CSS
- Responsive: `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Colores principales: slate, red, orange (ver Tailwind config)

### Archivos
- TypeScript para lógica (.ts, .tsx)
- CSS modules o Tailwind para estilos
- Importar usando alias `@/` (src/)

## Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```

Accede a `http://localhost:3000`

### Compilar para producción
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Variables de Entorno

```env
# .env.local
NEXT_PUBLIC_PRISMIC_REPOSITORY=lamarshalada
PRISMIC_ACCESS_TOKEN=tu_token
```

## Integración Prismic

Para añadir contenido desde Prismic:

```typescript
import { createPrismicClient } from "@/lib/prismic";

const client = createPrismicClient();
const documents = await client.getAllByType("page");
```

## Componentes Principales

### Header
- Logo y descripción
- Enlaces a redes sociales
- Menú responsivo

### About
- Información sobre Marshall
- Colaboradores (placeholder)

### TwitchLive
- Estado de Twitch
- Integrable con API de Twitch

### BettingSites
- Filtro dinámico por país
- Casas de apuestas con bonos

### Footer
- Enlaces legales
- Información de juego responsable

## PWA (Progressive Web App)

### Service Worker
- Ubicado en `public/sw.js`
- Cache-first strategy para assets
- Network-first para datos

### Manifest
- Ubicado en `public/manifest.json`
- Configurado para iOS y Android
- Shortcuts para acceso rápido

### Install
- iOS: Safari → Compartir → Añadir a pantalla de inicio
- Android: Chrome → Menú → Instalar app

## Testing

Para agregar tests:

```bash
npm install --save-dev jest @testing-library/react
```

Crear archivos `.test.tsx` en la misma carpeta que los componentes.

## Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Otros proveedores
- Netlify, Railway, Render, etc.
- Asegurar Node.js 18.17+
- Build command: `npm run build`
- Start command: `npm start`

## Recursos útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Prismic Docs](https://prismic.io/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## Notas Importantes

1. **Responsabilidad del Juego**: Incluir siempre advertencias de juego responsable
2. **SEO**: Mantener metadatos actualizados en layout.tsx
3. **Imágenes**: Usar `<Image>` de Next.js para optimización
4. **Performance**: Usar Turbopack en desarrollo para mayor velocidad

## Próximas Mejoras Sugeridas

- [ ] Integrar API de Twitch para estado de directos en tiempo real
- [ ] Agregar sección de blog con Prismic
- [ ] Sistema de notificaciones para directos
- [ ] Dark mode toggle
- [ ] Datos analíticos (GA4)
- [ ] Tests automatizados
- [ ] Generación de iconos PWA dinámicos
