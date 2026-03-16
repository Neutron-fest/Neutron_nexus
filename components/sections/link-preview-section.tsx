'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const topProjects = [
  {
    name: 'Rishihood University',
    type: 'Host Project',
    domain: 'Education & Innovation',
    desc: 'The institution behind Neutron Nexus — built on empathy, creativity, and entrepreneurial thinking. A university that produces founders, not just graduates.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&h=800&auto=format&fit=crop',
    year: '2019',
    index: '01',
  },
  {
    name: 'Y Combinator',
    type: 'Inspiration Project',
    domain: 'Startup Accelerator',
    desc: 'The world\'s most prestigious startup accelerator — the blueprint for global venture excellence. Backed 4,000+ companies including Airbnb, Stripe and Dropbox.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&h=800&auto=format&fit=crop',
    year: '2005',
    index: '02',
  },
  {
    name: 'Sequoia Capital',
    type: 'Venture Project',
    domain: 'Venture Capital',
    desc: 'Legendary venture firm backing bold founders who build generational companies from day one. A long track record of transformational investments.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&h=800&auto=format&fit=crop',
    year: '1972',
    index: '03',
  },
]

export default function ProjectsHome() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const total = topProjects.length
    const idx = Math.min(total - 1, Math.floor(v * total * 0.999))
    setActiveIndex(idx)
  })

  const active = topProjects[activeIndex]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-black section-grain"
      style={{ height: `${topProjects.length * 100}vh` }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-0 w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(210,230,255,0.15) 40%, rgba(210,230,255,0.15) 60%, transparent 100%)' }} />

      <div className="sticky top-20 md:top-0 w-full overflow-hidden" style={{ height: '100vh' }}>
        <div className="absolute top-0 left-0 right-0 z-30 px-6 lg:px-20 pt-24 md:pt-32 flex items-center justify-between pointer-events-none">
        </div>

        {/* Large ghost index number */}
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-8 lg:pr-24 pointer-events-none overflow-hidden z-0">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              className="font-outfit font-black uppercase select-none leading-none"
              style={{ fontSize: 'clamp(280px, 45vw, 600px)', color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.06em', transform: 'translateY(10%)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {active.index}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Main content layout */}
        <div className="relative h-full flex flex-col justify-end pt-28 pb-20 px-6 lg:px-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-end max-w-[1600px] mx-auto w-full">


            {/* Left: project info + list */}
            <div className="flex flex-col gap-14 lg:pb-4 order-2 lg:order-1">
              {/* Heading */}
              <div className="flex flex-col gap-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${activeIndex}`}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2
                      className="font-outfit font-black text-white uppercase tracking-tighter leading-[0.9]"
                      style={{ fontSize: 'clamp(3rem, 5vw, 4.8rem)' }}
                    >
                      {active.name}
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Project list tabs */}
              <div className="flex flex-col gap-0 border-t border-white/5 mt-2">
                {topProjects.map((project, i) => (
                  <div
                    key={project.name}
                    className="relative py-7 border-b flex items-center justify-between transition-all duration-500 cursor-default"
                    style={{ borderColor: i === activeIndex ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.03)' }}
                  >
                    {/* Active left bar */}
                    {i === activeIndex && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-white"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <div className="pl-8 flex flex-col gap-2">
                      <span
                        className="font-outfit font-black text-[16px] uppercase tracking-wide transition-colors duration-500"
                        style={{ color: i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
                      >
                        {project.name}
                      </span>
                      <span
                        className="font-outfit text-[9px] uppercase tracking-[0.5em] font-medium transition-colors duration-500"
                        style={{ color: i === activeIndex ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.1)' }}
                      >
                        {project.type}
                      </span>
                    </div>
                    <span
                      className="font-serif italic text-[12px] transition-colors duration-500 mr-2"
                      style={{ color: i === activeIndex ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)' }}
                    >
                      {project.year}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/projects"
                className="group self-start flex items-center gap-8 border mt-4 px-6 md:px-10 py-5 font-outfit text-[8px] md:text-[11px] uppercase tracking-[0.35em] font-bold transition-all duration-500"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: '#ffffff' }}
              >
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">View All Projects</span>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </Link>
            </div>


            {/* Right: image */}
            <div className="relative overflow-hidden bg-[#06080c] order-1 lg:order-2" style={{ height: 'clamp(360px, 55vh, 600px)' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${activeIndex}`}
                  src={active.image}
                  alt={active.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'grayscale(1)', opacity: 0.6 }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Seamless overlays */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 60%)', mixBlendMode: 'screen' }} />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
              
              {/* Image badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`badge-${activeIndex}`}
                  className="absolute bottom-10 left-10 flex flex-col gap-2.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-outfit font-black text-[11px] uppercase tracking-[0.6em] text-white">
                    {active.type}
                  </span>
                  <span className="font-serif italic text-[12px] tracking-[0.05em] text-white/40">
                    Est. {active.year}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
