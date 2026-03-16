'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Cpu, Network, Database, ChevronRight, Binary } from 'lucide-react'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const KineticReactor = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        {/* Background Rotating Rings */}
        <motion.circle
          cx="200" cy="200" r="180"
          fill="none" stroke="currentColor" strokeWidth="0.5"
          className="text-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="200" cy="200" r="150"
          fill="none" stroke="currentColor" strokeWidth="1"
          strokeDasharray="10 20"
          className="text-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Central Hex Structure */}
        <motion.path
          d="M200 100 L286.6 150 L286.6 250 L200 300 L113.4 250 L113.4 150 Z"
          fill="none" stroke="currentColor" strokeWidth="2"
          className="text-blue-500/40"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Inner Mechanical Gears */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        >
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="195" y="140" width="10" height="30"
              fill="currentColor"
              className="text-white/20"
              transform={`rotate(${i * 45} 200 200)`}
            />
          ))}
          <circle cx="200" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20" />
        </motion.g>

        {/* Scanning Beam */}
        <motion.path
          d="M200 200 L350 200"
          stroke="url(#beamGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        />

        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Labels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-full h-full p-20"
        >
          {[
            { label: "ION_DRIVE", pos: "top-0 left-1/2" },
            { label: "SYNC_LINK", pos: "bottom-0 left-1/2" },
            { label: "CORE_v9", pos: "left-0 top-1/2" },
          ].map((item, i) => (
            <div key={i} className={`absolute ${item.pos} -translate-x-1/2 -translate-y-1/2`}>
              <span className="font-mono text-[7px] tracking-[0.5em] text-blue-400 bg-black/80 px-2 py-1 border border-blue-500/20">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const DataStrip = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-6 py-4 border-b border-white/5 group hover:bg-white/[0.02] transition-colors px-4 cursor-default">
    <div className="p-2 border border-white/10 text-white/40 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-all">
      <Icon size={14} />
    </div>
    <div className="flex flex-col">
      <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">{label}</span>
      <span className="font-orbitron text-[10px] font-bold text-white/70 uppercase">{value}</span>
    </div>
    <ChevronRight size={12} className="ml-auto text-white/10 group-hover:text-blue-500/40 transition-colors" />
  </div>
)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const yContent = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const yCreative = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030303] flex flex-col lg:flex-row overflow-hidden"
    >
      {/* ── BACKGROUND NOISE & GRID ── */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.02] to-transparent pointer-events-none" />

      {/* ── LEFT COLUMN: CONTENT ── */}
      <motion.div
        style={{ opacity, y: yContent }}
        className="w-full lg:w-[45%] min-h-screen flex flex-col justify-center px-6 lg:pl-20 lg:pr-10 z-10 border-r border-white/5"
      >
        <div className="space-y-16">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 py-2"
            >
              <Binary size={14} className="text-blue-500" />
              <div className="h-[1px] w-12 bg-blue-500/40" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-blue-400">Neutron_Nexus_Protocol_v.1</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-orbitron font-black text-6xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tighter uppercase italic"
            >
              IDEAS <br />
              COLLIDE<span className="text-blue-500">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-sm lg:text-base text-white/40 font-light leading-relaxed italic tracking-wide"
            >
              "The architectural junction where raw velocity meets institutional precision. We are the foundry of future-state technology."
            </motion.p>
          </div>

          {/* Action Interface */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(SUBMISSION_URL, '_blank')}
                className="group relative flex items-center gap-10 bg-white px-10 py-6 rounded-none transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <span className="relative z-10 font-orbitron font-black text-[12px] uppercase tracking-[0.2em] text-black group-hover:text-white transition-colors">Initialize_Sequence</span>
                <ArrowUpRight className="relative z-10 text-black group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
              </motion.button>
            </div>

            {/* Modular Sideboard */}
            <div className="grid grid-cols-1 gap-0 max-w-sm">
              <DataStrip icon={Cpu} label="Processing Unit" value="Thread_Optimized" />
              <DataStrip icon={Network} label="Network Load" value="98.4% Efficiency" />
              <DataStrip icon={Database} label="Nexus Database" value="Primary_Node_Active" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── RIGHT COLUMN: CREATIVE ── */}
      <motion.div
        style={{ opacity, y: yCreative }}
        className="w-full lg:w-[55%] min-h-screen bg-[#050505] flex items-center justify-center relative p-10"
      >
        <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-20">
          <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-white">Visual_Output_001</span>
          <div className="w-32 h-[1px] bg-white/20" />
        </div>

        <KineticReactor />

        {/* Global Coordinates Overlay */}
        <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Global_Positioning</span>
          </div>
          <p className="font-mono text-[11px] text-white/80">LAT: 28.6139° N | LONG: 77.2090° E</p>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block opacity-10">
          <p className="font-mono text-[8px] rotate-180 [writing-mode:vertical-lr] tracking-[1em] uppercase text-white">
            Security_Layer_Alpha_721
          </p>
        </div>
      </motion.div>

      {/* ── CORNER ACCENTS (FIXED) ── */}
      <div className="fixed top-10 left-10 w-4 h-4 border-t border-l border-white/20 z-50 pointer-events-none" />
      <div className="fixed top-10 right-10 w-4 h-4 border-t border-r border-white/20 z-50 pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-4 h-4 border-b border-l border-white/20 z-50 pointer-events-none" />
      <div className="fixed bottom-10 right-10 w-4 h-4 border-b border-r border-white/20 z-50 pointer-events-none" />
    </section>
  )
}