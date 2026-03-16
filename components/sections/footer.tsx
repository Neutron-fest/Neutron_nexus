import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#020305] section-grain pt-32 px-6 lg:px-20 flex flex-col min-h-[90vh] justify-between border-t overflow-hidden" style={{ borderColor: 'rgba(210,230,255,0.05)' }}>
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(140,200,255,0.03) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(140,200,255,0.02) 0%, transparent 70%)' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 z-10 w-full max-w-[1600px] mx-auto">
        
        {/* Studio Info */}
        <div className="flex flex-col gap-6 lg:col-span-2 pr-0 lg:pr-24">
          <Link href="/" className="flex flex-col gap-0.5 group w-fit">
            <span className="font-outfit font-black text-[14px] tracking-[0.25em] uppercase leading-none text-white group-hover:text-[#d2e6ff] transition-colors duration-500">
              Neutron Nexus
            </span>
            <span className="font-serif text-[10px] italic tracking-widest text-white/30 group-hover:text-white/50 transition-colors duration-500">
              Innovation Day 2026
            </span>
          </Link>
          <p className="font-serif italic text-[1.05rem] leading-relaxed text-white/40 max-w-sm mt-4">
            The high-fidelity assembly floor for startup founders, bridging ingenuity with global industrial scale.
          </p>
        </div>

        {/* Connect Links */}
        <div className="flex flex-col gap-8">
          <span className="font-outfit text-[9px] uppercase tracking-[0.6em] font-medium" style={{ color: 'rgba(180,215,255,0.5)' }}>
            Connect
          </span>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@neutronnexus.com" className="group flex items-center gap-4 w-fit">
              <span className="font-outfit text-[13px] text-white/60 group-hover:text-white transition-colors duration-300">
                hello@neutronnexus.com
              </span>
              <span className="text-[10px] text-white/0 group-hover:text-[#d2e6ff] -translate-x-2 group-hover:translate-x-0 transition-all duration-300">↗</span>
            </a>
            {['Instagram', 'LinkedIn', 'Twitter (X)'].map((social) => (
              <a key={social} href="#" className="group flex items-center gap-4 w-fit">
                <span className="font-outfit text-[13px] text-white/60 group-hover:text-white transition-colors duration-300">
                  {social}
                </span>
                <span className="text-[10px] text-white/0 group-hover:text-[#d2e6ff] -translate-x-2 group-hover:translate-x-0 transition-all duration-300">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8">
          <span className="font-outfit text-[9px] uppercase tracking-[0.6em] font-medium" style={{ color: 'rgba(180,215,255,0.5)' }}>
            Navigation
          </span>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Assembly Vision', href: '#vision' },
              { label: 'Key Advantages', href: '#highlights' },
              { label: 'Advisory Panel', href: '#panel' },
              { label: 'Active Projects', href: '#grid' }
            ].map((link) => (
              <Link key={link.label} href={link.href} className="group flex items-center gap-4 w-fit">
                <span className="font-outfit text-[13px] text-white/60 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Massive Typography Bottom */}
      <div className="w-full mt-auto pt-24 flex flex-col items-center z-10 relative">
        
        {/* Bottom Bar moved up above the hidden text */}
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-white/5 text-white/30 font-outfit text-[9px] uppercase tracking-[0.3em] gap-6 z-20 text-center md:text-left">
          <span>© 2026 Neutron Nexus. All rights reserved.</span>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="w-full relative flex flex-col justify-center items-center leading-none select-none pointer-events-none pb-[4vw] -mb-[8vw] overflow-visible">
          <h1 className="absolute px-8 md:px-12 font-serif italic font-light text-transparent bg-clip-text bg-linear-to-t from-[#d2e6ff]/5 to-[#d2e6ff]/40 w-auto text-center z-0 translate-y-[6vw] tracking-normal"
              style={{ fontSize: 'clamp(4.5rem, 20vw, 36rem)' }}>
            NEXUS
          </h1>
          <h1 className="relative px-8 md:px-12 font-outfit font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-white/90 to-white/10 w-auto text-center mb-12 md:mb-20 z-10 tracking-tight"
              style={{ fontSize: 'clamp(3rem, 13vw, 26rem)', letterSpacing: '-0.02em' }}>
            NEUTRON
          </h1>
        </div>
      </div>
    </footer>
  )
}
