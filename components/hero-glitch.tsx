"use client"

import { useState } from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroGlitchProps extends MotionProps {
  children: React.ReactNode
  className?: string
}

const glitchHover = {
  x: [-1, 1, -1, 0],
  skewX: [-0.5, 0.5, 0],
  transition: {
    duration: 0.35,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
  },
}

const shadowSteps = [
  "-2px 0 rgba(8,247,254,0.8), 2px 0 rgba(255,0,85,0.55)",
  "2px 0 rgba(8,247,254,0.8), -2px 0 rgba(255,0,85,0.55)",
  "-1px 0 rgba(8,247,254,0.6), 1px 0 rgba(255,0,85,0.4)",
  "1px 0 rgba(8,247,254,0.5), -1px 0 rgba(255,0,85,0.3)",
]

export function HeroGlitch({ children, className, ...motionProps }: HeroGlitchProps) {
  const [hovered, setHovered] = useState(false)
  const [step, setStep] = useState(0)

  const handleHoverStart = () => {
    setHovered(true)
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % shadowSteps.length)
    }, 90)
    ;(handleHoverStart as any)._interval = interval
  }

  const handleHoverEnd = () => {
    setHovered(false)
    clearInterval((handleHoverStart as any)._interval)
    setStep(0)
  }

  return (
    <motion.h1
      className={cn("hero-glitch cursor-default", className)}
      style={{
        textShadow: hovered ? shadowSteps[step] : "none",
        isolation: "isolate",
      }}
      whileHover={glitchHover}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      {...motionProps}
    >
      {children}
    </motion.h1>
  )
}
