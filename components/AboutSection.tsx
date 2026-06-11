'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Home, Maximize2, Trees, Star, Award, ShieldCheck, Leaf } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  {
    icon: Home,
    label: '3 & 4 BHK Villas',
    desc: 'Double-height ceilings, Italian marble flooring, and floor-to-ceiling glass — designed for the discerning few.',
  },
  {
    icon: Maximize2,
    label: '30×40 & 40×60 Plots',
    desc: 'Spacious villa plots with full freedom to architect your personal paradise, your way.',
  },
  {
    icon: Trees,
    label: '70% Open Green Space',
    desc: 'Over 70% of the 2-acre township is dedicated to parks, water features, and curated landscape.',
  },
  {
    icon: Star,
    label: 'Luxury Clubhouse',
    desc: 'Infinity pool, state-of-the-art gym, party hall, co-working space and rooftop lounge.',
  },
]

const checkPoints = [
  'Grand double-height living rooms with premium finishes',
  'Private garden & landscaped sit-out for every villa',
  'Solar-powered gated township — sustainable luxury',
  'CCTV + biometric security — 24/7 peace of mind',
  'RERA registered & clear BDA-approved title',
  'Designed by award-winning architects',
  'Rainwater harvesting & sewage treatment plant',
  'EV charging points in every parking bay',
]

const awards = [
  { icon: Award, label: 'RERA Approved', sub: 'Fully Registered' },
  { icon: ShieldCheck, label: 'Clear Title', sub: 'BDA Layout' },
  { icon: Leaf, label: 'Green Certified', sub: 'Eco Community' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" ref={ref} className="section-padding bg-gv-dark-2 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gv-green-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gv-gold-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-gv-green-500" />
          <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">About the Project</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Crafted for Those Who{' '}
              <span className="text-gradient-green">Refuse to Compromise</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/65 text-lg leading-relaxed mb-4"
            >
              Green Valley isn&apos;t merely a residential project — it&apos;s a curated lifestyle township where
              architecture meets nature in perfect harmony. Every villa is a private sanctuary: expansive living
              spaces, premium imported finishes, and a personal garden — all within a secure, green-canopied community.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/55 text-base leading-relaxed mb-8"
            >
              Positioned strategically near Marasuru Gate with unmatched connectivity to Bangalore&apos;s IT corridors,
              airports, and top schools — Green Valley is the address your family deserves.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {awards.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl border border-gv-green-800/40">
                  <Icon className="w-4 h-4 text-gv-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-white/40 text-[10px]">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.ul
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="space-y-2.5 mb-10"
            >
              {checkPoints.map((point) => (
                <motion.li key={point} variants={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gv-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/75 text-sm">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(22,163,74,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white font-semibold rounded-full"
            >
              Schedule a Private Site Visit
            </motion.a>
          </div>

          {/* Right: Image + highlight cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden green-glow"
            >
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Green Valley Premium Villa"
                width={700}
                height={500}
                className="w-full h-[440px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gv-dark/70 via-transparent to-transparent" />

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-6 glass px-5 py-3 rounded-2xl border border-white/10"
              >
                <p className="text-gv-gold-400 font-bold text-2xl font-display">70%</p>
                <p className="text-white/60 text-xs">Open Green Spaces</p>
              </motion.div>

              {/* Top right badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-6 right-6 glass px-4 py-3 rounded-2xl border border-gv-green-500/30"
              >
                <p className="text-white font-bold text-xl font-display">50+</p>
                <p className="text-white/60 text-xs">Premium Villas</p>
              </motion.div>
            </motion.div>

            {/* Highlight cards grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-4 mt-4"
            >
              {highlights.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-dark rounded-2xl p-4 border border-gv-green-900/30 hover:border-gv-green-500/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-8 h-8 bg-gv-green-900/60 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-gv-green-400" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">{label}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
