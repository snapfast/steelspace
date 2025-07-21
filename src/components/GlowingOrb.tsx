'use client'

import { motion } from 'framer-motion'

interface GlowingOrbProps {
  size: number
  color: string
  x: string
  y: string
  delay?: number
}

export default function GlowingOrb({ size, color, x, y, delay = 0 }: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} blur-2xl pointer-events-none`}
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.3, 0.1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
}