# 🚀 Guía Rápida de Inicio

## 1️⃣ Instalación (ya completada)

Las dependencias ya están instaladas. El proyecto está listo para usar.

## 2️⃣ Iniciar Desarrollo

```bash
cd /Users/linkjavier/Desktop/lamarshalada
npm run dev
```

**La aplicación estará disponible en:** `http://localhost:3000`

## 3️⃣ Estructura de Archivos Importantes

```
src/components/
├── Header.tsx        ← Encabezado con redes sociales
├── About.tsx         ← Información sobre Marshall
├── TwitchLive.tsx    ← Sección de directos
├── BettingSites.tsx  ← Casas de apuestas con filtro
└── Footer.tsx        ← Pie de página

src/app/
├── page.tsx          ← Landing page principal
├── layout.tsx        ← Layout global (PWA config)
└── globals.css       ← Estilos globales
```

## 4️⃣ Editar Contenido

### Para cambiar logos/imágenes:
- Reemplaza archivos en `public/`
- Usa Next.js Image para optimización

### Para cambiar textos:
- Edita los componentes en `src/components/`
- Los textos están en JSX

### Para agregar nuevas secciones:
1. Crea componente en `src/components/`
2. Importa en `src/app/page.tsx`
3. Añade al layout

## 5️⃣ Compilar para Producción

```bash
npm run build
npm start
```

## 6️⃣ Configurar Prismic (Opcional)

1. Ir a https://prismic.io
2. Crear cuenta y repositorio "lamarshalada"
3. Obtener token de acceso
4. Actualizar `.env.local`:

```env
NEXT_PUBLIC_PRISMIC_REPOSITORY=lamarshalada
PRISMIC_ACCESS_TOKEN=tu_token_aqui
```

## 7️⃣ Deploy en Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

Sigue los pasos interactivos.

## 📋 Checklist de Primeros Pasos

- [ ] Iniciar `npm run dev`
- [ ] Probar en navegador (localhost:3000)
- [ ] Revisar componentes en `src/components/`
- [ ] Reemplazar imágenes placeholder
- [ ] Actualizar textos según necesites
- [ ] Compilar build: `npm run build`
- [ ] Deploy en Vercel o hosting preferido

## 🆘 Problemas Comunes

**Error de puerto 3000 en uso:**
```bash
npm run dev -- -p 3001
```

**Service Worker no registra:**
- Necesita HTTPS en producción
- Verifica Console del navegador

**Cambios no se ven:**
- Reinicia servidor con Ctrl+C y `npm run dev`

## 📞 Contacto & Soporte

- Documentación: Ver `README.md` y `DEVELOPMENT.md`
- Proyecto resumen: `PROJECT_SUMMARY.md`

¡Listo para desarrollar! 🎉
