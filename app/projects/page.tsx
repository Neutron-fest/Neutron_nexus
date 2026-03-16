'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const allProjects = [
  {
    name: 'Rishihood University',
    domain: 'Education & Innovation',
    desc: 'The institution behind Neutron Nexus — built on empathy, creativity, and entrepreneurial thinking. Rishihood bridges academia with industry to produce founders, not just graduates.',
    year: '2019',
    type: 'Host Project',
    tier: 'Platinum',
    logo: 'RU',
  },
  {
    name: 'Y Combinator',
    domain: 'Startup Accelerator',
    desc: "The world's most prestigious accelerator that has funded over 4,000 companies including Airbnb, Stripe, and Dropbox. The blueprint for global startup excellence.",
    year: '2005',
    type: 'Inspiration Project',
    tier: 'Gold',
    logo: 'YC',
  },
  {
    name: 'Sequoia Capital',
    domain: 'Venture Capital',
    desc: 'A legendary venture capital firm backing bold founders who aim to build generational companies from day one. Sequoia has a long track record of funding transformational businesses.',
    year: '1972',
    type: 'Venture Project',
    tier: 'Gold',
    logo: 'SC',
  },
  {
    name: 'AWS Activate',
    domain: 'Cloud Infrastructure',
    desc: 'Providing scalable compute, storage, and AI services to early-stage startups and builders across the globe. AWS Activate gives founders the tools to build without limits.',
    year: '2006',
    type: 'Technology Project',
    tier: 'Silver',
    logo: 'AWS',
  },
  {
    name: 'Microsoft for Startups',
    domain: 'Enterprise Technology',
    desc: 'Empowering entrepreneurs with tools, credits, and mentorship to accelerate product development and market go-to-market strategy.',
    year: '1975',
    type: 'Technology Project',
    tier: 'Silver',
    logo: 'MS',
  },
  {
    name: 'Google for Startups',
    domain: 'Innovation Ecosystem',
    desc: 'Access to Google products, technical mentors, and a global network of investors and ecosystem partners. Helping founders go further, faster.',
    year: '1998',
    type: 'Ecosystem Project',
    tier: 'Silver',
    logo: 'GFS',
  },
]

const tierOrder = ['Platinum', 'Gold', 'Silver']
const tierColor: Record<string, string> = {
  Platinum: '#d2e6ff',
  Gold: 'rgba(210,230,255,0.6)',
  Silver: 'rgba(210,230,255,0.35)',
}

export default function ProjectsPage() {
  const grouped = tierOrder.map((tier) => ({
    tier,
    projects: allProjects.filter((p) => p.tier === tier),
  }))

  return (
    <main className="min-h-screen w-full bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-7 flex items-center justify-between border-b border-white/[0.05]"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}>
        <Link href="/" className="flex flex-col gap-0.5 group">
          <span className="font-outfit font-black text-[13px] tracking-[0.25em] uppercase leading-none" style={{ color: '#d2e6ff' }}>
            Neutron Nexus
          </span>
          <span className="font-serif text-[9px] italic tracking-widest" style={{ color: 'rgba(160,200,255,0.4)' }}>
            Innovation Day 2026
          </span>
        </Link>
        <Link
          href="/"
          className="font-outfit text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-[#d2e6ff] transition-colors duration-400 flex items-center gap-3"
        >
          <span>←</span> Back
        </Link>
      </header>

      <div className="pt-40 pb-32 px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 mb-32"
        >
          <h1
            className="font-outfit font-black text-white uppercase tracking-tight leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            Our<br />
            <span style={{ color: '#d2e6ff', fontFamily: 'Noto Serif, serif', fontStyle: 'italic', fontWeight: 400 }}>
              Projects.
            </span>
          </h1>
          <p className="font-serif italic text-white/40 text-[1.1rem] leading-relaxed max-w-xl mt-4">
            A curated assembly of institutions, accelerators, and technology platforms powering the Neutron Nexus ecosystem.
          </p>
        </motion.div>

        {/* Tiers */}
        {grouped.map((group, gi) => (
          <motion.div
            key={group.tier}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: gi * 0.1 }}
            className="mb-28"
          >
            <div className="flex items-center gap-8 mb-14">
              <span
                className="font-outfit text-[10px] uppercase tracking-[0.7em] font-black"
                style={{ color: tierColor[group.tier] }}
              >
                {group.tier}
              </span>
              <div className="flex-1 h-px" style={{ background: tierColor[group.tier], opacity: 0.15 }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group p-10 border border-white/[0.06] hover:border-[#d2e6ff]/20 transition-all duration-700 flex flex-col gap-8 relative overflow-hidden"
                  style={{ background: 'rgba(210,230,255,0.015)' }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(210,230,255,0.04) 0%, transparent 70%)' }} />

                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 flex items-center justify-center border font-outfit font-black text-[13px] tracking-widest shrink-0"
                      style={{ borderColor: 'rgba(210,230,255,0.15)', color: '#d2e6ff' }}
                    >
                      {project.logo}
                    </div>
                    <div className="text-right space-y-1">
                      <span
                        className="font-outfit text-[8px] uppercase tracking-[0.6em] font-medium block"
                        style={{ color: tierColor[project.tier] }}
                      >
                        {project.type}
                      </span>
                      <span className="font-serif italic text-[10px] text-white/20 block">Est. {project.year}</span>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="font-outfit font-black text-white uppercase tracking-tight text-[1.3rem] leading-tight group-hover:text-[#d2e6ff] transition-colors duration-500">
                      {project.name}
                    </h3>
                    <p className="font-serif italic text-white/40 text-[0.88rem] leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 transition-all duration-700 group-hover:w-12" style={{ background: '#d2e6ff', opacity: 0.4 }} />
                    <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium">
                      {project.domain}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="border-t pt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10"
          style={{ borderColor: 'rgba(210,230,255,0.08)' }}
        >
          <div className="space-y-3">
            <h3 className="font-outfit font-black text-white uppercase text-[1.5rem] tracking-tight">
              Submit a Project
            </h3>
            <p className="font-serif italic text-white/40 text-[0.9rem]">
              Align your brand with India's premier student innovation assembly.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group flex items-center gap-6 border px-10 py-5 font-outfit text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-500 hover:bg-[#d2e6ff] hover:border-[#d2e6ff]"
            style={{ borderColor: 'rgba(210,230,255,0.25)', color: '#d2e6ff' }}
          >
            <span className="group-hover:text-black transition-colors duration-300">Get in Touch</span>
            <span className="group-hover:text-black transition-all duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
