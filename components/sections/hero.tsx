'use client'

import React, { useEffect, useMemo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Globe, Layers, Radar } from 'lucide-react'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const OrbitRing = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 24, repeat: Infinity, ease: 'linear', delay }}
    className={`absolute rounded-full border border-cyan-500/20 ${className ?? ''}`}
  />
)

const MetricPlate = ({ label, value, suffix }: { label: string; value: string; suffix: string }) => (
  <div className="flex flex-col gap-2 border-l border-white/5 p-5">
    <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-slate-600">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className="font-orbitron text-3xl font-black text-white">{value}</span>
      <span className="text-sm font-bold text-cyan-500">{suffix}</span>
    </div>
  </div>
)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const springX = useSpring(0, { damping: 28, stiffness: 115 })
  const springY = useSpring(0, { damping: 28, stiffness: 115 })

  const signalNodes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${8 + (i * 21) % 84}%`,
        top: `${14 + (i * 27) % 74}%`,
        delay: (i % 6) * 0.25,
      })),
    []
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      springX.set((x - 0.5) * 24)
      springY.set((y - 0.5) * 24)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [springX, springY])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const fade = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const glowX = useTransform(springX, (v) => `${v}px`)
  const glowY = useTransform(springY, (v) => `${v}px`)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#020306] px-6 py-10 lg:px-20"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <motion.span
          style={{ opacity: fade }}
          className="absolute -right-20 top-24 select-none font-orbitron text-[20vw] font-black italic text-white/[0.015]"
        >
          TRANSMIT
        </motion.span>

        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute left-1/2 top-[15%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]"
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #0ea5e908 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.01] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.45em] text-cyan-500">
          <Radar className="h-3.5 w-3.5" />
          Neutron Nexus 2026
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.01] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.45em] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          Innovation protocol online
        </div>
      </div>

      <motion.div
        style={{ opacity: fade, scale }}
        className="relative z-10 mx-auto grid min-h-[78svh] w-full max-w-7xl grid-cols-1 items-center gap-14 pt-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="space-y-10">
          <div className="space-y-7">
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-20 bg-cyan-500" />
              <span className="text-[11px] font-mono font-black uppercase tracking-[0.8em] text-cyan-500">Launch Interface</span>
            </div>

            <h1 className="font-orbitron text-5xl font-black uppercase italic leading-none text-white lg:text-8xl">
              Where Ideas
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2.5px rgba(255,255,255,0.1)' }}>
                Collide.
              </span>
            </h1>

            <p className="max-w-2xl border-l border-white/10 pl-8 text-base uppercase tracking-wider text-slate-400 lg:text-lg">
              A one-day startup command floor combining Startup Foundry and Launchpad into one high-fidelity arena for builders, mentors, and operators.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { window.location.href = SUBMISSION_URL }}
                className="group inline-flex h-12 items-center gap-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 px-6 font-orbitron text-xs font-black uppercase tracking-[0.28em] text-white transition-colors hover:bg-cyan-500/20"
              >
                Submit Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <button className="inline-flex h-12 items-center rounded-sm border border-white/10 bg-white/[0.01] px-6 font-mono text-[10px] uppercase tracking-[0.4em] text-slate-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-400">
                Explore Event
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-sm border border-white/10 bg-white/[0.01] px-4 py-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-500">
              01 // Register your startup
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.01] px-4 py-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-500">
              02 // Pitch to mentors
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.01] px-4 py-3 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-500">
              03 // Compete across 8 tracks
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto flex h-[28rem] w-full max-w-[28rem] items-center justify-center rounded-sm border border-white/10 bg-white/[0.01] p-6">
            <OrbitRing className="h-[24rem] w-[24rem]" />
            <OrbitRing className="h-[18rem] w-[18rem] border-dashed" delay={0.4} />
            <OrbitRing className="h-[12rem] w-[12rem]" delay={0.8} />

            {signalNodes.map((node) => (
              <motion.div
                key={node.id}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.2, 0.7] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: node.delay }}
                className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
                style={{ left: node.left, top: node.top }}
              />
            ))}

            <div className="relative z-10 w-full rounded-sm border border-white/10 bg-[#03050a] p-6">
              <div className="mb-5 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.35em] text-slate-600">
                <span>Student Startups</span>
                <span className="text-cyan-500">Live</span>
              </div>

              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-orbitron text-5xl font-black text-white">44+</p>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">Builders on grid</p>
                </div>
                <div className="rounded-sm border border-white/10 bg-white/[0.01] px-4 py-3 text-right">
                  <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-600">Event Date</p>
                  <p className="font-orbitron text-xl font-black text-cyan-500">28 MAR</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <MetricPlate label="Runtime" value="1" suffix="Day" />
                <MetricPlate label="Tracks" value="8" suffix="Live" />
                <MetricPlate label="Mentors" value="On" suffix="Grid" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-7xl flex-col gap-4 border border-dashed border-white/10 px-6 py-5 opacity-70 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Globe className="h-4 w-4 text-slate-500" />
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-500">
            Global coordination active // Delhi_NCR_Node
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Layers className="h-4 w-4 text-slate-500" />
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-500">
            Protocol: V_4.0_Decentralized
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.2)]" />
    </section>
  )
}