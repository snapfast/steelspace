'use client'

import { motion } from 'framer-motion'

export default function CleanNavbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
          >
            <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Rocket body - wider */}
              <rect x="16" y="8" width="8" height="16" fill="white" rx="1"/>
              
              {/* Rocket nose cone - wider */}
              <path d="M16 8 L20 4 L24 8 Z" fill="white"/>
              
              {/* Rocket fins - adjusted for wider body */}
              <path d="M16 20 L14 24 L16 22 Z" fill="white"/>
              <path d="M24 20 L26 24 L24 22 Z" fill="white"/>
              
              {/* Rocket flame/exhaust - wider */}
              <path d="M18 24 L20 28 L22 24" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              
              {/* Text - SteelSpace */}
              <text x="35" y="20" fill="white" fontSize="18" fontFamily="Nunito, sans-serif" fontWeight="700">SteelSpace</text>
            </svg>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Product', 'Services', 'About us', 'Research', 'Business'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-white text-sm font-inter font-medium transition-colors"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-inter font-medium text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}