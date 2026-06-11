'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Train, Plane, School, Hospital, ShoppingBag, Clock } from 'lucide-react'

const locations = [
  { icon: Train, label: 'Bangalore Metro', distance: '5 km', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Plane, label: 'Kempegowda Airport', distance: '35 km', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  { icon: School, label: 'Top Schools Nearby', distance: '2 km', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
  { icon: Hospital, label: 'Hospitals', distance: '3 km', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: ShoppingBag, label: 'Shopping Malls', distance: '4 km', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
  { icon: MapPin, label: 'Marasuru Gate', distance: '0.5 km', color: 'text-gv-green-400', bg: 'bg-gv-green-500/10 border-gv-green-500/20' },
]

const highways = [
  { name: 'STRR – Satellite Town Ring Road (NH-948A)', desc: 'Upcoming ring road significantly boosting connectivity around Bangalore.' },
  { name: 'Bengaluru–Chennai Expressway', desc: "To be inaugurated soon — a game changer for South India's connectivity." },
  { name: 'Namma Metro Yellow Line', desc: 'Nearing completion, reducing city travel time dramatically.' },
]

export default function LocationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" ref={ref} className="section-padding bg-gv-dark-2 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gv-green-900/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gv-green-500" />
            <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">Location & Connectivity</span>
            <div className="w-8 h-px bg-gv-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Perfectly <span className="text-gradient-green">Located</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto"
          >
            Near Marasuru Gate, Bangalore — the perfect blend of accessibility and tranquility
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[420px] glass-dark border border-gv-green-900/30">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.178!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) saturate(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Valley Location Map"
              />
              {/* Location pin overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gv-green-500 to-gv-green-700 rounded-full flex items-center justify-center green-glow shadow-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-2 h-6 bg-gv-green-600 rounded-b-full mx-auto" />
                </motion.div>
              </div>

              {/* Location badge */}
              <div className="absolute bottom-6 left-6 glass-dark px-4 py-3 rounded-xl border border-gv-green-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-gv-green-400" />
                  <span className="text-white font-semibold text-sm">Green Valley</span>
                </div>
                <p className="text-white/50 text-xs">Near Marasuru Gate, Bangalore</p>
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <div className="space-y-6">
            {/* Distance grid */}
            <div className="grid grid-cols-2 gap-3">
              {locations.map(({ icon: Icon, label, distance, color, bg }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`flex items-center gap-3 p-4 rounded-xl border ${bg} transition-all duration-300`}
                >
                  <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{label}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-white/40" />
                      <span className="text-white/45 text-xs">{distance}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming highways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-dark rounded-2xl p-6 border border-gv-green-900/30"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gv-green-400 animate-pulse" />
                Upcoming Infrastructure
              </h3>
              <div className="space-y-4">
                {highways.map(({ name, desc }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gv-green-500 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-white/45 text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
