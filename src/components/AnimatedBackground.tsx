'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  animationDuration: number
  delay: number
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Create stars
    const newStars: Star[] = []
    for (let i = 0; i < 200; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        animationDuration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      })
    }
    setStars(newStars)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Nebula background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      
      {/* Animated nebula clouds */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          background: [
            'radial-gradient(600px at 20% 30%, #3b82f610 0%, transparent 50%)',
            'radial-gradient(600px at 80% 70%, #8b5cf610 0%, transparent 50%)',
            'radial-gradient(600px at 40% 80%, #ec489910 0%, transparent 50%)',
            'radial-gradient(600px at 20% 30%, #3b82f610 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Shooting stars */}
      <motion.div
        className="absolute top-1/4 left-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-transparent rounded-full"
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [0, 200]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeOut"
        }}
        style={{
          boxShadow: '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 80px #3b82f6'
        }}
      />

      <motion.div
        className="absolute top-3/4 left-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
        animate={{
          x: [-100, window.innerWidth + 100],
          y: [0, -150]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeOut",
          delay: 2
        }}
        style={{
          boxShadow: '0 0 15px #8b5cf6, 0 0 30px #8b5cf6, 0 0 60px #8b5cf6'
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Large floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [-20, 20, -20],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [20, -20, 20],
          y: [15, -15, 15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-24 h-24 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 4
        }}
      />
    </div>
  )
}