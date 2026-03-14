'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Info, Activity, Target, Zap, Cpu, Globe, Layers, Shield } from 'lucide-react'

// --- Advanced About Components ---

const ArchitecturalCard = ({
  title,
  description,
  icon: Icon,
  index
}: {
  title: string;
  description: string;
  icon: any;
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative flex flex-col gap-6 p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-500/30 transition-all rounded-sm"
  >
    <div className="flex items-center justify-between">
      <div className="h-10 w-10 border border-cyan-500/20 flex items-center justify-center bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <span className="text-[10px] font-mono text-slate-700 group-hover:text-cyan-500/40 transition-colors font-bold tracking-widest uppercase">Protocol_0{index + 1}</span>
    </div>
    <div className="space-y-3">
      <h3 className="font-orbitron font-black text-lg tracking-widest text-white uppercase italic">{title}</h3>
      <p className="text-[12px] leading-relaxed text-slate-500 uppercase font-mono tracking-tighter">
        {description}
      </p>
    </div>
    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-white/10 group-hover:border-cyan-500/40 transition-colors" />
  </motion.div>
)

const MetricPlate = ({
  label,
  value,
  suffix = "",
  delay = 0
}: {
  label: string;
  value: string | number;
  suffix?: string;
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1 }}
    className="flex flex-col gap-2 p-6 border-l border-white/5"
  >
    <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.4em]">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className="text-5xl font-black font-orbitron text-white">{value}</span>
      <span className="text-xl font-bold text-cyan-500">{suffix}</span>
    </div>
  </motion.div>
)

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen w-full bg-[#020306] py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* --- Section Background Architecture --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        {/* Large Decorative Watermark */}
        <motion.span
          style={{ y: y1, rotate }}
          className="absolute -right-20 top-40 text-[20vw] font-black text-white/[0.015] font-orbitron italic select-none"
        >
          ARCHIVE
        </motion.span>
        {/* Fine background grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #0ea5e908 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24 font-sans">

        {/* --- Top Header: The Identity Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-20 bg-cyan-500" />
              <span className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.8em] font-black">Genesis Information</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <h2 className="font-orbitron font-black text-5xl lg:text-8xl leading-none text-white uppercase italic">
                The Future Is <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2.5px rgba(255,255,255,0.1)' }}>Architected.</span>
              </h2>
              <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-medium uppercase tracking-widest opacity-80 border-l border-white/10 pl-10">
                Neutron Nexus is where fragmented energy coalesces into a singular powerhouse—merging the <span className="text-white italic">Startup Foundry</span> and <span className="text-white italic">Launchpad</span> into a high-fidelity ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* --- The Strategy Deck (Protocol Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArchitecturalCard
            index={0}
            icon={Target}
            title="Mission Critical"
            description="To provide a high-fidelity stage for next-gen ventures to present, pivot, and propel beyond the academic horizon."
          />
          <ArchitecturalCard
            index={1}
            icon={Activity}
            title="Unified Sync"
            description="Live evaluation by industry titans and immediate integration into a global network of specialized founders."
          />
          <ArchitecturalCard
            index={2}
            icon={Shield}
            title="Neural Secure"
            description="End-to-end encryption for project profiles, ensuring structural integrity from submission to deployment."
          />
        </div>

        {/* --- Bottom Metrics Tier: Industrial Readout --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 grid grid-cols-2 lg:grid-cols-4 gap-1 border-y border-white/5 py-12"
        >
          <MetricPlate label="Startup_Nodes" value="44" suffix="+" delay={0.2} />
          <MetricPlate label="Data_Points" value="1200" suffix="+" delay={0.4} />
          <MetricPlate label="Core_Tracks" value="08" suffix="_ACTIVE" delay={0.6} />

          {/* Real-time Status Simulator */}
          <div className="flex flex-col justify-center p-6 border-l border-white/5 bg-cyan-500/5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] font-black tracking-[0.4em] text-cyan-400 uppercase">System Frequency</span>
              <div className="flex gap-1.5 items-center">
                {[1, 2, 3, 4].map(v => (
                  <motion.div
                    key={v}
                    animate={{ height: [8, 16, 8] }}
                    transition={{ duration: 1, repeat: Infinity, delay: v * 0.1 }}
                    className="w-[1.5px] bg-cyan-400/80"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-orbitron text-2xl font-black text-white uppercase italic tracking-tighter">High_Sync</span>
              <p className="text-[7px] font-mono text-cyan-500/60 uppercase tracking-widest">
                Nexus cluster stability: 99.9% // Sync pulse active
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- Sub-Section Reveal: Industrial Text --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-12 px-6 py-6 border border-dashed border-white/10 opacity-60">
          <div className="flex items-center gap-4">
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">Global Coordination Active // Delhi_NCR_Node</span>
          </div>
          <div className="flex items-center gap-4">
            <Layers className="w-4 h-4 text-slate-500" />
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">Protocol: V_4.0_DECENTRALIZED</span>
          </div>
        </div>

      </div>

      {/* --- Section Divider Sculpt --- */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.2)]" />
    </section>
  )
}
