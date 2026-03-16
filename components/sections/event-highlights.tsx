'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  { index: '01', label: 'Incentive', title: '₹10K Prize Pool', description: 'Substantial capital injections for top-performing ventures selected by the expert panel.' },
  { index: '02', label: 'Network', title: 'Expert Mentorship', description: 'Direct interaction with industry leaders, successful operators, and seasoned builders.' },
  { index: '03', label: 'Execution', title: '12-Hour Sprint', description: 'A high-intensity building environment engineered for rapid prototyping under pressure.' },
  { index: '04', label: 'Standard', title: 'Venture Ready', description: 'Every outcome is designed for immediate commercial scalability and investor readiness.' },
  { index: '05', label: 'Protocol', title: 'IP Security', description: 'Rigorous standards for protecting the founder vision, architecture, and creative logic.' },
  { index: '06', label: 'Scale', title: 'Global Reach', description: 'Integration into worldwide innovation networks, venture nodes, and startup ecosystems.' },
]

export default function EventHighlights() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.highlight-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.highlights-list', start: 'top 80%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="highlights"
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
              Key Advantages
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight"
          >
            Assembly<br />
            <span className="font-serif italic font-normal text-white/25">Highlights.</span>
          </motion.h2>
        </div>

        <div className="highlights-list flex flex-col">
          {highlights.map((item) => (
            <div
              key={item.index}
              className="highlight-row group flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 border-t border-white/[0.05] hover:border-white/10 transition-all duration-500 cursor-default"
            >
              <div className="flex items-start gap-10 sm:w-80 shrink-0">
                <span className="font-serif italic text-[11px] text-white/20 pt-1 w-8 shrink-0">{item.index}</span>
                <div className="space-y-1">
                  <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 block font-medium">{item.label}</span>
                  <h3 className="font-outfit font-black text-[1.2rem] text-white uppercase tracking-tight group-hover:text-white transition-colors leading-tight">{item.title}</h3>
                </div>
              </div>
              <p className="font-serif italic text-[0.92rem] text-white/35 leading-relaxed sm:max-w-lg sm:pt-5">
                {item.description}
              </p>
              <div className="hidden sm:flex items-center ml-auto text-white/10 group-hover:text-white/40 transition-colors duration-500 self-center text-xl">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
