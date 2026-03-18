# Portafolio Artístico — Ishtar Paz Pineda

Sitio web de portafolio para **Ishtar Paz Pineda**, directora de escena, dramaturga y performer hondureña. Construido con estética de "nuevos medios industriales": fondo negro, tipografía editorial, efectos glitch RGB y animaciones analógicas.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Estilos**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Tipografía**: Fraunces · Instrument Serif · Geist · Space Mono · Bebas Neue
- **i18n**: Context API — ES / EN / PT
- **Formulario**: Formspree (AJAX, sin recarga)
- **Deploy**: Vercel

## Estructura

```
app/
├── page.tsx              # Home — Hero + Manifiesto + Obras destacadas
├── obras/
│   ├── page.tsx          # Galería completa
│   └── [slug]/page.tsx   # Detalle de obra (SSG)
├── experiencia/page.tsx  # Trayectoria + timeline
├── contacto/page.tsx     # Poética de trabajo + formulario
└── globals.css           # Paleta, fuentes, film grain, glitch CSS

components/
├── navigation.tsx        # Nav fija + selector de idioma
├── footer.tsx            # Pie de página
├── hero-glitch.tsx       # Efecto RGB split en hover
└── glitch-text.tsx       # Texto con animación editorial

lib/
├── translations.ts       # Diccionario ES / EN / PT
└── works-data.ts         # Datos de obras
```

## Variables de entorno

No se requieren variables de entorno para el deploy base. El endpoint de Formspree está hardcodeado en `app/contacto/page.tsx`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Importar el repositorio en [vercel.com](https://vercel.com)
2. Framework: **Next.js** (detectado automáticamente)
3. Sin variables de entorno requeridas
4. Deploy → listo
