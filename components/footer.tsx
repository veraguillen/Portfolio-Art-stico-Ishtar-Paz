"use client"

import { useLang } from "@/contexts/lang-context"

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-border mt-16 py-12 px-6 text-center">
      <p className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
        Ishtar Paz Pineda
      </p>
      <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground/30">
        {t.footer_roles}
      </p>
    </footer>
  )
}
