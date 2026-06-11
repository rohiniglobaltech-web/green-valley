'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gv-green-500/60 focus:bg-white/8 transition-all duration-300'

  return (
    <section id="contact" ref={ref} className="section-padding bg-gv-dark-3 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gv-green-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-gv-green-500" />
            <span className="text-gv-green-400 text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
            <div className="w-8 h-px bg-gv-green-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Book Your Plot at{' '}
            <span className="text-gradient-green">Green Valley</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl mx-auto"
          >
            Limited plots available. Fill out the form and our team will reach you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Clubhouse image */}
            <div className="relative rounded-2xl overflow-hidden h-52 green-glow">
              <Image src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80" alt="Green Valley Clubhouse" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gv-dark/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-semibold">Premium Clubhouse</p>
                <p className="text-white/60 text-sm">Exclusive for residents</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="glass-dark rounded-2xl p-6 border border-gv-green-900/30 space-y-5">
              <h3 className="text-white font-semibold text-lg">Contact Information</h3>

              <a href="tel:+918088001199" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-gv-green-900/50 rounded-xl flex items-center justify-center group-hover:bg-gv-green-800/50 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-gv-green-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Call Us</p>
                  <p className="text-white font-medium">+91 808 800 1199</p>
                </div>
              </a>

              <a href="mailto:info@bestproperties.co" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-gv-green-900/50 rounded-xl flex items-center justify-center group-hover:bg-gv-green-800/50 transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-gv-green-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email Us</p>
                  <p className="text-white font-medium">info@bestproperties.co</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gv-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-gv-green-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Office</p>
                  <p className="text-white font-medium text-sm leading-relaxed">4th Floor, RK Towers, No. 30/A, 14th Cross Rd, Sector 6, HSR Layout, Bengaluru – 560102</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 glass-dark rounded-3xl border border-gv-green-500/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-gv-green-900/50 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-gv-green-400" />
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-white/60 text-lg max-w-sm">
                  We&apos;ve received your inquiry. Our team will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-dark rounded-3xl p-8 border border-gv-green-900/30 space-y-5"
              >
                <h3 className="font-display text-2xl font-bold text-white mb-2">Request a Callback</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 99999 99999"
                      className={inputClass}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Interested In</label>
                  <select className={inputClass + ' cursor-pointer'}>
                    <option value="">Select property type</option>
                    <option value="3bhk">3 BHK Villa</option>
                    <option value="4bhk">4 BHK Villa</option>
                    <option value="30x40">Plot 30×40</option>
                    <option value="40x60">Plot 40×60</option>
                    <option value="site-visit">Schedule Site Visit</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/50 text-xs mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className={inputClass + ' resize-none'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-2 p-3 bg-gv-green-900/20 rounded-xl border border-gv-green-800/30">
                  <AlertCircle className="w-4 h-4 text-gv-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/50 text-xs leading-relaxed">
                    Limited plots available. Book early to secure your preferred unit. Our team will contact you within 24 hours.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(22,163,74,0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-gv-green-600 to-gv-green-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 disabled:opacity-70 transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
