'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer, Infosys',
    initial: 'R',
    rating: 5,
    text: "Green Valley exceeded all our expectations. The lush green surroundings and modern villa design are exactly what our family was looking for. The sales team was transparent and the location near Marasuru Gate is incredibly convenient.",
    color: 'from-gv-green-600 to-gv-green-800',
  },
  {
    name: 'Priya Sharma',
    role: 'Doctor, Apollo Hospitals',
    initial: 'P',
    rating: 5,
    text: "We booked our 4 BHK villa at Green Valley and couldn't be happier. The community is thoughtfully planned with excellent amenities. The gated security and green landscape give us peace of mind every single day.",
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Anil Venkatesh',
    role: 'Business Owner, Bangalore',
    initial: 'A',
    rating: 5,
    text: "As an investor, Green Valley is a fantastic opportunity. The strategic location with upcoming STRR and Metro connectivity ensures great appreciation. The project quality and Best Properties' reputation gave me full confidence.",
    color: 'from-gv-gold-500 to-amber-700',
  },
  {
    name: 'Sunita Reddy',
    role: 'IT Manager, Wipro',
    initial: 'S',
    rating: 5,
    text: "After years of searching, Green Valley is truly our dream come true. Premium amenities, beautiful landscape, and the villa design is just stunning. The entire buying process was smooth and transparent.",
    color: 'from-purple-600 to-purple-800',
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section ref={ref} className="section-padding bg-gv-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gv-green-500/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gv-green-500" />
            <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <div className="w-8 h-px bg-gv-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            What Our{' '}
            <span className="text-gradient-green">Residents Say</span>
          </motion.h2>
        </div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-dark rounded-3xl p-8 md:p-12 border border-gv-green-900/30 relative"
            >
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-gv-green-700 absolute top-8 right-8 opacity-50" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gv-gold-400 fill-gv-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-light">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonials[current].color} rounded-full flex items-center justify-center text-white font-bold text-xl font-display flex-shrink-0`}>
                  {testimonials[current].initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{testimonials[current].name}</p>
                  <p className="text-white/50 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-2 bg-gv-green-500'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-gv-green-500/40 text-white hover:text-gv-green-400 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-gv-green-500/40 text-white hover:text-gv-green-400 transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {testimonials.map(({ name, initial, color }, i) => (
            <motion.button
              key={name}
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              whileHover={{ y: -3 }}
              className={`glass p-4 rounded-2xl border transition-all duration-300 text-left ${
                i === current ? 'border-gv-green-500/50 bg-gv-green-900/10' : 'border-white/8 hover:border-white/20'
              }`}
            >
              <div className={`w-9 h-9 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-bold text-sm mb-2`}>
                {initial}
              </div>
              <p className="text-white text-sm font-medium">{name}</p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-gv-gold-400 fill-gv-gold-400" />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
