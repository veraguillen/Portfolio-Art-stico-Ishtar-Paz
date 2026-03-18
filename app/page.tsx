"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { GlitchText } from "@/components/glitch-text"
import { HeroGlitch } from "@/components/hero-glitch"
import { useLang } from "@/contexts/lang-context"

// ─── Variants ────────────────────────────────────────────────────────────────

const circuitContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.4 } },
}

const circuitItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

// ─── Página Principal ─────────────────────────────────────────────────────────

export default function HomePage() {
  const { lang, t } = useLang()

  const featuredWorks = [
    {
      slug: "el-banquete-de-las-yeguas",
      title: "El Banquete de las Yeguas",
      year: "2025",
      image: "/assets/images/works/yegua/1.png",
    },
    {
      slug: "fragmentos-de-existencia",
      title: "Fragmentos de Existencia",
      year: "2025",
      image: "/assets/images/works/fragmentos/1.png",
    },
    {
      slug: "la-casa-de-las-perras-viajeras",
      title: "La Casa de las Perras Viajeras",
      year: "2023",
      image: "/assets/images/works/casa-perras-viajeras/1.png",
    },
  ]

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/assets/images/works/fragmentos/4.png"
          alt="Ishtar Paz Pineda — Directora de Escena · Dramaturga · Performer · Clown"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-[2]" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center">
          <motion.div
            className="max-w-4xl"
            variants={circuitContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={circuitItem}
              className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8"
            >
              {t.hero_subtitle}
            </motion.p>

            <HeroGlitch
              variants={circuitItem}
              className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-balance mb-8"
            >
              <>
                {t.hero_h1_line1}
                <br />
                <span className="text-foreground/50">{t.hero_h1_line2}</span>
              </>
            </HeroGlitch>

            <motion.p
              className="font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: '0.7rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
            >
              {t.hero_tag}
            </motion.p>

            <motion.p
              className="font-sans text-muted-foreground/70 max-w-2xl mx-auto italic"
              style={{ fontSize: '1rem' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {t.hero_tagline}
            </motion.p>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
          </div>
        </div>
      </section>

      {/* ── Contenido traducible con fade ────────────────────────────────── */}
      <motion.div
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* ── MANIFIESTO ─────────────────────────────────────────────────── */}
        <section className="py-28 md:py-40 px-6 md:px-12 lg:px-32">
          <div className="container mx-auto max-w-5xl">

            {/* Label */}
            <motion.p
              className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {t.manifiesto_label}
            </motion.p>

            {/* Featured phrase — Fraunces, full width */}
            <motion.h2
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance mb-16 md:mb-20 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                textShadow: "0 0 28px rgba(8,247,254,0.18)",
                transition: { duration: 0.4 },
              }}
            >
              {t.manifiesto_featured}
            </motion.h2>

            {/* Body — indented with left oxide border */}
            <div className="md:ml-24 lg:ml-40 border-l border-[#3D2314] pl-8 md:pl-12 space-y-8 max-w-2xl">

              <motion.p
                className="font-sans text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
              >
                {t.manifiesto_p1}
              </motion.p>

              {/* p2 — italic serif, the "method" */}
              <motion.p
                className="font-serif italic text-lg text-foreground/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                {t.manifiesto_p2}
              </motion.p>

              <motion.p
                className="font-sans text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                {t.manifiesto_p3}
              </motion.p>

              <motion.p
                className="font-sans text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {t.manifiesto_p4}
              </motion.p>

            </div>
          </div>
        </section>

        {/* ── OBRAS DESTACADAS ───────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-6 md:px-12 lg:px-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <p className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
                  {t.obras_home_label}
                </p>
                <GlitchText
                  as="h2"
                  className="font-serif text-3xl md:text-4xl font-bold"
                  {...fadeUp(0.05)}
                >
                  {t.obras_home_title}
                </GlitchText>
              </div>

              <Link
                href="/obras"
                className="group mt-6 md:mt-0 font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-neon transition-colors duration-300 flex items-center gap-2"
              >
                <span>{t.obras_home_ver_todas}</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  →
                </motion.span>
              </Link>
            </div>

            {/* Stage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:h-[62vh]">
              {featuredWorks.map((work, index) => (
                <Link
                  key={work.slug}
                  href={`/obras/${work.slug}`}
                  className={cn(
                    "group block md:h-full",
                    index === 0
                      ? "aspect-[16/9] md:aspect-auto md:col-span-2 md:row-span-2"
                      : index === 1
                      ? "aspect-[3/4] md:aspect-auto"
                      : "aspect-[16/9] md:aspect-auto"
                  )}
                >
                  <motion.div
                    className="relative overflow-hidden bg-[#080808] w-full h-full card-stage"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.18,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{
                      scale: 1.022,
                      transition: { type: "spring", stiffness: 90, damping: 16, mass: 1.8 },
                    }}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-1">
                        {work.year}
                      </p>
                      <h3
                        className={cn(
                          "font-serif transition-colors duration-300 group-hover:text-neon",
                          index === 0 ? "text-xl md:text-2xl" : "text-base"
                        )}
                      >
                        {work.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 text-center">
          <div className="container mx-auto max-w-2xl">
            <motion.p
              className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6"
              {...fadeUp(0)}
            >
              {t.cta_label}
            </motion.p>

            <GlitchText
              as="h2"
              className="font-display text-3xl md:text-5xl font-bold mb-10 text-balance"
              {...fadeUp(0.15)}
            >
              {t.cta_title}
            </GlitchText>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href="/contacto#contacto"
                className="inline-block px-8 py-4 border border-foreground/20 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground hover:border-neon hover:text-neon transition-colors duration-300"
              >
                {t.cta_button}
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
