"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Instagram } from "lucide-react"
import { useLang } from "@/contexts/lang-context"

type Status = "idle" | "submitting" | "success" | "error"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function ContactoPage() {
  const [status, setStatus] = useState<Status>("idle")
  const { lang, t } = useLang()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      const res = await fetch("https://formspree.io/f/mojkykvk", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      })
      setStatus(res.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      id="contacto"
      className="min-h-screen bg-background"
    >

      {/* ── POÉTICA DE TRABAJO — lidera la sección ──────────────────────────── */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-32">
        <div className="max-w-4xl">

          {/* Label / eyebrow */}
          <motion.p
            className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground mb-8"
            {...fadeUp(0)}
          >
            Contacto
          </motion.p>

          {/* Section title — Instrument Serif */}
          <motion.h1
            className="font-serif text-3xl md:text-5xl text-foreground mb-12 leading-tight"
            {...fadeUp(0.05)}
          >
            {t.contacto_poetica_title}
          </motion.h1>

          {/* Body paragraphs — left oxide border */}
          <div className="border-l border-[#3D2314] pl-8 md:pl-12 space-y-7 max-w-2xl md:ml-16 lg:ml-28">

            <motion.p
              className="font-sans text-lg text-muted-foreground leading-relaxed"
              {...fadeUp(0.15)}
            >
              {t.contacto_poetica_p1}
            </motion.p>

            {/* "el método" — italic serif emphasis */}
            <motion.p
              className="font-serif italic text-lg text-foreground/80 leading-relaxed"
              {...fadeUp(0.2)}
            >
              {t.manifiesto_p2}
            </motion.p>

            <motion.p
              className="font-sans text-lg text-muted-foreground leading-relaxed"
              {...fadeUp(0.25)}
            >
              {t.contacto_poetica_p2}
            </motion.p>

            <motion.p
              className="font-sans text-lg text-muted-foreground leading-relaxed"
              {...fadeUp(0.3)}
            >
              {t.contacto_poetica_p3}
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── CITA DISRUPTIVA — entre Poética y Formulario ────────────────────── */}
      <section className="py-16 px-6 md:px-12 lg:px-32 border-t border-[#3D2314]/40">
        <motion.blockquote
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.contacto_poetica_quote}
        </motion.blockquote>
      </section>

      {/* ── FORMULARIO — el puente hacia la colaboración ────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-32 border-t border-[#3D2314]/40">
        <div className="max-w-2xl">

          {/* Form title — Cormorant Garamond Bold */}
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-[-0.01em]"
            {...fadeUp(0)}
          >
            {t.contacto_form_title}
          </motion.h2>

          <motion.p
            className="font-mono text-xs tracking-[0.2em] text-[#08F7FE] mb-12"
            {...fadeUp(0.05)}
          >
            {t.contacto_form_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {status === "success" ? (
              <div className="border border-[#08F7FE]/30 px-8 py-12 space-y-3">
                <p className="font-mono text-xs tracking-[0.28em] text-muted-foreground/50">
                  {t.contacto_success_label}
                </p>
                <p className="font-mono text-lg md:text-xl tracking-[0.18em] text-[#08F7FE]">
                  {t.contacto_success_msg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block font-mono text-xs tracking-[0.28em] uppercase text-muted-foreground mb-4"
                    >
                      {t.contacto_label_nombre}
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      disabled={status === "submitting"}
                      placeholder={t.contacto_placeholder_nombre}
                      className="w-full bg-transparent border-0 border-b border-[#3D2314] focus:border-[#08F7FE] outline-none px-0 py-3 font-sans italic text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 placeholder:italic transition-colors duration-300 disabled:opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs tracking-[0.28em] uppercase text-muted-foreground mb-4"
                    >
                      {t.contacto_label_email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === "submitting"}
                      placeholder={t.contacto_placeholder_email}
                      className="w-full bg-transparent border-0 border-b border-[#3D2314] focus:border-[#08F7FE] outline-none px-0 py-3 font-sans italic text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 placeholder:italic transition-colors duration-300 disabled:opacity-40"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block font-mono text-xs tracking-[0.28em] uppercase text-muted-foreground mb-4"
                  >
                    {t.contacto_label_mensaje}
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={7}
                    disabled={status === "submitting"}
                    placeholder={t.contacto_placeholder_mensaje}
                    className="w-full bg-transparent border-0 border-b border-[#3D2314] focus:border-[#08F7FE] outline-none px-0 py-3 font-sans italic text-base text-[#F5F5F5] placeholder:text-[#F5F5F5]/30 placeholder:italic transition-colors duration-300 resize-none disabled:opacity-40"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`font-mono font-bold text-xs tracking-[0.3em] uppercase border px-10 py-4 transition-colors duration-300 disabled:cursor-not-allowed ${
                      status === "submitting"
                        ? "border-[#08F7FE]/50 text-[#08F7FE]/70"
                        : "border-[#08F7FE] text-[#08F7FE] hover:bg-[#08F7FE]/5"
                    }`}
                  >
                    {status === "submitting" ? t.contacto_btn_sending : t.contacto_btn_idle}
                  </button>

                  {status === "error" && (
                    <p className="font-mono text-xs tracking-[0.28em] text-[#8B3A3A]">
                      {t.contacto_error_msg}
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── INFO + PROCESO — cierre editorial ───────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 lg:px-32 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact info */}
          <motion.aside
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground/60 mb-6">
              {t.contacto_info_label}
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-foreground/40 mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-1 tracking-widest uppercase">{t.contacto_email_label}</p>
                  <a href="mailto:ishtar.paz@gmail.com" className="text-sm text-foreground hover:text-neon transition-colors">
                    ishtar.paz@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Instagram className="w-4 h-4 text-foreground/40 mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-1 tracking-widest uppercase">{t.contacto_instagram_label}</p>
                  <a
                    href="https://www.instagram.com/ishtarpaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-neon transition-colors"
                  >
                    @ishtarpaz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-foreground/40 mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-1 tracking-widest uppercase">{t.contacto_ubicacion_label}</p>
                  <p className="text-sm text-foreground">{t.contacto_ubicacion}</p>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-[#3D2314]/50">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
                {t.contacto_disponibilidad_label}
              </p>
              <p className="font-mono text-lg text-[#08F7FE] mb-2 tracking-[0.05em]">
                {t.contacto_disponibilidad_periodo}
              </p>
              <p className="font-sans text-base text-foreground leading-relaxed">
                {t.contacto_disponibilidad_texto}
              </p>
            </div>
          </motion.aside>

          {/* Proceso de trabajo */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <p className="font-mono text-xs tracking-[0.35em] uppercase text-muted-foreground/60 mb-8">
              {t.contacto_proceso_title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold text-[#3D2314]/60 leading-none">01</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-4 mb-2">{t.contacto_paso1_title}</h3>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">{t.contacto_paso1_desc}</p>
              </div>
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold text-[#3D2314]/60 leading-none">02</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-4 mb-2">{t.contacto_paso2_title}</h3>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">{t.contacto_paso2_desc}</p>
              </div>
              <div>
                <span className="font-display text-5xl md:text-6xl font-bold text-[#3D2314]/60 leading-none">03</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mt-4 mb-2">{t.contacto_paso3_title}</h3>
                <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">{t.contacto_paso3_desc}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </motion.div>
  )
}
