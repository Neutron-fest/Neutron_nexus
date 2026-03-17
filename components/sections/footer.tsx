import React from 'react'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-24 pb-8 px-6 lg:px-16 flex flex-col min-h-[90vh] justify-between overflow-hidden font-outfit text-white selection:bg-white/20">
      
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 z-10 flex-1 pt-12">
        
        <div className="flex flex-col justify-between items-start gap-12 lg:gap-0">
          <h2 className="text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-medium leading-[1.05] tracking-tight max-w-[15ch] min-block-1/2 mb-2">
            Helping<br />
            start-ups<br />
            scale & grow.
          </h2>
          
          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" }
            ].map(({ Icon, href }, idx) => (
              <a 
                key={idx}
                href={href} 
                className="w-[50px] h-[50px] rounded-full bg-[#111] hover:bg-white/10 flex items-center justify-center transition-all duration-300 border border-transparent hover:border-white/10"
              >
                <Icon size={20} strokeWidth={1.5} className="text-white/80" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 justify-start lg:justify-end items-start w-full">          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Quick links
            </div>
            
            <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-3">
              {[
                { label: 'WHO WE ARE', href: '#vision' },
                { label: 'ROADMAP', href: '#journey' },
                // { label: 'PROJECTS', href: '#grid' },
                { label: 'OUR JUDGES', href: '#panel' },
                { label: 'MEDIA', href: '#sessions' },
                { label: 'CONTACT US', href: '#contact' }
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="px-5 py-4 rounded-4xl bg-[#111] hover:bg-white/15 text-[10px] font-semibold text-white/80 tracking-widest text-center transition-all duration-300 border border-transparent hover:border-white/10 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full sm:max-w-[200px]">
            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Contact
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-white/70 leading-relaxed font-light">
              <a href="mailto:startx.ru@newtonschool.co" className="hover:text-white transition-colors">
                startx.ru@newtonschool.co
              </a>
              <p className="mt-2 text-white/50">
                Neutron Nexus,<br/>
                Rishihood University<br />
                Delhi NCR, Sonepat, Haryana<br />
                131021, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-32 relative z-10 max-w-[1500px] mx-auto flex flex-col items-center">        
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
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-white/40 mt-8 relative z-20 font-light tracking-wide space-y-4 sm:space-y-0 px-2 sm:px-0">
          <span>©2026 Neutron Nexus.</span>
          <div className="flex gap-6 sm:gap-16 text-center">
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
