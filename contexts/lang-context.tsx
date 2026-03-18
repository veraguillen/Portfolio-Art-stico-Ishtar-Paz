"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { translations, Lang, T } from "@/lib/translations"

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
