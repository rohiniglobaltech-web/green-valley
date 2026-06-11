'use client'

import { motion } from 'framer-motion'
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const quickLinks = ['About', 'Features', 'Gallery', 'Location', 'Contact']
const properties = ['3 BHK Villas', '4 BHK Villas', '30×40 Plots', '40×60 Plots', 'Row Villas']

export default function Footer() {
  return (
    <footer className="bg-gv-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gv-green-500 to-gv-green-700 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-xl text-white block">Green</span>
                <span className="font-display font-bold text-xl text-gradient-green block">Valley</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium villas and plots near Marasuru Gate, Bangalore. Where nature meets luxury living for modern families.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-white/8 hover:border-gv-green-500/40 text-white/50 hover:text-gv-green-400 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 text-sm hover:text-gv-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gv-green-600 group-hover:bg-gv-green-400 transition-colors duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-white font-semibold mb-5">Properties</h4>
            <ul className="space-y-3">
              {properties.map((p) => (
                <li key={p}>
                  <a
                    href="#contact"
                    className="text-white/50 text-sm hover:text-gv-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gv-green-600 group-hover:bg-gv-green-400 transition-colors duration-300" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+918088001199" className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-gv-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors duration-300">+91 808 800 1199</span>
              </a>
              <a href="mailto:info@bestproperties.co" className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-gv-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors duration-300">info@bestproperties.co</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gv-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">4th Floor, RK Towers, HSR Layout, Bengaluru – 560102</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Green Valley by Best Properties. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-300">RERA Details</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
