'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: "Deep Space Exploration",
    description: "Advanced propulsion systems and navigation technology for unprecedented cosmic journeys.",
    icon: "🚀",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Stellar Mapping",
    description: "Precision star charting and astronomical data analysis for navigation and research.",
    icon: "🌟",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cosmic Research",
    description: "Cutting-edge scientific instruments for discovering new phenomena in space.",
    icon: "🔬",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Mission Control",
    description: "24/7 monitoring and support systems for safe space operations and communications.",
    icon: "📡",
    gradient: "from-orange-500 to-red-500"
  }
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-black/30 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 h-full hover:border-cyan-400/40 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20">
        <motion.div
          className={`text-6xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {feature.icon}
        </motion.div>
        
        <h3 className="text-2xl font-russo text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-wider">
          {feature.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors font-electrolize">
          {feature.description}
        </p>

        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          whileHover={{ opacity: 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-russo mb-6 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent tracking-widest">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-electrolize leading-relaxed">
            Pioneering the future of space exploration with advanced technology and unmatched expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </motion.div>
    </section>
  )
}