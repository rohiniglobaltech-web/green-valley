'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Shield, Dumbbell, Waves, TreePine, Car, Wifi,
  Sun, Users, Baby, Zap, Flower2, Camera,
} from 'lucide-react'

const amenities = [
  { icon: Waves, label: 'Swimming Pool', color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/20', text: 'text-blue-400' },
  { icon: Dumbbell, label: 'Modern Gym', color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/20', text: 'text-orange-400' },
  { icon: TreePine, label: 'Landscaped Gardens', color: 'from-gv-green-500/20 to-gv-green-600/10', border: 'border-gv-green-500/20', text: 'text-gv-green-400' },
  { icon: Shield, label: '24/7 Security', color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/20', text: 'text-purple-400' },
  { icon: Car, label: 'Covered Parking', color: 'from-slate-500/20 to-slate-600/10', border: 'border-slate-500/20', text: 'text-slate-400' },
  { icon: Wifi, label: 'High-Speed Internet', color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  { icon: Sun, label: 'Solar Energy', color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/20', text: 'text-yellow-400' },
  { icon: Users, label: 'Clubhouse', color: 'from-pink-500/20 to-pink-600/10', border: 'border-pink-500/20', text: 'text-pink-400' },
  { icon: Baby, label: "Children's Play Area", color: 'from-lime-500/20 to-lime-600/10', border: 'border-lime-500/20', text: 'text-lime-400' },
  { icon: Zap, label: '24/7 Power Backup', color: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/20', text: 'text-amber-400' },
  { icon: Flower2, label: 'Jogging Track', color: 'from-rose-500/20 to-rose-600/10', border: 'border-rose-500/20', text: 'text-rose-400' },
  { icon: Camera, label: 'CCTV Surveillance', color: 'from-indigo-500/20 to-indigo-600/10', border: 'border-indigo-500/20', text: 'text-indigo-400' },
]

const stats = [
  { value: '2+', label: 'Acres of Green' },
  { value: '50+', label: 'Premium Villas' },
  { value: '12+', label: 'World-Class Amenities' },
  { value: '100%', label: 'RERA Approved' },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="features" className="section-padding bg-gv-dark relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gv-green-900/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gv-green-500" />
            <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">Lifestyle Amenities</span>
            <div className="w-8 h-px bg-gv-green-500" />
          </motion.div>
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Everything You Need,{' '}
            <span className="text-gradient-green">All in One Place</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-lg max-w-2xl mx-auto"
          >
            Green Valley offers a curated collection of world-class amenities designed to elevate
            your everyday living experience.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-dark rounded-2xl p-6 text-center border border-gv-green-900/30"
            >
              <p className="font-display text-4xl font-bold text-gradient-green mb-1">{value}</p>
              <p className="text-white/50 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {amenities.map(({ icon: Icon, label, color, border, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`relative glass rounded-2xl p-5 border ${border} hover:bg-white/5 transition-all duration-300 cursor-default group`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${text}`} />
              </div>
              <h4 className="text-white text-sm font-semibold leading-snug">{label}</h4>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
