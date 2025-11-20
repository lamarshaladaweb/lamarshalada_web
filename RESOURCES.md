# 📚 Recursos y Referencias

## �� Redes Sociales de La Marshalada

| Red Social | URL |
|-----------|-----|
| Instagram | https://www.instagram.com/lamarshalada |
| X (Twitter) | https://x.com/LaMarshalada |
| Twitch | https://www.twitch.tv/marshalada |
| YouTube | https://www.youtube.com/channel/UCMhRv4plVTxn3Nbs8aOmhDQ |
| TikTok | https://www.tiktok.com/@lamarshalada |
| Discord | https://discord.com/invite/CczFhBxedq |

## �� Casas de Apuestas Integradas

| Casa | Países | URL |
|------|--------|-----|
| Betfair | ES, AR, BR, PT | https://www.betfair.es |
| 1xBet | ES, AR, BR, MX, CL, CO | https://www.1xbet.es |
| Bet365 | ES, AR, BR, PT, MX, CO | https://www.bet365.es |
| William Hill | ES, AR, BR | https://www.williamhill.es |
| Sportium | ES, AR | https://www.sportium.es |
| Codere | ES, AR, MX, CO | https://www.codere.es |

## 📖 Documentación Técnica

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Documentation](https://react.dev)
- [React Server Components](https://react.dev/reference/rsc/server-components)

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Config](https://tailwindcss.com/docs/configuration)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)

### Prismic CMS
- [Prismic Main Site](https://prismic.io)
- [Prismic Documentation](https://prismic.io/docs)
- [Prismic Developer Guide](https://prismic.io/docs/technologies/next-js)
- [Prismic JavaScript SDK](https://prismic.io/docs/technologies/javascript)

### PWA & Service Workers
- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Manifest.json Reference](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## 🛠️ Herramientas de Desarrollo

### Local Development
- [Node.js LTS](https://nodejs.org/en/download/) - Runtime de JavaScript
- [npm](https://www.npmjs.com/) - Package manager
- [VS Code](https://code.visualstudio.com/) - Editor de código

### Browser DevTools
- Chrome DevTools (F12)
- Firefox Developer Edition
- Safari Web Inspector

### Deployment
- [Vercel](https://vercel.com) - Hosting Next.js
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Render](https://render.com)

## 📊 Testing & QA

### Testing Libraries (para futuro)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Cypress](https://cypress.io/)
- [Playwright](https://playwright.dev/)

### Performance Analysis
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundlephobia](https://bundlephobia.com/)

## 🎨 Design & UI Resources

### Icons
- [Font Awesome](https://fontawesome.com/) - Iconos sociales
- [Lucide Icons](https://lucide.dev/) - Iconos vectoriales
- [Heroicons](https://heroicons.com/)

### Fonts
- [Google Fonts](https://fonts.google.com/)
- [Geist Font](https://vercel.com/font) - Fuente de Vercel

### Colors
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Color Hunt](https://colorhunt.co/)
- [Coolors.co](https://coolors.co/)

## 📱 Mobile & Cross-Browser Testing

### Mobile Testing Tools
- [BrowserStack](https://www.browserstack.com/)
- [Sauce Labs](https://saucelabs.com/)
- [LambdaTest](https://www.lambdatest.com/)
- [Chrome DevTools Device Emulation](https://developer.chrome.com/docs/devtools/device-mode/)

## 🔐 Security & Compliance

### Gaming & Responsible Gambling
- [Ordenación del Juego (Spain)](https://www.ordenacionjuego.es/)
- [Juego Seguro](https://www.ordenacionjuego.es/participantes-juego/juego-seguro)
- [Juega Bien](https://datos.gob.es/es/aplicaciones/jugar-bien)

### Privacy & Legal
- [GDPR Compliance](https://gdpr.eu/)
- [Privacy by Design](https://ec.europa.eu/info/law/law-topic/data-protection_en)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 🚀 Deployment Guides

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

### Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Deployment
```env
# Production (.env.production)
NEXT_PUBLIC_PRISMIC_REPOSITORY=lamarshalada
PRISMIC_ACCESS_TOKEN=your_production_token

# Optional
NEXT_PUBLIC_TWITCH_CLIENT_ID=
TWITCH_ACCESS_TOKEN=
```

## 📞 Support & Community

### Official Documentation
- [Next.js Discord Community](https://discord.gg/nextjs)
- [React Community](https://react.dev/community/support)
- [Tailwind Discord](https://discord.gg/7NF8agS)

### Stack Overflow
- Tag: `next.js`
- Tag: `tailwindcss`
- Tag: `prismic`

### YouTube Channels
- [Vercel](https://www.youtube.com/c/Vercel)
- [Tailwind CSS](https://www.youtube.com/channel/UCOe-8z68tgw7IEaqTSnWUAQ)
- [Next.js](https://www.youtube.com/channel/UCNfJF3dVumU2DY9bUX1qk-w)

## 📈 Metrics & Analytics (para futuro)

### Analytics Tools
- [Google Analytics 4](https://analytics.google.com/)
- [Vercel Analytics](https://vercel.com/analytics)
- [Mixpanel](https://mixpanel.com/)
- [Segment](https://segment.com/)

### Performance Monitoring
- [Sentry](https://sentry.io/)
- [LogRocket](https://logrocket.com/)
- [New Relic](https://newrelic.com/)

## 🎓 Learning Resources

### Next.js Courses
- [Next.js Official Learn](https://nextjs.org/learn)
- [Vercel Learning Path](https://vercel.com/guides)

### React Courses
- [React Official Docs](https://react.dev/learn)
- [Epic React](https://epicreact.dev/)

### Full-Stack Development
- [freeCodeCamp](https://www.freecodecamp.org/)
- [egghead.io](https://egghead.io/)
- [Udemy](https://www.udemy.com/)

## 🔄 CI/CD Pipelines

### GitHub Actions
```yaml
name: Build and Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

### Vercel CI/CD
- Integración automática con GitHub/GitLab
- Preview deployments
- Production deployments

## 📝 License & Attribution

Este proyecto utiliza:
- **Next.js** - MIT License
- **React** - MIT License
- **Tailwind CSS** - MIT License
- **Font Awesome** - CC BY 4.0 License
- **Lucide** - ISC License

Revisar `LICENSE` en cada paquete para detalles.

---

**Última actualización:** Noviembre 14, 2025

¿Necesitas más información? Consulta los archivos:
- `README.md` - Documentación principal
- `DEVELOPMENT.md` - Guía de desarrollo
- `PROJECT_SUMMARY.md` - Resumen completo del proyecto
- `QUICKSTART.md` - Inicio rápido
