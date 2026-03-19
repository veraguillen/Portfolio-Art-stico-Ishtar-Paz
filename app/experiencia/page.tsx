"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLang } from "@/contexts/lang-context"

const timeline = [
  {
    period: "2025 — Actualidad",
    role: "Maestría en Teatro de Objetos, Interactividad y Nuevos Medios",
    organization: "UNA — Universidad Nacional de las Artes, Argentina",
    description:
      "En curso. Investigación sobre la convergencia entre el objeto, el cuerpo y las nuevas tecnologías.",
    highlights: [
      "Teatro de Objetos e Interactividad",
      "UNA — Universidad Nacional de las Artes",
      "Nuevas tecnologías aplicadas a la escena",
    ],
    isCurrent: true,
  },
  {
    period: "2023 — 2025",
    role: "Asistente Pedagógica en Teatro Performativo",
    organization: "UNA — Universidad Nacional de las Artes, Argentina",
    description:
      "Asistencia docente en el área de Teatro Performativo y formación técnica.",
    highlights: [
      "Teatro Performativo",
      "Asistencia docente",
      "Formación técnica escénica",
    ],
    isCurrent: false,
  },
  {
    period: "2022",
    isCurrent: false,
    role: "Taller de Performance · Seminarios de Investigación",
    organization: "CELCIT / UNA — Argentina",
    description:
      "Participación en el Taller de Performance del CELCIT (Centro Latinoamericano de Creación e Investigación Teatral) y en seminarios de investigación en la Universidad Nacional de las Artes.",
    highlights: [
      "CELCIT — Centro Latinoamericano de Creación e Investigación Teatral",
      "Seminarios UNA",
      "Profundización en metodologías de performance",
    ],
  },
  {
    period: "2021",
    isCurrent: false,
    role: "Publicación en Antología Nacional",
    organization: "MUA — Honduras",
    description:
      "Publicación de \"El Jardín de las Delicias\" en la antología Tierra Inconexa de Dramaturgia Hondureña, editada por el Museo Universitario de Arte (MUA).",
    highlights: [
      "Antología Tierra Inconexa",
      "MUA — Museo Universitario de Arte",
      "Dramaturgia hondureña contemporánea",
    ],
  },
  {
    period: "2016 — 2018",
    isCurrent: false,
    role: "Profesora de Teatro y Creatividad",
    organization: "CENAFAC / Escuela Hondureño-Japonesa — Honduras",
    description:
      "Docencia en teatro y creatividad en el Centro Nacional de Formación Artística y Cultural (CENAFAC) y en la Escuela Hondureño-Japonesa. Formación de nuevas generaciones en práctica escénica.",
    highlights: [
      "CENAFAC — Centro Nacional de Formación Artística y Cultural",
      "Escuela Hondureño-Japonesa",
      "Pedagogía teatral y creatividad",
    ],
  },
]

const skills = [
  {
    name: "Dirección Escénica y Dramaturgia",
    sub: "Biodrama, formatos híbridos, teatro expandido",
    level: 95,
  },
  {
    name: "Teatro de Objetos y Nuevos Medios",
    sub: "Interactividad, videoarte, instalación tecnológica",
    level: 90,
  },
  {
    name: "Colaboración Intercultural",
    sub: "Argentina, Honduras, Perú, Paraguay",
    level: 88,
  },
  {
    name: "Pedagogía Teatral",
    sub: "Formación, talleres, asistencia académica",
    level: 85,
  },
  {
    name: "Idiomas",
    sub: "Español (nativo) · Inglés C1 · Portugués A2",
    level: 80,
  },
]

const awards = [
  {
    year: "2025",
    title: "Selección en festivales internacionales",
    detail: "EEUU, México y Nueva York — por Fragmentos de Existencia",
  },
  {
    year: "2024",
    title: "Selección Festival Ícaro",
    detail: "Por la obra documental Huellas",
  },
  {
    year: "2022–2023",
    title: "Fondos y Subvenciones",
    detail: "MDL (Fondo CAMY) y MUA (Plataforma PAKAS)",
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timeline)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLang()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 py-10 md:py-14 border-b border-[#3D2314]"
    >
      {/* Indicador lateral */}
      <div className="hidden md:flex md:col-span-1 justify-center pt-1.5">
        {item.isCurrent ? (
          <span className="w-2 h-2 bg-[#08F7FE] animate-pulse shrink-0" />
        ) : (
          <span className="w-2 h-2 bg-foreground/20 shrink-0" />
        )}
      </div>

      {/* Fecha */}
      <div className="md:col-span-3 pt-0.5">
        <span className="font-mono text-sm tracking-[0.25em] uppercase text-[#08F7FE]">
          {item.period}
        </span>
        {item.isCurrent && (
          <span className="mt-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#08F7FE] animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#08F7FE]/60 uppercase">
              {t.exp_en_curso}
            </span>
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="md:col-span-8">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1 leading-snug">
          {item.role}
        </h3>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
          {item.organization}
        </p>
        <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-5">
          {item.description}
        </p>
        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-muted-foreground/60 tracking-wide font-mono">
              <span className="text-[#3D2314] mt-0.5 shrink-0">—</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-baseline">
        <span className="text-sm text-foreground">{skill.name}</span>
      </div>
      <p className="text-xs text-muted-foreground/60 -mt-1 mb-2">{skill.sub}</p>
      <div className="h-px bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-foreground/40"
        />
      </div>
    </motion.div>
  )
}

export default function ExperienciaPage() {
  const { lang, t } = useLang()

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="min-h-screen bg-background pt-24 pb-20"
    >

      {/* Header */}
      <header className="px-6 md:px-12 lg:px-32 mb-20 md:mb-28">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
          {t.exp_subtitle}
        </p>
        <h1 className="font-display text-3xl md:text-6xl lg:text-8xl font-bold text-foreground mb-8">
          {t.exp_title}
        </h1>
        <div className="max-w-2xl space-y-3">
          <p className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {t.exp_roles}
          </p>
          <p className="font-sans text-lg text-muted-foreground/70 leading-relaxed max-w-xl">
            {t.exp_desc}
          </p>
          <div className="flex gap-6 pt-2 text-xs text-muted-foreground/50 tracking-widest uppercase">
            <span>{t.exp_lugar}</span>
            <span>·</span>
            <span>{t.exp_idiomas}</span>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <section className="px-6 md:px-12 lg:px-32 mb-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
          {t.exp_formacion}
        </p>
        <div className="max-w-5xl">
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-12 lg:px-32 py-16 md:py-24 bg-card">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.exp_practica}
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12">
            {t.exp_disciplinas}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="px-6 md:px-12 lg:px-32 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            {t.exp_reconocimientos}
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12">
            {t.exp_premios}
          </h2>
          <div className="divide-y divide-border/40">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-12 gap-6 py-6 md:py-8"
              >
                <div className="col-span-2 md:col-span-2">
                  <span className="font-mono text-sm tracking-widest text-[#08F7FE]">
                    {award.year}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-10">
                  <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">{award.title}</p>
                  <p className="font-sans text-base text-muted-foreground/70 leading-relaxed">
                    {award.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </motion.div>
  )
}
