"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Flicker eléctrico al pasar el cursor — simula monitor CRT con carga inestable
const flickerHover = {
  opacity: [1, 0.6, 1, 0.75, 0.95, 1] as number[],
  transition: {
    duration: 0.38,
    times: [0, 0.08, 0.18, 0.42, 0.72, 1],
    ease: "easeOut" as const,
  },
}

interface GalleryGridProps {
  gallery: string[]
  title: string
}

export function GalleryGrid({ gallery, title }: GalleryGridProps) {
  if (!gallery || gallery.length === 0) return null

  const [first, ...rest] = gallery

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-border">
      {/* Header */}
      <div className="flex items-baseline gap-4 mb-10">
        <h2 className="font-mono text-sm tracking-[0.35em] uppercase text-muted-foreground">
          Galería
        </h2>
        <span className="font-mono text-xs text-muted-foreground/40">
          // {gallery.length} imágenes
        </span>
      </div>

      {/* Imagen destacada — ancho completo */}
      <motion.div
        className="relative aspect-[16/9] overflow-hidden bg-[#080808] card-stage mb-3 w-full"
        whileHover={flickerHover}
      >
        <Image
          src={first}
          alt={`${title} — 01`}
          fill
          className="object-contain w-full h-full"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority={false}
        />
      </motion.div>

      {/* Resto de imágenes — grilla 2 columnas */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {rest.map((src, i) => (
            <motion.div
              key={src}
              className="relative aspect-[4/3] overflow-hidden bg-[#080808] card-stage"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{
                opacity: [0, 0.3, 0.08, 0.9, 1],
                y: 0,
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.75,
                delay: (i % 4) * 0.12,
                times: [0, 0.12, 0.3, 0.65, 1],
                ease: "easeOut",
              }}
              whileHover={flickerHover}
            >
              <Image
                src={src}
                alt={`${title} — ${String(i + 2).padStart(2, "0")}`}
                fill
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
