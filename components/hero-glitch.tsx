"use client"

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

export function HeroGlitch({ children, className, ...motionProps }: HeroGlitchProps) {
  return (
    <motion.h1
      className={cn("hero-glitch cursor-default", className)}
      whileHover={glitchHover}
      {...motionProps}
    >
      {children}
    </motion.h1>
  )
}
