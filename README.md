# La Marshalada - Next.js PWA

Una aplicación web progresiva (PWA) moderna construida con Next.js para La Marshalada - plataforma de apuestas deportivas, análisis de partidos y entretenimiento en vivo.

## 🚀 Características

- ✅ **Next.js 15+** - React framework moderno
- ✅ **TypeScript** - Tipado estático
- ✅ **Tailwind CSS** - Estilos utilitarios
- ✅ **PWA (Progressive Web App)** - Funciona offline
- ✅ **Prismic CMS** - Gestión de contenido integrada
- ✅ **Responsive Design** - Optimizado para móvil
- ✅ **SEO Optimizado** - Metadatos y Open Graph
- ✅ **Service Workers** - Soporte offline
- ✅ **Image Optimization** - Imágenes optimizadas con Next.js

## 📋 Requisitos

- Node.js 18.17+
- npm, yarn, pnpm o bun

## 🛠️ Instalación

1. Clona o descarga el repositorio:

\`\`\`bash
cd lamarshalada
\`\`\`

2. Instala las dependencias:

\`\`\`bash
npm install
\`\`\`

3. Configura las variables de entorno:

Crea un archivo \`.env.local\` en la raíz del proyecto:

\`\`\`env
NEXT_PUBLIC_PRISMIC_REPOSITORY=lamarshalada
PRISMIC_ACCESS_TOKEN=tu_token_aqui
\`\`\`

## 📦 Dependencias Principales

- next: ^15.0.0
- react: ^19.0.0
- react-dom: ^19.0.0
- tailwindcss: ^4.0.0
- @prismicio/client: ^7.0.0
- @prismicio/react: ^3.0.0
- next-pwa: ^5.4.4
- lucide-react: ^0.408.0

## 🏃 Ejecución

### Desarrollo

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en \`http://localhost:3000\`

### Build para Producción

\`\`\`bash
npm run build
npm start
\`\`\`

### Linting

\`\`\`bash
npm run lint
\`\`\`

## 📁 Estructura del Proyecto

```
lamarshalada/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal con PWA config
│   │   ├── page.tsx         # Página de inicio (Landing)
│   │   └── globals.css      # Estilos globales
│   ├── components/
│   │   ├── Header.tsx       # Encabezado con redes sociales
│   │   ├── About.tsx        # Sección sobre Marshall
│   │   ├── TwitchLive.tsx   # Sección de directos en Twitch
│   │   ├── BettingSites.tsx # Casas de apuestas por país
│   │   └── Footer.tsx       # Pie de página
│   └── lib/
│       └── prismic.ts       # Cliente Prismic
├── public/
│   ├── manifest.json        # Manifest de PWA
│   └── icons/              # Iconos PWA
├── next.config.ts          # Configuración Next.js con PWA
└── tailwind.config.ts       # Configuración Tailwind
```

## 🎨 Componentes Principales

### Header
- Logo de La Marshalada
- Enlaces a redes sociales
- Menú responsive

### About
- Información sobre Marshall
- Galería de colaboradores

### TwitchLive
- Estado de Twitch
- Información de directos en vivo

### BettingSites
- Filtro por país
- Casas de apuestas recomendadas

### Footer
- Enlaces legales
- Información de juego responsable

## 🔧 Configuración PWA

Características PWA incluidas:
- manifest.json
- Service Workers
- Icons para múltiples dispositivos
- Theme colors personalizados

## 📞 Contacto

- Twitter: [@LaMarshalada](https://x.com/LaMarshalada)
- Instagram: [@lamarshalada](https://instagram.com/lamarshalada)
- Twitch: [marshalada](https://twitch.tv/marshalada)

© 2025 La Marshalada. Todos los derechos reservados.
