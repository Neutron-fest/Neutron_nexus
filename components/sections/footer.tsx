'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Twitter, Linkedin, Hexagon, Shield, Globe } from 'lucide-react'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const FooterLink = ({ href, label, index }: { href: string; label: string; index: number }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-all cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <span className="text-[10px] font-mono text-white/10 font-bold tracking-widest uppercase">0{index + 1}//</span>
      <span className="text-sm font-bold font-orbitron group-hover:text-white transition-colors uppercase tracking-widest text-white/40">{label}</span>
    </div>
    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white transform group-hover:rotate-45 transition-all" />
  </motion.a>
)

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] pt-32 pb-12 px-6 lg:px-20 overflow-hidden border-t border-white/5">
      {/* Background Decorative */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <span className="absolute -bottom-40 left-1/2 -translate-x-1/2 text-[35vw] font-black text-white/[0.01] font-orbitron select-none leading-none tracking-tighter uppercase italic">
          NEXUS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">

        {/* Top Tier: Grand Finale Brand & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

          {/* Left: Brand Protocol */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="h-14 w-14 border border-white/10 bg-white/5 rotate-45 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <Hexagon className="w-7 h-7 text-white/60 -rotate-45 group-hover:text-black group-hover:scale-110 transition-all duration-500" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-orbitron font-black text-2xl tracking-[0.3em] uppercase text-white">Neutron Nexus</h2>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mt-2 italic font-bold">Innovation Assembly // 2026_Cycle</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-md text-white/40 text-lg uppercase font-mono tracking-tighter leading-relaxed">
                The high-fidelity assembly floor for startup founders. Bridging ingenuity with global industrial scale.
              </p>
              <div className="flex gap-4 items-center">
                <Shield className="w-4 h-4 text-white/20" />
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">Assembly Protocol v4.0 Active</span>
              </div>
            </div>

            {/* Technical System Status Markers */}
            <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 max-w-sm">
              <div className="p-6 bg-[#0a0a0a] space-y-2 border-r border-white/5">
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest font-black">Regional Node</span>
                <div className="text-xs font-bold font-orbitron text-white uppercase italic leading-none">Delhi_NCR_01</div>
              </div>
              <div className="p-6 bg-[#0a0a0a] space-y-2">
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest font-black">Operational Scale</span>
                <div className="text-xs font-bold font-orbitron text-white uppercase italic leading-none">Venture_Ready</div>
              </div>
            </div>
          </div>

          {/* Right: Nav Directives */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="space-y-8">
              <h4 className="text-[11px] font-mono text-white/30 uppercase tracking-[0.8em] font-black italic">Strategic_Directives</h4>
              <nav className="flex flex-col">
                <FooterLink href="#vision" label="Assembly_Vision" index={0} />
                <FooterLink href="#highlights" label="Key_Advantages" index={1} />
                <FooterLink href="#panel" label="Advisory_Panel" index={2} />
                <FooterLink href="#grid" label="Active_Ventures" index={3} />
              </nav>

              {/* Industrial Socials */}
              <div className="pt-8 flex items-center justify-between">
                <div className="flex items-center gap-8">
                  {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, opacity: 1 }}
                      className="text-white opacity-20 cursor-pointer transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-1 bg-white animate-pulse" />
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">System Terminal Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Technical Registry */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">
              © 2026 Neutron Nexus // All Rights Reserved // Operational Standards V.4
            </p>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 opacity-20">
              <Globe className="w-3 h-3 text-white" />
              <span className="text-[8px] font-mono text-white uppercase tracking-widest font-bold">Coord: 28.61° N, 77.21° E</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <span className="text-[9px] font-black font-orbitron text-white/10 uppercase tracking-[0.5em] italic select-none">Where Ideas Collide</span>
          </div>
        </div>

      </div>

      {/* Decorative Corner Brackets */}
      <div className="absolute top-10 right-10 w-24 h-24 border-r border-t border-white/[0.02]" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-white/[0.02]" />

    </footer>
  )
}
