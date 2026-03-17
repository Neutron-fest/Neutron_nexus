'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const panel = [
  {
    name: 'Vivek Sridhar',
    role: 'CTO',
    company: 'Microsoft for Startups',
    bio: 'Vivek is a technologist and open-source contributor with 19+ years of experience, currently serving as CTO for Microsoft for Startups. He has held key roles at DigitalOcean, NoodleNext, BlackBuck, HCL, and IBM Rational, contributing across development, DevOps, and architecture, while also mentoring startups and publishing research in international forums.',
    image: 'https://ik.imagekit.io/yatharth/Vivek%20Sridhar.png',
    specialty: 'Investor',
    linkedin: 'https://www.linkedin.com/in/vivsridh',
  },
  {
    name: 'Udit Goyal',
    role: 'COO',
    company: 'Google Cloud India',
    bio: 'A business leader with 25+ years of experience across IT, Telecom, and Healthcare, specializing in building high-growth organizations, leading teams, and driving results through strategy, sales, partnerships, and product management.',
    image: 'https://ik.imagekit.io/yatharth/uditgoyal.jpeg',
    specialty: 'Infrastructure',
    linkedin: 'https://www.linkedin.com/in/uditgoyal/',
  },
]

export default function MentorsJudges() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)

  return (
    <section
      id="panel"
      className="relative w-full bg-black section-grain py-12 lg:py-48 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgba(210,230,255,0.07)' }} />

      {/* Subtle background blue accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(100,160,255,0.05) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 0% 100%, rgba(100,160,255,0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10" style={{ background: '#d2e6ff', opacity: 0.4 }} />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] font-medium" style={{ color: 'rgba(210,230,255,0.5)' }}>
              Executive Network
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(2.5rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight shrink-0"
            >
              Mentors<br />
              <span style={{ color: '#d2e6ff', fontFamily: 'Noto Serif, serif', fontStyle: 'italic', fontWeight: 400 }}>& Judges.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-serif italic text-[0.95rem] text-white/40 max-w-sm leading-relaxed border-l border-white/10 pl-8"
            >
              A curated circle of industry veterans and market architects providing critical venture feedback and strategic validation.
            </motion.p>
          </div>
        </div>

        {/* Expandable Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-[600px]">
          {panel.map((member, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={member.name}
                layout
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveIndex(i)}
                className={`relative overflow-hidden cursor-pointer flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                  ${isActive ? 'flex-[2.5] bg-[rgba(210,230,255,0.035)]' : 'flex-1 bg-white/2'}
                  border border-white/5 group rounded-sm
                `}
                style={{
                  boxShadow: isActive ? '0 30px 60px -15px rgba(0,0,0,0.5)' : 'none',
                }}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    layout
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-1000 
                      ${isActive ? 'grayscale-0 opacity-40 scale-105' : 'grayscale opacity-20 scale-100'}
                    `}
                  />
                  {/* Overlays */}
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-60' : 'opacity-0'}`}
                    style={{ background: 'linear-gradient(to top, #000 10%, transparent 90%)' }} />
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-40' : 'opacity-60'}`}
                    style={{ background: 'radial-gradient(circle at 50% 50%, transparent, rgba(0,0,0,0.8))' }} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full p-8 lg:p-12 justify-between">
                  {/* Top Section */}
                  <div className="flex flex-col gap-6">
                    <motion.div layout className="flex items-center gap-4">
                      <div className={`h-px transition-all duration-700 ${isActive ? 'w-12 bg-[#d2e6ff]' : 'w-6 bg-white/20'}`} />
                      <span className="font-outfit text-[10px] uppercase tracking-[0.4em] font-black text-[#d2e6ff]/60">
                        {member.specialty}
                      </span>
                    </motion.div>

                    <motion.div layout className="space-y-2">
                      <h3 className={`font-outfit font-black uppercase transition-all duration-700 
                        ${isActive ? 'text-[2.5rem] lg:text-[4rem] leading-[0.9]' : 'text-[1.2rem] lg:text-[1.5rem] leading-tight'}
                        text-white`}
                      >
                        {member.name.split(' ').map((n, idx) => (
                          <span key={idx} className="block">{n}</span>
                        ))}
                      </h3>
                      <p className={`font-serif italic transition-all duration-700 
                        ${isActive ? 'text-[1.1rem] text-white/80' : 'text-[0.8rem] text-white/40'}
                      `}>
                        {member.role} / {member.company}
                      </p>
                    </motion.div>
                  </div>

                  {/* Expanded Section (Bottom) */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                        height: isActive ? 'auto' : 0
                      }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="flex flex-col gap-8 pt-8 border-t border-white/10"
                    >
                      <p className="font-serif italic text-[0.95rem] lg:text-[1.1rem] text-white/60 leading-relaxed max-w-lg">
                        "{member.bio}"
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#d2e6ff]/10 hover:border-[#d2e6ff]/30 transition-all duration-300 group/link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4 text-white/60 group-hover/link:text-[#d2e6ff]" />
                            <span className="font-outfit text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover/link:text-[#d2e6ff]">
                              Connect
                            </span>
                          </a>
                        </div>

                        {/* Visual element */}
                        <div className="hidden lg:block">
                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                             <path d="M40 0H0V40H40V0Z" fill="url(#paint0_radial)" />
                             <defs>
                               <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(20)">
                                 <stop stopColor="#d2e6ff" />
                                 <stop offset="1" stopColor="#d2e6ff" stopOpacity="0" />
                               </radialGradient>
                             </defs>
                           </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Shrunk State Visual Indicator */}
                  {!isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-10 right-10"
                    >
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d2e6ff]/50 transition-colors">
                        <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-[#d2e6ff] transition-colors" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Border Hover Accent */}
                <div className={`absolute inset-0 border transition-all duration-700 pointer-events-none
                  ${isActive ? 'border-[#d2e6ff]/20' : 'border-transparent group-hover:border-white/10'}
                `} />
              </motion.div>
            );
          })}
        </div>

        <div
          className="border-t pt-8 flex justify-center"
          style={{ borderColor: 'rgba(210,230,255,0.06)' }}
        >
          <span className="font-outfit text-[9px] uppercase tracking-[0.8em] font-medium" style={{ color: 'rgba(210,230,255,0.2)' }}>
            Institutional Integrity — Verified Experts
          </span>
        </div>
      </div>
    </section>
  )
}
