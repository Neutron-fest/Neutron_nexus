'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const navLinks = [
  { label: 'Assembly Vision', href: '#vision' },
  { label: 'Key Advantages', href: '#highlights' },
  { label: 'Advisory Panel', href: '#panel' },
  { label: 'Active Ventures', href: '#grid' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-[#0a0a0a] section-grain pt-36 pb-14 px-6 lg:px-20 overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute -bottom-20 left-1/2 -translate-x-1/2 font-outfit font-black text-[32vw] text-white/[0.018] uppercase select-none leading-none tracking-tighter">
          NEXUS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-28">
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-40">
          <div className="lg:max-w-md space-y-12">
            <div className="space-y-3">
              <h2 className="font-outfit font-black text-[2rem] tracking-tight uppercase text-white leading-tight">
                Neutron Nexus
              </h2>
              <p className="font-serif italic text-[11px] text-white/25 tracking-[0.15em]">
                Innovation Assembly — 2026 Cycle
              </p>
            </div>

            <p className="font-serif italic text-[1rem] text-white/35 leading-relaxed max-w-sm">
              The high-fidelity assembly floor for startup founders. Bridging ingenuity with global industrial scale.
            </p>

            <div className="flex flex-col gap-0 border-t border-white/[0.05] pt-10 max-w-xs">
              {[
                { label: 'Regional Node', value: 'Delhi NCR — India' },
                { label: 'Protocol', value: 'Assembly v4.0 Active' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-5 border-b border-white/[0.04]">
                  <span className="font-outfit text-[9px] uppercase tracking-[0.4em] text-white/20 font-medium">{item.label}</span>
                  <span className="font-serif italic text-[12px] text-white/45">{item.value}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => window.open(SUBMISSION_URL, '_blank')}
              className="group relative flex items-center gap-8 bg-white px-10 py-5 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="relative z-10 font-outfit font-black text-[11px] uppercase tracking-[0.3em] text-[#0a0a0a] group-hover:text-white transition-colors duration-300">
                Submit Project
              </span>
              <span className="relative z-10 font-outfit text-[11px] text-[#0a0a0a] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </div>

          <div className="space-y-10">
            <span className="font-outfit text-[10px] uppercase tracking-[0.6em] text-white/20 font-medium block">
              Strategic Directives
            </span>
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNav(link.href)}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.05] hover:border-white/15 transition-all duration-300 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif italic text-[10px] text-white/20">0{i + 1}</span>
                    <span className="font-outfit font-semibold text-[12px] text-white/40 group-hover:text-white/90 transition-colors duration-300 uppercase tracking-[0.15em]">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-white/10 group-hover:text-white/40 transition-colors duration-300">→</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-10 flex flex-col sm:flex-row justify-between items-center gap-7">
          <p className="font-outfit text-[9px] text-white/18 uppercase tracking-[0.4em] font-medium">
            © 2026 Neutron Nexus — All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 opacity-30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              <span className="font-outfit text-[9px] uppercase tracking-[0.3em] text-white font-medium">System Live</span>
            </div>
            <span className="font-serif italic text-[11px] text-white/15 select-none">Where Ideas Collide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
