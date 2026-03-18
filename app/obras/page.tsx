"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { works, categories } from "@/lib/works-data"
import { useLang } from "@/contexts/lang-context"

export default function ObrasPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { lang, t } = useLang()

  const filteredWorks = activeFilter === "all"
    ? works
    : works.filter(work => work.category === activeFilter)

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-h-screen bg-background pt-24 pb-20"
    >
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-32 mb-16">
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6">
          {t.obras_title}
        </h1>
        <p className="font-sans text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {t.obras_desc}
        </p>
      </header>

      {/* Filter */}
      <nav className="px-6 md:px-12 lg:px-32 mb-12">
        <ul className="flex flex-wrap gap-4 md:gap-6">
          <li key="all">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                activeFilter === "all"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.obras_filter_todas}
              {activeFilter === "all" && <span className="block h-px bg-burnt-umber mt-1" />}
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveFilter(category.id)}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  activeFilter === category.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
                {activeFilter === category.id && (
                  <span className="block h-px bg-burnt-umber mt-1" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Works Grid */}
      <section className="px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredWorks.map((work, index) => (
            <Link
              key={work.slug}
              href={`/obras/${work.slug}`}
              className={`group block ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <article
                className="relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeIn 0.6s ease-out forwards",
                }}
              >
                <div className={`relative overflow-hidden bg-[#080808] border border-[#3D2314] ${index === 0 ? "aspect-[16/9]" : "aspect-[3/4]"}`}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-background/25 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#08F7FE]/60 mb-1">
                      {work.year} — {work.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 text-balance group-hover:text-neon transition-colors duration-300 leading-tight">
                      {work.title}
                    </h2>
                    <p className="font-mono text-xs text-foreground/50 tracking-[0.15em]">
                      {work.venue}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Quote */}
      <footer className="px-6 md:px-12 lg:px-32 mt-24 text-center">
        <blockquote className="max-w-2xl mx-auto">
          <p className="font-display text-xl md:text-2xl font-bold text-muted-foreground/60 leading-relaxed italic">
            {t.obras_quote}
          </p>
        </blockquote>
      </footer>
    </motion.div>
  )
}
