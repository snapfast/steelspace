'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-russo bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 tracking-widest">
              STEELSPACE
            </h3>
            <p className="text-gray-400 leading-relaxed font-electrolize">
              Pioneering the future of space exploration with cutting-edge technology and unmatched expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-russo text-white mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2">
              {['Deep Space Exploration', 'Stellar Mapping', 'Cosmic Research', 'Mission Control'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors font-electrolize">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-russo text-white mb-4 tracking-wider">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors font-electrolize">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-russo text-white mb-4 tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', icon: '𝕏' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'GitHub', icon: '🐙' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400"
        >
          <p className="font-share-tech text-sm tracking-wider">&copy; 2024 STEELSPACE. ALL RIGHTS RESERVED. EXPLORING THE COSMOS TOGETHER.</p>
        </motion.div>
      </div>
    </footer>
  )
}