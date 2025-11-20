# Quick Reference - Estructura de Archivos Migrados

## 📁 Estructura del Proyecto

```
/src
├── /data
│   ├── bettingSites.ts      ← Lista de 47 casas de apuestas + países
│   └── colaboradores.ts     ← Lista de 14 colaboradores
├── /components
│   ├── Header.tsx           ← Logo + redes sociales
│   ├── About.tsx            ← Marshall + Colaboradores grid
│   ├── TwitchLive.tsx       ← Fetch del estado del stream
│   ├── BettingSites.tsx     ← Grid con filtro por país
│   ├── Footer.tsx           ← Links legales + Banner responsable
│   └── ... (otros)
└── /app
    ├── page.tsx             ← Página principal
    ├── layout.tsx
    ├── globals.css
    └── ...

/public
└── /Recursos
    ├── /CasasApuestas       ← Logos de sites de apuestas
    ├── /Colaboradores       ← Fotos de colaboradores + Marshall
    ├── /Logos_Banners       ← Logo principal
    ├── /favicon             ← Iconos
    └── off.jpg              ← Imagen cuando Twitch está offline

```

## 🔄 Mapeo Original → Next.js

### CasasApuestas.js
```
ANTES:
├── renderBanners(filterPais)      → Función que renderiza banners
├── Choices.js event listener      → Manejo del dropdown
└── datos en array estático

AHORA:
├── /src/data/bettingSites.ts      → Datos exportados
└── BettingSites.tsx               → Componente con useState + useEffect
    ├── [selectedCountry, setSelectedCountry]
    ├── [filteredBanners, setFilteredBanners]
    └── filter automático en useEffect
```

### Colaboradores.js
```
ANTES:
├── renderColaboradores()          → Función que crea elementos DOM
├── addEventListener click          → Abre URL en X
└── datos en array estático

AHORA:
├── /src/data/colaboradores.ts     → Datos exportados
└── About.tsx                       → Componente integrado
    ├── map sobre el array
    ├── onClick={} abre X en new window
    └── Tooltips con overlay CSS
```

### estadoTwitch.js
```
ANTES:
├── fetch('https://api.lamarshalada.com/api/stream-status')
├── Si isLive → renderiza iframe
└── Si !isLive → renderiza imagen off.jpg

AHORA:
├── TwitchLive.tsx                 → Componente
├── useEffect hook para fetch
├── [isLive, setIsLive] state
├── [loading, setLoading] state
└── Renderizado condicional del iframe/imagen
```

### Estilos CSS
```
ANTES (Trabajo/Estilos/):
├── reset.css
├── layout.css
├── header.css
├── sections.css
├── banners.css
├── colaboradores.css
├── footer.css
├── responsive.css
└── ... (más módulos)

AHORA (Tailwind CSS en componentes):
├── Header: bg-white, border-b, sticky
├── About: py-16, grid, rounded-lg
├── TwitchLive: aspect-video, max-w-4xl
├── BettingSites: grid-cols-2/4/6, gap-4
└── Footer: bg-gray-900, border-y
```

## 🎯 Funcionalidades Clave

### 1. Filtro de Casas de Apuestas
```tsx
// BettingSites.tsx
const [selectedCountry, setSelectedCountry] = useState("es");

useEffect(() => {
  if (selectedCountry === "all") {
    setFilteredBanners(bettingSites);
  } else {
    setFilteredBanners(
      bettingSites.filter(b => b.paises.includes(selectedCountry))
    );
  }
}, [selectedCountry]);
```

### 2. Grid de Colaboradores con Tooltips
```tsx
// About.tsx
colaboradores.map(col => (
  <div onClick={() => window.open(col.X, "_blank")}>
    <img src={col.img} />
    <div className="absolute inset-0 bg-black/70 opacity-0 
                    group-hover:opacity-100 transition-opacity">
      <p>{col.info}</p>
    </div>
  </div>
))
```

### 3. Fetch automático de Twitch
```tsx
// TwitchLive.tsx
useEffect(() => {
  const fetch = async () => {
    const res = await fetch(
      "https://api.lamarshalada.com/api/stream-status"
    );
    const data = await res.json();
    setIsLive(data.isLive);
  };
  fetch();
  const interval = setInterval(fetch, 30000);
  return () => clearInterval(interval);
}, []);
```

## 📱 Responsividad

### Grids adaptables
- BettingSites: 2 cols (mobile) → 4 cols (tablet) → 6 cols (desktop)
- Colaboradores: 2 cols (mobile) → 4 cols (tablet) → 5 cols (desktop)
- Header: Stack vertical (mobile) → Flex horizontal (desktop)
- Footer: Full width (mobile) → Centered (desktop)

## 🔗 URLs Importantes

### API
- Stream status: `https://api.lamarshalada.com/api/stream-status`
- Banners redirigen a: `https://api.lamarshalada.com/_<sitekey>`

### Redes Sociales
- Instagram: `https://www.instagram.com/lamarshalada`
- X: `https://x.com/LaMarshalada`
- Twitch: `https://www.twitch.tv/marshalada`
- YouTube: `https://www.youtube.com/channel/UCMhRv4plVTxn3Nbs8aOmhDQ`
- TikTok: `https://www.tiktok.com/@lamarshalada`
- Discord: `https://discord.com/invite/CczFhBxedq`

### Juego Responsable
- Juega Bien: `https://datos.gob.es/es/aplicaciones/jugar-bien`
- Juego Seguro: `https://www.ordenacionjuego.es/participantes-juego/juego-seguro`
- RGIAJ: `https://www.ordenacionjuego.es/participantes-juego/juego-seguro/rgiaj`

## ⚙️ Variables de Entorno (si se necesitan)

Actualmente no hay variables de entorno requeridas. El sitio usa:
- URLs públicas (sin tokens)
- Fetch sin autenticación
- Recursos estáticos en `/public`

Si en el futuro se necesita:
- Token de Twitch API
- Google Analytics
- Sentry
- etc.

Agregar a `.env.local`:
```
NEXT_PUBLIC_TWITCH_CLIENT_ID=xxx
NEXT_PUBLIC_GA_ID=xxx
```

## 🚀 Para Ejecutar

```bash
# Desarrollo
npm run dev
# Abre http://localhost:3000

# Producción
npm run build
npm run start
```

## 📝 Cambios Principales

1. **Sin jQuery**: Ahora usa React hooks (useState, useEffect)
2. **Sin Choices.js**: Select HTML nativo (más simple en Next.js)
3. **Sin vanilla DOM**: JSX para renderizado
4. **Sin CSS modules dispersos**: Tailwind CSS centralizado
5. **TypeScript**: Todos los componentes tipados
6. **Componentes reutilizables**: Mejor arquitectura

## ✅ Testing Checklist

Cuando ejecutes `npm run dev`:

- [ ] Header renderiza con logo
- [ ] Redes sociales visibles y funcionales
- [ ] Menú móvil abre/cierra
- [ ] Foto de Marshall visible
- [ ] Colaboradores en grid (2-5 cols según pantalla)
- [ ] Clic en colaborador abre X en nueva pestaña
- [ ] Tooltip de especialidad visible al hover
- [ ] Sección Twitch muestra iframe o imagen off
- [ ] Dropdown de país funcional
- [ ] Casas de apuestas filtran al cambiar país
- [ ] Hover en banners muestra escala y sombra
- [ ] Footer visible con links funcionales
- [ ] Banner de juego responsable clickeable
- [ ] Sitio responsive en móvil/tablet/desktop
