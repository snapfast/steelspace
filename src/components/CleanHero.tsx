'use client'

import { motion } from 'framer-motion'

export default function CleanHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Content overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-nunito font-bold text-white mb-8 leading-tight"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Maximize Your<br />
            <span className="text-gray-300">Space's Potential</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Offer your users secure and reliable returns through integrate 
            highly yield capabilities int your product.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(16, 185, 129, 0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-inter font-semibold text-base hover:bg-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-600/25"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-gray-300 font-inter font-medium text-base px-8 py-3.5 hover:text-white transition-colors flex items-center gap-2"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Optional: Add some subtle visual element here if needed */}
      </div>

      {/* Clean background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-gray-600 rounded-full opacity-40"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-30"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-1 h-1 bg-gray-600 rounded-full opacity-50"
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </div>
    </section>
  )
}