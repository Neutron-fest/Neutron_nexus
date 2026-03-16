'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const StrategicCard = ({
  title,
  description,
  index
}: {
  title: string;
  description: string;
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="group relative flex flex-col gap-6 p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-sm"
  >
    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] text-white/20 tracking-[0.4em] uppercase">Executive Pillar // 0{index + 1}</span>
      <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors duration-500" />
    </div>
    <div className="space-y-4">
      <h3 className="font-orbitron font-extrabold text-xl tracking-tight text-white uppercase italic">{title}</h3>
      <p className="text-[13px] leading-relaxed text-white/40 font-light">
        {description}
      </p>
    </div>
    <div className="absolute top-0 right-0 w-12 h-px bg-white/0 group-hover:bg-white/20 transition-all duration-700" />
    <div className="absolute top-0 right-0 w-px h-12 bg-white/0 group-hover:bg-white/20 transition-all duration-700" />
  </motion.div>
)

const StatDetail = ({ label, value, index }: { label: string; value: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 + (index * 0.1), duration: 1 }}
    className="flex flex-col gap-2 py-8 border-t border-white/5"
  >
    <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/20">{label}</span>
    <span className="font-orbitron text-3xl font-black text-white">{value}</span>
  </motion.div>
)

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10" />
        <motion.div
          style={{ y }}
          className="absolute -right-10 top-20 text-[25vw] font-black text-white/[0.02] font-orbitron italic select-none"
        >
          VISION
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-32">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="h-px w-16 bg-white/40" />
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">Assembly Briefing</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
              <h2 className="font-orbitron font-black text-5xl lg:text-8xl leading-[0.95] text-white uppercase italic tracking-tighter">
                The Scale of <br />
                <span className="text-white/20">Ambition.</span>
              </h2>
              <div className="space-y-6 border-l border-white/5 pl-12">
                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                  Neutron Nexus is not just an event; it is a high-fidelity assembly. We merge the raw agility of a startup foundry with the strategic reach of a global launchpad.
                </p>
                <div className="flex items-center gap-4 text-white/20">
                  <span className="font-mono text-[10px] uppercase tracking-widest font-black">Strategic Objective 2026.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <StrategicCard
            index={0}
            title="Accelerated Validation"
            description="Our framework is designed to verify commercial viability at speed. Moving from hypothesis to demonstration in a single, high-stakes day."
          />
          <StrategicCard
            index={1}
            title="Executive Network"
            description="Direct access to a curated circle of mentors, operators, and early-stage capital. We provide the connections that act as force multipliers."
          />
          <StrategicCard
            index={2}
            title="Standard of Excellence"
            description="Every project on the floor meets a rigorous criteria of innovation and execution. We set the bar for the next generation of building."
          />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatDetail index={0} label="Active Ventures" value="44+" />
          <StatDetail index={1} label="Industry Nodes" value="12+" />
          <StatDetail index={2} label="Operational Tracks" value="08+" />
          <StatDetail index={3} label="Global Network" value="100%" />
        </div>

        {/* Footer Subtle Detail */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 opacity-30">
          <div className="flex items-center gap-4">
            <div className="w-1 h-1 bg-white" />
            <span className="font-mono text-[9px] text-white uppercase tracking-[0.5em]">Delhi_NCR Node // Operational Zone</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] text-white uppercase tracking-[0.5em]">Assembly Protocol v4.0</span>
            <div className="w-1 h-1 bg-white" />
          </div>
        </div>

      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-20 w-px h-full bg-white/[0.02] hidden lg:block" />
      <div className="absolute top-0 right-20 w-px h-full bg-white/[0.02] hidden lg:block" />
    </section>
  )
}
