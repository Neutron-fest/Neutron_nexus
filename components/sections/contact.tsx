'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              Assembly Inquiries
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight"
          >
            Get in<br />
            <span className="font-serif italic font-normal text-white/25">Touch.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-96 shrink-0 space-y-16"
          >
            <p className="font-serif italic text-[1.05rem] text-white/40 leading-relaxed">
              Direct lines for institutional partnerships, venture inquiries, and assembly coordination.
            </p>

            <div className="flex flex-col gap-0">
              {[
                { label: 'Institutional Email', value: 'hello@neutronnexus.com' },
                { label: 'Assembly HQ', value: 'Innovation District, Delhi NCR' },
                { label: 'Event Date', value: '28 March 2026' },
              ].map((item) => (
                <div key={item.label} className="py-7 border-t border-white/[0.05] space-y-2">
                  <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/20 font-medium block">{item.label}</span>
                  <span className="font-serif italic text-[0.95rem] text-white/60">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 border-l border-white/[0.05] pl-0 lg:pl-24"
          >
            <form className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 flex flex-col gap-3 group">
                  <label className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 pb-4 font-outfit text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/40 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <label className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 pb-4 font-outfit text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/40 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium">Inquiry Brief</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-b border-white/10 pb-4 font-serif italic text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/40 transition-colors duration-300 resize-none leading-relaxed"
                  placeholder="Describe your objective or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="group relative self-start flex items-center gap-8 bg-white px-10 py-5 overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[#080808] border border-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="relative z-10 font-outfit font-black text-[11px] uppercase tracking-[0.3em] text-[#080808] group-hover:text-white transition-colors duration-300">
                  Send Inquiry
                </span>
                <span className="relative z-10 font-outfit text-[11px] text-[#080808] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex justify-center">
          <span className="font-outfit text-[9px] uppercase tracking-[0.7em] text-white/15 font-medium">
            Global Communication Protocol Active — Secure Channel
          </span>
        </div>
      </div>
    </section>
  )
}
