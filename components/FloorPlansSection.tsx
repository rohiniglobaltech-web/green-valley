'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Home, Maximize2, Bath, BedDouble, ChevronRight, Trees } from 'lucide-react'

const plans = [
  {
    id: '3bhk-villa',
    label: '3 BHK Villa',
    tag: 'Most Popular',
    tagColor: 'bg-gv-green-500',
    icon: Home,
    size: '1,800 – 2,200 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    floors: 'G + 1',
    garden: 'Private Garden',
    price: '₹1.2 Cr onwards',
    highlights: [
      'Grand double-height living room',
      'Modular kitchen with utility area',
      'Master bedroom with walk-in wardrobe',
      'Private garden & sit-out area',
      'Dedicated parking for 2 cars',
    ],
    // SVG floor plan representation — simplified blueprint style
    rooms: [
      { label: 'Living Room', w: 140, h: 100, x: 10, y: 10, color: 'bg-gv-green-900/40 border-gv-green-600/30' },
      { label: 'Kitchen', w: 80, h: 80, x: 160, y: 10, color: 'bg-amber-900/30 border-amber-600/30' },
      { label: 'Bed 1 (Master)', w: 120, h: 90, x: 10, y: 120, color: 'bg-blue-900/30 border-blue-600/30' },
      { label: 'Bed 2', w: 100, h: 90, x: 140, y: 120, color: 'bg-purple-900/30 border-purple-600/30' },
      { label: 'Bed 3', w: 80, h: 80, x: 10, y: 220, color: 'bg-rose-900/30 border-rose-600/30' },
      { label: 'Dining', w: 80, h: 60, x: 100, y: 220, color: 'bg-cyan-900/30 border-cyan-600/30' },
      { label: 'Garden', w: 240, h: 50, x: 10, y: 310, color: 'bg-gv-green-950/50 border-gv-green-700/30' },
    ],
  },
  {
    id: '4bhk-villa',
    label: '4 BHK Villa',
    tag: 'Premium',
    tagColor: 'bg-gv-gold-500',
    icon: Home,
    size: '2,800 – 3,400 sq ft',
    bedrooms: 4,
    bathrooms: 4,
    floors: 'G + 2',
    garden: 'Terrace + Garden',
    price: '₹2.1 Cr onwards',
    highlights: [
      'Double-height foyer with chandelier space',
      'Home theatre / study room',
      'All bedrooms ensuite with balcony',
      'Rooftop terrace with panoramic views',
      'Dedicated parking for 3 cars',
    ],
    rooms: [
      { label: 'Living Room', w: 160, h: 110, x: 10, y: 10, color: 'bg-gv-green-900/40 border-gv-green-600/30' },
      { label: 'Kitchen', w: 90, h: 80, x: 180, y: 10, color: 'bg-amber-900/30 border-amber-600/30' },
      { label: 'Dining', w: 80, h: 60, x: 180, y: 100, color: 'bg-cyan-900/30 border-cyan-600/30' },
      { label: 'Bed 1 (Master)', w: 130, h: 95, x: 10, y: 130, color: 'bg-blue-900/30 border-blue-600/30' },
      { label: 'Bed 2', w: 110, h: 95, x: 150, y: 130, color: 'bg-purple-900/30 border-purple-600/30' },
      { label: 'Bed 3', w: 120, h: 90, x: 10, y: 235, color: 'bg-rose-900/30 border-rose-600/30' },
      { label: 'Bed 4 / Study', w: 110, h: 90, x: 140, y: 235, color: 'bg-indigo-900/30 border-indigo-600/30' },
      { label: 'Terrace', w: 260, h: 45, x: 10, y: 335, color: 'bg-gv-green-950/50 border-gv-green-700/30' },
    ],
  },
  {
    id: 'plot-30x40',
    label: 'Plot 30×40',
    tag: 'Affordable',
    tagColor: 'bg-sky-500',
    icon: Maximize2,
    size: '1,200 sq ft (plot)',
    bedrooms: 0,
    bathrooms: 0,
    floors: 'Build Your Own',
    garden: 'As per design',
    price: '₹45 L onwards',
    highlights: [
      'Build your dream home your way',
      'BBMP & DC approved layout',
      'All underground utilities provided',
      '24/7 security for gated plots',
      'Clear title and RERA approved',
    ],
    rooms: [
      { label: '30 ft (Width)', w: 260, h: 30, x: 10, y: 10, color: 'bg-sky-900/30 border-sky-600/30' },
      { label: 'Buildable Area', w: 260, h: 240, x: 10, y: 50, color: 'bg-gv-green-900/20 border-gv-green-600/20' },
      { label: '40 ft (Depth)', w: 30, h: 240, x: 240, y: 50, color: 'bg-sky-900/30 border-sky-600/30' },
      { label: 'Front Setback (5 ft)', w: 200, h: 35, x: 10, y: 300, color: 'bg-amber-900/20 border-amber-600/20' },
    ],
  },
  {
    id: 'plot-40x60',
    label: 'Plot 40×60',
    tag: 'Best Value',
    tagColor: 'bg-orange-500',
    icon: Maximize2,
    size: '2,400 sq ft (plot)',
    bedrooms: 0,
    bathrooms: 0,
    floors: 'Build Your Own',
    garden: 'Ample space',
    price: '₹72 L onwards',
    highlights: [
      'Extra-large plot for spacious villa',
      'Corner plots available (limited)',
      'BBMP & DC approved layout',
      'Dual entrance possible',
      'Ideal for duplex / G+2 construction',
    ],
    rooms: [
      { label: '40 ft (Width)', w: 260, h: 30, x: 10, y: 10, color: 'bg-orange-900/30 border-orange-600/30' },
      { label: 'Buildable Area', w: 260, h: 280, x: 10, y: 50, color: 'bg-gv-green-900/20 border-gv-green-600/20' },
      { label: '60 ft (Depth)', w: 30, h: 280, x: 240, y: 50, color: 'bg-orange-900/30 border-orange-600/30' },
      { label: 'Front Setback', w: 200, h: 30, x: 10, y: 340, color: 'bg-amber-900/20 border-amber-600/20' },
    ],
  },
]

export default function FloorPlansSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const plan = plans[active]

  return (
    <section id="floorplans" ref={ref} className="section-padding bg-gv-dark-3 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gv-green-900/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gv-green-500" />
            <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">Floor Plans</span>
            <div className="w-8 h-px bg-gv-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Choose Your{' '}
            <span className="text-gradient-green">Perfect Home</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-2xl mx-auto"
          >
            Explore our range of thoughtfully designed villas and plots — each crafted for modern, comfortable living.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {plans.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === i
                  ? 'bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white border-gv-green-500 shadow-lg shadow-gv-green-900/40'
                  : 'glass border-white/10 text-white/60 hover:text-white hover:border-white/25'
              }`}
            >
              {p.label}
              {active === i && (
                <motion.span
                  layoutId="tab-dot"
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gv-gold-400 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            {/* Left: Blueprint Floor Plan */}
            <div className="glass-dark rounded-3xl p-6 border border-gv-green-900/30">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-semibold text-lg font-display">{plan.label} — Layout</h3>
                <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${plan.tagColor}`}>
                  {plan.tag}
                </span>
              </div>

              {/* Blueprint grid */}
              <div className="relative bg-gv-dark rounded-2xl border border-white/5 overflow-hidden p-3" style={{ height: '400px' }}>
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
                <div className="absolute inset-3">
                  {plan.rooms.map((room, i) => (
                    <motion.div
                      key={room.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      className={`absolute border rounded-md flex items-center justify-center text-center ${room.color}`}
                      style={{ left: room.x, top: room.y, width: room.w, height: room.h }}
                    >
                      <span className="text-white/70 text-[10px] font-medium leading-tight px-1">{room.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { color: 'bg-gv-green-900/60', label: 'Living' },
                  { color: 'bg-blue-900/50', label: 'Bedroom' },
                  { color: 'bg-amber-900/50', label: 'Kitchen' },
                  { color: 'bg-purple-900/50', label: 'Guest Bed' },
                  { color: 'bg-gv-green-950/70', label: 'Outdoor' },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className={`w-3 h-3 rounded-sm ${color} border border-white/20`} />
                    <span className="text-white/40 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-5">
              {/* Price & Size */}
              <div className="glass-dark rounded-2xl p-6 border border-gv-green-900/30">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-white/50 text-sm mb-1">Starting Price</p>
                    <p className="font-display text-3xl font-bold text-gradient-green">{plan.price}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-xl text-white text-sm font-bold ${plan.tagColor}`}>
                    {plan.tag}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Maximize2, label: 'Super Builtup', value: plan.size },
                    { icon: Home, label: 'Floors', value: plan.floors },
                    ...(plan.bedrooms > 0 ? [
                      { icon: BedDouble, label: 'Bedrooms', value: `${plan.bedrooms} BHK` },
                      { icon: Bath, label: 'Bathrooms', value: `${plan.bathrooms} Baths` },
                    ] : []),
                    { icon: Trees, label: 'Outdoor', value: plan.garden },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                      <div className="w-8 h-8 bg-gv-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gv-green-400" />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs">{label}</p>
                        <p className="text-white text-sm font-semibold">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="glass-dark rounded-2xl p-6 border border-gv-green-900/30">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gv-green-400" />
                  Key Highlights
                </h4>
                <ul className="space-y-2.5">
                  {plan.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight className="w-4 h-4 text-gv-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(22,163,74,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                Book This Unit
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
