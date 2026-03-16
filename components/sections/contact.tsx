'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full bg-black section-grain py-6 lg:py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgba(210,230,255,0.07)' }} />

      {/* Blue corner glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(100,160,255,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10" style={{ background: '#d2e6ff', opacity: 0.4 }} />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.5)' }}>
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
            <span style={{ color: '#d2e6ff', fontFamily: 'Noto Serif, serif', fontStyle: 'italic', fontWeight: 400 }}>Touch.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-96 shrink-0 space-y-16"
          >
            <p className="font-serif italic text-[1.05rem] text-white/40 leading-relaxed">
              Direct lines for institutional projects, venture inquiries, and assembly coordination.
            </p>

            <div className="flex flex-col gap-0">
              {[
                { label: 'Institutional Email', value: 'hello@neutronnexus.com', icon: '@' },
                { label: 'Assembly HQ', value: 'Innovation District, Delhi NCR', icon: '◎' },
                { label: 'Event Date', value: '28 March 2026', icon: '◇' },
              ].map((item) => (
                <div key={item.label} className="py-7 border-t flex items-center gap-6" style={{ borderColor: 'rgba(210,230,255,0.07)' }}>
                  <span className="text-[14px] shrink-0 w-6 text-center" style={{ color: 'rgba(210,230,255,0.3)' }}>{item.icon}</span>
                  <div className="space-y-1">
                    <span className="font-outfit text-[9px] uppercase tracking-[0.5em] font-medium block" style={{ color: 'rgba(210,230,255,0.3)' }}>{item.label}</span>
                    <span className="font-serif italic text-[0.95rem] text-white/60">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <span className="font-outfit text-[9px] uppercase tracking-[0.6em] font-medium" style={{ color: 'rgba(210,230,255,0.3)' }}>
                Follow Protocol
              </span>
              <div className="flex gap-5">
                {['Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-outfit text-[9px] uppercase tracking-[0.4em] font-medium transition-colors duration-300 border-b pb-0.5"
                    style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(210,230,255,0.1)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#d2e6ff'; (e.currentTarget as HTMLElement).style.borderColor = '#d2e6ff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(210,230,255,0.1)' }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 border-l pl-0 lg:pl-24"
            style={{ borderColor: 'rgba(210,230,255,0.07)' }}
          >
            <form className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row gap-10">
                <div className="flex-1 flex flex-col gap-3 group">
                  <label className="font-outfit text-[9px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.35)' }}>Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent pb-4 font-outfit text-sm text-white placeholder:text-white/15 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    style={{ borderBottom: '1px solid rgba(210,230,255,0.1)' }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.1)')}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <label className="font-outfit text-[9px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.35)' }}>Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent pb-4 font-outfit text-sm text-white placeholder:text-white/15 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    style={{ borderBottom: '1px solid rgba(210,230,255,0.1)' }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.1)')}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-outfit text-[9px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.35)' }}>Inquiry Brief</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent pb-4 font-serif italic text-sm text-white placeholder:text-white/15 focus:outline-none transition-colors duration-300 resize-none leading-relaxed"
                  placeholder="Describe your objective or inquiry..."
                  style={{ borderBottom: '1px solid rgba(210,230,255,0.1)' }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.4)')}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'rgba(210,230,255,0.1)')}
                />
              </div>

              <button
                type="submit"
                className="group relative self-start flex items-center gap-8 px-10 py-5 overflow-hidden transition-all duration-500 border"
                style={{ borderColor: 'rgba(210,230,255,0.25)', background: 'transparent' }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLElement
                  btn.style.backgroundColor = '#d2e6ff'
                  btn.style.borderColor = '#d2e6ff'
                  btn.querySelectorAll('span').forEach((s) => (s as HTMLElement).style.color = '#080808')
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLElement
                  btn.style.backgroundColor = 'transparent'
                  btn.style.borderColor = 'rgba(210,230,255,0.25)'
                  btn.querySelectorAll('span').forEach((s) => (s as HTMLElement).style.color = '#d2e6ff')
                }}
              >
                <span className="font-outfit font-black text-[11px] uppercase tracking-[0.3em] transition-colors duration-300" style={{ color: '#d2e6ff' }}>
                  Send Inquiry
                </span>
                <span className="font-outfit text-[11px] transition-all duration-300" style={{ color: '#d2e6ff' }}>
                  →
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t pt-8 flex justify-center" style={{ borderColor: 'rgba(210,230,255,0.06)' }}>
          <span className="font-outfit text-[9px] uppercase tracking-[0.7em] font-medium" style={{ color: 'rgba(210,230,255,0.2)' }}>
            Global Communication Protocol Active — Secure Channel
          </span>
        </div>
      </div>
    </section>
  )
}
