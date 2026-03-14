'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Shield, Cpu, Globe, ArrowUpRight, Github, Twitter, Linkedin, Hexagon } from 'lucide-react'

const FooterLink = ({ href, label, index }: { href: string; label: string; index: number }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <span className="text-[10px] font-mono text-slate-700 font-bold tracking-widest uppercase">0{index + 1}//</span>
      <span className="text-sm font-bold font-orbitron group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{label}</span>
    </div>
    <ArrowUpRight className="w-4 h-4 text-slate-800 group-hover:text-cyan-400 transform group-hover:rotate-45 transition-all" />
  </motion.a>
)

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#010204] pt-32 pb-12 px-6 lg:px-20 overflow-hidden border-t border-white/5">
      {/* ── BACKGROUND ARTICULATION ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Massive Logo Watermark */}
        <span className="absolute -bottom-40 left-1/2 -translate-x-1/2 text-[35vw] font-black text-white/[0.015] font-orbitron select-none leading-none tracking-tighter">
          NEXUS
        </span>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24 font-sans">

        {/* --- Top Tier: Grand Finale Brand & Navigation --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

          {/* Left: Brand Protocol */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="h-14 w-14 border border-cyan-500/20 bg-cyan-500/5 rotate-45 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                <Hexagon className="w-7 h-7 text-cyan-400 -rotate-45 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-orbitron font-black text-2xl tracking-[0.3em] uppercase">Neutron Nexus</h2>
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em] mt-2 italic">Central Integration Node // 2026_Cycle</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-md text-slate-500 text-lg uppercase font-mono tracking-tighter leading-relaxed">
                The ultimate high-performance neural hub for university founders. Bridging ingenuity with global industrial scale.
              </p>
              <div className="flex gap-4">
                <Shield className="w-5 h-5 text-cyan-500/40" />
                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest font-bold">Protocol_AES_256_Active</span>
              </div>
            </div>

            {/* Technical System Status Markers */}
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
              <div className="p-6 bg-[#010204] space-y-2">
                <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest font-black">Processor_Sync</span>
                <div className="text-sm font-bold font-orbitron text-cyan-500 uppercase italic leading-none">99.9%_Optimal</div>
              </div>
              <div className="p-6 bg-[#010204] space-y-2">
                <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest font-black">Neural_Cloud</span>
                <div className="text-sm font-bold font-orbitron text-white uppercase italic leading-none">Established</div>
              </div>
            </div>
          </div>

          {/* Right: Nav Directives */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="space-y-8">
              <h4 className="text-[11px] font-mono text-cyan-500 uppercase tracking-[0.6em] font-black">Directives_Access</h4>
              <nav className="flex flex-col">
                <FooterLink href="#hero" label="Core_Terminal" index={0} />
                <FooterLink href="#about" label="Innovation_Vision" index={1} />
                <FooterLink href="#events" label="Deployment_Tracks" index={2} />
                <FooterLink href="/submit" label="Initiate_Submission" index={3} />
              </nav>

              {/* Industrial Socials */}
              <div className="pt-8 flex items-center justify-between">
                <div className="flex items-center gap-10">
                  {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, color: '#06b6d4' }}
                      className="text-slate-700 cursor-pointer transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global_Net_Hub: NCR_01</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Tier: Legal & Technical Registry --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[9px] font-mono text-slate-800 uppercase tracking-widest font-bold">
              © 2026 Neutron Nexus Protocol // All Operational Rights Encrypted
            </p>
            <div className="hidden lg:flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-cyan-500/10" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <Globe className="w-3 h-3 text-slate-800" />
              <span className="text-[8px] font-mono text-slate-800 uppercase tracking-widest">Coord: 28.6139° N, 77.2090° E</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <span className="text-[9px] font-black font-orbitron text-white/10 uppercase tracking-[0.5em] italic select-none">Where Ideas Collide</span>
          </div>
        </div>

      </div>

      {/* Finishing Corner Brackets */}
      <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-white/[0.03]" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-white/[0.03]" />

    </footer>
  )
}
