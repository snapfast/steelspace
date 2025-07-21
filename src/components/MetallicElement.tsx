'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  brightness: number
  color: string
  distance: number
  angle: number
  radius: number
  armIndex: number
}

export default function MetallicElement() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Generate realistic Milky Way structure
  const galaxyData = useMemo(() => {
    const stars: Star[] = []
    const centerX = 250
    const centerY = 250
    
    // Realistic star colors for different galactic regions
    const youngStarColors = ['#87CEEB', '#E0E6FF', '#F0F8FF', '#FFFFFF'] // Blue-white young stars
    const oldStarColors = ['#FFD700', '#FFA500', '#FF6347', '#CD853F'] // Yellow-red old stars
    const bulgeColors = ['#FFA500', '#FF8C00', '#FF6347', '#DC143C'] // Orange-red bulge stars

    // Generate 2 prominent spiral arms (like real Milky Way)
    for (let arm = 0; arm < 2; arm++) {
      const armAngle = arm * Math.PI // 180 degrees apart
      const starsInArm = 1500

      for (let i = 0; i < starsInArm; i++) {
        const t = i / starsInArm
        const radius = 30 + t * 200
        
        // Create logarithmic spiral like real galaxy
        const spiralTightness = 0.4
        const angle = armAngle + t * Math.PI * 3 + Math.log(radius / 30) * spiralTightness
        
        // Add some randomness to make it natural
        const finalAngle = angle + (Math.random() - 0.5) * 0.6
        const finalRadius = radius + (Math.random() - 0.5) * 25
        
        const x = centerX + Math.cos(finalAngle) * finalRadius
        const y = centerY + Math.sin(finalAngle) * finalRadius * 0.3 // Flatten galaxy view
        
        // Skip if outside bounds
        if (x < 0 || x > 500 || y < 0 || y > 500) continue
        
        const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        const normalizedDistance = Math.min(distanceFromCenter / 200, 1)
        
        // Star formation regions (blue) vs older regions (yellow/red)
        const isStarFormingRegion = Math.random() < 0.3 && normalizedDistance > 0.3
        const starColor = isStarFormingRegion 
          ? youngStarColors[Math.floor(Math.random() * youngStarColors.length)]
          : oldStarColors[Math.floor(Math.random() * oldStarColors.length)]
        
        // Higher density in spiral arms
        if (Math.random() < 0.85) {
          stars.push({
            id: stars.length,
            x,
            y,
            size: Math.random() * 2 + 0.5,
            brightness: Math.random() * 0.8 + 0.3,
            color: starColor,
            distance: normalizedDistance,
            angle: finalAngle,
            radius: finalRadius,
            armIndex: arm
          })
        }
      }
    }

    // Central bulge - dense, older stars
    for (let i = 0; i < 2000; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.pow(Math.random(), 2) * 60 // Concentrated distribution
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius * 0.7 // Slightly flattened bulge
      
      stars.push({
        id: stars.length,
        x,
        y,
        size: Math.random() * 1.5 + 0.4,
        brightness: Math.random() * 0.7 + 0.4,
        color: bulgeColors[Math.floor(Math.random() * bulgeColors.length)],
        distance: 0,
        angle: angle,
        radius: radius,
        armIndex: -1
      })
    }

    // Outer halo stars - sparse, old
    for (let i = 0; i < 400; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 180 + Math.random() * 100
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius * 0.4
      
      if (x >= 0 && x <= 500 && y >= 0 && y <= 500) {
        stars.push({
          id: stars.length,
          x,
          y,
          size: Math.random() * 1 + 0.3,
          brightness: Math.random() * 0.4 + 0.2,
          color: '#FFA500',
          distance: 1,
          angle: angle,
          radius: radius,
          armIndex: -2
        })
      }
    }

    return { stars }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-[500px] h-[500px] mx-auto overflow-hidden">
      {/* Galaxy container with perspective */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `perspective(800px) rotateX(${75 + mousePos.y * 0.1}deg) rotateY(${mousePos.x * 0.2}deg)`
        }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        {/* Central bulge glow */}
        <motion.div
          className="absolute w-32 h-24 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse, rgba(255, 165, 0, 0.8) 0%, rgba(255, 140, 0, 0.6) 40%, rgba(255, 69, 0, 0.4) 70%, transparent 100%)',
            filter: 'blur(6px)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Spiral arm structure overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              conic-gradient(from 0deg at center,
                transparent 0deg,
                rgba(135, 206, 235, 0.3) 30deg,
                transparent 60deg,
                transparent 120deg,
                rgba(135, 206, 235, 0.2) 150deg,
                transparent 180deg,
                rgba(135, 206, 235, 0.3) 210deg,
                transparent 240deg,
                transparent 300deg,
                rgba(135, 206, 235, 0.2) 330deg,
                transparent 360deg
              )
            `,
            mask: 'radial-gradient(ellipse, transparent 12%, black 20%, black 80%, transparent 90%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 280, repeat: Infinity, ease: "linear" }}
        />

        {/* Dark dust lanes */}
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              conic-gradient(from 15deg at center,
                transparent 0deg,
                rgba(0, 0, 0, 0.7) 25deg,
                transparent 35deg,
                transparent 145deg,
                rgba(0, 0, 0, 0.6) 160deg,
                transparent 170deg,
                transparent 195deg,
                rgba(0, 0, 0, 0.7) 205deg,
                transparent 215deg,
                transparent 325deg,
                rgba(0, 0, 0, 0.6) 340deg,
                transparent 350deg
              )
            `,
            mask: 'radial-gradient(ellipse, transparent 15%, black 25%, black 75%, transparent 85%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 320, repeat: Infinity, ease: "linear" }}
        />

        {/* Star-forming regions (bright blue areas) */}
        {[
          { angle: 45, distance: 120, size: 40 },
          { angle: 135, distance: 80, size: 30 },
          { angle: 225, distance: 100, size: 35 },
          { angle: 315, distance: 90, size: 25 },
        ].map((region, i) => (
          <motion.div
            key={`hii-${i}`}
            className="absolute rounded-full"
            style={{
              left: 250 + Math.cos((region.angle * Math.PI) / 180) * region.distance - region.size / 2,
              top: 250 + Math.sin((region.angle * Math.PI) / 180) * region.distance * 0.3 - region.size / 2,
              width: region.size,
              height: region.size,
              background: 'radial-gradient(circle, rgba(135, 206, 235, 0.8) 0%, rgba(176, 196, 222, 0.5) 50%, transparent 80%)',
              filter: 'blur(4px)'
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}

        {/* Main galaxy stars */}
        {galaxyData.stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: star.x - star.size / 2,
              top: star.y - star.size / 2,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              opacity: star.brightness,
              boxShadow: `0 0 ${star.size * 4}px ${star.color}60`
            }}
            animate={{
              opacity: [star.brightness * 0.7, star.brightness, star.brightness * 0.7],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              opacity: {
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              },
              scale: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }
            }}
          />
        ))}

        {/* Central supermassive black hole */}
        <motion.div
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #000000 0%, #1a1a1a 50%, transparent 100%)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,1)'
          }}
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Galactic plane enhancement */}
        <motion.div
          className="absolute left-0 right-0 h-1 opacity-30"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(to right, transparent 0%, rgba(255, 215, 0, 0.4) 20%, rgba(255, 165, 0, 0.6) 50%, rgba(255, 215, 0, 0.4) 80%, transparent 100%)'
          }}
          animate={{
            scaleX: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Outer spiral structure */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              conic-gradient(from 0deg at center,
                transparent 0deg,
                rgba(255, 255, 255, 0.3) 15deg,
                transparent 45deg,
                transparent 135deg,
                rgba(255, 255, 255, 0.2) 150deg,
                transparent 180deg,
                rgba(255, 255, 255, 0.3) 195deg,
                transparent 225deg,
                transparent 315deg,
                rgba(255, 255, 255, 0.2) 330deg,
                transparent 360deg
              )
            `,
            mask: 'radial-gradient(ellipse, transparent 70%, black 80%, transparent 95%)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
        />

        {/* Subtle background nebulosity */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            background: 'radial-gradient(ellipse 60% 30% at center, rgba(255, 182, 193, 0.3) 0%, rgba(221, 160, 221, 0.2) 40%, transparent 80%)'
          }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Subtle cosmic rays from galactic center */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`cosmic-ray-${i}`}
          className="absolute w-px bg-gradient-to-t from-transparent via-yellow-200/20 to-transparent"
          style={{
            height: '120%',
            left: '50%',
            top: '-10%',
            transformOrigin: '50% 60%',
            transform: `rotate(${i * 60}deg)`
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleY: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}