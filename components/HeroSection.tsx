'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, MapPin, Layers, Trees } from 'lucide-react'

const badges = [
  { icon: MapPin, label: 'Near Marasuru Gate, Bangalore' },
  { icon: Layers, label: '2 Lush Acres · 50+ Villas' },
  { icon: Trees, label: 'RERA Approved · Clear Title' },
]

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gv-dark/70 via-gv-dark/50 to-gv-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-gv-dark/60 via-transparent to-gv-dark/30" />
      </motion.div>

      {/* Animated green orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gv-green-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gv-green-500/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 border border-gv-green-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-gv-green-400 animate-pulse" />
          <span className="text-sm font-medium text-gv-green-300 tracking-wider uppercase">
            Now Launching · Limited Plots Available
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Live Above the</span>
          <br />
          <span className="text-gradient-green">Ordinary</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Green Valley is not just a home — it&apos;s a statement. Masterfully designed 3 &amp; 4 BHK villas
          on premium plots, nestled within 2 acres of curated green landscape, minutes from Bangalore&apos;s pulse.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(22,163,74,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white font-semibold text-base rounded-full transition-all duration-300"
          >
            Reserve Your Villa Now
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 glass border border-white/20 text-white font-semibold text-base rounded-full hover:border-gv-green-400/50 transition-all duration-300"
          >
            Explore Project
          </motion.a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/80"
            >
              <Icon className="w-4 h-4 text-gv-green-400" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
