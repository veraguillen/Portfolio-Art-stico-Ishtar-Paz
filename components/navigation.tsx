"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLang } from "@/contexts/lang-context"
import type { Lang } from "@/lib/translations"

const LANGS: Lang[] = ["es", "en", "pt"]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const navItems = [
    { href: "/", label: t.nav_home },
    { href: "/obras", label: t.nav_obras },
    { href: "/experiencia", label: t.nav_experiencia },
    { href: "/contacto", label: t.nav_contacto },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col hover:opacity-80 transition-opacity"
          >
            <span
              className="block leading-none text-foreground"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                letterSpacing: '0.15em',
              }}
            >
              ISHTAR{' '}
              <span style={{ letterSpacing: '-0.02em' }}>PAZ</span>{' '}
              PINEDA
            </span>
            <span className="block text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase mt-0.5">
              {t.hero_subtitle}
            </span>
          </Link>

          {/* Desktop: Nav links + Lang selector */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-xs tracking-widest uppercase transition-colors duration-300",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-neon"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Lang selector */}
            <div className="flex items-center gap-0.5 font-mono text-xs tracking-[0.15em]">
              <span className="text-muted-foreground/30">[</span>
              {LANGS.map((l, i) => (
                <span key={l} className="flex items-center">
                  {i > 0 && <span className="text-muted-foreground/30 mx-1">|</span>}
                  <button
                    onClick={() => setLang(l)}
                    className={cn(
                      "uppercase transition-colors duration-200 hover:underline decoration-burnt-umber underline-offset-2",
                      lang === l
                        ? "text-neon"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {l}
                  </button>
                </span>
              ))}
              <span className="text-muted-foreground/30">]</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-neon transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="pt-6 pb-2 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block font-mono text-xs tracking-[0.25em] uppercase transition-colors duration-300",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-neon"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile lang selector */}
          <div className="pb-4 flex items-center gap-0.5 font-mono text-xs tracking-[0.15em]">
            <span className="text-muted-foreground/30">[</span>
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-muted-foreground/30 mx-1">|</span>}
                <button
                  onClick={() => { setLang(l); setIsOpen(false) }}
                  className={cn(
                    "uppercase transition-colors duration-200",
                    lang === l ? "text-neon" : "text-muted-foreground"
                  )}
                >
                  {l}
                </button>
              </span>
            ))}
            <span className="text-muted-foreground/30">]</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
