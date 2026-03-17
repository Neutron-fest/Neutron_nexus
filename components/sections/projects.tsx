'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Rishihood University',
    domain: 'Education & Innovation',
    desc: 'The institution behind Neutron Nexus — built on empathy, creativity, and entrepreneurial thinking.',
    year: '2019',
    type: 'Host Project',
  },
  {
    name: 'Y Combinator',
    domain: 'Startup Accelerator',
    desc: 'The world\'s most prestigious accelerator that has funded over 4,000 companies including Airbnb, Stripe, and Dropbox.',
    year: '2005',
    type: 'Inspiration Project',
  },
  {
    name: 'Sequoia Capital',
    domain: 'Venture Capital',
    desc: 'A legendary venture capital firm backing bold founders who aim to build generational companies from day one.',
    year: '1972',
    type: 'Venture Project',
  },
  {
    name: 'AWS Activate',
    domain: 'Cloud Infrastructure',
    desc: 'Providing scalable compute, storage, and AI services to early-stage startups and builders across the globe.',
    year: '2006',
    type: 'Technology Project',
  },
  {
    name: 'Microsoft for Startups',
    domain: 'Enterprise Technology',
    desc: 'Empowering entrepreneurs with tools, credits, and mentorship to accelerate product development and market go-to.',
    year: '1975',
    type: 'Technology Project',
  },
  {
    name: 'Google for Startups',
    domain: 'Innovation Ecosystem',
    desc: 'Access to Google products, technical mentors, and a global network of investors and ecosystem partners.',
    year: '1998',
    type: 'Ecosystem Project',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <span className="font-outfit text-[9px] uppercase tracking-[0.6em] text-white/25 font-medium block">
          {project.type}
        </span>
        <span className="font-outfit text-[9px] uppercase tracking-[0.4em] text-white/15 font-medium">
          Est. {project.year}
        </span>
      </div>
      <h3
        className="font-outfit font-black text-white uppercase tracking-tight leading-[0.92]"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
      >
        {project.name}
      </h3>
      <p className="font-serif italic text-white/40 text-[1rem] leading-relaxed max-w-lg">
        {project.desc}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div className="h-px w-8 bg-white/20" />
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Better index calculation with buffer to prevent flickering at edges
    const total = projects.length
    const idx = Math.min(total - 1, Math.floor(v * total * 0.999))
    setActiveIndex(idx)
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] section-grain"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div
        ref={stickyRef}
        className="sticky top-0 w-full overflow-hidden z-10"
        style={{ height: '100vh' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 font-outfit font-black text-white/[0.018] uppercase select-none leading-none"
            style={{ fontSize: 'clamp(120px, 22vw, 280px)' }}
          >
            {String(activeIndex + 1).padStart(2, '0')}
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-6 px-6 lg:px-16 pt-28">
          <div className="flex-1 h-px bg-white/6 max-w-64">
            <motion.div
              className="h-full bg-white/40"
              style={{ width: progressWidth }}
            />
          </div>
          <span className="font-outfit text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium shrink-0">
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative h-full flex flex-col justify-end pb-20 px-6 lg:px-16 z-10">
          <div className="relative" style={{ minHeight: 'clamp(280px, 40vh, 420px)' }}>
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  y: i === activeIndex ? 0 : i < activeIndex ? -30 : 30,
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex items-center gap-3">
            {projects.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-500"
                style={{
                  width: i === activeIndex ? '32px' : '8px',
                  height: '2px',
                  background: i === activeIndex ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.12)',
                  borderRadius: '2px',
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                if (!sectionRef.current) return
                const rect = sectionRef.current.getBoundingClientRect()
                const top = sectionRef.current.offsetTop
                const scrollTarget = top + (i / projects.length) * sectionRef.current.offsetHeight + 10
                window.scrollTo({ top: scrollTarget, behavior: 'smooth' })
              }}
            >
              <span
                className="font-outfit text-[8px] uppercase tracking-[0.4em] transition-colors duration-300"
                style={{ color: i === activeIndex ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)' }}
              >
                {project.name.split(' ')[0]}
              </span>
              <div
                className="transition-all duration-400"
                style={{
                  width: i === activeIndex ? '24px' : '6px',
                  height: '1px',
                  background: i === activeIndex ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
