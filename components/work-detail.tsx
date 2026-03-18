"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { GalleryGrid } from "@/components/gallery-grid"
import { useLang } from "@/contexts/lang-context"
import type { Work } from "@/lib/works-data"

interface WorkDetailProps {
  work: Work
  prevWork: Work | null
  nextWork: Work | null
}

export function WorkDetail({ work, prevWork, nextWork }: WorkDetailProps) {
  const { lang, t } = useLang()

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      {/* Hero Image */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <Link
          href="/obras"
          className="absolute top-24 left-6 md:left-12 lg:left-32 flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-widest uppercase">{t.obra_volver}</span>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-32">
          <span className="text-xs tracking-widest uppercase text-burnt-umber mb-4 block">
            {work.year} — {work.venue}
          </span>
          <h1 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
            {work.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">{work.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-32 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              {t.obra_sobre}
            </h2>
            <div className="space-y-6">
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
                {work.description}
              </p>
              {work.longDescription && (
                <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {work.longDescription}
                </p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-card border border-[#3D2314] p-8 md:p-10">
              <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-8">
                {t.obra_ficha}
              </h3>
              <dl className="space-y-6">
                <div>
                  <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                    {t.obra_direccion}
                  </dt>
                  <dd className="font-mono text-foreground">{work.director}</dd>
                </div>
                <div>
                  <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                    {t.obra_autor}
                  </dt>
                  <dd className="font-mono text-foreground">{work.author}</dd>
                </div>
                <div>
                  <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                    {t.obra_espacio}
                  </dt>
                  <dd className="font-mono text-foreground">{work.venue}</dd>
                </div>
                <div>
                  <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                    {t.obra_anio}
                  </dt>
                  <dd className="font-mono text-foreground">{work.year}</dd>
                </div>
                {work.cast && (
                  <div>
                    <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {t.obra_reparto}
                    </dt>
                    <dd className="font-mono text-foreground">{work.cast}</dd>
                  </div>
                )}
                {work.awards && (
                  <div>
                    <dt className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-1">
                      {t.obra_reconocimientos_label}
                    </dt>
                    <dd className="text-burnt-umber">{work.awards}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {work.gallery && work.gallery.length > 0 && (
        <GalleryGrid gallery={work.gallery} title={work.title} />
      )}

      <nav className="border-t border-border">
        <div className="grid grid-cols-2">
          {prevWork ? (
            <Link
              href={`/obras/${prevWork.slug}`}
              className="group p-6 md:p-12 lg:p-16 hover:bg-card transition-colors"
            >
              <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-muted-foreground mb-2">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {t.obra_anterior}
              </span>
              <span className="font-mono text-lg md:text-xl text-foreground">{prevWork.title}</span>
            </Link>
          ) : (
            <div className="p-6 md:p-12 lg:p-16" />
          )}

          {nextWork ? (
            <Link
              href={`/obras/${nextWork.slug}`}
              className="group p-6 md:p-12 lg:p-16 text-right border-l border-border hover:bg-card transition-colors"
            >
              <span className="flex items-center justify-end gap-2 text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {t.obra_siguiente}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-mono text-lg md:text-xl text-foreground">{nextWork.title}</span>
            </Link>
          ) : (
            <div className="p-6 md:p-12 lg:p-16 border-l border-border" />
          )}
        </div>
      </nav>
    </motion.div>
  )
}
