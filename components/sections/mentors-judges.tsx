'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const panel = [
  {
    name: 'Dr. Elena Sterling',
    role: 'Venture Partner',
    company: 'Nexus Capital',
    bio: 'Specializing in early-stage orchestration and market pivots for deep-tech ventures.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=600&auto=format&fit=crop',
    specialty: 'Deep Tech',
  },
  {
    name: 'Marcus Vane',
    role: 'Chief Architect',
    company: 'Core Systems',
    bio: 'Expert in distributed systems, high-fidelity prototypes, and infrastructure scalability.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=600&auto=format&fit=crop',
    specialty: 'Infrastructure',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Strategic Analyst',
    company: 'Global Nodes',
    bio: 'Focused on institutional scalability, cross-border integration, and market intelligence.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=600&auto=format&fit=crop',
    specialty: 'Strategy',
  },
  {
    name: 'Julian Thorne',
    role: 'Foundry Lead',
    company: 'Innovation Labs',
    bio: 'Translating raw concepts into commercial outputs with precision and velocity.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&h=600&auto=format&fit=crop',
    specialty: 'Product',
  },
]

export default function MentorsJudges() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.panel-member',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.panel-members', start: 'top 75%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="panel"
      className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'rgba(210,230,255,0.07)' }} />

      {/* Subtle background blue accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(100,160,255,0.04) 0%, transparent 70%)' }} />

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
              The Advisory Panel
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight shrink-0"
            >
              Mentors<br />
              <span style={{ color: '#d2e6ff', fontFamily: 'Noto Serif, serif', fontStyle: 'italic', fontWeight: 400 }}>& Judges.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-serif italic text-[1rem] text-white/40 max-w-sm leading-relaxed pl-10"
              style={{ borderLeft: '1px solid rgba(210,230,255,0.1)' }}
            >
              A curated circle of operators and visionaries responsible for evaluating innovation potential and providing critical venture feedback.
            </motion.p>
          </div>
        </div>

        <div className="panel-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {panel.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="panel-member group flex flex-col gap-0"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#0d0d0d]" style={{ aspectRatio: '4/5' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(100,160,255,0.08) 0%, transparent 50%)' }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)' }} />

                {/* Specialty tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 font-outfit text-[8px] uppercase tracking-[0.5em] font-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                  style={{ background: 'rgba(0,0,0,0.6)', color: '#d2e6ff', border: '1px solid rgba(210,230,255,0.2)', backdropFilter: 'blur(8px)' }}
                >
                  {member.specialty}
                </div>

                {/* Border */}
                <div
                  className="absolute inset-0 border transition-colors duration-500"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                />
                <div
                  className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ borderColor: 'rgba(210,230,255,0.15)' }}
                />
              </div>

              {/* Info */}
              <div
                className="flex flex-col gap-3 p-5 border border-t-0 transition-colors duration-500"
                style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(210,230,255,0.012)' }}
              >
                <div className="space-y-0.5">
                  <h3 className="font-outfit font-black text-[1.15rem] uppercase tracking-tight leading-tight group-hover:text-[#d2e6ff] transition-colors duration-500 text-white">
                    {member.name}
                  </h3>
                </div>
                <p className="font-serif italic text-[0.84rem] text-white/40 leading-relaxed">
                  {member.bio}
                </p>
                <div
                  className="h-[1px] w-6 transition-all duration-700 group-hover:w-12 mt-1"
                  style={{ background: '#d2e6ff', opacity: 0.35 }}
                />
              </div>
            </motion.div>
          ))}
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
