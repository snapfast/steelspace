'use client'

import { motion } from 'framer-motion'

export default function GalaxyBackground() {

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Single galaxy container - no individual star animations */}
      <motion.div
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          transform: 'perspective(1000px) rotateX(80deg)',
          transformOrigin: 'center center'
        }}
        animate={{ rotateZ: [0, 360] }}
        transition={{ 
          duration: 600, 
          repeat: Infinity, 
          ease: "linear",
          type: "tween" // More performant than spring
        }}
      >
        {/* Central bulge - single element */}
        <div
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '15vw',
            height: '9vw',
            background: 'radial-gradient(ellipse, rgba(255, 165, 0, 0.6) 0%, rgba(255, 140, 0, 0.4) 40%, rgba(255, 69, 0, 0.2) 70%, transparent 100%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Spiral arms - CSS only, no JS animations */}
        <div
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
            mask: 'radial-gradient(ellipse, transparent 8%, black 15%, black 85%, transparent 95%)',
            animation: 'spin 400s linear infinite'
          }}
        />

        {/* Dark dust lanes - CSS only */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              conic-gradient(from 15deg at center,
                transparent 0deg,
                rgba(0, 0, 0, 0.5) 25deg,
                transparent 35deg,
                transparent 145deg,
                rgba(0, 0, 0, 0.4) 160deg,
                transparent 170deg,
                transparent 195deg,
                rgba(0, 0, 0, 0.5) 205deg,
                transparent 215deg,
                transparent 325deg,
                rgba(0, 0, 0, 0.4) 340deg,
                transparent 350deg
              )
            `,
            mask: 'radial-gradient(ellipse, transparent 10%, black 18%, black 80%, transparent 90%)',
            animation: 'spin 420s linear infinite'
          }}
        />

        {/* Static star field - no individual animations */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.8) 0px, transparent 2px),
              radial-gradient(circle at 80% 20%, rgba(135, 206, 235, 0.6) 0px, transparent 1px),
              radial-gradient(circle at 60% 80%, rgba(255, 215, 0, 0.7) 0px, transparent 2px),
              radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.5) 0px, transparent 1px),
              radial-gradient(circle at 90% 60%, rgba(176, 196, 222, 0.6) 0px, transparent 1px),
              radial-gradient(circle at 10% 80%, rgba(255, 165, 0, 0.7) 0px, transparent 2px),
              radial-gradient(circle at 70% 10%, rgba(255, 255, 255, 0.6) 0px, transparent 1px),
              radial-gradient(circle at 40% 40%, rgba(135, 206, 235, 0.5) 0px, transparent 1px),
              radial-gradient(circle at 85% 90%, rgba(255, 215, 0, 0.6) 0px, transparent 2px),
              radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.7) 0px, transparent 1px)
            `,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 250px 250px, 350px 350px, 450px 450px, 280px 280px, 320px 320px, 380px 380px, 200px 200px'
          }}
        />

        {/* Additional star layers for density */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4) 0px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(135, 206, 235, 0.4) 0px, transparent 1px),
              radial-gradient(circle at 50% 10%, rgba(255, 215, 0, 0.5) 0px, transparent 1px),
              radial-gradient(circle at 90% 40%, rgba(255, 255, 255, 0.3) 0px, transparent 1px),
              radial-gradient(circle at 10% 60%, rgba(176, 196, 222, 0.4) 0px, transparent 1px),
              radial-gradient(circle at 65% 90%, rgba(255, 165, 0, 0.5) 0px, transparent 1px)
            `,
            backgroundSize: '200px 200px, 180px 180px, 220px 220px, 160px 160px, 240px 240px, 190px 190px'
          }}
        />

        {/* Star-forming regions - simplified */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-40"
          style={{
            left: 'calc(50% + 15vw)',
            top: 'calc(50% + 3vw)',
            background: 'radial-gradient(circle, rgba(135, 206, 235, 0.6) 0%, transparent 70%)',
            filter: 'blur(15px)'
          }}
        />
        <div
          className="absolute w-24 h-24 rounded-full opacity-30"
          style={{
            left: 'calc(50% - 18vw)',
            top: 'calc(50% - 2vw)',
            background: 'radial-gradient(circle, rgba(176, 196, 222, 0.5) 0%, transparent 70%)',
            filter: 'blur(12px)'
          }}
        />
        <div
          className="absolute w-28 h-28 rounded-full opacity-35"
          style={{
            left: 'calc(50% + 8vw)',
            top: 'calc(50% - 4vw)',
            background: 'radial-gradient(circle, rgba(135, 206, 235, 0.5) 0%, transparent 70%)',
            filter: 'blur(14px)'
          }}
        />

        {/* Galactic plane */}
        <div
          className="absolute left-0 right-0 opacity-30"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(255, 215, 0, 0.6) 20%, rgba(255, 165, 0, 0.8) 50%, rgba(255, 215, 0, 0.6) 80%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* Simplified background starfield - no animation */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.3) 0px, transparent 1px),
            radial-gradient(circle at 85% 25%, rgba(255, 255, 255, 0.2) 0px, transparent 1px),
            radial-gradient(circle at 35% 85%, rgba(255, 255, 255, 0.4) 0px, transparent 1px),
            radial-gradient(circle at 75% 65%, rgba(255, 255, 255, 0.2) 0px, transparent 1px),
            radial-gradient(circle at 25% 55%, rgba(255, 255, 255, 0.3) 0px, transparent 1px),
            radial-gradient(circle at 95% 85%, rgba(255, 255, 255, 0.2) 0px, transparent 1px),
            radial-gradient(circle at 5% 35%, rgba(255, 255, 255, 0.3) 0px, transparent 1px),
            radial-gradient(circle at 55% 5%, rgba(255, 255, 255, 0.2) 0px, transparent 1px)
          `,
          backgroundSize: '800px 800px, 600px 600px, 900px 900px, 500px 500px, 700px 700px, 400px 400px, 650px 650px, 550px 550px'
        }}
      />

      {/* Moving light rays for shine effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute w-full h-1 top-1/4"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
            filter: 'blur(2px)',
            transform: 'rotate(15deg)'
          }}
        />
        <div
          className="absolute w-full h-1 top-3/4"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(135, 206, 235, 0.5) 50%, transparent 100%)',
            filter: 'blur(2px)',
            transform: 'rotate(-15deg)'
          }}
        />
      </motion.div>

      {/* Diagonal shine sweeps */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, transparent 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)',
            'linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.1) 50%, transparent 75%, rgba(255, 255, 255, 0.1) 100%, transparent 125%)',
            'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 25%, transparent 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sparkle effects */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(-45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />




      {/* Content readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      {/* Add CSS keyframes for rotation and shimmer */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}