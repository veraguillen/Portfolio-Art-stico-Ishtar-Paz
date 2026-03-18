"use client"

import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlitchTextProps extends MotionProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "span"
}

const tagComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span,
}

// Fade editorial suave — entrada sin efectos técnicos
const defaultHover = {
  opacity: 0.75,
  transition: { duration: 0.3, ease: "easeOut" as const },
}

/**
 * EditorialText — Tipografía con entrada suave.
 * Mantiene la API de GlitchText para compatibilidad sin cambios en los
 * archivos que lo usan. El hover ahora es un fade sutil en lugar de glitch RGB.
 */
export function GlitchText({
  children,
  className,
  as = "h1",
  whileHover = defaultHover,
  ...motionProps
}: GlitchTextProps) {
  const Comp = tagComponents[as]

  return (
    <Comp
      className={cn(className)}
      whileHover={whileHover}
      {...motionProps}
    >
      {children}
    </Comp>
  )
}
