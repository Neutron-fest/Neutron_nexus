'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    index: '01',
    title: 'Accelerated Validation',
    description: 'Our framework verifies commercial viability at speed. From hypothesis to demonstration in a single high-stakes day.',
  },
  {
    index: '02',
    title: 'Executive Network',
    description: 'Direct access to a curated circle of mentors, operators, and early-stage capital — connections that act as force multipliers.',
  },
  {
    index: '03',
    title: 'Standard of Excellence',
    description: 'Every project meets a rigorous criteria of innovation and execution. We define the standard for the next generation of builders.',
  },
]

const stats = [
  { label: 'Active Ventures', value: '44+' },
  { label: 'Industry Nodes', value: '12+' },
  { label: 'Tracks', value: '08+' },
  { label: 'Network', value: '100%' },
]

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.pillars-wrapper', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-wrapper', start: 'top 85%' },
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute right-0 top-10 font-outfit font-black text-[22vw] text-white/[0.018] uppercase select-none leading-none"
        >
          VISION
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-28">
        <div className="flex flex-col gap-16" ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              Assembly Briefing
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight shrink-0"
            >
              The Scale<br />
              <span className="font-serif italic font-normal text-white/25">of Ambition.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-md space-y-5 border-l border-white/6 pl-10"
            >
              <p className="font-serif italic text-[1.1rem] text-white/45 leading-relaxed">
                Neutron Nexus is not merely an event — it is a high-fidelity assembly. We merge the raw agility of a startup foundry with the strategic reach of a global launchpad.
              </p>
              <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/20 block font-medium">
                Strategic Objective 2026
              </span>
            </motion.div>
          </div>
        </div>

        <div className="pillars-wrapper flex flex-col gap-0">
          {pillars.map((p) => (
            <div
              key={p.index}
              className="pillar-card group flex flex-col lg:flex-row gap-8 py-12 border-t border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              <span className="font-serif italic text-[11px] text-white/20 pt-1 shrink-0 w-16">{p.index}</span>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 flex-1">
                <h3 className="font-outfit font-black text-[1.4rem] text-white uppercase tracking-tight leading-tight shrink-0 w-64 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="font-serif italic text-[0.95rem] text-white/35 leading-relaxed lg:max-w-lg">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-wrapper flex flex-col sm:flex-row gap-0 border-t border-white/5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-item flex-1 py-12 pr-12 border-r border-white/5 last:border-r-0 space-y-3"
            >
              <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium block">{s.label}</span>
              <span className="font-outfit font-black text-[clamp(2rem,5vw,3.5rem)] text-white leading-none">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
