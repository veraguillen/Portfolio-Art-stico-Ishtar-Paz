import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono, Instrument_Serif, Bebas_Neue, Fraunces, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LangProvider } from '@/contexts/lang-context'
import './globals.css'

// ── Cuerpo y navegación ────────────────────────────────────────────────────
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600', '700'],
});

// ── Metadatos, etiquetas, UI técnica ──────────────────────────────────────
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

// ── Títulos editoriales y citas poéticas ──────────────────────────────────
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
});

// ── Logo / display ────────────────────────────────────────────────────────
const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: '--font-bebas',
  weight: '400',
})

// ── Títulos poéticos / furia editorial ────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-fraunces',
  weight: '800',
  style: ['normal', 'italic'],
})

// ── Metadatos, etiquetas técnicas, inventario ─────────────────────────────
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: '--font-space-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Ishtar Paz Pineda | Directora de Escena · Dramaturga · Performer · Clown',
  description: 'Portfolio de Ishtar Paz Pineda — Directora de Escena, Dramaturga, Performer y Clown. Especializada en colaboración intercultural y formatos híbridos: biodrama, teatro de objetos y nuevos medios.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${geistMono.variable} ${instrumentSerif.variable} ${bebas.variable} ${fraunces.variable} ${spaceMono.variable}`}>
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${fraunces.variable} ${spaceMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        {/* Grain cinematográfico global — fixed, non-interactive */}
        <div className="film-grain-overlay" aria-hidden="true" />
        <LangProvider>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  )
}
