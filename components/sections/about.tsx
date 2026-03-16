'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    index: '01',
    title: 'Accelerated Validation',
    description: 'Our framework verifies commercial viability at speed. From hypothesis to demonstration in a single high-stakes day.',
  },
  {
    index: '02',
    title: 'Executive Network',
    description: 'Direct access to a curated circle of mentors, operators, and early-stage capital — connections that act as force multipliers.',
  },
  {
    index: '03',
    title: 'Standard of Excellence',
    description: 'Every project meets a rigorous criteria of innovation and execution. We define the standard for the next generation of builders.',
  },
]

const stats = [
  { label: 'Active Ventures', value: 44, suffix: '+' },
  { label: 'Industry Nodes', value: 12, suffix: '+' },
  { label: 'Tracks', value: 8, suffix: '+', prefix: '0' },
  { label: 'Network', value: 100, suffix: '%' },
]

function StatCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = countRef.current
    if (!node) return

    const controls = gsap.to({ val: 0 }, {
      val: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: node,
        start: "top 90%",
      },
      onUpdate: function() {
        setCount(Math.floor(this.targets()[0].val))
      }
    })

    return () => {
      controls.kill()
    }
  }, [value])

  return (
    <span ref={countRef}>
      {prefix}{count < 10 && prefix === '0' ? `0${count}` : count}{suffix}
    </span>
  )
}

function StatItem({ label, value, prefix, suffix }: { label: string; value: number; prefix?: string; suffix?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="stat-item group relative flex-1 py-12 px-8 border-r border-white/5 last:border-r-0 space-y-3 overflow-hidden transition-colors duration-500 hover:bg-white/2"
    >
      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
          ),
        }}
      />
      
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-white/20 translate-x-[0.5px]" />
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-white/20 translate-y-[-0.5px]" />
      </div>

      <div className="relative z-10 space-y-3">
        <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium block group-hover:text-white/40 transition-colors duration-300">
          {label}
        </span>
        <div className="font-outfit font-black text-[clamp(2rem,5vw,3.5rem)] text-white leading-none tracking-tighter">
          <StatCounter value={value} prefix={prefix} suffix={suffix} />
        </div>
      </div>
      
      {/* Nexus Dot Accent */}
      <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-white/5 group-hover:bg-white/20 group-hover:scale-[2] transition-all duration-500" />
    </div>
  )
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.pillars-wrapper', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-wrapper', start: 'top 85%' },
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute right-0 top-10 font-outfit font-black text-[22vw] text-white/[0.018] uppercase select-none leading-none"
        >
          VISION
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-28">
        <div className="flex flex-col gap-16" ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              Assembly Briefing
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight shrink-0"
            >
              The Scale<br />
              <span className="font-serif italic font-normal text-white/25">of Ambition.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-md space-y-5 border-l border-white/6 pl-10"
            >
              <p className="font-serif italic text-[1.1rem] text-white/45 leading-relaxed">
                Neutron Nexus is not merely an event — it is a high-fidelity assembly. We merge the raw agility of a startup foundry with the strategic reach of a global launchpad.
              </p>
              <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/20 block font-medium">
                Strategic Objective 2026
              </span>
            </motion.div>
          </div>
        </div>

        <div className="pillars-wrapper flex flex-col gap-0">
          {pillars.map((p) => (
            <div
              key={p.index}
              className="pillar-card group flex flex-col lg:flex-row gap-8 py-12 border-t border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              <span className="font-serif italic text-[11px] text-white/20 pt-1 shrink-0 w-16">{p.index}</span>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 flex-1">
                <h3 className="font-outfit font-black text-[1.4rem] text-white uppercase tracking-tight leading-tight shrink-0 w-64 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="font-serif italic text-[0.95rem] text-white/35 leading-relaxed lg:max-w-lg">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-wrapper relative flex flex-col sm:flex-row gap-0 border-t border-y border-white/5 overflow-hidden">
          {/* Scanning Line Effect */}
          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none"
          />
          
          {stats.map((s) => (
            <StatItem 
              key={s.label}
              label={s.label}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
