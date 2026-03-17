'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error: any) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage(error.message || 'Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-black section-grain py-24 lg:py-48 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgba(210,230,255,0.07)' }} />
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
            className="font-outfit font-black text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] text-white uppercase tracking-tight"
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
            <p className="font-serif italic text-lg text-white/50 leading-relaxed border-l border-[#d2e6ff]/20 pl-8">
              Direct lines for institutional projects, venture inquiries, and assembly coordination.
            </p>

            <div className="flex flex-col gap-0">
              {[
                { label: 'Institutional Email', value: 'startx.ru@newtonschool.co', icon: '@' },
                { label: 'Assembly HQ', value: 'Innovation District, Delhi NCR', icon: '◎' },
                { label: 'Event Date', value: '28 March 2026', icon: '◇' },
              ].map((item) => (
                <div key={item.label} className="py-7 border-t flex items-center gap-6" style={{ borderColor: 'rgba(210,230,255,0.07)' }}>
                  <span className="text-[14px] shrink-0 w-6 text-center" style={{ color: 'rgba(210,230,255,0.4)' }}>{item.icon}</span>
                  <div className="space-y-1">
                    <span className="font-outfit text-[10px] uppercase tracking-[0.4em] font-medium block" style={{ color: 'rgba(210,230,255,0.4)' }}>{item.label}</span>
                    <span className="font-serif italic text-base text-white/70">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-outfit text-[10px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.4)' }}>
                Follow Protocol
              </span>
              <div className="flex gap-5">
                {['Twitter', 'LinkedIn', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-outfit text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 border-b pb-1"
                    style={{ color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(210,230,255,0.1)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#d2e6ff'; (e.currentTarget as HTMLElement).style.borderColor = '#d2e6ff' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(210,230,255,0.1)' }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 border border-white/5 rounded-2xl p-8 lg:p-12 backdrop-blur-sm"
          >
            <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4 group">
                  <label className="font-outfit text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d2e6ff]/50 group-focus-within:text-[#d2e6ff] transition-colors">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="w-full border border-white/10 rounded-lg px-6 py-4 font-outfit text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d2e6ff]/40 focus:bg-white/8 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 group">
                  <label className="font-outfit text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d2e6ff]/50 group-focus-within:text-[#d2e6ff] transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="w-full border border-white/10 rounded-lg px-6 py-4 font-outfit text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d2e6ff]/40 focus:bg-white/8 transition-all duration-300"
                      placeholder="e.g. your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <label className="font-outfit text-[10px] uppercase tracking-[0.4em] font-semibold text-[#d2e6ff]/50 group-focus-within:text-[#d2e6ff] transition-colors">
                  Inquiry Brief
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-white/10 rounded-lg px-6 py-4 font-serif italic text-base text-white placeholder:text-white/20 focus:outline-none focus:border-[#d2e6ff]/40 focus:bg-white/8 transition-all duration-300 resize-none leading-relaxed"
                    placeholder="Briefly describe your objective or inquiry..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative self-start flex items-center gap-10 px-12 py-5 overflow-hidden transition-all duration-500 rounded-full border border-[#d2e6ff]/20 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#d2e6ff] hover:bg-[#d2e6ff]"
                >
                  <span className="relative z-10 font-outfit font-black text-[11px] uppercase tracking-[0.4em] text-[#d2e6ff] group-hover:text-black transition-colors duration-300">
                    {status === 'loading' ? 'Sending Protocol...' : status === 'success' ? 'Inquiry Sent' : 'Send Inquiry'}
                  </span>
                  <span className="relative z-10 font-outfit text-[11px] text-[#d2e6ff] group-hover:text-black transition-all duration-300">
                    {status === 'success' ? '✓' : '→'}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#d2e6ff]/0 via-[#d2e6ff]/10 to-[#d2e6ff]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-outfit text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: '#d2e6ff' }}
                  >
                    Your transmission has been received. Expect contact shortly.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-outfit text-[10px] uppercase tracking-[0.2em] text-red-400"
                  >
                    {errorMessage || 'Transmission failed. Please re-attempt.'}
                  </motion.p>
                )}
              </div>
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
