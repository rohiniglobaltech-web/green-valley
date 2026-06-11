'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock, BadgeCheck } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gv-green-900/80 via-gv-dark to-gv-dark-2" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.2)',
      }} />

      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gv-green-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gv-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-gv-gold-500/30 mb-6"
        >
          <Clock className="w-4 h-4 text-gv-gold-400" />
          <span className="text-gv-gold-300 text-sm font-medium">Limited Time Offer — Early Bird Pricing</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Don&apos;t Miss Your Chance to Own a{' '}
          <span className="text-gradient-green">Piece of Green Valley</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg mb-8 max-w-2xl mx-auto"
        >
          Limited plots are available in this lush, secure, and well-connected community.
          Secure your dream home today before prices rise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {['No Hidden Charges', 'RERA Approved', 'Transparent Process'].map((label) => (
            <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
              <BadgeCheck className="w-4 h-4 text-gv-green-400" />
              {label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, boxShadow: '0 25px 50px rgba(22,163,74,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="group px-10 py-5 bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white font-bold text-base rounded-full flex items-center gap-3 transition-all duration-300"
          >
            Book a Site Visit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="tel:+918088001199"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-5 glass border border-white/20 text-white font-semibold text-base rounded-full hover:border-gv-green-400/50 transition-all duration-300"
          >
            Call: +91 808 800 1199
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
