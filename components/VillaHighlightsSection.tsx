'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import {
  Sparkles, Compass, Leaf, Crown, Lock, SunMedium, BarChart2, Hammer
} from 'lucide-react'

const pillars = [
  {
    icon: Crown,
    title: 'Architectural Excellence',
    desc: 'Every villa at Green Valley is a blend of timeless elegance and contemporary design — double-height ceilings, Italian marble floors, teak wood accents, and expansive glass facades that blur the boundary between indoors and nature.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    stat: '3,400 sq ft',
    statLabel: 'Max Villa Size',
  },
  {
    icon: Leaf,
    title: 'Breathe. Live. Thrive.',
    desc: "70% of Green Valley's land is open, landscaped, and alive. Tree-lined boulevards, a curated botanical garden, reflexology walkways, and a central park make every morning walk an experience in itself.",
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80',
    stat: '70%',
    statLabel: 'Green Cover',
  },
  {
    icon: SunMedium,
    title: 'Sustainable Luxury',
    desc: 'Green Valley is engineered for the future. Solar-powered common areas, EV charging in every parking bay, rainwater harvesting, and an in-built sewage treatment plant — luxury that gives back to the planet.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    stat: '100%',
    statLabel: 'Solar Powered Commons',
  },
  {
    icon: BarChart2,
    title: 'Smart Investment',
    desc: 'With STRR, Bengaluru–Chennai Expressway, and Namma Metro Yellow Line all converging near Green Valley, property values in this corridor are projected to appreciate 18–25% over the next 5 years. Invest early. Invest smart.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    stat: '25%+',
    statLabel: 'Projected Appreciation',
  },
]

const specs = [
  { icon: Hammer, label: 'Structure', value: 'RCC Framed — Zone II Seismic Compliant' },
  { icon: Compass, label: 'Walls', value: 'AAC Blocks — Superior Thermal Insulation' },
  { icon: Sparkles, label: 'Flooring', value: 'Italian Marble (Living) · Vitrified (Bedrooms)' },
  { icon: Lock, label: 'Doors', value: 'Teak Wood Frame · Laminated Veneer Shutters' },
  { icon: SunMedium, label: 'Windows', value: 'UPVC Double-Glazed — Noise & Heat Resistant' },
  { icon: Leaf, label: 'Kitchen', value: 'Granite Platform · SS Sink · Modular Cabinets' },
  { icon: Crown, label: 'Bathroom', value: 'Premium Sanitaryware · Anti-Skid Tiles' },
  { icon: BarChart2, label: 'Electrical', value: '5-Star Switches · Concealed Copper Wiring' },
]

export default function VillaHighlightsSection() {
  const ref = useRef(null)
  const specsRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const specsInView = useInView(specsRef, { once: true, margin: '-80px' })

  return (
    <section id="villa" ref={ref} className="bg-gv-dark relative overflow-hidden">
      {/* ---- PILLARS ---- */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-gv-green-500" />
              <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">
                Why Green Valley
              </span>
              <div className="w-8 h-px bg-gv-green-500" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Four Pillars of{' '}
              <span className="text-gradient-green">Extraordinary Living</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/55 text-lg max-w-2xl mx-auto"
            >
              Green Valley is built on four uncompromising promises — each one setting a new standard
              for villa living in Bangalore.
            </motion.p>
          </div>

          {/* Alternating layout */}
          <div className="space-y-20">
            {pillars.map(({ icon: Icon, title, desc, image, stat, statLabel }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}
              >
                {/* Text side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gv-green-600/30 to-gv-green-800/20 rounded-2xl flex items-center justify-center border border-gv-green-700/30">
                      <Icon className="w-7 h-7 text-gv-green-400" />
                    </div>
                    <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">
                      0{i + 1} / 04
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    {title}
                  </h3>

                  <p className="text-white/60 text-lg leading-relaxed">{desc}</p>

                  {/* Stat card */}
                  <div className="inline-flex items-center gap-4 glass-dark px-6 py-4 rounded-2xl border border-gv-green-800/30">
                    <div>
                      <p className="font-display text-3xl font-bold text-gradient-green">{stat}</p>
                      <p className="text-white/50 text-sm">{statLabel}</p>
                    </div>
                    <div className="w-px h-10 bg-gv-green-800/50" />
                    <p className="text-white/40 text-xs max-w-[120px] leading-relaxed">
                      Exclusive to Green Valley residents
                    </p>
                  </div>
                </div>

                {/* Image side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl overflow-hidden h-[360px] green-glow"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gv-dark/50 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 glass px-3 py-1.5 rounded-full border border-white/10">
                    <span className="text-white/80 text-xs font-medium">{title}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- VILLA SPECIFICATIONS ---- */}
      <div ref={specsRef} className="bg-gv-dark-2 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-gv-green-500" />
              <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">
                Construction Specifications
              </span>
              <div className="w-8 h-px bg-gv-green-500" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl font-bold text-white"
            >
              Premium Materials.{' '}
              <span className="text-gradient-green">No Compromises.</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={specsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass-dark rounded-2xl p-5 border border-gv-green-900/30 hover:border-gv-green-600/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gv-green-900/50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gv-green-400" />
                </div>
                <p className="text-gv-green-400 text-xs font-semibold tracking-wider uppercase mb-1">
                  {label}
                </p>
                <p className="text-white/80 text-sm leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
