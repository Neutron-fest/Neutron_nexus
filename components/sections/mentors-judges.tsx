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
  },
  {
    name: 'Marcus Vane',
    role: 'Chief Architect',
    company: 'Core Systems',
    bio: 'Expert in distributed systems, high-fidelity prototypes, and infrastructure scalability.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=600&auto=format&fit=crop',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Strategic Analyst',
    company: 'Global Nodes',
    bio: 'Focused on institutional scalability, cross-border integration, and market intelligence.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=600&auto=format&fit=crop',
  },
  {
    name: 'Julian Thorne',
    role: 'Foundry Lead',
    company: 'Innovation Labs',
    bio: 'Translating raw concepts into commercial outputs with precision and velocity.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&h=600&auto=format&fit=crop',
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
      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              The Advisory Panel
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight flex-shrink-0"
            >
              Mentors<br />
              <span className="font-serif italic font-normal text-white/25">&amp; Judges.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-serif italic text-[1rem] text-white/40 max-w-sm leading-relaxed border-l border-white/[0.06] pl-10"
            >
              A curated circle of operators and visionaries responsible for evaluating innovation potential and providing critical venture feedback.
            </motion.p>
          </div>
        </div>

        <div className="panel-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {panel.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="panel-member group flex flex-col gap-8"
            >
              <div className="aspect-[4/5] w-full relative overflow-hidden bg-[#0d0d0d]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  style={{ transition: 'all 1s cubic-bezier(0.22, 1, 0.36, 1)' }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute top-0 left-0 w-full h-full border border-white/5 group-hover:border-white/20 transition-colors duration-500" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/30 font-medium block">
                    {member.company} — {member.role}
                  </span>
                  <h3 className="font-outfit font-black text-[1.4rem] text-white uppercase tracking-tight leading-tight">
                    {member.name}
                  </h3>
                </div>
                <p className="font-serif italic text-[0.92rem] text-white/45 leading-relaxed">
                  {member.bio}
                </p>
                <div className="h-px w-8 bg-white/15 group-hover:w-16 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/4 pt-8 flex justify-center">
          <span className="font-outfit text-[9px] uppercase tracking-[0.8em] text-white/15 font-medium">
            Institutional Integrity — Verified Experts
          </span>
        </div>
      </div>
    </section>
  )
}
